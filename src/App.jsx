import Player from "./components/Player/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initilName={'Vasa'} symbol={'X'}/>
          <Player initilName={'Petro'} symbol={'O'}/>
        </ol>
        Game board
      </div>
      LOG
    </main>
  )
}

export default App
