import ModalAssembly from "./lib/api/assembly/ModalAssembly";
import ToastAssembly from "./lib/api/assembly/ToastAssembly";
import Image from "./lib/element/image/Image";
import Button from "./lib/element/button/Button";
import Switch from "./lib/element/button/Switch";
import Checkbox from "./lib/element/input/Checkbox";
import Email from "./lib/element/input/Email";
import Password from "./lib/element/input/Password";
import Radiobutton from "./lib/element/input/Radiobutton";
import Text from "./lib/element/input/Text";
import BurgerMenu from "./lib/element/navigation/BurgerMenu";
import Select from "./lib/element/select/Select";
import Option from "./lib/element/select/Option";
import {Dropdown} from "./lib/element/navigation/Dropdown";
import {DropdownItem} from "./lib/element/navigation/DropdownItem";
import Widget from "./lib/layout/dashboard/widget/Widget";
import DashboardLayout from "./lib/layout/dashboard/DashboardLayout";
import Right from "./lib/element/division/Right";
import Margin from './lib/element/division/Margin';
import Mark from "./lib/element/mark/Mark";
import Toggle from "./lib/element/button/Toggle";
import Doughnut from "./lib/element/vis/Doughnut";
import Stackedbar from './lib/element/vis/Stackedbar';
import Heatmap from "./lib/element/vis/Heatmap";
import Sunburst from "./lib/element/vis/Sunburst";
import Sankey from "./lib/element/vis/Sankey";
import Scatterplot from "./lib/element/vis/Scatterplot";
import Line from "./lib/element/vis/Line";
import Dynamic, {OnEvent} from "./lib/element/division/Dynamic";
import Textarea from "./lib/element/textarea/Textarea";
import HorizontalNavigation from "./lib/element/navigation/HorizontalNavigation";
import Link from './lib/element/link/Link';
import Emitter from "./lib/api/emitter/Emitter";
import EmitterAwareComponent from "./lib/api/emitter/EmitterAwareComponent";
import DoughnutService from "./lib/element/vis/DoughnutService";
import StackedbarService from "./lib/element/vis/StackedbarService";
import HeatmapService from "./lib/element/vis/HeatmapService";
import LineService from "./lib/element/vis/LineService";
import ScatterplotService from './lib/element/vis/ScatterplotService';
import SankeyService from "./lib/element/vis/SankeyService";
import SunburstService from "./lib/element/vis/SunburstService";
import Small from "./lib/element/text/Small";
import Medium from "./lib/element/text/Medium";
import VerticalNavigation from "./lib/element/navigation/VerticalNavigation";
import SvgBlock from "./lib/element/svg/SvgBlock";
import SvgFolder from "./lib/element/svg/SvgFolder";
import SvgCaret from "./lib/element/svg/SvgCaret";
import SvgCheck from "./lib/element/svg/SvgCheck";
import SvgCode from "./lib/element/svg/SvgCode";
import SvgDocument from "./lib/element/svg/SvgDocument";
import SvgEdit from "./lib/element/svg/SvgEdit";
import SvgEntity from "./lib/element/svg/SvgEntity";
import SvgExclamation from "./lib/element/svg/SvgExclamation";
import SvgFlow from "./lib/element/svg/SvgFlow";
import SvgInsight from "./lib/element/svg/SvgInsight";
import SvgLabel from "./lib/element/svg/SvgLabel";
import SvgOption from "./lib/element/svg/SvgOption";
import SvgPlay from "./lib/element/svg/SvgPlay";
import SvgPlus from "./lib/element/svg/SvgPlus";
import SvgPower from "./lib/element/svg/SvgPower";
import SvgQuestion from "./lib/element/svg/SvgQuestion";
import SvgStackbar from "./lib/element/svg/SvgStackbar";
import SvgUser from "./lib/element/svg/SvgUser";
import AdminLayout from "./lib/layout/admin/AdminLayout";
import AuthnLayout from "./lib/layout/authn/AuthnLayout";
import SeventyThirtyLayout from "./lib/layout/seventythirty/SeventyThirtyLayout";
import Modal from './lib/element/division/Modal';
import ModalContainer from "./lib/element/division/container/ModalContainer";
import ToastContainer from "./lib/element/division/container/ToastContainer";
import {Group} from "./lib/element/division/Group";
import Headline from "./lib/element/text/Headline";
import Trigger from "./lib/element/division/Trigger";
import Accordion from "./lib/element/division/Accordion";
import Bar3D from "./lib/element/vis/Bar3D";
import Padding from "./lib/element/division/Padding";
import {Banner} from "./lib/element/division/Banner";
import Content from "./lib/element/division/Content";
import Tree, {TreeRenderable} from "./lib/element/division/Tree";
import ContextMenu from "./lib/element/division/ContextMenu";
// svg
import Circle from "./lib/element/vis/Circle";
import Graph from "./lib/element/vis/Graph";
import EditableSpan from "./lib/element/span/EditableSpan";
import SvgClose from "./lib/element/svg/SvgClose";
import Toast from "./lib/element/division/Toast";
import Environment from "./lib/element/division/Environment";

