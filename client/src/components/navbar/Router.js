import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from '../auth/Landing'
import Profile from '../profile/Profile'
import TodoList from '../todos/TodoList'

const Router = () => {
    return( 
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component = {Landing} />
                <Route path='/profile' component = {Profile} />
                <Route path='/todos' component = {TodoList} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;