import CargaSaidaGrade from "../../../../domain/carga_saida/entity/carga_saida_grade";
import CargaSaidaGradeRepositoryInterface from "../../../../domain/carga_saida/repository/carga_saida_grade-repository";
import CargaSaidaGradeModel from "./carga_saida_grade.model";

export default class CargaSaidaGradeRepository implements CargaSaidaGradeRepositoryInterface {
    async create(entity: CargaSaidaGrade){
        await CargaSaidaGradeModel.create({
            id: entity.id,
            cabotagem: entity.cabotagem,
            terceiro: entity.terceiro,
            cargaSaidaId: entity.cargaSaidaId,
            tpCarSaiId: entity.tpCarSaiId,
            tpConsCargId: entity.tpConsCargId,
            unidCargaId: entity.unidCargaId,
            motivoGeralId: entity.motivoGeralId,
            paramWsTvId: entity.paramWsTvId,
            prioridade: entity.prioridade,
            pesoPayload: entity.pesoPayload,
            motivoGeralIdUnidCarga: entity.motivoGeralIdUnidCarga
        });
    }

    async update(entity: CargaSaidaGrade){
        await CargaSaidaGradeModel.update({
            cabotagem: entity.cabotagem,
            terceiro: entity.terceiro,
            cargaSaidaId: entity.cargaSaidaId,
            tpCarSaiId: entity.tpCarSaiId,
            tpConsCargId: entity.tpConsCargId,
            unidCargaId: entity.unidCargaId,
            motivoGeralId: entity.motivoGeralId,
            paramWsTvId: entity.paramWsTvId,
            prioridade: entity.prioridade,
            pesoPayload: entity.pesoPayload,
            motivoGeralIdUnidCarga: entity.motivoGeralIdUnidCarga
        }, {
            where: {
                id: entity.id
            }
        });
    }


    async findById(id: string): Promise<CargaSaidaGrade> {
        let cargaSaidaGradeModel;
        try {
            cargaSaidaGradeModel = await CargaSaidaGradeModel.findOne({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error("CargaSaidaGrade not found");
        }

        const cargaSaidaGrade = new CargaSaidaGrade(id, 
                                                    cargaSaidaGradeModel.cabotagem, 
                                                    cargaSaidaGradeModel.terceiro, 
                                                    cargaSaidaGradeModel.cargaSaidaId, 
                                                    cargaSaidaGradeModel.tpCarSaiId, 
                                                    cargaSaidaGradeModel.tpConsCargId, 
                                                    cargaSaidaGradeModel.unidCargaId, 
                                                    cargaSaidaGradeModel.motivoGeralId, 
                                                    cargaSaidaGradeModel.paramWsTvId, 
                                                    cargaSaidaGradeModel.prioridade, 
                                                    cargaSaidaGradeModel.pesoPayload, 
                                                    cargaSaidaGradeModel.motivoGeralIdUnidCarga);
        
        return cargaSaidaGrade;
    }
    async findAll(): Promise<CargaSaidaGrade[]> {
        let cargaSaidaGradeModel;
        try {
            cargaSaidaGradeModel = await CargaSaidaGradeModel.findAll();
        } catch (error) {
            throw new Error("CargaSaidaGrade not found");
        }

        const cargaSaidaGrade = cargaSaidaGradeModel.map((cargaSaidaGradeModel) => {
            return new CargaSaidaGrade(cargaSaidaGradeModel.id, 
                                        cargaSaidaGradeModel.cabotagem, 
                                        cargaSaidaGradeModel.terceiro, 
                                        cargaSaidaGradeModel.cargaSaidaId, 
                                        cargaSaidaGradeModel.tpCarSaiId, 
                                        cargaSaidaGradeModel.tpConsCargId, 
                                        cargaSaidaGradeModel.unidCargaId, 
                                        cargaSaidaGradeModel.motivoGeralId, 
                                        cargaSaidaGradeModel.paramWsTvId, 
                                        cargaSaidaGradeModel.prioridade, 
                                        cargaSaidaGradeModel.pesoPayload, 
                                        cargaSaidaGradeModel.motivoGeralIdUnidCarga);
        });
        
        return cargaSaidaGrade;
    }

} 