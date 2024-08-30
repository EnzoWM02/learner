"use client";

import { I18nProvider } from "@react-aria/i18n";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <I18nProvider locale="pt-BR">
        <ToastContainer position="bottom-left" />
        {children}
      </I18nProvider>
    </NextUIProvider>
  );
}
