/*
  Warnings:

  - You are about to drop the `BookmarkTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserTagInternal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookmarkToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tagColor` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Tag` ADD COLUMN `bookmarkId` VARCHAR(191) NULL,
    ADD COLUMN `tagColor` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `BookmarkTag`;

-- DropTable
DROP TABLE `UserTagInternal`;

-- DropTable
DROP TABLE `_BookmarkToUser`;

-- CreateIndex
CREATE INDEX `Account_userId_idx` ON `Account`(`userId`);

-- CreateIndex
CREATE INDEX `Bookmark_userId_idx` ON `Bookmark`(`userId`);

-- CreateIndex
CREATE INDEX `Collection_userId_idx` ON `Collection`(`userId`);

-- CreateIndex
CREATE INDEX `ExternalServiceCredential_externalServiceId_idx` ON `ExternalServiceCredential`(`externalServiceId`);

-- CreateIndex
CREATE INDEX `ExternalServiceCredential_userId_idx` ON `ExternalServiceCredential`(`userId`);

-- CreateIndex
CREATE INDEX `Session_userId_idx` ON `Session`(`userId`);

-- CreateIndex
CREATE INDEX `Tag_userId_idx` ON `Tag`(`userId`);

-- CreateIndex
CREATE INDEX `Tag_bookmarkId_idx` ON `Tag`(`bookmarkId`);
