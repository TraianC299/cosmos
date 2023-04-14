import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import styled from 'styled-components'

import PlanetModal from './components/PlanetModal'
import Planet from './types/Planet.type'
import  { sun, planets } from './data/solarSystem'
import Select from './components/system/Select'
import useWindowSize from './hooks/useWindowSize'


const Body = styled.div` margin: 0;
display: flex;
place-items: center;
min-width: 100vw;
min-height: 100vh;
padding: 0;
margin: 0;
color: #000;
font-family: 'Montserrat', sans-serif;
background-color: #213547;
overflow: hidden;

`
const Container = styled.div`
  transform-origin: center;
  position: relative;
  &.selected{
    transform: translateX(200px) scale(0.7);
  }
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
`

const PlanetStyle = styled.div<{index: number}>`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${props=>32 + props.index * 5}px;
  width: ${props=>32 + props.index * 5}px;
  z-index: ${props=> 10 - props.index};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &.selected{
    box-shadow:0 0 0 max(100vh, 100vw) rgba(0, 0, 0, 0.65);
  }

`
const Sun=styled(PlanetStyle)<{}>`
  height: 50px;
  width: 50px;
  top: 50%;
  `


const Form = styled.form`
position: absolute;
top: 0.5rem;
right: 0.5rem;
border-radius: 4px;
display: flex;
flex-direction: column;
`



const Orbit = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 1px dashed white;
  transform-origin: 50% 50%;
  top: 50%;
  .rotationContainer{
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: relative;
    transform-origin: 50% 50%;
  }
 
  `

const getOrbitDimensionsBasedOnWindow = (width:number, height:number) => {
  const smallest = width > height ? height : width
  const orbitSize = smallest / 8
  console.log(width, height)

  return orbitSize
}
function App() {
  const {width, height} = useWindowSize()
  const [speed, setSpeed] = useState<number>(1)
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)
  const orbitSize = useMemo(() => getOrbitDimensionsBasedOnWindow(width, height), [width, height])
  
  // const {
  //   data,
  //   loading,
  //   error,
  // } = useFetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true&filter[]=isMoon,neq,true&filter[]=isStar")

 
  
  return (
    <Body className="flex ac jc">
      {selectedPlanet &&<PlanetModal {...selectedPlanet} closeModal={()=>setSelectedPlanet(null)}></PlanetModal>}
      <Form className='glass p-2 gap-2'>
        <div className='flex afs jfs column'>
          <Select label='Speed' value={speed} setValue={setSpeed}>
            <option value={0.000001}>0x</option>
            <option value={1}>1x</option>
            <option value={50}>50x</option>
            <option value={250}>250x</option>
            <option value={1000}>1000x</option>
            <option value={5000}>5000x</option>
          </Select>
        </div>

      </Form>
      <Container className={`transition ${selectedPlanet && "selected"}`}>
        
        {planets.map((planet, i) => {
          const isSelected = selectedPlanet?.name === planet.name
          return <Orbit 
          style={{
          height: `${orbitSize + i * orbitSize}px`,
          width: `${orbitSize + i * orbitSize}px`,
          zIndex: selectedPlanet && !isSelected?0:10 - i,
        }}>
          <div className='rotationContainer' style={{
            transform: `rotate(${planet.initialRotation}deg)`,
            animation: `rotate ${planet.orbit / speed}s linear infinite`,
          }}>
          <PlanetStyle 
          index={i}
          id={planet.name}
          className={`pointer ${isSelected && "selected"}`}
          onClick={() => setSelectedPlanet(planet)}
          style={{
            backgroundImage: `url(${planet.image})`,
          }}
          >
          </PlanetStyle>
          </div>
          
        </Orbit>})}
        <Sun 
        className={`${selectedPlanet?.name===sun.name && "selected"}`} 
        onClick={() => setSelectedPlanet(sun)} >
          <img src={sun.image}></img>
        </Sun>
      </Container>
    </Body>
  )
}

export default App
