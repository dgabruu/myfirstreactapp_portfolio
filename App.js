import React from 'react';
import './App.css';
import Joke from './Jokes'
import logo from './ravi.jpg';
import Title from './Title.js';
class App extends React.Component
{ 
  state={displayquote:true};
  componentDidMount()
  {
    this.setState({displayquote:!this.state.displayquote})
    console.log(this.state.displayquote);
  }
  render()
  {
     var head="My Portfolio !!!";
  return (
    <div className="App">
        <h1 id="j">
        { head}
        </h1>
        <div>
      <img src={logo} alt="ravi" width='200px' height='250px' /> 
    </div>
    <div className='app1'>
     <h2>Ravi Rai ( Gabruu ) </h2>
     <p> I am a Computer Science Engineer</p>
     <Title/>
     <p>I love Music and Web Series</p>
     </div>
     
     {
       this.state.displayquote?(<div>
          <p>I live in Bengaluru city</p>
            <p> I am From Bihar and my father is in Indian Army</p>
            <p>I Love JavaScript and Working with <span style={{color:"red"}}>React Js</span></p>
            <h4> <b>React</b> is such a sweet , reusable , autoloaded , fast , efficient and sigle page 
                language which makes it very popular around the globe.
            </h4>
         <button onClick={()=>this.componentDidMount()}>Show less</button>
         </div>):(<button onClick={()=>this.componentDidMount()}>Show More</button>)
     }
     <hr/>   
     <div>
       <Joke />
     </div>
     </div>
    
    
  );
  }
}



export default App;
