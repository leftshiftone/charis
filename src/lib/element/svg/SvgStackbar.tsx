import * as React from 'react';
import {Component} from 'react';
import ModalAssembly from "../../api/assembly/ModalAssembly";
import {MouseEvent} from "react";
import Emitter from "../../api/emitter/Emitter";

export default class SvgStackbar extends Component<SvgProps, {}> {

    public render() {
        return (
            <svg className={this.props.className} onClick={this.onClick} width="100mm" height="100mm"
                 viewBox="0 0 10000 10000">
                <g>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_3_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 0,9754 L 10000,9754"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_4_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 585,8781 L 585,6834"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_5_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 1466,8781 L 1466,1947"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_6_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 2348,8781 L 2348,5850"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_7_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 3229,8781 L 3229,4877"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_8_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 4119,8781 L 4119,0"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_9_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 5000,8781 L 5000,3904"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_10_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 5881,8781 L 5881,973"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_11_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 6763,8781 L 6763,5850"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_12_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 7644,8781 L 7644,1947"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_13_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 8526,8781 L 8526,4877"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_14_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 9407,8781 L 9407,3904"/>
                    <path fill="none" stroke="rgb(0, 0, 0)" id="Drawing_15_0" strokeWidth="510" strokeLinejoin="round"
                          d="M 9407,8781 L 9407,3904"/>
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
