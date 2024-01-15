import { Sequelize, getAttributes } from "sequelize-typescript";
import CargaSaidaModel from "../../../../infra/carga_saida/repo/sequelize/carga_saida.model";
import CargaSaidaService from "../carga_saida.service";
import CargaSaidaPendenteModel from "../../../../infra/carga_saida_pendente/repo/sequelize/carga_saida_pendente.model";
import CargaSaidaPendenteRepository from "../../../../infra/carga_saida_pendente/repo/sequelize/carga_saida_pendente.repository";

describe('CargaSaidaService unit tests', () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([CargaSaidaModel, CargaSaidaPendenteModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should make a cargo", async () => {
        const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();

        const cargaSaida = await CargaSaidaService.makeCargo("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        const cargaSaidaPendenteCreated = await cargaSaidaPendenteRepository.findByCargaSaidaId(cargaSaida.id);

        expect(cargaSaidaPendenteCreated).not.toBeNull();
        expect(cargaSaidaPendenteCreated.cargaSaidaId).toEqual(cargaSaida.id);
    });

});