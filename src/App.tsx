import './styles/styles.scss';
import HomePage from './components/HomePage';
import { movieHallConfig } from './featuresPageData';

/**
 * App Component- Parent Component for O/Movies home page
 * 
 * Child components:
 * HomePage- 
 * 
 */

function App() {
  return (
    <div className="App">
      <HomePage movieHallConfig={movieHallConfig} />
    </div>
  );
}

export default App;
