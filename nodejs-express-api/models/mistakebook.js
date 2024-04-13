
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class MistakeBook extends BaseModel {
	static init() {
		return super.init(
			{
				
				mistake_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				student_id: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				question_type: { type:Sequelize.ENUM('single_choice','multiple_choice','fill_in_the_blank') , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				question_content: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				wrong_answer: { type:Sequelize.STRING  ,defaultValue: Sequelize.literal('DEFAULT') },
				solution: { type:Sequelize.STRING  ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "mistake_book",
				modelName: "mistake_book",
			}
		);
	}
	
	static listFields() {
		return [
			'mistake_id', 
			'student_id', 
			'question_type', 
			'question_content', 
			'wrong_answer', 
			'solution'
		];
	}

	static viewFields() {
		return [
			'mistake_id', 
			'student_id', 
			'question_type', 
			'question_content', 
			'wrong_answer', 
			'solution'
		];
	}

	static editFields() {
		return [
			'mistake_id', 
			'student_id', 
			'question_type', 
			'question_content', 
			'wrong_answer', 
			'solution'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("mistake_id LIKE :search"), 
			Sequelize.literal("question_content LIKE :search"), 
			Sequelize.literal("wrong_answer LIKE :search"), 
			Sequelize.literal("solution LIKE :search"),
		];
	}

	
	
}
MistakeBook.init();
export default MistakeBook;
