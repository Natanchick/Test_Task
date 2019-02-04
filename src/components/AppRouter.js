import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PageTask from './PageTask';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/page/:id' component={PageTask} />
        </Switch>
    )
}


export default AppRouter;