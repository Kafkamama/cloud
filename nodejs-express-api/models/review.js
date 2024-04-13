
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Review extends BaseModel {
	static init() {
		return super.init(
			{
				
				review_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				student_id: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				course_id: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				rating: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				comment: { type:Sequelize.STRING  ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "review",
				modelName: "review",
			}
		);
	}
	
	static listFields() {
		return [
			'review_id', 
			'student_id', 
			'course_id', 
			'rating', 
			'comment'
		];
	}

	static viewFields() {
		return [
			'review_id', 
			'student_id', 
			'course_id', 
			'rating', 
			'comment'
		];
	}

	static editFields() {
		return [
			'review_id', 
			'student_id', 
			'course_id', 
			'rating', 
			'comment'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("review_id LIKE :search"), 
			Sequelize.literal("comment LIKE :search"),
		];
	}

	
	
}
Review.init();
export default Review;
