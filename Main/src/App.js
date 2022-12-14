
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage/ProfilePage';
import Home from './Home/Home';
import Searchbar from './SearchProfiles/Searchbar';
import Feed from './SearchProfiles/Feed';
import SearchFeed from './SearchProfiles/SearchFeed';
import CreateProfile from './ProfilePage/CreateProfile';
import LandingPage from './LandingPage/LandingPage';
import Contact from './LandingPage/Contact';
import Header from './LandingPage/Header';
import Image from './APICHecking/Image';

// import Navbar from './component/navbar';
const axios = require('axios').default;
function App() {
  // <Searchbar/>
      return(
      <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route exact path='/' element ={<LandingPage/>} ></Route>
      <Route  path='/search' element ={<Feed/>} ></Route>
      <Route  path='/search/all/' element ={<SearchFeed/>} ></Route>
      <Route  path='/profile/:id' element ={<ProfilePage/>} ></Route>
      <Route  path='/create/profile/' element ={<CreateProfile/>} ></Route>
      <Route  path='/home' element ={<Home/>} ></Route>
      <Route  path='/contact' element ={<Contact/>} ></Route>
      <Route  path='/image' element ={<Image/>} ></Route>
      <Route  path='*' element ={<h1>Not Found</h1>} ></Route>
      </Routes>
      </BrowserRouter>

      </div>
  )
      }

export default App;
