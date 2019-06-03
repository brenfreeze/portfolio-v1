import React, { useState, } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const CIRCLE_SIZE = 100

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`

const Circle = styled(animated.div)`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: 50%;
  background: red;
`


function App() {
  const [ { xy }, set ] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 1000, friction: 100 } }))

  return (
    <Container
      onMouseMove={({clientX: x, clientY: y}) => set({ xy: [x - (CIRCLE_SIZE / 2), y - (CIRCLE_SIZE / 2)] })}
    >
      <Circle style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`)
      }} />
    </Container>
  )
}

export default App