import React, { useCallback, useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import { Wrapper, AttackButton, RollNumber, Notification } from '../styles/AttackRoll'

interface Props {
  updatePlayerHitpoints: (num: number) => void
  updateEnemyHitpoints: (num: number) => void
  playerHealth: number
  enemyHealth: number
}

const AttackRoll: React.FC<Props> = ({ updatePlayerHitpoints, updateEnemyHitpoints, playerHealth, enemyHealth }) => {
  const [playerRolls, setPlayerRoll] = useState<Array<number>>([])
  const [enemyRolls, setEnemyRoll] = useState<Array<number>>([])
  const [damageNotification, setDamageNotification] = useState("")

  const renderRollNumbers = useCallback((nums) => {
    if (!nums.length) {
      return
    }

    // I'm aware using index as a key is a bad idea for dynamic lists, but this isn't a dynamic list and we
    // have no unique identifier like a database id
    return nums.map((num: number, index: number) => <RollNumber key={index}> {num} </RollNumber>)
  }, [])

  const handleAttackClicked = useCallback(() => {

    if (playerHealth <= 0 || enemyHealth <= 0) {
      return
    }

    setPlayerRoll([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1])
    setEnemyRoll([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1])
  }, [playerHealth, enemyHealth])

  useEffect(() => {
    const playerTotal = playerRolls.reduce((a, b) => a + b, 0)
    const enemyTotal = enemyRolls.reduce((a, b) => a + b, 0)

    if (playerTotal === enemyTotal) {
      setDamageNotification("You're equally matched")
      return
    }

    if (playerTotal > enemyTotal) {
      const dmg = playerTotal - enemyTotal
      setDamageNotification(`You dealt ${dmg} damage!`)
      updateEnemyHitpoints(enemyHealth - dmg)
    } else {
      const dmg = enemyTotal - playerTotal
      setDamageNotification(`You recieved ${dmg} damage!`)
      updatePlayerHitpoints(playerHealth - dmg)
    }
  }, [playerRolls, enemyRolls])

  return (
    <Wrapper>
      {damageNotification && <Notification>{damageNotification}</Notification>}
      <div>
        {renderRollNumbers(playerRolls)}
      </div>

       <AttackButton onClick={handleAttackClicked}> Attack </AttackButton>

       <div>
         {renderRollNumbers(enemyRolls)}
        </div>
    </Wrapper>
  )
}


const mapStateToProps = (
  { charactersState }: { charactersState: { playerHealth: number, enemyHealth: number }}
  ) => ({ ...charactersState })

export default connect(mapStateToProps, actions)(AttackRoll)
