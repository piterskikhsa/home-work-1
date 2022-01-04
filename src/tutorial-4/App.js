import React from 'react'
import './App.css'
import EmptyBlock from './components/EmptyBlock'
import Phrase from './components/Phrase'
import generatePhrase from './utils'

function App() {
  const [phrases, setPhrase] = React.useState([])

  const handlePhraseGenerate = () => {
    const newPhrase = generatePhrase()
    setPhrase([newPhrase, ...phrases])
  }

  const handlePhraseClean = () => {
    setPhrase([])
  }

  return (
    <div className="App">
      <div className="wrapper">
        {phrases.length > 0 ? (
          <div className="list">
            {phrases.map((phrase, index) => (
              <Phrase key={`${phrase} ${index}`} text={phrase} />
            ))}
          </div>
        ) : (
          <EmptyBlock />
        )}
        <button className="btn btn_generate" onClick={handlePhraseGenerate}>
          Сгенерировать
        </button>
        <button className="btn btn_clear" onClick={handlePhraseClean}>
          Очистить
        </button>
      </div>
    </div>
  )
}

export default App
