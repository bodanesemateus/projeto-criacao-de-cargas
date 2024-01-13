import CargaSaidaGrade from "../../../../domain/carga_saida/entity/carga_saida_grade";
import CargaSaidaGradeRepositoryInterface from "../../../../domain/carga_saida/repository/carga_saida_grade-repository";
import CargaSaidaGradeModel from "./carga_saida_grade.model";

export default class CargaSaidaGradeRepository implements CargaSaidaGradeRepositoryInterface {
    create(entity: CargaSaidaGrade): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(entity: CargaSaidaGrade): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<CargaSaidaGrade> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<CargaSaidaGrade[]> {
        throw new Error("Method not implemented.");
    }
    
}