import { Sequelize } from "sequelize-typescript";
import CargaSaida from "../../../../../domain/carga_saida/entity/carga_saida";
import CargaSaidaPendente from "../../../../../domain/carga_saida/entity/carga_saida_pendente";
import CargaSaidaModel from "../../../../carga_saida/repo/sequelize/carga_saida.model";
import CargaSaidaRepository from "../../../../carga_saida/repo/sequelize/carga_saida.repository";
import CargaSaidaPendenteModel from "../carga_saida_pendente.model";
import CargaSaidaPendenteRepository from "../carga_saida_pendente.repository";

describe('CargaSaidaPendenteRepository unit tests', () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([CargaSaidaPendenteModel, CargaSaidaModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should create a new CargaSaidaPendenteModel', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);

        const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();
        const cargaSaidaPendente = new CargaSaidaPendente("1", cargaSaida.id);
        await cargaSaidaPendenteRepository.create(cargaSaidaPendente);

        const cargaSaidaPendenteCreated = await cargaSaidaPendenteRepository.findById("1");

        expect(cargaSaidaPendenteCreated).not.toBeNull();
        expect(cargaSaidaPendenteCreated.toJSON()).toEqual(cargaSaidaPendente.toJSON());

    });

    it('should delete a CargaSaidaPendenteModel', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);

        const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();
        const cargaSaidaPendente = new CargaSaidaPendente("1", cargaSaida.id);
        await cargaSaidaPendenteRepository.create(cargaSaidaPendente);

        await cargaSaidaPendenteRepository.delete(cargaSaidaPendente);
        
        expect(async () => {
            await cargaSaidaPendenteRepository.findById("1")
        }).rejects.toThrow("CargaSaidaPendente not found");
    });

    it('should find a CargaSaidaPendenteModel by id', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);

        const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();
        const cargaSaidaPendente = new CargaSaidaPendente("1", cargaSaida.id);
        await cargaSaidaPendenteRepository.create(cargaSaidaPendente);

        const cargaSaidaPendenteFound = await cargaSaidaPendenteRepository.findById("1");

        expect(cargaSaidaPendenteFound).not.toBeNull();
        expect(cargaSaidaPendenteFound.toJSON()).toEqual(cargaSaidaPendente.toJSON());
    });

    it('should throw error when CargaSaidaPendenteModel not found', async () => {
        const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();

        expect(async () => {
            await cargaSaidaPendenteRepository.findById("1");
        }).rejects.toThrowError("CargaSaidaPendente not found");
    });

    it('should find a CargaSaidaPendenteModel by cargaSaidaId', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);

        const cargaSaidaPendenteRepository = new CargaSaidaPendenteRepository();
        const cargaSaidaPendente = new CargaSaidaPendente("1", cargaSaida.id);
        await cargaSaidaPendenteRepository.create(cargaSaidaPendente);

        const cargaSaidaPendenteFound = await cargaSaidaPendenteRepository.findByCargaSaidaId(cargaSaida.id);

        expect(cargaSaidaPendenteFound).not.toBeNull();
        expect(cargaSaidaPendenteFound.toJSON()).toEqual(cargaSaidaPendente.toJSON());
    });


});