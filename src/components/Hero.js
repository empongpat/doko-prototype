import React from 'react' 

import 'assets/styles/css/components/Hero.css'
 
const text = '"Open the door to a brighter future"' 
 
export default class Hero extends React.Component { 
 
  render() { 
    return ( 
      <div className="hero"> 
        <div className="slogan">{text}</div> 
      </div> 
    ) 
  } 
}