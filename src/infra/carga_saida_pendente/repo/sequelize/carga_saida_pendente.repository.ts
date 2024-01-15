import CargaSaidaPendente from "../../../../domain/carga_saida/entity/carga_saida_pendente";
import CargaSaidaPendenteRepositoryInterface from "../../../../domain/carga_saida/repository/carga_saida_pendente-repository";
import CargaSaidaPendenteModel from "./carga_saida_pendente.model";

export default class CargaSaidaPendenteRepository implements CargaSaidaPendenteRepositoryInterface{
    
    async create(entity: CargaSaidaPendente) {
        await CargaSaidaPendenteModel.create({
            id: entity.id,
            carga_saida_id: entity.cargaSaidaId
        });
    }

    async delete(entity: CargaSaidaPendente) {
        await CargaSaidaPendenteModel.destroy({
            where: {id: entity.id}
        });
    }

    update(entity: CargaSaidaPendente): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<CargaSaidaPendente> {
        let cargaSaidaPendenteModel;
        try {
            cargaSaidaPendenteModel = await CargaSaidaPendenteModel.findOne({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error("CargaSaidaPendente not found");
        }

        const cargaSaidaPendente = new CargaSaidaPendente(id, cargaSaidaPendenteModel.carga_saida_id);
        return cargaSaidaPendente;
    }

    findAll(): Promise<CargaSaidaPendente[]> {
        throw new Error("Method not implemented.");
    }

}