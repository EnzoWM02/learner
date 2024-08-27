"use client";

import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import Link from "next/link";
import LnInput from "src/app/components/ui/LnInput";
import * as Yup from "yup";

export default function SignIn() {
  return (
    <>
      <div className="text-white w-full flex items-center justify-center text-4xl font-semibold my-14 flex-col">
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
            password: Yup.string().required("Senha é obrigatória"),
          })}
          onSubmit={(values) => {
            console.log(values);
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
        <span className="text-white">
          Não tem uma conta?
          <Link href="/sign-up" className="font-bold">
            {" "}
            Registre-se
          </Link>
        </span>
      </div>
    </>
  );
}
