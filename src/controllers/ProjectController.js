const Project = require("../models/Project");
module.exports = {
	index: async (req, res, next) => {
		const projects = await Project.all;

		if (!projects.length) return next({ message: "Nenhum Project encontrado" });

		res.json(projects);
	},

	getById: async (req, res, next) => {
		const project = await Project.findById(req.params.id);

		if (project === undefined) return next({ message: "ID não encontrado" });

		res.json(project);
	},

	create: async (req, res, next) => {
		try {
			const project = await Project.create(req.body);

			res.json(project);
		} catch (error) {

            console.log();
			if (error.type && error.type === "InvalidGraph"){
				next({
					message: "Um ou mais ID's de Navers informados não existem.",
				});
            }
            else if(error.nativeError){

                if(error.nativeError.routine === 'string_to_uuid')
                    next({message: 'ID\'s inválidos'});
                else if(error.nativeError.routine === 'ri_ReportViolation'){
                    next({
                        message: "Um ou mais ID's de Navers informados não existem.",
                    });
                } else {
                    next({message: error.message});
                }
            }
		    else{
                console.log('ola');
                next(error);
            }
		}
	},
};
