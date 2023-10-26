import React from 'react'
import image from './image.jpg'

const About = () => {
  return (
    <div style={{backgroundColor:"yellowgreen"}}>
        <h1>About</h1>
        <h2>Hello</h2>

        <img src={image} alt='this is an image' />
    </div>
  )
}

export default About