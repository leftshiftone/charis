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
import Option from "./Option";
import {toBoolean} from "../../api/Boolean";

export default class Select extends React.Component<SelectProps, {}> {

    constructor(props: SelectProps) {
        super(props);
    }

    public render() {
        const disabled = toBoolean(this.props.disabled);

        return (
            <select className={`${this.props.class} lto-select ${disabled ? "lto-disabled" : ""}`}
                    onChange={(e:any) => this.props.onChange(e.target.value)}>
                {this.props.children}
            </select>
        );
    }
}

interface SelectProps {
    onChange: (value: string) => void;
    disabled?: boolean;
    children: Array<React.ReactElement<Option>>;
    style?: CSSProperties;
    class?: string;
}
