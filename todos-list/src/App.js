import './App.css';
import { Footer } from './components/Footer';
import Navbar from './components/NavBar';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <Navbar/>
      <TodoList/>
      <Footer/>
    </>
  );
}

export default App;
