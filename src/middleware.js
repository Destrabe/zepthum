export async function onRequest(context, next) {
  const token = context.cookies.get("token")?.value;
  const protectedRoutes = ["/dashboard", "/podium", "/chat"];

  // Ignora recursos estáticos
  if (context.url.pathname.includes(".")) {
    return next();
  }

  // Si está autenticado y entra a /login, redirige
  if (context.url.pathname === "/login" && token) {
    return context.redirect("/dashboard");
  }

  // Si NO está autenticado y entra a una ruta protegida, redirige a /login
  if (protectedRoutes.includes(context.url.pathname) && !token) {
    return context.redirect("/login");
  }

  return next();
}
