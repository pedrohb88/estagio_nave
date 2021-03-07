DROP TABLE IF EXISTS projects_navers;
DROP TABLE IF EXISTS navers;
DROP TABLE IF EXISTS projects; 

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE navers(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	name VARCHAR(255) NOT NULL,
	job_role VARCHAR(255) NOT NULL,
	birthdate DATE NOT NULL,
	admission_date DATE NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE projects(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	name VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE projects_navers(
	id SERIAL PRIMARY KEY,
	project_id UUID NOT NULL,
	naver_id UUID NOT NULL
);

ALTER TABLE projects_navers 
ADD CONSTRAINT projects_navers_projects_fk
FOREIGN KEY (project_id)
REFERENCES projects(id);

ALTER TABLE projects_navers 
ADD CONSTRAINT projects_navers_navers_fk
FOREIGN KEY (naver_id)
REFERENCES navers(id);