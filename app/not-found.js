import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <h2>PAGINA NO ENCONTRADA</h2>
      <Link href="/">Volver al inicio</Link>
    </section>
  );
}
