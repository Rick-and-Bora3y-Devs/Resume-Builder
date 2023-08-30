
import styles from '../Css/AddBtn.module.css';

function AddBtn(props){
    return(
        <button className={styles.btn}>
            <div className={styles.btnText}>{props.text}</div>
            <div className={styles.circle}>+</div>
        </button>
    )
}


export default AddBtn;