import { Link } from 'react-router-dom'
import './BackButton.css'

export default function BackButton({ to = '/', texto = 'Voltar' }) {
  return (
    <Link to={to} className="back-button">
      <span className="back-arrow">←</span> {texto}
    </Link>
  )
}
