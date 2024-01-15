import EventInterface from "../../../domain/.shared/event/event.interface";

export default class CargaSaidaCreatedEvent implements EventInterface {
    dataTimeOccurred: Date;
    event: any;

    constructor(event: any) {
        this.dataTimeOccurred = new Date();
        this.event.carga_saida_id = event.carga_saida_id;
    }

    get cargaSaidaId(): string {
        return this.event.carga_saida_id;
    }
}