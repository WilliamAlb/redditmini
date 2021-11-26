import React from 'react';


import { ThemeProvider } from 'styled-components';
import { Dashboard } from '../features/dashboard/Dashboard';

import { Navbar } from '../features/navbar/Navbar';

import { Theme } from '../utils/CONSTS';

function App() {
  return (
    <ThemeProvider theme = {Theme}>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Dashboard>
          
        </Dashboard>
      </main>
    </ThemeProvider>
  );
}

export default App;
