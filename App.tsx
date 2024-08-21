import React from 'react';
import Cadastro from './src/Cadastro';
import Login from './src/Login'
import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './src/estilos/temas';
import Rotas from './src/Rotas'

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}
