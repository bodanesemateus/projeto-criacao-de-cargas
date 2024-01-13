import CargaSaida from "../carga_saida";

describe('CargaSaida unit tests', () => {

    it("shoud throw error when id is empty", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("Id is required");
    });

    it("shoud return true when id is not empty", () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);
        expect(cargaSaida.validate()).toBe(true);
    });

    it("should throw error when dataSaida is empty", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("1", null as any, 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("DataSaida is required");
    });

    it("should throw error when nroCarga empty", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("1", new Date(), null, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("NroCarga is required");
    });

    it("should throw error when unidId empty", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("1", new Date(), 1, null, 1, new Date(),1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("UnidId is required");
    });

    it("should throw error when usuId empty", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("1", new Date(), 1, 1, null, new Date(),1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("UsuId is required");
    });

    it("should throw error when dataSaida less than sysdate", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("1", new Date("2020-01-01"), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("DataSaida must be greater than sysdate");
    });

    it("should throw error when embarqueRetira empty", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(), null , 1, 1, 1, 1, 1, 1);
        }).toThrowError("EmbarqueRetira is required");
    });

    it("should throw error when camVeiculId empty", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, null, 1, 1, 1);
        }).toThrowError("CamaVeiculId is required");
    });

    it("should throw error when veicRetId empty", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, null, 1, 1);
        }).toThrowError("VeicRetId is required");
    });

    it("should throw error when transportadoraId empty", () => {
        expect(() => {
            const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, null, 1);
        }).toThrowError("TransportadoraId is required");
    });

    it("should change embarqueRetira", () => {

        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        cargaSaida.changeEmbarqueRetira(2);

        expect(cargaSaida.embarqueRetira).toBe(2);
    });

    it("should change veicRetId", () => {

        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        cargaSaida.changeVeicRetId(2);

        expect(cargaSaida.veicRetId).toBe(2);
    });

    it("should change dataSaida", () => {

        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        cargaSaida.changeDataSaida(new Date("2020-01-01"));

        expect(cargaSaida.dataSaida).toEqual(new Date("2020-01-01"));
    });

    it("should change transportadoraId", () => {

        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        cargaSaida.changeTransportadoraId(2);

        expect(cargaSaida.transportadoraId).toBe(2);
    });

    it("should change enderIdTransbordo", () => {

        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        cargaSaida.changeEnderIdTransbordo(2);

        expect(cargaSaida.enderIdTransbordo).toBe(2);
    });


});