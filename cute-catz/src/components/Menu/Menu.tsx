import styles from "./Menu.module.scss"

export interface MenuData {
    title: string | undefined;
    link: string | undefined;
}

export interface MenuProps {
    links: MenuData[];
 //   children: string | React.ReactNode | React.ReactNode[] | undefined;
}

export default function Menu(props : MenuProps) {



    return (
        <div className={styles.menu}>
            <div className="card__image">

            </div>
            <ul className={styles.test}>
            {props.links.forEach((link: MenuData, i: Number) => (<div>{console.log("jopa",link,i)}</div>))}
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>   
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
                <li><a href="#">home</a></li>
            </ul>
        </div>
    )
}