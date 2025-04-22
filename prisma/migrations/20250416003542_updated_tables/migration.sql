/*
  Warnings:

  - You are about to alter the column `name` on the `Categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(128)` to `VarChar(64)`.
  - You are about to alter the column `slug` on the `Categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(128)` to `VarChar(64)`.
  - You are about to alter the column `color` on the `Categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(128)` to `VarChar(64)`.
  - You are about to alter the column `name` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(128)` to `VarChar(64)`.
  - You are about to alter the column `slug` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `VarChar(128)` to `VarChar(64)`.
  - You are about to alter the column `name` on the `Tags` table. The data in that column could be lost. The data in that column will be cast from `VarChar(128)` to `VarChar(64)`.
  - You are about to alter the column `slug` on the `Tags` table. The data in that column could be lost. The data in that column will be cast from `VarChar(128)` to `VarChar(64)`.
  - Added the required column `tags_id` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Categories` MODIFY `name` VARCHAR(64) NOT NULL,
    MODIFY `slug` VARCHAR(64) NOT NULL,
    MODIFY `color` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `Projects` ADD COLUMN `tags_id` VARCHAR(32) NOT NULL,
    MODIFY `name` VARCHAR(64) NOT NULL,
    MODIFY `slug` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `Tags` MODIFY `name` VARCHAR(64) NOT NULL,
    MODIFY `slug` VARCHAR(64) NOT NULL;
