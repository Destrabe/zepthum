// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  // Rutas protegidas
  const protectedRoutes = ["/dashboard", "/podium", "/chat"];

  if (
    protectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    if (!token) {
      // Si no hay token, redirige a login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Si intenta ir a login y YA tiene token => mándalo a dashboard
  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// 👇 Muy importante, define en qué rutas aplica el middleware
export const config = {
  matcher: ["/login", "/dashboard/:path*", "/podium/:path*", "/chat/:path*"],
};
