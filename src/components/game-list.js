import styles from '../components/game-list.module.css'
import GameCard from '../components/game-card'

export default function GameList({ games }) {
  return (
    <ul className={styles.gameList}>
      {games.map((game) => (
        <GameCard key={game.id} game={game}/>
      ))}
    </ul>
  )
}
