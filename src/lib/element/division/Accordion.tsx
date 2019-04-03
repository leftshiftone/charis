import * as React from "react";
import {toBoolean} from "../../api/Boolean";

export default class Accordion extends React.Component<AccordionProps, AccordionState> {

    private accordion: HTMLDivElement | null = null;

    constructor(props: AccordionProps) {
        super(props);
        this.state = {collapsed: toBoolean(props.collapsed, true)};
    }

    public componentDidMount() {
        if (this.accordion) {
            const elements = this.accordion.querySelectorAll("[data-lto-trigger='accordion']");
            elements.forEach(e => e.addEventListener("click", () => this.setState({collapsed: !this.state.collapsed})));
        }
    }

    public render() {
        const classNames = ["lto-accordion"];
        if (this.state.collapsed) {
            classNames.push("lto-collapsed");
        }
        if (this.props.className) {
            classNames.push(this.props.className);
        }

        return (
            <div ref={div => this.accordion = div} className={classNames.join(" ")}>
                <div className={"lto-accordion-control"}>
                    {this.props.control}
                </div>
                <div className={`lto-accordion-content`}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}

interface AccordionProps {
    control: React.ReactElement<any>;
    className?:string;
    collapsed?: boolean;
}

interface AccordionState {
    collapsed: boolean;
}
