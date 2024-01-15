import { Column, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import CargaSaidaPendenteModel from "../../../carga_saida_pendente/repo/sequelize/carga_saida_pendente.model";

@Table({ 
    tableName: "carga_saida", 
    timestamps: false })
export default class CargaSaidaModel extends Model{

    @PrimaryKey
    @Column
    declare id: string;

    @Column({allowNull: false})
    declare dataSaida: Date;

    @Column({allowNull: false})
    declare nroCarga: number;

    @Column({allowNull: false})
    declare unidId: number;

    @Column({allowNull: false})
    declare usuId: number;

    @Column({allowNull: false})
    declare dataCriacao: Date;

    @Column({allowNull: false})
    declare embarqueRetira: number;

    @Column({allowNull: false})
    declare imprePrevDb: number;

    @Column({allowNull: false})
    declare divisoria: number;

    @Column({allowNull: true})
    declare camaVeiculId: number;

    @Column({allowNull: true})
    declare veicRetId: number; 

    @Column({allowNull: true})
    declare transportadoraId: number;

    @Column({allowNull: true})
    declare enderIdTransbordo: number;

}