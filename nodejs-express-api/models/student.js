
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Student extends BaseModel {
	static init() {
		return super.init(
			{
				
				student_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				name: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				email: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				password: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "student",
				modelName: "student",
			}
		);
	}
	
	static listFields() {
		return [
			'student_id', 
			'name', 
			'email'
		];
	}

	static viewFields() {
		return [
			'student_id', 
			'name', 
			'email'
		];
	}

	static editFields() {
		return [
			'student_id', 
			'name', 
			'email'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("student_id LIKE :search"), 
			Sequelize.literal("name LIKE :search"), 
			Sequelize.literal("email LIKE :search"), 
			Sequelize.literal("password LIKE :search"),
		];
	}

	
	
}
Student.init();
export default Student;
