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
import {toBoolean} from "../../api/Boolean";
import Assembly from "../../api/Assembly";

export default class Toggle extends React.Component<ToggleProps, ToggleState> {

    constructor(props: ToggleProps) {
        super(props);
        this.state = {clicked: this.props.clicked || false};
    }

    public render() {
        const disabled = toBoolean(this.props.disabled);

        const classNames = [];
        classNames.push(this.props.className || "");
        classNames.push("lto-toggle");
        classNames.push(disabled ? "lto-disabled" : "");
        classNames.push(this.state.clicked ? "lto-clicked" : "");

        return (
            <button className={classNames.join(" ")}
                    onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        if (!disabled) {
                            if (!this.isModal()) {
                                (this.props.onClick as ((e: MouseEvent<HTMLButtonElement>) => void))(e);
                                this.setState({clicked: !this.state.clicked});
                            } else {
                                this.setState({clicked: !this.state.clicked});
                            }
                        }
                    }} style={this.props.style}>
                {this.props.children}
            </button>
        );
    }

    private isModal() {
        return typeof this.props.onClick !== "function";
    }

}

interface ToggleProps {
    clicked?: boolean;
    onClick: ((e: MouseEvent<HTMLButtonElement>) => void) | Assembly;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    children: string;
}

interface ToggleState {
    clicked: boolean;
}
