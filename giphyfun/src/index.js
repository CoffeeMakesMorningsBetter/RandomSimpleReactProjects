import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Giphy from './Giphy';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Giphy />, document.getElementById('root'));
registerServiceWorker();
