import * as React from 'react';
import {Component} from 'react';
import Emitter from "../../api/emitter/Emitter";

export default class Dynamic extends Component<DynamicProps, DynamicState> {

    constructor(props: DynamicProps) {
        super(props);
        this.state = {component: this.getDefaultComponent()};
    }

    public render() {
        return this.state.component;
    }

    public componentDidMount() {
        this.props.children.forEach(e => {
            const eventName = e.props.eventName;
            const component = e.props.component;

            Emitter.addListener(eventName, () => {
                this.setState({component});
            });
        });
    }

    private getDefaultComponent(): React.ReactElement<any> {
        return this.props.children.filter(e => e.props.isDefault === true)[0];
    }

}

interface DynamicState {
    component: React.ReactElement<any>;
}

interface DynamicProps {
    children: React.ReactElement<OnEventProps>[];
}

export class OnEvent extends Component<OnEventProps, {}> {

    constructor(props: OnEventProps) {
        super(props);
    }

    public render() {
        return this.props.component;
    }

}

interface OnEventProps {
    eventName: string;
    component: React.ReactElement<any>;
    isDefault?: boolean;
}
