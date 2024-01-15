import CargaSaidaCreatedEvent from "../carga_saida-created.event";
import EventHandlerInterface from "../../../../domain/.shared/event/event-handler.interface";
import CargaSaidaPendenteRepository from "../../../../infra/carga_saida_pendente/repo/sequelize/carga_saida_pendente.repository";
import CargaSaidaPendente from "../../entity/carga_saida_pendente";

export default class CreateCargaSaidaPendenteWhenCargaSaidaIsCreated implements EventHandlerInterface<CargaSaidaCreatedEvent>{
 
    handle(event: CargaSaidaCreatedEvent): void {
        const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();
        const cargaSaidaPendente = new CargaSaidaPendente("1", event.cargaSaidaId);
        cargaSaidaPendenteRepository.create(cargaSaidaPendente);
    }

}