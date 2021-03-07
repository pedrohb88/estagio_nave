DELETE FROM projects_navers;
DELETE FROM navers;
DELETE FROM projects;

INSERT INTO navers(id, name, job_role, birthdate, admission_date)
VALUES('13e77fa8-fc71-48db-9bd6-34810658fb9b', 'João da Silva', 'Desenvolvedor', '1995-01-01', '2021-02-02');

INSERT INTO navers(id, name, job_role, birthdate, admission_date)
VALUES('d8e86460-2e87-4485-87b9-1cc03a9ca020', 'Maria Santos', 'Desenvolvedora', '1994-03-14', '2020-03-01');

INSERT INTO navers(id, name, job_role, birthdate, admission_date)
VALUES('dcf011cb-e2a3-4e75-8016-3a9b40373089', 'Jéssica Oliveira', 'UX Designer', '1996-01-14', '2021-01-05');

INSERT INTO navers(id, name, job_role, birthdate, admission_date)
VALUES('b67c4375-5f36-46e6-ba73-aef398be38c7', 'Ricardo Dias', 'Gerente de banco de dados', '1993-02-14', '2018-03-05');


INSERT INTO projects(id, name)
VALUES('72d70bdc-7384-4561-859b-b50a9a00ce51', 'Sistema de gestão financeira');

INSERT INTO projects(id, name)
VALUES('1c929cbd-d0d3-464d-998b-281183c64ba5', 'PSIU - Projeto Simples e Incrivelmente Único');


INSERT INTO projects_navers(naver_id, project_id)
VALUES('d8e86460-2e87-4485-87b9-1cc03a9ca020', '72d70bdc-7384-4561-859b-b50a9a00ce51');

INSERT INTO projects_navers(naver_id, project_id)
VALUES('dcf011cb-e2a3-4e75-8016-3a9b40373089', '1c929cbd-d0d3-464d-998b-281183c64ba5');

INSERT INTO projects_navers(naver_id, project_id)
VALUES('b67c4375-5f36-46e6-ba73-aef398be38c7', '1c929cbd-d0d3-464d-998b-281183c64ba5');

INSERT INTO projects_navers(naver_id, project_id)
VALUES('b67c4375-5f36-46e6-ba73-aef398be38c7', '72d70bdc-7384-4561-859b-b50a9a00ce51');