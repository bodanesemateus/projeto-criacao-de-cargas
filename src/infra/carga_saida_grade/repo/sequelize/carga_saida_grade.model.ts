import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import CargaSaidaModel from "../../../carga_saida/repo/sequelize/carga_saida.model";

@Table({ 
    tableName: "carga_saida_grade", 
    timestamps: false })
export default class CargaSaidaGradeModel extends Model{ 

    @PrimaryKey
    @Column
    declare id: string;

    @Column({allowNull: false})
    declare cabotagem: boolean;

    @Column({allowNull: false})
    declare terceiro: boolean;

    @ForeignKey(() => CargaSaidaModel)
    @Column({allowNull: false})
    declare carga_saida_id: string;

    @BelongsTo(() => CargaSaidaModel)
    declare carga_saida: CargaSaidaModel;

    @Column({allowNull: false})
    declare tpCarSaiId: number;

    @Column({allowNull: false})
    declare tpConsCargId: number;

    @Column({allowNull: false})
    declare unidCargaId: number;

    @Column({allowNull: false})
    declare motivoGeralId: number;

    @Column({allowNull: false})
    declare paramWsTvId: number;

    @Column({allowNull: false})
    declare prioridade: number;

    @Column({allowNull: false})
    declare pesoPayload: number;

    @Column({allowNull: false})
    declare motivoGeralIdUnidCarga: number;

}
