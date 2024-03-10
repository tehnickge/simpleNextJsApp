import Styles from "./DalyButton.module.scss";
import { JazzBallThin, JazzBallBold, BIPs } from "@/components/common/fonts";

export interface DalyButtonProps {
  size: string,
  variant: string,
  font: string,
  children: string | React.ReactNode | React.ReactNode[] | undefined,
}

const font :{[key: string]: string} = {
  "jazzt" : JazzBallThin.className,
  "jazzb" : JazzBallBold.className,
  "bips" : BIPs.className,
  "" : "",
};

const size :{[key: string]: string} = {
  "xs" : "btn-xs",
  "sm" : "btn-sm",
  "md" : "btn-md",
  "lg" : "btn-lg",
};

const variant : {[key: string]: string} = {
    "primary" : "btn-primary", 
    'success' : "btn-success",
    "danger"  : "btn-danger",
    "default" : "btn-default",
    "primary-outline" : "btn-primary-outline",
}


export default function DalyButton(props: DalyButtonProps) {
  return (
        <button
          className={`${Styles.btn} ${Styles[variant[props.variant]]} ${
            Styles[size[props.size]]
          }`}
        >
          <label className={`${font[props.font]} ${Styles.btn__label}`}>{props.children}</label>
        </button>
  );
}