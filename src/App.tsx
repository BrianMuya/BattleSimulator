import React from 'react'

import GamePlay from './components/Gameplay'

import {
  Wrapper,
  Ground,
  SkyBox,
  Title,
} from '../src/styles/App'

const App: React.FC = () => (
  <Wrapper>
    <Title> Epic Battle Simulator! </Title>
    <SkyBox />
    <GamePlay />
    <Ground />
  </Wrapper>
)

export default App
