-- CreateTable
CREATE TABLE "Contrato" (
    "id" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contrato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chunk" (
    "id" SERIAL NOT NULL,
    "contractId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "page" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chunk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Analysis" (
    "id" SERIAL NOT NULL,
    "contractId" INTEGER NOT NULL,
    "resumo" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Analysis_contractId_key" ON "Analysis"("contractId");

-- AddForeignKey
ALTER TABLE "Chunk" ADD CONSTRAINT "Chunk_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
