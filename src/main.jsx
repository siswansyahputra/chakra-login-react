// main.jsx
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client'; // Mengimpor createRoot dari react-dom/client
import Login from './pages/Login';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  </React.StrictMode>
);
