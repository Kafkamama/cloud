
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Admin extends BaseModel {
	static init() {
		return super.init(
			{
				
				admin_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				name: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				email: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') },
				password: { type:Sequelize.STRING , allowNull: false ,defaultValue: Sequelize.literal('DEFAULT') }
			}, 
			{ 
				sequelize,
				
				tableName: "admin",
				modelName: "admin",
			}
		);
	}
	
	static listFields() {
		return [
			'admin_id', 
			'name', 
			'email'
		];
	}

	static viewFields() {
		return [
			'admin_id', 
			'name', 
			'email'
		];
	}

	static editFields() {
		return [
			'admin_id', 
			'name', 
			'email'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("admin_id LIKE :search"), 
			Sequelize.literal("name LIKE :search"), 
			Sequelize.literal("email LIKE :search"), 
			Sequelize.literal("password LIKE :search"),
		];
	}

	
	
}
Admin.init();
export default Admin;
