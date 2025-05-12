import styles from './Button.module.css';

function Button() {
    let count = 0;

    const handleClick = (e) => {
        e.target.textContent = "OHCH";
    };

    return (
        <button className={styles.button} onClick={handleClick}>Click Me</button>
    );
}

export default Button;