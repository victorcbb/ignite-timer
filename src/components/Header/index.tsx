import { Timer, Scroll } from 'phosphor-react'

import { HeaderContaier } from './styles'
import logoImage from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContaier>
      <img
        src={logoImage}
        alt="Logomarca com dois triângulos verdes, um sobrepondo o outro, apontando para o canto superior direito"
      />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={32} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={32} />
        </NavLink>
      </nav>
    </HeaderContaier>
  )
}
