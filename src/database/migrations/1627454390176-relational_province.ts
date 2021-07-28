import {MigrationInterface, QueryRunner} from "typeorm";

export class relationalProvince1627454390176 implements MigrationInterface {
    name = 'relationalProvince1627454390176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "classRoom" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_50d47a94185f910c672898d2f2b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "province" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "countryId" integer, CONSTRAINT "PK_4f461cb46f57e806516b7073659" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "country" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schooling" ("id" SERIAL NOT NULL, "name" character varying, "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cd46ec0eb683b941375fe1e54a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "schoolingId" integer, CONSTRAINT "PK_d3f1a7a6f09f1c3144bacdc6bcc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "type_contact" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7095ca3fd84aba5b7f231eca287" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "type_Matricula" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8fdf79936180532e9fd0010dabe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "type_school" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_86f4f25c3306cc99ece2b33fc23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "type_yearTeach" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e3d1919c9145596a069c004c7a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "province" ADD CONSTRAINT "FK_493e19852e51a27ff8e544fd8cc" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "level" ADD CONSTRAINT "FK_2963805c1a81e5721205b0a8c11" FOREIGN KEY ("schoolingId") REFERENCES "schooling"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "level" DROP CONSTRAINT "FK_2963805c1a81e5721205b0a8c11"`);
        await queryRunner.query(`ALTER TABLE "province" DROP CONSTRAINT "FK_493e19852e51a27ff8e544fd8cc"`);
        await queryRunner.query(`DROP TABLE "type_yearTeach"`);
        await queryRunner.query(`DROP TABLE "type_school"`);
        await queryRunner.query(`DROP TABLE "type_Matricula"`);
        await queryRunner.query(`DROP TABLE "type_contact"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "level"`);
        await queryRunner.query(`DROP TABLE "schooling"`);
        await queryRunner.query(`DROP TABLE "country"`);
        await queryRunner.query(`DROP TABLE "province"`);
        await queryRunner.query(`DROP TABLE "classRoom"`);
    }

}
