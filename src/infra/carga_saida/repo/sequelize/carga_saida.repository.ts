import CargaSaida from "../../../../domain/carga_saida/entity/carga_saida";
import CargaSaidaModel from "./carga_saida.model";

export default class CargaSaidaRepository implements CargaSaidaRepository {
    
    async create(cargaSaida: CargaSaida) {
        await CargaSaidaModel.create({
            id: cargaSaida.id,
            dataSaida: cargaSaida.dataSaida,
            nroCarga: cargaSaida.nroCarga,
            unidId: cargaSaida.unidId,
            usuId: cargaSaida.usuId,
            dataCriacao: cargaSaida.dataCriacao,
            embarqueRetira: cargaSaida.embarqueRetira,
            imprePrevDb: cargaSaida.imprePrevDb,
            divisoria: cargaSaida.divisoria,
            camaVeiculId: cargaSaida.camaVeiculId,
            veicRetId: cargaSaida.veicRetId,
            transportadoraId: cargaSaida.transportadoraId,
        });
    }

    async update(cargaSaida: CargaSaida) {
        await CargaSaidaModel.update({
            dataSaida: cargaSaida.dataSaida,
            nroCarga: cargaSaida.nroCarga,
            unidId: cargaSaida.unidId,
            usuId: cargaSaida.usuId,
            dataCriacao: cargaSaida.dataCriacao,
            embarqueRetira: cargaSaida.embarqueRetira,
            imprePrevDb: cargaSaida.imprePrevDb,
            divisoria: cargaSaida.divisoria,
            camaVeiculId: cargaSaida.camaVeiculId,
            veicRetId: cargaSaida.veicRetId,
            transportadoraId: cargaSaida.transportadoraId,
        }, {
            where: {
                id: cargaSaida.id
            }
        });
    }

    async findById(id: string): Promise<CargaSaida> {
        let cargaSaidaModel;
        try {
            cargaSaidaModel = await CargaSaidaModel.findOne({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error("CargoSaida not found");
        }

        const cargo = new CargaSaida(id, 
                                    cargaSaidaModel.dataSaida, 
                                    cargaSaidaModel.nroCarga, 
                                    cargaSaidaModel.unidId, 
                                    cargaSaidaModel.usuId, 
                                    cargaSaidaModel.embarqueRetira, 
                                    cargaSaidaModel.imprePrevDb, 
                                    cargaSaidaModel.divisoria, 
                                    cargaSaidaModel.camaVeiculId, 
                                    cargaSaidaModel.veicRetId, 
                                    cargaSaidaModel.transportadoraId, 
                                    cargaSaidaModel.enderIdTransbordo);
        return cargo;
    }

    async findAll(): Promise<CargaSaida[]> {
        const cargaSaidaModels = await CargaSaidaModel.findAll();
        const cargas = cargaSaidaModels.map(cargaSaidaModel => {
            return new CargaSaida(cargaSaidaModel.id, 
                                  cargaSaidaModel.dataSaida, 
                                  cargaSaidaModel.nroCarga, 
                                  cargaSaidaModel.unidId, 
                                  cargaSaidaModel.usuId, 
                                  cargaSaidaModel.embarqueRetira, 
                                  cargaSaidaModel.imprePrevDb, 
                                  cargaSaidaModel.divisoria, 
                                  cargaSaidaModel.camaVeiculId, 
                                  cargaSaidaModel.veicRetId, 
                                  cargaSaidaModel.transportadoraId, 
                                  cargaSaidaModel.enderIdTransbordo);
        });
        return cargas;
    }
}