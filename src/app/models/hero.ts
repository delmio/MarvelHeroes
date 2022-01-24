export class Hero {
    public id:number;
    public name:string;
    public description: string;
    public modified: Date
    public resourceURI:string;
    public urlFinalImagen:string;
    public color:any;
    public existeColor: boolean;

    constructor() {
        this.id             = 0;
        this.name           = "";
        this.description    = "";
        this.modified       = null,
        this.resourceURI    = "";
        this.urlFinalImagen = "";
        this.color          = '';
        this.existeColor    = false;
    }
}