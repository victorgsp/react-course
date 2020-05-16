import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'


export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/Todo' exact={true} component={Todo} />
            <Route path='/About' exact={true} component={About} />
            <Redirect from='*' to='/Todo'/>
        </Switch>
    </BrowserRouter>
)