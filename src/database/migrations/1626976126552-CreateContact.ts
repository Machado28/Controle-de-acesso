import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateContact1626976126552 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contact',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'content',
            type: 'varchar(30)',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'typecontactId',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'entityId',
            type: 'uuid',
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'contact',
      new TableForeignKey({
        columnNames: ['typecontactId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'typecontact',
        name: 'fk_typecontact_contact_',
        onUpdate: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'contact',
      new TableForeignKey({
        columnNames: ['entityId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'entity',
        name: 'fk_contact_entity_',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('contact', 'fk_typecontact_contact_');
    await queryRunner.dropForeignKey('contact', 'fk_contact_entity_');
    await queryRunner.dropTable('contact');
  }
}
