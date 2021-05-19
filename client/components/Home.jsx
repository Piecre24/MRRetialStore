import React from 'react'

// import whiteTee from '../../server/public/image/classic-tee.png'

class Home extends React.Component {
  render () {
    return (
      <>
        <div className= 'title-boilerplate'>
          <h3>Classic Tee</h3>
          <p> This is where the description would be written </p>
          <div className = 'image-placing'>
            {/* <div className = 'whiteT-img'><img src={whiteTee} alt="img" /></div> */}
          </div>
          <div className= 'buttons-size'>
            <a href ='#'>S</a>
            <a href ='#'>M</a>
            <a href ='#'>L</a>
          </div>
        </div>
      </>
    )
  }
}

export default Home
