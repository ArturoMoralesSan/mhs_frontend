import React, { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [data, setData] = useState<string>('');
  const [blockHash, setBlockHash] = useState<string | undefined>(undefined);

  const contractAddress = '0x3c59854A08AEb3f7d8249Be2eea11836708a768B'; // Reemplaza con la dirección de tu contrato
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:7545'); // Cambia esto para apuntar a tu red Ganache
  const contract = new ethers.Contract(contractAddress, ['function storeData(string memory data) public', 'function blockHash() public view'], provider);
  const signer = provider.getSigner();

  const storeData = async () => {
    try {
        const tx = await contract.connect(signer).storeData(data);
        const receipt = await tx.wait();
        console.log('Transaction receipt:', receipt);
        const hash = await receipt.blockHash;
        setBlockHash(hash);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <h1>Smart Contract Interaction</h1>
        <input type="text" placeholder="Enter data" value={data} onChange={(e) => setData(e.target.value)} />
        <button onClick={storeData}>Store Data</button>
        {blockHash && <p>Block Hash: {blockHash}</p>}
    </div>
    );
}

export default App;