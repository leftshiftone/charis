export default class ToastAssembly {
    private text:string;
    private type:"info" | "warn" | "error";

    constructor(text:string,
                type:"info" | "warn" | "error") {
        this.text = text;
        this.type = type;
    }

    public getText = () => this.text;
    public getType = () => this.type;

}
