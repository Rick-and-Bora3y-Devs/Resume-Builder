
import styles from '../Css/AddBtn.module.css';

function AddBtn(){
    return(
        <button className={styles.btn}>
            <div className={styles.btnText}>Add A Professional Summary</div>
            <div className={styles.circle}>+</div>
        </button>
    )
}


export default AddBtn;