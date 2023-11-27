{/* Classes */}
import React, { Component } from "react";
class Welcome extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <h1>Meet the <i style={{color:"blueviolet"}}>{this.props.someName}</i></h1>
  }
}
{/* Hooks */}
const Hello=(props) =>{
  return <h1>Meet the <i style={{color:"steelblue"}}>{props.someName}</i></h1>
}
function App() {
  const someName = 'StarGazers'
  return (
    <div className="container">
      <article>
        <img src="images/group.svg" alt="StarGazers Group" />
        <hgroup>
          <Welcome someName="StarGazers"/>
          <Hello someName="StarGazers"/>
          <p>Members of an <b>intergalactic alliance</b> <br/>
          paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={()=> alert('Hi There!')}>Click It</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App