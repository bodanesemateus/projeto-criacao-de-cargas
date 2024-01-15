import CargaSaidaGrade from "../carga_saida_grade";

describe('CargaSaidaGrade unit tests', () => {

    it("should throw error when id is empty", () => {

        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("", true, true, "1", 1, 1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("Id is required");

    });

    it("should throw error when cabotagem is empty", () => {
            
            expect(() => {
                let cargaSaidaGrade = new CargaSaidaGrade("1", undefined, true, "1", 1, 1, 1, 1, 1, 1, 1, 1);
            }).toThrowError("Cabotagem is required");
    });

    it("should throw error when terceiro is empty", () => {               
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, undefined, "1", 1, 1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("Terceiro is required");
    });

    it("should throw error when cargaSaidaId is empty", () => {
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, true, "", 1, 1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("CargaSaidaId is required");
    });

    it("should throw error when tpCarSaiId is empty", () => {
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, true, "1", null, 1, 1, 1, 1, 1, 1, 1);
        }).toThrowError("TpCarSaiId is required");
    });

    it("should throw error when tpConsCargId is empty", () => {
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, true, "1", 1, null, 1, 1, 1, 1, 1, 1);
        }).toThrowError("TpConsCargId is required");
    });

    it("should throw error when unidCargaId is empty", () => {
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, null, 1, 1, 1, 1, 1);
        }).toThrowError("UnidCargaId is required");
    });

    it("should throw error when motivoGeralId is empty", () => {
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, 1, null, 1, 1, 1, 1);
        }).toThrowError("MotivoGeralId is required");
    });

    it("should throw error when paramWsTvId is empty", () => {
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, 1, 1, null, 1, 1, 1);
        }).toThrowError("ParamWsTvId is required");
    });

    it("should throw error when prioridade is empty", () => {
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, 1, 1, 1, null, 1, 1);
        }).toThrowError("Prioridade is required");
    });

    it("should throw error when pesoPayload is empty", () => {
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, 1, 1, 1, 1, null, 1);
        }).toThrowError("PesoPayload is required");
    });

    it("should throw error when motivoGeralIdUnidCarga is empty", () => {
        expect(() => {
            let cargaSaidaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, 1, 1, 1, 1, 1, null);
        }).toThrowError("MotivoGeralIdUnidCarga is required");
    });

});