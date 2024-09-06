"use client";

import { Input } from "@nextui-org/react";
import { Field } from "formik";

export default function LnInput({
  component = Input,
  name = "",
  label = "",
  color = "secondary",
  variant = "flat",
  type = "text",
}) {
  const Component = component;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <Component
          {...field}
          type={type}
          classNames={{
            base: "h-[80px]",
            label: "text-black/50 dark:text-white/90",
            input: ["text-black/90 dark:text-white/90"],
          }}
          variant={variant}
          color={color}
          label={label}
          isInvalid={
            form.submitCount > 0 && form.touched[name] && form.errors[name]
          }
          errorMessage={form.errors[name]}
          onChange={(event) => {
            form.setFieldValue(name, event?.target?.value ?? event);
          }}
        />
      )}
    </Field>
  );
}
