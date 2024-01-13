import { Sequelize } from "sequelize-typescript";
import { OrigemCargaSaidaModel } from "../origem_carga_saida.model";
import OrigemCargaSaida from "../../../../../domain/origem_carga_saida/entity/origem_carga_saida";
import OrigemCargaSaidaRepository from "../origem_carga_saida.repository";

describe('OrigemCargaSaidaRepository unit tests', () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([OrigemCargaSaidaModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should create a new OrigemCargaSaidaModel', async () => {
        const origemCargaSaidaRepository = new OrigemCargaSaidaRepository();
        const origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, "1", new Date());

        const result = await origemCargaSaidaRepository.create(origemCargaSaida);

        const origemCargaSaidaCreated = await origemCargaSaidaRepository.findById("1");

        expect(origemCargaSaidaCreated).not.toBeNull();
        expect(origemCargaSaidaCreated.toJSON()).toEqual(origemCargaSaida.toJSON());

    });

    it('should update a OrigemCargaSaidaModel', async () => {
        const origemCargaSaidaRepository = new OrigemCargaSaidaRepository();
        const origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, "1", new Date());
        await origemCargaSaidaRepository.create(origemCargaSaida);

        const origemCargaSaida2 = new OrigemCargaSaida("1", new Date(), 2, 2, 2, "2", new Date());

        await origemCargaSaidaRepository.update(origemCargaSaida2);

        const origemCargaSaidaUpdated = await origemCargaSaidaRepository.findById("1");

        expect(origemCargaSaidaUpdated).not.toBeNull();
        expect(origemCargaSaidaUpdated.toJSON()).toEqual(origemCargaSaida2.toJSON());

    });

    it('should find a OrigemCargaSaidaModel by id', async () => {
        const origemCargaSaidaRepository = new OrigemCargaSaidaRepository();
        const origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, "1", new Date());
        await origemCargaSaidaRepository.create(origemCargaSaida);

        const origemCargaSaidaFound = await origemCargaSaidaRepository.findById("1");

        expect(origemCargaSaidaFound).not.toBeNull();
        expect(origemCargaSaidaFound.toJSON()).toEqual(origemCargaSaida.toJSON());

    });

    it('should find all OrigemCargaSaidaModel', async () => {
        const origemCargaSaidaRepository = new OrigemCargaSaidaRepository();
        const origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, "1", new Date());
        const origemCargaSaida2 = new OrigemCargaSaida("2", new Date(), 2, 2, 2, "2", new Date());
        await origemCargaSaidaRepository.create(origemCargaSaida);
        await origemCargaSaidaRepository.create(origemCargaSaida2);

        const origemCargaSaidaFound = await origemCargaSaidaRepository.findAll();

        expect(origemCargaSaidaFound).not.toBeNull();
        expect(origemCargaSaidaFound.length).toEqual(2);
        expect(origemCargaSaidaFound).toContainEqual(origemCargaSaida);
        expect(origemCargaSaidaFound).toContainEqual(origemCargaSaida2);

    });

});