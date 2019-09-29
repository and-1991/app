import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';

import Route from "./Route";
import {store} from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {renderRoutes(Route)}
      </div>
    </BrowserRouter>
  </Provider>, document.querySelector('#root'));