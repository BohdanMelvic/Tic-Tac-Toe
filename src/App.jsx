import { useState } from "react"
import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"

const App = () => {
  const [activePlayer, setActivePlayer] = useState('X')
  const handleActivePlayer = () => {
    setActivePlayer(currentActivePlayer => currentActivePlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initilName={'Vasa'} symbol={'X'} isActive={activePlayer === 'X'} />
          <Player initilName={'Petro'} symbol={'O'} isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard activePlayer={activePlayer} handleActivePlayer={handleActivePlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App
