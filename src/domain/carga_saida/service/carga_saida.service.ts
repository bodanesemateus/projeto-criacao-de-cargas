import CargaSaidaRepository from "../../../infra/carga_saida/repo/sequelize/carga_saida.repository";
import CargaSaidaGradeRepository from "../../../infra/carga_saida_grade/repo/sequelize/carga_saida_grade.repository";
import CargaSaidaPendenteRepository from "../../../infra/carga_saida_pendente/repo/sequelize/carga_saida_pendente.repository";
import CargaSaida from "../entity/carga_saida";
import CargaSaidaGrade from "../entity/carga_saida_grade";
import CargaSaidaPendente from "../entity/carga_saida_pendente";
import { v4 as uuid } from 'uuid';


export default class CargaSaidaService {
    
    public static async makeCargo(cargaSaida: CargaSaida) {

        try {
            const cargaSaidaRepository = new CargaSaidaRepository();
            await cargaSaidaRepository.create(cargaSaida);            
        } catch (error) {
            throw new Error('Error creating carga de saida');
        }

        try {
            const idCargaSaidaPendente = uuid();
            const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();
            const cargaSaidaPendente = new CargaSaidaPendente(idCargaSaidaPendente, cargaSaida.id);
            await cargaSaidaPendenteRepository.create(cargaSaidaPendente);        
        } catch (error) {
            throw new Error("Error creating carga pendente");
        }
        
    }

    public static async makeCargoWithGrade(cargaSaidaGrade:CargaSaidaGrade, cargaSaida:CargaSaida) {
           
        try {
            const cargaSaidaRepository = new CargaSaidaRepository();
            await cargaSaidaRepository.create(cargaSaida);    
        } catch (error) {
            throw new Error('Error creating carga de saida');
        }
        
        try {

            const idCargaSaidaPendente = uuid();
            const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();
            const cargaSaidaPendente = new CargaSaidaPendente(idCargaSaidaPendente, cargaSaida.id);
            await cargaSaidaPendenteRepository.create(cargaSaidaPendente);    

        } catch (error) {
            throw new Error("Error creating carga pendente");
        }
        
        try {
            const cargaSaidaGradeRepository = new CargaSaidaGradeRepository();
            await cargaSaidaGradeRepository.create(cargaSaidaGrade);
        } catch (error) {
            throw new Error("Error creating carga grade, error: " +  String(error));
        }

    }

}