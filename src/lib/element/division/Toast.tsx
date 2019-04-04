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
import ToastAssembly from "../../api/assembly/ToastAssembly";
import Emitter from "../../api/emitter/Emitter";

export default class Toast extends React.Component<ToastProps, {}> {

    constructor(props: ToastProps) {
        super(props);
    }

    public render() {
        return (
            <aside className={`lto-toast lto-toast-${this.props.assembly.getType()}`}>
                <span>{this.props.assembly.getText()}</span>
                <button onClick={this.props.onClick}>&times;</button>
                {this.renderDetails()}
            </aside>
        );
    }

    private renderDetails() {
        if (this.props.assembly.getInfo()) {
            return <details>
                <summary>details:</summary>
                <span>{this.props.assembly.getInfo()}</span>
            </details>
        }
        return <React.Fragment />;
    }

    public static show(assembly: ToastAssembly, timeout?:number) {
        Emitter.emit("charis:toastContainer:show", assembly);
        if (timeout) {
            setTimeout(() => Emitter.emit("charis:toastContainer:hide", assembly), timeout);
        }
    }

}

interface ToastProps {
    assembly: ToastAssembly;
    onClick: () => void;
}
