import * as React from "react"

export default class Tooltip extends React.Component<TooltipProps, {}> {

    public render() {
        return (
            <div className={`lto-tooltip lto-tooltip-${this.props.orientation || "top"} ` + (this.props.className || "")}>
                {this.props.children}
                <span className={"lto-tooltip-text"}>{this.props.text}</span>
            </div>
        )
    }

}
interface TooltipProps {
    text:string;
    className?:string;
    orientation?:"left" | "right" | "top" | "bottom"
}
