
import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";




export default function FeedbackOptions({ onBtnClick, options }) {

    const elements = options.map(element =>
        
        <button className={styles.btn}key={element} onClick={() => onBtnClick(`${element}`)}>{element[0].toUpperCase()}{element.slice(1)}</button>)

    return <section className={styles.sec}>{elements}</section>
    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onBtnClick: PropTypes.func.isRequired,
  };