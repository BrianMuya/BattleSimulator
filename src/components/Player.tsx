import React from 'react'
import Character from './Character'
import { Wrapper } from '../styles/Player'

import PlayerImage from '../Images/Link.png'

interface Props {
  currentHealth: number;
}

const Player: React.FC<Props> = ({ currentHealth }) => {
  return (
    <Wrapper>
      <Character name="Player" currentHealth={currentHealth} imagePath={PlayerImage} />
    </Wrapper>
  )
}

export default Player
