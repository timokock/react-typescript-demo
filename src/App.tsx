import './App.css'
import { Container } from './components/Container';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <Container styles={{ border: '1px solid black', padding: '1 rem' }}/>
      <Person name={{first: "Timo", last:"Kock"}}/>
    </div>
  );
}

export default App;