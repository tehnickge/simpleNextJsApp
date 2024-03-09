import styles from "./Header.module.scss";
export default function Header() {

    return (
        <div className={`${styles.header} ${styles['content-container']}`}>
            <div className={`${styles["content-container"]}`}>
                Header
            </div>
        </div>
    )
}