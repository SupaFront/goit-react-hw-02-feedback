
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";


export default function Statistics({good, neutral, bad, total, countPositiveFeedbackPercentage}) {
   
   return <ul>
        <li><p>Good:{good}</p></li>
        <li><p>Neutral:{neutral}</p></li>
        <li><p>Bad:{bad}</p></li>
        <li><p>Total:{total}</p></li>
        <li><p>Positive feedback:{countPositiveFeedbackPercentage() || 0}%</p></li>
   </ul>;
    
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
   countPositiveFeedbackPercentage: PropTypes.func.isRequired,


}