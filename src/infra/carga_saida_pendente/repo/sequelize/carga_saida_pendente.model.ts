import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import CargaSaidaModel from "../../../carga_saida/repo/sequelize/carga_saida.model";


@Table({
    tableName: "carga_saida_pendente",
    timestamps: false})

export default class CargaSaidaPendenteModel extends Model {

    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => CargaSaidaModel)
    @Column({allowNull: false})
    declare carga_saida_id: string;

    @BelongsTo(() => CargaSaidaModel)
    declare carga_saida: CargaSaidaModel;

}