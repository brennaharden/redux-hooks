import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './ducks/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
    </Provider>
    {/* Still need to wrap the provider around your app! */}
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
