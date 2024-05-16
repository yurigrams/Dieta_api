-- CreateTable
CREATE TABLE "time" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fundacao" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "tecnico" TEXT NOT NULL,
    "idJogador" TEXT NOT NULL REFERENCES jogador(id) ON DELETE CASCADE,
    
    CONSTRAINT "time_pkey" PRIMARY KEY ("id")
);