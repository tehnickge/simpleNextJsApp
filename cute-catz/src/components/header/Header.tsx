import styles from "./Header.module.scss"

console.log(styles);
export default function Header() {

    return (
        <div className={`${styles.header}`}>
            <div className={`${styles["content-container"]}`}>
                Header
            </div>
        </div>
    )
}