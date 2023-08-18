import styles from '../components/game-list.module.css'
import GameCard from '../components/game-card'

export default function GameList({ games }) {
  return (
    <div className={styles.gameList}>
      {games.map((game) => (
        <GameCard game={game}/>
      ))}
    </div>
  )
}
