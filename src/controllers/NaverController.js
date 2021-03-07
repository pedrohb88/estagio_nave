const Naver = require('../models/Naver');
const Project = require('../models/Project');
const _ = require('lodash');

module.exports = {
	index: async (req, res, next) => {
		const navers = await Naver.all;

		if (!navers.length) return next({ message: 'Nenhum Naver encontrado' });

		res.json(navers);
	},

	getById: async (req, res, next) => {
		const naver = await Naver.findById(req.params.id);

		if (naver === undefined) return next({ message: 'ID não encontrado' });

		res.json(naver);
	},

	create: async (req, res, next) => {
		try {
			const data = _.pick(req.body, [
				'name',
				'birthdate',
				'admission_date',
				'job_role',
				'projects',
			]);

		
			if(data.projects){
				const exists = await Project.exists(data.projects);
				if(!exists)
					throw new Error('Um ou mais ID\'s de Projects informados não existem.');
			}

			const naver = await Naver.create(data);

			res.json(naver);

		} catch (error) {
			if (error.type && error.type === 'InvalidGraph')
				next({
					message: "Um ou mais ID's de projetos informados não existem.",
				});
			else if (error.nativeError) {
				if (error.nativeError.routine === 'string_to_uuid')
					next({ message: "ID's inválidos" });
				else if (error.nativeError.routine === 'ri_ReportViolation') {
					next({
						message: "Um ou mais ID's de projetos informados não existem.",
					});
				} else {
					next({ message: error.message });
				}
			} else next(error);
		}
	},
};
