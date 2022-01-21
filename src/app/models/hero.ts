export class Hero {
    public id:number;
    public name:string;
    public description: string;
    public modified: Date
    public resourceURI:string;
    public urlFinalImagen:string;
    public comics: any[];
    public events: any[];
    public series: any[];
    public stories: any[];
    
    constructor() {
        this.id             = 0;
        this.name           = "";
        this.description    = "";
        this.modified       = null,
        this.resourceURI    = "";
        this.urlFinalImagen = "";
        this.comics         = [];
        this.events         = [];
        this.series         = [];
        this.stories         = [];
    }
}