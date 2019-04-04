export default class ToastAssembly {
    private text:string;
    private type:"info" | "warn" | "error";
    private info?:string;

    constructor(text:string,
                type:"info" | "warn" | "error",
                info?:string) {
        this.text = text;
        this.type = type;
        this.info = info;
    }

    public getText = () => this.text;
    public getType = () => this.type;
    public getInfo = () => this.info;

}
