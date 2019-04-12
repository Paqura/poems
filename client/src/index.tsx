import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
