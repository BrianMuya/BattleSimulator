import React from 'react'
import { Wrapper, HealthBar, CharacterImage, Name } from '../styles/Character'

interface Props {
  name: string
  currentHealth: number,
  imagePath: string,
  isInverted?: boolean
}

const Character: React.FC<Props> = ({ name, currentHealth, imagePath, isInverted }) => {
  return (
    <Wrapper>
      <HealthBar currentHealth={currentHealth} >{currentHealth}</HealthBar>
      <CharacterImage src={imagePath} isInverted={isInverted} />
      <Name>{name}</Name>
    </Wrapper>
  )
}

export default Character
