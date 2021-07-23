import {QueryRunner, MigrationInterface, Table} from 'typeorm'

export class CreateTypeentity1626883170729 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'typeentity',
            columns: [
                {
                    name: "id",
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: "description",
                    type: 'varchar(30)',
                    isUnique: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('typeentity')
    }

}
