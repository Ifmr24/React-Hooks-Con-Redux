// Modulos
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './scss/main.scss';
// Componentes, Layouts
import Index from './components/Index'
import Base from './layouts/Base';

const App: React.FC = () => {
  	return (
		<Provider store={store}>
			<Router>
				<Base>
					<Switch>    
						<Route exact path="/" component={Index} ></Route>
					</Switch>
				</Base>
        	</Router>
		</Provider>
  	);
}

export default App;
