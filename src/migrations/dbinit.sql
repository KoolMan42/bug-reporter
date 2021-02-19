CREATE USER docker WITH encrypted PASSWORD 'docker';
create DATABASE main;
GRANT ALL PRIVILEGES ON DATABASE 'main' to docker;
CREATE TABLE bug(
   id serial NOT NULL,
   nameOfBug text,
    isFixed boolean,
    priorityLevel text,
   PRIMARY KEY( id)
);