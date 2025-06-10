import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/immutable State/ObjectUseState';
import ArrayUseState from './components/immutable State/ArrayUseState';
import Parent from'./components/ParentChild/Parent'

function App() {
  return (
    <div className="App">
     {/* <UseState /> */}
     {/* <UseReducer />
     <ObjectUseState />
     <ArrayUseState /> */}
    <Parent />
   
    </div>
  );
}

export default App;
