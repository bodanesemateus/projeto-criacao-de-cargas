import {Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({ 
    tableName: "carga_saida_grade", 
    timestamps: false })

export class OrigemCargaSaidaModel extends Model {
  
    @PrimaryKey
    @Column
    declare id: string;

    @Column({allowNull: false})
    declare data_prev_carga: Date;

    @Column({allowNull: false})
    declare grade_carga_id: number;

    @Column({allowNull: false})
    declare seq_carga: number;

    @Column({allowNull: false})
    declare local_log_id: number;

    @Column({allowNull: false})
    declare carga_saida_id: string;

    @Column({allowNull: false})
    declare data_inclusao: Date;

}
