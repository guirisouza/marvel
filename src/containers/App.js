import React from 'react';
import {Route, Switch} from 'react-router-dom'
import CharacterDetails from '../pages/CharacterDetail/index'
import { Toggle } from '../components/Toggle/index'
import Home from '../pages/Home/index'
import '../App.css'

const App = () => {
  return (
    <>
      <Switch>
        <Route  exact path='/' component={Home}/>
      </Switch>
      <Switch>
        <Route  exact path='/character-details' component={CharacterDetails}/>
      </Switch>
      <Toggle/>
    </>
  )
}

export default App;
