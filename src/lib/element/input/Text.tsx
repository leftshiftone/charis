import * as React from 'react';
import {CSSProperties} from 'react';
import {toBoolean} from "../../api/Boolean";

export default class Text extends React.Component<TextProps, TextState> {

    private input: HTMLInputElement | null = null;

    constructor(props:TextProps) {
        super(props);
        this.state = {valid:true};
    }

    public render() {
        return (
            <input ref={input => this.input = input}
                   type="text"
                   style={this.props.style}
                   className={`lto-input-text ${this.state.valid ? "" : "lto-invalid"} ${this.props.className || ""}`}
                   value={this.props.value || ""}
                   onChange={(e) => {
                       this.validate();
                       return this.props.onChange(e.target.value);
                   }}
                   placeholder={this.props.placeholder}
                   pattern={this.props.pattern}
                   required={toBoolean(this.props.required)}/>
        );
    }

    private validate() {
        if (this.props.pattern && this.input && !this.input.checkValidity()) {
            if (this.state.valid) {
                this.setState({valid:false});
            }
        } else {
            this.setState({valid:true});
        }
    }

}

interface TextProps {
    value?: string;
    onChange: (e: string) => void;
    placeholder?: string;
    style?: CSSProperties;
    className?: string;
    pattern?: string;
    required?: boolean;
}
interface TextState {
    valid:boolean;
}
