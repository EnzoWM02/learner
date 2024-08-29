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
          type={type}
          classNames={{
            base: "h-[80px]",
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          variant={variant}
          color={color}
          label={label}
          isInvalid={
            form.submitCount > 0 && form.touched[name] && form.errors[name]
          }
          errorMessage={form.errors[name]}
          {...field}
        />
      )}
    </Field>
  );
}
