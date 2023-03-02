import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import qrDownloader from './qrDownloader';
import './style/App.css';
import Header from './components/header';
import Form from './components/form';

function App() {
  const [url, setUrl] = useState('')
  const [color, setColor] = useState(['#FFFFFF', '#000000'])
  return (
    <div className="App">
      <Header />
      <section>
        <Form setUrl={setUrl} color={color} setColor={setColor}/>
        <div>
          <h4>Your QR Code will appear here</h4>
          <QRCode id='QRCode' value={url} size={256} fgColor={color[0]} bgColor={color[1]} />
          <button onClick={qrDownloader}>Download QRCode</button>
        </div>
      </section>
    </div>
  );
}

export default App;
