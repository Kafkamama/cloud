
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Course extends BaseModel {
	static init() {
		return super.init(
			{
				
				course_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				teacher_id: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				title: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				description: { type:Sequelize.STRING  ,defaultValue: Sequelize.literal('DEFAULT') },
				learning_objectives: { type:Sequelize.STRING  ,defaultValue: Sequelize.literal('DEFAULT') },
				target_audience: { type:Sequelize.STRING  ,defaultValue: Sequelize.literal('DEFAULT') },
				estimated_duration: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "course",
				modelName: "course",
			}
		);
	}
	
	static listFields() {
		return [
			'course_id', 
			'teacher_id', 
			'title', 
			'description', 
			'learning_objectives', 
			'target_audience', 
			'estimated_duration'
		];
	}

	static viewFields() {
		return [
			'course_id', 
			'teacher_id', 
			'title', 
			'description', 
			'learning_objectives', 
			'target_audience', 
			'estimated_duration'
		];
	}

	static editFields() {
		return [
			'course_id', 
			'teacher_id', 
			'title', 
			'description', 
			'learning_objectives', 
			'target_audience', 
			'estimated_duration'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("course_id LIKE :search"), 
			Sequelize.literal("title LIKE :search"), 
			Sequelize.literal("description LIKE :search"), 
			Sequelize.literal("learning_objectives LIKE :search"), 
			Sequelize.literal("target_audience LIKE :search"),
		];
	}

	
	
}
Course.init();
export default Course;
