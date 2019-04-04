import * as React from "react";
import {Component} from "react";
import {isEqual, isNotEmpty} from "../../api/Objects";
import {emptyIfNull} from "../../api/Lists";
import SvgCaret from "../svg/SvgCaret";
import IIcon from "../../api/IIcon";

export default class Tree extends Component<TreeProps, TreeState> {

    constructor(props:TreeProps) {
        super(props);
        this.state = {selected:props.selected || null};
    }

    public render() {
        return (
            <div className={"lto-tree"}>
                {this.props.elements.map((e, i) => {
                    return (<TreeElement key={i} element={e} collapsed={true}
                                         selected={isEqual(this.state.selected, e, ["name", "type", "head"])}
                                         onSelect={(e) => this.setState({selected:e})}
                                         onChange={this.props.onChange} />);
                })}
            </div>
        );
    }

}

class TreeElement extends Component<TreeElementProps, TreeElementState> {

    private div:HTMLLIElement | null = null;

    constructor(props:TreeElementProps) {
        super(props);
        this.state = {collapsed:props.collapsed || true};
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

    public componentWillUpdate() {
        if (this.state.collapsed !== this.props.collapsed) {
            this.setState({collapsed: this.props.collapsed});
        }
    }

    public render() {
        const array = [];
        const classes = [];

        classes.push(this.state.collapsed ? "lto-collapsed" : "");
        classes.push(this.props.selected ? "lto-selected" : "");

        array.push(<li key={"a"} ref={div => this.div = div} className={classes.join(" ")} onClick={() => this.onClick()}>
            {isNotEmpty(this.props.element.list) ? <SvgCaret/> : <div style={{paddingLeft:"10px", display:"inline-block"}} />}
            {this.props.element.icon}
            <span>{this.props.element.name}</span>
            <small>{this.props.element.type}</small>
        </li>);
        if (isNotEmpty(this.props.element.list)) {
            array.push(this.renderTreeElements(this.props.element.list));
        }
        return array;
    }

    private onClick() {
        this.setState({collapsed:!this.state.collapsed});
        this.props.onChange(this.props.element);
        this.props.onSelect(this.props.element);
    }

    private renderTreeElements(elements: TreeRenderable[]) {
        return (
            <ul key={"b"} className={this.state.collapsed ? "lto-collapsed" : ""}>
                {emptyIfNull(elements).map((e: TreeRenderable, i) => {
                    return (<TreeElement key={i} element={e}
                                         onChange={this.props.onChange}
                                         onSelect={this.props.onSelect}
                                         selected={false}
                                         collapsed={this.state.collapsed || this.props.collapsed}/>);
                })}
            </ul>
        );
    }

}

interface TreeProps {
    elements: TreeRenderable[];
    onChange: (e:TreeRenderable) => void;
    selected?: TreeRenderable;
}
interface TreeState {
    selected: TreeRenderable | null;
}
interface TreeElementProps {
    element: TreeRenderable;
    onChange: (e:TreeRenderable) => void;
    onSelect: (e:TreeRenderable) => void;
    collapsed:boolean;
    selected:boolean;
}
interface TreeElementState {
    collapsed:boolean;
}
export interface TreeRenderable {
    name:string;
    icon:IIcon,
    type:string;
    head:TreeRenderable;
    list:TreeRenderable[];
}
