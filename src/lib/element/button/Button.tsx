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
import ModalAssembly from "../../api/assembly/ModalAssembly";

export default class Button extends React.Component<ButtonProps, ButtonState> {

    constructor(props: ButtonProps) {
        super(props);
        this.state = {clicked: false};
    }

    public render() {
        const classNames = [];
        classNames.push("lto-charis-button");
        if (this.props.className) {
            classNames.push(this.props.className);
        }
        if (this.props.disabled) {
            classNames.push("lto-disabled");
        }
        if (this.props.block) {
            classNames.push("lto-block");
        }

        return (
            <React.Fragment>
                <button className={classNames.join(" ")} onClick={this.onClick.bind(this)} style={this.props.style}
                        autoFocus={this.props.autoFocus || false}>
                    {this.props.children}
                </button>
            </React.Fragment>
        );
    }

    private onClick(e: MouseEvent<HTMLButtonElement>) {
        if (!toBoolean(this.props.disabled)) {
            if (!this.isModal()) {
                (this.props.onClick as ((e: MouseEvent<HTMLButtonElement>) => void))(e);
            } else {
                this.setState({clicked: !this.state.clicked});
            }
        }
    }

    private isModal = () => typeof this.props.onClick !== "function";

}

interface ButtonProps {
    onClick: ((e: MouseEvent<HTMLButtonElement>) => void) | ModalAssembly;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    children: (string | React.ReactElement<HTMLBRElement>) | (string | React.ReactElement<HTMLBRElement>)[];
    block?: boolean;
    autoFocus?: boolean;
}

interface ButtonState {
    clicked: boolean;
}
