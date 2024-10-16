import { Button, Radio, RadioGroup } from "@nextui-org/react";
import { Form, Formik } from "formik";
import LnRadioGroup from "src/app/components/input/LnRadioGroup";
import * as Yup from "yup";

export default function SingleChoice({ options, fnSubmit }) {
  return (
    <div>
      <Formik
        initialValues={{ value: "" }}
        validationSchema={Yup.object({
          value: Yup.string().required("Selecione pelo menos uma opção"),
        })}
        onSubmit={async (values) => {
          if (options[values.value].correct) {
            fnSubmit(true);
          } else {
            fnSubmit(false);
          }
        }}
      >
        {() => {
          return (
            <Form className="w-full">
              <div className="flex flex-col">
                <LnRadioGroup name="value">
                  {options.map((option, index) => (
                    <Radio
                      key={index}
                      value={String(index)}
                      classNames={{ base: "light", label: "text-white" }}
                    >
                      {option.title}
                    </Radio>
                  ))}
                </LnRadioGroup>
                <Button
                  className="w-10 mt-5"
                  color="primary"
                  size="lg"
                  type="submit"
                >
                  Enviar
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
