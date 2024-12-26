import React from 'react'

function Home(props) {
  return (
    <div>Home
        <p>Welcome {props.name}</p>
        <p>age {props.age}</p>
    </div>
    
  )
}

export default Home;
