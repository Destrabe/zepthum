import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 flex-1 overflow-auto">
          <h2 className="text-2xl">Página de Chat</h2>
        </main>
      </div>
    </div>
  );
}