if (typeof document !== "undefined") {
    require("./lib/styles.scss");
    require("./lib/element/image/Image.scss");
    require("./lib/element/button/Button.scss");
    require("./lib/element/button/Switch.scss");
    require("./lib/element/input/Checkbox.scss");
    require("./lib/element/input/Email.scss");
    require("./lib/element/input/Password.scss");
    require("./lib/element/input/Radiobutton.scss");
    require("./lib/element/input/Text.scss");
    require("./lib/element/navigation/BurgerMenu.scss");
    require("./lib/element/select/Select.scss");
    require("./lib/element/navigation/Dropdown.scss");
    require("./lib/element/navigation/DropdownItem.scss");
    require("./lib/layout/dashboard/widget/Widget.scss");
    require("./lib/layout/dashboard/DashboardLayout.scss");
    require("./lib/element/division/Right.scss");
    require('./lib/element/division/Margin.scss');
    require("./lib/element/mark/Mark.scss");
    require("./lib/element/button/Toggle.scss");
    require("./lib/element/textarea/Textarea.scss");
    require("./lib/element/navigation/HorizontalNavigation.scss");
    require("./lib/element/text/Small.scss");
    require("./lib/element/text/Medium.scss");
    require("./lib/element/navigation/VerticalNavigation.scss");
    require("./lib/layout/admin/AdminLayout.scss");
    require("./lib/layout/authn/AuthnLayout.scss");
    require("./lib/layout/seventythirty/SeventyThirtyLayout.scss");
    require('./lib/element/division/Modal.scss');
    require('./lib/element/division/Toast.scss');
    require("./lib/element/division/Group.scss");
    require("./lib/element/text/Headline.scss");
    require("./lib/element/division/Trigger.scss");
    require("./lib/element/division/Accordion.scss");
    require("./lib/element/division/Padding.scss");
    require("./lib/element/division/Banner.scss");
    require("./lib/element/division/Content.scss");
    require("./lib/element/division/Tree.scss");
    require("./lib/element/division/ContextMenu.scss");
    // vis
    require("./lib/element/vis/Circle.scss");
}

export {
    ModalAssembly,
    ToastAssembly,
    // button
    Button,
    Switch,
    // input
    Checkbox,
    Email,
    Password,
    Radiobutton,
    Text,
    // navigation
    BurgerMenu,
    // select
    Select,
    Option,
    // division
    Dropdown,
    DropdownItem,
    Widget,
    DashboardLayout,
    Right,
    Margin,
    Padding,
    Mark,
    Toggle,
    Image,
    Banner,
    // vis
    Doughnut,
    DoughnutService,
    Stackedbar,
    StackedbarService,
    Heatmap,
    HeatmapService,
    Line,
    LineService,
    Scatterplot,
    ScatterplotService,
    Sankey,
    SankeyService,
    Sunburst,
    SunburstService,
    Bar3D,

    Dynamic,
    OnEvent,
    Textarea,
    HorizontalNavigation,
    VerticalNavigation,
    Link,
    Emitter,
    EmitterAwareComponent,
    Small,
    Medium,
    AdminLayout,
    AuthnLayout,
    // svg
    SvgBlock,
    SvgFolder,
    Modal,
    ModalContainer,
    Toast,
    ToastContainer,
    Group,
    Headline,
    Trigger,
    Accordion,
    Content,
    SvgCaret,
    SvgCheck,
    SvgCode,
    SvgDocument,
    SvgEdit,
    SvgEntity,
    SvgExclamation,
    SvgFlow,
    SvgInsight,
    SvgLabel,
    SvgOption,
    SvgPlay,
    SvgPlus,
    SvgPower,
    SvgQuestion,
    SvgStackbar,
    SvgUser,
    SvgClose,
    Tree,
    TreeRenderable,
    Circle,
    Graph,
    EditableSpan,
    SeventyThirtyLayout,
    ContextMenu,
    Environment
};
