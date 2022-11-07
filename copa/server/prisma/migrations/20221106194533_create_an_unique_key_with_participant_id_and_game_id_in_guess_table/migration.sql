/*
  Warnings:

  - A unique constraint covering the columns `[participantID,gameID]` on the table `Guess` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Guess_participantID_gameID_key" ON "Guess"("participantID", "gameID");
