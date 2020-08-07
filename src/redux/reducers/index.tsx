import { combineReducers } from 'redux'
import { CharacterStateReducer } from './CharacterStateReducer'

export default combineReducers({
  charactersState:  CharacterStateReducer
})
