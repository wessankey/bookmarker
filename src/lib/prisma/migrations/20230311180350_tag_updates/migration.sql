/*
  Warnings:

  - The values [EMAIL] on the enum `ExternalService_type` will be removed. If these variants are still used in the database, this will fail.
  - The values [EMAIL] on the enum `ExternalService_authType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `BookmarkTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `ExternalService` MODIFY `type` ENUM('INSTAPAPER', 'READWISE') NOT NULL,
    MODIFY `authType` ENUM('USERNAME_AND_PASSWORD', 'API_TOKEN') NOT NULL;

-- DropTable
DROP TABLE `BookmarkTags`;

-- CreateTable
CREATE TABLE `BookmarkTag` (
    `bookmarkId` VARCHAR(191) NOT NULL,
    `tagId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `empty` VARCHAR(191) NULL,

    PRIMARY KEY (`bookmarkId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
