import './App.css';
import Heading from './tuts/Funtional-components/Heading';
import Section from './tuts/Funtional-components/Section';
import Counter from './tuts/Funtional-components/Counter';
import CounterMod from './tuts/Funtional-components/CounterMod';
import { useState } from 'react';

const App:React.FC = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <Heading title='Hello TS'/>
      <Section title='Frimps sections'>
        <p>This is my first section</p>
      </Section>
      <Counter />
      <CounterMod count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
