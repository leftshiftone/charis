import * as React from 'react';
import {Component} from 'react';
import VerticalNavigation from "../../element/navigation/VerticalNavigation";
import HorizontalNavigation from "../../element/navigation/HorizontalNavigation";
import ModalContainer from "../../element/division/ModalContainer";

class AdminLayout extends Component<MainProps, {}> {

    constructor(props: MainProps) {
        super(props);
    }

    public render() {
        return (
            <main className={`lto-layout-admin ${this.props.className || ""}`}>
                <ModalContainer/>
                {this.props.verticalNavigation}
                {this.props.horizontalNavigation}
                <section className={(this.props.collapsed ? "lto-collapsed" : "")}>
                    {this.props.children}
                </section>
            </main>
        );
    }

}

interface MainProps {
    verticalNavigation: React.ReactElement<VerticalNavigation>;
    horizontalNavigation: React.ReactElement<HorizontalNavigation>;
    collapsed: boolean;
    className?:string;
}

export default AdminLayout;
