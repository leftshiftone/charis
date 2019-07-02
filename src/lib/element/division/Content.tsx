import * as React from 'react';
import {Component, ReactElement} from 'react';
import Right from "./Right";
import Margin from "./Margin";

export default class Content extends Component<ContentProps, {}> {

    public render() {
        return (
            <div className={"lto-content"}>
                <Margin bottom={15} height={"auto"}>
                    {this.props.heading}
                    <Right>
                        {this.props.control}
                    </Right>
                </Margin>
                {this.props.content}
            </div>
        );
    }

}

interface ContentProps {
    control: ReactElement<any>;
    content: ReactElement<any>;
    heading: ReactElement<any>;
}
