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
        if(!this._id){
            throw new Error("Id is required");
        }

        if(!this._dataSaida){
            throw new Error("DataSaida is required");
        }

        if(!this._nroCarga){
            throw new Error("NroCarga is required");
        }

        if(!this._unidId){
            throw new Error("UnidId is required");
        }

        if(!this._usuId){
            throw new Error("UsuId is required");
        }

        if(this._dataSaida < new Date()){
            throw new Error("DataSaida must be greater than sysdate");
        }

        if(!this._embarqueRetira){
            throw new Error("EmbarqueRetira is required");
        }

        if(!this._camaVeiculId){
            throw new Error("CamaVeiculId is required");
        }

        if(!this._veicRetId){
            throw new Error("VeicRetId is required");
        }

        if(!this._transportadoraId){
            throw new Error("TransportadoraId is required");
        }

        return true;
    }

    changeEmbarqueRetira(embarqueRetira: number): void {
        this._embarqueRetira = embarqueRetira;
    }

    changeVeicRetId(veicRetId: number): void {
        this._veicRetId = veicRetId;
    }

    changeDataSaida(dataSaida: Date): void {
        this._dataSaida = dataSaida;
    }

    changeTransportadoraId(transportadoraId: number): void {
        this._transportadoraId = transportadoraId;
    }

    changeEnderIdTransbordo(enderIdTransbordo: number): void {
        this._enderIdTransbordo = enderIdTransbordo;
    }

    get embarqueRetira(): number {
        return this._embarqueRetira;
    }

    get veicRetId(): number {
        return this._veicRetId;
    }

    get dataSaida(): Date {
        return this._dataSaida;
    }

    get transportadoraId(): number {
        return this._transportadoraId;
    }

    get enderIdTransbordo(): number {
        return this._enderIdTransbordo;
    }

}