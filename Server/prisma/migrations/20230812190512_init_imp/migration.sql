/*
  Warnings:

  - You are about to drop the column `constent` on the `Entry` table. All the data in the column will be lost.
  - Added the required column `content` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Entry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "impression" INTEGER NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Entry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Entry" ("createdAt", "id", "image", "impression", "updatedAt", "userId") SELECT "createdAt", "id", "image", "impression", "updatedAt", "userId" FROM "Entry";
DROP TABLE "Entry";
ALTER TABLE "new_Entry" RENAME TO "Entry";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
