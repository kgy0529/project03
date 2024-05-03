// App.js

import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './page/Login';

import Main from './components/Main';
import Promotion from './components/Promotion';
import CurrentView from './components/CurrentView';
import Curation from './components/Curation';
import ArtCollection from './components/ArtCollection';
import Upcoming from './components/Upcoming';
import FeaturedBrand from './components/FeaturedBrand';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Promotion />
            <CurrentView />
            <Curation />
            <ArtCollection />
            <Upcoming />
            <FeaturedBrand />
          </>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
