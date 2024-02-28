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
            <ul className={styles.test}>
            {props.links && props.links.map((link: MenuData, i: Number) => 
            (<div key={link.title}><li style={{
                zIndex: `${-i}`,
            }}><a href={link.link}>{link.title}</a></li></div>))}
            </ul>
        </div>
    )
}