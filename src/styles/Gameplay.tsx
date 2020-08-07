import styled from 'styled-components'
import { red, green } from '../constants/colors'

export const Wrapper = styled.div`
  width: 80%;
  height: 400px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-end;
`
const Button = styled.h1`
  font-weight: 800;
  letter-spacing: -1px;
  font-size: 20px;
  position: absolute;
  text-transform: uppercase;
  user-select: none;
  width: 100%;
  text-align: center;
  cursor: pointer;
  top: -10%;
  left: 0;
`
export const GameOverButton = styled(Button)`
  color: ${red};
`

export const VictoryButton = styled(Button)`
  color: ${green};
`
