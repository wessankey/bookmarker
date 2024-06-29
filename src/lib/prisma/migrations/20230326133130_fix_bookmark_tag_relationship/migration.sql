/*
  Warnings:

  - You are about to drop the column `bookmarkId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Tag_bookmarkId_idx` ON `Tag`;

-- AlterTable
ALTER TABLE `Tag` DROP COLUMN `bookmarkId`;

-- CreateTable
CREATE TABLE `_BookmarkToTag` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BookmarkToTag_AB_unique`(`A`, `B`),
    INDEX `_BookmarkToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
