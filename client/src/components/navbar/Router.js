import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from '../auth/Landing'
import Profile from '../profile/Profile'
import AddTodo from '../todos/AddTodo'

const Router = () => {
    return( 
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component = {Landing} />
                <Route path='/profile' component = {Profile} />
                <Route path='/todos' component = {AddTodo} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;