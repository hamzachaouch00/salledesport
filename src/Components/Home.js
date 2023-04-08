
import React from 'react'
import vd from '../vd.mp4'
const Home = () => {
  return (
    <div className="home">
    <div className="overlay">
      <video src={vd} autoPlay loop muted />
      <div className="content">
        <p className="titre">
          HULK GYM
        </p>
      </div>
    </div>
  </div>
  )
}

export default Home
