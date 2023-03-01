import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import qrDownloader from './qrDownloader';
import './style/App.css';

function App() {
  const [url, setUrl] = useState('')
  return (
    <div className="App">
      <input type="text" onChange={(e) => {setUrl(e.target.value)}}/>
      <QRCode id='QRCode' value={url} size={256} fgColor='#FFFFFF' bgColor='#000000'/>
      <button onClick={qrDownloader}>Download QRCode</button>
    </div>
  );
}

export default App;
