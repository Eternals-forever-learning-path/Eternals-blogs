import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Homepage from 'views/homepage/Homepage';
import Blogpage from 'views/blogpage/Blogpage';
import './App.scss';

function App() {
	return (
		<Router>
			<Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/blog/:blogid' component={Blogpage} />
      </Switch>
    </Router>
	);
}

export default App;
