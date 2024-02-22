import { PropsWithChildren } from "react";

export default function Footer(props : PropsWithChildren) {



    return (
        <div style={{
            backgroundColor: 'red',
        }}>
            <div>
                {props.children}
            </div>
        </div>
    )
}