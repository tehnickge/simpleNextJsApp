import styles from "./Header.module.scss";
import HeaderLinks, { HeaderLink } from "./HeaderLinks";
import Link from "./HeaderLinks";
export default function Header() {

    const links : HeaderLink[] = [
        {href: "aboba",title: "kek"},{href: "aboba",title: "kek"},{href: "aboba",title: "kek"}
    ];
    return (
        <div className={`${styles.header}`}>
            <div className={`${styles["content-container"]}`}>
                <HeaderLinks Links={links}/>
            </div>
        </div>
    )
}