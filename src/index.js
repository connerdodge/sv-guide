import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import SVGuide from './js/sv_guide';
import registerServiceWorker from './js/register_service_worker';

ReactDOM.render(<SVGuide />, document.getElementById('root'));
registerServiceWorker();
