import { Sequelize } from "sequelize-typescript";
import CargaSaidaGradeModel from "../carga_saida_grade.model";
import CargaSaidaGrade from "../../../../../domain/carga_saida/entity/carga_saida_grade";
import CargaSaidaGradeRepository from "../carga_saida_grade.repository";

describe('CargaSaidaGradeRepository unit tests', () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([CargaSaidaGradeModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should create a new CargaSaidaGrade', async () => {
            
        const cargaGradeRepository = new CargaSaidaGradeRepository();
        const cargaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, 1, 1, 1, 1, 1, 1);

        await cargaGradeRepository.create(cargaGrade);

        const cargaGradeCreated = await cargaGradeRepository.findById("1");

        expect(cargaGradeCreated).not.toBeNull();
        expect(cargaGradeCreated.toJSON()).toEqual(cargaGrade.toJSON());
    });

    it('should update a CargaSaidaGrade', async () => {

        const cargaGradeRepository = new CargaSaidaGradeRepository();
        const cargaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, 1, 1, 1, 1, 1, 1);

        await cargaGradeRepository.create(cargaGrade);

        const cargaGradeUpdated = new CargaSaidaGrade("1", false, false, "1", 1, 1, 1, 1, 1, 1, 1, 1);

        await cargaGradeRepository.update(cargaGradeUpdated);

        const cargaGradeCreated = await cargaGradeRepository.findById("1");

        expect(cargaGradeCreated).not.toBeNull();
        expect(cargaGradeCreated.toJSON()).toEqual(cargaGradeUpdated.toJSON());

    });

    it('should find a CargaSaidaGrade by id', async () => {

        const cargaGradeRepository = new CargaSaidaGradeRepository();
        const cargaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, 1, 1, 1, 1, 1, 1);

        await cargaGradeRepository.create(cargaGrade);

        const cargaGradeCreated = await cargaGradeRepository.findById("1");

        expect(cargaGradeCreated).not.toBeNull();
        expect(cargaGradeCreated.toJSON()).toEqual(cargaGrade.toJSON());

    });

    it('shoudl find all CargaSaidaGrade', async  () => {

        const cargaGradeRepository = new CargaSaidaGradeRepository();
        const cargaGrade = new CargaSaidaGrade("1", true, true, "1", 1, 1, 1, 1, 1, 1, 1, 1);
        const cargaGrade2 = new CargaSaidaGrade("2", true, true, "1", 1, 1, 1, 1, 1, 1, 1, 1);

        await cargaGradeRepository.create(cargaGrade);
        await cargaGradeRepository.create(cargaGrade2);

        const cargaGradeCreated = await cargaGradeRepository.findAll();

        expect(cargaGradeCreated).not.toBeNull();
        expect(cargaGradeCreated.length).toBe(2);
        expect(cargaGradeCreated).toContainEqual(cargaGrade);
        expect(cargaGradeCreated).toContainEqual(cargaGrade2);
    });

});