import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, Transaction, SystemProgram } from '@solana/web3.js';

const connection = new Connection('https://api.devnet.solana.com'); // or your custom RPC

function CreateTask() {
  const { publicKey, signTransaction } = useWallet();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!publicKey || !signTransaction) {
      alert('請先連接錢包');
      return;
    }

    try {
      // 模擬：將獎勵金額當作 lamports，建立一個假的交易（不實際發送）
      const lamports = parseFloat(reward) * 1e9;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: publicKey, // 模擬轉給自己
          lamports: lamports,
        })
      );

      transaction.feePayer = publicKey;
      transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

      const signedTx = await signTransaction(transaction);
      console.log('已簽名：', signedTx);

      alert(`任務 "${name}" 已模擬提交，獎勵 ${reward} SOL`);

    } catch (error) {
      console.error('交易錯誤', error);
      alert('任務提交失敗，請查看 console');
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>建立任務</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>任務名稱：</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>任務描述：</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>獎勵金額（SOL）：</label>
          <input type="number" value={reward} onChange={e => setReward(e.target.value)} required />
        </div>
        <button type="submit">📤 提交任務（模擬簽名）</button>
        <button type="cancel" onClick={() => { setName(''); setDescription(''); setReward('');}}>❌ 取消</button>
      </form>
    </div>
  );
}

export default CreateTask;