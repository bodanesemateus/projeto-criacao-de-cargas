import { Sequelize } from "sequelize-typescript";
import { OrigemCargaSaidaModel } from "../origem_carga_saida.model";
import OrigemCargaSaida from "../../../../../domain/origem_carga_saida/entity/origem_carga_saida";
import OrigemCargaSaidaRepository from "../origem_carga_saida.repository";
import CargaSaidaRepository from "../../../../carga_saida/repo/sequelize/carga_saida.repository";
import CargaSaida from "../../../../../domain/carga_saida/entity/carga_saida";
import CargaSaidaModel from "../../../../carga_saida/repo/sequelize/carga_saida.model";

describe('OrigemCargaSaidaRepository unit tests', () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([OrigemCargaSaidaModel, CargaSaidaModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should create a new OrigemCargaSaidaModel', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);


        const origemCargaSaidaRepository = new OrigemCargaSaidaRepository();
        const origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, cargaSaida.id, new Date());

        const result = await origemCargaSaidaRepository.create(origemCargaSaida);

        const origemCargaSaidaCreated = await origemCargaSaidaRepository.findById("1");

        expect(origemCargaSaidaCreated).not.toBeNull();
        expect(origemCargaSaidaCreated.toJSON()).toEqual(origemCargaSaida.toJSON());

    });

    it('should update a OrigemCargaSaidaModel', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);

        const origemCargaSaidaRepository = new OrigemCargaSaidaRepository();
        const origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, cargaSaida.id, new Date());
        await origemCargaSaidaRepository.create(origemCargaSaida);

        origemCargaSaida.changeLocalLogId(2);

        await origemCargaSaidaRepository.update(origemCargaSaida);

        const origemCargaSaidaUpdated = await origemCargaSaidaRepository.findById("1");

        expect(origemCargaSaidaUpdated).not.toBeNull();
        expect(origemCargaSaidaUpdated.toJSON()).toEqual(origemCargaSaida.toJSON());

    });

    it('should find a OrigemCargaSaidaModel by id', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);


        const origemCargaSaidaRepository = new OrigemCargaSaidaRepository();
        const origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, cargaSaida.id, new Date());

        await origemCargaSaidaRepository.create(origemCargaSaida);
        
        const origemCargaSaidaFound = await origemCargaSaidaRepository.findById("1");

        expect(origemCargaSaidaFound).not.toBeNull();
        expect(origemCargaSaidaFound.toJSON()).toEqual(origemCargaSaida.toJSON());

    });

    it('should find all OrigemCargaSaidaModel', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);


        const origemCargaSaidaRepository = new OrigemCargaSaidaRepository();
        const origemCargaSaida = new OrigemCargaSaida("1", new Date(), 1, 1, 1, cargaSaida.id, new Date());
        await origemCargaSaidaRepository.create(origemCargaSaida);

        const origemCargaSaida2 = new OrigemCargaSaida("2", new Date(), 1, 1, 1, cargaSaida.id, new Date());
        await origemCargaSaidaRepository.create(origemCargaSaida2);

        const origemCargaSaidaFound = await origemCargaSaidaRepository.findAll();

        expect(origemCargaSaidaFound).not.toBeNull();
        expect(origemCargaSaidaFound.length).toEqual(2);
        expect(origemCargaSaidaFound).toContainEqual(origemCargaSaida);
        expect(origemCargaSaidaFound).toContainEqual(origemCargaSaida2);

    });

});