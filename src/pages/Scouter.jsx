import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton/BackButton'
import TransformCard from '../components/TransformCard/TransformCard'
import racas from '../data/racas.json'
import oponentes from '../data/oponentes.json'
import { tocarBipScouter, tocarPowerUp } from '../utils/sound'

export default function Scouter() {
  // pega o id da raca pela url
  const { id } = useParams()
  const raca = racas.find((r) => r.id === id)

  // nivel atual da transformacao
  const [nivel, setNivel] = useState(0)

  // oponente sorteado na simulacao de batalha
  const [oponente, setOponente] = useState(null)

  if (!raca) {
    return (
      <section className="page">
        <h1 className="not-found-title">Raça não detectada</h1>
        <p className="page-intro">Nenhum guerreiro correspondente foi encontrado no banco de dados.</p>
        <BackButton texto="Voltar ao Radar" />
      </section>
    )
  }

  const total = raca.formas.length
  const forma = raca.formas[nivel]
  const poderBase = raca.formas[0]?.poder || 1
  const noLimite = nivel === total - 1

  // avanca para a proxima transformacao
  function handlePowerUp() {
    if (!noLimite) {
      tocarPowerUp()
      setNivel((prev) => prev + 1)
    }
  }

  // volta para a forma base
  function handleReset() {
    tocarBipScouter()
    setNivel(0)
    setOponente(null)
  }

  // sorteia um adversario com math.random
  function handleEscanearOponente() {
    tocarBipScouter()
    const indiceSorteado = Math.floor(Math.random() * oponentes.length)
    setOponente(oponentes[indiceSorteado])
  }

  // calcula o resultado do combate
  const vitoria = oponente ? forma.poder >= oponente.poder : false

  return (
    <section className="page">
      <div className="scouter-top-nav">
        <BackButton texto="Escolher outra raça" />
      </div>

      <TransformCard
        raca={raca.nome}
        forma={forma.nome}
        poder={forma.poder}
        cor={raca.cor}
        nivel={nivel}
        total={total}
        poderBase={poderBase}
      />

      <div className="actions">
        <button
          type="button"
          className="btn btn-power"
          onClick={handlePowerUp}
          disabled={noLimite}
        >
          {noLimite ? '⚡ Limite Alcançado' : '⚡ POWER UP'}
        </button>

        <button
          type="button"
          className="btn btn-battle"
          onClick={handleEscanearOponente}
        >
          🎯 Simular Batalha
        </button>

        <button
          type="button"
          className="btn btn-reset"
          onClick={handleReset}
          disabled={nivel === 0 && !oponente}
        >
          Resetar
        </button>
      </div>

      {oponente && (
        <div className={`battle-panel ${vitoria ? 'battle-win' : 'battle-danger'}`}>
          <div className="battle-header">
            <span className="battle-badge">
              {vitoria ? '✓ ALVO SUPERADO' : '⚠ PERIGO DETECTADO'}
            </span>
            <button
              type="button"
              className="btn-close-battle"
              onClick={() => setOponente(null)}
            >
              ✕
            </button>
          </div>

          <div className="battle-body">
            <div className="battle-fighter">
              <span className="fighter-role">Seu Guerreiro</span>
              <strong>{forma.nome}</strong>
              <span className="fighter-ki">{forma.poder.toLocaleString('pt-BR')} Ki</span>
            </div>

            <span className="battle-vs">VS</span>

            <div className="battle-fighter">
              <span className="fighter-role">Oponente Sorteado</span>
              <strong>{oponente.nome}</strong>
              <span className="fighter-ki">{oponente.poder.toLocaleString('pt-BR')} Ki</span>
            </div>
          </div>

          <p className="battle-desc">{oponente.descricao}</p>
          <p className="battle-conclusion">
            {vitoria
              ? `Vitória! O seu nível de poder ultrapassa o de ${oponente.nome}.`
              : `Atenção: O poder de ${oponente.nome} é superior! Realize mais um POWER UP para vencer.`}
          </p>
        </div>
      )}

      <div className="forma-section">
        <h3 className="forma-section-title">Trilha de Transformações</h3>
        <ol className="forma-lista">
          {raca.formas.map((f, i) => (
            <li
              key={f.nome}
              className={i === nivel ? 'ativa' : i < nivel ? 'feita' : ''}
              onClick={() => {
                tocarBipScouter()
                setNivel(i)
              }}
              title="Clique para ir direto a esta forma"
            >
              <span className="forma-step-num">{i + 1}</span>
              <span className="forma-step-name">{f.nome}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
