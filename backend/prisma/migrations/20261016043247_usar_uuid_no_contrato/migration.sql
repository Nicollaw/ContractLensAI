/*
  Warnings:

  - The primary key for the `Contrato` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `contractId` on the `Analysis` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `contractId` on the `Chunk` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Contrato` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Analysis" DROP CONSTRAINT "Analysis_contractId_fkey";

-- DropForeignKey
ALTER TABLE "Chunk" DROP CONSTRAINT "Chunk_contractId_fkey";

-- AlterTable
ALTER TABLE "Analysis" DROP COLUMN "contractId",
ADD COLUMN     "contractId" UUID NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Chunk" DROP COLUMN "contractId",
ADD COLUMN     "contractId" UUID NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Contrato" DROP CONSTRAINT "Contrato_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Contrato_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Analysis_contractId_key" ON "Analysis"("contractId");

-- AddForeignKey
ALTER TABLE "Chunk" ADD CONSTRAINT "Chunk_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
