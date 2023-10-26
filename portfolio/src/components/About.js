import React from 'react'
import image from './image.jpg'

const About = () => {
  return (
    <div style={{backgroundColor:"yellowgreen"}}>
        <h1>About</h1>
        <img src={image} alt='this is an image' />
    </div>
  )
}

export default About