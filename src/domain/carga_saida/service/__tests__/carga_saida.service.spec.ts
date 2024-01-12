import CargaSaidaService from "../carga_saida.service";

describe('CargaSaidaService unit tests', () => {


    it("should make a cargo", () => {
        const cargo = CargaSaidaService.makeCargo("id", new Date(), 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        expect(cargo).toBeDefined();
    });

});