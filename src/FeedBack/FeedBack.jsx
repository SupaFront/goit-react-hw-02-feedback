import React from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Section from "../Section";
import Notification from "../Notification";


export default class FeedBack extends React.Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    countTotalFeedback = () => {
       return this.state.good + this.state.neutral + this.state.bad;
    }

    onBtnClick = (name) => {
       this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };
    countPositiveFeedbackPercentage = () => {
        const percent = (this.state.good / (this.state.good + this.state.bad) * (100));
        return Math.round(percent);
        
        
    };
    

    render() {
        const { onBtnClick, countTotalFeedback, countPositiveFeedbackPercentage } = this;
        const { good, neutral, bad } = this.state;
        const total = countTotalFeedback();
        
        return (<div>
            <Section title="Please leave your feedback">
             <FeedbackOptions options={Object.keys(this.state)}
            onBtnClick={onBtnClick} type="button"></FeedbackOptions></Section>
            <Section title="Statistics">
                {total? <Statistics countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
                    good={good} neutral={neutral} bad={bad} total={total}
                ></Statistics> : <Notification message="There is no feedback"/>}</Section>
        </div>)

    }
}