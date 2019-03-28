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

export default class Textarea extends React.Component<TextareaProps, {}> {

    private textarea: HTMLTextAreaElement | null = null;

    constructor(props: TextareaProps) {
        super(props);
    }

    public render() {
        return (<textarea ref={e => this.textarea = e}
                          className={"lto-textarea"}
                          rows={this.props.rows || 2}
                          value={this.props.value}
                          onChange={(e) => {
                              if (this.props.onChange) {
                                  this.props.onChange(e.target.value);
                              }
                          }}
                          placeholder={this.props.placeholder}/>);
    }

    public componentDidMount() {
        if (this.textarea) {
            this.textarea.addEventListener("keydown", (e: KeyboardEvent) => {
                // @ts-ignore
                const lines = this.textarea.value.split("\n").length;
                if (e.code === "Enter" && lines === this.props.rows) {
                    e.preventDefault();
                    return false;
                }
                return true;
            });
        }
    }

}

interface TextareaProps {
    rows?: number;
    placeholder?: string;
    value?:string;
    onChange?:(e:string) => void;
}
