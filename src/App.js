import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Result from './components/Result';
import {useStoreActions} from 'easy-peasy'
import Loading from './components/Loading';

function App() {
  const fetchArtists = useStoreActions(actions => actions.fetchArtists);
  const [isLoading, setIsLoading] = useState(false)
  setTimeout(() => {
    setIsLoading(true)
  }, 3000)
  useEffect(() => {
      const payload = "Don't rush"
      fetchArtists(payload)
  }, [])
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        {!isLoading && <Loading/>}
        {isLoading && <Result/>}
      </div>
    </div>
  );
}

export default App;
