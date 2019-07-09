import * as React from 'react';
import {CSSProperties} from 'react';

export default class Email extends React.Component<EmailProps, {}> {
    public render() {
        return (
            <input type="email"
                   className={"lto-input-email"}
                   value={this.props.value || ""}
                   onChange={this.props.onChange}
                   onKeyPress={this.props.onKeyPress}
                   placeholder={this.props.placeholder || "Username"}
                   required={true}/>
        );
    }
}

interface EmailProps {
    value?: string;
    onChange: (e: any) => void;
    onKeyPress?: (e: any) => void;
    placeholder?: string;
    style?: CSSProperties;
    class?: string;
}
