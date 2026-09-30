import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-brand">
        <span className="scouter-lens" />
        <span className="header-logo">SCOUTER DBZ</span>
      </Link>
      <div className="header-status">
        <span className="status-dot">● SENSOR ONLINE</span>
        <span className="header-sub">Simulador de Nível de Poder</span>
      </div>
    </header>
  )
}
