export async function onRequest(context, next) {
  const isLoggedIn = context.cookies.get("token")?.value;
  const protectedRoutes = ["/dashboard", "/podium", "/chat"];

  // Ignora recursos estáticos (archivos con punto en el nombre)
  if (context.url.pathname.includes(".")) {
    return next();
  }

  // Si está autenticado y entra a /login, redirige a /
  if (context.url.pathname === "/login" && isLoggedIn) {
    return context.redirect("/dashboard");
  }

  // Si NO está autenticado y entra a una ruta protegida, redirige a /login
  if (protectedRoutes.includes(context.url.pathname) && !isLoggedIn) {
    return context.redirect("/login");
  }

  return next();
}
