import { PropsWithChildren } from "react";
import style from "./Footer.module.scss";

export default function Footer(props : PropsWithChildren) {


    return (
      <div className={`${style.footer}`}>
        <div className={`${style["content-container"]}`}>
          <h1 className={style.footer__label}>Footer</h1>
            {props.children}
        </div>
      </div>
    );
}