import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class typeUser1627230249358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "role",
                columns: [
                    {
                        name: "id",
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default:'uuid_generate_v4()'
                    },
                    {
                        name: 'nome',
                        type: 'varchar(30)'

                    },
                    {
                        name: 'created_At',
                        type:'timestamp'
                    },
                    {
                        name: 'updated_At',
                        type:'timestamp'
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('role')
    }

}
