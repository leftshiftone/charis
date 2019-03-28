import * as React from "react";
import {CSSProperties} from "react";

export default class BurgerMenu extends React.Component<BurgerProps, {}> {

    constructor(props: BurgerProps) {
        super(props);
    }

    public render() {
        return (
            <div className="lto-burgermenu">
                <input id="burger-check" type="checkbox" checked={this.props.collapsed}/>
                <label htmlFor="burger-check" />
                <nav>
                    <ul>
                        {this.props.children.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                </nav>
            </div>
        );
    }

}

interface BurgerProps {
    children: React.ReactElement<any>[];
    collapsed: boolean;
    style?: CSSProperties;
    class?: string;
}
