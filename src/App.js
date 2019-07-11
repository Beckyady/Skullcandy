import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch,faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import SkullCandy from './components/skullcandy/skullcandy';
library.add(faUser, faSearch, faShoppingBag);


function App() {
  return (
    <div className="">
      <SkullCandy/>
    </div>
  );
}

export default App;
