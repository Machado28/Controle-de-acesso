import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateLogin1626995728342 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'login',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'password',
            type: 'varchar(100)',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'contactId',
            type: 'uuid',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'entityId',
            type: 'uuid',
            isNullable: false,
            isUnique: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'login',
      new TableForeignKey({
        columnNames: ['contactId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contact',
        name: 'fk_login_contact_',
        onUpdate: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'login',
      new TableForeignKey({
        columnNames: ['entityId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'entity',
        name: 'fk_login_entity_',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('login', 'fk_login_contact_');
    await queryRunner.dropForeignKey('login', 'fk_login_entity_');
    await queryRunner.dropTable('login');
  }
}
