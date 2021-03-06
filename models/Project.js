const {Model} = require('objection');

class Project extends Model {

    static get tableName(){
        return 'projects';
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
                        from: 'project_navers.project_id',
                        to: 'project_navers.naver_id'
                    },
                    to: 'navers.id'
                }
            }
        }
    }
}

module.exports = Project;