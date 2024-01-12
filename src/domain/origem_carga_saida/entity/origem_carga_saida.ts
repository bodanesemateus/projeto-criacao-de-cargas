export default class OrigemCargaSaida {
    private _id: string;
    private _dataPrevCarga: Date;
    private _gradeCargaId: number;
    private _seqCarga: number;
    private _localLogId: number;
    private _cargaSaidaId: string;
    private _dataInclusao: Date = new Date();


    constructor(id: string, dataPrevCarga: Date, gradeCargaId: number, seqCarga: number, localLogId: number, cargaSaidaId: string) {
        this._id = id;
        this._dataPrevCarga = dataPrevCarga;
        this._gradeCargaId = gradeCargaId;
        this._seqCarga = seqCarga;
        this._localLogId = localLogId;
        this._cargaSaidaId = cargaSaidaId;
        this.validate();
    }

    validate(): boolean {
        if (!this._id) {
            throw new Error("Id is required");
        }

        if (!this._dataPrevCarga) {
            throw new Error("DataPrevCarga is required");
        }

        if (!this._gradeCargaId) {
            throw new Error("GradeCargaId is required");
        }

        if (!this._seqCarga) {
            throw new Error("SeqCarga is required");
        }

        if (!this._localLogId) {
            throw new Error("LocalLogId is required");
        }

        if (!this._cargaSaidaId) {
            throw new Error("CargaSaidaId is required");
        }

        return true;
    }

    changeLocalLogId(localLogId: number): void {
        this._localLogId = localLogId;
    }

    changeSeqCarga(seqCarga: number): void {
        this._seqCarga = seqCarga;
    }
}