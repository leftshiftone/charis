import * as React from "react";
import {Component, ReactElement} from "react";
import {DropdownItem} from "../navigation/DropdownItem";
import {Dropdown} from "../navigation/Dropdown";

export default class ContextMenu extends Component<ContextMenuProps, ContextMenuState> {

    private div: HTMLDivElement | null = null;

    constructor(props: ContextMenuProps) {
        super(props);
        this.state = {show: false, posX: 0, posY: 0};
    }

    public componentDidMount() {
        const $this = this;
        if (this.div) {
            this.div.addEventListener('contextmenu', (e: MouseEvent) => {
                e.preventDefault();
                $this.setState({show: true, posX: e.clientX, posY: e.clientY});

                document.addEventListener('click', () => $this.setState({show: false}), false);
            }, false);
        }
    }

    public render() {
        return <div style={{height:"100%"}} ref={div => this.div = div}>
            <div className={"lto-context-menu"} style={{left: this.state.posX + "px", top: this.state.posY + "px"}}>
                {this.state.show ? this.props.menu : <div/>}
            </div>
            {this.props.children}
        </div>;
    }

}

interface ContextMenuProps {
    menu: ReactElement<DropdownItem | Dropdown> | ReactElement<DropdownItem | Dropdown>[]
}

interface ContextMenuState {
    show: boolean;
    posX: number;
    posY: number;
}
