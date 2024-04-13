
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Teacher extends BaseModel {
	static init() {
		return super.init(
			{
				
				teacher_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				name: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				email: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				password: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "teacher",
				modelName: "teacher",
			}
		);
	}
	
	static listFields() {
		return [
			'teacher_id', 
			'name', 
			'email'
		];
	}

	static viewFields() {
		return [
			'teacher_id', 
			'name', 
			'email'
		];
	}

	static accounteditFields() {
		return [
			'teacher_id', 
			'name'
		];
	}

	static accountviewFields() {
		return [
			'teacher_id', 
			'name', 
			'email'
		];
	}

	static editFields() {
		return [
			'teacher_id', 
			'name'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("teacher_id LIKE :search"), 
			Sequelize.literal("name LIKE :search"), 
			Sequelize.literal("email LIKE :search"), 
			Sequelize.literal("password LIKE :search"),
		];
	}

	
	
}
Teacher.init();
export default Teacher;
