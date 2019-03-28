import * as React from "react";
import {ChangeEvent, CSSProperties} from "react";

export default class Radiobutton extends React.Component<RadiobuttonProps, {}> {

    public render() {
        return (
            <label className="lto-radiobutton">
                <input type="radio"
                       name={this.props.name}
                       value={this.props.value}
                       checked={this.props.checked}
                       onChange={this.props.onChange}/>
                <span className="checkmark"/>
                <span className="text">{this.props.children}</span>
                <div style={{clear: "both"}}/>
            </label>
        );
    }

}

interface RadiobuttonProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: ChangeEvent<any>) => void;
    style?: CSSProperties;
    class?: string;
}
