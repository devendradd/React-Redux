import logo from './logo.svg';
import './App.css';
import CakeContainer from './compoenents/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './compoenents/HooksCakeContainer';
import IceCreamContainer from './compoenents/IceCreamContainer';
import ColdDrinkContainer from './compoenents/ColdDrinkContainer'; 
import JalebiCOntainer from './compoenents/JalebiCOntainer';
import NewCakeContainer from './compoenents/NewCakeContainer';
import ItemContainer from './compoenents/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
        <ItemContainer cake/>
        <ItemContainer />
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer />
        <ColdDrinkContainer />
        <JalebiCOntainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
