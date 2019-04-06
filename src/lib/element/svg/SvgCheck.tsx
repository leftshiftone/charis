import * as React from 'react';
import AbstractSvgComponent from "./AbstractSvgComponent";

export default class SvgCheck extends AbstractSvgComponent {

    protected renderSvg() {
        return (
            <React.Fragment>
                <path stroke="rgb(0,0,0)" strokeWidth="500" d="M 8600,200 L 3633,9600"/>
                <path stroke="rgb(0,0,0)" strokeWidth="500" d="M 1200,5800 L 3680,9481"/>
            </React.Fragment>
        );
    }

}
