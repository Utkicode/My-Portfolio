import React from 'react'
import './Home.css';
import WallpaperCarousel from './WallpaperCrousel';
import Typewriter from './Typewriter';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
 
  return (
    <div style={{backgroundColor:'red'}}>
      <div className='container'>
          <div className='row row-section'>
              <div className='col-md-6 left-section'>
                  <WallpaperCarousel/>
              </div>
              <div className='col-md-6 right-section'>
                  <h3 className='tagline'>HI, I'M A FREELANCER</h3>
                  <span className='typewriter'><Typewriter/></span>
                  <Button variant='contained' >Contact Me</Button>
              </div>

          </div>
      </div>

    </div>

  )
}

export default Home