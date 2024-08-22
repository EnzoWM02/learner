"use client";

import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import LnInput from "src/app/components/ui/LnInput";
import * as Yup from "yup";

export default function SignUp() {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail é obrigatório"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <Form>
            <LnInput name="email" label="E-mail" />
            <Button color="primary" size="lg" radius="full" type="submit">
              Registrar
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}
