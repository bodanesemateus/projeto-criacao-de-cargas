import RepositoryInterface from "../../.shared/repository/repository-interface";
import CargaSaidaPendente from "../entity/carga_saida_pendente";

export default interface CargaSaidaPendenteRepositoryInterface extends RepositoryInterface<CargaSaidaPendente> {
    delete(entity: CargaSaidaPendente): Promise<void>;
}