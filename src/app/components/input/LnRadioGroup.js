"use client";

import { RadioGroup } from "@nextui-org/react";
import LnField from "src/app/components/input/LnField";

export default function LnRadioGroup({
  name = "",
  label = "",
  color = "secondary",
  variant = "flat",
  type = "text",
  children,
}) {
  return (
    <LnField
      component={RadioGroup}
      name={name}
      label={label}
      color={color}
      variant={variant}
      type={type}
      classNames={{ undefined }}
    >
      {children}
    </LnField>
  );
}
