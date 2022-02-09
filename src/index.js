import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
//поможет использовать стор на любой вложенности
import { Provider } from 'react-redux';

import App from './components/app';


//сздание хранилища включающее в себя стейт и редьюсер
const store = createStore(reducer);

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>  
      </Provider>  
    </React.StrictMode>,
    document.getElementById('root')
  );






