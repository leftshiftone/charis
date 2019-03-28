import * as React from 'react';
import {CSSProperties} from 'react';

export default class Password extends React.Component<PasswordProps, {}> {
    public render() {
        return (
            <input type="password"
                   className={"lto-input-password"}
                   value={this.props.value || ""}
                   onChange={this.props.onChange}
                   placeholder={this.props.placeholder || "Password"}
                   required={true}/>
        );
    }
}

interface PasswordProps {
    value?: string;
    onChange: (e: any) => void;
    placeholder?: string;
    style?: CSSProperties;
    class?: string;
}
