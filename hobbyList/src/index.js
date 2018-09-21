import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hobby from './Hobby';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hobby />, document.getElementById('root'));
registerServiceWorker();
