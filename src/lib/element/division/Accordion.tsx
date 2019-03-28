import * as React from "react";

export default class Accordion extends React.Component<AccordionProps, AccordionState> {

    private accordion: HTMLDivElement | null = null;

    constructor(props: AccordionProps) {
        super(props);
        this.state = {collapsed: true};
    }

    public componentDidMount() {
        if (this.accordion) {
            const elements = this.accordion.querySelectorAll("[data-lto-trigger='accordion']");
            elements.forEach(e => e.addEventListener("click", () => this.setState({collapsed: !this.state.collapsed})));
        }
    }

    public render() {
        return (
            <div ref={div => this.accordion = div} className={`lto-accordion ${this.state.collapsed ? "lto-collapsed" : ""}`}>
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
}

interface AccordionState {
    collapsed: boolean;
}
