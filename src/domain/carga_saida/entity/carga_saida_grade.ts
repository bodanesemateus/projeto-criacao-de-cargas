export default class CargaSaidaGrade {
    private _id: string;
    private _cabotagem: boolean;
    private _terceiro: boolean;
    private _cargaSaidaId: string;
    private _tpCarSaiId: number;
    private _tpConsCargId: number;
    private _unidCargaId: number;
    private _motivoGeralId: number;
    private _paramWsTvId: number;
    private _prioridade: number;
    private _pesoPayload: number;
    private _motivoGeralIdUnidCarga: number;

    constructor(id: string, cabotagem: boolean, terceiro: boolean, cargaSaidaId: string, tpCarSaiId: number, tpConsCargId: number, unidCargaId: number, motivoGeralId: number, paramWsTvId: number, prioridade: number, pesoPayload: number, motivoGeralIdUnidCarga: number) {
        this._id = id;
        this._cabotagem = cabotagem;
        this._terceiro = terceiro;
        this._cargaSaidaId = cargaSaidaId;
        this._tpCarSaiId = tpCarSaiId;
        this._tpConsCargId = tpConsCargId;
        this._unidCargaId = unidCargaId;
        this._motivoGeralId = motivoGeralId;
        this._paramWsTvId = paramWsTvId;
        this._prioridade = prioridade;
        this._pesoPayload = pesoPayload;
        this._motivoGeralIdUnidCarga = motivoGeralIdUnidCarga;
        this.validate();
    }

    validate(): boolean {

        if (!this._id) {
            throw new Error("Id is required");
        }

        if (!this._cabotagem) {
            throw new Error("Cabotagem is required");
        }

        if (!this._terceiro) {
            throw new Error("Terceiro is required");
        }

        if (!this._cargaSaidaId) {
            throw new Error("CargaSaidaId is required");
        }

        if (!this._tpCarSaiId) {
            throw new Error("TpCarSaiId is required");
        }

        if (!this._tpConsCargId) {
            throw new Error("TpConsCargId is required");
        }

        if (!this._unidCargaId) {
            throw new Error("UnidCargaId is required");
        }

        if (!this._motivoGeralId) {
            throw new Error("MotivoGeralId is required");
        }

        if (!this._paramWsTvId) {
            throw new Error("ParamWsTvId is required");
        }

        if (!this._prioridade) {
            throw new Error("Prioridade is required");
        }

        if (!this._pesoPayload) {
            throw new Error("PesoPayload is required");
        }

        if (!this._motivoGeralIdUnidCarga) {
            throw new Error("MotivoGeralIdUnidCarga is required");
        }
        return true;
    }

    get id(): string {
        return this._id;
    }

    get cabotagem(): boolean {
        return this._cabotagem;
    }

    get terceiro(): boolean {
        return this._terceiro;
    }

    get cargaSaidaId(): string {
        return this._cargaSaidaId;
    }

    get tpCarSaiId(): number {
        return this._tpCarSaiId;
    }

    get tpConsCargId(): number {
        return this._tpConsCargId;
    }

    get unidCargaId(): number {
        return this._unidCargaId;
    }

    get motivoGeralId(): number {
        return this._motivoGeralId;
    }

    get paramWsTvId(): number {
        return this._paramWsTvId;
    }

    get prioridade(): number {
        return this._prioridade;
    }

    get pesoPayload(): number {
        return this._pesoPayload;
    }

    get motivoGeralIdUnidCarga(): number {
        return this._motivoGeralIdUnidCarga;
    }

}