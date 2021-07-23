import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateEntity1626961466015 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'entity',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar(30)',
            isNullable: true,
          },
          {
            name: 'nif',
            type: 'varchar(30)',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'username',
            type: 'varchar(30)',
            isUnique: true,
          },
          {
            name: 'dateborn',
            type: 'Date',
            isNullable: false,
          },
          {
            name: 'typeentityId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'enderecoId',
            type: 'uuid',
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'entity',
      new TableForeignKey({
        columnNames: ['typeentityId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'typeentity',
        name: 'fk_typeentity_entity_',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('entity', 'fk_typeentity_entity_');
    await queryRunner.dropTable('entity');
  }
}
