/*
 * Copyright (c) 2016-2018, Leftshift One
 * __________________
 * [2018] Leftshift One
 * All Rights Reserved.
 * NOTICE:  All information contained herein is, and remains
 * the property of Leftshift One and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Leftshift One
 * and its suppliers and may be covered by Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Leftshift One.
 */

import * as React from 'react';
import {CSSProperties, MouseEvent} from 'react';
import Assembly from "../../api/assembly/ModalAssembly";
import ModalAssembly from "../../api/assembly/ModalAssembly";
import Emitter from "../../api/emitter/Emitter";

export default class Modal extends React.Component<ModalProps, {}> {

    constructor(props: ModalProps) {
        super(props);
    }

    public render() {
        if (this.props.assembly.getText() === undefined || this.props.assembly.getText() === null) {
            return this.renderWithoutHeader();
        }
        return this.renderWithHeader();
    }

    public renderWithHeader() {
        return (
            <div style={this.getStyleA()}
                 className={`lto-modal ${this.props.visible ? "visible" : ""} lto-modal-${this.props.assembly.getSize()}`}>
                <div className={"lto-modal-block"} style={this.getStyleB()}>
                    <h2>{this.props.assembly.getText()}</h2>
                    {
                        this.props.assembly.getShowCloseButton()
                            ? <button onClick={this.props.onClose}>&times;</button>
                            : <div />
                    }
                    {this.props.children}
                </div>
            </div>
        );
    }

    public renderWithoutHeader() {
        return (
            <div className={`lto-modal ${this.props.visible ? "visible" : ""}`}>
                {this.props.children}
            </div>
        );
    }

    private getStyleA(): CSSProperties {
        if (this.props.assembly.getSize() === "full" && typeof screen !== "undefined") {
            return {height: screen.height + "px"};
        }
        return {};
    }

    private getStyleB(): CSSProperties {
        if (this.props.assembly.getSize() === "full" && typeof screen !== "undefined") {
            return {height: "75%", width: "95%"};
        }
        if (this.props.assembly.getSize() === "half" && typeof screen !== "undefined") {
            return {width: "50%"};
        }
        if (this.props.assembly.getSize() === "third" && typeof screen !== "undefined") {
            return {width: "33%"};
        }
        return {};
    }

    public static show(assembly: ModalAssembly) {
        Emitter.emit("charis:toastContainer:show", assembly);
    }

}

interface ModalProps {
    assembly: Assembly;
    onClose?: (e: MouseEvent<HTMLButtonElement>) => void;
    visible?: boolean;
}
