import styled from 'styled-components'

import { fontPrimary, red } from '../constants/colors'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 400px;
  height: 600px;
  top: 0;
  left: 0;
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
export const RollNumber = styled.div`
  border: 2px solid ${fontPrimary};
  font-weight: 800;
  display: flex;
  color: ${fontPrimary};
  align-items: center;
  justify-content: center;
  font-size: 34px;
  height: 60px;
  width: 60px;
  margin: 12px 0;
`

export const Notification = styled.h3`
  color: ${fontPrimary};
  position: absolute;
  top: 10%;
  left: 0;
  font-size: 16px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`

