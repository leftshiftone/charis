import * as React from 'react';
import IIcon from '../../api/IIcon';

export default class SvgCheck extends React.Component<SvgProps, {}> implements IIcon {

    public render() {
        return(
            <svg className={this.props.className || ""} onClick={this.props.onClick} viewBox="0 0 100 100">
                <path stroke="rgb(0,0,0)" strokeWidth="300" d="M 8600,200 L 3633,9600"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" d="M 1200,5800 L 3680,9481"/>
            </svg>
        );
    }

}
interface SvgProps {
    className?:string;
    onClick?:() => void;
}
