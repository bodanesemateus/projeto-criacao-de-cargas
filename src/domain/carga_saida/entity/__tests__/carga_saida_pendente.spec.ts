import CargaSaidaPendente from "../carga_saida_pendente";

describe('CargaSaidaPendente unit tests', () => {

    it("shoud throw error when id is empty", () => {
        expect(() => {
            let cargaSaidaPendente = new CargaSaidaPendente("", "1");
        }).toThrowError("Id is required");
    });

    it("shoud throw error when cargaSaidaId is empty", () => {
        expect(() => {
            let cargaSaidaPendente = new CargaSaidaPendente("1", "");
        }).toThrowError("CargaSaidaId is required");
    });


});