import Card from './components/Card'
import Random from './components/Aleatorio'

function App() {

  return (
    <div className="App">
      <Card title="Card Title" content="This is the content of the card.">
        <Random min={1} max={100} />
      </Card>
    </div>
  )
}

export default App
