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
import {CSSProperties} from 'react';

export default class Switch extends React.Component<ToggleButtonProps, {}> {

    // @ts-ignore
    private toggle: HTMLDivElement | null;
    // @ts-ignore
    private toggleContainer: HTMLDivElement | null;

    constructor(props: ToggleButtonProps) {
        super(props);
    }

    public render() {
        return (
            <div ref={div => this.toggle = div} className={`lto-switch`} style={this.props.style}>
                <div className="inner-container">
                    <div className="toggle">
                        <p>{this.props.label2}</p>
                    </div>
                    <div className="toggle">
                        <p>{this.props.label1}</p>
                    </div>
                </div>
                <div ref={div => this.toggleContainer = div} className="inner-container">
                    <div className="toggle">
                        <p>{this.props.label2}</p>
                    </div>
                    <div className="toggle">
                        <p>{this.props.label1}</p>
                    </div>
                </div>
            </div>
        );
    }

    public componentDidMount() {
        let toggleNumber: boolean;
        const $this = this;

        if (this.toggle && this.toggleContainer) {
            this.toggle.addEventListener('click', () => {
                toggleNumber = !toggleNumber;
                if (toggleNumber) {
                    if ($this.toggleContainer) {
                        $this.toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
                    }
                } else {
                    if ($this.toggleContainer) {
                        $this.toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
                    }
                }
                this.props.onClick(toggleNumber);
            });
        }
    }

}

interface ToggleButtonProps {
    onClick: (toggle: boolean) => void;
    label1: string;
    label2: string;
    style?: CSSProperties;
    class?: string;
}
