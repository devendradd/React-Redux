import logo from './logo.svg';
import './App.css';
import CakeContainer from './compoenents/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './compoenents/HooksCakeContainer';
import IceCreamContainer from './compoenents/IceCreamContainer';
import ColdDrinkContainer from './compoenents/ColdDrinkContainer'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer />
        <ColdDrinkContainer />
      </div>
    </Provider>
  );
}

export default App;
