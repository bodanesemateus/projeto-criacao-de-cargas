import CargaSaida from "../entity/carga_saida";

export default class CargaSaidaService {
    
    public static makeCargo(id:string, dataSaida:Date, nroCarga:number, unidId:number, usuId:number, dataCriacao:Date, embarqueRetira:number, imprePrevDb:number, 
        divisoria:number, camaVeiculId:number, veicRetId:number, transportadoraId:number, enderIdTransbordo:number): CargaSaida {

        if (!id) {
            throw new Error("Id is required");
        }

        if (!dataSaida) {
            throw new Error("DataSaida is required");
        }

        if (!nroCarga) {
            throw new Error("NroCarga is required");
        }

        if (!unidId) {
            throw new Error("UnidId is required");
        }

        if (!usuId) {
            throw new Error("UsuId is required");
        }

        if (!dataCriacao) {
            throw new Error("DataCriacao is required");
        }

        if (dataSaida < new Date()) {
            throw new Error("DataSaida must be greater than sysdate");
        }

        if (!embarqueRetira) {
            throw new Error("EmbarqueRetira is required");
        }

        if (!imprePrevDb) {
            throw new Error("ImprePrevDb is required");
        }

        if (!divisoria) {
            throw new Error("Divisoria is required");
        }

        if (!camaVeiculId) {
            throw new Error("CamaVeiculId is required");
        }

        if (!veicRetId) {
            throw new Error("VeicRetId is required");
        }

        if (!transportadoraId) {
            throw new Error("TransportadoraId is required");
        }

        if (!enderIdTransbordo) {
            throw new Error("EnderIdTransbordo is required");
        }

        const cargo = new CargaSaida(id, dataSaida, nroCarga, unidId, usuId, dataCriacao, embarqueRetira, imprePrevDb, divisoria, camaVeiculId, veicRetId, transportadoraId, enderIdTransbordo);
        
        return cargo;
    }

    // public static turnCargoReleased(cargo: CargaSaida): CargaSaida {




    // }

}