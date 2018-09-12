import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorGrid from './ColorGrid';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ColorGrid />, document.getElementById('root'));
registerServiceWorker();
