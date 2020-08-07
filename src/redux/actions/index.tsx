import { UPDATE_ENEMY_HEALTH, UPDATE_PLAYER_HEALTH, RESET_GAME } from './types'

export const updatePlayerHitpoints = (newHitpoints: number) =>
  async (dispatch: (arg: object) => void) => {
    dispatch({ type: UPDATE_PLAYER_HEALTH, payload: newHitpoints})
  }

export const updateEnemyHitpoints = (newHitpoints: number) =>
  async (dispatch: (arg: object) => void) => {
    dispatch({ type: UPDATE_ENEMY_HEALTH, payload: newHitpoints})
  }

export const resetGame = () =>
  async (dispatch: (arg: object) => void) => {
    dispatch({ type: RESET_GAME })
  }
