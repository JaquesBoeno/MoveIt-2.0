import React from 'react'

import './styles.scss'
import { CardRanking } from '../../components/CardRanking'

const Ranking: React.FC = () => {
  return (
    <div id="RankingPage">
      <h1>Ranking</h1>
      <div className="Ranking">
        <div className="RankingHeader">
          <span>posição</span>
          <span>usuário</span>
          <span>desafios</span>
          <span>experiência</span>
        </div>
        <CardRanking name="JaquesBoeno" level={43} completedChallenges={45} experience={150000} />
        <CardRanking name="JaquesBoeno" level={43} completedChallenges={45} experience={150000} />
        <CardRanking name="JaquesBoeno" level={43} completedChallenges={45} experience={150000} />
        <CardRanking name="JaquesBoeno" level={43} completedChallenges={45} experience={150000} />
      </div>
    </div>
  )
}

export { Ranking }
