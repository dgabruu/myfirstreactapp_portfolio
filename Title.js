import React from 'react';
import './App.css';
class Title extends React.Component
{
    constructor()
    {
        super();
        this.title=[
                    ' software Engineer',
                    'very enthusiastic programmer',
                    'always looking forward for meaningful projects',
                    
    ];
    this.state={ 
        index:0,
        fadein:true
    };
}
componentDidMount()
{
    setInterval(()=>this.setState({fadein:false}),2000)
    
    this.animatetitle();
 
}
// componentWillUnmount()
// {

// }
animatetitle()
{
    
  setInterval(() => {
        
    const ind=(this.state.index+1) % this.title.length;
        this.setState({index:ind,fadein:true});
    },4000)

}


     render()
     {
        //let titles=this.title[this.state.index];
         const {index,fadein}=this.state;
         let titles=this.title[index];
         
         return(
             <p className={fadein?'title-fade-in':'title-fade-out'}> I am a {titles}</p>
         )
     }

}



export default Title;
