import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/uikit/dist/js/uikit.min.js";
import "../node_modules/uikit/dist/css/uikit.min.css"
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import "./index.css";
import Snowfall from 'react-snowfall';

UIkit.use(Icons);

ReactDOM.render(
  <React.StrictMode>
    <div style={{ background: '#282c34' }}>
      <Snowfall snowflakeCount={200} style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
      }} />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

