import { UPDATE_ENEMY_HEALTH, UPDATE_PLAYER_HEALTH, RESET_GAME } from '../actions/types'

export const startingHP = 100;

export const CharacterStateReducer = (state: { playerHealth: number, enemyHealth: number} = { playerHealth: startingHP, enemyHealth: startingHP }, action: any) => {
  switch (action.type) {
    case UPDATE_ENEMY_HEALTH:
      return { ...state, enemyHealth: action.payload }
    case UPDATE_PLAYER_HEALTH:
      return { ...state, playerHealth: action.payload }
    case RESET_GAME:
      return { playerHealth: startingHP, enemyHealth: startingHP }
    default:
      return state
  }
}
