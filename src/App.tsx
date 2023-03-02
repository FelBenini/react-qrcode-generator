import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import qrDownloader from './qrDownloader';
import './style/App.css';
import Header from './components/header';
import Form from './components/form';

function App() {
  const [url, setUrl] = useState('')
  const [color, setColor] = useState(['#FFFFFF', '#000000'])
  const [scale, setScale] = useState(240)
  return (
    <div className="App">
      <Header />
      <section>
        <Form setUrl={setUrl} color={color} setColor={setColor} scale={scale} setScale={setScale}/>
        <div id='QrContainer'>
          <h4>Your QR Code will appear here</h4>
          {url !== '' ? <QRCode id='QRCode' value={url} size={scale} fgColor={color[0]} bgColor={color[1]} />: <span></span>}
          <button onClick={qrDownloader}>Download QRCode</button>
        </div>
      </section>
    </div>
  );
}

export default App;
