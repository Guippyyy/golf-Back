/*
  Warnings:

  - You are about to drop the column `distance` on the `hole` table. All the data in the column will be lost.
  - Added the required column `distances` to the `Hole` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hole` DROP COLUMN `distance`,
    ADD COLUMN `distances` VARCHAR(191) NOT NULL;
