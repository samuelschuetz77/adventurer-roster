import Character from './components/Character';
import './App.css';

export default function App() {
  return (
    <>
      <h1>Adventurer Roster</h1>
      <Character
        name="Garg"
        characterClass="Guy"
        level={8}
        health={120}
        title = "Slop Mop"
      />
      <Character
        name="Barbara"
        characterClass="rainbowHair"
        level={6}
        health={55}
        title="The empath"
      />
      <Character
        name="Thor"
        characterClass="NorwayGuy"
        level={10}
        health={145}
      />
      <Character
        name="Hector"
        characterClass="roofer"
        level={5}
        health={70}
        title = "Fire the new guy, he's slow"
      />
    </>
  );
}

