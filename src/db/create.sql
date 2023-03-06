create table "users"
(
    "id" SERIAL PRIMARY KEY,
    "user_name" VARCHAR(30) UNIQUE,
    "password" VARCHAR(30),
    "role_id" BIGINT,
    "deleted" BOOLEAN default false,
    "created_at" TIMESTAMP DEFAULT now(),
    "deleted_at" TIMESTAMP DEFAULT null
);

create table "role"
(
    "id" SERIAL PRIMARY KEY,
    "role_name" VARCHAR(30) UNIQUE,
    "created_at" TIMESTAMP DEFAULT now()
);

create table "books"
(
    "id" SERIAL PRIMARY KEY,
    "book_name" VARCHAR(30) UNIQUE,
    "stock" INT,
    "created_at" TIMESTAMP DEFAULT now(),
    "DELETED" boolean default false,
    "deleted_at" TIMESTAMP DEFAULT now()
);
