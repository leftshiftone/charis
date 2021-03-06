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
import {DropdownItem} from "./DropdownItem";
import {DropdownSeparator} from "./DropdownSeparator";
import IIcon from "../../api/IIcon";

export class Dropdown extends React.Component<DropdownProps, DropdownState> {

    private div:HTMLDivElement | null = null;

    constructor(props: Readonly<DropdownProps>) {
        super(props);
        this.state = {collapsed:this.props.collapsed || false};
    }

    public componentDidMount() {
        const $this = this;
        if (this.div && this.props.action === "hover") {
            this.div.addEventListener("mouseenter", () => {
                if (!this.state.collapsed) {
                    $this.setState({collapsed: true});
                }
            });
            this.div.addEventListener("mouseleave", () => {
                if (this.state.collapsed) {
                    $this.setState({collapsed: false});
                }
            });
        } else if (this.div && this.props.autoCollapse === true) {
            document.addEventListener("click", (e:any) => {
                if (this.state.collapsed && !this.isChildOf(e.target, this.div)) {
                    $this.setState({collapsed: false});
                }
            }, false)
        }
    }

    private isChildOf(child:any, parent:any):boolean {
        if (child.parentNode === parent) {
            return true;
        } else if (child.parentNode === null) {
            return false;
        } else {
            return this.isChildOf(child.parentNode, parent);
        }
    }

    public render() {
        return (
            <div ref={div => this.div = div} className={"lto-dropdown " + (this.props.class || "")} onClick={this.toggle.bind(this)}>
                <div style={{clear:"both", display:"inline-block", width: "100%"}}>
                    {this.props.icon}
                    {this.props.text ? <span>{this.props.text}</span> : <React.Fragment />}
                    <div className={`lto-caret ${this.state.collapsed ? "collapsed" : ""}`} />
                </div>
                <ul className={`${this.state.collapsed ? "collapsed" : ""}`}>
                    {this.props.children}
                </ul>
            </div>
        );
    }

    private toggle() {
        this.setState({collapsed:!this.state.collapsed});
    }

}
interface DropdownProps {
    text?: string;
    icon?: React.ReactElement<IIcon>;
    class?: string;
    children: React.ReactElement<DropdownItem | DropdownSeparator> | React.ReactElement<DropdownItem | DropdownSeparator>[];
    action?:"click" | "hover";
    collapsed?:boolean;
    autoCollapse?:boolean;
}
interface DropdownState {
    collapsed:boolean;
}
