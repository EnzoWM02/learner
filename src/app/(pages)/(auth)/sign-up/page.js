"use client";

import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import Link from "next/link";
import LnField from "src/app/components/ui/LnField";
import * as Yup from "yup";
import { createUserAction } from "src/app/api/actions/user/createUserAction";
import handleAction from "src/app/utils/helpers/handleAction";
import { DatePicker } from "@nextui-org/react";

export default function SignUp() {
  return (
    <>
      <div className="text-white w-full flex items-center justify-center text-4xl font-semibold mb-5">
        <span>Registre-se</span>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            birth_date: null,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Nome é obrigatório"),
            email: Yup.string()
              .email("E-mail inválido")
              .required("E-mail é obrigatório"),
            password: Yup.string().required("Senha é obrigatória"),
            confirm_password: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "As senhas precisam ser iguais"
            ),
            birth_date: Yup.date().required("Data de nascimento é obrigatória"),
          })}
          onSubmit={async (values) => {
            const submitValues = {
              ...values,
              birth_date: new Date(values.birth_date.toString()),
            };
            await handleAction(createUserAction(submitValues), "Criando conta");
          }}
        >
          {() => {
            return (
              <Form className="w-full">
                <div className="flex flex-col">
                  <div>
                    <LnField
                      name="name"
                      description="Esse é o seu apelido"
                      label="Nome"
                    />
                    <LnField name="email" type="email" label="E-mail" />
                    <LnField name="password" type="password" label="Senha" />
                    <LnField
                      name="confirm_password"
                      type="password"
                      label="Confirmar senha"
                    />
                    <LnField
                      component={DatePicker}
                      name="birth_date"
                      label="Data de nascimento"
                    />
                  </div>
                  <div className="grid grid-cols-2 w-full items-center justify-center">
                    <Link href="/sign-in" className="text-white font-bold text-center">
                      Voltar
                    </Link>
                    <Button color="default" size="lg" type="submit">
                      Criar conta
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
