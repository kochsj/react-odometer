import React from 'react'

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            trademark : 'Created by SK',
        }
    }
    
    render(){
    return <h2>©2020 - {this.state.trademark}™</h2>;
    }
}

export default Footer;