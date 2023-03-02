import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './style/App.css';
import Header from './components/header';
import Form from './components/form';
import DownloadButton from './components/downloadButton';
import { BiQr } from 'react-icons/bi'

function App() {
  const [url, setUrl] = useState('')
  const [color, setColor] = useState(['#000000', '#FFFFFF'])
  const [scale, setScale] = useState(240)
  return (
    <div className="App">
      <Header />
      <section>
        <Form setUrl={setUrl} color={color} setColor={setColor} scale={scale} setScale={setScale}/>
        <div id='QrContainer'>
          <h4>Your QR Code will appear here</h4>
          {url !== '' ? 
          <QRCode id='QRCode' value={url} size={scale} fgColor={color[0]} bgColor={color[1]} />: 
          <span id='blankQR'><BiQr size={'100%'} color={'B2B9BB'}/></span>}
          <DownloadButton/>
        </div>
      </section>
    </div>
  );
}

export default App;
