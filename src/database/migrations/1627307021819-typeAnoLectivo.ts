import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class typeAnoLectivo1627307021819 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {  await queryRunner.createTable(
        new Table({
            name: "type_yearTeach",
            columns: [
                {
                    name: "id",
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    default:'uuid_generate_v4()' 
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isUnique: true,
                    isNullable:false,

                },
                {
                    name: 'created_At',
                    type: 'timestamp',
                    default:'now()'
                },
                {
                    name: 'updated_At',
                    type:'timestamp',
                    default:'now()'
                }
            ]

        })
    )
}

public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('type_YerTeach')
}

}
