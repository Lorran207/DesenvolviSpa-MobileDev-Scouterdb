import { Link } from 'react-router-dom'
import './RaceCard.css'

export default function RaceCard({
  id,
  nome,
  cor,
  descricao,
  totalFormas,
  icone = '⚡',
  origem = 'Universo 7',
  poderMaximo = 0,
}) {
  return (
    <Link to={`/scouter/${id}`} className="race-card" style={{ '--aura': cor }}>
      <div className="race-card-corner top-left" />
      <div className="race-card-corner top-right" />
      <div className="race-card-corner bottom-left" />
      <div className="race-card-corner bottom-right" />

      <div className="race-card-header">
        <span className="race-card-origem">{origem}</span>
        <span className="race-card-badge">{totalFormas} formas</span>
      </div>

      <div className="race-card-aura-wrap">
        <div className="race-card-aura" />
        <span className="race-card-icon">{icone}</span>
      </div>

      <h3 className="race-card-title">{nome}</h3>
      <p className="race-card-desc">{descricao}</p>

      {poderMaximo > 0 && (
        <div className="race-card-stats">
          <span className="stat-label">Ki Máx:</span>
          <span className="stat-value">{poderMaximo.toLocaleString('pt-BR')}</span>
        </div>
      )}

      <div className="race-card-action">
        <span>Escanear Guerreiro</span>
        <span className="action-arrow">→</span>
      </div>
    </Link>
  )
}
