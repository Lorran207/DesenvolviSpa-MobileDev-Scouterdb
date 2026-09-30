import './TransformCard.css'

export default function TransformCard({ raca, forma, poder, cor, nivel, total, poderBase = 1000 }) {
  // calcula o brilho proporcional ao nivel da forma
  const intensidade = total > 1 ? nivel / (total - 1) : 0
  const brilho = 12 + Math.round(intensidade * 65)
  const porcentagemKi = Math.round(intensidade * 100)
  const multiplicador = poderBase > 0 ? (poder / poderBase).toFixed(0) : 1

  return (
    <div
      className="transform-card"
      style={{
        '--aura': cor,
        '--brilho': `${brilho}px`,
      }}
    >
      <div className="scouter-reticle top-left" />
      <div className="scouter-reticle top-right" />
      <div className="scouter-reticle bottom-left" />
      <div className="scouter-reticle bottom-right" />

      <div className="transform-card-header">
        <span className="transform-card-raca">{raca}</span>
        <span className="transform-card-step">
          Forma {nivel + 1} de {total}
        </span>
      </div>

      <div className="transform-card-aura-wrap">
        <div className="transform-card-aura" />
        <div className="transform-card-pulse" />
      </div>

      <h2 className="transform-card-title">{forma}</h2>

      <div className="transform-card-display">
        <span className="scouter-unit">KI:</span>
        <span className="transform-card-poder">{poder.toLocaleString('pt-BR')}</span>
      </div>

      <div className="ki-gauge-container">
        <div className="ki-gauge-labels">
          <span>Potencial de Combate</span>
          <span>{porcentagemKi}%</span>
        </div>
        <div className="ki-gauge-track">
          <div className="ki-gauge-fill" style={{ width: `${Math.max(10, porcentagemKi)}%` }} />
        </div>
      </div>

      <div className="transform-card-badges">
        {multiplicador > 1 && (
          <span className="badge-mult">{multiplicador}x poder base</span>
        )}
        {poder > 8000 && (
          <span className="badge-over9000">🔥 É mais de 8.000!</span>
        )}
        {nivel === total - 1 && (
          <span className="badge-max">⚡ Poder Máximo</span>
        )}
      </div>
    </div>
  )
}
