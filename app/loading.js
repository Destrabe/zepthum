export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <section style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Cargando...</h2>
        <p>Por favor espera un momento ⏳</p>
      </section>
    </div>
  );
}
