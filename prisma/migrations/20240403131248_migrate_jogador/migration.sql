-- CreateTable
CREATE TABLE "jogador" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "posicao" TEXT NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "idade" TEXT NOT NULL,

    CONSTRAINT "jogador_pkey" PRIMARY KEY ("id")
);