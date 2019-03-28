import * as React from "react";
import INavigation from "./api/INavigation";
import {Dropdown} from "./Dropdown";
import {DropdownItem} from "./DropdownItem";
import {toBoolean} from "../../api/Boolean";

export default class VerticalNavigation extends React.Component<NavigationProps, {}> implements INavigation {

    constructor(props: NavigationProps) {
        super(props);
    }

    public render() {
        const collapsed = toBoolean(this.props.collapsed);

        return (
            <nav className={`lto-navigation-vertical ${collapsed ? "lto-collapsed" : ""} ${this.props.className}`}>
                <div>
                    {this.props.children}
                </div>
            </nav>
        );
    }

}

interface NavigationProps {
    collapsed?: boolean;
    children: React.ReactElement<Dropdown | DropdownItem>[] | React.ReactElement<Dropdown | DropdownItem>;
    className?:string;
}
