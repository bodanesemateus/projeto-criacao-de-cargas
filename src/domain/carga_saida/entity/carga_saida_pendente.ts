
export default class CargaSaidaPendente {
    private _id: string;
    private _cargaSaidaId: string;

    constructor(id:string, cargaSaidaId:string){
        this._id = id;
        this._cargaSaidaId = cargaSaidaId;
        this.validate();
    }

    validate(): boolean {
        if(!this._id){
            throw new Error("Id is required");
        }

        if(!this._cargaSaidaId){
            throw new Error("CargaSaidaId is required");
        }

        return true;
    }

}