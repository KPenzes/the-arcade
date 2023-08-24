import styles from './game-card.module.css'

export default function GameCard({ game }) {
  return (
    <div className={styles.gameCard}>
      <h1 key={game.id}>{game.name}</h1>
    </div>
  )
}
