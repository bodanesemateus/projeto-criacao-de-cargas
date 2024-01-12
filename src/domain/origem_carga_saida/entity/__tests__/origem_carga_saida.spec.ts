import OrigemCargaSaida from "../origem_carga_saida";

describe('OrigemCargaSaida unit tests', () => {

    it("shoud throw error when id is empty", () => {
        expect(() => {
            let origemCargaSaida = new OrigemCargaSaida("", new Date(), 1, 1, 1, "1");
        }).toThrowError("Id is required");
    });

    it("shoud throw error when dataPrevCarga is empty", () => {
        expect(() => {
            let origemCargaSaida = new OrigemCargaSaida("1", null, 1, 1, 1, "1");
        }).toThrowError("DataPrevCarga is required");
    });

    it("shoud throw error when gradeCargaId is empty", () => {
        expect(() => {
            let origemCargaSaida = new OrigemCargaSaida("1", new Date(), null, 1, 1, "1");
        }).toThrowError("GradeCargaId is required");
    });

    it("shoud throw error when seqCarga is empty", () => {
        expect(() => {
            let origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, null, 1, "1");
        }).toThrowError("SeqCarga is required");
    });

    it("shoud throw error when localLogId is empty", () => {
        expect(() => {
            let origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, null, "1");
        }).toThrowError("LocalLogId is required");
    });

    it("shoud throw error when cargaSaidaId is empty", () => {
        expect(() => {
            let origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, null);
        }).toThrowError("CargaSaidaId is required");
    });

    it("shoud change localLogId", () => {
        let origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, "1");
        origemCargaSaida.changeLocalLogId(2);
        expect(origemCargaSaida.validate()).toBe(true);
    });

    it("shoud change seqCarga", () => {
        let origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, "1");
        origemCargaSaida.changeSeqCarga(2);
        expect(origemCargaSaida.validate()).toBe(true);
    });

});