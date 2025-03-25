//* what gets rendered on the browser
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//* connect components
// TODO: Use useState<Todo[]> to hold todos

// TODO: Add and remove todos

// TODO: Pass functions as props to children

function App() {
  // everything below gets rendered to the browser
  return (
    <div>
      {/* BrowserRouter: tells React how to handle each page navigation */}
      <BrowserRouter>
        {/* Routes component holds all routes. Acts as a container for diff pages */}
        {/* everything inside this reloads */}
        <Routes>
          {/* depending what the url is, React will show the given component/ page */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <h1>My To Do App</h1>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// export App component so that it can be used in Main.jsx (main entry file)
export default App;
