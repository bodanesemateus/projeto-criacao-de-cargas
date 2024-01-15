import { Sequelize } from "sequelize-typescript";
import CargaSaidaGradeModel from "../carga_saida_grade.model";
import CargaSaidaGrade from "../../../../../domain/carga_saida/entity/carga_saida_grade";
import CargaSaidaGradeRepository from "../carga_saida_grade.repository";
import CargaSaidaRepository from "../../../../carga_saida/repo/sequelize/carga_saida.repository";
import CargaSaidaModel from "../../../../carga_saida/repo/sequelize/carga_saida.model";
import CargaSaida from "../../../../../domain/carga_saida/entity/carga_saida";

describe('CargaSaidaGradeRepository unit tests', () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:', 
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([CargaSaidaGradeModel, CargaSaidaModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should create a new CargaSaidaGrade', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);

        const cargaGradeRepository = new CargaSaidaGradeRepository();
        const cargaGrade = new CargaSaidaGrade("1", true, true, cargaSaida.id, 1, 1, 1, 1, 1, 1, 1, 1);

        await cargaGradeRepository.create(cargaGrade);

        const cargaGradeCreated = await cargaGradeRepository.findById("1");

        expect(cargaGradeCreated).not.toBeNull();
        expect(cargaGradeCreated.toJSON()).toEqual(cargaGrade.toJSON());
    });

    it('should update a new CargaSaidaGrade', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);

        const cargaGradeRepository = new CargaSaidaGradeRepository();
        const cargaGrade = new CargaSaidaGrade("1", true, true, cargaSaida.id, 1, 1, 1, 1, 1, 1, 1, 1);

        await cargaGradeRepository.create(cargaGrade);

        cargaGrade.changeCabotagem(false);

        try {
            await cargaGradeRepository.update(cargaGrade);    
        } catch (error) {
            throw new Error(String(error));
        }

        const cargaGradeUpdated = await cargaGradeRepository.findById("1");

        expect(cargaGradeUpdated).not.toBeNull();
        expect(cargaGradeUpdated.toJSON()).toEqual(cargaGrade.toJSON());
    });

    it('should find a CargaSaidaGrade by id', async () => {
        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);

        const cargaGradeRepository = new CargaSaidaGradeRepository();
        const cargaGrade = new CargaSaidaGrade("1", true, true, cargaSaida.id, 1, 1, 1, 1, 1, 1, 1, 1);

        await cargaGradeRepository.create(cargaGrade);

        const cargaGradeCreated = await cargaGradeRepository.findById("1");

        expect(cargaGradeCreated).not.toBeNull();
        expect(cargaGradeCreated.toJSON()).toEqual(cargaGrade.toJSON());

    });

    it('shoudl find all CargaSaidaGrade', async  () => {

        const cargaSaidaRepository = new CargaSaidaRepository();     
        const cargaSaida = new CargaSaida("1", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida);
     
        const cargaSaida2 = new CargaSaida("2", new Date(), 1, 1, 1, new Date(),1, 1, 1, 1, 1, 1, 1);   
        await cargaSaidaRepository.create(cargaSaida2);

        const cargaGradeRepository = new CargaSaidaGradeRepository();
        const cargaGrade = new CargaSaidaGrade("1", true, true, cargaSaida.id, 1, 1, 1, 1, 1, 1, 1, 1);
        const cargaGrade2 = new CargaSaidaGrade("2", true, true, cargaSaida2.id, 1, 1, 1, 1, 1, 1, 1, 1);

        await cargaGradeRepository.create(cargaGrade);
        await cargaGradeRepository.create(cargaGrade2);

        const cargaGradeCreated = await cargaGradeRepository.findAll();

        expect(cargaGradeCreated).not.toBeNull();
        expect(cargaGradeCreated.length).toBe(2);
        expect(cargaGradeCreated).toContainEqual(cargaGrade);
        expect(cargaGradeCreated).toContainEqual(cargaGrade2);
    });

});