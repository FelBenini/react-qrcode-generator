import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import qrDownloader from './qrDownloader';
import './style/App.css';
import Header from './components/header';
import Form from './components/form';

function App() {
  const [url, setUrl] = useState('')
  return (
    <div className="App">
      <Header/>
      <Form setUrl={setUrl}/>
      <QRCode id='QRCode' value={url} size={256} fgColor='#FFFFFF' bgColor='#000000'/>
      <button onClick={qrDownloader}>Download QRCode</button>
    </div>
  );
}

export default App;
