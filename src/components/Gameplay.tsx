import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'

import Enemy from './Enemy'
import Player from './Player'
import AttackRoll from './AttackRoll'

import { Wrapper, GameOverButton, VictoryButton } from '../styles/Gameplay'
import * as acions from '../redux/actions'
import { startingHP } from '../redux/reducers/CharacterStateReducer'

interface Props {
  enemyHealth?: number
  playerHealth?: number
  resetGame?: () => void
}

const Gameplay: React.FC<Props> = ({ playerHealth = startingHP, enemyHealth = startingHP, resetGame }) => {
  const [gameOverText, setGameOverText] = useState('')
  const [victoryText, setVictoryText] = useState('')

  useEffect(() => {
    if (playerHealth <= 0) {
      setGameOverText("Defeat! Play again?")
    }

    if (enemyHealth <= 0) {
      setVictoryText("Victory! Play again?")
    }
  }, [playerHealth, enemyHealth])

  const handlePlayAgain = useCallback(() => {
    if (!resetGame) {
      return
    }

    resetGame()
    setVictoryText("")
    setGameOverText("")
  }, [])

  // retry button on clck resets both text and dispatches the reset game action
  return (
    <Wrapper>
      {gameOverText && <GameOverButton onClick={handlePlayAgain}> {gameOverText} </GameOverButton>}
      {victoryText && <VictoryButton onClick={handlePlayAgain}> {victoryText} </VictoryButton>}

      <Player currentHealth={playerHealth} />
      <AttackRoll />
      <Enemy currentHealth={enemyHealth} />
    </Wrapper>
  )
}

const mapStateToProps = (
  { charactersState }: { charactersState: { playerHealth: number, enemyHealth: number }}
  ) => ({ ...charactersState })

export default connect(mapStateToProps, acions)(Gameplay)
