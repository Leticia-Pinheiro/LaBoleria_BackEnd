CREATE TABLE IF NOT EXISTS "cakes" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(120) NOT NULL UNIQUE,
	"price" NUMERIC NOT NULL,
	"image" VARCHAR(120) NOT NULL,
	"description" TEXT
);

CREATE TABLE IF NOT EXISTS "clients" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(120) NOT NULL,	
	"adress" VARCHAR(120) NOT NULL,
	"phone" VARCHAR(11) NOT NULL
);

CREATE TABLE IF NOT EXISTS "orders" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"clientId" INTEGER NOT NULL REFERENCES clients(id),
	"cakeId" INTEGER NOT NULL REFERENCES cakes(id),
	"quantity" INTEGER NOT NULL,
	"createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
	"totalPrice" NUMERIC
);