import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <nav className="flex flex-col gap-4">
        <ul>
          <li>
            <Link href="/chat" className="hover:underline">
              Chat
            </Link>
          </li>
          <li>
            <Link href="/podium" className="hover:underline">
              Podium
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
