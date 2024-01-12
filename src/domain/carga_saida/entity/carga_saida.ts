export default class CargaSaida {
    private _id: string;
    private _dataSaida: Date;
    private _nroCarga: number;
    private _unidId: number;
    private _usuId: number;
    private _dataCriacao: Date = new Date();
    private _embarqueRetira: number;
    private _imprePrevDb: number = 0;
    private _divisoria: number = 0;
    private _camaVeiculId: number;
    private _veicRetId: number;
    private _transportadoraId: number;
    private _enderIdTransbordo: number = 0;

    constructor(id:string, dataSaida:Date, nroCarga:number, unidId:number, usuId:number, embarqueRetira:number, imprePrevDb:number, divisoria:number, camaVeiculId:number, veicRetId:number, transportadoraId:number, enderIdTransbordo:number){
        this._id = id;
        this._dataSaida = dataSaida;
        this._nroCarga = nroCarga;
        this._unidId = unidId;
        this._usuId = usuId;
        this._embarqueRetira = embarqueRetira;
        this._imprePrevDb = imprePrevDb;
        this._divisoria = divisoria;
        this._camaVeiculId = camaVeiculId;
        this._veicRetId = veicRetId;
        this._transportadoraId = transportadoraId;
        this._enderIdTransbordo = enderIdTransbordo;
        this.validate();
    }

    validate(): boolean {
        if (!this._id) {
            throw new Error('Invalid id');
        }

        if (!this._dataSaida) {
            throw new Error('Invalid dataSaida');
        }

        if (this._dataSaida < new Date()) {
            throw new Error('Invalid dataSaida, dataSaida cannot be less than today');
        }

        if (!this._nroCarga) {
            throw new Error('Invalid nroCarga');
        }

        if (!this._unidId) {
            throw new Error('Invalid unidId');
        }

        if (!this._usuId) {
            throw new Error('Invalid usuId');
        }

        if (!this._embarqueRetira) {
            throw new Error('Invalid embarqueRetira');
        }

        if (!this._camaVeiculId) {
            throw new Error('Invalid camaVeiculId');
        }

        if (!this._veicRetId) {
            throw new Error('Invalid veicRetId');
        }

        if (!this._transportadoraId) {
            throw new Error('Invalid transportadoraId');
        }

        return true;
        
    }
}