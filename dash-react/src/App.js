import React from "react";
import Rotas from './routes'

import Favicon from 'react-favicon';
import IconOn from '../src/html-css-template/imagens/img-logo/logoOn.png'

function App() {

  return (
    <>
      <Rotas />
      <Favicon url={IconOn} />
    </>
  );
}

export default App;