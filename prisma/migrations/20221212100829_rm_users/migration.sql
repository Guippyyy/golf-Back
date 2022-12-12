/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `score` DROP FOREIGN KEY `user_userID_fkey`;

-- AlterTable
ALTER TABLE `score` MODIFY `userID` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `user`;
