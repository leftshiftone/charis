import * as React from "react";
import {Component} from "react";
import {isEqual, isNotEmpty, isNull} from "../../api/Objects";
import {emptyIfNull} from "../../api/Lists";
import {toBoolean} from "../../api/Boolean";
import SvgCaret from "../svg/SvgCaret";

export default class Tree extends Component<TreeProps, TreeState> {

    constructor(props: TreeProps) {
        super(props);
        this.state = {selected: props.selected || null};
    }

    public render() {
        return (
            <div className={"lto-tree"}>
                {this.props.elements.map(e => {
                    return (<TreeElement key={getTreePath(e).reverse().join("/")} element={e}
                                         selected={(x) => isEqual(this.state.selected, x, ["name", "type", "head"])}
                                         onSelect={(e) => this.setState({selected: e})}
                                         onChange={this.props.onChange}/>);
                })}
            </div>
        );
    }

}

class TreeElement extends Component<TreeElementProps, TreeElementState> {

    private div: HTMLLIElement | null = null;

    constructor(props: TreeElementProps) {
        super(props);
        this.state = {collapsed: toBoolean(props.collapsed, false)};
    }

    public componentDidMount() {
        const $this = this;
        if (this.div) {
            this.div.addEventListener("click", () => {
                $this.props.onSelect($this.props.element);
            });
            this.div.addEventListener("contextmenu", () => {
                if (!$this.props.selected) {
                    $this.props.onSelect($this.props.element);
                }
            });
        }
    }

    public componentWillUpdate(prevProps: TreeElementProps) {
        if (prevProps.collapsed !== this.props.collapsed) {
            this.setState({collapsed: !this.props.collapsed});
        }
    }

    public render() {
        const array = [];
        const classes = [];

        classes.push(this.state.collapsed ? "lto-collapsed" : "");
        classes.push(this.props.selected(this.props.element) ? "lto-selected" : "");
        classes.push(this.props.element.disabled ? "lto-disabled" : "");

        array.push(<li ref={div => this.div = div} className={classes.join(" ")}
                       onClick={() => this.onClick()}>
            {isNotEmpty(this.props.element.list) ? <SvgCaret onClick={() => this.collapse()}/> :
                <div style={{paddingLeft: "20px", display: "inline-block"}}/>}
            {this.props.element.icon}
            <span>{this.props.element.name}</span>
        </li>);
        if (isNotEmpty(this.props.element.list)) {
            array.push(this.renderTreeElements(this.props.element.list));
        }
        return array;
    }

    private collapse = () => this.setState({collapsed: !this.state.collapsed});

    private onClick() {
        if (this.props.element.disabled === undefined || this.props.element.disabled === null || !this.props.element.disabled) {
            this.props.onChange(this.props.element);
            this.props.onSelect(this.props.element);
        }
    }

    private renderTreeElements(elements: TreeRenderable[]) {
        return (
            <ul className={this.state.collapsed ? "lto-collapsed" : ""}>
                {emptyIfNull(elements).map(e => {
                    return (<TreeElement key={getTreePath(e).reverse().join("/")} element={e}
                                         onChange={this.props.onChange}
                                         onSelect={this.props.onSelect}
                                         selected={(x) => this.props.selected(x)}
                                         collapsed={this.state.collapsed}/>);
                })}
            </ul>
        );
    }

}

interface TreeProps {
    elements: TreeRenderable[];
    onChange: (e: TreeRenderable) => void;
    selected?: TreeRenderable;
}

interface TreeState {
    selected: TreeRenderable | null;
}

interface TreeElementProps {
    element: TreeRenderable;
    onChange: (e: TreeRenderable) => void;
    onSelect: (e: TreeRenderable) => void;
    collapsed?: boolean;
    selected: (e: TreeRenderable) => boolean;
}

interface TreeElementState {
    collapsed: boolean;
}

export interface TreeRenderable {
    name: string;
    icon: any;
    head: TreeRenderable;
    list: TreeRenderable[];
    disabled: boolean;
}

export function getTreePath(renderable: TreeRenderable, path: string[] = []): string[] {
    return isNull(renderable.head) ? [...path, renderable.name] : getTreePath(renderable.head, [...path, renderable.name]);
}
