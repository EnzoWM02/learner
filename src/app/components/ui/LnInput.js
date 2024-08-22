"use client";

import { Input } from "@nextui-org/react";
import { Field } from "formik";

export default function LnInput({
  name = "",
  label = "",
  color = "primary",
  variant = "underlined",
}) {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <Input
          variant={variant}
          color={color}
          label={label}
          isInvalid={form.submitCount > 0 && form.touched[name] && form.errors[name]}
          errorMessage={form.errors[name]}
          {...field}
        >
          {console.log(form)}
        </Input>
      )}
    </Field>
  );
}
