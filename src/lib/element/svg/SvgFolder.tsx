import * as React from 'react';
import {Component} from 'react';
import ModalAssembly from "../../api/assembly/ModalAssembly";
import {MouseEvent} from "react";
import Emitter from "../../api/emitter/Emitter";

export default class SvgFolder extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg viewBox="0 0 10000 10000" className={this.props.className || ""} onClick={this.onClick}>
                <g>
                    <path className={"fillColour"} stroke="none" d="M 5000,8700 L 0,8700 0,2195 10000,2195 10000,8700 5000,8700 Z"/>
                    <path className={"strokeColour"} fill="none" strokeLinejoin="round" d="M 5000,8700 L 0,8700 0,2195 10000,2195 10000,8700 5000,8700 Z"/>
                    <path className={"fillColour"} stroke="none" d="M 2904,1299 L 4033,2195 2904,2195 2904,1299 2904,1299 Z"/>
                    <path className={"strokeColour"} fill="none" strokeLinejoin="round" d="M 2904,1299 L 4033,2195 2904,2195 2904,1299 2904,1299 Z"/>
                    <rect fill="none" stroke="none" x="2904" y="1300" width="1129" height="896"/>
                    <path className={"fillColour"} stroke="none" d="M 1452,2195 L 0,2195 0,1300 2904,1300 2904,2195 1452,2195 Z"/>
                    <path className={"strokeColour"} fill="none" strokeLinejoin="round" d="M 1452,2195 L 0,2195 0,1300 2904,1300 2904,2195 1452,2195 Z"/>
                </g>
            </svg>
        );
    }

    private onClick(e: MouseEvent<SVGElement>) {
        if (typeof this.props.onClick === "function") {
            (this.props.onClick as ((e: MouseEvent<SVGElement>) => void))(e);
        } else {
            Emitter.emit("charis:modalContainer:show", this.props.onClick);
        }
    }

}
interface SvgProps {
    className?: string;
    onClick: ((e: MouseEvent<SVGElement>) => void) | ModalAssembly;
}
