import * as React from 'react';
import IIcon from '../../api/IIcon';
import {MouseEvent} from "react";
import ModalAssembly from "../../api/assembly/ModalAssembly";
import Emitter from "../../api/emitter/Emitter";

export default class SvgCheck extends React.Component<SvgProps, {}> implements IIcon {

    public render() {
        return(
            <svg className={this.props.className || ""} onClick={this.onClick} viewBox="0 0 10000 10000">
                <path stroke="rgb(0,0,0)" strokeWidth="500" d="M 8600,200 L 3633,9600"/>
                <path stroke="rgb(0,0,0)" strokeWidth="500" d="M 1200,5800 L 3680,9481"/>
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
