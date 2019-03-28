import * as React from 'react';
import {Component} from 'react';

export default class SvgCaret extends Component<SvgProps, {}> {

    constructor(props: SvgProps) {
        super(props);
    }

    public render() {
        return (
            <svg className={"lto-svg-caret"} viewBox="0 0 10000 10000">
                <g>
                    <path fill="none" d="M 400,7200 L 5242,2400"/>
                    <path fill="none" d="M 9600,7200 L 4600,2400"/>
                </g>
            </svg>
        );
    }

}

interface SvgProps {
    width?: string;
    height?: string;
}
