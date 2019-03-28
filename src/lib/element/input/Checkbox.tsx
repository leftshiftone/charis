import * as React from "react";
import {ChangeEvent, CSSProperties} from "react";

export default class Checkbox extends React.Component<CheckboxProps, {}> {

    public render() {
        return (
            <label className="lto-checkbox">
                <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/>
                <span className="checkmark"/>
                <span className="text">{this.props.children}</span>
                <div style={{clear: "both"}}/>
            </label>
        );
    }
}

interface CheckboxProps {
    checked: boolean;
    onChange: (event: ChangeEvent<any>) => void;
    style?: CSSProperties;
    class?: string;
}
