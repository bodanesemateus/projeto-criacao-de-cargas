export default class OrigemCargaSaida {
    private _id: string;
    private _dataPrevCarga: Date;
    private _gradeCargaId: number;
    private _seqCarga: number;
    private _localLogId: number;
    private _cargaSaidaId: string;
    private _dataInclusao: Date;


    constructor(id: string, dataPrevCarga: Date, gradeCargaId: number, seqCarga: number, localLogId: number, cargaSaidaId: string, dataInclusao: Date) {
        this._id = id;
        this._dataPrevCarga = dataPrevCarga;
        this._gradeCargaId = gradeCargaId;
        this._seqCarga = seqCarga;
        this._localLogId = localLogId;
        this._cargaSaidaId = cargaSaidaId;
        this._dataInclusao = dataInclusao;
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

        if (!this._dataInclusao) {
            throw new Error("DataInclusao is required");
        }

        return true;
    }

    changeLocalLogId(localLogId: number): void {
        this._localLogId = localLogId;
    }

    changeSeqCarga(seqCarga: number): void {
        this._seqCarga = seqCarga;
    }

    toJSON() {
        return {
            id: this._id,
            dataPrevCarga: this._dataPrevCarga,
            gradeCargaId: this._gradeCargaId,
            seqCarga: this._seqCarga,
            localLogId: this._localLogId,
            cargaSaidaId: this._cargaSaidaId,
            dataInclusao: this._dataInclusao,
        };
    }

    get id(): string {
        return this._id;
    }

    get dataPrevCarga(): Date {
        return this._dataPrevCarga;
    }

    get gradeCargaId(): number {
        return this._gradeCargaId;
    }

    get seqCarga(): number {
        return this._seqCarga;
    }

    get localLogId(): number {
        return this._localLogId;
    }

    get cargaSaidaId(): string {
        return this._cargaSaidaId;
    }

    get dataInclusao(): Date {
        return this._dataInclusao;
    }
    
}