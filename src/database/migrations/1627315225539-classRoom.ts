import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class classRoom1627315225539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {  await queryRunner.createTable(
        new Table({
            name: "classRoom",
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
                    name: 'number',
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
    await queryRunner.dropTable('classRoom')
}


}
