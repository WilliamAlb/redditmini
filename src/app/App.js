import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Navbar } from '../features/navbar/Navbar';
import { Theme } from '../utils/CONSTS';

function App() {
  return (
    <ThemeProvider theme = {Theme}>
      <header>
        <Navbar></Navbar>
      </header>
      <main>

      </main>
    </ThemeProvider>
  );
}

export default App;
