import * as React from 'react';
import IIcon from "../api/IIcon";

export default class SvgCode extends React.Component<SvgProps, {}> implements IIcon {

    public render() {
        return(
            <svg className={this.props.className || ""}>
                <path stroke="rgb(0,0,0)" strokeWidth="300" d="M 2600,8900 L 400,4900"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" d="M 2600,1100 L 400,5100"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" d="M 9600,4900 L 7400,8900"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" d="M 9600,5100 L 7400,1100"/>
                <path stroke="rgb(0,0,0)" strokeWidth="300" d="M 6400,41 L 3600,10000"/>
            </svg>
        );
    }

}
interface SvgProps {
    className?:string;
}
