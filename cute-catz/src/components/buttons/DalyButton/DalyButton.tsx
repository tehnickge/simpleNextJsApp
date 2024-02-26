import Styles from "./DalyButton.module.scss";

export interface DalyButtonProps {
  size: string;
  variant: string;
  children: string | React.ReactNode | React.ReactNode[] | undefined;
}

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
          {props.children}
        </button>
  );
}