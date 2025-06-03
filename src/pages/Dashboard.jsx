import React from 'react';
import './pageCSS/Dashboard.css';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-left">
          <img src="src/assets/logo.jpg" alt="Logo" className="topbar-logo" />
          <span className="topbar-title">Solana 任務平台</span>
        </div>
        <div className="topbar-wallet">
          <WalletMultiButton />
        </div>
      </div>

      {/* Sidebar */}
      <div className="dashboard-body">
        <div className="sidebar">
          <h2>功能選單</h2>
          <ul>
            
            <li><button onClick={() => navigate('/')}>返回主頁</button></li>
            <li><button onClick={() => navigate('/create-task')}>➕ 建立任務</button></li>
            <li>儀表板</li>
          </ul>
        </div>

        {/* Main Content */}
       

        {/* Task Progress */}
        <div className="task-section">
          <h1>📊 儀表板</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;