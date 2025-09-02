import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login"); // Redirige inmediatamente al cargar la página
  return null; // No renderiza nada
}
