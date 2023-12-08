import React from 'react'
import logo from '../../assets/back-logo.svg'
import moveit from '../../assets/moveit.svg'
import github from '../../assets/github-icon.svg'
import arrow from '../../assets/arrow.svg'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const singIn = () => {
    navigate('/countdown')
  }
  singIn()
  return (
    <div id="LoginPage">
      <div className="logo-image">
        <img src={logo} />
      </div>
      <div className="login">
        <img src={moveit} />
        <div className="form">
          <p>Bem-vindo</p>
          <span>
            <img src={github} />
            Faça login com seu Github para começar
          </span>
          <div className="input-name">
            <input placeholder="Digite seu user name" />
            <button onClick={singIn}>
              <img src={arrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Login }
