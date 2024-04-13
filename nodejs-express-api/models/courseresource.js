
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class CourseResource extends BaseModel {
	static init() {
		return super.init(
			{
				
				resource_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				course_id: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				resource_type: { type:Sequelize.ENUM('video','exercise') , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				resource_url: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "course_resource",
				modelName: "course_resource",
			}
		);
	}
	
	static listFields() {
		return [
			'resource_id', 
			'course_id', 
			'resource_type', 
			'resource_url'
		];
	}

	static exportListFields() {
		return [
			'resource_id', 
			'course_id', 
			'resource_type', 
			'resource_url'
		];
	}

	static viewFields() {
		return [
			'resource_id', 
			'course_id', 
			'resource_type', 
			'resource_url'
		];
	}

	static editFields() {
		return [
			'resource_id', 
			'course_id', 
			'resource_type', 
			'resource_url'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("resource_id LIKE :search"), 
			Sequelize.literal("resource_url LIKE :search"),
		];
	}

	
	
}
CourseResource.init();
export default CourseResource;
