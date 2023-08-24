import styles from './game-card.module.css'

export default function GameCard({ game }) {
  return (
    <div className={styles.gameCard}>
      <li key={game.id}>{game.name}</li>
    </div>
  )
}
