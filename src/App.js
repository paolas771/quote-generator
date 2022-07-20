import React from 'react'
import Quote from './Components/Quote'
export default function App() {
  const [quote, setQuote] = React.useState([])
  const [slipID, setSlipID] = React.useState(1)
  const [windowSize, setWindowSize] = React.useState(window.innerWidth)


  React.useEffect(() =>{
    fetch(`https://api.adviceslip.com/advice/${slipID}`)
    .then(res => res.json())
    .then(data => setQuote(data.slip))
  }, [slipID])

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth)
    })
  }, [])

  function getQuote(){
    const randomNumber = Math.floor(Math.random() * 224)
    setSlipID(randomNumber)
  }
  return (
    <div className="App">
      <Quote 
        key={quote.id}
        number={quote.id}
        quote={quote.advice}
      />
      <img src={windowSize > 768 ? "../images/pattern-divider-desktop.svg" : "../images/pattern-divider-mobile.svg"} alt=""/>
      <button className="diceButton" onClick={getQuote}>
        <img src="../images/icon-dice.svg" alt=""/>
      </button>
    </div>
  );
}


