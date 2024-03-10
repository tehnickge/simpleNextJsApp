import styles from "./Header.module.scss";
export default function Header() {

    return (
        <div className={`${styles.header}`}>
            <div className={`${styles["content-container"]}`}>
                Header
            </div>
        </div>
    )
}