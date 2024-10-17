/*
  Warnings:

  - Added the required column `track_id` to the `activities_done` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activities_done" ADD COLUMN     "track_id" TEXT NOT NULL;
