SELECT p.id, p.name, COUNT(n.id) AS Membros
FROM projects_navers AS pn
INNER JOIN projects AS p ON pn.project_id = p.id
INNER JOIN navers AS n ON pn.naver_id = n.id
GROUP BY p.id, p.name;