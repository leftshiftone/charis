import * as React from 'react';
import {Component, MouseEvent} from 'react';
import ModalAssembly from "../../api/assembly/ModalAssembly";
import Emitter from "../../api/emitter/Emitter";
import IIcon from "../../api/IIcon";
import {isNotNull} from "../../api/Objects";

export default abstract class AbstractSvgComponent extends Component<SvgProps, {}> implements IIcon {

    public render() {
        const className:string[] = [];
        if (this.props.className) {
            className.push(this.props.className);
        }

        return (
            <svg className={className.join(" ")} onClick={this.onClick.bind(this)} width="100mm" height="100mm"
                 viewBox="0 0 10000 10000">
                {this.renderSvg()}
            </svg>
        );
    }

    protected abstract renderSvg():React.ReactElement<any>;

    private onClick(e: MouseEvent<SVGElement>) {
        if (isNotNull(this.props.onClick)) {
            if (typeof this.props.onClick === "function") {
                (this.props.onClick as ((e: MouseEvent<SVGElement>) => void))(e);
            } else {
                Emitter.emit("charis:modalContainer:show", this.props.onClick);
            }
        }
    }

}

interface SvgProps {
    className?: string;
    onClick?: ((e: MouseEvent<SVGElement>) => void) | ModalAssembly;
}
