import styles from "./Section.module.css";
import PropTypes from "prop-types";


export default function Section({ title, children }) {
    return <section><p className={styles.titlee}>{title}</p>{ children }</section>
    
    
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};