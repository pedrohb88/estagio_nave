const { Model } = require('objection');
const _ = require('lodash');

class Naver extends Model {
	static get tableName() {
		return 'navers';
	}

	static async create(naverData) {
		//if projects is null like
		if (!naverData.projects || naverData.projects.length === 0) {
			naverData = _.omit(naverData, ['projects']);
		} else if (naverData.projects.length) {
			naverData.projects = naverData.projects.map((projectId) => {
				return { id: projectId };
			});
		}
		return Naver.query().insertGraph([naverData], { relate: true });
	}

	static get all() {
		return Naver.query().select(
			'id',
			'name',
			'birthdate',
			'admission_date',
			'job_role'
		);
	}

	static async findById(id) {
		const naver = await Naver.query()
			.select('id', 'name', 'birthdate', 'admission_date', 'job_role')
			.findById(id);

		if (naver === undefined) return naver;

		naver.projects = await naver
			.$relatedQuery('projects')
			.select('projects.id', 'projects.name');

		return naver;
	}

	static async exists(ids){
		for(const id of ids){
			const res = await Naver.query().where('id', id);
			if(!res.length) return false;
		}
		return true;
	}

	getName() {
		return this.name;
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['name', 'job_role', 'birthdate', 'admission_date'],

			properties: {
				name: { type: 'string', minLength: 1, maxLength: 255 },
				job_role: { type: 'string', minLength: 1, maxLength: 255 },
				birthdate: { type: 'string', format: 'date' },
				admission_date: { type: 'string', format: 'date' },
			},
		};
	}

	static get relationMappings() {
		const Project = require('./Project');

		return {
			projects: {
				relation: Model.ManyToManyRelation,
				modelClass: Project,
				join: {
					from: 'navers.id',
					through: {
						from: 'projects_navers.naver_id',
						to: 'projects_navers.project_id',
					},
					to: 'projects.id',
				},
			},
		};
	}
}

module.exports = Naver;
