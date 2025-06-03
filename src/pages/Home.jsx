import { useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (publicKey) {
      navigate('/dashboard');
    }
  }, [publicKey, navigate]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <WalletMultiButton />
    </div>
  );
}

export default Home;