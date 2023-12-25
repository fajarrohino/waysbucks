import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703531603022 implements MigrationInterface {
    name = 'MyMigration1703531603022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
    }

}
