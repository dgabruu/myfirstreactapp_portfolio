import React from 'react';

class Jokes extends React.Component
{
    state={
        myjoke:{}
    };

    componentDidMount()
    {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response=> (response.json()))
        .then(result=>this.setState({myjoke:result}))
    }
    render()
    {
        const {setup,punchline}=this.state.myjoke;
        console.log(this.state.myjoke);
        return(
            <div>
                <center><fieldset style={{width:'500px' ,padding:'30px',border:'1px solid green',marginTop:'0px'}}>
                <legend><h2><u>Highlighted Jokes</u></h2></legend>
                <h3>{setup} : {punchline}</h3>
                </fieldset></center>
                  
            </div>
        )
    }
}
export default Jokes;
