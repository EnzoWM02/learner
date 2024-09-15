"use client";

import { I18nProvider } from "@react-aria/i18n";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ session, children }) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <I18nProvider locale="pt-BR">
          <ToastContainer position="bottom-left" />
          {children}
        </I18nProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
