import * as React from 'react';
import {Component} from 'react';
import ModalAssembly from "../../api/assembly/ModalAssembly";
import {MouseEvent} from "react";
import Emitter from "../../api/emitter/Emitter";

export default class SvgCode extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg width="100mm" height="100mm" viewBox="0 0 10000 10000" className={this.props.className}
                 onClick={this.onClick}>
                <g>
                    <path stroke="black" strokeWidth="300" d="M 2600,8900 L 400,4900"/>
                    <path stroke="black" strokeWidth="300" d="M 2600,1100 L 400,5100"/>
                    <path stroke="black" strokeWidth="300" d="M 9600,4900 L 7400,8900"/>
                    <path stroke="black" strokeWidth="300" d="M 9600,5100 L 7400,1100"/>
                    <path stroke="black" strokeWidth="300" d="M 6400,41 L 3600,10000"/>
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
