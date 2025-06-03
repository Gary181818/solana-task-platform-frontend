import { useWallet } from '@solana/wallet-adapter-react';

function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">📚 功能選單</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600">🏠 主頁</a></li>
          <li><a href="#" className="text-blue-600">🛠 建立任務</a></li>
          <li><a href="#" className="text-blue-600">📈 任務進度</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {children}
      </main>
    </div>
  );
}