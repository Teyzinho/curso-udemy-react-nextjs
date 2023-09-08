import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';
import Button from '../../components/Button';

function App() {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <div>
      <h1>{state.counter}</h1>
      <Button onButtonClick={actions.increase}>Increment</Button>
      <Button onButtonClick={actions.decrease}>Decrease</Button>
      <Button onButtonClick={actions.reset}>Reset</Button>
      <Button onButtonClick={() => actions.set({ counter: 10 })}>Set 10</Button>
      <Button onButtonClick={actions.asyncIncrease}>AsyncIncrease</Button>
      <Button onButtonClick={handleError}>AsyncError</Button>

      <h2>{state.loading && 'loading...'}</h2>
    </div>
  );
}

export default App;
