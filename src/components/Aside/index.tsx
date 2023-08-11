import React, { useEffect, useState } from 'react'

import './styles.scss'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { House, Medal } from '../../assets/svgs'

const Aside: React.FC = () => {
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState<'ranking' | 'countdown'>(
    'countdown'
  )

  useEffect(() => {
    if (location.pathname == '/ranking') setCurrentPage('ranking')
    else if (location.pathname == '/countdown') setCurrentPage('countdown')
  }, [location.pathname])

  return location.pathname == '/' ? null : (
    <aside>
      <div className="img-wrapper">
        <img src={logo} />
      </div>
      <div className="links">
        <div className={`indicator ${currentPage}`} />
        <div className="link countdown">
          <Link to="/countdown">
            <House />
          </Link>
        </div>
        <div className="link ranking">
          <Link to="/ranking">
            <Medal />
          </Link>
        </div>
      </div>
    </aside>
  )
}

export { Aside }
