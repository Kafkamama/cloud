
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Certificate extends BaseModel {
	static init() {
		return super.init(
			{
				
				certificate_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				student_id: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				course_id: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				issue_date: { type:Sequelize.DATEONLY , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "certificate",
				modelName: "certificate",
			}
		);
	}
	
	static listFields() {
		return [
			'certificate_id', 
			'student_id', 
			'course_id', 
			'issue_date'
		];
	}

	static viewFields() {
		return [
			'certificate_id', 
			'student_id', 
			'course_id', 
			'issue_date'
		];
	}

	static editFields() {
		return [
			'certificate_id', 
			'student_id', 
			'course_id', 
			'issue_date'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("certificate_id LIKE :search"),
		];
	}

	
	
}
Certificate.init();
export default Certificate;
