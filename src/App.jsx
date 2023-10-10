import {  } from 'react'
import TextSize from './Components/TextSize'
import TextPerson from './Components/TextPerson'
import TextColor from './Components/TextColor'
import TextBackground from './Components/TextBackground'
import Images from './Components/Images'

function App() {

  return (
    <>
      <div className="container">
        <h1>Projeto</h1>
        <TextSize />

        <TextPerson />

        <TextColor />

        <TextBackground />

        <Images />
      </div>
    </>
  )
}

export default App
