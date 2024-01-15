import { Sequelize, getAttributes } from "sequelize-typescript";
import CargaSaidaModel from "../../../../infra/carga_saida/repo/sequelize/carga_saida.model";
import CargaSaidaService from "../carga_saida.service";
import CargaSaidaPendenteModel from "../../../../infra/carga_saida_pendente/repo/sequelize/carga_saida_pendente.model";
import CargaSaidaPendenteRepository from "../../../../infra/carga_saida_pendente/repo/sequelize/carga_saida_pendente.repository";
import CargaSaida from "../../entity/carga_saida";
import CargaSaidaGrade from "../../entity/carga_saida_grade";
import CargaSaidaGradeModel from "../../../../infra/carga_saida_grade/repo/sequelize/carga_saida_grade.model";

describe('CargaSaidaService unit tests', () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([CargaSaidaModel, CargaSaidaPendenteModel, CargaSaidaGradeModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should make a cargo", async () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        await CargaSaidaService.makeCargo(cargaSaida);

        const cargaSaidaCreated = await CargaSaidaModel.findOne({ where: { id: cargaSaida.id } });

        expect(cargaSaidaCreated.toJSON()).toEqual(cargaSaida.toJSON());

    });

    it("should make a cargo with grade", async () => {
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);
        const cargaSaidaGrade = new CargaSaidaGrade("1", true, true, cargaSaida.id, 1, 1, 1, 1, 1, 1, 1, 1);

        await CargaSaidaService.makeCargoWithGrade(cargaSaidaGrade, cargaSaida);

        const cargaSaidaCreated = await CargaSaidaModel.findOne({ where: { id: cargaSaida.id } });
        const cargaSaidaGradeCreated = await CargaSaidaGradeModel.findOne({ where: { id: cargaSaidaGrade.id } });

        expect(cargaSaidaCreated.toJSON()).toEqual(cargaSaida.toJSON());
        expect(cargaSaidaGradeCreated.toJSON()).toEqual(cargaSaidaGrade.toJSON());
    });

});