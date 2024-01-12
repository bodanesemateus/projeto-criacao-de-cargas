import { Sequelize } from "sequelize-typescript";
import CargaSaidaModel from "../carga_saida.model";
import CargaSaidaRepository from "../carga_saida.repository";
import CargaSaida from "../../../../../domain/carga_saida/entity/carga_saida";

describe('CargaSaidaRepository unit tests', () => {

    let sequelize: Sequelize;

    beforeAll(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([CargaSaidaModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should create a new CargaSaida', async () => {
        const cargaRepository = new CargaSaidaRepository();
        let cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        await cargaRepository.create(cargaSaida);

        const cargaSaidaModel = await CargaSaidaModel.findOne({
            where: {
                id: "1"
            }
        });

        expect(cargaSaidaModel.toJSON()).toStrictEqual(cargaSaida.toJSON());
    });

    it('should update a CargaSaida', async () => {
        const cargaRepository = new CargaSaidaRepository();
        let cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        await cargaRepository.create(cargaSaida);

        cargaSaida = new CargaSaida("1", new Date(), 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
        await cargaRepository.update(cargaSaida);

        const cargaSaidaModel = await CargaSaidaModel.findOne({
            where: {
                id: "1"
            }
        });

        expect(cargaSaidaModel.toJSON()).toStrictEqual(cargaSaida.toJSON());
    });

    it('should find a CargaSaida by id', async () => {
        const cargaRepository = new CargaSaidaRepository();
        let cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        await cargaRepository.create(cargaSaida);

        const cargaSaidaFound = await cargaRepository.findById("1");

        expect(cargaSaida).toStrictEqual(cargaSaidaFound);
    });

    it('should throw an error when CargaSaida not found', async () => {
        const cargaRepository = new CargaSaidaRepository();

        await expect(cargaRepository.findById("13123123")).rejects.toThrow("CargaSaida not found");
    });

    it('should find all CargaSaida', async () => {
        const cargaRepository = new CargaSaidaRepository();
        let cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        await cargaRepository.create(cargaSaida);

        cargaSaida = new CargaSaida("2", new Date(), 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
        await cargaRepository.create(cargaSaida);

        const cargasSaidaFound = await cargaRepository.findAll();

        expect(cargasSaidaFound).toHaveLength(2);
    });

});