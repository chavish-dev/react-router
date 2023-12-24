import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Tasks from './Components/Tasks';
import ViewTask from './Components/ViewTask';
import NewTask from './Components/NewTask';
import ViewAllTasks from './Components/ViewAllTasks';

function App() {
  return (
    <div className="App">
      {/* <a href='/'>home</a><br/>
<a href='/about'>about</a><br/>
<a href='/tasks'>tasks</a><br/> */}
      <Link to={'/'}>home</Link><br />
      <Link to={'/about'}>about</Link><br />
      <Link to={'/tasks'}>tasks</Link><br />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tasks' element={<Tasks />}>
          <Route index element={<ViewAllTasks/>} />
          <Route path='new' element={<NewTask />} />
          <Route path=':id' element={<ViewTask />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
