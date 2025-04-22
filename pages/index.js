// pages/index.js
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

export default function Home() {
  const [qr, setQr] = useState('');

  useEffect(() => {
    // QRCode.toDataURL('https://qr-code-lime-one.vercel.app/letstry')
      // QRCode.toDataURL('https://letstry-qr.com/letstry')
      QRCode.toDataURL('https://www.letstryfoods.com/?srsltid=AfmBOor9Ee6fF3tAdVonprruJ6wc-vvsCanXloiYqeNJU3qT5gYW1Tjj')
      .then(setQr)
      .catch(console.error);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Scan to Try Let's Try Foods</h1>
      {qr && <img src={qr} alt="QR Code" style={{ width: 250, height: 250 }} />}
      <p>This QR will redirect to our official website.</p>
    </div>
  );
}
