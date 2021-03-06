const {Model} = require('objection');

class Naver extends Model {

    static get tableName(){
        return 'navers';
    }

    getName() {
        return this.name;
    }

    static get jsonSchema(){
        return {
            type: 'object',
            required: ['name', 'job_role', 'birthdate', 'admission_date'],
            
            properties: {
                name: { type: 'string', minLength: 1, maxLength: 255 },
                job_role: { type: 'string', minLength: 1, maxLength: 255 },
                birthdate: {type: 'string', format: 'date'},
                admission_date: {type: 'string', format: 'date'},
            }
        };
    }

    static get relationMappings(){
        const Project = require('./Project');
        
        return {
            projects: {
                relation: Model.ManyToManyRelation,
                modelClass: Project,
                join: {
                    from: 'navers.id',
                    through: {
                        from: 'project_navers.naver_id',
                        to: 'project_navers.project_id'
                    },
                    to: 'projects.id'
                }
            }
        }
    }
}

module.exports = Naver;