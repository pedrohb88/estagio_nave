const {Model} = require('objection');
const _ = require('lodash');

class Project extends Model {

    static get tableName(){
        return 'projects';
    }

	static async create(projectData) {
       
        //if navers is null like
        if(!projectData.navers || projectData.navers.length === 0){
            projectData = _.omit(projectData, ['navers']);
        } else if(projectData.navers.length){   
            projectData.navers = projectData.navers.map((naverId) => {
                return {id: naverId};
            })
        }
        
		return Project.query().insertGraph([projectData], { relate: true });
	}

	static get all() {
		return Project.query().select(
			"id",
			"name"
		);
	}

    static async exists(ids){
		for(const id of ids){
			const res = await Project.query().where('id', id);
			if(!res.length) return false;
		}
		return true;
	}

	static async findById(id) {
		const project = await Project.query()
			.select('id', 'name')
			.findById(id);

        if (project === undefined) return project;
		
        project.navers = await project.$relatedQuery('navers')
			.select('navers.id', 'navers.name', 'navers.birthdate', 'navers.admission_date', 'navers.job_role');
			
		return project;
	}

    getName() {
        return this.name;
    }

    static get jsonSchema(){
        return {
            type: 'object',
            required: ['name'],
            
            properties: {
                name: { type: 'string', minLength: 1, maxLength: 255 },
            }
        };
    }

    static get relationMappings(){
        const Naver = require('./Naver');
        
        return {
            navers: {
                relation: Model.ManyToManyRelation,
                modelClass: Naver,
                join: {
                    from: 'projects.id',
                    through: {
                        from: 'projects_navers.project_id',
                        to: 'projects_navers.naver_id'
                    },
                    to: 'navers.id'
                }
            }
        }
    }
}

module.exports = Project;