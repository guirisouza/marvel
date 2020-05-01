import React from 'react';
import {Route, Switch} from 'react-router-dom'
import CharacterDetails from '../components/character-details/CharacterDetails'
import { Toggle } from '../components/toggle/Toggle'
import Home from '../components/home/Home'
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
