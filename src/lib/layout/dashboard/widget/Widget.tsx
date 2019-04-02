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
import Emitter from "../../../api/emitter/Emitter";
import ModalAssembly from "../../../api/assembly/ModalAssembly";

export default class Widget extends React.Component<WidgetProps, {}> {

    // @ts-ignore
    private div: HTMLDivElement | null = null;

    constructor(props: WidgetProps) {
        super(props);
        this.onDoubleClick = this.onDoubleClick.bind(this);
    }

    public render() {
        const style = (this.props.autoHeight) ? (typeof screen !== "undefined") ? {height: ((screen.height - 300) / 2)} : {height: 300} : {};

        return (
            <div className={this.getColClass()} onDoubleClick={this.onDoubleClick}>
                <div className={"widget"} style={style}>
                    {this.props.children}
                </div>
                <div ref={div => this.div = div}/>
            </div>
        );
    }

    private getColClass() {
        switch (this.props.type) {
            case "small":
                return "col-md-3";
            case "medium":
                return "col-md-4";
            case "large":
                return "col-md-6";
            case "xlarge":
                return "col-md-12";
            default:
                throw Error("unexpected type: " + this.props.type);
        }
    }

    private onDoubleClick() {
        if (this.props.expandable) {
            Emitter.emit("charis:modalContainer:show", new ModalAssembly("", () => this.props.children, "full"));
        }
    }

}

interface WidgetProps {
    type: "small" | "medium" | "large" | "xlarge";
    expandable?: boolean;
    autoHeight?: boolean;
    children: React.ReactElement<any> | React.ReactElement<any>[];
}
