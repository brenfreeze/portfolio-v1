import React, { useState, } from 'react'
import styled, { css, } from 'styled-components'
import media from 'styled-media-query'
import { useSpring, animated } from 'react-spring'

const Container = styled.div`
  --space: 2rem

  width: 100%;
  min-height: 100vh;
  padding: var(--space);

  ${media.lessThan('small')`
    --space: 1rem;
  `}
`

const Hero = styled(animated.div)`
  position: relative;
  width: 100%;
  height: calc(100vh - calc(var(--space) * 2));
  background: linear-gradient(to bottom left, rgba(255,255,255,0), rgba(255,255,255,0.75));
  border-radius: 20px;
  overflow: hidden;
`

const HeroBackground = styled(animated.div)`
  --bw: 2px;
  
  --bw05: calc(var(--bw) / 2);
  --wh: 100%;
  --offset-a: calc((50% - var(--bw05)) * -1);
  --offset-b: calc(50% - var(--bw05));
  --truchet: (
    content: "";
    display: block;
    position: absolute;
    width: var(--wh);
    height: var(--wh);
    border: var(--bw) solid #fff;
    border-radius: 100%;
  );
  --truchet-a: (
    transform: translate(var(--offset-a), var(--offset-a));
  );
  --truchet-b: (
    transform: translate(var(--offset-b), var(--offset-b));
  )

  width: 100%;
  height: 100%;
  position: absolute;
  background-size: 200%;
  background-repeat: no-repeat;
  z-index: -1;
`

const HeroContentContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  left: 0;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

const HeroContent = styled.div`
  max-width: 700px;
  padding: var(--space);
`

const HeroName = styled.h1`
  margin: 0;
  margin-bottom: 0.5rem;
`

const HeroTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
`

const HeroDescription = styled.p`
  margin: 0;
`

const SocialLinks = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  padding: var(--space);
  text-align: right;


  ${media.lessThan('medium')`
    justify-content: flex-start;
    flex-flow: row;
  `}
`

const LinkDescription = styled.span`
  font-size: 0.875rem;
  opacity: 0;
  transition: opacity 300ms ease;
  margin-right: 0.5rem;
`

const LinkContainer = styled.a`
  text-decoration: none;
  line-height: 1;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;

  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  &:last-child {
    margin: 0;
  }

  ${media.lessThan('medium')`
    justify-content: flex-start;
    margin: 0;
    margin-right: 1rem;

    ${LinkDescription} {
      display: none;
    }
  `}

  &:hover {
    ${LinkDescription} {
      opacity: 1;
      transition: opacity 300ms ease;
    }
  }
`

const Section = styled.div`
  min-height: 100vh;
`

const calc = (x, y) => `translate3d(${((0 - x) - window.innerWidth) / 20}px, ${((0 - y) - window.innerHeight) / 20}px, 0)`

function App() {
  const [ { xy, }, set ] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <Container>
      <Hero
        onMouseMove={({clientX: x, clientY: y}) => {
          return set({ xy: [x, y] })
        }}
      >
        <HeroBackground
          style={{
            transform: xy.interpolate(calc)
          }}
        >
          <css-doodle>
            {`:doodle {
              @grid: @rand(512, 1024) / 200vmax;
              background: @pick(red, blue, green);
            }
              
            overflow: hidden;
            position: relative;
            transform: rotate(@pick(90deg, 180deg, 270deg, 360deg));
            
            :before {
              @use: var(--truchet);
              @use: var(--truchet-a);
            }
            
            :after {
              @use: var(--truchet);
              @use: var(--truchet-b);
            }`}
          </css-doodle>
        </HeroBackground>
        <HeroContentContainer>
          <HeroContent>
            <HeroName>Bren Aviador</HeroName>
            <HeroTitle>Software Engineer</HeroTitle>
            <HeroDescription>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ea voluptas obcaecati libero, dolor dolores officia praesentium sunt repudiandae modi!"
            </HeroDescription>
          </HeroContent>
          <SocialLinks>
            <LinkContainer href="https://github.com/brenfreeze">
              <LinkDescription>https://github.com/brenfreeze</LinkDescription> <i className="fab fa-github-square" />
            </LinkContainer>
            <LinkContainer href="https://www.linkedin.com/in/bren-aviador/">
              <LinkDescription>https://linkedin.com/in/bren-aviador</LinkDescription> <i className="fab fa-linkedin" />
            </LinkContainer>
          </SocialLinks>
        </HeroContentContainer>
      </Hero>
      <Section>
      </Section>
    </Container>
  )
}

export default App