import * as React from 'react';
import AbstractSvgComponent from "./AbstractSvgComponent";

export default class SvgCaret extends AbstractSvgComponent {

    protected renderSvg() {
        return (
            <g>
                <path fill="none" d="M 400,7200 L 5242,2400"/>
                <path fill="none" d="M 9600,7200 L 4600,2400"/>
            </g>
        );
    }

}
