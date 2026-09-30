import { useState } from 'react'
import RaceCard from '../components/RaceCard/RaceCard'
import racas from '../data/racas.json'

export default function Home() {
  // armazena o texto digitado na busca
  const [busca, setBusca] = useState('')

  // calcula o total de formas de todas as racas
  const totalFormasGeral = racas.reduce((acc, r) => acc + r.formas.length, 0)

  // filtra as racas pelo nome, descricao ou origem
  const racasFiltradas = racas.filter((raca) => {
    const termo = busca.toLowerCase()
    return (
      raca.nome.toLowerCase().includes(termo) ||
      raca.descricao.toLowerCase().includes(termo) ||
      (raca.origem && raca.origem.toLowerCase().includes(termo))
    )
  })

  return (
    <section className="page">
      <div className="home-hero">
        <span className="scouter-tag">SISTEMA DE ANÁLISE DE KI // UNIVERSO 7</span>
        <h1 className="home-title">Radar de Guerreiros</h1>
        <p className="page-intro">
          Selecione uma raça para ativar o Scouter e monitorar suas transformações de combate.
        </p>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">{racas.length}</span>
          <span className="stat-desc">Raças Mapeadas</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">{totalFormasGeral}</span>
          <span className="stat-desc">Formas de Combate</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">1.5 Bi</span>
          <span className="stat-desc">Ki Máximo Registrado</span>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Filtrar por raça, planeta ou descrição..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        {busca && (
          <button
            type="button"
            className="btn-clear-search"
            onClick={() => setBusca('')}
          >
            Limpar
          </button>
        )}
      </div>

      {racasFiltradas.length === 0 ? (
        <div className="empty-results">
          <p>Nenhum guerreiro detectado pelo sensor do Scouter para &quot;{busca}&quot;.</p>
          <button
            type="button"
            className="btn btn-reset"
            onClick={() => setBusca('')}
          >
            Ver todos os guerreiros
          </button>
        </div>
      ) : (
        <div className="card-list">
          {racasFiltradas.map((raca) => {
            const poderBase = raca.formas[0]?.poder || 0
            const poderMaximo = raca.formas[raca.formas.length - 1]?.poder || 0
            return (
              <RaceCard
                key={raca.id}
                id={raca.id}
                nome={raca.nome}
                icone={raca.icone}
                origem={raca.origem}
                cor={raca.cor}
                descricao={raca.descricao}
                totalFormas={raca.formas.length}
                poderBase={poderBase}
                poderMaximo={poderMaximo}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}
