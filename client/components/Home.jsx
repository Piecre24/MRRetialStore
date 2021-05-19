import React from 'react'

export class Home extends React.Component {
  render () {
    return (
      <>
        <div className= 'title-boilerplate'>
          <h1>React/Redux BoilerPlate</h1>
          <p> This can be used for future projects and its open source</p>
          <div className= 'buttons'>
            <a href="https://github.com/Piecre24/Boilerplate-2.0" className="button-github"> Github</a>
            <a href="" className="button-code">Code</a>
          </div>
        </div>
      </>
    )
  }
}

export default Home
