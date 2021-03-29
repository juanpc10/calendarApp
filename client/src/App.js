import './app.css';
import React from 'react';

import { GlobalProvider } from './context/globalState';

import List from './containers/list';
import Form from './components/form';


function App() {

  return (
    <GlobalProvider>
      <div className="list-container" id="list" >
        <List />
        <Form />
      </div>
    </GlobalProvider>
  );
}

export default App;
