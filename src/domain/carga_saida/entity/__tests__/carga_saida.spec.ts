import CargaSaida from "../carga_saida";

describe('CargaSaida unit tests', () => {

    it("should create a new CargaSaida", () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        expect(cargaSaida).toBeDefined();
    });

    it("should throw an error if id is not provided", () => {
        expect(() => new CargaSaida("", new Date(), 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toThrow('Invalid id');
    });

    it("should throw an error if dataSaida is not provided", () => {
        expect(() => new CargaSaida("1", null as any, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toThrow('Invalid dataSaida');
    });

    it("should throw an error if dataSaida is less than today", () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 10);
        const cargaSaida = new CargaSaida("1", yesterday, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        expect(cargaSaida).toThrow('Invalid dataSaida, dataSaida cannot be less than today');
    });

    it("should throw an error if dataSaida is less than today", () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 10);
        const createCargaSaida = () => new CargaSaida("1", yesterday, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        expect(createCargaSaida).toThrow('Invalid dataSaida, dataSaida cannot be less than today');
    });
    

    it("should throw an error if nroCarga is not provided", () => {
        const cargaSaida = new CargaSaida("1", new Date(), null as any, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        expect(cargaSaida).toThrow('Invalid nroCarga');
    });

    it("should throw an error if unidId is not provided", () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, null as any, 1, 1, 1, 1, 1, 1, 1, 1);
        expect(cargaSaida).toThrow('Invalid unidId');
    });

    it("should throw an error if usuId is not provided", () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, null as any, 1, 1, 1, 1, 1, 1, 1);
        expect(cargaSaida).toThrow('Invalid usuId');
    });

    it("should throw an error if embarqueRetira is not provided", () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, null as any, 1, 1, 1, 1, 1, 1);
        expect(cargaSaida).toThrow('Invalid embarqueRetira');
    });

    it("should throw an error if camaVeiculId is not provided", () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, 1, 1, null as any, 1, 1, 1, 1);
        expect(cargaSaida).toThrow('Invalid camaVeiculId');
    });

    it("should throw an error if veicRetId is not provided", () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, 1, 1, 1, null as any, 1, 1, 1);
        expect(cargaSaida).toThrow('Invalid veicRetId');
    });

    it("should throw an error if transportadoraId is not provided", () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, 1, 1, 1, 1, null as any, 1, 1);
        expect(cargaSaida).toThrow('Invalid transportadoraId');
    });

});