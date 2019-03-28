import * as React from "react";
import {toBoolean} from "../../api/Boolean";

export default class EditableSpan extends React.Component<EditableLabelProps, {}> {

    private span: HTMLSpanElement | null = null;

    constructor(props: EditableLabelProps) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    public componentDidMount() {
        if (this.span) {
            this.span.addEventListener("keyup", this.onKeyUp, false);
            this.span.addEventListener("keypress", this.onKeyPress, false);
            this.span.addEventListener("blur", this.onBlur, false);
        }
    }

    public componentWillUnmount() {
        if (this.span) {
            this.span.removeEventListener("keyup", this.onKeyUp, false);
            this.span.removeEventListener("keypress", this.onKeyPress, false);
            this.span.removeEventListener("blur", this.onBlur, false);
        }
    }

    public render() {
        return (<span ref={span => this.span = span} contentEditable={true} suppressContentEditableWarning={true}>
            {this.props.children}
            </span>);
    }

    private onKeyUp(e: KeyboardEvent) {
        if (e.code === "Enter" && this.span) {
            this.span.blur();
        }
    }

    // noinspection JSMethodCanBeStatic
    private onKeyPress(e: KeyboardEvent) {
        if (this.props.disabled) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (e.code === "Enter") {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    private onBlur(e: any) {
        if (!toBoolean(this.props.disabled)) {
            this.props.onChange(e.target["textContent"]);
        }
    }

}

interface EditableLabelProps {
    children: string;
    onChange: (e: string) => void;
    disabled?: boolean;
}
