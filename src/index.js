import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import SVGuide from './js/SVGuide';
import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(<SVGuide />, document.getElementById('root'));
registerServiceWorker();
