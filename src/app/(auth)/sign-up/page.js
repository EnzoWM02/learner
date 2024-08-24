"use client";

import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import Link from "next/link";
import LnInput from "src/app/components/ui/LnInput";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  return (
    <>
      <div className="text-white w-full flex items-center justify-center text-4xl font-semibold mb-14">
        <span>Registre-se</span>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirm_password: "",
            birth_date: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("E-mail inválido")
              .required("E-mail é obrigatório"),
            password: Yup.string().required("Senha é obrigatória"),
            confirm_password: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "As senhas precisam ser iguais"
            ),
            birth_date: Yup.string().required(
              "Data de nascimento é obrigatória"
            ),
          })}
          onSubmit={(values) => {
            router.push("/sign-in");
          }}
        >
          {() => {
            return (
              <Form className="w-full">
                <div className="flex flex-col gap-5 ">
                  <div>
                    <LnInput name="email" type="email" label="E-mail" />
                    <LnInput name="password" type="password" label="Senha" />
                    <LnInput
                      name="confirm_password"
                      type="password"
                      label="Confirmar senha"
                    />
                    <LnInput name="birth_date" label="Data de nascimento" />
                  </div>
                  <Button color="default" size="lg" type="submit">
                    Criar conta
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
        <Link href="/sign-in" className="text-white font-bold">
          Voltar
        </Link>
      </div>
    </>
  );
}
