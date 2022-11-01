-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pos_lat" TEXT,
    "pos_lon" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "owner_id" INTEGER NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "batery" INTEGER NOT NULL,
    "o2" INTEGER NOT NULL,
    "co2" INTEGER NOT NULL,
    "no2" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "device_id" INTEGER NOT NULL,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Device_code_key" ON "Device"("code");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
