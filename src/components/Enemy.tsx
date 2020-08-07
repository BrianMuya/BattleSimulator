import React from 'react'
import Character from './Character'
import { Wrapper } from '../styles/Enemy'

import EnemyImage from '../Images/Bowser.png'

interface Props {
  currentHealth: number;
}

const Enemy: React.FC<Props> = ({ currentHealth }) => {
  return (
    <Wrapper>
      <Character name="Enemy" currentHealth={currentHealth} imagePath={EnemyImage} isInverted />
    </Wrapper>
  )
}

export default Enemy
