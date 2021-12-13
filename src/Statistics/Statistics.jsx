
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";


export default function Statistics({good, neutral, bad, total, countPositiveFeedbackPercentage}) {
   
   return <ul className={styles.dos}>
        <li><p className={styles.uno}>Good:{good}</p></li>
        <li><p className={styles.uno}>Neutral:{neutral}</p></li>
        <li><p className={styles.uno}>Bad:{bad}</p></li>
        <li><p className={styles.uno}>Total:{total}</p></li>
        <li><p className={styles.uno}>Positive feedback:{countPositiveFeedbackPercentage() || 0}%</p></li>
   </ul>;
    
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
   countPositiveFeedbackPercentage: PropTypes.func.isRequired,


}