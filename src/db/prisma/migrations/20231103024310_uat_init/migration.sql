/*
  Warnings:

  - You are about to drop the `Checklists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ngrecords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Checklists" DROP CONSTRAINT "Checklists_station_id_fkey";

-- DropForeignKey
ALTER TABLE "Ngrecords" DROP CONSTRAINT "Ngrecords_checklist_id_fkey";

-- DropForeignKey
ALTER TABLE "Stations" DROP CONSTRAINT "Stations_line_id_fkey";

-- DropTable
DROP TABLE "Checklists";

-- DropTable
DROP TABLE "Lines";

-- DropTable
DROP TABLE "Ngrecords";

-- DropTable
DROP TABLE "Stations";

-- CreateTable
CREATE TABLE "ContactUs" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "contactnum" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "ContactUs_pkey" PRIMARY KEY ("id")
);
