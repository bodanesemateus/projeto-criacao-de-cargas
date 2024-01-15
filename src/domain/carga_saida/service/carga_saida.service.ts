import CargaSaidaRepository from "../../../infra/carga_saida/repo/sequelize/carga_saida.repository";
import CargaSaidaPendenteRepository from "../../../infra/carga_saida_pendente/repo/sequelize/carga_saida_pendente.repository";
import CargaSaida from "../entity/carga_saida";
import CargaSaidaPendente from "../entity/carga_saida_pendente";
import { v4 as uuid } from 'uuid';


export default class CargaSaidaService {
    
    public static async makeCargo(id:string, dataSaida:Date, nroCarga:number, unidId:number, usuId:number, dataCriacao:Date, embarqueRetira:number, imprePrevDb:number, 
        divisoria:number, camaVeiculId:number, veicRetId:number, transportadoraId:number, enderIdTransbordo:number): Promise<CargaSaida> {

        const cargaSaidaRepository = new CargaSaidaRepository();
        const cargaSaida = new CargaSaida(id, dataSaida, nroCarga, unidId, usuId, dataCriacao, embarqueRetira, imprePrevDb, divisoria, camaVeiculId, veicRetId, transportadoraId, enderIdTransbordo);
        await cargaSaidaRepository.create(cargaSaida);


        const idCargaSaidaPendente = uuid();
        const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();
        const cargaSaidaPendente = new CargaSaidaPendente(idCargaSaidaPendente, cargaSaida.id);
        await cargaSaidaPendenteRepository.create(cargaSaidaPendente);
        
        return cargaSaida;
    }

}