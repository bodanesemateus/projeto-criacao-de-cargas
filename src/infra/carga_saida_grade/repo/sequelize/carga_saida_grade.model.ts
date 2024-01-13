import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

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

    @Column({allowNull: false})
    declare cargaSaidaId: string;

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
