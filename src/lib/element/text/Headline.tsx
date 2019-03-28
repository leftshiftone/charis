import * as React from 'react';

export default class Headline extends React.Component<HeadlineProps, {}> {

    public render() {
        const type = this.props.type || 1;

        switch (type) {
            case 1:
                return (<h1>
                    {this.props.icon}
                    <span>{this.props.children}</span>
                </h1>);
            case 2:
                return (<h2>
                    {this.props.icon}
                    <span>{this.props.children}</span>
                </h2>);
            case 3:
                return (<h3>
                    {this.props.icon}
                    <span>{this.props.children}</span>
                </h3>);
        }
    }

}

interface HeadlineProps {
    children: string;
    icon?: any;
    type?: 1 | 2 | 3;
}
