import react from 'react'

// import './App.css'
import { Counter } from './components/Counter';
import { Basculer } from './components/Basculer';
import { InputNom } from './components/InputNom';
import { Couleur } from './components/Couleur';
import { List } from './components/List';
import { Horloge } from './components/Horlog';
import { GitHubFollowers } from './components/GIt';
import TraqueurSouris from './components/TraqSour';
import { Panier } from './components/Panier';

function App() {

  return (
    <>
      {/* <hr />
      <Counter></Counter>
      <br />
      <br />
      <br />
      <hr />
      <Basculer></Basculer>
      <br />
      <br />
      <br />
      <hr />
      <InputNom></InputNom>
      <br />
      <br />
      <br />
      <hr />
      <Couleur></Couleur>
      <br />
      <br />
      <br />
      <hr />
      <List></List>
      <br />
      <br />
      <br />
      <hr />
      <Horloge></Horloge>
      <br />
      <br />
      <br />
      <hr />
      <GitHubFollowers></GitHubFollowers>
      <br />
      <br />
      <br />
      <hr />
      <TraqueurSouris></TraqueurSouris> */}


      <Panier></Panier>
    </>
  )
}

export default App
