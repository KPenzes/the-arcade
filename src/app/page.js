import GameList from '../components/game-list'

export default function HomePage() {
  const games = [
    {id: 0, name: 'TETRIS', link: '#'},
    {id: 1, name: 'SNAKE', link: '#'}
  ]

  return (
    <>
      <h1>Welcome to the ARCADE</h1>
      <p>The Arcade and all it's games were created using Javascript and/or React.js.</p>
      <p>This website is a work in progress.</p>
    <GameList games={games}/>
    </>
  )
}
