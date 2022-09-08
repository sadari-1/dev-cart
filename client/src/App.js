import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import DataProvider from './GlobalContext';

function App() {
  return (
   <DataProvider>
    <Main />
   </DataProvider>
  );
}

export default App;
