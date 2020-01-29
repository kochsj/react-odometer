import React from 'react';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          greeting: 'Good day!',
        };
    }

    updateHours(hours){
        let temp;
        if(hours > 18 || hours < 4){temp = 'Good Evening!'}
        else if(hours > 12){temp = 'Good Afternoon!'}
        else{temp = 'Good Morning!'}
        this.state.greeting = temp;
    }

    render(){
        let hours = new Date().getHours();
        this.updateHours(hours);
        return <>
                <h1>{this.state.greeting}</h1>
                <h3>Odometer Goes Here</h3>
            </>
    };
};

export default Header;