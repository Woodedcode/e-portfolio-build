import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Posts from './pages/Posts.jsx'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path=":5" element={<Posts />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
