import styled from 'styled-components'
import { fontPrimary, red } from '../constants/colors'

export const Wrapper = styled.div`
  height: 200px;
  width: 120px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -80px;
`

export const HealthBar = styled.div`
  width: 200px;
  height: 25px;
  top: -45%;
  font-weight: 800;
  position: absolute;
  font-size: 18px;
  color: ${fontPrimary};
  text-align: center;
  margin-bottom: 34px;
  z-index: 1;
  &:before {
    content: " ";
    position: absolute;
    background-color: ${red};
    color: ${fontPrimary};
    width: ${(p: { currentHealth: number}) => p.currentHealth}%;
    height: 25px;
    margin-right: 24px;
    z-index: -1;
    left: 0;
    transition: all 1s;
    border-radius: 4px;
  }
`

export const CharacterImage = styled.img`
  transform: ${(p: { isInverted?: boolean }) => p.isInverted ? "scaleX(-1)" : "scaleX(1)"};
  height: 200px;
`

export const Name = styled.span`
  display: inline-block;
  font-weight: 600;
  width: 100%;
  font-size: 24px;
  color: ${fontPrimary};
  margin-top: 34px;
`
