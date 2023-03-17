import React, { useState } from 'react'
import ColorPanel from './components/ColorPanel'
import { ButtonPanel, ColorButton } from './styles'

const App = () => {
  const [red, setRed] = useState(250)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  const [alpha, setAlpha] = useState(1)

  return (
    <>
      <ColorPanel
        red={red}
        green={green}
        blue={blue}
        alpha={alpha}
      />

      <ButtonPanel>
        Red: <ColorButton type="range" data-cy="button-red" min={0} max={255} 
          value={red} onChange={(event) => setRed(Number(event.target.value))} />
        Green: <ColorButton type="range" data-cy="button-green" min={0} max={255} 
          value={green} onChange={(event) => setGreen(Number(event.target.value))} />
        Blue: <ColorButton type="range" data-cy="button-blue" min={0} max={255} 
          value={blue} onChange={(event) => setBlue(Number(event.target.value))} />
        Alpha: <ColorButton type="range" data-cy="button-alpha" min={0} max={1} step={0.1} 
          value={alpha} onChange={(event) => setAlpha(Number(event.target.value))} />
      </ButtonPanel>
    </>
  )
}

export default App