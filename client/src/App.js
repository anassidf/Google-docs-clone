import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	Switch,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Editor from './components/Editor';
//! 1. cleaning prev tool bar
function App() {
	return (
		<Router>
			<div id='editor_container'>
				<Switch>
					<Route path='/' exact>
						<Redirect to={`/documents/${uuidv4()}`} />
					</Route>
					<Route path='/documents/:id' exact>
						<Editor />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default App;
