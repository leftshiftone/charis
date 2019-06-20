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
import {MouseEvent} from 'react';
import IIcon from "../../api/IIcon";
import {toBoolean} from "../../api/Boolean";
import Assembly from "../../api/assembly/ModalAssembly";
import Emitter from "../../api/emitter/Emitter";
import Tooltip from "../division/Tooltip";

export class DropdownItem extends React.Component<DropdownProps, DropdownState> {

    constructor(props: DropdownProps) {
        super(props);
        this.state = {clicked: false};
    }

    public render() {
        const classes: string[] = [];
        classes.push("lto-dropdown-item");
        if (toBoolean(this.props.disabled)) {
            classes.push("lto-disabled");
        }
        if (toBoolean(this.props.center)) {
            classes.push("lto-center");
        }
        if (this.props.className) {
            classes.push(this.props.className);
        }
        if (this.props.selected) {
            classes.push("lto-selected");
        }

        return <li className={classes.join(" ")} onClick={(e: MouseEvent<HTMLLIElement>) => {
            if (!toBoolean(this.props.disabled, false)) {
                if (this.props.onClick) {
                    if (!this.isModal()) {
                        (this.props.onClick as ((e: MouseEvent<HTMLLIElement>) => void))(e);
                    } else {
                        Emitter.emit("charis:modalContainer:show", this.props.onClick);
                    }
                } else {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        }}>
            {
                this.props.tooltip ?
                    <Tooltip text={this.props.tooltip}
                             orientation={this.props.tooltipOrientation || "right"}>{this.props.icon}</Tooltip> :
                    this.props.icon
            }
            {this.renderContent()}
        </li>;
    }

    private renderContent() {
        if (typeof this.props.children === "string") {
            return (<span>{this.props.children}</span>);
        }
        return this.props.children;
    }

    private isModal() {
        return typeof this.props.onClick !== "function" && this.props.onClick !== undefined;
    }

}

interface DropdownProps {
    className?: string;
    disabled?: boolean;
    center?: boolean;
    onClick?: ((e: MouseEvent<HTMLLIElement>) => void) | Assembly;
    children?: string | React.ReactElement<any>[] | React.ReactElement<any>;
    icon?: React.ReactElement<IIcon>;
    selected?: boolean;
    tooltip?: string;
    tooltipOrientation?: "top" | "bottom" | "right" | "left";
}

interface DropdownState {
    clicked: boolean;
}
