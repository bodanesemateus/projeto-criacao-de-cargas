import {BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import CargaSaidaModel from "../../../carga_saida/repo/sequelize/carga_saida.model";

@Table({ 
    tableName: "origem_carga_saida", 
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

    @ForeignKey(() => CargaSaidaModel)
    @Column({allowNull: false})
    declare carga_saida_id: string;

    @BelongsTo(() => CargaSaidaModel)
    declare carga_saida: CargaSaidaModel;

    @Column({allowNull: false})
    declare data_inclusao: Date;

}
