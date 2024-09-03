import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const session = await getSession();
  console.log("SESSAO", session, request.url);

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - /sign-in
     * - /sign-up
     */
    "/((?!sign-in|sign-up|api/auth|_next).*)",
  ],
};
