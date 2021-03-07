SELECT 
	p.id AS project_id, 
	p.name as Projeto, 
	n.id AS naver_id, 
	n.name AS Naver,
	n.job_role,
	n.birthdate,
	n.admission_date
FROM projects_navers AS pn
INNER JOIN projects AS p ON pn.project_id = p.id
INNER JOIN navers AS n ON pn.naver_id = n.id
ORDER BY p.name;