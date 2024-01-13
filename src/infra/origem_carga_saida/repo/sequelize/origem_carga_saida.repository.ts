import OrigemCargaSaida from "../../../../domain/origem_carga_saida/entity/origem_carga_saida";
import OrigemCargaSaidaRepositoryInterface from "../../../../domain/origem_carga_saida/repository/origem_carga_saida-repository";
import { OrigemCargaSaidaModel } from "./origem_carga_saida.model";

export default class OrigemCargaSaidaRepository implements OrigemCargaSaidaRepositoryInterface {
    async create(entity: OrigemCargaSaida){
        await OrigemCargaSaidaModel.create({
                id: entity.id,
                data_prev_carga: entity.dataPrevCarga,
                grade_carga_id: entity.gradeCargaId,
                seq_carga: entity.seqCarga,
                local_log_id: entity.localLogId,
                carga_saida_id: entity.cargaSaidaId,
                data_inclusao: entity.dataInclusao
        });
    }
    async update(entity: OrigemCargaSaida){
        await OrigemCargaSaidaModel.update({
            id: entity.id,
            data_prev_carga: entity.dataPrevCarga,
            grade_carga_id: entity.gradeCargaId,
            seq_carga: entity.seqCarga,
            local_log_id: entity.localLogId,
            carga_saida_id: entity.cargaSaidaId,
            data_inclusao: entity.dataInclusao
        },{
            where: {id: entity.id}
        });
    }
    async findById(id: string): Promise<OrigemCargaSaida> {
        let origemCargaSaidaModel;
        try {
            origemCargaSaidaModel = await OrigemCargaSaidaModel.findOne({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error("OrigemCargaSaida not found");
        }

        const origemCargasaida = new OrigemCargaSaida(id,
                                                       origemCargaSaidaModel.data_prev_carga,
                                                       origemCargaSaidaModel.grade_carga_id,
                                                       origemCargaSaidaModel.seq_carga,
                                                       origemCargaSaidaModel.local_log_id,
                                                       origemCargaSaidaModel.carga_saida_id,
                                                       origemCargaSaidaModel.data_inclusao);
        return origemCargasaida;
    }

    async  findAll(): Promise<OrigemCargaSaida[]> {
        let origemCargaSaidaModel;
        try {
            origemCargaSaidaModel = await OrigemCargaSaidaModel.findAll();
        } catch (error) {
            throw new Error("OrigemCargaSaida not found");
        }

        const origemCargasaida = origemCargaSaidaModel.map((origemCargaSaidaModel) => {
            return new OrigemCargaSaida(origemCargaSaidaModel.id,
                                        origemCargaSaidaModel.data_prev_carga,
                                        origemCargaSaidaModel.grade_carga_id,
                                        origemCargaSaidaModel.seq_carga,
                                        origemCargaSaidaModel.local_log_id,
                                        origemCargaSaidaModel.carga_saida_id,
                                        origemCargaSaidaModel.data_inclusao);
        });

        return origemCargasaida;
    
    }

}