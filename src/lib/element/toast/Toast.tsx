import * as React from 'react';
import * as reactDom from 'react-dom';

export default class Toast extends React.Component<ToastProps, {}> {

    constructor(props: ToastProps) {
        super(props);
    }

    public render() {
        return (
            <aside className={`lto-toast lto-toast-${this.props.type}`}>{this.props.text}</aside>
        );
    }

    public static create() {
        if (!document.getElementById("lto-toasts")) {
            const div = document.createElement("div") as HTMLDivElement;
            div.id = "lto-toasts";
            (document.getElementById("root") as HTMLDivElement).appendChild(div);
        }
        const container = document.getElementById("lto-toasts");
        reactDom.render(<Toast text={""} type={"info"} />, container);
    }

}

interface ToastProps {
    text: string;
    type: "info" | "warn" | "error";
}
