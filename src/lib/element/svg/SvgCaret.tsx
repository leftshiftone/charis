import * as React from 'react';
import {Component} from 'react';
import {MouseEvent} from "react";
import ModalAssembly from "../../api/assembly/ModalAssembly";
import Emitter from "../../api/emitter/Emitter";

export default class SvgCaret extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg className={"lto-svg-caret " + this.props.className || ""} viewBox="0 0 10000 10000" onClick={this.onClick}>
                <g>
                    <path fill="none" d="M 400,7200 L 5242,2400"/>
                    <path fill="none" d="M 9600,7200 L 4600,2400"/>
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
    className?:string;
    onClick: ((e: MouseEvent<SVGElement>) => void) | ModalAssembly;
}
