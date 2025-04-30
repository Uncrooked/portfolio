/*
  Warnings:

  - You are about to drop the column `tags_id` on the `Projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Projects` DROP COLUMN `tags_id`;

-- CreateTable
CREATE TABLE `TagsJoin` (
    `project_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,

    PRIMARY KEY (`project_id`, `tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TagsJoin` ADD CONSTRAINT `TagsJoin_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagsJoin` ADD CONSTRAINT `TagsJoin_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `Tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_thumbnail_id_fkey` FOREIGN KEY (`thumbnail_id`) REFERENCES `Thumbnails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projects` ADD CONSTRAINT `Projects_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
