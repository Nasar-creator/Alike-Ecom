import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './routers';
import {Provider} from 'react-redux';
import store from './store.js';

// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css'
import { RouterProvider } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
