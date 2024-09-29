"use client";

import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import Link from "next/link";
import LnInput from "src/app/components/input/LnField";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import handleClientError from "src/app/utils/helpers/handleClientError";
import ErrorCodes from "src/app/utils/constants/ErrorCodes";
import { useRouter } from "next/navigation";
import handleClientAction from "src/app/utils/helpers/handleClientAction";

export default function SignIn() {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex items-center justify-center text-4xl font-semibold my-14 flex-col">
        <span>Bem-vindo ao</span>
        <span className="learner-title font-bold">Learner</span>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("E-mail inválido")
              .required("E-mail é obrigatório"),
            password: Yup.string()
              .min(8, "A senha deve ter no mínimo 8 digitos")
              .required("Senha é obrigatória"),
          })}
          onSubmit={async (values) => {
            let res = await handleClientAction(
              signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
              }),
              "Logando..."
            );

            if (res?.ok) {
              router.push("/dashboard");
            } else {
              handleClientError({
                type: ErrorCodes.LOGIN,
                message: "E-mail ou senha inválidos",
              });
            }
          }}
        >
          {() => {
            return (
              <Form className="w-full">
                <div className="flex flex-col gap-5 ">
                  <div>
                    <LnInput name="email" type="email" label="E-mail" />
                    <LnInput name="password" type="password" label="Senha" />
                  </div>
                  <Button color="default" size="lg" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
        <span className="">
          Não tem uma conta?
          <Link href="/sign-up" className="font-bold text-primary-700">
            {" "}
            Registre-se
          </Link>
        </span>
      </div>
    </>
  );
}
