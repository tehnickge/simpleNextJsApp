import { PropsWithChildren } from "react";
import Styles from "./Footer.module.scss";

export default function Footer(props : PropsWithChildren) {


    return (
      <div className={Styles.wrapper}>
        <div className={Styles.footer}>
          <h1 className={Styles.footer__label}>Footer</h1>
          {props.children}
        </div>
      </div>
    );
}