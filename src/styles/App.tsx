import styled from 'styled-components'
import { skyBlue, earthBrown, fontPrimary, red } from '../constants/colors'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

export const SkyBox = styled.div`
  width: 100%;
  height: 75%;
  background-color: ${skyBlue};
`

export const Ground = styled.div`
  width: 100%;
  height: 25%;
  background-color: ${earthBrown};
`

export const Title = styled.h1`
  font-size: 35px;
  color: ${fontPrimary};
  font-weight: 100;
  width: 100%;
  text-align: center;
  font-style: italic;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: absolute;
  top: 0;
`

export const AttackButton = styled.div`
  background-color: ${red};
  height: 40px;
  width: 200px;
  position: absolute;
  display: flex;
  justify-content: center;
  font-weight: 800;
  letter-spacing: 1px;
  align-items: center;
  bottom: 22%;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  color: ${fontPrimary};
  border-radius: 12px;
  border: 1px solid ${fontPrimary};
  cursor: pointer;
  user-select: none;
  transition: all .1s;

  &:active {
    height: 38px;
    width: 195px;
    color: ${red};
    background-color: ${fontPrimary};
  }
`
