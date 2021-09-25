import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import SVGuide from './js/components/SVGuide';
import registerServiceWorker from './js/service/registerServiceWorker';

ReactDOM.render(<SVGuide />, document.getElementById('root'));
registerServiceWorker();
