import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';

import App from './pages/App';
import { rootReducer } from './modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

import { Hello } from "./components/Hello";

ReactDOM.render(
	<Hello compiler="TypeScript4" framework="React" />,
	document.getElementById("example"),
);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById("root"),
);
