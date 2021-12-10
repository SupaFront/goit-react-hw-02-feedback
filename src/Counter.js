import React from "react";

class Counter extends React.Component {
    
    static defaultProps = {
    initialValue: 0,
}

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
        counterIncrement = () => {
        this.setState(prevState => ({
        value: prevState.value + 1,
    
        }));
    };

    counterDecrement = () => {
        this.setState(prevState => ({
        value: prevState.value - 1,
    
        }));
    };

   


    render() {
        return
        (<div>
            <p></p>
            <button onClick />
            <p></p>
            <p></p>
        </div>)

    }
}