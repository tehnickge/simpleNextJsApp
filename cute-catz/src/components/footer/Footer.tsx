import { PropsWithChildren } from "react";

export default function Footer(props : PropsWithChildren) {


    return (
        <div style={{
            backgroundColor: 'red',
        }}>
            <div>
                Footer
                {props.children}
            </div>
        </div>
    )
}