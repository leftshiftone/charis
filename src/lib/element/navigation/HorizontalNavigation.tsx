import * as React from "react";
import Link from "../link/Link";
import INavigation from "./api/INavigation";
import {toBoolean} from "../../api/Boolean";

export default class HorizontalNavigation extends React.Component<NavigationProps, {}> implements INavigation {

    constructor(props:NavigationProps) {
        super(props);
    }

    public render() {
        const collapsed = toBoolean(this.props.collapsed);
        return(
            <nav className={`lto-navigation-horizontal ${collapsed ? "lto-collapsed" : ""} ${this.props.className}`}>
                {this.props.children}
            </nav>
        );
    }

}
interface NavigationProps {
    children:React.ReactElement<Link>[] | React.ReactElement<Link>;
    collapsed:boolean;
    className?:string;
}
