export { default } from "next-auth/middleware"

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
