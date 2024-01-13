import { Sequelize } from "sequelize-typescript";
import CargaSaidaModel from "../carga_saida.model";
import CargaSaidaRepository from "../carga_saida.repository";
import CargaSaida from "../../../../../domain/carga_saida/entity/carga_saida";

describe('CargaSaidaRepository unit tests', () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
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
        const cargaSaidaRepository = new CargaSaidaRepository();
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        await cargaSaidaRepository.create(cargaSaida);

        const cargaSaidaCreated = await CargaSaidaModel.findByPk(cargaSaida.id);

        expect(cargaSaidaCreated).not.toBeNull();
        expect(cargaSaidaCreated.toJSON()).toEqual(cargaSaida.toJSON());
    });

    it('should update a CargaSaida', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        await cargaSaidaRepository.create(cargaSaida);

        cargaSaida.changeDataSaida(new Date("2020-01-01"));

        await cargaSaidaRepository.update(cargaSaida);

        const cargaSaidaUpdated = await CargaSaidaModel.findByPk(cargaSaida.id);

        expect(cargaSaidaUpdated.toJSON()).toEqual(cargaSaida.toJSON());
        
    });

    it('should find a CargaSaida by id', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        await cargaSaidaRepository.create(cargaSaida);

        const cargaSaidaFound = await cargaSaidaRepository.findById(cargaSaida.id);

        expect(cargaSaida).toStrictEqual(cargaSaidaFound);
    });

    it('should throw error when CargaSaida not found', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();

        expect(async () => {
            await cargaSaidaRepository.findById("1");
        }).rejects.toThrowError("CargoSaida not found");
    });

    it('should find all CargaSaida', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();
        const cargaSaida1 = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);
        const cargaSaida2 = new CargaSaida("2", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);

        await cargaSaidaRepository.create(cargaSaida1);
        await cargaSaidaRepository.create(cargaSaida2);

        const cargasSaidaFound = await cargaSaidaRepository.findAll();

        expect(cargasSaidaFound).toHaveLength(2);
        expect(cargasSaidaFound).toContainEqual(cargaSaida1);
        expect(cargasSaidaFound).toContainEqual(cargaSaida2);
    });

});