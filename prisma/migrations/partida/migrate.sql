-- CreateTable
CREATE TABLE "partida" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP NOT NULL,
    "local" TEXT NOT NULL,
    "placar" TEXT NOT NULL,
    "idTimeDaCasa" TEXT NOT NULL REFERENCES time(id) ON DELETE CASCADE,
    "idTimeVisitante" TEXT NOT NULL REFERENCES time(id) ON DELETE CASCADE,
    
    CONSTRAINT "partida_pkey" PRIMARY KEY ("id")
);