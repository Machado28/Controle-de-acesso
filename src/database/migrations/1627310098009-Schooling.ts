import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class Scholling1627310098009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {  await queryRunner.createTable(
        new Table({
            name: "schooling",
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
                    name: 'description',
                    type: 'varchar',
                    isUnique: true,
                    isNullable:true,

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
    await queryRunner.dropTable('schooling')
}

}
