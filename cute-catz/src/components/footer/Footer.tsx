import { PropsWithChildren } from "react";
import styles from "./Footer.module.scss";

export default function Footer(props : PropsWithChildren) {


    return (
      <div className={`${styles.footer}`}>
        <div className={`${styles["content-container"]}`}>
          <h1 className={styles.footer__label}>Footer</h1>
            {props.children}
        </div>
      </div>
    );
}