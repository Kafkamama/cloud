
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class PurchaseRecord extends BaseModel {
	static init() {
		return super.init(
			{
				
				record_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				student_id: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				course_id: { type:Sequelize.INTEGER  ,defaultValue: Sequelize.literal('DEFAULT') },
				purchase_date: { type:Sequelize.DATEONLY , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "purchase_record",
				modelName: "purchase_record",
			}
		);
	}
	
	static listFields() {
		return [
			'record_id', 
			'student_id', 
			'course_id', 
			'purchase_date'
		];
	}

	static viewFields() {
		return [
			'record_id', 
			'student_id', 
			'course_id', 
			'purchase_date'
		];
	}

	static editFields() {
		return [
			'record_id', 
			'student_id', 
			'course_id', 
			'purchase_date'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("record_id LIKE :search"),
		];
	}

	
	
}
PurchaseRecord.init();
export default PurchaseRecord;
