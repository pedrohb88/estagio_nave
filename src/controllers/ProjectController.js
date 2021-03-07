const Project = require('../models/Project');
const Naver = require('../models/Naver');
const _ = require('lodash');

module.exports = {
	index: async (req, res, next) => {
		const projects = await Project.all;

		if (!projects.length) return next({ message: 'Nenhum Project encontrado' });

		res.json(projects);
	},

	getById: async (req, res, next) => {
		const project = await Project.findById(req.params.id);

		if (project === undefined) return next({ message: 'ID não encontrado' });

		res.json(project);
	},

	create: async (req, res, next) => {
		try {
			const data = _.pick(req.body, ['name', 'navers']);

			if(data.navers){
				const exists = await Naver.exists(data.navers);
				console.log(exists);
				if(!exists)
					throw new Error('Um ou mais ID\'s de Navers informados não existem.');
			}
		
			const project = await Project.create(data);

			res.json(project);

		} catch (error) {
			if (error.type && error.type === 'InvalidGraph') {
				next({
					message: "Um ou mais ID's de Navers informados não existem.",
				});
			} else if (error.nativeError) {
				if (error.nativeError.routine === 'string_to_uuid')
					next({ message: "ID's inválidos" });
				else {
					next({ message: error.message });
				}
			} else {
				next(error);
			}
		}
	},
};
