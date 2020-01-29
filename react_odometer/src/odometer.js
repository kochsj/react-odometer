import React from 'react';

class Odometer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            miles: 0,
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(inc) {
        let temp = this.state.miles + inc;
        if(temp < 0){
            temp = this.state.miles
        } else if(temp > 9999){
            temp = temp - 10000; 
        }
        this.setState({
            miles: temp
        });
    }

    pad(num, digits){
        let stringified = num.toString()
        let numZeros = digits - stringified.length
        let str = ''
        for(let i=0; i<numZeros; i++){
          str += '0'
        }
        str += stringified
        return str
    }

    render() {
        return (
            <>
                <p>{this.pad(this.state.miles, 4)}</p>
                <div>Ones: 
                    <button onClick={this.clickHandler.bind(this, 1)}> + </button>
                    <button onClick={this.clickHandler.bind(this, -1)}> - </button>
                </div>
                <div>Tens: 
                    <button onClick={this.clickHandler.bind(this, 10)}> + </button>
                    <button onClick={this.clickHandler.bind(this, -10)}> - </button>
                </div>
                <div>Hundreds: 
                    <button onClick={this.clickHandler.bind(this, 100)}> + </button>
                    <button onClick={this.clickHandler.bind(this, -100)}> - </button>
                </div>
                <div>Thousands: 
                    <button onClick={this.clickHandler.bind(this, 1000)}> + </button>
                    <button onClick={this.clickHandler.bind(this, -1000)}> - </button>
                </div>
            </>
        )
    }
}

export default Odometer