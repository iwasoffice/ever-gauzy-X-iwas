import { MigrationInterface, QueryRunner } from 'typeorm';
import { yellow } from 'chalk';
import { DatabaseTypeEnum } from '@gauzy/config';

export class AlterBaseEntityAddArchivedAtDate1725879899378 implements MigrationInterface {
	name = 'AlterBaseEntityAddArchivedAtDate1725879899378';

	/**
	 * Up Migration
	 *
	 * @param queryRunner
	 */
	public async up(queryRunner: QueryRunner): Promise<void> {
		console.log(yellow(this.name + ' start running!'));

		switch (queryRunner.connection.options.type) {
			case DatabaseTypeEnum.sqlite:
			case DatabaseTypeEnum.betterSqlite3:
				await this.sqliteUpQueryRunner(queryRunner);
				break;
			case DatabaseTypeEnum.postgres:
				await this.postgresUpQueryRunner(queryRunner);
				break;
			case DatabaseTypeEnum.mysql:
				await this.mysqlUpQueryRunner(queryRunner);
				break;
			default:
				throw Error(`Unsupported database: ${queryRunner.connection.options.type}`);
		}
	}

	/**
	 * Down Migration
	 *
	 * @param queryRunner
	 */
	public async down(queryRunner: QueryRunner): Promise<void> {
		switch (queryRunner.connection.options.type) {
			case DatabaseTypeEnum.sqlite:
			case DatabaseTypeEnum.betterSqlite3:
				await this.sqliteDownQueryRunner(queryRunner);
				break;
			case DatabaseTypeEnum.postgres:
				await this.postgresDownQueryRunner(queryRunner);
				break;
			case DatabaseTypeEnum.mysql:
				await this.mysqlDownQueryRunner(queryRunner);
				break;
			default:
				throw Error(`Unsupported database: ${queryRunner.connection.options.type}`);
		}
	}

	/**
	 * PostgresDB Up Migration
	 *
	 * @param queryRunner
	 */
	public async postgresUpQueryRunner(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`ALTER TABLE "accounting_template" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "appointment_employee" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "approval_policy" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "availability_slot" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "social_account" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_criterion_rating" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_document" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_education" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_experience" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_feedback" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_interview" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_interviewer" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_personal_quality" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_skill" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_source" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate_technology" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "candidate" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "contact" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "country" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "currency" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "custom_smtp" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "deal" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "email_sent" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "email_reset" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "email_template" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "employee_appointment" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "employee_award" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "employee_level" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "employee_phone" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "employee_recurring_expense" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "employee_setting" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "employee" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "equipment_sharing_policy" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "equipment_sharing" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "equipment" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "estimate_email" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "event_type" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "expense_category" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "expense" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "import-history" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "import-record" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "feature_organization" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "feature" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "goal_general_setting" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "goal_kpi_template" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "goal_kpi" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "goal_template" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "goal_time_frame" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "goal" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "image_asset" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "income" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "integration_entity_setting_tied" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "integration_entity_setting" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "integration_map" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "integration_setting" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "integration_tenant" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "integration_type" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "integration" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "invite" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "invoice_estimate_history" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "invoice_item" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "invoice" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "key_result_template" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "key_result_update" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "key_result" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "language" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "merchant" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_award" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_contact" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_department" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_document" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_employment_type" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_language" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_position" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_project" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_project_module" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_recurring_expense" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_sprint" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_task_setting" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_team_employee" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_team_join_request" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_team" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_vendor" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "password_reset" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "payment" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "pipeline_stage" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "pipeline" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_category_translation" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_category" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_option_group" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_option_group_translation" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_option_translation" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_option" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_variant_setting" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_type_translation" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_type" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_variant_price" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_variant" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_translation" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "report_category" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "report_organization" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "report" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "request_approval_employee" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "request_approval_team" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "request_approval" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "role_permission" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "role" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "skill" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "tag" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "daily_plan" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "task_estimation" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "issue_type" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "task" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "task" ADD "isDraft" boolean DEFAULT false`);
		await queryRunner.query(`ALTER TABLE "task_linked_issues" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "task_priority" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "task_related_issue_type" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "task_size" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "task_status" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "task_status" ADD "isDefault" boolean NOT NULL DEFAULT false`);
		await queryRunner.query(`ALTER TABLE "task_version" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "tenant_setting" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "tenant" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "time_off_policy" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "time_off_request" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "activity" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "screenshot" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "time_log" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "time_slot" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "time_slot_minute" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "timesheet" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "user_organization" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "user" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "warehouse_product" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "warehouse_product_variant" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "warehouse" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "changelog" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_github_repository" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "organization_github_repository_issue" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "proposal" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "employee_proposal_template" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "job_search_occupation" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "job_search_category" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "employee_upwork_job_search_criterion" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "job_preset" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "job_preset_upwork_job_search_criterion" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "knowledge_base" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "knowledge_base_article" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "knowledge_base_author" ADD "archivedAt" TIMESTAMP`);
		await queryRunner.query(`ALTER TABLE "product_review" ADD "archivedAt" TIMESTAMP`);
	}

	/**
	 * PostgresDB Down Migration
	 *
	 * @param queryRunner
	 */
	public async postgresDownQueryRunner(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`ALTER TABLE "product_review" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "knowledge_base_author" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "knowledge_base_article" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "knowledge_base" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "job_preset_upwork_job_search_criterion" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "job_preset" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "employee_upwork_job_search_criterion" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "job_search_category" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "job_search_occupation" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "employee_proposal_template" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "proposal" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_github_repository_issue" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_github_repository" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "changelog" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "warehouse" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "warehouse_product_variant" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "warehouse_product" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "user_organization" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "timesheet" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "time_slot_minute" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "time_slot" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "time_log" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "screenshot" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "time_off_request" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "time_off_policy" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "tenant_setting" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "task_version" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "task_status" DROP COLUMN "isDefault"`);
		await queryRunner.query(`ALTER TABLE "task_status" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "task_size" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "task_related_issue_type" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "task_priority" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "task_linked_issues" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "isDraft"`);
		await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "issue_type" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "task_estimation" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "daily_plan" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "tag" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "role_permission" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "request_approval" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "request_approval_team" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "request_approval_employee" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "report_organization" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "report_category" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_translation" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_variant_price" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_type" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_type_translation" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_variant_setting" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_option" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_option_translation" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_option_group_translation" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_option_group" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_category" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "product_category_translation" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "pipeline" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "pipeline_stage" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "payment" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "password_reset" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_vendor" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_team" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_team_join_request" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_team_employee" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_task_setting" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_sprint" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_recurring_expense" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_project_module" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_project" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_position" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_language" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_employment_type" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_document" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_department" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_contact" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "organization_award" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "merchant" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "language" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "key_result" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "key_result_update" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "key_result_template" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "invoice_item" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "invoice_estimate_history" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "invite" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "integration" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "integration_type" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "integration_tenant" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "integration_setting" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "integration_map" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "integration_entity_setting" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "integration_entity_setting_tied" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "income" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "image_asset" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "goal" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "goal_time_frame" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "goal_template" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "goal_kpi" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "goal_kpi_template" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "goal_general_setting" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "feature" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "feature_organization" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "import-record" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "import-history" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "expense" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "expense_category" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "event_type" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "estimate_email" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "equipment" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "equipment_sharing" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "equipment_sharing_policy" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "employee_setting" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "employee_recurring_expense" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "employee_phone" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "employee_level" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "employee_award" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "employee_appointment" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "email_template" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "email_reset" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "email_sent" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "deal" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "custom_smtp" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "currency" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "country" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_technology" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_source" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_skill" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_personal_quality" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_interviewer" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_interview" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_feedback" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_experience" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_education" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_document" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "candidate_criterion_rating" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "social_account" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "availability_slot" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "approval_policy" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "appointment_employee" DROP COLUMN "archivedAt"`);
		await queryRunner.query(`ALTER TABLE "accounting_template" DROP COLUMN "archivedAt"`);
	}

	/**
	 * SqliteDB and BetterSQlite3DB Up Migration
	 *
	 * @param queryRunner
	 */
	public async sqliteUpQueryRunner(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`DROP INDEX "IDX_a841eabc6b656c965d8846223e"`);
		await queryRunner.query(`DROP INDEX "IDX_968c1c9a131a61a3720b3a72f6"`);
		await queryRunner.query(`DROP INDEX "IDX_e66511b175393255c6c4e7b007"`);
		await queryRunner.query(`DROP INDEX "IDX_2ca6a49062a4ed884e413bf572"`);
		await queryRunner.query(`DROP INDEX "IDX_5cf7c007fc9c83bee748f08806"`);
		await queryRunner.query(`DROP INDEX "IDX_7ac2c1c487dd77fe38c2d571ea"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_accounting_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "languageCode" varchar NOT NULL, "mjml" text, "hbs" varchar NOT NULL, "templateType" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_e66511b175393255c6c4e7b007f" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2ca6a49062a4ed884e413bf572e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_accounting_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "mjml", "hbs", "templateType", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "mjml", "hbs", "templateType", "isActive", "isArchived", "deletedAt" FROM "accounting_template"`
		);
		await queryRunner.query(`DROP TABLE "accounting_template"`);
		await queryRunner.query(`ALTER TABLE "temporary_accounting_template" RENAME TO "accounting_template"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_a841eabc6b656c965d8846223e" ON "accounting_template" ("languageCode") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_968c1c9a131a61a3720b3a72f6" ON "accounting_template" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_e66511b175393255c6c4e7b007" ON "accounting_template" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_2ca6a49062a4ed884e413bf572" ON "accounting_template" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5cf7c007fc9c83bee748f08806" ON "accounting_template" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_7ac2c1c487dd77fe38c2d571ea" ON "accounting_template" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e9ca170a0fae05e44a9bd137d8"`);
		await queryRunner.query(`DROP INDEX "IDX_0ddc50b7521b9a905d9ca8c8ba"`);
		await queryRunner.query(`DROP INDEX "IDX_3c3a62226896345c4716bfe1d9"`);
		await queryRunner.query(`DROP INDEX "IDX_2c0494466d5a7e1165cea3dca9"`);
		await queryRunner.query(`DROP INDEX "IDX_379af16b0aeed6a4d8f15c53bc"`);
		await queryRunner.query(`DROP INDEX "IDX_2a6f8c4b8da6f85e2903daf5c3"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_appointment_employee" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "appointmentId" varchar NOT NULL, "employeeId" varchar NOT NULL, "employeeAppointmentId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_e9ca170a0fae05e44a9bd137d8b" FOREIGN KEY ("employeeAppointmentId") REFERENCES "employee_appointment" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_0ddc50b7521b9a905d9ca8c8ba3" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3c3a62226896345c4716bfe1d96" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2c0494466d5a7e1165cea3dca98" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_appointment_employee"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "appointmentId", "employeeId", "employeeAppointmentId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "appointmentId", "employeeId", "employeeAppointmentId", "isActive", "isArchived", "deletedAt" FROM "appointment_employee"`
		);
		await queryRunner.query(`DROP TABLE "appointment_employee"`);
		await queryRunner.query(`ALTER TABLE "temporary_appointment_employee" RENAME TO "appointment_employee"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_e9ca170a0fae05e44a9bd137d8" ON "appointment_employee" ("employeeAppointmentId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0ddc50b7521b9a905d9ca8c8ba" ON "appointment_employee" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3c3a62226896345c4716bfe1d9" ON "appointment_employee" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2c0494466d5a7e1165cea3dca9" ON "appointment_employee" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_379af16b0aeed6a4d8f15c53bc" ON "appointment_employee" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2a6f8c4b8da6f85e2903daf5c3" ON "appointment_employee" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_45f32a5a12d42fba17fe62a279"`);
		await queryRunner.query(`DROP INDEX "IDX_dfe3b357df3ce136917b1f0984"`);
		await queryRunner.query(`DROP INDEX "IDX_1462391059ebe137645098d727"`);
		await queryRunner.query(`DROP INDEX "IDX_338364927c68961167606e989c"`);
		await queryRunner.query(`DROP INDEX "IDX_f50ce5a39d610cfcd9da9652b1"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_approval_policy" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "approvalType" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_dfe3b357df3ce136917b1f09843" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_1462391059ebe137645098d7276" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_approval_policy"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "approvalType", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "approvalType", "isActive", "isArchived", "deletedAt" FROM "approval_policy"`
		);
		await queryRunner.query(`DROP TABLE "approval_policy"`);
		await queryRunner.query(`ALTER TABLE "temporary_approval_policy" RENAME TO "approval_policy"`);
		await queryRunner.query(`CREATE INDEX "IDX_45f32a5a12d42fba17fe62a279" ON "approval_policy" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_dfe3b357df3ce136917b1f0984" ON "approval_policy" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_1462391059ebe137645098d727" ON "approval_policy" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_338364927c68961167606e989c" ON "approval_policy" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f50ce5a39d610cfcd9da9652b1" ON "approval_policy" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_46ed3c2287423f5dc089100fee"`);
		await queryRunner.query(`DROP INDEX "IDX_d544bd3a63634a4438509ac958"`);
		await queryRunner.query(`DROP INDEX "IDX_f008a481cb4eed547704bb9d83"`);
		await queryRunner.query(`DROP INDEX "IDX_3e20b617c7d7a87b8bf53ddcbe"`);
		await queryRunner.query(`DROP INDEX "IDX_3aabb2cdf5b6e0df87cb94bdca"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_availability_slot" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "startTime" datetime NOT NULL, "endTime" datetime NOT NULL, "allDay" boolean NOT NULL, "type" text, "employeeId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_46ed3c2287423f5dc089100feeb" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d544bd3a63634a4438509ac958d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f008a481cb4eed547704bb9d839" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_availability_slot"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "startTime", "endTime", "allDay", "type", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "startTime", "endTime", "allDay", "type", "employeeId", "isActive", "isArchived", "deletedAt" FROM "availability_slot"`
		);
		await queryRunner.query(`DROP TABLE "availability_slot"`);
		await queryRunner.query(`ALTER TABLE "temporary_availability_slot" RENAME TO "availability_slot"`);
		await queryRunner.query(`CREATE INDEX "IDX_46ed3c2287423f5dc089100fee" ON "availability_slot" ("employeeId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_d544bd3a63634a4438509ac958" ON "availability_slot" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_f008a481cb4eed547704bb9d83" ON "availability_slot" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_3e20b617c7d7a87b8bf53ddcbe" ON "availability_slot" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_3aabb2cdf5b6e0df87cb94bdca" ON "availability_slot" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_e8b7694e86fe9534778832f90c"`);
		await queryRunner.query(`DROP INDEX "IDX_a3b32d609a4c884a776ab883be"`);
		await queryRunner.query(`DROP INDEX "IDX_1d8e3566b66fbad38b6e2290a2"`);
		await queryRunner.query(`DROP INDEX "IDX_a2eb41b1d6ee72de9486558199"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_social_account" ("deletedAt" datetime, "id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "provider" varchar NOT NULL, "providerAccountId" varchar NOT NULL, "userId" varchar NOT NULL, "archivedAt" datetime, CONSTRAINT "FK_e8b7694e86fe9534778832f90c0" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a3b32d609a4c884a776ab883be3" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_social_account"("deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "provider", "providerAccountId", "userId") SELECT "deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "provider", "providerAccountId", "userId" FROM "social_account"`
		);
		await queryRunner.query(`DROP TABLE "social_account"`);
		await queryRunner.query(`ALTER TABLE "temporary_social_account" RENAME TO "social_account"`);
		await queryRunner.query(`CREATE INDEX "IDX_e8b7694e86fe9534778832f90c" ON "social_account" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a3b32d609a4c884a776ab883be" ON "social_account" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1d8e3566b66fbad38b6e2290a2" ON "social_account" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_a2eb41b1d6ee72de9486558199" ON "social_account" ("isActive") `);
		await queryRunner.query(`DROP INDEX "IDX_159f821dd214792f1d2ad9cff7"`);
		await queryRunner.query(`DROP INDEX "IDX_ba4c376b2069aa82745d4e9682"`);
		await queryRunner.query(`DROP INDEX "IDX_d1d16bc87d3afaf387f34cdceb"`);
		await queryRunner.query(`DROP INDEX "IDX_b106406e94bb7317493efc2c98"`);
		await queryRunner.query(`DROP INDEX "IDX_9d5bd131452ef689df2b46551b"`);
		await queryRunner.query(`DROP INDEX "IDX_0a417dafb1dd14eb92a69fa641"`);
		await queryRunner.query(`DROP INDEX "IDX_fcab96cef60fd8bccac610ccef"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_criterion_rating" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "rating" integer NOT NULL, "technologyId" varchar, "personalQualityId" varchar, "feedbackId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_159f821dd214792f1d2ad9cff7c" FOREIGN KEY ("feedbackId") REFERENCES "candidate_feedback" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ba4c376b2069aa82745d4e96822" FOREIGN KEY ("personalQualityId") REFERENCES "candidate_personal_quality" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d1d16bc87d3afaf387f34cdceb7" FOREIGN KEY ("technologyId") REFERENCES "candidate_technology" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_b106406e94bb7317493efc2c989" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9d5bd131452ef689df2b46551b4" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_criterion_rating"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "rating", "technologyId", "personalQualityId", "feedbackId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "rating", "technologyId", "personalQualityId", "feedbackId", "isActive", "isArchived", "deletedAt" FROM "candidate_criterion_rating"`
		);
		await queryRunner.query(`DROP TABLE "candidate_criterion_rating"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_candidate_criterion_rating" RENAME TO "candidate_criterion_rating"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_159f821dd214792f1d2ad9cff7" ON "candidate_criterion_rating" ("feedbackId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ba4c376b2069aa82745d4e9682" ON "candidate_criterion_rating" ("personalQualityId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d1d16bc87d3afaf387f34cdceb" ON "candidate_criterion_rating" ("technologyId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b106406e94bb7317493efc2c98" ON "candidate_criterion_rating" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9d5bd131452ef689df2b46551b" ON "candidate_criterion_rating" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0a417dafb1dd14eb92a69fa641" ON "candidate_criterion_rating" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_fcab96cef60fd8bccac610ccef" ON "candidate_criterion_rating" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_3f9053719c9d11ebdea03e5a2d"`);
		await queryRunner.query(`DROP INDEX "IDX_d108a827199fda86a9ec216989"`);
		await queryRunner.query(`DROP INDEX "IDX_4d9b7ab09f9f9517d488b5fed1"`);
		await queryRunner.query(`DROP INDEX "IDX_bf8070715e42b3afe9730e7b30"`);
		await queryRunner.query(`DROP INDEX "IDX_3ed4bac12d0ca32eada4ea5a49"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_document" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "documentUrl" varchar, "candidateId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_3f9053719c9d11ebdea03e5a2d4" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d108a827199fda86a9ec216989a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_4d9b7ab09f9f9517d488b5fed1e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_document"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "documentUrl", "candidateId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "documentUrl", "candidateId", "isActive", "isArchived", "deletedAt" FROM "candidate_document"`
		);
		await queryRunner.query(`DROP TABLE "candidate_document"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate_document" RENAME TO "candidate_document"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_3f9053719c9d11ebdea03e5a2d" ON "candidate_document" ("candidateId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d108a827199fda86a9ec216989" ON "candidate_document" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_4d9b7ab09f9f9517d488b5fed1" ON "candidate_document" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_bf8070715e42b3afe9730e7b30" ON "candidate_document" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_3ed4bac12d0ca32eada4ea5a49" ON "candidate_document" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_f660af89b2c69fea2334508cbb"`);
		await queryRunner.query(`DROP INDEX "IDX_00cdd9ed7571be8e2c8d09e7cd"`);
		await queryRunner.query(`DROP INDEX "IDX_336eb14606016757d2302efa4d"`);
		await queryRunner.query(`DROP INDEX "IDX_b443c78c3796f2e9aab05a2bb9"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_education" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "schoolName" varchar NOT NULL, "degree" varchar NOT NULL, "field" varchar NOT NULL, "completionDate" datetime NOT NULL, "notes" varchar, "candidateId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_59b61ba52a58851cfc85b1e6c66" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f660af89b2c69fea2334508cbbd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_00cdd9ed7571be8e2c8d09e7cd4" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_education"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "schoolName", "degree", "field", "completionDate", "notes", "candidateId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "schoolName", "degree", "field", "completionDate", "notes", "candidateId", "isActive", "isArchived", "deletedAt" FROM "candidate_education"`
		);
		await queryRunner.query(`DROP TABLE "candidate_education"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate_education" RENAME TO "candidate_education"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_f660af89b2c69fea2334508cbb" ON "candidate_education" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_00cdd9ed7571be8e2c8d09e7cd" ON "candidate_education" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_336eb14606016757d2302efa4d" ON "candidate_education" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_b443c78c3796f2e9aab05a2bb9" ON "candidate_education" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_a50eb955f940ca93e044d175c6"`);
		await queryRunner.query(`DROP INDEX "IDX_8dcf5fc8bc7f77a80b0fc648bf"`);
		await queryRunner.query(`DROP INDEX "IDX_dafa68d060cf401d5f62a57ad4"`);
		await queryRunner.query(`DROP INDEX "IDX_c24bce6dd33e56ef8e8dacef1a"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_experience" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "occupation" varchar NOT NULL, "duration" varchar NOT NULL, "description" varchar, "candidateId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_cf75465b3663652a28cf1841ce2" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a50eb955f940ca93e044d175c62" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8dcf5fc8bc7f77a80b0fc648bfc" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_experience"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "occupation", "duration", "description", "candidateId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "occupation", "duration", "description", "candidateId", "isActive", "isArchived", "deletedAt" FROM "candidate_experience"`
		);
		await queryRunner.query(`DROP TABLE "candidate_experience"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate_experience" RENAME TO "candidate_experience"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_a50eb955f940ca93e044d175c6" ON "candidate_experience" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8dcf5fc8bc7f77a80b0fc648bf" ON "candidate_experience" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_dafa68d060cf401d5f62a57ad4" ON "candidate_experience" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c24bce6dd33e56ef8e8dacef1a" ON "candidate_experience" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_0862c274d336126b951bfe009a"`);
		await queryRunner.query(`DROP INDEX "IDX_98c008fd8cf597e83dcdccfd16"`);
		await queryRunner.query(`DROP INDEX "IDX_3a6928f8501fce33820721a8fe"`);
		await queryRunner.query(`DROP INDEX "IDX_6cb21fa0f65ff69679966c836f"`);
		await queryRunner.query(`DROP INDEX "IDX_c660aef2ca5aff9dbf45a9a4bb"`);
		await queryRunner.query(`DROP INDEX "IDX_05ed49a5ebdd5ec533f913b620"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_feedback" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "description" varchar, "rating" numeric, "status" varchar, "candidateId" varchar, "interviewId" varchar, "interviewerId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "REL_44f3d80c3293e1de038c87f115" UNIQUE ("interviewerId"), CONSTRAINT "FK_44f3d80c3293e1de038c87f115d" FOREIGN KEY ("interviewerId") REFERENCES "candidate_interviewer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_0862c274d336126b951bfe009a7" FOREIGN KEY ("interviewId") REFERENCES "candidate_interview" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_98c008fd8cf597e83dcdccfd161" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3a6928f8501fce33820721a8fe8" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_6cb21fa0f65ff69679966c836f2" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_feedback"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "rating", "status", "candidateId", "interviewId", "interviewerId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "rating", "status", "candidateId", "interviewId", "interviewerId", "isActive", "isArchived", "deletedAt" FROM "candidate_feedback"`
		);
		await queryRunner.query(`DROP TABLE "candidate_feedback"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate_feedback" RENAME TO "candidate_feedback"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_0862c274d336126b951bfe009a" ON "candidate_feedback" ("interviewId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_98c008fd8cf597e83dcdccfd16" ON "candidate_feedback" ("candidateId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3a6928f8501fce33820721a8fe" ON "candidate_feedback" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_6cb21fa0f65ff69679966c836f" ON "candidate_feedback" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c660aef2ca5aff9dbf45a9a4bb" ON "candidate_feedback" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_05ed49a5ebdd5ec533f913b620" ON "candidate_feedback" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_59b765e6d13d83dba4852a43eb"`);
		await queryRunner.query(`DROP INDEX "IDX_03be41e88b1fecfe4e24d6b04b"`);
		await queryRunner.query(`DROP INDEX "IDX_91996439c4baafee8395d3df15"`);
		await queryRunner.query(`DROP INDEX "IDX_b9191cf49f8cd1f192cb74233c"`);
		await queryRunner.query(`DROP INDEX "IDX_7b49ce2928b327213f2de66b95"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_interview" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "title" varchar NOT NULL, "startTime" datetime, "endTime" datetime, "location" varchar, "note" varchar, "isArchived" boolean DEFAULT (0), "rating" numeric, "candidateId" varchar, "isActive" boolean DEFAULT (1), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_59b765e6d13d83dba4852a43eb5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_03be41e88b1fecfe4e24d6b04b2" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_91996439c4baafee8395d3df153" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_interview"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "startTime", "endTime", "location", "note", "isArchived", "rating", "candidateId", "isActive", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "startTime", "endTime", "location", "note", "isArchived", "rating", "candidateId", "isActive", "deletedAt" FROM "candidate_interview"`
		);
		await queryRunner.query(`DROP TABLE "candidate_interview"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate_interview" RENAME TO "candidate_interview"`);
		await queryRunner.query(`CREATE INDEX "IDX_59b765e6d13d83dba4852a43eb" ON "candidate_interview" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_03be41e88b1fecfe4e24d6b04b" ON "candidate_interview" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_91996439c4baafee8395d3df15" ON "candidate_interview" ("candidateId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_b9191cf49f8cd1f192cb74233c" ON "candidate_interview" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_7b49ce2928b327213f2de66b95" ON "candidate_interview" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_9e7b20eb3dfa082b83b198fdad"`);
		await queryRunner.query(`DROP INDEX "IDX_ecb65075e94b47bbab11cfa5a1"`);
		await queryRunner.query(`DROP INDEX "IDX_5f1e315db848990dfffa72817c"`);
		await queryRunner.query(`DROP INDEX "IDX_f0ca69c78eea92c95d9044764a"`);
		await queryRunner.query(`DROP INDEX "IDX_b9132118c3a98c4c48e417c0c5"`);
		await queryRunner.query(`DROP INDEX "IDX_2043abff09f084fb8690009fb8"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_interviewer" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "interviewId" varchar NOT NULL, "employeeId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_9e7b20eb3dfa082b83b198fdad4" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ecb65075e94b47bbab11cfa5a1e" FOREIGN KEY ("interviewId") REFERENCES "candidate_interview" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5f1e315db848990dfffa72817ca" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f0ca69c78eea92c95d9044764a2" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_interviewer"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "interviewId", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "interviewId", "employeeId", "isActive", "isArchived", "deletedAt" FROM "candidate_interviewer"`
		);
		await queryRunner.query(`DROP TABLE "candidate_interviewer"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate_interviewer" RENAME TO "candidate_interviewer"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_9e7b20eb3dfa082b83b198fdad" ON "candidate_interviewer" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ecb65075e94b47bbab11cfa5a1" ON "candidate_interviewer" ("interviewId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5f1e315db848990dfffa72817c" ON "candidate_interviewer" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f0ca69c78eea92c95d9044764a" ON "candidate_interviewer" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b9132118c3a98c4c48e417c0c5" ON "candidate_interviewer" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2043abff09f084fb8690009fb8" ON "candidate_interviewer" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_a0d171f45bdbcf2b990c0c37c3"`);
		await queryRunner.query(`DROP INDEX "IDX_d321f4547ed467d07cce1e7d9a"`);
		await queryRunner.query(`DROP INDEX "IDX_045de7c208adcd0c68c0a65174"`);
		await queryRunner.query(`DROP INDEX "IDX_afe01503d4337c9623c06f22df"`);
		await queryRunner.query(`DROP INDEX "IDX_ff6776d92db4ef71edbfba9903"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_personal_quality" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "rating" numeric, "interviewId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a0d171f45bdbcf2b990c0c37c32" FOREIGN KEY ("interviewId") REFERENCES "candidate_interview" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d321f4547ed467d07cce1e7d9a5" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_045de7c208adcd0c68c0a651748" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_personal_quality"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "rating", "interviewId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "rating", "interviewId", "isActive", "isArchived", "deletedAt" FROM "candidate_personal_quality"`
		);
		await queryRunner.query(`DROP TABLE "candidate_personal_quality"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_candidate_personal_quality" RENAME TO "candidate_personal_quality"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a0d171f45bdbcf2b990c0c37c3" ON "candidate_personal_quality" ("interviewId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d321f4547ed467d07cce1e7d9a" ON "candidate_personal_quality" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_045de7c208adcd0c68c0a65174" ON "candidate_personal_quality" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_afe01503d4337c9623c06f22df" ON "candidate_personal_quality" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ff6776d92db4ef71edbfba9903" ON "candidate_personal_quality" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_d7986743e7f11720349a6c9557"`);
		await queryRunner.query(`DROP INDEX "IDX_8a07f780c6fce2b82830ab0687"`);
		await queryRunner.query(`DROP INDEX "IDX_6907163d0bb8e9f0440b9bf2a7"`);
		await queryRunner.query(`DROP INDEX "IDX_a38fe0c3f2ff0a4e475f2a1347"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_skill" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "candidateId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_492548e6c176f5655adfae9f5ea" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d7986743e7f11720349a6c95572" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8a07f780c6fce2b82830ab06877" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_skill"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "candidateId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "candidateId", "isActive", "isArchived", "deletedAt" FROM "candidate_skill"`
		);
		await queryRunner.query(`DROP TABLE "candidate_skill"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate_skill" RENAME TO "candidate_skill"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_d7986743e7f11720349a6c9557" ON "candidate_skill" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_8a07f780c6fce2b82830ab0687" ON "candidate_skill" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_6907163d0bb8e9f0440b9bf2a7" ON "candidate_skill" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_a38fe0c3f2ff0a4e475f2a1347" ON "candidate_skill" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_e92027b5280828cadd7cd6ea71"`);
		await queryRunner.query(`DROP INDEX "IDX_b2a1ba27a76dd819cd8294cce3"`);
		await queryRunner.query(`DROP INDEX "IDX_2be9182096747fb18cb8afb1f0"`);
		await queryRunner.query(`DROP INDEX "IDX_509101ab1a46a5934ee278d447"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_source" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_e92027b5280828cadd7cd6ea719" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b2a1ba27a76dd819cd8294cce38" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_source"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "candidate_source"`
		);
		await queryRunner.query(`DROP TABLE "candidate_source"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate_source" RENAME TO "candidate_source"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_e92027b5280828cadd7cd6ea71" ON "candidate_source" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_b2a1ba27a76dd819cd8294cce3" ON "candidate_source" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_2be9182096747fb18cb8afb1f0" ON "candidate_source" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_509101ab1a46a5934ee278d447" ON "candidate_source" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_063663c7e61e45d172d1b83265"`);
		await queryRunner.query(`DROP INDEX "IDX_9d46b8c5382acd4d4514bc5c62"`);
		await queryRunner.query(`DROP INDEX "IDX_a6fecb615b07987b480defac64"`);
		await queryRunner.query(`DROP INDEX "IDX_199ca43300fa4e64239656a677"`);
		await queryRunner.query(`DROP INDEX "IDX_97aa0328b72e1bf919e61bccdc"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate_technology" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "rating" numeric, "interviewId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_063663c7e61e45d172d1b832656" FOREIGN KEY ("interviewId") REFERENCES "candidate_interview" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9d46b8c5382acd4d4514bc5c62e" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a6fecb615b07987b480defac647" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate_technology"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "rating", "interviewId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "rating", "interviewId", "isActive", "isArchived", "deletedAt" FROM "candidate_technology"`
		);
		await queryRunner.query(`DROP TABLE "candidate_technology"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate_technology" RENAME TO "candidate_technology"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_063663c7e61e45d172d1b83265" ON "candidate_technology" ("interviewId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9d46b8c5382acd4d4514bc5c62" ON "candidate_technology" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a6fecb615b07987b480defac64" ON "candidate_technology" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_199ca43300fa4e64239656a677" ON "candidate_technology" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_97aa0328b72e1bf919e61bccdc" ON "candidate_technology" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_3930aa71e0fa24f09201811b1b"`);
		await queryRunner.query(`DROP INDEX "IDX_4ea108fd8b089237964d5f98fb"`);
		await queryRunner.query(`DROP INDEX "IDX_1e3e8228e7df634fa4cec6322c"`);
		await queryRunner.query(`DROP INDEX "IDX_b674793a804b7d69d74c8f6c5b"`);
		await queryRunner.query(`DROP INDEX "IDX_16fb27ffd1a99c6506c92ad57a"`);
		await queryRunner.query(`DROP INDEX "IDX_77ac426e04553ff1654421bce4"`);
		await queryRunner.query(`DROP INDEX "IDX_8b900e8a39f76125e610ab30c0"`);
		await queryRunner.query(`DROP INDEX "IDX_2b8091376a529383e23ba3356a"`);
		await queryRunner.query(`DROP INDEX "IDX_af835b66fa10279103bd89e225"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_candidate" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "rating" numeric, "valueDate" datetime, "appliedDate" datetime, "hiredDate" datetime, "status" varchar DEFAULT ('APPLIED'), "rejectDate" datetime, "candidateLevel" varchar(500), "reWeeklyLimit" integer, "billRateCurrency" varchar(255), "billRateValue" integer, "payPeriod" varchar, "cvUrl" varchar, "isArchived" boolean DEFAULT (0), "contactId" varchar, "organizationPositionId" varchar, "sourceId" varchar, "userId" varchar NOT NULL, "employeeId" varchar, "minimumBillingRate" integer, "isActive" boolean DEFAULT (1), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "REL_3930aa71e0fa24f09201811b1b" UNIQUE ("userId"), CONSTRAINT "REL_4ea108fd8b089237964d5f98fb" UNIQUE ("sourceId"), CONSTRAINT "REL_b674793a804b7d69d74c8f6c5b" UNIQUE ("contactId"), CONSTRAINT "UQ_91b20077aa92f9115764033cd06" UNIQUE ("employeeId"), CONSTRAINT "FK_3930aa71e0fa24f09201811b1bb" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4ea108fd8b089237964d5f98fba" FOREIGN KEY ("sourceId") REFERENCES "candidate_source" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1e3e8228e7df634fa4cec6322c7" FOREIGN KEY ("organizationPositionId") REFERENCES "organization_position" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_b674793a804b7d69d74c8f6c5ba" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_16fb27ffd1a99c6506c92ad57a7" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_77ac426e04553ff1654421bce4d" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8b900e8a39f76125e610ab30c0e" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_candidate"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "rating", "valueDate", "appliedDate", "hiredDate", "status", "rejectDate", "candidateLevel", "reWeeklyLimit", "billRateCurrency", "billRateValue", "payPeriod", "cvUrl", "isArchived", "contactId", "organizationPositionId", "sourceId", "userId", "employeeId", "minimumBillingRate", "isActive", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "rating", "valueDate", "appliedDate", "hiredDate", "status", "rejectDate", "candidateLevel", "reWeeklyLimit", "billRateCurrency", "billRateValue", "payPeriod", "cvUrl", "isArchived", "contactId", "organizationPositionId", "sourceId", "userId", "employeeId", "minimumBillingRate", "isActive", "deletedAt" FROM "candidate"`
		);
		await queryRunner.query(`DROP TABLE "candidate"`);
		await queryRunner.query(`ALTER TABLE "temporary_candidate" RENAME TO "candidate"`);
		await queryRunner.query(`CREATE INDEX "IDX_3930aa71e0fa24f09201811b1b" ON "candidate" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4ea108fd8b089237964d5f98fb" ON "candidate" ("sourceId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_1e3e8228e7df634fa4cec6322c" ON "candidate" ("organizationPositionId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_b674793a804b7d69d74c8f6c5b" ON "candidate" ("contactId") `);
		await queryRunner.query(`CREATE INDEX "IDX_16fb27ffd1a99c6506c92ad57a" ON "candidate" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_77ac426e04553ff1654421bce4" ON "candidate" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8b900e8a39f76125e610ab30c0" ON "candidate" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_2b8091376a529383e23ba3356a" ON "candidate" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_af835b66fa10279103bd89e225" ON "candidate" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_60468af1ce34043a900809c84f"`);
		await queryRunner.query(`DROP INDEX "IDX_7719d73cd16a9f57ecc6ac24b3"`);
		await queryRunner.query(`DROP INDEX "IDX_05831d37eabeb6150f99c69784"`);
		await queryRunner.query(`DROP INDEX "IDX_4164bd34bdcce8754641f0e567"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_contact" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar, "firstName" varchar, "lastName" varchar, "country" varchar, "city" varchar, "address" varchar, "address2" varchar, "postcode" varchar, "latitude" numeric, "longitude" numeric, "regionCode" varchar, "fax" varchar, "fiscalInformation" varchar, "website" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_60468af1ce34043a900809c84f2" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7719d73cd16a9f57ecc6ac24b3d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_contact"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "firstName", "lastName", "country", "city", "address", "address2", "postcode", "latitude", "longitude", "regionCode", "fax", "fiscalInformation", "website", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "firstName", "lastName", "country", "city", "address", "address2", "postcode", "latitude", "longitude", "regionCode", "fax", "fiscalInformation", "website", "isActive", "isArchived", "deletedAt" FROM "contact"`
		);
		await queryRunner.query(`DROP TABLE "contact"`);
		await queryRunner.query(`ALTER TABLE "temporary_contact" RENAME TO "contact"`);
		await queryRunner.query(`CREATE INDEX "IDX_60468af1ce34043a900809c84f" ON "contact" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7719d73cd16a9f57ecc6ac24b3" ON "contact" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_05831d37eabeb6150f99c69784" ON "contact" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_4164bd34bdcce8754641f0e567" ON "contact" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_6eba1a52ee121d100c8a0a6510"`);
		await queryRunner.query(`DROP INDEX "IDX_97ebcd8db30a408b5f907d6ff4"`);
		await queryRunner.query(`DROP INDEX "IDX_6cd9b7ea6818e862217035436c"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_country" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isoCode" varchar NOT NULL, "country" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_country"("id", "createdAt", "updatedAt", "isoCode", "country", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "isoCode", "country", "isActive", "isArchived", "deletedAt" FROM "country"`
		);
		await queryRunner.query(`DROP TABLE "country"`);
		await queryRunner.query(`ALTER TABLE "temporary_country" RENAME TO "country"`);
		await queryRunner.query(`CREATE INDEX "IDX_6eba1a52ee121d100c8a0a6510" ON "country" ("isoCode") `);
		await queryRunner.query(`CREATE INDEX "IDX_97ebcd8db30a408b5f907d6ff4" ON "country" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_6cd9b7ea6818e862217035436c" ON "country" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_0b0fbda74f6c82c943e706a3cc"`);
		await queryRunner.query(`DROP INDEX "IDX_03cc024ddc2f196dca7fead7cb"`);
		await queryRunner.query(`DROP INDEX "IDX_8203f1410475748bbbc6d3029d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_currency" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isoCode" varchar NOT NULL, "currency" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_currency"("id", "createdAt", "updatedAt", "isoCode", "currency", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "isoCode", "currency", "isActive", "isArchived", "deletedAt" FROM "currency"`
		);
		await queryRunner.query(`DROP TABLE "currency"`);
		await queryRunner.query(`ALTER TABLE "temporary_currency" RENAME TO "currency"`);
		await queryRunner.query(`CREATE INDEX "IDX_0b0fbda74f6c82c943e706a3cc" ON "currency" ("isoCode") `);
		await queryRunner.query(`CREATE INDEX "IDX_03cc024ddc2f196dca7fead7cb" ON "currency" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8203f1410475748bbbc6d3029d" ON "currency" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_2aa3fc8daa25beec4788d2be26"`);
		await queryRunner.query(`DROP INDEX "IDX_15a1306132d66c63ef31f7288c"`);
		await queryRunner.query(`DROP INDEX "IDX_e2c7d28bb07adc915d74437c7b"`);
		await queryRunner.query(`DROP INDEX "IDX_f10372f9d038d0954d5b20635a"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_custom_smtp" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "host" varchar NOT NULL, "port" integer NOT NULL, "secure" boolean NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "isValidate" boolean NOT NULL DEFAULT (0), "fromAddress" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_2aa3fc8daa25beec4788d2be26c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_15a1306132d66c63ef31f7288c1" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_custom_smtp"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "host", "port", "secure", "username", "password", "isValidate", "fromAddress", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "host", "port", "secure", "username", "password", "isValidate", "fromAddress", "isActive", "isArchived", "deletedAt" FROM "custom_smtp"`
		);
		await queryRunner.query(`DROP TABLE "custom_smtp"`);
		await queryRunner.query(`ALTER TABLE "temporary_custom_smtp" RENAME TO "custom_smtp"`);
		await queryRunner.query(`CREATE INDEX "IDX_2aa3fc8daa25beec4788d2be26" ON "custom_smtp" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_15a1306132d66c63ef31f7288c" ON "custom_smtp" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e2c7d28bb07adc915d74437c7b" ON "custom_smtp" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f10372f9d038d0954d5b20635a" ON "custom_smtp" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_9211f5b62988df6e95522be7da"`);
		await queryRunner.query(`DROP INDEX "IDX_4b1ff44e6bae5065429dbab554"`);
		await queryRunner.query(`DROP INDEX "IDX_38fb85abdf9995efcf217f5955"`);
		await queryRunner.query(`DROP INDEX "IDX_46a3c00bfc3e36b4412d8bcdb0"`);
		await queryRunner.query(`DROP INDEX "IDX_0d8c964237e5061627de82df80"`);
		await queryRunner.query(`DROP INDEX "IDX_443c561d45f6c57f3790a759ba"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_deal" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "title" varchar NOT NULL, "probability" integer NOT NULL, "createdByUserId" varchar NOT NULL, "stageId" varchar NOT NULL, "clientId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "REL_1ae3abc0ae1dcf6c13f49b62b5" UNIQUE ("clientId"), CONSTRAINT "FK_1ae3abc0ae1dcf6c13f49b62b56" FOREIGN KEY ("clientId") REFERENCES "organization_contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9211f5b62988df6e95522be7daa" FOREIGN KEY ("stageId") REFERENCES "pipeline_stage" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4b1ff44e6bae5065429dbab554b" FOREIGN KEY ("createdByUserId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_38fb85abdf9995efcf217f59554" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_46a3c00bfc3e36b4412d8bcdb08" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_deal"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "probability", "createdByUserId", "stageId", "clientId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "probability", "createdByUserId", "stageId", "clientId", "isActive", "isArchived", "deletedAt" FROM "deal"`
		);
		await queryRunner.query(`DROP TABLE "deal"`);
		await queryRunner.query(`ALTER TABLE "temporary_deal" RENAME TO "deal"`);
		await queryRunner.query(`CREATE INDEX "IDX_9211f5b62988df6e95522be7da" ON "deal" ("stageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4b1ff44e6bae5065429dbab554" ON "deal" ("createdByUserId") `);
		await queryRunner.query(`CREATE INDEX "IDX_38fb85abdf9995efcf217f5955" ON "deal" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_46a3c00bfc3e36b4412d8bcdb0" ON "deal" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_0d8c964237e5061627de82df80" ON "deal" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_443c561d45f6c57f3790a759ba" ON "deal" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_9a69f7077e0333d2c848895a1b"`);
		await queryRunner.query(`DROP INDEX "IDX_d825bc6da1c52a3900a9373260"`);
		await queryRunner.query(`DROP INDEX "IDX_1261c457b3035b77719556995b"`);
		await queryRunner.query(`DROP INDEX "IDX_953df0eb0df3035baf140399f6"`);
		await queryRunner.query(`DROP INDEX "IDX_525f4873c6edc3d94559f88900"`);
		await queryRunner.query(`DROP INDEX "IDX_0af511c44de7a16beb45cc3785"`);
		await queryRunner.query(`DROP INDEX "IDX_a954fda57cca81dc48446e73b8"`);
		await queryRunner.query(`DROP INDEX "IDX_9033faf41b23c61ba201c48796"`);
		await queryRunner.query(`DROP INDEX "IDX_5956ce758c01ebf8a539e8d4f0"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_email_sent" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar, "content" varchar, "email" varchar NOT NULL, "isArchived" boolean DEFAULT (0), "userId" varchar, "emailTemplateId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "status" varchar CHECK( "status" IN ('SENT','FAILED') ), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_1261c457b3035b77719556995bf" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_525f4873c6edc3d94559f88900c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_0af511c44de7a16beb45cc37852" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9033faf41b23c61ba201c487969" FOREIGN KEY ("emailTemplateId") REFERENCES "email_template" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_email_sent"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "content", "email", "isArchived", "userId", "emailTemplateId", "isActive", "status", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "content", "email", "isArchived", "userId", "emailTemplateId", "isActive", "status", "deletedAt" FROM "email_sent"`
		);
		await queryRunner.query(`DROP TABLE "email_sent"`);
		await queryRunner.query(`ALTER TABLE "temporary_email_sent" RENAME TO "email_sent"`);
		await queryRunner.query(`CREATE INDEX "IDX_9a69f7077e0333d2c848895a1b" ON "email_sent" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_d825bc6da1c52a3900a9373260" ON "email_sent" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1261c457b3035b77719556995b" ON "email_sent" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_953df0eb0df3035baf140399f6" ON "email_sent" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_525f4873c6edc3d94559f88900" ON "email_sent" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_0af511c44de7a16beb45cc3785" ON "email_sent" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a954fda57cca81dc48446e73b8" ON "email_sent" ("email") `);
		await queryRunner.query(`CREATE INDEX "IDX_9033faf41b23c61ba201c48796" ON "email_sent" ("emailTemplateId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5956ce758c01ebf8a539e8d4f0" ON "email_sent" ("status") `);
		await queryRunner.query(`DROP INDEX "IDX_e37af4ab2ba0bf268bfd982634"`);
		await queryRunner.query(`DROP INDEX "IDX_9e80c9ec749dfda6dbe2cd9704"`);
		await queryRunner.query(`DROP INDEX "IDX_4be518a169bbcbfe92025ac574"`);
		await queryRunner.query(`DROP INDEX "IDX_03d16a2fd43d7c601743440212"`);
		await queryRunner.query(`DROP INDEX "IDX_93799dfaeff51de06f1e02ac41"`);
		await queryRunner.query(`DROP INDEX "IDX_4ac734f2a1a3c055dca04fba99"`);
		await queryRunner.query(`DROP INDEX "IDX_e3321e3575289b7ee1e8eb1042"`);
		await queryRunner.query(`DROP INDEX "IDX_13247a755d17e7905d5bb4cfda"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_email_reset" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "email" varchar NOT NULL, "oldEmail" varchar NOT NULL, "code" varchar NOT NULL, "userId" varchar, "token" varchar, "expiredAt" datetime, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_93799dfaeff51de06f1e02ac414" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_e37af4ab2ba0bf268bfd9826345" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_email_reset"("id", "createdAt", "updatedAt", "tenantId", "email", "oldEmail", "code", "userId", "token", "expiredAt", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "email", "oldEmail", "code", "userId", "token", "expiredAt", "isActive", "isArchived", "deletedAt" FROM "email_reset"`
		);
		await queryRunner.query(`DROP TABLE "email_reset"`);
		await queryRunner.query(`ALTER TABLE "temporary_email_reset" RENAME TO "email_reset"`);
		await queryRunner.query(`CREATE INDEX "IDX_e37af4ab2ba0bf268bfd982634" ON "email_reset" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9e80c9ec749dfda6dbe2cd9704" ON "email_reset" ("code") `);
		await queryRunner.query(`CREATE INDEX "IDX_4be518a169bbcbfe92025ac574" ON "email_reset" ("oldEmail") `);
		await queryRunner.query(`CREATE INDEX "IDX_03d16a2fd43d7c601743440212" ON "email_reset" ("email") `);
		await queryRunner.query(`CREATE INDEX "IDX_93799dfaeff51de06f1e02ac41" ON "email_reset" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4ac734f2a1a3c055dca04fba99" ON "email_reset" ("token") `);
		await queryRunner.query(`CREATE INDEX "IDX_e3321e3575289b7ee1e8eb1042" ON "email_reset" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_13247a755d17e7905d5bb4cfda" ON "email_reset" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_7e688e6613930ba721b841db43"`);
		await queryRunner.query(`DROP INDEX "IDX_274708db64fcce5448f2c4541c"`);
		await queryRunner.query(`DROP INDEX "IDX_c160fe6234675fac031aa3e7c5"`);
		await queryRunner.query(`DROP INDEX "IDX_753e005a45556b5909e11937aa"`);
		await queryRunner.query(`DROP INDEX "IDX_e4932e0a726b9b07d81d8b6905"`);
		await queryRunner.query(`DROP INDEX "IDX_29d60114e1968c0cd68a19e3c5"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_email_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "languageCode" varchar NOT NULL, "mjml" text, "hbs" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_c160fe6234675fac031aa3e7c50" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_753e005a45556b5909e11937aaf" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_email_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "mjml", "hbs", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "mjml", "hbs", "isActive", "isArchived", "deletedAt" FROM "email_template"`
		);
		await queryRunner.query(`DROP TABLE "email_template"`);
		await queryRunner.query(`ALTER TABLE "temporary_email_template" RENAME TO "email_template"`);
		await queryRunner.query(`CREATE INDEX "IDX_7e688e6613930ba721b841db43" ON "email_template" ("languageCode") `);
		await queryRunner.query(`CREATE INDEX "IDX_274708db64fcce5448f2c4541c" ON "email_template" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c160fe6234675fac031aa3e7c5" ON "email_template" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_753e005a45556b5909e11937aa" ON "email_template" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e4932e0a726b9b07d81d8b6905" ON "email_template" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_29d60114e1968c0cd68a19e3c5" ON "email_template" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_86cf36c137712e779dd7e2301e"`);
		await queryRunner.query(`DROP INDEX "IDX_a35637bb659c59e18adb4f38f8"`);
		await queryRunner.query(`DROP INDEX "IDX_d0219ada2359ede9e7b0d511ba"`);
		await queryRunner.query(`DROP INDEX "IDX_64c83df9d37d9ada96edb66557"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_employee_appointment" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "employeeId" varchar, "agenda" varchar NOT NULL, "description" varchar, "location" varchar, "startDateTime" datetime NOT NULL, "endDateTime" datetime NOT NULL, "bufferTimeStart" boolean, "bufferTimeEnd" boolean, "bufferTimeInMins" integer, "breakTimeInMins" integer, "breakStartTime" datetime, "emails" varchar, "status" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_2f58132c57108540887dc3e88eb" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_86cf36c137712e779dd7e2301e6" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a35637bb659c59e18adb4f38f87" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_employee_appointment"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "employeeId", "agenda", "description", "location", "startDateTime", "endDateTime", "bufferTimeStart", "bufferTimeEnd", "bufferTimeInMins", "breakTimeInMins", "breakStartTime", "emails", "status", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "employeeId", "agenda", "description", "location", "startDateTime", "endDateTime", "bufferTimeStart", "bufferTimeEnd", "bufferTimeInMins", "breakTimeInMins", "breakStartTime", "emails", "status", "isActive", "isArchived", "deletedAt" FROM "employee_appointment"`
		);
		await queryRunner.query(`DROP TABLE "employee_appointment"`);
		await queryRunner.query(`ALTER TABLE "temporary_employee_appointment" RENAME TO "employee_appointment"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_86cf36c137712e779dd7e2301e" ON "employee_appointment" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a35637bb659c59e18adb4f38f8" ON "employee_appointment" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d0219ada2359ede9e7b0d511ba" ON "employee_appointment" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_64c83df9d37d9ada96edb66557" ON "employee_appointment" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_0c5266f3f488add404f92d56ec"`);
		await queryRunner.query(`DROP INDEX "IDX_6912685bbb0e303eab392978d9"`);
		await queryRunner.query(`DROP INDEX "IDX_caf8363b0ed7d5f24ae866ba3b"`);
		await queryRunner.query(`DROP INDEX "IDX_91e0f7efcd17d20b5029fb1342"`);
		await queryRunner.query(`DROP INDEX "IDX_c07390f325c847be7df93d0d17"`);
		await queryRunner.query(`DROP INDEX "IDX_8fb47e8bfd26340ddaeabd24e5"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_employee_award" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "year" varchar NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_0c5266f3f488add404f92d56ec7" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_caf8363b0ed7d5f24ae866ba3bb" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_91e0f7efcd17d20b5029fb1342d" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_employee_award"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "year", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "year", "employeeId", "isActive", "isArchived", "deletedAt" FROM "employee_award"`
		);
		await queryRunner.query(`DROP TABLE "employee_award"`);
		await queryRunner.query(`ALTER TABLE "temporary_employee_award" RENAME TO "employee_award"`);
		await queryRunner.query(`CREATE INDEX "IDX_0c5266f3f488add404f92d56ec" ON "employee_award" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_6912685bbb0e303eab392978d9" ON "employee_award" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_caf8363b0ed7d5f24ae866ba3b" ON "employee_award" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_91e0f7efcd17d20b5029fb1342" ON "employee_award" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c07390f325c847be7df93d0d17" ON "employee_award" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8fb47e8bfd26340ddaeabd24e5" ON "employee_award" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_c4668533292bf4526e61aedf74"`);
		await queryRunner.query(`DROP INDEX "IDX_d3fc52d497bc44d6f493dbedc3"`);
		await queryRunner.query(`DROP INDEX "IDX_90bd442869709bae9d1b18e489"`);
		await queryRunner.query(`DROP INDEX "IDX_88a58d149404145ed7b3385387"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_employee_level" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "level" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_c4668533292bf4526e61aedf74a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_d3fc52d497bc44d6f493dbedc3a" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_employee_level"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "level", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "level", "isActive", "isArchived", "deletedAt" FROM "employee_level"`
		);
		await queryRunner.query(`DROP TABLE "employee_level"`);
		await queryRunner.query(`ALTER TABLE "temporary_employee_level" RENAME TO "employee_level"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_c4668533292bf4526e61aedf74" ON "employee_level" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_d3fc52d497bc44d6f493dbedc3" ON "employee_level" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_90bd442869709bae9d1b18e489" ON "employee_level" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_88a58d149404145ed7b3385387" ON "employee_level" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_329ebd01a757d1a0c3c4d628e2"`);
		await queryRunner.query(`DROP INDEX "IDX_ba7b2ef5a9cd165a1e4e2ad0ef"`);
		await queryRunner.query(`DROP INDEX "IDX_0f9cefa604913e1ab322591546"`);
		await queryRunner.query(`DROP INDEX "IDX_d543336994b1f764c449e0b1d3"`);
		await queryRunner.query(`DROP INDEX "IDX_587d11ffbd87adb6dff367f3cd"`);
		await queryRunner.query(`DROP INDEX "IDX_aa98ea786d490db300d3dbbdb6"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_employee_phone" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "type" varchar, "phoneNumber" varchar NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_329ebd01a757d1a0c3c4d628e29" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0f9cefa604913e1ab3225915469" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_d543336994b1f764c449e0b1d3c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_employee_phone"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "type", "phoneNumber", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "type", "phoneNumber", "employeeId", "isActive", "isArchived", "deletedAt" FROM "employee_phone"`
		);
		await queryRunner.query(`DROP TABLE "employee_phone"`);
		await queryRunner.query(`ALTER TABLE "temporary_employee_phone" RENAME TO "employee_phone"`);
		await queryRunner.query(`CREATE INDEX "IDX_329ebd01a757d1a0c3c4d628e2" ON "employee_phone" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ba7b2ef5a9cd165a1e4e2ad0ef" ON "employee_phone" ("phoneNumber") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_0f9cefa604913e1ab322591546" ON "employee_phone" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_d543336994b1f764c449e0b1d3" ON "employee_phone" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_587d11ffbd87adb6dff367f3cd" ON "employee_phone" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_aa98ea786d490db300d3dbbdb6" ON "employee_phone" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_5fde7be40b3c03bc0fdac0c2f6"`);
		await queryRunner.query(`DROP INDEX "IDX_3ee5147bb1fde625fa33c0e956"`);
		await queryRunner.query(`DROP INDEX "IDX_a4b5a2ea2afecf1ee254f1a704"`);
		await queryRunner.query(`DROP INDEX "IDX_739f8cdce21cc72d400559ce00"`);
		await queryRunner.query(`DROP INDEX "IDX_6e570174fda71e97616e9d2eea"`);
		await queryRunner.query(`DROP INDEX "IDX_0ac8526c48a3daa267c86225fb"`);
		await queryRunner.query(`DROP INDEX "IDX_25f8915182128f377d84b60d26"`);
		await queryRunner.query(`DROP INDEX "IDX_3980b0fe1e757b092ea5323656"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_employee_recurring_expense" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "startDay" integer NOT NULL, "startMonth" integer NOT NULL, "startYear" integer NOT NULL, "startDate" datetime NOT NULL, "endDay" integer, "endMonth" integer, "endYear" integer, "endDate" datetime, "categoryName" varchar NOT NULL, "value" numeric NOT NULL, "currency" varchar NOT NULL, "parentRecurringExpenseId" varchar, "employeeId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_0ac8526c48a3daa267c86225fb5" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3ee5147bb1fde625fa33c0e956b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_5fde7be40b3c03bc0fdac0c2f66" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_employee_recurring_expense"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "startDay", "startMonth", "startYear", "startDate", "endDay", "endMonth", "endYear", "endDate", "categoryName", "value", "currency", "parentRecurringExpenseId", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "startDay", "startMonth", "startYear", "startDate", "endDay", "endMonth", "endYear", "endDate", "categoryName", "value", "currency", "parentRecurringExpenseId", "employeeId", "isActive", "isArchived", "deletedAt" FROM "employee_recurring_expense"`
		);
		await queryRunner.query(`DROP TABLE "employee_recurring_expense"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_employee_recurring_expense" RENAME TO "employee_recurring_expense"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5fde7be40b3c03bc0fdac0c2f6" ON "employee_recurring_expense" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3ee5147bb1fde625fa33c0e956" ON "employee_recurring_expense" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a4b5a2ea2afecf1ee254f1a704" ON "employee_recurring_expense" ("categoryName") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_739f8cdce21cc72d400559ce00" ON "employee_recurring_expense" ("currency") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6e570174fda71e97616e9d2eea" ON "employee_recurring_expense" ("parentRecurringExpenseId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0ac8526c48a3daa267c86225fb" ON "employee_recurring_expense" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_25f8915182128f377d84b60d26" ON "employee_recurring_expense" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3980b0fe1e757b092ea5323656" ON "employee_recurring_expense" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_95ea18af6ef8123503d332240c"`);
		await queryRunner.query(`DROP INDEX "IDX_710c71526edb89b2a7033abcdf"`);
		await queryRunner.query(`DROP INDEX "IDX_9537fae454ebebc98ee5adb3a2"`);
		await queryRunner.query(`DROP INDEX "IDX_56e96cd218a185ed59b5a8e786"`);
		await queryRunner.query(`DROP INDEX "IDX_9516a627a131626d2a5738a05a"`);
		await queryRunner.query(`DROP INDEX "IDX_48fae30026b4e166a3445fee6d"`);
		await queryRunner.query(`DROP INDEX "IDX_01237d04f882cf1ea794678e8d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_employee_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "month" integer NOT NULL, "year" integer NOT NULL, "settingType" varchar NOT NULL, "value" integer NOT NULL, "currency" varchar NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_95ea18af6ef8123503d332240c2" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_56e96cd218a185ed59b5a8e7869" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9516a627a131626d2a5738a05a8" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_employee_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "month", "year", "settingType", "value", "currency", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "month", "year", "settingType", "value", "currency", "employeeId", "isActive", "isArchived", "deletedAt" FROM "employee_setting"`
		);
		await queryRunner.query(`DROP TABLE "employee_setting"`);
		await queryRunner.query(`ALTER TABLE "temporary_employee_setting" RENAME TO "employee_setting"`);
		await queryRunner.query(`CREATE INDEX "IDX_95ea18af6ef8123503d332240c" ON "employee_setting" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_710c71526edb89b2a7033abcdf" ON "employee_setting" ("currency") `);
		await queryRunner.query(`CREATE INDEX "IDX_9537fae454ebebc98ee5adb3a2" ON "employee_setting" ("settingType") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_56e96cd218a185ed59b5a8e786" ON "employee_setting" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9516a627a131626d2a5738a05a" ON "employee_setting" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_48fae30026b4e166a3445fee6d" ON "employee_setting" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_01237d04f882cf1ea794678e8d" ON "employee_setting" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_175b7be641928a31521224daa8"`);
		await queryRunner.query(`DROP INDEX "IDX_510cb87f5da169e57e694d1a5c"`);
		await queryRunner.query(`DROP INDEX "IDX_4b3303a6b7eb92d237a4379734"`);
		await queryRunner.query(`DROP INDEX "IDX_c6a48286f3aa8ae903bee0d1e7"`);
		await queryRunner.query(`DROP INDEX "IDX_96dfbcaa2990df01fe5bb39ccc"`);
		await queryRunner.query(`DROP INDEX "IDX_f4b0d329c4a3cf79ffe9d56504"`);
		await queryRunner.query(`DROP INDEX "IDX_1c0c1370ecd98040259625e17e"`);
		await queryRunner.query(`DROP INDEX "IDX_5e719204dcafa8d6b2ecdeda13"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_employee" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "valueDate" datetime, "isActive" boolean DEFAULT (1), "short_description" varchar(200), "description" varchar, "startedWorkOn" datetime, "endWork" datetime, "payPeriod" varchar, "billRateValue" integer, "billRateCurrency" varchar, "reWeeklyLimit" integer, "offerDate" datetime, "acceptDate" datetime, "rejectDate" datetime, "employeeLevel" varchar(500), "anonymousBonus" boolean, "averageIncome" numeric, "averageBonus" numeric, "totalWorkHours" numeric DEFAULT (0), "averageExpenses" numeric, "show_anonymous_bonus" boolean, "show_average_bonus" boolean, "show_average_expenses" boolean, "show_average_income" boolean, "show_billrate" boolean, "show_payperiod" boolean, "show_start_work_on" boolean, "isJobSearchActive" boolean, "linkedInUrl" varchar, "facebookUrl" varchar, "instagramUrl" varchar, "twitterUrl" varchar, "githubUrl" varchar, "gitlabUrl" varchar, "upworkUrl" varchar, "stackoverflowUrl" varchar, "isVerified" boolean, "isVetted" boolean, "totalJobs" numeric, "jobSuccess" numeric, "profile_link" varchar, "userId" varchar NOT NULL, "contactId" varchar, "organizationPositionId" varchar, "isTrackingEnabled" boolean DEFAULT (0), "deletedAt" datetime, "allowScreenshotCapture" boolean NOT NULL DEFAULT (1), "upworkId" varchar, "linkedInId" varchar, "isOnline" boolean DEFAULT (0), "isTrackingTime" boolean DEFAULT (0), "minimumBillingRate" integer, "isAway" boolean DEFAULT (0), "isArchived" boolean DEFAULT (0), "fix_relational_custom_fields" boolean, "archivedAt" datetime, CONSTRAINT "REL_f4b0d329c4a3cf79ffe9d56504" UNIQUE ("userId"), CONSTRAINT "REL_1c0c1370ecd98040259625e17e" UNIQUE ("contactId"), CONSTRAINT "FK_4b3303a6b7eb92d237a4379734e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c6a48286f3aa8ae903bee0d1e72" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1c0c1370ecd98040259625e17e2" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_5e719204dcafa8d6b2ecdeda130" FOREIGN KEY ("organizationPositionId") REFERENCES "organization_position" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_employee"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "valueDate", "isActive", "short_description", "description", "startedWorkOn", "endWork", "payPeriod", "billRateValue", "billRateCurrency", "reWeeklyLimit", "offerDate", "acceptDate", "rejectDate", "employeeLevel", "anonymousBonus", "averageIncome", "averageBonus", "totalWorkHours", "averageExpenses", "show_anonymous_bonus", "show_average_bonus", "show_average_expenses", "show_average_income", "show_billrate", "show_payperiod", "show_start_work_on", "isJobSearchActive", "linkedInUrl", "facebookUrl", "instagramUrl", "twitterUrl", "githubUrl", "gitlabUrl", "upworkUrl", "stackoverflowUrl", "isVerified", "isVetted", "totalJobs", "jobSuccess", "profile_link", "userId", "contactId", "organizationPositionId", "isTrackingEnabled", "deletedAt", "allowScreenshotCapture", "upworkId", "linkedInId", "isOnline", "isTrackingTime", "minimumBillingRate", "isAway", "isArchived", "fix_relational_custom_fields") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "valueDate", "isActive", "short_description", "description", "startedWorkOn", "endWork", "payPeriod", "billRateValue", "billRateCurrency", "reWeeklyLimit", "offerDate", "acceptDate", "rejectDate", "employeeLevel", "anonymousBonus", "averageIncome", "averageBonus", "totalWorkHours", "averageExpenses", "show_anonymous_bonus", "show_average_bonus", "show_average_expenses", "show_average_income", "show_billrate", "show_payperiod", "show_start_work_on", "isJobSearchActive", "linkedInUrl", "facebookUrl", "instagramUrl", "twitterUrl", "githubUrl", "gitlabUrl", "upworkUrl", "stackoverflowUrl", "isVerified", "isVetted", "totalJobs", "jobSuccess", "profile_link", "userId", "contactId", "organizationPositionId", "isTrackingEnabled", "deletedAt", "allowScreenshotCapture", "upworkId", "linkedInId", "isOnline", "isTrackingTime", "minimumBillingRate", "isAway", "isArchived", "fix_relational_custom_fields" FROM "employee"`
		);
		await queryRunner.query(`DROP TABLE "employee"`);
		await queryRunner.query(`ALTER TABLE "temporary_employee" RENAME TO "employee"`);
		await queryRunner.query(`CREATE INDEX "IDX_175b7be641928a31521224daa8" ON "employee" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_510cb87f5da169e57e694d1a5c" ON "employee" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_4b3303a6b7eb92d237a4379734" ON "employee" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c6a48286f3aa8ae903bee0d1e7" ON "employee" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_96dfbcaa2990df01fe5bb39ccc" ON "employee" ("profile_link") `);
		await queryRunner.query(`CREATE INDEX "IDX_f4b0d329c4a3cf79ffe9d56504" ON "employee" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1c0c1370ecd98040259625e17e" ON "employee" ("contactId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_5e719204dcafa8d6b2ecdeda13" ON "employee" ("organizationPositionId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_04c9e514ed70897f6ad8cadc3c"`);
		await queryRunner.query(`DROP INDEX "IDX_5311a833ff255881454bd5b3b5"`);
		await queryRunner.query(`DROP INDEX "IDX_5443ca8ed830626656d8cfecef"`);
		await queryRunner.query(`DROP INDEX "IDX_0f3ee47a5fb7192d5eb00c71ae"`);
		await queryRunner.query(`DROP INDEX "IDX_b0fc293cf47f31ba512fd29bf0"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_equipment_sharing_policy" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_5311a833ff255881454bd5b3b58" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_5443ca8ed830626656d8cfecef7" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_equipment_sharing_policy"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "isActive", "isArchived", "deletedAt" FROM "equipment_sharing_policy"`
		);
		await queryRunner.query(`DROP TABLE "equipment_sharing_policy"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_equipment_sharing_policy" RENAME TO "equipment_sharing_policy"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_04c9e514ed70897f6ad8cadc3c" ON "equipment_sharing_policy" ("name") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5311a833ff255881454bd5b3b5" ON "equipment_sharing_policy" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5443ca8ed830626656d8cfecef" ON "equipment_sharing_policy" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0f3ee47a5fb7192d5eb00c71ae" ON "equipment_sharing_policy" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b0fc293cf47f31ba512fd29bf0" ON "equipment_sharing_policy" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_0ecfe0ce0cd2b197249d5f1c10"`);
		await queryRunner.query(`DROP INDEX "IDX_acad51a6362806fc499e583e40"`);
		await queryRunner.query(`DROP INDEX "IDX_ea9254be07ae4a8604f0aaab19"`);
		await queryRunner.query(`DROP INDEX "IDX_fa525e61fb3d8d9efec0f364a4"`);
		await queryRunner.query(`DROP INDEX "IDX_70ff31cefa0f578f6fa82d2bcc"`);
		await queryRunner.query(`DROP INDEX "IDX_a734598f5637cf1501288331e3"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_equipment_sharing" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar, "shareRequestDay" datetime, "shareStartDay" datetime, "shareEndDay" datetime, "status" integer NOT NULL, "createdBy" varchar, "createdByName" varchar, "equipmentId" varchar, "equipmentSharingPolicyId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_0ecfe0ce0cd2b197249d5f1c105" FOREIGN KEY ("equipmentSharingPolicyId") REFERENCES "equipment_sharing_policy" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_acad51a6362806fc499e583e402" FOREIGN KEY ("equipmentId") REFERENCES "equipment" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ea9254be07ae4a8604f0aaab196" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_fa525e61fb3d8d9efec0f364a4b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_equipment_sharing"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "shareRequestDay", "shareStartDay", "shareEndDay", "status", "createdBy", "createdByName", "equipmentId", "equipmentSharingPolicyId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "shareRequestDay", "shareStartDay", "shareEndDay", "status", "createdBy", "createdByName", "equipmentId", "equipmentSharingPolicyId", "isActive", "isArchived", "deletedAt" FROM "equipment_sharing"`
		);
		await queryRunner.query(`DROP TABLE "equipment_sharing"`);
		await queryRunner.query(`ALTER TABLE "temporary_equipment_sharing" RENAME TO "equipment_sharing"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_0ecfe0ce0cd2b197249d5f1c10" ON "equipment_sharing" ("equipmentSharingPolicyId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_acad51a6362806fc499e583e40" ON "equipment_sharing" ("equipmentId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ea9254be07ae4a8604f0aaab19" ON "equipment_sharing" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_fa525e61fb3d8d9efec0f364a4" ON "equipment_sharing" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_70ff31cefa0f578f6fa82d2bcc" ON "equipment_sharing" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_a734598f5637cf1501288331e3" ON "equipment_sharing" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_f98ce0d210aa9f91b729d44780"`);
		await queryRunner.query(`DROP INDEX "IDX_fb6808468066849ab7b7454d5f"`);
		await queryRunner.query(`DROP INDEX "IDX_39e1b443404ea7fa42b3d36ccb"`);
		await queryRunner.query(`DROP INDEX "IDX_d8452bfe9f18ced4ce76c4b70b"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_equipment" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "type" varchar NOT NULL, "serialNumber" varchar NOT NULL, "manufacturedYear" numeric, "initialCost" numeric, "currency" varchar NOT NULL, "maxSharePeriod" numeric, "autoApproveShare" boolean NOT NULL, "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_0ab80a66282582ae8b0282508e7" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_f98ce0d210aa9f91b729d447806" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_fb6808468066849ab7b7454d5f3" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_equipment"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "type", "serialNumber", "manufacturedYear", "initialCost", "currency", "maxSharePeriod", "autoApproveShare", "imageId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "type", "serialNumber", "manufacturedYear", "initialCost", "currency", "maxSharePeriod", "autoApproveShare", "imageId", "isActive", "isArchived", "deletedAt" FROM "equipment"`
		);
		await queryRunner.query(`DROP TABLE "equipment"`);
		await queryRunner.query(`ALTER TABLE "temporary_equipment" RENAME TO "equipment"`);
		await queryRunner.query(`CREATE INDEX "IDX_f98ce0d210aa9f91b729d44780" ON "equipment" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_fb6808468066849ab7b7454d5f" ON "equipment" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_39e1b443404ea7fa42b3d36ccb" ON "equipment" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_d8452bfe9f18ced4ce76c4b70b" ON "equipment" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_233c1d351d63441aeb039d1164"`);
		await queryRunner.query(`DROP INDEX "IDX_391d3f83244fea73c619aecadd"`);
		await queryRunner.query(`DROP INDEX "IDX_1a4bd2a8034bb1309b4ea87882"`);
		await queryRunner.query(`DROP INDEX "IDX_f1fac79e17c475f00daa4db3d2"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_estimate_email" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "token" varchar NOT NULL, "email" varchar NOT NULL, "expireDate" datetime NOT NULL, "convertAcceptedEstimates" boolean, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_233c1d351d63441aeb039d1164f" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_391d3f83244fea73c619aecadd9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_estimate_email"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "token", "email", "expireDate", "convertAcceptedEstimates", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "token", "email", "expireDate", "convertAcceptedEstimates", "isActive", "isArchived", "deletedAt" FROM "estimate_email"`
		);
		await queryRunner.query(`DROP TABLE "estimate_email"`);
		await queryRunner.query(`ALTER TABLE "temporary_estimate_email" RENAME TO "estimate_email"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_233c1d351d63441aeb039d1164" ON "estimate_email" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_391d3f83244fea73c619aecadd" ON "estimate_email" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1a4bd2a8034bb1309b4ea87882" ON "estimate_email" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f1fac79e17c475f00daa4db3d2" ON "estimate_email" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_24d905ec9e127ade23754a363d"`);
		await queryRunner.query(`DROP INDEX "IDX_5bde7aeb2c7fb3a421b175871e"`);
		await queryRunner.query(`DROP INDEX "IDX_43459c650957e478203c738574"`);
		await queryRunner.query(`DROP INDEX "IDX_9d5980ff1064e2edb77509d312"`);
		await queryRunner.query(`DROP INDEX "IDX_4b02d8616129f39fca2b10e98b"`);
		await queryRunner.query(`DROP INDEX "IDX_fc8818d6fde74370ec703a0135"`);
		await queryRunner.query(`DROP INDEX "IDX_92fc62260c0c7ff108622850bf"`);
		await queryRunner.query(`DROP INDEX "IDX_f14eee32875b112fab1139b332"`);
		await queryRunner.query(`DROP INDEX "IDX_613cfa5783e164cad10dc27e58"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_event_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "duration" numeric NOT NULL, "durationUnit" varchar, "title" varchar, "description" varchar, "isActive" boolean DEFAULT (1), "employeeId" varchar, "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_24d905ec9e127ade23754a363dd" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_fc8818d6fde74370ec703a01352" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_92fc62260c0c7ff108622850bff" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_event_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "durationUnit", "title", "description", "isActive", "employeeId", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "durationUnit", "title", "description", "isActive", "employeeId", "isArchived", "deletedAt" FROM "event_type"`
		);
		await queryRunner.query(`DROP TABLE "event_type"`);
		await queryRunner.query(`ALTER TABLE "temporary_event_type" RENAME TO "event_type"`);
		await queryRunner.query(`CREATE INDEX "IDX_24d905ec9e127ade23754a363d" ON "event_type" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5bde7aeb2c7fb3a421b175871e" ON "event_type" ("description") `);
		await queryRunner.query(`CREATE INDEX "IDX_43459c650957e478203c738574" ON "event_type" ("title") `);
		await queryRunner.query(`CREATE INDEX "IDX_9d5980ff1064e2edb77509d312" ON "event_type" ("durationUnit") `);
		await queryRunner.query(`CREATE INDEX "IDX_4b02d8616129f39fca2b10e98b" ON "event_type" ("duration") `);
		await queryRunner.query(`CREATE INDEX "IDX_fc8818d6fde74370ec703a0135" ON "event_type" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_92fc62260c0c7ff108622850bf" ON "event_type" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f14eee32875b112fab1139b332" ON "event_type" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_613cfa5783e164cad10dc27e58" ON "event_type" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_9c9bfe5baaf83f53533ff035fc"`);
		await queryRunner.query(`DROP INDEX "IDX_37504e920ee5ca46a4000b89da"`);
		await queryRunner.query(`DROP INDEX "IDX_8376e41fd82aba147a433dc097"`);
		await queryRunner.query(`DROP INDEX "IDX_e9cef5d359dfa48ee5d0cd5fcc"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_expense_category" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_9c9bfe5baaf83f53533ff035fc0" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_37504e920ee5ca46a4000b89da5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_expense_category"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "expense_category"`
		);
		await queryRunner.query(`DROP TABLE "expense_category"`);
		await queryRunner.query(`ALTER TABLE "temporary_expense_category" RENAME TO "expense_category"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_9c9bfe5baaf83f53533ff035fc" ON "expense_category" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_37504e920ee5ca46a4000b89da" ON "expense_category" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8376e41fd82aba147a433dc097" ON "expense_category" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_e9cef5d359dfa48ee5d0cd5fcc" ON "expense_category" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_6d171c9d5f81095436b99da5e6"`);
		await queryRunner.query(`DROP INDEX "IDX_c5fb146726ff128e600f23d0a1"`);
		await queryRunner.query(`DROP INDEX "IDX_846a933af451a33b95b7b198c6"`);
		await queryRunner.query(`DROP INDEX "IDX_b5bb8f62d401475fcc8c2ba35e"`);
		await queryRunner.query(`DROP INDEX "IDX_3826d6ca74a08a8498fa17d330"`);
		await queryRunner.query(`DROP INDEX "IDX_89508d119b1a279c037d9da151"`);
		await queryRunner.query(`DROP INDEX "IDX_cbfebdb1419f9b8036a8b0546e"`);
		await queryRunner.query(`DROP INDEX "IDX_dd8ab9312fb8d787982b9feebf"`);
		await queryRunner.query(`DROP INDEX "IDX_0006d3025b6c92fbd4089b9465"`);
		await queryRunner.query(`DROP INDEX "IDX_97ed0e2b80f2e7ec260fd81cd9"`);
		await queryRunner.query(`DROP INDEX "IDX_5f57d077c28b378a6c885e81c5"`);
		await queryRunner.query(`DROP INDEX "IDX_5e7b197dbac69012dbdb4964f3"`);
		await queryRunner.query(`DROP INDEX "IDX_eacb116ab0521ad9b96f2bb53b"`);
		await queryRunner.query(`DROP INDEX "IDX_42eea5debc63f4d1bf89881c10"`);
		await queryRunner.query(`DROP INDEX "IDX_9971c4171ae051e74b833984a3"`);
		await queryRunner.query(`DROP INDEX "IDX_047b8b5c0782d5a6d4c8bfc1a4"`);
		await queryRunner.query(`DROP INDEX "IDX_1aa0e5fd480214ae4851471e3c"`);
		await queryRunner.query(`DROP INDEX "IDX_d77aeb93f2439ebdf4babaab4c"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_expense" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "amount" numeric NOT NULL, "typeOfExpense" varchar, "notes" varchar, "currency" varchar NOT NULL, "valueDate" datetime, "purpose" varchar, "taxType" varchar, "taxLabel" varchar, "rateValue" numeric, "receipt" varchar, "splitExpense" boolean, "reference" varchar, "status" varchar, "employeeId" varchar, "vendorId" varchar, "categoryId" varchar, "projectId" varchar, "organizationContactId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_42eea5debc63f4d1bf89881c10a" FOREIGN KEY ("categoryId") REFERENCES "expense_category" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_eacb116ab0521ad9b96f2bb53ba" FOREIGN KEY ("vendorId") REFERENCES "organization_vendor" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_6d171c9d5f81095436b99da5e62" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c5fb146726ff128e600f23d0a1b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_5e7b197dbac69012dbdb4964f37" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9971c4171ae051e74b833984a30" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_047b8b5c0782d5a6d4c8bfc1a4e" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_expense"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "amount", "typeOfExpense", "notes", "currency", "valueDate", "purpose", "taxType", "taxLabel", "rateValue", "receipt", "splitExpense", "reference", "status", "employeeId", "vendorId", "categoryId", "projectId", "organizationContactId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "amount", "typeOfExpense", "notes", "currency", "valueDate", "purpose", "taxType", "taxLabel", "rateValue", "receipt", "splitExpense", "reference", "status", "employeeId", "vendorId", "categoryId", "projectId", "organizationContactId", "isActive", "isArchived", "deletedAt" FROM "expense"`
		);
		await queryRunner.query(`DROP TABLE "expense"`);
		await queryRunner.query(`ALTER TABLE "temporary_expense" RENAME TO "expense"`);
		await queryRunner.query(`CREATE INDEX "IDX_6d171c9d5f81095436b99da5e6" ON "expense" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c5fb146726ff128e600f23d0a1" ON "expense" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_846a933af451a33b95b7b198c6" ON "expense" ("amount") `);
		await queryRunner.query(`CREATE INDEX "IDX_b5bb8f62d401475fcc8c2ba35e" ON "expense" ("typeOfExpense") `);
		await queryRunner.query(`CREATE INDEX "IDX_3826d6ca74a08a8498fa17d330" ON "expense" ("notes") `);
		await queryRunner.query(`CREATE INDEX "IDX_89508d119b1a279c037d9da151" ON "expense" ("currency") `);
		await queryRunner.query(`CREATE INDEX "IDX_cbfebdb1419f9b8036a8b0546e" ON "expense" ("purpose") `);
		await queryRunner.query(`CREATE INDEX "IDX_dd8ab9312fb8d787982b9feebf" ON "expense" ("taxType") `);
		await queryRunner.query(`CREATE INDEX "IDX_0006d3025b6c92fbd4089b9465" ON "expense" ("taxLabel") `);
		await queryRunner.query(`CREATE INDEX "IDX_97ed0e2b80f2e7ec260fd81cd9" ON "expense" ("rateValue") `);
		await queryRunner.query(`CREATE INDEX "IDX_5f57d077c28b378a6c885e81c5" ON "expense" ("receipt") `);
		await queryRunner.query(`CREATE INDEX "IDX_5e7b197dbac69012dbdb4964f3" ON "expense" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_eacb116ab0521ad9b96f2bb53b" ON "expense" ("vendorId") `);
		await queryRunner.query(`CREATE INDEX "IDX_42eea5debc63f4d1bf89881c10" ON "expense" ("categoryId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9971c4171ae051e74b833984a3" ON "expense" ("projectId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_047b8b5c0782d5a6d4c8bfc1a4" ON "expense" ("organizationContactId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_1aa0e5fd480214ae4851471e3c" ON "expense" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_d77aeb93f2439ebdf4babaab4c" ON "expense" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_54868607115e2fee3b0b764eec"`);
		await queryRunner.query(`DROP INDEX "IDX_e339340014a6c4e2f57be00b0c"`);
		await queryRunner.query(`DROP INDEX "IDX_d6a626bee6cddf4bc53a493bc3"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_import-history" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "file" varchar NOT NULL, "path" varchar NOT NULL, "size" integer, "status" varchar NOT NULL, "importDate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_54868607115e2fee3b0b764eec2" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_import-history"("id", "createdAt", "updatedAt", "tenantId", "file", "path", "size", "status", "importDate", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "file", "path", "size", "status", "importDate", "isActive", "isArchived", "deletedAt" FROM "import-history"`
		);
		await queryRunner.query(`DROP TABLE "import-history"`);
		await queryRunner.query(`ALTER TABLE "temporary_import-history" RENAME TO "import-history"`);
		await queryRunner.query(`CREATE INDEX "IDX_54868607115e2fee3b0b764eec" ON "import-history" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e339340014a6c4e2f57be00b0c" ON "import-history" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_d6a626bee6cddf4bc53a493bc3" ON "import-history" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_a43b235c35c2c4d3263ada770c"`);
		await queryRunner.query(`DROP INDEX "IDX_b90957ef81e74c43d6ae037560"`);
		await queryRunner.query(`DROP INDEX "IDX_339328a7247aa09d061c642ae1"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_import-record" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "entityType" varchar NOT NULL, "sourceId" varchar NOT NULL, "destinationId" varchar NOT NULL, "importDate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a43b235c35c2c4d3263ada770c6" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_import-record"("id", "createdAt", "updatedAt", "tenantId", "entityType", "sourceId", "destinationId", "importDate", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "entityType", "sourceId", "destinationId", "importDate", "isActive", "isArchived", "deletedAt" FROM "import-record"`
		);
		await queryRunner.query(`DROP TABLE "import-record"`);
		await queryRunner.query(`ALTER TABLE "temporary_import-record" RENAME TO "import-record"`);
		await queryRunner.query(`CREATE INDEX "IDX_a43b235c35c2c4d3263ada770c" ON "import-record" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b90957ef81e74c43d6ae037560" ON "import-record" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_339328a7247aa09d061c642ae1" ON "import-record" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_6d413f9fdd5366b1b9add46483"`);
		await queryRunner.query(`DROP INDEX "IDX_6a94e6b0a572f591288ac44a42"`);
		await queryRunner.query(`DROP INDEX "IDX_8f71803d96dcdbcc6b19bb28d3"`);
		await queryRunner.query(`DROP INDEX "IDX_4ee685760ddb60ff71f763d8f6"`);
		await queryRunner.query(`DROP INDEX "IDX_e4c142f37091b47056012d34ba"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_feature_organization" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "isEnabled" boolean NOT NULL DEFAULT (1), "featureId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_6d413f9fdd5366b1b9add464836" FOREIGN KEY ("featureId") REFERENCES "feature" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_6a94e6b0a572f591288ac44a421" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8f71803d96dcdbcc6b19bb28d38" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_feature_organization"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "isEnabled", "featureId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "isEnabled", "featureId", "isActive", "isArchived", "deletedAt" FROM "feature_organization"`
		);
		await queryRunner.query(`DROP TABLE "feature_organization"`);
		await queryRunner.query(`ALTER TABLE "temporary_feature_organization" RENAME TO "feature_organization"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_6d413f9fdd5366b1b9add46483" ON "feature_organization" ("featureId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6a94e6b0a572f591288ac44a42" ON "feature_organization" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8f71803d96dcdbcc6b19bb28d3" ON "feature_organization" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4ee685760ddb60ff71f763d8f6" ON "feature_organization" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e4c142f37091b47056012d34ba" ON "feature_organization" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_d4a28a8e70d450a412bf0cfb52"`);
		await queryRunner.query(`DROP INDEX "IDX_c30465b5a6e0fae1c8ee7e3120"`);
		await queryRunner.query(`DROP INDEX "IDX_4832be692a2dc63d67e8e93c75"`);
		await queryRunner.query(`DROP INDEX "IDX_5405b67f1df904831a358df7c4"`);
		await queryRunner.query(`DROP INDEX "IDX_a26cc341268d22bd55f06e3ef6"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_feature" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "code" varchar NOT NULL, "isPaid" boolean NOT NULL DEFAULT (0), "description" varchar, "image" varchar, "link" varchar NOT NULL, "status" varchar, "icon" varchar, "parentId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_d4a28a8e70d450a412bf0cfb52a" FOREIGN KEY ("parentId") REFERENCES "feature" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_feature"("id", "createdAt", "updatedAt", "name", "code", "isPaid", "description", "image", "link", "status", "icon", "parentId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "code", "isPaid", "description", "image", "link", "status", "icon", "parentId", "isActive", "isArchived", "deletedAt" FROM "feature"`
		);
		await queryRunner.query(`DROP TABLE "feature"`);
		await queryRunner.query(`ALTER TABLE "temporary_feature" RENAME TO "feature"`);
		await queryRunner.query(`CREATE INDEX "IDX_d4a28a8e70d450a412bf0cfb52" ON "feature" ("parentId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c30465b5a6e0fae1c8ee7e3120" ON "feature" ("code") `);
		await queryRunner.query(`CREATE INDEX "IDX_4832be692a2dc63d67e8e93c75" ON "feature" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_5405b67f1df904831a358df7c4" ON "feature" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_a26cc341268d22bd55f06e3ef6" ON "feature" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_e35d0f7b794ca8850669d12c78"`);
		await queryRunner.query(`DROP INDEX "IDX_d17a5159d888ac6320459eda39"`);
		await queryRunner.query(`DROP INDEX "IDX_bdee8704ebeb79368ff6154fc7"`);
		await queryRunner.query(`DROP INDEX "IDX_4a44905db4ca1e40b62021fdfb"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_goal_general_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "maxObjectives" integer NOT NULL, "maxKeyResults" integer NOT NULL, "employeeCanCreateObjective" boolean NOT NULL, "canOwnObjectives" varchar NOT NULL, "canOwnKeyResult" varchar NOT NULL, "krTypeKPI" boolean NOT NULL, "krTypeTask" boolean NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_e35d0f7b794ca8850669d12c78c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_d17a5159d888ac6320459eda392" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_goal_general_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "maxObjectives", "maxKeyResults", "employeeCanCreateObjective", "canOwnObjectives", "canOwnKeyResult", "krTypeKPI", "krTypeTask", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "maxObjectives", "maxKeyResults", "employeeCanCreateObjective", "canOwnObjectives", "canOwnKeyResult", "krTypeKPI", "krTypeTask", "isActive", "isArchived", "deletedAt" FROM "goal_general_setting"`
		);
		await queryRunner.query(`DROP TABLE "goal_general_setting"`);
		await queryRunner.query(`ALTER TABLE "temporary_goal_general_setting" RENAME TO "goal_general_setting"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_e35d0f7b794ca8850669d12c78" ON "goal_general_setting" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d17a5159d888ac6320459eda39" ON "goal_general_setting" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_bdee8704ebeb79368ff6154fc7" ON "goal_general_setting" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4a44905db4ca1e40b62021fdfb" ON "goal_general_setting" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_df7ab026698c02859ff7540809"`);
		await queryRunner.query(`DROP INDEX "IDX_cc72d4e8e4284dcc8ffbf96caf"`);
		await queryRunner.query(`DROP INDEX "IDX_b4f4701ddb0e973602445ed1c6"`);
		await queryRunner.query(`DROP INDEX "IDX_26311c417ba945c901c65d515d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_goal_kpi_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "type" varchar NOT NULL, "unit" varchar, "operator" varchar NOT NULL, "currentValue" integer NOT NULL, "targetValue" integer NOT NULL, "leadId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_f69e740b066c6469d1c68a4a28b" FOREIGN KEY ("leadId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_df7ab026698c02859ff75408093" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_cc72d4e8e4284dcc8ffbf96caf4" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_goal_kpi_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "unit", "operator", "currentValue", "targetValue", "leadId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "unit", "operator", "currentValue", "targetValue", "leadId", "isActive", "isArchived", "deletedAt" FROM "goal_kpi_template"`
		);
		await queryRunner.query(`DROP TABLE "goal_kpi_template"`);
		await queryRunner.query(`ALTER TABLE "temporary_goal_kpi_template" RENAME TO "goal_kpi_template"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_df7ab026698c02859ff7540809" ON "goal_kpi_template" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_cc72d4e8e4284dcc8ffbf96caf" ON "goal_kpi_template" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b4f4701ddb0e973602445ed1c6" ON "goal_kpi_template" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_26311c417ba945c901c65d515d" ON "goal_kpi_template" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_d4f093ca4eb7c40db68d9a789d"`);
		await queryRunner.query(`DROP INDEX "IDX_e49e37fe88a2725a38a3b05849"`);
		await queryRunner.query(`DROP INDEX "IDX_43aa2985216560cd9fa93f501e"`);
		await queryRunner.query(`DROP INDEX "IDX_cfc393bd9835d8259e73019226"`);
		await queryRunner.query(`DROP INDEX "IDX_a96c22c51607f878c8a98bc488"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_goal_kpi" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "type" varchar NOT NULL, "unit" varchar, "operator" varchar NOT NULL, "currentValue" integer NOT NULL, "targetValue" integer NOT NULL, "leadId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_d4f093ca4eb7c40db68d9a789d0" FOREIGN KEY ("leadId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_e49e37fe88a2725a38a3b058493" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_43aa2985216560cd9fa93f501e5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_goal_kpi"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "unit", "operator", "currentValue", "targetValue", "leadId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "unit", "operator", "currentValue", "targetValue", "leadId", "isActive", "isArchived", "deletedAt" FROM "goal_kpi"`
		);
		await queryRunner.query(`DROP TABLE "goal_kpi"`);
		await queryRunner.query(`ALTER TABLE "temporary_goal_kpi" RENAME TO "goal_kpi"`);
		await queryRunner.query(`CREATE INDEX "IDX_d4f093ca4eb7c40db68d9a789d" ON "goal_kpi" ("leadId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e49e37fe88a2725a38a3b05849" ON "goal_kpi" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_43aa2985216560cd9fa93f501e" ON "goal_kpi" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_cfc393bd9835d8259e73019226" ON "goal_kpi" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_a96c22c51607f878c8a98bc488" ON "goal_kpi" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_5708fe06608c72fc77b65ae651"`);
		await queryRunner.query(`DROP INDEX "IDX_774bf82989475befe301fe1bca"`);
		await queryRunner.query(`DROP INDEX "IDX_cd91c5925942061527b1bc112c"`);
		await queryRunner.query(`DROP INDEX "IDX_056e869152a335f88c38c5b693"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_goal_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "level" varchar NOT NULL, "category" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_5708fe06608c72fc77b65ae6519" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_774bf82989475befe301fe1bca5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_goal_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "level", "category", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "level", "category", "isActive", "isArchived", "deletedAt" FROM "goal_template"`
		);
		await queryRunner.query(`DROP TABLE "goal_template"`);
		await queryRunner.query(`ALTER TABLE "temporary_goal_template" RENAME TO "goal_template"`);
		await queryRunner.query(`CREATE INDEX "IDX_5708fe06608c72fc77b65ae651" ON "goal_template" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_774bf82989475befe301fe1bca" ON "goal_template" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_cd91c5925942061527b1bc112c" ON "goal_template" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_056e869152a335f88c38c5b693" ON "goal_template" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_405bc5bba9ed71aefef84a29f1"`);
		await queryRunner.query(`DROP INDEX "IDX_b56723b53a76ca1c171890c479"`);
		await queryRunner.query(`DROP INDEX "IDX_646565982726362cc2ca4fb807"`);
		await queryRunner.query(`DROP INDEX "IDX_ef4ec26ca3a7e0d8c9e1748be2"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_goal_time_frame" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "status" varchar NOT NULL, "startDate" datetime NOT NULL, "endDate" datetime NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_405bc5bba9ed71aefef84a29f10" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b56723b53a76ca1c171890c479b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_goal_time_frame"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "status", "startDate", "endDate", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "status", "startDate", "endDate", "isActive", "isArchived", "deletedAt" FROM "goal_time_frame"`
		);
		await queryRunner.query(`DROP TABLE "goal_time_frame"`);
		await queryRunner.query(`ALTER TABLE "temporary_goal_time_frame" RENAME TO "goal_time_frame"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_405bc5bba9ed71aefef84a29f1" ON "goal_time_frame" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_b56723b53a76ca1c171890c479" ON "goal_time_frame" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_646565982726362cc2ca4fb807" ON "goal_time_frame" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_ef4ec26ca3a7e0d8c9e1748be2" ON "goal_time_frame" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_4c8b4e887a994182fd6132e640"`);
		await queryRunner.query(`DROP INDEX "IDX_af0a11734e70412b742ac339c8"`);
		await queryRunner.query(`DROP INDEX "IDX_35526ff1063ab5fa2b20e71bd6"`);
		await queryRunner.query(`DROP INDEX "IDX_ac161c1a0c0ff8e83554f097e5"`);
		await queryRunner.query(`DROP INDEX "IDX_c6e8ae55a4db3584686cbf6afe"`);
		await queryRunner.query(`DROP INDEX "IDX_6b4758a5442713070c9a366d0e"`);
		await queryRunner.query(`DROP INDEX "IDX_72641ffde44e1a1627aa2d040f"`);
		await queryRunner.query(`DROP INDEX "IDX_4a2c00a44350a063d75be80ba9"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_goal" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar NOT NULL, "deadline" varchar NOT NULL, "level" varchar NOT NULL, "progress" integer NOT NULL, "ownerTeamId" varchar, "ownerEmployeeId" varchar, "leadId" varchar, "alignedKeyResultId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_4c8b4e887a994182fd6132e6400" FOREIGN KEY ("alignedKeyResultId") REFERENCES "key_result" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_af0a11734e70412b742ac339c88" FOREIGN KEY ("leadId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_35526ff1063ab5fa2b20e71bd66" FOREIGN KEY ("ownerEmployeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ac161c1a0c0ff8e83554f097e5e" FOREIGN KEY ("ownerTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c6e8ae55a4db3584686cbf6afe1" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_6b4758a5442713070c9a366d0e5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_goal"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "deadline", "level", "progress", "ownerTeamId", "ownerEmployeeId", "leadId", "alignedKeyResultId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "deadline", "level", "progress", "ownerTeamId", "ownerEmployeeId", "leadId", "alignedKeyResultId", "isActive", "isArchived", "deletedAt" FROM "goal"`
		);
		await queryRunner.query(`DROP TABLE "goal"`);
		await queryRunner.query(`ALTER TABLE "temporary_goal" RENAME TO "goal"`);
		await queryRunner.query(`CREATE INDEX "IDX_4c8b4e887a994182fd6132e640" ON "goal" ("alignedKeyResultId") `);
		await queryRunner.query(`CREATE INDEX "IDX_af0a11734e70412b742ac339c8" ON "goal" ("leadId") `);
		await queryRunner.query(`CREATE INDEX "IDX_35526ff1063ab5fa2b20e71bd6" ON "goal" ("ownerEmployeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ac161c1a0c0ff8e83554f097e5" ON "goal" ("ownerTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c6e8ae55a4db3584686cbf6afe" ON "goal" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_6b4758a5442713070c9a366d0e" ON "goal" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_72641ffde44e1a1627aa2d040f" ON "goal" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_4a2c00a44350a063d75be80ba9" ON "goal" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_01856a9a730b7e79d70aa661cb"`);
		await queryRunner.query(`DROP INDEX "IDX_d3675304df9971cccf96d9a7c3"`);
		await queryRunner.query(`DROP INDEX "IDX_9d44ce9eb8689e578b941a6a54"`);
		await queryRunner.query(`DROP INDEX "IDX_af1a212cb378bb0eed51c1b2bc"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_image_asset" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar, "url" varchar NOT NULL, "width" integer NOT NULL DEFAULT (0), "height" integer NOT NULL DEFAULT (0), "isFeatured" boolean NOT NULL DEFAULT (0), "thumb" varchar, "size" numeric, "externalProviderId" varchar, "storageProvider" varchar CHECK( "storageProvider" IN ('LOCAL','S3','WASABI','CLOUDINARY','DIGITALOCEAN') ), "deletedAt" datetime, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "archivedAt" datetime, CONSTRAINT "FK_01856a9a730b7e79d70aa661cb0" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d3675304df9971cccf96d9a7c34" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_image_asset"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "url", "width", "height", "isFeatured", "thumb", "size", "externalProviderId", "storageProvider", "deletedAt", "isActive", "isArchived") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "url", "width", "height", "isFeatured", "thumb", "size", "externalProviderId", "storageProvider", "deletedAt", "isActive", "isArchived" FROM "image_asset"`
		);
		await queryRunner.query(`DROP TABLE "image_asset"`);
		await queryRunner.query(`ALTER TABLE "temporary_image_asset" RENAME TO "image_asset"`);
		await queryRunner.query(`CREATE INDEX "IDX_01856a9a730b7e79d70aa661cb" ON "image_asset" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d3675304df9971cccf96d9a7c3" ON "image_asset" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9d44ce9eb8689e578b941a6a54" ON "image_asset" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_af1a212cb378bb0eed51c1b2bc" ON "image_asset" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_29fbd3a17710a27e6f856072c0"`);
		await queryRunner.query(`DROP INDEX "IDX_a05d52b7ffe89140f9cbcf114b"`);
		await queryRunner.query(`DROP INDEX "IDX_20207d9f915066dfbc2210bcf1"`);
		await queryRunner.query(`DROP INDEX "IDX_86b5a121b3775a1b0b7fa75680"`);
		await queryRunner.query(`DROP INDEX "IDX_bd39a647a2843177723ddf733e"`);
		await queryRunner.query(`DROP INDEX "IDX_64409de4711cd14e2c43371cc0"`);
		await queryRunner.query(`DROP INDEX "IDX_8608b275644cfc7a0f3f585081"`);
		await queryRunner.query(`DROP INDEX "IDX_904ab9ee6ac5e74bf3616c8ccb"`);
		await queryRunner.query(`DROP INDEX "IDX_aedb8b1d10c498309bed9edf53"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_income" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "amount" numeric NOT NULL, "currency" varchar NOT NULL, "valueDate" datetime, "notes" varchar, "isBonus" boolean, "reference" varchar, "employeeId" varchar, "clientId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_29fbd3a17710a27e6f856072c01" FOREIGN KEY ("clientId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_a05d52b7ffe89140f9cbcf114b3" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_64409de4711cd14e2c43371cc02" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8608b275644cfc7a0f3f5850814" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_income"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "amount", "currency", "valueDate", "notes", "isBonus", "reference", "employeeId", "clientId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "amount", "currency", "valueDate", "notes", "isBonus", "reference", "employeeId", "clientId", "isActive", "isArchived", "deletedAt" FROM "income"`
		);
		await queryRunner.query(`DROP TABLE "income"`);
		await queryRunner.query(`ALTER TABLE "temporary_income" RENAME TO "income"`);
		await queryRunner.query(`CREATE INDEX "IDX_29fbd3a17710a27e6f856072c0" ON "income" ("clientId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a05d52b7ffe89140f9cbcf114b" ON "income" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_20207d9f915066dfbc2210bcf1" ON "income" ("notes") `);
		await queryRunner.query(`CREATE INDEX "IDX_86b5a121b3775a1b0b7fa75680" ON "income" ("currency") `);
		await queryRunner.query(`CREATE INDEX "IDX_bd39a647a2843177723ddf733e" ON "income" ("amount") `);
		await queryRunner.query(`CREATE INDEX "IDX_64409de4711cd14e2c43371cc0" ON "income" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8608b275644cfc7a0f3f585081" ON "income" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_904ab9ee6ac5e74bf3616c8ccb" ON "income" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_aedb8b1d10c498309bed9edf53" ON "income" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_b208a754c7a538cb3422f39f5b"`);
		await queryRunner.query(`DROP INDEX "IDX_d5ac36aa3d5919908414154fca"`);
		await queryRunner.query(`DROP INDEX "IDX_3fb863167095805e33f38a0fdc"`);
		await queryRunner.query(`DROP INDEX "IDX_6d43cc33c80221dbe4854b38e6"`);
		await queryRunner.query(`DROP INDEX "IDX_101cd83aa75949cfb5b8eec084"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_integration_entity_setting_tied" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "entity" varchar NOT NULL, "sync" boolean NOT NULL, "integrationEntitySettingId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_3fb863167095805e33f38a0fdcc" FOREIGN KEY ("integrationEntitySettingId") REFERENCES "integration_entity_setting" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_b208a754c7a538cb3422f39f5b9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d5ac36aa3d5919908414154fca0" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_integration_entity_setting_tied"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sync", "integrationEntitySettingId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sync", "integrationEntitySettingId", "isActive", "isArchived", "deletedAt" FROM "integration_entity_setting_tied"`
		);
		await queryRunner.query(`DROP TABLE "integration_entity_setting_tied"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_integration_entity_setting_tied" RENAME TO "integration_entity_setting_tied"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b208a754c7a538cb3422f39f5b" ON "integration_entity_setting_tied" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d5ac36aa3d5919908414154fca" ON "integration_entity_setting_tied" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3fb863167095805e33f38a0fdc" ON "integration_entity_setting_tied" ("integrationEntitySettingId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6d43cc33c80221dbe4854b38e6" ON "integration_entity_setting_tied" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_101cd83aa75949cfb5b8eec084" ON "integration_entity_setting_tied" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_23e9cfcf1bfff07dcc3254378d"`);
		await queryRunner.query(`DROP INDEX "IDX_c6c01e38eebd8b26b9214b9044"`);
		await queryRunner.query(`DROP INDEX "IDX_f80ff4ebbf0b33a67dce598911"`);
		await queryRunner.query(`DROP INDEX "IDX_e3d407c5532edaceaa4df34623"`);
		await queryRunner.query(`DROP INDEX "IDX_1c653ebceca3b9c8766131db91"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_integration_entity_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "entity" varchar NOT NULL, "sync" boolean NOT NULL, "integrationId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_f80ff4ebbf0b33a67dce5989117" FOREIGN KEY ("integrationId") REFERENCES "integration_tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_23e9cfcf1bfff07dcc3254378df" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c6c01e38eebd8b26b9214b90441" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_integration_entity_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sync", "integrationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sync", "integrationId", "isActive", "isArchived", "deletedAt" FROM "integration_entity_setting"`
		);
		await queryRunner.query(`DROP TABLE "integration_entity_setting"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_integration_entity_setting" RENAME TO "integration_entity_setting"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_23e9cfcf1bfff07dcc3254378d" ON "integration_entity_setting" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c6c01e38eebd8b26b9214b9044" ON "integration_entity_setting" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f80ff4ebbf0b33a67dce598911" ON "integration_entity_setting" ("integrationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e3d407c5532edaceaa4df34623" ON "integration_entity_setting" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_1c653ebceca3b9c8766131db91" ON "integration_entity_setting" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_eec3d6064578610ddc609dd360"`);
		await queryRunner.query(`DROP INDEX "IDX_7022dafd72c1b92f7d50691441"`);
		await queryRunner.query(`DROP INDEX "IDX_c327ea26bda3d349a1eceb5658"`);
		await queryRunner.query(`DROP INDEX "IDX_c79464c4ccf7e5195d69675c15"`);
		await queryRunner.query(`DROP INDEX "IDX_e63f4791631e7572ca213ac4a4"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_integration_map" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "entity" varchar NOT NULL, "sourceId" varchar NOT NULL, "gauzyId" varchar NOT NULL, "integrationId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_c327ea26bda3d349a1eceb5658e" FOREIGN KEY ("integrationId") REFERENCES "integration_tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_eec3d6064578610ddc609dd360e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7022dafd72c1b92f7d506914411" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_integration_map"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sourceId", "gauzyId", "integrationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sourceId", "gauzyId", "integrationId", "isActive", "isArchived", "deletedAt" FROM "integration_map"`
		);
		await queryRunner.query(`DROP TABLE "integration_map"`);
		await queryRunner.query(`ALTER TABLE "temporary_integration_map" RENAME TO "integration_map"`);
		await queryRunner.query(`CREATE INDEX "IDX_eec3d6064578610ddc609dd360" ON "integration_map" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_7022dafd72c1b92f7d50691441" ON "integration_map" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c327ea26bda3d349a1eceb5658" ON "integration_map" ("integrationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_c79464c4ccf7e5195d69675c15" ON "integration_map" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_e63f4791631e7572ca213ac4a4" ON "integration_map" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_34daf030004ad37b88f1f3d863"`);
		await queryRunner.query(`DROP INDEX "IDX_369eaafb13afe9903a170077ed"`);
		await queryRunner.query(`DROP INDEX "IDX_954c6b05297814776d9cb66ca7"`);
		await queryRunner.query(`DROP INDEX "IDX_97c0d54aae21ccdbb5c3581642"`);
		await queryRunner.query(`DROP INDEX "IDX_f515574f1251562c52fe25b6a3"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_integration_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "settingsName" varchar NOT NULL, "settingsValue" varchar NOT NULL, "integrationId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_34daf030004ad37b88f1f3d863c" FOREIGN KEY ("integrationId") REFERENCES "integration_tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_369eaafb13afe9903a170077edb" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_954c6b05297814776d9cb66ca77" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_integration_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "settingsName", "settingsValue", "integrationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "settingsName", "settingsValue", "integrationId", "isActive", "isArchived", "deletedAt" FROM "integration_setting"`
		);
		await queryRunner.query(`DROP TABLE "integration_setting"`);
		await queryRunner.query(`ALTER TABLE "temporary_integration_setting" RENAME TO "integration_setting"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_34daf030004ad37b88f1f3d863" ON "integration_setting" ("integrationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_369eaafb13afe9903a170077ed" ON "integration_setting" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_954c6b05297814776d9cb66ca7" ON "integration_setting" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_97c0d54aae21ccdbb5c3581642" ON "integration_setting" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_f515574f1251562c52fe25b6a3" ON "integration_setting" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_5487f9197c106d774bae20991c"`);
		await queryRunner.query(`DROP INDEX "IDX_c5ff5d3ab364b7da72bf3fbb46"`);
		await queryRunner.query(`DROP INDEX "IDX_33ab224e7755a46fff5bc1e64e"`);
		await queryRunner.query(`DROP INDEX "IDX_24e37d03ef224f1a16a35069c2"`);
		await queryRunner.query(`DROP INDEX "IDX_0d6ddc27d687ca879042c5f3ce"`);
		await queryRunner.query(`DROP INDEX "IDX_d0532ed8020981736b58748de6"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_integration_tenant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "integrationId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "lastSyncedAt" datetime DEFAULT (CURRENT_TIMESTAMP), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_33ab224e7755a46fff5bc1e64e5" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_24e37d03ef224f1a16a35069c2c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0d6ddc27d687ca879042c5f3ce3" FOREIGN KEY ("integrationId") REFERENCES "integration" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_integration_tenant"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "integrationId", "isActive", "isArchived", "lastSyncedAt", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "integrationId", "isActive", "isArchived", "lastSyncedAt", "deletedAt" FROM "integration_tenant"`
		);
		await queryRunner.query(`DROP TABLE "integration_tenant"`);
		await queryRunner.query(`ALTER TABLE "temporary_integration_tenant" RENAME TO "integration_tenant"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_5487f9197c106d774bae20991c" ON "integration_tenant" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_c5ff5d3ab364b7da72bf3fbb46" ON "integration_tenant" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_33ab224e7755a46fff5bc1e64e" ON "integration_tenant" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_24e37d03ef224f1a16a35069c2" ON "integration_tenant" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_0d6ddc27d687ca879042c5f3ce" ON "integration_tenant" ("integrationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d0532ed8020981736b58748de6" ON "integration_tenant" ("lastSyncedAt") `
		);
		await queryRunner.query(`DROP INDEX "IDX_34a49d941459e1031c766b941f"`);
		await queryRunner.query(`DROP INDEX "IDX_e7b65ef60492b1c34007736f99"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_integration_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "groupName" varchar NOT NULL, "order" integer NOT NULL, "description" varchar, "icon" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "UQ_be0d67f4df84f036fab2ed89c47" UNIQUE ("name"))`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_integration_type"("id", "createdAt", "updatedAt", "name", "groupName", "order", "description", "icon", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "groupName", "order", "description", "icon", "isActive", "isArchived", "deletedAt" FROM "integration_type"`
		);
		await queryRunner.query(`DROP TABLE "integration_type"`);
		await queryRunner.query(`ALTER TABLE "temporary_integration_type" RENAME TO "integration_type"`);
		await queryRunner.query(`CREATE INDEX "IDX_34a49d941459e1031c766b941f" ON "integration_type" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_e7b65ef60492b1c34007736f99" ON "integration_type" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_24981cd300007cf88601c2d616"`);
		await queryRunner.query(`DROP INDEX "IDX_85d7b0f07f3e3707b4586670a9"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_integration" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "imgSrc" varchar, "isComingSoon" boolean NOT NULL DEFAULT (0), "isPaid" boolean NOT NULL DEFAULT (0), "version" varchar, "docUrl" varchar, "isFreeTrial" boolean NOT NULL DEFAULT (0), "freeTrialPeriod" numeric DEFAULT (0), "order" integer, "provider" varchar, "redirectUrl" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "UQ_938c19d92ad3f290ff5fc163531" UNIQUE ("name"))`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_integration"("id", "createdAt", "updatedAt", "name", "imgSrc", "isComingSoon", "isPaid", "version", "docUrl", "isFreeTrial", "freeTrialPeriod", "order", "provider", "redirectUrl", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "imgSrc", "isComingSoon", "isPaid", "version", "docUrl", "isFreeTrial", "freeTrialPeriod", "order", "provider", "redirectUrl", "isActive", "isArchived", "deletedAt" FROM "integration"`
		);
		await queryRunner.query(`DROP TABLE "integration"`);
		await queryRunner.query(`ALTER TABLE "temporary_integration" RENAME TO "integration"`);
		await queryRunner.query(`CREATE INDEX "IDX_24981cd300007cf88601c2d616" ON "integration" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_85d7b0f07f3e3707b4586670a9" ON "integration" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_7c2328f76efb850b8114797247"`);
		await queryRunner.query(`DROP INDEX "IDX_68eef4ab86b67747f24f288a16"`);
		await queryRunner.query(`DROP INDEX "IDX_5a182e8b3e225b14ddf6df7e6c"`);
		await queryRunner.query(`DROP INDEX "IDX_900a3ed40499c79c1c289fec28"`);
		await queryRunner.query(`DROP INDEX "IDX_91bfeec7a9574f458e5b592472"`);
		await queryRunner.query(`DROP INDEX "IDX_bd44bcb10034bc0c5fe4427b3e"`);
		await queryRunner.query(`DROP INDEX "IDX_3cef860504647ccd52d39d7dc2"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_invite" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "token" varchar NOT NULL, "email" varchar NOT NULL, "status" varchar NOT NULL, "expireDate" datetime, "actionDate" datetime, "invitedById" varchar, "roleId" varchar, "code" varchar, "fullName" varchar, "userId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_7c2328f76efb850b81147972476" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_68eef4ab86b67747f24f288a16c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_5a182e8b3e225b14ddf6df7e6c3" FOREIGN KEY ("invitedById") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_900a3ed40499c79c1c289fec284" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_91bfeec7a9574f458e5b592472d" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_invite"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "token", "email", "status", "expireDate", "actionDate", "invitedById", "roleId", "code", "fullName", "userId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "token", "email", "status", "expireDate", "actionDate", "invitedById", "roleId", "code", "fullName", "userId", "isActive", "isArchived", "deletedAt" FROM "invite"`
		);
		await queryRunner.query(`DROP TABLE "invite"`);
		await queryRunner.query(`ALTER TABLE "temporary_invite" RENAME TO "invite"`);
		await queryRunner.query(`CREATE INDEX "IDX_7c2328f76efb850b8114797247" ON "invite" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_68eef4ab86b67747f24f288a16" ON "invite" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5a182e8b3e225b14ddf6df7e6c" ON "invite" ("invitedById") `);
		await queryRunner.query(`CREATE INDEX "IDX_900a3ed40499c79c1c289fec28" ON "invite" ("roleId") `);
		await queryRunner.query(`CREATE INDEX "IDX_91bfeec7a9574f458e5b592472" ON "invite" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_bd44bcb10034bc0c5fe4427b3e" ON "invite" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_3cef860504647ccd52d39d7dc2" ON "invite" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_8106063f79cce8e67790d79092"`);
		await queryRunner.query(`DROP INDEX "IDX_483eb296a94d821ebedb375858"`);
		await queryRunner.query(`DROP INDEX "IDX_31ec3d5a6b0985cec544c64217"`);
		await queryRunner.query(`DROP INDEX "IDX_da2893697d57368470952a76f6"`);
		await queryRunner.query(`DROP INDEX "IDX_856f24297f120604f8ae294276"`);
		await queryRunner.query(`DROP INDEX "IDX_cc0ac824ba89deda98bb418e8c"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_invoice_estimate_history" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "action" varchar NOT NULL, "userId" varchar, "invoiceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "title" varchar, "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_cc0ac824ba89deda98bb418e8ca" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_856f24297f120604f8ae2942769" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_da2893697d57368470952a76f65" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_31ec3d5a6b0985cec544c642178" FOREIGN KEY ("invoiceId") REFERENCES "invoice" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_invoice_estimate_history"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "action", "userId", "invoiceId", "isActive", "isArchived", "title", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "action", "userId", "invoiceId", "isActive", "isArchived", "title", "deletedAt" FROM "invoice_estimate_history"`
		);
		await queryRunner.query(`DROP TABLE "invoice_estimate_history"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_invoice_estimate_history" RENAME TO "invoice_estimate_history"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8106063f79cce8e67790d79092" ON "invoice_estimate_history" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_483eb296a94d821ebedb375858" ON "invoice_estimate_history" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_31ec3d5a6b0985cec544c64217" ON "invoice_estimate_history" ("invoiceId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_da2893697d57368470952a76f6" ON "invoice_estimate_history" ("userId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_856f24297f120604f8ae294276" ON "invoice_estimate_history" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_cc0ac824ba89deda98bb418e8c" ON "invoice_estimate_history" ("tenantId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e89749c8e8258b2ec110c0776f"`);
		await queryRunner.query(`DROP INDEX "IDX_f78214cd9de76e80fe8a6305f5"`);
		await queryRunner.query(`DROP INDEX "IDX_e2835fd8776ae5d56d892e087e"`);
		await queryRunner.query(`DROP INDEX "IDX_b7da14d2b61cf1dd5c65188b9c"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_invoice_item" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "description" varchar, "price" numeric NOT NULL, "quantity" numeric NOT NULL, "totalValue" numeric NOT NULL, "applyTax" boolean, "applyDiscount" boolean, "expenseId" varchar, "invoiceId" varchar, "taskId" varchar, "employeeId" varchar, "projectId" varchar, "productId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_e558df60d7d9a3e412ef0bbb844" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_16f1d0e74b4d33e59c0eabdaac7" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_d4d92abde074b3da8054d7cfbc7" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_62d486728b272e3b4d23a6b5db6" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_553d5aac210d22fdca5c8d48ead" FOREIGN KEY ("invoiceId") REFERENCES "invoice" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_897c33b49a04cf3db7acd336afc" FOREIGN KEY ("expenseId") REFERENCES "expense" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_e89749c8e8258b2ec110c0776ff" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f78214cd9de76e80fe8a6305f52" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_invoice_item"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "price", "quantity", "totalValue", "applyTax", "applyDiscount", "expenseId", "invoiceId", "taskId", "employeeId", "projectId", "productId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "price", "quantity", "totalValue", "applyTax", "applyDiscount", "expenseId", "invoiceId", "taskId", "employeeId", "projectId", "productId", "isActive", "isArchived", "deletedAt" FROM "invoice_item"`
		);
		await queryRunner.query(`DROP TABLE "invoice_item"`);
		await queryRunner.query(`ALTER TABLE "temporary_invoice_item" RENAME TO "invoice_item"`);
		await queryRunner.query(`CREATE INDEX "IDX_e89749c8e8258b2ec110c0776f" ON "invoice_item" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f78214cd9de76e80fe8a6305f5" ON "invoice_item" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e2835fd8776ae5d56d892e087e" ON "invoice_item" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_b7da14d2b61cf1dd5c65188b9c" ON "invoice_item" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_d9e965da0f63c94983d3a1006a"`);
		await queryRunner.query(`DROP INDEX "IDX_b5c33892e630b66c65d623baf8"`);
		await queryRunner.query(`DROP INDEX "IDX_058ef835f99e28fc6717cd7c80"`);
		await queryRunner.query(`DROP INDEX "IDX_7fb52a5f267f53b7d93af3d8c3"`);
		await queryRunner.query(`DROP INDEX "IDX_850ca385c1985c1808cd4ea241"`);
		await queryRunner.query(`DROP INDEX "IDX_eabacf7474d75e53d7b7046f3e"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_invoice" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "invoiceDate" datetime, "invoiceNumber" numeric, "dueDate" datetime, "currency" varchar NOT NULL, "discountValue" numeric NOT NULL, "paid" boolean, "tax" numeric, "tax2" numeric, "terms" varchar NOT NULL, "totalValue" numeric, "status" varchar NOT NULL, "isEstimate" boolean, "isAccepted" boolean, "discountType" varchar, "taxType" varchar, "tax2Type" varchar, "invoiceType" varchar, "sentTo" varchar, "organizationContactId" varchar, "internalNote" varchar, "alreadyPaid" numeric, "amountDue" numeric, "hasRemainingAmountInvoiced" boolean, "token" varchar, "isArchived" boolean DEFAULT (0), "fromOrganizationId" varchar NOT NULL, "toContactId" varchar, "isActive" boolean DEFAULT (1), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "UQ_d7bed97fb47876e03fd7d7c285a" UNIQUE ("invoiceNumber"), CONSTRAINT "FK_d9e965da0f63c94983d3a1006ac" FOREIGN KEY ("toContactId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_b5c33892e630b66c65d623baf8e" FOREIGN KEY ("fromOrganizationId") REFERENCES "organization" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_058ef835f99e28fc6717cd7c80f" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7fb52a5f267f53b7d93af3d8c3c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_invoice"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "invoiceDate", "invoiceNumber", "dueDate", "currency", "discountValue", "paid", "tax", "tax2", "terms", "totalValue", "status", "isEstimate", "isAccepted", "discountType", "taxType", "tax2Type", "invoiceType", "sentTo", "organizationContactId", "internalNote", "alreadyPaid", "amountDue", "hasRemainingAmountInvoiced", "token", "isArchived", "fromOrganizationId", "toContactId", "isActive", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "invoiceDate", "invoiceNumber", "dueDate", "currency", "discountValue", "paid", "tax", "tax2", "terms", "totalValue", "status", "isEstimate", "isAccepted", "discountType", "taxType", "tax2Type", "invoiceType", "sentTo", "organizationContactId", "internalNote", "alreadyPaid", "amountDue", "hasRemainingAmountInvoiced", "token", "isArchived", "fromOrganizationId", "toContactId", "isActive", "deletedAt" FROM "invoice"`
		);
		await queryRunner.query(`DROP TABLE "invoice"`);
		await queryRunner.query(`ALTER TABLE "temporary_invoice" RENAME TO "invoice"`);
		await queryRunner.query(`CREATE INDEX "IDX_d9e965da0f63c94983d3a1006a" ON "invoice" ("toContactId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b5c33892e630b66c65d623baf8" ON "invoice" ("fromOrganizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_058ef835f99e28fc6717cd7c80" ON "invoice" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7fb52a5f267f53b7d93af3d8c3" ON "invoice" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_850ca385c1985c1808cd4ea241" ON "invoice" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_eabacf7474d75e53d7b7046f3e" ON "invoice" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_46426ea45456e240a092b73204"`);
		await queryRunner.query(`DROP INDEX "IDX_fab6b6200b9ed6fd002c1ff62a"`);
		await queryRunner.query(`DROP INDEX "IDX_86c09eb673b0e66129dbdc7211"`);
		await queryRunner.query(`DROP INDEX "IDX_f4e813d72dc732f16497ee2c52"`);
		await queryRunner.query(`DROP INDEX "IDX_aa0e9b0cfcba1926925b025512"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_key_result_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "type" varchar NOT NULL, "unit" varchar, "targetValue" integer, "initialValue" integer, "deadline" varchar NOT NULL, "kpiId" varchar, "goalId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_46426ea45456e240a092b732047" FOREIGN KEY ("goalId") REFERENCES "goal_template" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4bc62c3d2ffdd6f9c7f8b3dcd1c" FOREIGN KEY ("kpiId") REFERENCES "goal_kpi_template" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fab6b6200b9ed6fd002c1ff62ab" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_86c09eb673b0e66129dbdc72111" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_key_result_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "type", "unit", "targetValue", "initialValue", "deadline", "kpiId", "goalId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "type", "unit", "targetValue", "initialValue", "deadline", "kpiId", "goalId", "isActive", "isArchived", "deletedAt" FROM "key_result_template"`
		);
		await queryRunner.query(`DROP TABLE "key_result_template"`);
		await queryRunner.query(`ALTER TABLE "temporary_key_result_template" RENAME TO "key_result_template"`);
		await queryRunner.query(`CREATE INDEX "IDX_46426ea45456e240a092b73204" ON "key_result_template" ("goalId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_fab6b6200b9ed6fd002c1ff62a" ON "key_result_template" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_86c09eb673b0e66129dbdc7211" ON "key_result_template" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f4e813d72dc732f16497ee2c52" ON "key_result_template" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_aa0e9b0cfcba1926925b025512" ON "key_result_template" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_fd4b0cb7a44ed914acdda55e29"`);
		await queryRunner.query(`DROP INDEX "IDX_cd9cbc0d5b6d62dbb63c3b3a65"`);
		await queryRunner.query(`DROP INDEX "IDX_12b8b54f416ec9f5ec002f0a83"`);
		await queryRunner.query(`DROP INDEX "IDX_94aad97b26aede6545a3226fb3"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_key_result_update" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "update" integer NOT NULL, "progress" integer NOT NULL, "owner" varchar NOT NULL, "status" varchar NOT NULL, "keyResultId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_7497a70a581e5f56f792015dd37" FOREIGN KEY ("keyResultId") REFERENCES "key_result" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_fd4b0cb7a44ed914acdda55e29c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_cd9cbc0d5b6d62dbb63c3b3a65b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_key_result_update"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "update", "progress", "owner", "status", "keyResultId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "update", "progress", "owner", "status", "keyResultId", "isActive", "isArchived", "deletedAt" FROM "key_result_update"`
		);
		await queryRunner.query(`DROP TABLE "key_result_update"`);
		await queryRunner.query(`ALTER TABLE "temporary_key_result_update" RENAME TO "key_result_update"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_fd4b0cb7a44ed914acdda55e29" ON "key_result_update" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_cd9cbc0d5b6d62dbb63c3b3a65" ON "key_result_update" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_12b8b54f416ec9f5ec002f0a83" ON "key_result_update" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_94aad97b26aede6545a3226fb3" ON "key_result_update" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_3e1d08761a717c1dd71fe67249"`);
		await queryRunner.query(`DROP INDEX "IDX_4e1e975124c1d717814a4bb2ec"`);
		await queryRunner.query(`DROP INDEX "IDX_d8547e21ccb8e37ac9f0d69c1a"`);
		await queryRunner.query(`DROP INDEX "IDX_38dc003f3484eff4b59918e9ae"`);
		await queryRunner.query(`DROP INDEX "IDX_c89adeff0de3aedb2e772a5bf4"`);
		await queryRunner.query(`DROP INDEX "IDX_5880347716f9ec5056ec15112c"`);
		await queryRunner.query(`DROP INDEX "IDX_d1f45ca98f17bd84a5e430feaf"`);
		await queryRunner.query(`DROP INDEX "IDX_8ac2c6b487d03157adda874789"`);
		await queryRunner.query(`DROP INDEX "IDX_9b62dd2dddcde032f46a981733"`);
		await queryRunner.query(`DROP INDEX "IDX_8889e2618366faefa575a8049b"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_key_result" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar NOT NULL, "type" varchar NOT NULL, "targetValue" integer, "initialValue" integer, "unit" varchar, "update" integer NOT NULL, "progress" integer NOT NULL, "deadline" varchar NOT NULL, "hardDeadline" datetime, "softDeadline" datetime, "status" varchar NOT NULL, "weight" varchar, "ownerId" varchar NOT NULL, "leadId" varchar, "projectId" varchar, "taskId" varchar, "kpiId" varchar, "goalId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_3e1d08761a717c1dd71fe67249b" FOREIGN KEY ("goalId") REFERENCES "goal" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4e1e975124c1d717814a4bb2ec8" FOREIGN KEY ("kpiId") REFERENCES "goal_kpi" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d8547e21ccb8e37ac9f0d69c1af" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_38dc003f3484eff4b59918e9ae3" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_c89adeff0de3aedb2e772a5bf4c" FOREIGN KEY ("leadId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_5880347716f9ec5056ec15112cc" FOREIGN KEY ("ownerId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d1f45ca98f17bd84a5e430feaf4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8ac2c6b487d03157adda874789f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_key_result"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "targetValue", "initialValue", "unit", "update", "progress", "deadline", "hardDeadline", "softDeadline", "status", "weight", "ownerId", "leadId", "projectId", "taskId", "kpiId", "goalId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "targetValue", "initialValue", "unit", "update", "progress", "deadline", "hardDeadline", "softDeadline", "status", "weight", "ownerId", "leadId", "projectId", "taskId", "kpiId", "goalId", "isActive", "isArchived", "deletedAt" FROM "key_result"`
		);
		await queryRunner.query(`DROP TABLE "key_result"`);
		await queryRunner.query(`ALTER TABLE "temporary_key_result" RENAME TO "key_result"`);
		await queryRunner.query(`CREATE INDEX "IDX_3e1d08761a717c1dd71fe67249" ON "key_result" ("goalId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4e1e975124c1d717814a4bb2ec" ON "key_result" ("kpiId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d8547e21ccb8e37ac9f0d69c1a" ON "key_result" ("taskId") `);
		await queryRunner.query(`CREATE INDEX "IDX_38dc003f3484eff4b59918e9ae" ON "key_result" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c89adeff0de3aedb2e772a5bf4" ON "key_result" ("leadId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5880347716f9ec5056ec15112c" ON "key_result" ("ownerId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d1f45ca98f17bd84a5e430feaf" ON "key_result" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8ac2c6b487d03157adda874789" ON "key_result" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9b62dd2dddcde032f46a981733" ON "key_result" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8889e2618366faefa575a8049b" ON "key_result" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_3a7abee35dfa3c90ed491583eb"`);
		await queryRunner.query(`DROP INDEX "IDX_15fcb8179bc7b0642ca78da69e"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_language" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "code" varchar, "is_system" boolean DEFAULT (1), "description" varchar, "color" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "UQ_465b3173cdddf0ac2d3fe73a33c" UNIQUE ("code"))`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_language"("id", "createdAt", "updatedAt", "name", "code", "is_system", "description", "color", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "code", "is_system", "description", "color", "isActive", "isArchived", "deletedAt" FROM "language"`
		);
		await queryRunner.query(`DROP TABLE "language"`);
		await queryRunner.query(`ALTER TABLE "temporary_language" RENAME TO "language"`);
		await queryRunner.query(`CREATE INDEX "IDX_3a7abee35dfa3c90ed491583eb" ON "language" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_15fcb8179bc7b0642ca78da69e" ON "language" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_20acc3c3a6c900c6ef9fc68199"`);
		await queryRunner.query(`DROP INDEX "IDX_e03ddff05652be527e04abdc56"`);
		await queryRunner.query(`DROP INDEX "IDX_d306a524b507f72fa8550aeffe"`);
		await queryRunner.query(`DROP INDEX "IDX_533144d7ae94180235ea456625"`);
		await queryRunner.query(`DROP INDEX "IDX_a03be8a86e528e2720504a041f"`);
		await queryRunner.query(`DROP INDEX "IDX_0a0f972564e74c9c4905e3abcb"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_merchant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "code" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar, "description" varchar, "active" boolean NOT NULL DEFAULT (1), "currency" varchar NOT NULL DEFAULT ('USD'), "contactId" varchar, "logoId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "REL_e03ddff05652be527e04abdc56" UNIQUE ("contactId"), CONSTRAINT "FK_20acc3c3a6c900c6ef9fc681996" FOREIGN KEY ("logoId") REFERENCES "image_asset" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_e03ddff05652be527e04abdc56f" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d306a524b507f72fa8550aeffe4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_533144d7ae94180235ea456625b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_merchant"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "email", "phone", "description", "active", "currency", "contactId", "logoId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "email", "phone", "description", "active", "currency", "contactId", "logoId", "isActive", "isArchived", "deletedAt" FROM "merchant"`
		);
		await queryRunner.query(`DROP TABLE "merchant"`);
		await queryRunner.query(`ALTER TABLE "temporary_merchant" RENAME TO "merchant"`);
		await queryRunner.query(`CREATE INDEX "IDX_20acc3c3a6c900c6ef9fc68199" ON "merchant" ("logoId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e03ddff05652be527e04abdc56" ON "merchant" ("contactId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d306a524b507f72fa8550aeffe" ON "merchant" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_533144d7ae94180235ea456625" ON "merchant" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a03be8a86e528e2720504a041f" ON "merchant" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_0a0f972564e74c9c4905e3abcb" ON "merchant" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_31626e7d39eb95b710d5a2d80f"`);
		await queryRunner.query(`DROP INDEX "IDX_2e0d21aab892b5993abaac09bc"`);
		await queryRunner.query(`DROP INDEX "IDX_af6423760433da72002a7f369e"`);
		await queryRunner.query(`DROP INDEX "IDX_4062b5d54aa740aaff9a6c5fbb"`);
		await queryRunner.query(`DROP INDEX "IDX_34c6749e2bc94b2e52e9572f32"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_award" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "year" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_2e0d21aab892b5993abaac09bcd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_af6423760433da72002a7f369eb" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_award"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "year", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "year", "isActive", "isArchived", "deletedAt" FROM "organization_award"`
		);
		await queryRunner.query(`DROP TABLE "organization_award"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_award" RENAME TO "organization_award"`);
		await queryRunner.query(`CREATE INDEX "IDX_31626e7d39eb95b710d5a2d80f" ON "organization_award" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_2e0d21aab892b5993abaac09bc" ON "organization_award" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_af6423760433da72002a7f369e" ON "organization_award" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4062b5d54aa740aaff9a6c5fbb" ON "organization_award" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_34c6749e2bc94b2e52e9572f32" ON "organization_award" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_8cfcdc6bc8fb55e273d9ace5fd"`);
		await queryRunner.query(`DROP INDEX "IDX_a86d2e378b953cb39261f457d2"`);
		await queryRunner.query(`DROP INDEX "IDX_de33f92e042365d196d959e774"`);
		await queryRunner.query(`DROP INDEX "IDX_6200736cb4d3617b004e5b647f"`);
		await queryRunner.query(`DROP INDEX "IDX_e68c43e315ad3aaea4e99cf461"`);
		await queryRunner.query(`DROP INDEX "IDX_53627a383c9817dbf1164d7dc6"`);
		await queryRunner.query(`DROP INDEX "IDX_f91783c7a8565c648b65635efc"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_contact" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "primaryEmail" varchar, "primaryPhone" varchar, "inviteStatus" varchar, "notes" varchar, "contactType" varchar CHECK( "contactType" IN ('CLIENT','CUSTOMER','LEAD') ) NOT NULL DEFAULT ('CLIENT'), "imageUrl" varchar(500), "budget" integer, "budgetType" varchar CHECK( "budgetType" IN ('hours','cost') ) DEFAULT ('cost'), "createdBy" varchar, "contactId" varchar, "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "REL_a86d2e378b953cb39261f457d2" UNIQUE ("contactId"), CONSTRAINT "FK_8cfcdc6bc8fb55e273d9ace5fd5" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_a86d2e378b953cb39261f457d26" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_6200736cb4d3617b004e5b647ff" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e68c43e315ad3aaea4e99cf461d" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_contact"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "primaryEmail", "primaryPhone", "inviteStatus", "notes", "contactType", "imageUrl", "budget", "budgetType", "createdBy", "contactId", "imageId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "primaryEmail", "primaryPhone", "inviteStatus", "notes", "contactType", "imageUrl", "budget", "budgetType", "createdBy", "contactId", "imageId", "isActive", "isArchived", "deletedAt" FROM "organization_contact"`
		);
		await queryRunner.query(`DROP TABLE "organization_contact"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_contact" RENAME TO "organization_contact"`);
		await queryRunner.query(`CREATE INDEX "IDX_8cfcdc6bc8fb55e273d9ace5fd" ON "organization_contact" ("imageId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_a86d2e378b953cb39261f457d2" ON "organization_contact" ("contactId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_de33f92e042365d196d959e774" ON "organization_contact" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_6200736cb4d3617b004e5b647f" ON "organization_contact" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e68c43e315ad3aaea4e99cf461" ON "organization_contact" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_53627a383c9817dbf1164d7dc6" ON "organization_contact" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f91783c7a8565c648b65635efc" ON "organization_contact" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_91b652409dc1fb2f712590dd21"`);
		await queryRunner.query(`DROP INDEX "IDX_c61a562a2379d1c0077fe7de33"`);
		await queryRunner.query(`DROP INDEX "IDX_b3644ff7cd65239e29d292a41d"`);
		await queryRunner.query(`DROP INDEX "IDX_6139cd4c620e81aefd4895d370"`);
		await queryRunner.query(`DROP INDEX "IDX_b65059949804b20048b1c86c3d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_department" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_c61a562a2379d1c0077fe7de332" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b3644ff7cd65239e29d292a41d1" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_department"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "organization_department"`
		);
		await queryRunner.query(`DROP TABLE "organization_department"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_department" RENAME TO "organization_department"`);
		await queryRunner.query(`CREATE INDEX "IDX_91b652409dc1fb2f712590dd21" ON "organization_department" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c61a562a2379d1c0077fe7de33" ON "organization_department" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b3644ff7cd65239e29d292a41d" ON "organization_department" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6139cd4c620e81aefd4895d370" ON "organization_department" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b65059949804b20048b1c86c3d" ON "organization_department" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_c129dee7d1cb84e01e69b5e2c6"`);
		await queryRunner.query(`DROP INDEX "IDX_4bc83945c022a862a33629ff1e"`);
		await queryRunner.query(`DROP INDEX "IDX_1057ec001a4c6b258658143047"`);
		await queryRunner.query(`DROP INDEX "IDX_e5edb48261db95f46c3b4d34a5"`);
		await queryRunner.query(`DROP INDEX "IDX_72c6a8ad9de5c04b2b689fd229"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_document" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "documentUrl" varchar, "documentId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_c129dee7d1cb84e01e69b5e2c66" FOREIGN KEY ("documentId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_4bc83945c022a862a33629ff1e1" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1057ec001a4c6b258658143047a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_document"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "documentUrl", "documentId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "documentUrl", "documentId", "isActive", "isArchived", "deletedAt" FROM "organization_document"`
		);
		await queryRunner.query(`DROP TABLE "organization_document"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_document" RENAME TO "organization_document"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_c129dee7d1cb84e01e69b5e2c6" ON "organization_document" ("documentId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4bc83945c022a862a33629ff1e" ON "organization_document" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_1057ec001a4c6b258658143047" ON "organization_document" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e5edb48261db95f46c3b4d34a5" ON "organization_document" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_72c6a8ad9de5c04b2b689fd229" ON "organization_document" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_a583cfe32f492f5ba99b7bb205"`);
		await queryRunner.query(`DROP INDEX "IDX_227b5bd9867287cbbeece8f6ba"`);
		await queryRunner.query(`DROP INDEX "IDX_880f3cce5e03f42bec3da6e6dc"`);
		await queryRunner.query(`DROP INDEX "IDX_cc096d49e2399e89cdf32297da"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_employment_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a583cfe32f492f5ba99b7bb2050" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_227b5bd9867287cbbeece8f6ba9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_employment_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "organization_employment_type"`
		);
		await queryRunner.query(`DROP TABLE "organization_employment_type"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_organization_employment_type" RENAME TO "organization_employment_type"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a583cfe32f492f5ba99b7bb205" ON "organization_employment_type" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_227b5bd9867287cbbeece8f6ba" ON "organization_employment_type" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_880f3cce5e03f42bec3da6e6dc" ON "organization_employment_type" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_cc096d49e2399e89cdf32297da" ON "organization_employment_type" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_020516e74a57cb85d75381e841"`);
		await queryRunner.query(`DROP INDEX "IDX_4513931e2d530f78d7144c8c7c"`);
		await queryRunner.query(`DROP INDEX "IDX_225e476592214e32e117a85213"`);
		await queryRunner.query(`DROP INDEX "IDX_b79e8d45a3ef5503579643f5de"`);
		await queryRunner.query(`DROP INDEX "IDX_6577ec9ca4cef331a507264d44"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_language" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "languageCode" varchar NOT NULL, "name" varchar NOT NULL, "level" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_020516e74a57cb85d75381e841a" FOREIGN KEY ("languageCode") REFERENCES "language" ("code") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4513931e2d530f78d7144c8c7cd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_225e476592214e32e117a85213c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_language"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "languageCode", "name", "level", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "languageCode", "name", "level", "isActive", "isArchived", "deletedAt" FROM "organization_language"`
		);
		await queryRunner.query(`DROP TABLE "organization_language"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_language" RENAME TO "organization_language"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_020516e74a57cb85d75381e841" ON "organization_language" ("languageCode") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4513931e2d530f78d7144c8c7c" ON "organization_language" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_225e476592214e32e117a85213" ON "organization_language" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b79e8d45a3ef5503579643f5de" ON "organization_language" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6577ec9ca4cef331a507264d44" ON "organization_language" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_3f02c20145af9997253531349c"`);
		await queryRunner.query(`DROP INDEX "IDX_a0409e39f23ff6d418f2c03df5"`);
		await queryRunner.query(`DROP INDEX "IDX_a8f497b1006ec967964abb0d49"`);
		await queryRunner.query(`DROP INDEX "IDX_7317abf7a05a169783b6aa7932"`);
		await queryRunner.query(`DROP INDEX "IDX_ce8721ddf715f0efa4bd3d2c5f"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_position" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a0409e39f23ff6d418f2c03df58" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a8f497b1006ec967964abb0d497" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_position"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "organization_position"`
		);
		await queryRunner.query(`DROP TABLE "organization_position"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_position" RENAME TO "organization_position"`);
		await queryRunner.query(`CREATE INDEX "IDX_3f02c20145af9997253531349c" ON "organization_position" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_a0409e39f23ff6d418f2c03df5" ON "organization_position" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a8f497b1006ec967964abb0d49" ON "organization_position" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7317abf7a05a169783b6aa7932" ON "organization_position" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ce8721ddf715f0efa4bd3d2c5f" ON "organization_position" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_904ae0b765faef6ba2db8b1e69"`);
		await queryRunner.query(`DROP INDEX "IDX_3590135ac2034d7aa88efa7e52"`);
		await queryRunner.query(`DROP INDEX "IDX_18e22d4b569159bb91dec869aa"`);
		await queryRunner.query(`DROP INDEX "IDX_bc1e32c13683dbb16ada1c6da1"`);
		await queryRunner.query(`DROP INDEX "IDX_c210effeb6314d325bc024d21e"`);
		await queryRunner.query(`DROP INDEX "IDX_37215da8dee9503d759adb3538"`);
		await queryRunner.query(`DROP INDEX "IDX_9d8afc1e1e64d4b7d48dd2229d"`);
		await queryRunner.query(`DROP INDEX "IDX_7cf84e8b5775f349f81a1f3cc4"`);
		await queryRunner.query(`DROP INDEX "IDX_063324fdceb51f7086e401ed2c"`);
		await queryRunner.query(`DROP INDEX "IDX_75855b44250686f84b7c4bc1f1"`);
		await queryRunner.query(`DROP INDEX "IDX_c5c4366237dc2bb176c1503426"`);
		await queryRunner.query(`DROP INDEX "IDX_3e128d30e9910ff920eee4ef37"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_project" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "startDate" datetime, "endDate" datetime, "billing" varchar, "currency" varchar, "public" boolean, "owner" varchar, "taskListType" varchar NOT NULL DEFAULT ('GRID'), "code" varchar, "description" varchar, "color" varchar, "billable" boolean, "billingFlat" boolean, "openSource" boolean, "projectUrl" varchar, "openSourceProjectUrl" varchar, "budget" integer, "budgetType" text DEFAULT ('cost'), "organizationContactId" varchar, "membersCount" integer DEFAULT (0), "imageUrl" varchar(500), "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "repositoryId" varchar, "isTasksAutoSync" boolean DEFAULT (1), "isTasksAutoSyncOnLabel" boolean DEFAULT (1), "syncTag" varchar, "deletedAt" datetime, "fix_relational_custom_fields" boolean, "archivedAt" datetime, CONSTRAINT "FK_904ae0b765faef6ba2db8b1e698" FOREIGN KEY ("repositoryId") REFERENCES "organization_github_repository" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_bc1e32c13683dbb16ada1c6da14" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE, CONSTRAINT "FK_9d8afc1e1e64d4b7d48dd2229d7" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7cf84e8b5775f349f81a1f3cc44" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_063324fdceb51f7086e401ed2c9" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_project"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "startDate", "endDate", "billing", "currency", "public", "owner", "taskListType", "code", "description", "color", "billable", "billingFlat", "openSource", "projectUrl", "openSourceProjectUrl", "budget", "budgetType", "organizationContactId", "membersCount", "imageUrl", "imageId", "isActive", "isArchived", "repositoryId", "isTasksAutoSync", "isTasksAutoSyncOnLabel", "syncTag", "deletedAt", "fix_relational_custom_fields") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "startDate", "endDate", "billing", "currency", "public", "owner", "taskListType", "code", "description", "color", "billable", "billingFlat", "openSource", "projectUrl", "openSourceProjectUrl", "budget", "budgetType", "organizationContactId", "membersCount", "imageUrl", "imageId", "isActive", "isArchived", "repositoryId", "isTasksAutoSync", "isTasksAutoSyncOnLabel", "syncTag", "deletedAt", "fix_relational_custom_fields" FROM "organization_project"`
		);
		await queryRunner.query(`DROP TABLE "organization_project"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_project" RENAME TO "organization_project"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_904ae0b765faef6ba2db8b1e69" ON "organization_project" ("repositoryId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3590135ac2034d7aa88efa7e52" ON "organization_project" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_18e22d4b569159bb91dec869aa" ON "organization_project" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_bc1e32c13683dbb16ada1c6da1" ON "organization_project" ("organizationContactId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c210effeb6314d325bc024d21e" ON "organization_project" ("currency") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_37215da8dee9503d759adb3538" ON "organization_project" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_9d8afc1e1e64d4b7d48dd2229d" ON "organization_project" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7cf84e8b5775f349f81a1f3cc4" ON "organization_project" ("tenantId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_063324fdceb51f7086e401ed2c" ON "organization_project" ("imageId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_75855b44250686f84b7c4bc1f1" ON "organization_project" ("isTasksAutoSync") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c5c4366237dc2bb176c1503426" ON "organization_project" ("isTasksAutoSyncOnLabel") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_3e128d30e9910ff920eee4ef37" ON "organization_project" ("syncTag") `);
		await queryRunner.query(`DROP INDEX "IDX_e6b6555e5fc6c5120110a0195c"`);
		await queryRunner.query(`DROP INDEX "IDX_8f2054a6a2d4b9c17624b9c8a0"`);
		await queryRunner.query(`DROP INDEX "IDX_7fd3c8f54c01943b283080aefa"`);
		await queryRunner.query(`DROP INDEX "IDX_86438fbaa1d857f32f66b24885"`);
		await queryRunner.query(`DROP INDEX "IDX_cd928adcb5ebb00c9f2c57e390"`);
		await queryRunner.query(`DROP INDEX "IDX_8a7a4d4206c003c3827c5afe5d"`);
		await queryRunner.query(`DROP INDEX "IDX_a56086e95fb2627ba2a3dd2eaa"`);
		await queryRunner.query(`DROP INDEX "IDX_f33638d289aff2306328c32a8c"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_project_module" ("deletedAt" datetime, "id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" text, "status" varchar, "startDate" datetime, "endDate" datetime, "public" boolean DEFAULT (0), "isFavorite" boolean DEFAULT (0), "parentId" varchar, "projectId" varchar, "creatorId" varchar, "managerId" varchar, "archivedAt" datetime, CONSTRAINT "FK_e6b6555e5fc6c5120110a0195cd" FOREIGN KEY ("managerId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8f2054a6a2d4b9c17624b9c8a01" FOREIGN KEY ("creatorId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7fd3c8f54c01943b283080aefa3" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4bb6fbfa64cf5d5977c2e5346a9" FOREIGN KEY ("parentId") REFERENCES "organization_project_module" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_cd928adcb5ebb00c9f2c57e3908" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8a7a4d4206c003c3827c5afe5dc" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_project_module"("deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "name", "description", "status", "startDate", "endDate", "public", "isFavorite", "parentId", "projectId", "creatorId", "managerId") SELECT "deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "name", "description", "status", "startDate", "endDate", "public", "isFavorite", "parentId", "projectId", "creatorId", "managerId" FROM "organization_project_module"`
		);
		await queryRunner.query(`DROP TABLE "organization_project_module"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_organization_project_module" RENAME TO "organization_project_module"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e6b6555e5fc6c5120110a0195c" ON "organization_project_module" ("managerId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8f2054a6a2d4b9c17624b9c8a0" ON "organization_project_module" ("creatorId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7fd3c8f54c01943b283080aefa" ON "organization_project_module" ("projectId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_86438fbaa1d857f32f66b24885" ON "organization_project_module" ("status") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_cd928adcb5ebb00c9f2c57e390" ON "organization_project_module" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8a7a4d4206c003c3827c5afe5d" ON "organization_project_module" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a56086e95fb2627ba2a3dd2eaa" ON "organization_project_module" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f33638d289aff2306328c32a8c" ON "organization_project_module" ("isActive") `
		);
		await queryRunner.query(`DROP INDEX "IDX_637ac2c467df4bc3b71795a866"`);
		await queryRunner.query(`DROP INDEX "IDX_61387780d015923453f4b015b4"`);
		await queryRunner.query(`DROP INDEX "IDX_f1e5497ee6be7ba3f2ee90bf4b"`);
		await queryRunner.query(`DROP INDEX "IDX_8a12e7a0d47d3c6a6b35f7984e"`);
		await queryRunner.query(`DROP INDEX "IDX_0b19a287858af40661bd3eb741"`);
		await queryRunner.query(`DROP INDEX "IDX_9ad08dbc039d08279dae2dd94e"`);
		await queryRunner.query(`DROP INDEX "IDX_f3ef2000abb9762b138cc5a1b3"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_recurring_expense" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "startDay" integer NOT NULL, "startMonth" integer NOT NULL, "startYear" integer NOT NULL, "startDate" datetime NOT NULL, "endDay" integer, "endMonth" integer, "endYear" integer, "endDate" datetime, "categoryName" varchar NOT NULL, "value" numeric NOT NULL, "currency" varchar NOT NULL, "splitExpense" boolean, "parentRecurringExpenseId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_8a12e7a0d47d3c6a6b35f7984e3" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_0b19a287858af40661bd3eb7411" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_recurring_expense"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "startDay", "startMonth", "startYear", "startDate", "endDay", "endMonth", "endYear", "endDate", "categoryName", "value", "currency", "splitExpense", "parentRecurringExpenseId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "startDay", "startMonth", "startYear", "startDate", "endDay", "endMonth", "endYear", "endDate", "categoryName", "value", "currency", "splitExpense", "parentRecurringExpenseId", "isActive", "isArchived", "deletedAt" FROM "organization_recurring_expense"`
		);
		await queryRunner.query(`DROP TABLE "organization_recurring_expense"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_organization_recurring_expense" RENAME TO "organization_recurring_expense"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_637ac2c467df4bc3b71795a866" ON "organization_recurring_expense" ("parentRecurringExpenseId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_61387780d015923453f4b015b4" ON "organization_recurring_expense" ("currency") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f1e5497ee6be7ba3f2ee90bf4b" ON "organization_recurring_expense" ("categoryName") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8a12e7a0d47d3c6a6b35f7984e" ON "organization_recurring_expense" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0b19a287858af40661bd3eb741" ON "organization_recurring_expense" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9ad08dbc039d08279dae2dd94e" ON "organization_recurring_expense" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f3ef2000abb9762b138cc5a1b3" ON "organization_recurring_expense" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_8a1fe8afb3aa672bae5993fbe7"`);
		await queryRunner.query(`DROP INDEX "IDX_f57ad03c4e471bd8530494ea63"`);
		await queryRunner.query(`DROP INDEX "IDX_5596b4fa7fb2ceb0955580becd"`);
		await queryRunner.query(`DROP INDEX "IDX_76e53f9609ca05477d50980743"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_sprint" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "projectId" varchar NOT NULL, "goal" varchar, "length" integer NOT NULL DEFAULT (7), "startDate" datetime, "endDate" datetime, "dayStart" integer, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a140b7e30ff3455551a0fd599fb" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8a1fe8afb3aa672bae5993fbe7d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f57ad03c4e471bd8530494ea63d" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_sprint"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "projectId", "goal", "length", "startDate", "endDate", "dayStart", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "projectId", "goal", "length", "startDate", "endDate", "dayStart", "isActive", "isArchived", "deletedAt" FROM "organization_sprint"`
		);
		await queryRunner.query(`DROP TABLE "organization_sprint"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_sprint" RENAME TO "organization_sprint"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_8a1fe8afb3aa672bae5993fbe7" ON "organization_sprint" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_f57ad03c4e471bd8530494ea63" ON "organization_sprint" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5596b4fa7fb2ceb0955580becd" ON "organization_sprint" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_76e53f9609ca05477d50980743" ON "organization_sprint" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_20a290f166c0810eafbf271717"`);
		await queryRunner.query(`DROP INDEX "IDX_19ab7adf33199bc6f913db277d"`);
		await queryRunner.query(`DROP INDEX "IDX_5830901876e426adfc15fb7341"`);
		await queryRunner.query(`DROP INDEX "IDX_582768159ef0c749e8552ea9bc"`);
		await queryRunner.query(`DROP INDEX "IDX_f0e2385b2d5f176f9ed3b6a9e3"`);
		await queryRunner.query(`DROP INDEX "IDX_b7be7e61daf2b5af3232c9c4d6"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_task_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "isTasksPrivacyEnabled" boolean NOT NULL DEFAULT (1), "isTasksMultipleAssigneesEnabled" boolean NOT NULL DEFAULT (1), "isTasksManualTimeEnabled" boolean NOT NULL DEFAULT (1), "isTasksGroupEstimationEnabled" boolean NOT NULL DEFAULT (1), "isTasksEstimationInHoursEnabled" boolean NOT NULL DEFAULT (1), "isTasksEstimationInStoryPointsEnabled" boolean NOT NULL DEFAULT (1), "isTasksProofOfCompletionEnabled" boolean NOT NULL DEFAULT (1), "tasksProofOfCompletionType" varchar NOT NULL DEFAULT ('PRIVATE'), "isTasksLinkedEnabled" boolean NOT NULL DEFAULT (1), "isTasksCommentsEnabled" boolean NOT NULL DEFAULT (1), "isTasksHistoryEnabled" boolean NOT NULL DEFAULT (1), "isTasksAcceptanceCriteriaEnabled" boolean NOT NULL DEFAULT (1), "isTasksDraftsEnabled" boolean NOT NULL DEFAULT (1), "isTasksNotifyLeftEnabled" boolean NOT NULL DEFAULT (1), "tasksNotifyLeftPeriodDays" integer NOT NULL DEFAULT (7), "isTasksAutoCloseEnabled" boolean NOT NULL DEFAULT (1), "tasksAutoClosePeriodDays" integer NOT NULL DEFAULT (7), "isTasksAutoArchiveEnabled" boolean NOT NULL DEFAULT (1), "tasksAutoArchivePeriodDays" integer NOT NULL DEFAULT (7), "isTasksAutoStatusEnabled" boolean NOT NULL DEFAULT (1), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_20a290f166c0810eafbf2717171" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_19ab7adf33199bc6f913db277d7" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5830901876e426adfc15fb7341b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_582768159ef0c749e8552ea9bcd" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_task_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "isTasksPrivacyEnabled", "isTasksMultipleAssigneesEnabled", "isTasksManualTimeEnabled", "isTasksGroupEstimationEnabled", "isTasksEstimationInHoursEnabled", "isTasksEstimationInStoryPointsEnabled", "isTasksProofOfCompletionEnabled", "tasksProofOfCompletionType", "isTasksLinkedEnabled", "isTasksCommentsEnabled", "isTasksHistoryEnabled", "isTasksAcceptanceCriteriaEnabled", "isTasksDraftsEnabled", "isTasksNotifyLeftEnabled", "tasksNotifyLeftPeriodDays", "isTasksAutoCloseEnabled", "tasksAutoClosePeriodDays", "isTasksAutoArchiveEnabled", "tasksAutoArchivePeriodDays", "isTasksAutoStatusEnabled", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "isTasksPrivacyEnabled", "isTasksMultipleAssigneesEnabled", "isTasksManualTimeEnabled", "isTasksGroupEstimationEnabled", "isTasksEstimationInHoursEnabled", "isTasksEstimationInStoryPointsEnabled", "isTasksProofOfCompletionEnabled", "tasksProofOfCompletionType", "isTasksLinkedEnabled", "isTasksCommentsEnabled", "isTasksHistoryEnabled", "isTasksAcceptanceCriteriaEnabled", "isTasksDraftsEnabled", "isTasksNotifyLeftEnabled", "tasksNotifyLeftPeriodDays", "isTasksAutoCloseEnabled", "tasksAutoClosePeriodDays", "isTasksAutoArchiveEnabled", "tasksAutoArchivePeriodDays", "isTasksAutoStatusEnabled", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "organization_task_setting"`
		);
		await queryRunner.query(`DROP TABLE "organization_task_setting"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_organization_task_setting" RENAME TO "organization_task_setting"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_20a290f166c0810eafbf271717" ON "organization_task_setting" ("organizationTeamId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_19ab7adf33199bc6f913db277d" ON "organization_task_setting" ("projectId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5830901876e426adfc15fb7341" ON "organization_task_setting" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_582768159ef0c749e8552ea9bc" ON "organization_task_setting" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f0e2385b2d5f176f9ed3b6a9e3" ON "organization_task_setting" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b7be7e61daf2b5af3232c9c4d6" ON "organization_task_setting" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_752d7a0fe6597ee6bbc6502a12"`);
		await queryRunner.query(`DROP INDEX "IDX_70fcc451944fbde73d223c2af3"`);
		await queryRunner.query(`DROP INDEX "IDX_fe12e1b76bbb76209134d9bdc2"`);
		await queryRunner.query(`DROP INDEX "IDX_d8eba1c0e500c60be1b69c1e77"`);
		await queryRunner.query(`DROP INDEX "IDX_8dc83cdd7c519d73afc0d8bdf0"`);
		await queryRunner.query(`DROP INDEX "IDX_a2a5601d799fbfc29c17b99243"`);
		await queryRunner.query(`DROP INDEX "IDX_ce83034f38496f5fe3f1979697"`);
		await queryRunner.query(`DROP INDEX "IDX_719aeb37fa7a1dd80d25336a0c"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_team_employee" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "organizationTeamId" varchar NOT NULL, "employeeId" varchar NOT NULL, "roleId" varchar, "isTrackingEnabled" boolean DEFAULT (1), "activeTaskId" varchar, "deletedAt" datetime, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "order" integer, "archivedAt" datetime, CONSTRAINT "FK_fe12e1b76bbb76209134d9bdc2e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d8eba1c0e500c60be1b69c1e777" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8dc83cdd7c519d73afc0d8bdf09" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a2a5601d799fbfc29c17b99243f" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ce83034f38496f5fe3f19796977" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_719aeb37fa7a1dd80d25336a0cf" FOREIGN KEY ("activeTaskId") REFERENCES "task" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_team_employee"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "organizationTeamId", "employeeId", "roleId", "isTrackingEnabled", "activeTaskId", "deletedAt", "isActive", "isArchived", "order") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "organizationTeamId", "employeeId", "roleId", "isTrackingEnabled", "activeTaskId", "deletedAt", "isActive", "isArchived", "order" FROM "organization_team_employee"`
		);
		await queryRunner.query(`DROP TABLE "organization_team_employee"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_organization_team_employee" RENAME TO "organization_team_employee"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_752d7a0fe6597ee6bbc6502a12" ON "organization_team_employee" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_70fcc451944fbde73d223c2af3" ON "organization_team_employee" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_fe12e1b76bbb76209134d9bdc2" ON "organization_team_employee" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d8eba1c0e500c60be1b69c1e77" ON "organization_team_employee" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8dc83cdd7c519d73afc0d8bdf0" ON "organization_team_employee" ("organizationTeamId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a2a5601d799fbfc29c17b99243" ON "organization_team_employee" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ce83034f38496f5fe3f1979697" ON "organization_team_employee" ("roleId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_719aeb37fa7a1dd80d25336a0c" ON "organization_team_employee" ("activeTaskId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_d9529008c733cb90044b8c2ad6"`);
		await queryRunner.query(`DROP INDEX "IDX_c15823bf3f63b1fe331d9de662"`);
		await queryRunner.query(`DROP INDEX "IDX_5e73656ce0355347477c42ae19"`);
		await queryRunner.query(`DROP INDEX "IDX_171b852be7c1f387eca93775aa"`);
		await queryRunner.query(`DROP INDEX "IDX_29ece7e3bb764028387cdbc888"`);
		await queryRunner.query(`DROP INDEX "IDX_b027ee2cb18245356b8d963d2f"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_team_join_request" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "email" varchar NOT NULL, "fullName" varchar, "linkAddress" varchar, "position" varchar, "status" varchar, "code" varchar, "token" varchar, "expiredAt" datetime, "userId" varchar, "organizationTeamId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_171b852be7c1f387eca93775aad" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5e73656ce0355347477c42ae19b" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c15823bf3f63b1fe331d9de6625" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_d9529008c733cb90044b8c2ad6b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_team_join_request"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "email", "fullName", "linkAddress", "position", "status", "code", "token", "expiredAt", "userId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "email", "fullName", "linkAddress", "position", "status", "code", "token", "expiredAt", "userId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "organization_team_join_request"`
		);
		await queryRunner.query(`DROP TABLE "organization_team_join_request"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_organization_team_join_request" RENAME TO "organization_team_join_request"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d9529008c733cb90044b8c2ad6" ON "organization_team_join_request" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c15823bf3f63b1fe331d9de662" ON "organization_team_join_request" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5e73656ce0355347477c42ae19" ON "organization_team_join_request" ("userId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_171b852be7c1f387eca93775aa" ON "organization_team_join_request" ("organizationTeamId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_29ece7e3bb764028387cdbc888" ON "organization_team_join_request" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b027ee2cb18245356b8d963d2f" ON "organization_team_join_request" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e22ab0f1236b1a07785b641727"`);
		await queryRunner.query(`DROP INDEX "IDX_176f5ed3c4534f3110d423d569"`);
		await queryRunner.query(`DROP INDEX "IDX_eef1c19a0cb5321223cfe3286c"`);
		await queryRunner.query(`DROP INDEX "IDX_103ae3eb65f4b091efc55cb532"`);
		await queryRunner.query(`DROP INDEX "IDX_da625f694eb1e23e585f301008"`);
		await queryRunner.query(`DROP INDEX "IDX_51e91be110fa0b8e70066f5727"`);
		await queryRunner.query(`DROP INDEX "IDX_722d648e0b83267d4a66332ccb"`);
		await queryRunner.query(`DROP INDEX "IDX_38f1d96e8c2d59e4f0f84209ab"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_team" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "prefix" varchar, "createdById" varchar, "public" boolean DEFAULT (0), "profile_link" varchar, "logo" varchar, "imageId" varchar, "color" varchar, "emoji" varchar, "teamSize" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "shareProfileView" boolean DEFAULT (1), "requirePlanToTrack" boolean NOT NULL DEFAULT (0), "archivedAt" datetime, CONSTRAINT "FK_176f5ed3c4534f3110d423d5690" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_eef1c19a0cb5321223cfe3286c4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_da625f694eb1e23e585f3010082" FOREIGN KEY ("createdById") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_51e91be110fa0b8e70066f5727f" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_team"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "prefix", "createdById", "public", "profile_link", "logo", "imageId", "color", "emoji", "teamSize", "isActive", "isArchived", "deletedAt", "shareProfileView", "requirePlanToTrack") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "prefix", "createdById", "public", "profile_link", "logo", "imageId", "color", "emoji", "teamSize", "isActive", "isArchived", "deletedAt", "shareProfileView", "requirePlanToTrack" FROM "organization_team"`
		);
		await queryRunner.query(`DROP TABLE "organization_team"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_team" RENAME TO "organization_team"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_e22ab0f1236b1a07785b641727" ON "organization_team" ("profile_link") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_176f5ed3c4534f3110d423d569" ON "organization_team" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_eef1c19a0cb5321223cfe3286c" ON "organization_team" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_103ae3eb65f4b091efc55cb532" ON "organization_team" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_da625f694eb1e23e585f301008" ON "organization_team" ("createdById") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_51e91be110fa0b8e70066f5727" ON "organization_team" ("imageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_722d648e0b83267d4a66332ccb" ON "organization_team" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_38f1d96e8c2d59e4f0f84209ab" ON "organization_team" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_e56e80136b07ecd52545368611"`);
		await queryRunner.query(`DROP INDEX "IDX_56dd132aa3743cfa9b034d020e"`);
		await queryRunner.query(`DROP INDEX "IDX_7e0bf6063e1728c9813d5da7ca"`);
		await queryRunner.query(`DROP INDEX "IDX_04c6320f910056ecb11b147ac8"`);
		await queryRunner.query(`DROP INDEX "IDX_266972cd6ff9656eec8818e12d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_vendor" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "email" varchar, "phone" varchar, "website" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_56dd132aa3743cfa9b034d020eb" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7e0bf6063e1728c9813d5da7caa" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_vendor"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "email", "phone", "website", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "email", "phone", "website", "isActive", "isArchived", "deletedAt" FROM "organization_vendor"`
		);
		await queryRunner.query(`DROP TABLE "organization_vendor"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization_vendor" RENAME TO "organization_vendor"`);
		await queryRunner.query(`CREATE INDEX "IDX_e56e80136b07ecd52545368611" ON "organization_vendor" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_56dd132aa3743cfa9b034d020e" ON "organization_vendor" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_7e0bf6063e1728c9813d5da7ca" ON "organization_vendor" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_04c6320f910056ecb11b147ac8" ON "organization_vendor" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_266972cd6ff9656eec8818e12d" ON "organization_vendor" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_b2091c1795f1d0d919b278ab23"`);
		await queryRunner.query(`DROP INDEX "IDX_6de52b8f3de32abee3df2628a3"`);
		await queryRunner.query(`DROP INDEX "IDX_745a293c8b2c750bc421fa0633"`);
		await queryRunner.query(`DROP INDEX "IDX_c21e615583a3ebbb0977452afb"`);
		await queryRunner.query(`DROP INDEX "IDX_03e5eecc2328eb545ff748cbdd"`);
		await queryRunner.query(`DROP INDEX "IDX_40460ab803bf6e5a62b75a35c5"`);
		await queryRunner.query(`DROP INDEX "IDX_6cc2b2052744e352834a4c9e78"`);
		await queryRunner.query(`DROP INDEX "IDX_b03a8a28f6ebdb6df8f630216b"`);
		await queryRunner.query(`DROP INDEX "IDX_f37d866c3326eca5f579cef35c"`);
		await queryRunner.query(`DROP INDEX "IDX_c75285bf286b17c7ca5537857b"`);
		await queryRunner.query(`DROP INDEX "IDX_9ea70bf5c390b00e7bb96b86ed"`);
		await queryRunner.query(`DROP INDEX "IDX_15458cef74076623c270500053"`);
		await queryRunner.query(`DROP INDEX "IDX_2360aa7a4b5ab99e026584f305"`);
		await queryRunner.query(`DROP INDEX "IDX_7965db2b12872551b586f76dd7"`);
		await queryRunner.query(`DROP INDEX "IDX_47b6a97e09895a06606a4a8042"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "name" varchar NOT NULL, "isDefault" boolean NOT NULL DEFAULT (0), "profile_link" varchar, "banner" varchar, "totalEmployees" integer, "short_description" varchar, "client_focus" varchar, "overview" varchar, "imageUrl" varchar(500), "currency" varchar NOT NULL, "valueDate" datetime, "defaultValueDateType" varchar CHECK( "defaultValueDateType" IN ('TODAY','END_OF_MONTH','START_OF_MONTH') ) DEFAULT ('TODAY'), "isActive" boolean DEFAULT (1), "defaultAlignmentType" varchar, "timeZone" varchar, "regionCode" varchar, "brandColor" varchar, "dateFormat" varchar, "officialName" varchar, "startWeekOn" varchar, "taxId" varchar, "numberFormat" varchar, "minimumProjectSize" varchar, "bonusType" varchar, "bonusPercentage" integer, "invitesAllowed" boolean DEFAULT (1), "show_income" boolean, "show_profits" boolean, "show_bonuses_paid" boolean, "show_total_hours" boolean, "show_minimum_project_size" boolean, "show_projects_count" boolean, "show_clients_count" boolean, "show_clients" boolean, "show_employees_count" boolean, "inviteExpiryPeriod" integer, "fiscalStartDate" datetime, "fiscalEndDate" datetime, "registrationDate" datetime, "futureDateAllowed" boolean, "allowManualTime" boolean NOT NULL DEFAULT (1), "allowModifyTime" boolean NOT NULL DEFAULT (1), "allowDeleteTime" boolean NOT NULL DEFAULT (1), "requireReason" boolean NOT NULL DEFAULT (0), "requireDescription" boolean NOT NULL DEFAULT (0), "requireProject" boolean NOT NULL DEFAULT (0), "requireTask" boolean NOT NULL DEFAULT (0), "requireClient" boolean NOT NULL DEFAULT (0), "timeFormat" integer NOT NULL DEFAULT (12), "separateInvoiceItemTaxAndDiscount" boolean, "website" varchar, "fiscalInformation" varchar, "currencyPosition" varchar NOT NULL DEFAULT ('LEFT'), "discountAfterTax" boolean, "defaultStartTime" varchar, "defaultEndTime" varchar, "defaultInvoiceEstimateTerms" varchar, "convertAcceptedEstimates" boolean, "daysUntilDue" integer, "contactId" varchar, "allowTrackInactivity" boolean NOT NULL DEFAULT (1), "inactivityTimeLimit" integer NOT NULL DEFAULT (10), "activityProofDuration" integer NOT NULL DEFAULT (1), "isRemoveIdleTime" boolean NOT NULL DEFAULT (0), "allowScreenshotCapture" boolean NOT NULL DEFAULT (1), "imageId" varchar, "upworkOrganizationId" varchar, "upworkOrganizationName" varchar, "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "randomScreenshot" boolean DEFAULT (0), "trackOnSleep" boolean DEFAULT (0), "screenshotFrequency" numeric NOT NULL DEFAULT (10), "enforced" boolean DEFAULT (0), "archivedAt" datetime, CONSTRAINT "FK_745a293c8b2c750bc421fa06332" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7965db2b12872551b586f76dd79" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_47b6a97e09895a06606a4a80421" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization"("id", "createdAt", "updatedAt", "tenantId", "name", "isDefault", "profile_link", "banner", "totalEmployees", "short_description", "client_focus", "overview", "imageUrl", "currency", "valueDate", "defaultValueDateType", "isActive", "defaultAlignmentType", "timeZone", "regionCode", "brandColor", "dateFormat", "officialName", "startWeekOn", "taxId", "numberFormat", "minimumProjectSize", "bonusType", "bonusPercentage", "invitesAllowed", "show_income", "show_profits", "show_bonuses_paid", "show_total_hours", "show_minimum_project_size", "show_projects_count", "show_clients_count", "show_clients", "show_employees_count", "inviteExpiryPeriod", "fiscalStartDate", "fiscalEndDate", "registrationDate", "futureDateAllowed", "allowManualTime", "allowModifyTime", "allowDeleteTime", "requireReason", "requireDescription", "requireProject", "requireTask", "requireClient", "timeFormat", "separateInvoiceItemTaxAndDiscount", "website", "fiscalInformation", "currencyPosition", "discountAfterTax", "defaultStartTime", "defaultEndTime", "defaultInvoiceEstimateTerms", "convertAcceptedEstimates", "daysUntilDue", "contactId", "allowTrackInactivity", "inactivityTimeLimit", "activityProofDuration", "isRemoveIdleTime", "allowScreenshotCapture", "imageId", "upworkOrganizationId", "upworkOrganizationName", "isArchived", "deletedAt", "randomScreenshot", "trackOnSleep", "screenshotFrequency", "enforced") SELECT "id", "createdAt", "updatedAt", "tenantId", "name", "isDefault", "profile_link", "banner", "totalEmployees", "short_description", "client_focus", "overview", "imageUrl", "currency", "valueDate", "defaultValueDateType", "isActive", "defaultAlignmentType", "timeZone", "regionCode", "brandColor", "dateFormat", "officialName", "startWeekOn", "taxId", "numberFormat", "minimumProjectSize", "bonusType", "bonusPercentage", "invitesAllowed", "show_income", "show_profits", "show_bonuses_paid", "show_total_hours", "show_minimum_project_size", "show_projects_count", "show_clients_count", "show_clients", "show_employees_count", "inviteExpiryPeriod", "fiscalStartDate", "fiscalEndDate", "registrationDate", "futureDateAllowed", "allowManualTime", "allowModifyTime", "allowDeleteTime", "requireReason", "requireDescription", "requireProject", "requireTask", "requireClient", "timeFormat", "separateInvoiceItemTaxAndDiscount", "website", "fiscalInformation", "currencyPosition", "discountAfterTax", "defaultStartTime", "defaultEndTime", "defaultInvoiceEstimateTerms", "convertAcceptedEstimates", "daysUntilDue", "contactId", "allowTrackInactivity", "inactivityTimeLimit", "activityProofDuration", "isRemoveIdleTime", "allowScreenshotCapture", "imageId", "upworkOrganizationId", "upworkOrganizationName", "isArchived", "deletedAt", "randomScreenshot", "trackOnSleep", "screenshotFrequency", "enforced" FROM "organization"`
		);
		await queryRunner.query(`DROP TABLE "organization"`);
		await queryRunner.query(`ALTER TABLE "temporary_organization" RENAME TO "organization"`);
		await queryRunner.query(`CREATE INDEX "IDX_b2091c1795f1d0d919b278ab23" ON "organization" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_6de52b8f3de32abee3df2628a3" ON "organization" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_745a293c8b2c750bc421fa0633" ON "organization" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c21e615583a3ebbb0977452afb" ON "organization" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_03e5eecc2328eb545ff748cbdd" ON "organization" ("isDefault") `);
		await queryRunner.query(`CREATE INDEX "IDX_40460ab803bf6e5a62b75a35c5" ON "organization" ("profile_link") `);
		await queryRunner.query(`CREATE INDEX "IDX_6cc2b2052744e352834a4c9e78" ON "organization" ("banner") `);
		await queryRunner.query(`CREATE INDEX "IDX_b03a8a28f6ebdb6df8f630216b" ON "organization" ("totalEmployees") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_f37d866c3326eca5f579cef35c" ON "organization" ("short_description") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_c75285bf286b17c7ca5537857b" ON "organization" ("client_focus") `);
		await queryRunner.query(`CREATE INDEX "IDX_9ea70bf5c390b00e7bb96b86ed" ON "organization" ("overview") `);
		await queryRunner.query(`CREATE INDEX "IDX_15458cef74076623c270500053" ON "organization" ("currency") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_2360aa7a4b5ab99e026584f305" ON "organization" ("defaultValueDateType") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_7965db2b12872551b586f76dd7" ON "organization" ("contactId") `);
		await queryRunner.query(`CREATE INDEX "IDX_47b6a97e09895a06606a4a8042" ON "organization" ("imageId") `);
		await queryRunner.query(`DROP INDEX "IDX_1fa632f2d12a06ef8dcc00858f"`);
		await queryRunner.query(`DROP INDEX "IDX_e71a736d52820b568f6b0ca203"`);
		await queryRunner.query(`DROP INDEX "IDX_380c03025a41ad032191f1ef2d"`);
		await queryRunner.query(`DROP INDEX "IDX_1c88db6e50f0704688d1f1978c"`);
		await queryRunner.query(`DROP INDEX "IDX_36e929b98372d961bb63bd4b4e"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_password_reset" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "email" varchar NOT NULL, "token" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "tenantId" varchar, "archivedAt" datetime, CONSTRAINT "FK_1fa632f2d12a06ef8dcc00858ff" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_password_reset"("id", "createdAt", "updatedAt", "email", "token", "isActive", "isArchived", "deletedAt", "tenantId") SELECT "id", "createdAt", "updatedAt", "email", "token", "isActive", "isArchived", "deletedAt", "tenantId" FROM "password_reset"`
		);
		await queryRunner.query(`DROP TABLE "password_reset"`);
		await queryRunner.query(`ALTER TABLE "temporary_password_reset" RENAME TO "password_reset"`);
		await queryRunner.query(`CREATE INDEX "IDX_1fa632f2d12a06ef8dcc00858f" ON "password_reset" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e71a736d52820b568f6b0ca203" ON "password_reset" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_380c03025a41ad032191f1ef2d" ON "password_reset" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1c88db6e50f0704688d1f1978c" ON "password_reset" ("email") `);
		await queryRunner.query(`CREATE INDEX "IDX_36e929b98372d961bb63bd4b4e" ON "password_reset" ("token") `);
		await queryRunner.query(`DROP INDEX "IDX_82753b9e315af84b20eaf84d77"`);
		await queryRunner.query(`DROP INDEX "IDX_8846e403ec45e1ad8c309f91a3"`);
		await queryRunner.query(`DROP INDEX "IDX_3f13c738eff604a85700746ec7"`);
		await queryRunner.query(`DROP INDEX "IDX_87223c7f1d4c2ca51cf6992784"`);
		await queryRunner.query(`DROP INDEX "IDX_62ef561a3bb084a7d12dad8a2d"`);
		await queryRunner.query(`DROP INDEX "IDX_be7fcc9fb8cd5a74cb602ec6c9"`);
		await queryRunner.query(`DROP INDEX "IDX_6959c37c3acf0832103a253570"`);
		await queryRunner.query(`DROP INDEX "IDX_16a49d62227bf23686b77b5a21"`);
		await queryRunner.query(`DROP INDEX "IDX_8c4018eab11e92c3b09583495f"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_payment" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "paymentDate" datetime, "amount" numeric, "note" varchar, "currency" varchar NOT NULL, "paymentMethod" varchar, "overdue" boolean, "employeeId" varchar, "invoiceId" varchar, "recordedById" varchar NOT NULL, "projectId" varchar, "organizationContactId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_82753b9e315af84b20eaf84d778" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_8846e403ec45e1ad8c309f91a37" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_3f13c738eff604a85700746ec7d" FOREIGN KEY ("recordedById") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_87223c7f1d4c2ca51cf69927844" FOREIGN KEY ("invoiceId") REFERENCES "invoice" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_62ef561a3bb084a7d12dad8a2d9" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_be7fcc9fb8cd5a74cb602ec6c9b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_6959c37c3acf0832103a2535703" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_payment"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "paymentDate", "amount", "note", "currency", "paymentMethod", "overdue", "employeeId", "invoiceId", "recordedById", "projectId", "organizationContactId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "paymentDate", "amount", "note", "currency", "paymentMethod", "overdue", "employeeId", "invoiceId", "recordedById", "projectId", "organizationContactId", "isActive", "isArchived", "deletedAt" FROM "payment"`
		);
		await queryRunner.query(`DROP TABLE "payment"`);
		await queryRunner.query(`ALTER TABLE "temporary_payment" RENAME TO "payment"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_82753b9e315af84b20eaf84d77" ON "payment" ("organizationContactId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_8846e403ec45e1ad8c309f91a3" ON "payment" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_3f13c738eff604a85700746ec7" ON "payment" ("recordedById") `);
		await queryRunner.query(`CREATE INDEX "IDX_87223c7f1d4c2ca51cf6992784" ON "payment" ("invoiceId") `);
		await queryRunner.query(`CREATE INDEX "IDX_62ef561a3bb084a7d12dad8a2d" ON "payment" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_be7fcc9fb8cd5a74cb602ec6c9" ON "payment" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_6959c37c3acf0832103a253570" ON "payment" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_16a49d62227bf23686b77b5a21" ON "payment" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8c4018eab11e92c3b09583495f" ON "payment" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_04d16bdd72668de12c3e41a85a"`);
		await queryRunner.query(`DROP INDEX "IDX_28965bf63ad4c0976892d0fd5e"`);
		await queryRunner.query(`DROP INDEX "IDX_a6acee4ad726734b73f3886c14"`);
		await queryRunner.query(`DROP INDEX "IDX_074caa106ee22d5d675a696a98"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_pipeline_stage" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "description" text, "index" integer NOT NULL, "name" varchar NOT NULL, "pipelineId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_73ec3158bf224b485fd715cb3a6" FOREIGN KEY ("pipelineId") REFERENCES "pipeline" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_04d16bdd72668de12c3e41a85a6" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_28965bf63ad4c0976892d0fd5e8" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_pipeline_stage"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "index", "name", "pipelineId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "index", "name", "pipelineId", "isActive", "isArchived", "deletedAt" FROM "pipeline_stage"`
		);
		await queryRunner.query(`DROP TABLE "pipeline_stage"`);
		await queryRunner.query(`ALTER TABLE "temporary_pipeline_stage" RENAME TO "pipeline_stage"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_04d16bdd72668de12c3e41a85a" ON "pipeline_stage" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_28965bf63ad4c0976892d0fd5e" ON "pipeline_stage" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a6acee4ad726734b73f3886c14" ON "pipeline_stage" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_074caa106ee22d5d675a696a98" ON "pipeline_stage" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_873ade98fbd6ca71c8b4d1bbca"`);
		await queryRunner.query(`DROP INDEX "IDX_683274c59fb08b21249096e305"`);
		await queryRunner.query(`DROP INDEX "IDX_f3027eabd451ec18b93fab7ed5"`);
		await queryRunner.query(`DROP INDEX "IDX_1adf9f97094bc93e176ede2482"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_pipeline" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "description" text, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_873ade98fbd6ca71c8b4d1bbcac" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_683274c59fb08b21249096e305c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_pipeline"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "name", "isActive", "isArchived", "deletedAt" FROM "pipeline"`
		);
		await queryRunner.query(`DROP TABLE "pipeline"`);
		await queryRunner.query(`ALTER TABLE "temporary_pipeline" RENAME TO "pipeline"`);
		await queryRunner.query(`CREATE INDEX "IDX_873ade98fbd6ca71c8b4d1bbca" ON "pipeline" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_683274c59fb08b21249096e305" ON "pipeline" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f3027eabd451ec18b93fab7ed5" ON "pipeline" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1adf9f97094bc93e176ede2482" ON "pipeline" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_586294149d24cd835678878ef1"`);
		await queryRunner.query(`DROP INDEX "IDX_e46203bf1dbf3291d174f02cb3"`);
		await queryRunner.query(`DROP INDEX "IDX_27d71aa2e843f07fbf36329be3"`);
		await queryRunner.query(`DROP INDEX "IDX_e690dd59b69e74a6bb5d94f32b"`);
		await queryRunner.query(`DROP INDEX "IDX_d32c5d5e4451acf44fd5b212ce"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_category_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_586294149d24cd835678878ef12" FOREIGN KEY ("referenceId") REFERENCES "product_category" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e46203bf1dbf3291d174f02cb34" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_27d71aa2e843f07fbf36329be3f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_category_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "product_category_translation"`
		);
		await queryRunner.query(`DROP TABLE "product_category_translation"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_product_category_translation" RENAME TO "product_category_translation"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_586294149d24cd835678878ef1" ON "product_category_translation" ("referenceId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e46203bf1dbf3291d174f02cb3" ON "product_category_translation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_27d71aa2e843f07fbf36329be3" ON "product_category_translation" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e690dd59b69e74a6bb5d94f32b" ON "product_category_translation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d32c5d5e4451acf44fd5b212ce" ON "product_category_translation" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_f38e86bd280ff9c9c7d9cb7839"`);
		await queryRunner.query(`DROP INDEX "IDX_0a0cf25cd8232a154d1cce2641"`);
		await queryRunner.query(`DROP INDEX "IDX_853302351eaa4daa39920c270a"`);
		await queryRunner.query(`DROP INDEX "IDX_198fba43f049ea621407e7d188"`);
		await queryRunner.query(`DROP INDEX "IDX_06cd3959f09e0b12793a763515"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_category" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "imageUrl" varchar, "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_f38e86bd280ff9c9c7d9cb78393" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_0a0cf25cd8232a154d1cce2641c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_853302351eaa4daa39920c270a9" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_category"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "imageUrl", "imageId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "imageUrl", "imageId", "isActive", "isArchived", "deletedAt" FROM "product_category"`
		);
		await queryRunner.query(`DROP TABLE "product_category"`);
		await queryRunner.query(`ALTER TABLE "temporary_product_category" RENAME TO "product_category"`);
		await queryRunner.query(`CREATE INDEX "IDX_f38e86bd280ff9c9c7d9cb7839" ON "product_category" ("imageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_0a0cf25cd8232a154d1cce2641" ON "product_category" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_853302351eaa4daa39920c270a" ON "product_category" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_198fba43f049ea621407e7d188" ON "product_category" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_06cd3959f09e0b12793a763515" ON "product_category" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_a6e91739227bf4d442f23c52c7"`);
		await queryRunner.query(`DROP INDEX "IDX_4a1430a01b71ecdfcd54b2b6c5"`);
		await queryRunner.query(`DROP INDEX "IDX_462a7fd3ce68935cf973c6709f"`);
		await queryRunner.query(`DROP INDEX "IDX_0fc743f2bc16502dbc5e85420c"`);
		await queryRunner.query(`DROP INDEX "IDX_76bda4c33c83614617278617ae"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_option_group" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "productId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a6e91739227bf4d442f23c52c75" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_4a1430a01b71ecdfcd54b2b6c5c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_462a7fd3ce68935cf973c6709f9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_option_group"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "productId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "productId", "isActive", "isArchived", "deletedAt" FROM "product_option_group"`
		);
		await queryRunner.query(`DROP TABLE "product_option_group"`);
		await queryRunner.query(`ALTER TABLE "temporary_product_option_group" RENAME TO "product_option_group"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_a6e91739227bf4d442f23c52c7" ON "product_option_group" ("productId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4a1430a01b71ecdfcd54b2b6c5" ON "product_option_group" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_462a7fd3ce68935cf973c6709f" ON "product_option_group" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0fc743f2bc16502dbc5e85420c" ON "product_option_group" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_76bda4c33c83614617278617ae" ON "product_option_group" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_c9ce1da98b6d93293daafee63a"`);
		await queryRunner.query(`DROP INDEX "IDX_0e2fcc31743e20a45fc3cf0211"`);
		await queryRunner.query(`DROP INDEX "IDX_fd6b39f1fd1db026b5dcc3c795"`);
		await queryRunner.query(`DROP INDEX "IDX_75b7065234a6d32fbd03d8703f"`);
		await queryRunner.query(`DROP INDEX "IDX_e9e50109d3054fb81205c0a74e"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_option_group_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_c9ce1da98b6d93293daafee63aa" FOREIGN KEY ("referenceId") REFERENCES "product_option_group" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_0e2fcc31743e20a45fc3cf0211d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_fd6b39f1fd1db026b5dcc3c7953" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_option_group_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "product_option_group_translation"`
		);
		await queryRunner.query(`DROP TABLE "product_option_group_translation"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_product_option_group_translation" RENAME TO "product_option_group_translation"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c9ce1da98b6d93293daafee63a" ON "product_option_group_translation" ("referenceId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0e2fcc31743e20a45fc3cf0211" ON "product_option_group_translation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_fd6b39f1fd1db026b5dcc3c795" ON "product_option_group_translation" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_75b7065234a6d32fbd03d8703f" ON "product_option_group_translation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e9e50109d3054fb81205c0a74e" ON "product_option_group_translation" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_f43c46e12db0580af320db7738"`);
		await queryRunner.query(`DROP INDEX "IDX_4dc2f466cfa3d0b7fef19d1273"`);
		await queryRunner.query(`DROP INDEX "IDX_9869d7680f48487e584f5d2fca"`);
		await queryRunner.query(`DROP INDEX "IDX_f284f666950392c55afa0806c8"`);
		await queryRunner.query(`DROP INDEX "IDX_2f581c3477a5c7a66de5d7f264"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_option_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_f43c46e12db0580af320db77381" FOREIGN KEY ("referenceId") REFERENCES "product_option" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_4dc2f466cfa3d0b7fef19d12731" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9869d7680f48487e584f5d2fca7" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_option_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "product_option_translation"`
		);
		await queryRunner.query(`DROP TABLE "product_option_translation"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_product_option_translation" RENAME TO "product_option_translation"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f43c46e12db0580af320db7738" ON "product_option_translation" ("referenceId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4dc2f466cfa3d0b7fef19d1273" ON "product_option_translation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9869d7680f48487e584f5d2fca" ON "product_option_translation" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f284f666950392c55afa0806c8" ON "product_option_translation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2f581c3477a5c7a66de5d7f264" ON "product_option_translation" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_a6debf9198e2fbfa006aa10d71"`);
		await queryRunner.query(`DROP INDEX "IDX_47ffb82a65c43f102b7e0efa41"`);
		await queryRunner.query(`DROP INDEX "IDX_985d235aa5394937c4493262c7"`);
		await queryRunner.query(`DROP INDEX "IDX_d81028785f188c253e0bd49a03"`);
		await queryRunner.query(`DROP INDEX "IDX_35d083f4ecfe72cce72ee88f58"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_option" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "code" varchar, "groupId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a6debf9198e2fbfa006aa10d710" FOREIGN KEY ("groupId") REFERENCES "product_option_group" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_47ffb82a65c43f102b7e0efa41a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_985d235aa5394937c4493262c7f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_option"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "groupId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "groupId", "isActive", "isArchived", "deletedAt" FROM "product_option"`
		);
		await queryRunner.query(`DROP TABLE "product_option"`);
		await queryRunner.query(`ALTER TABLE "temporary_product_option" RENAME TO "product_option"`);
		await queryRunner.query(`CREATE INDEX "IDX_a6debf9198e2fbfa006aa10d71" ON "product_option" ("groupId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_47ffb82a65c43f102b7e0efa41" ON "product_option" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_985d235aa5394937c4493262c7" ON "product_option" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d81028785f188c253e0bd49a03" ON "product_option" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_35d083f4ecfe72cce72ee88f58" ON "product_option" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_bed9d45e15866d9b8e87e7a7bf"`);
		await queryRunner.query(`DROP INDEX "IDX_2efe48435d4ba480a4bb8b96fa"`);
		await queryRunner.query(`DROP INDEX "IDX_ad107ba78e487cd8b13313593b"`);
		await queryRunner.query(`DROP INDEX "IDX_ae78776111e1906accfd61511d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_variant_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "isSubscription" boolean NOT NULL DEFAULT (0), "isPurchaseAutomatically" boolean NOT NULL DEFAULT (0), "canBeSold" boolean NOT NULL DEFAULT (1), "canBePurchased" boolean NOT NULL DEFAULT (1), "canBeCharged" boolean NOT NULL DEFAULT (0), "canBeRented" boolean NOT NULL DEFAULT (0), "isEquipment" boolean NOT NULL DEFAULT (0), "trackInventory" boolean NOT NULL DEFAULT (0), "productVariantId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "REL_b0d86990fe7160a5f3e4011fb2" UNIQUE ("productVariantId"), CONSTRAINT "FK_b0d86990fe7160a5f3e4011fb23" FOREIGN KEY ("productVariantId") REFERENCES "product_variant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_bed9d45e15866d9b8e87e7a7bfe" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2efe48435d4ba480a4bb8b96fa6" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_variant_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "isSubscription", "isPurchaseAutomatically", "canBeSold", "canBePurchased", "canBeCharged", "canBeRented", "isEquipment", "trackInventory", "productVariantId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "isSubscription", "isPurchaseAutomatically", "canBeSold", "canBePurchased", "canBeCharged", "canBeRented", "isEquipment", "trackInventory", "productVariantId", "isActive", "isArchived", "deletedAt" FROM "product_variant_setting"`
		);
		await queryRunner.query(`DROP TABLE "product_variant_setting"`);
		await queryRunner.query(`ALTER TABLE "temporary_product_variant_setting" RENAME TO "product_variant_setting"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_bed9d45e15866d9b8e87e7a7bf" ON "product_variant_setting" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2efe48435d4ba480a4bb8b96fa" ON "product_variant_setting" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ad107ba78e487cd8b13313593b" ON "product_variant_setting" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ae78776111e1906accfd61511d" ON "product_variant_setting" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_f4b767c43b4e9130c63382c9b2"`);
		await queryRunner.query(`DROP INDEX "IDX_2dd271bdeb602b8c3956287e33"`);
		await queryRunner.query(`DROP INDEX "IDX_30aafca59cdb456bf5231f9e46"`);
		await queryRunner.query(`DROP INDEX "IDX_e9dca49bad996f1761db3b2f56"`);
		await queryRunner.query(`DROP INDEX "IDX_65874d6bab7fefcaeccd2252c1"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_type_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_f4b767c43b4e9130c63382c9b28" FOREIGN KEY ("referenceId") REFERENCES "product_type" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2dd271bdeb602b8c3956287e33c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_30aafca59cdb456bf5231f9e463" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_type_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "product_type_translation"`
		);
		await queryRunner.query(`DROP TABLE "product_type_translation"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_product_type_translation" RENAME TO "product_type_translation"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f4b767c43b4e9130c63382c9b2" ON "product_type_translation" ("referenceId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2dd271bdeb602b8c3956287e33" ON "product_type_translation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_30aafca59cdb456bf5231f9e46" ON "product_type_translation" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e9dca49bad996f1761db3b2f56" ON "product_type_translation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_65874d6bab7fefcaeccd2252c1" ON "product_type_translation" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e4e4120b0c19d3a207ce38d758"`);
		await queryRunner.query(`DROP INDEX "IDX_f206c807fc7e41fc8a8b6679ae"`);
		await queryRunner.query(`DROP INDEX "IDX_90cc635a1065702ed3b79da6ec"`);
		await queryRunner.query(`DROP INDEX "IDX_49064ee0f3acd5882f4d893f3d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "icon" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_e4e4120b0c19d3a207ce38d7581" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f206c807fc7e41fc8a8b6679ae0" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "icon", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "icon", "isActive", "isArchived", "deletedAt" FROM "product_type"`
		);
		await queryRunner.query(`DROP TABLE "product_type"`);
		await queryRunner.query(`ALTER TABLE "temporary_product_type" RENAME TO "product_type"`);
		await queryRunner.query(`CREATE INDEX "IDX_e4e4120b0c19d3a207ce38d758" ON "product_type" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f206c807fc7e41fc8a8b6679ae" ON "product_type" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_90cc635a1065702ed3b79da6ec" ON "product_type" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_49064ee0f3acd5882f4d893f3d" ON "product_type" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_0cfba32db58a952f58b1e35cf1"`);
		await queryRunner.query(`DROP INDEX "IDX_7052eaf00a5795afa5ebf35995"`);
		await queryRunner.query(`DROP INDEX "IDX_562ef5984b6d4bed640bfcc6a2"`);
		await queryRunner.query(`DROP INDEX "IDX_24ac11e35221577e4ba4fdd229"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_variant_price" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "unitCost" integer NOT NULL DEFAULT (0), "unitCostCurrency" varchar NOT NULL DEFAULT ('USD'), "retailPrice" integer NOT NULL DEFAULT (0), "retailPriceCurrency" varchar NOT NULL DEFAULT ('USD'), "productVariantId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "REL_5842f603bd85d924127d63d73c" UNIQUE ("productVariantId"), CONSTRAINT "FK_5842f603bd85d924127d63d73cd" FOREIGN KEY ("productVariantId") REFERENCES "product_variant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0cfba32db58a952f58b1e35cf1c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7052eaf00a5795afa5ebf359950" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_variant_price"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "unitCost", "unitCostCurrency", "retailPrice", "retailPriceCurrency", "productVariantId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "unitCost", "unitCostCurrency", "retailPrice", "retailPriceCurrency", "productVariantId", "isActive", "isArchived", "deletedAt" FROM "product_variant_price"`
		);
		await queryRunner.query(`DROP TABLE "product_variant_price"`);
		await queryRunner.query(`ALTER TABLE "temporary_product_variant_price" RENAME TO "product_variant_price"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_0cfba32db58a952f58b1e35cf1" ON "product_variant_price" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7052eaf00a5795afa5ebf35995" ON "product_variant_price" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_562ef5984b6d4bed640bfcc6a2" ON "product_variant_price" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_24ac11e35221577e4ba4fdd229" ON "product_variant_price" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_b83f23626741630a8629960715"`);
		await queryRunner.query(`DROP INDEX "IDX_6e420052844edf3a5506d863ce"`);
		await queryRunner.query(`DROP INDEX "IDX_6a289b10030ae86903406e3c9b"`);
		await queryRunner.query(`DROP INDEX "IDX_9121e00c4dc3500dc610cf8722"`);
		await queryRunner.query(`DROP INDEX "IDX_e0d896cadbc695a490f64bb7e7"`);
		await queryRunner.query(`DROP INDEX "IDX_e0005cbdabb760488f66f3fbba"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_variant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "taxes" integer NOT NULL DEFAULT (0), "notes" varchar, "quantity" integer NOT NULL DEFAULT (0), "billingInvoicingPolicy" varchar NOT NULL DEFAULT ('Quantity ordered'), "internalReference" varchar, "enabled" boolean NOT NULL DEFAULT (1), "productId" varchar, "imageId" varchar, "priceId" varchar, "settingId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "REL_9f0fd369dfeb275415c649d110" UNIQUE ("settingId"), CONSTRAINT "REL_41b31a71dda350cfe5da07e0e4" UNIQUE ("priceId"), CONSTRAINT "FK_b83f23626741630a86299607156" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6e420052844edf3a5506d863ce6" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9f0fd369dfeb275415c649d110b" FOREIGN KEY ("settingId") REFERENCES "product_variant_setting" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_41b31a71dda350cfe5da07e0e4f" FOREIGN KEY ("priceId") REFERENCES "product_variant_price" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_6a289b10030ae86903406e3c9bd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9121e00c4dc3500dc610cf8722e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_variant"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "taxes", "notes", "quantity", "billingInvoicingPolicy", "internalReference", "enabled", "productId", "imageId", "priceId", "settingId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "taxes", "notes", "quantity", "billingInvoicingPolicy", "internalReference", "enabled", "productId", "imageId", "priceId", "settingId", "isActive", "isArchived", "deletedAt" FROM "product_variant"`
		);
		await queryRunner.query(`DROP TABLE "product_variant"`);
		await queryRunner.query(`ALTER TABLE "temporary_product_variant" RENAME TO "product_variant"`);
		await queryRunner.query(`CREATE INDEX "IDX_b83f23626741630a8629960715" ON "product_variant" ("imageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_6e420052844edf3a5506d863ce" ON "product_variant" ("productId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_6a289b10030ae86903406e3c9b" ON "product_variant" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9121e00c4dc3500dc610cf8722" ON "product_variant" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e0d896cadbc695a490f64bb7e7" ON "product_variant" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_e0005cbdabb760488f66f3fbba" ON "product_variant" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_618194d24a7ea86a165d7ec628"`);
		await queryRunner.query(`DROP INDEX "IDX_374bfd0d1b0e1398d7206456d9"`);
		await queryRunner.query(`DROP INDEX "IDX_4627873dbc1af07d732e6eec7b"`);
		await queryRunner.query(`DROP INDEX "IDX_32a4bdd261ec81f4ca6b3abe26"`);
		await queryRunner.query(`DROP INDEX "IDX_08293ca31a601d3cd0228120bc"`);
		await queryRunner.query(`DROP INDEX "IDX_7bb2b2f7a4c8a4916d4339d7f4"`);
		await queryRunner.query(`DROP INDEX "IDX_6f58935aa2175d930e47e97c9f"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "enabled" boolean NOT NULL DEFAULT (1), "code" varchar NOT NULL, "imageUrl" varchar, "featuredImageId" varchar, "productTypeId" varchar, "productCategoryId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_618194d24a7ea86a165d7ec628e" FOREIGN KEY ("productCategoryId") REFERENCES "product_category" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_374bfd0d1b0e1398d7206456d98" FOREIGN KEY ("productTypeId") REFERENCES "product_type" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_4627873dbc1af07d732e6eec7be" FOREIGN KEY ("featuredImageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_32a4bdd261ec81f4ca6b3abe262" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_08293ca31a601d3cd0228120bc9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "enabled", "code", "imageUrl", "featuredImageId", "productTypeId", "productCategoryId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "enabled", "code", "imageUrl", "featuredImageId", "productTypeId", "productCategoryId", "isActive", "isArchived", "deletedAt" FROM "product"`
		);
		await queryRunner.query(`DROP TABLE "product"`);
		await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
		await queryRunner.query(`CREATE INDEX "IDX_618194d24a7ea86a165d7ec628" ON "product" ("productCategoryId") `);
		await queryRunner.query(`CREATE INDEX "IDX_374bfd0d1b0e1398d7206456d9" ON "product" ("productTypeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4627873dbc1af07d732e6eec7b" ON "product" ("featuredImageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_32a4bdd261ec81f4ca6b3abe26" ON "product" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_08293ca31a601d3cd0228120bc" ON "product" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7bb2b2f7a4c8a4916d4339d7f4" ON "product" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_6f58935aa2175d930e47e97c9f" ON "product" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_d24bc28e54f1dc296452a25591"`);
		await queryRunner.query(`DROP INDEX "IDX_e6abcacc3d3a4f9cf5ca97f2b2"`);
		await queryRunner.query(`DROP INDEX "IDX_7533fd275bfb3219ce9eb4004c"`);
		await queryRunner.query(`DROP INDEX "IDX_1d9ca23c7e1c606061fec8bb74"`);
		await queryRunner.query(`DROP INDEX "IDX_96413a8061ff4ccdc418d4e16a"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_d24bc28e54f1dc296452a255917" FOREIGN KEY ("referenceId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e6abcacc3d3a4f9cf5ca97f2b28" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7533fd275bfb3219ce9eb4004c7" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "product_translation"`
		);
		await queryRunner.query(`DROP TABLE "product_translation"`);
		await queryRunner.query(`ALTER TABLE "temporary_product_translation" RENAME TO "product_translation"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_d24bc28e54f1dc296452a25591" ON "product_translation" ("referenceId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e6abcacc3d3a4f9cf5ca97f2b2" ON "product_translation" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_7533fd275bfb3219ce9eb4004c" ON "product_translation" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1d9ca23c7e1c606061fec8bb74" ON "product_translation" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_96413a8061ff4ccdc418d4e16a" ON "product_translation" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_fa278d337ba5e200d44ade6697"`);
		await queryRunner.query(`DROP INDEX "IDX_dd9fcd7916d0a22189ecea6a36"`);
		await queryRunner.query(`DROP INDEX "IDX_656f05f951faa13d7195853424"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_report_category" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "iconClass" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_report_category"("id", "createdAt", "updatedAt", "name", "iconClass", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "iconClass", "isActive", "isArchived", "deletedAt" FROM "report_category"`
		);
		await queryRunner.query(`DROP TABLE "report_category"`);
		await queryRunner.query(`ALTER TABLE "temporary_report_category" RENAME TO "report_category"`);
		await queryRunner.query(`CREATE INDEX "IDX_fa278d337ba5e200d44ade6697" ON "report_category" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_dd9fcd7916d0a22189ecea6a36" ON "report_category" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_656f05f951faa13d7195853424" ON "report_category" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_5193788a3ebc1143bedb74cf72"`);
		await queryRunner.query(`DROP INDEX "IDX_edf9bd011d7f08e3e18a5becb8"`);
		await queryRunner.query(`DROP INDEX "IDX_a6bde8f44e18f17b1ca603e150"`);
		await queryRunner.query(`DROP INDEX "IDX_40459267d68604655aa6df4251"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_report_organization" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "reportId" varchar NOT NULL, "isEnabled" boolean NOT NULL DEFAULT (1), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a085d6f9bcfd19f8bae1dbfe135" FOREIGN KEY ("reportId") REFERENCES "report" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5193788a3ebc1143bedb74cf725" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_edf9bd011d7f08e3e18a5becb8b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_report_organization"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "reportId", "isEnabled", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "reportId", "isEnabled", "isActive", "isArchived", "deletedAt" FROM "report_organization"`
		);
		await queryRunner.query(`DROP TABLE "report_organization"`);
		await queryRunner.query(`ALTER TABLE "temporary_report_organization" RENAME TO "report_organization"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_5193788a3ebc1143bedb74cf72" ON "report_organization" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_edf9bd011d7f08e3e18a5becb8" ON "report_organization" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a6bde8f44e18f17b1ca603e150" ON "report_organization" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_40459267d68604655aa6df4251" ON "report_organization" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_230652e48daa99c50c000fc5d1"`);
		await queryRunner.query(`DROP INDEX "IDX_ef16fed5f7e6951027502e6458"`);
		await queryRunner.query(`DROP INDEX "IDX_6f9ee54eb839117e83b937648d"`);
		await queryRunner.query(`DROP INDEX "IDX_143ead1a6ac5f73125d8c4c3aa"`);
		await queryRunner.query(`DROP INDEX "IDX_1316fdd7b9a2926437a13271bf"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_report" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "categoryId" varchar NOT NULL, "name" varchar NOT NULL, "slug" varchar, "description" varchar, "image" varchar, "iconClass" varchar, "showInMenu" boolean NOT NULL DEFAULT (0), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_230652e48daa99c50c000fc5d10" FOREIGN KEY ("categoryId") REFERENCES "report_category" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_report"("id", "createdAt", "updatedAt", "categoryId", "name", "slug", "description", "image", "iconClass", "showInMenu", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "categoryId", "name", "slug", "description", "image", "iconClass", "showInMenu", "isActive", "isArchived", "deletedAt" FROM "report"`
		);
		await queryRunner.query(`DROP TABLE "report"`);
		await queryRunner.query(`ALTER TABLE "temporary_report" RENAME TO "report"`);
		await queryRunner.query(`CREATE INDEX "IDX_230652e48daa99c50c000fc5d1" ON "report" ("categoryId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ef16fed5f7e6951027502e6458" ON "report" ("slug") `);
		await queryRunner.query(`CREATE INDEX "IDX_6f9ee54eb839117e83b937648d" ON "report" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_143ead1a6ac5f73125d8c4c3aa" ON "report" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1316fdd7b9a2926437a13271bf" ON "report" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_ce2113039f070b3f003aa0db61"`);
		await queryRunner.query(`DROP INDEX "IDX_563fec5539b89a57f40731f985"`);
		await queryRunner.query(`DROP INDEX "IDX_4071f027554eefff65ac8123e6"`);
		await queryRunner.query(`DROP INDEX "IDX_a5445b38b780b29b09369e36a9"`);
		await queryRunner.query(`DROP INDEX "IDX_2634ff04775e659c4792325f38"`);
		await queryRunner.query(`DROP INDEX "IDX_3d66190c19b9fe69a8bbb300df"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_request_approval_employee" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "status" integer, "requestApprovalId" varchar NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_ce2113039f070b3f003aa0db611" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_563fec5539b89a57f40731f9858" FOREIGN KEY ("requestApprovalId") REFERENCES "request_approval" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4071f027554eefff65ac8123e6e" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a5445b38b780b29b09369e36a9b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_request_approval_employee"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "status", "requestApprovalId", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "status", "requestApprovalId", "employeeId", "isActive", "isArchived", "deletedAt" FROM "request_approval_employee"`
		);
		await queryRunner.query(`DROP TABLE "request_approval_employee"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_request_approval_employee" RENAME TO "request_approval_employee"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ce2113039f070b3f003aa0db61" ON "request_approval_employee" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_563fec5539b89a57f40731f985" ON "request_approval_employee" ("requestApprovalId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4071f027554eefff65ac8123e6" ON "request_approval_employee" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a5445b38b780b29b09369e36a9" ON "request_approval_employee" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2634ff04775e659c4792325f38" ON "request_approval_employee" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3d66190c19b9fe69a8bbb300df" ON "request_approval_employee" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_9ccdaee6c5c62cda8f7375e841"`);
		await queryRunner.query(`DROP INDEX "IDX_6c75d8a8c609e88896b2653cc4"`);
		await queryRunner.query(`DROP INDEX "IDX_77e1050669b32cfff482f96016"`);
		await queryRunner.query(`DROP INDEX "IDX_94b2a3d0f17c9549dea1493dc9"`);
		await queryRunner.query(`DROP INDEX "IDX_34b2e8f794e0336b9ac410d8bd"`);
		await queryRunner.query(`DROP INDEX "IDX_bdcb4ea389bdb794bae75b0170"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_request_approval_team" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "status" integer, "requestApprovalId" varchar NOT NULL, "teamId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_9ccdaee6c5c62cda8f7375e8417" FOREIGN KEY ("teamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_6c75d8a8c609e88896b2653cc41" FOREIGN KEY ("requestApprovalId") REFERENCES "request_approval" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_77e1050669b32cfff482f960169" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_94b2a3d0f17c9549dea1493dc96" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_request_approval_team"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "status", "requestApprovalId", "teamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "status", "requestApprovalId", "teamId", "isActive", "isArchived", "deletedAt" FROM "request_approval_team"`
		);
		await queryRunner.query(`DROP TABLE "request_approval_team"`);
		await queryRunner.query(`ALTER TABLE "temporary_request_approval_team" RENAME TO "request_approval_team"`);
		await queryRunner.query(`CREATE INDEX "IDX_9ccdaee6c5c62cda8f7375e841" ON "request_approval_team" ("teamId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_6c75d8a8c609e88896b2653cc4" ON "request_approval_team" ("requestApprovalId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_77e1050669b32cfff482f96016" ON "request_approval_team" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_94b2a3d0f17c9549dea1493dc9" ON "request_approval_team" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_34b2e8f794e0336b9ac410d8bd" ON "request_approval_team" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_bdcb4ea389bdb794bae75b0170" ON "request_approval_team" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_26bb3420001d31337393ed05bc"`);
		await queryRunner.query(`DROP INDEX "IDX_c63fafc733ff8ab37dede8ffec"`);
		await queryRunner.query(`DROP INDEX "IDX_8343741e7929043b2a7de89f73"`);
		await queryRunner.query(`DROP INDEX "IDX_9feaa23ed7bc47d51315e304bb"`);
		await queryRunner.query(`DROP INDEX "IDX_db152600f88a9a4888df0b626e"`);
		await queryRunner.query(`DROP INDEX "IDX_c77295d7f5d6086c815de3c120"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_request_approval" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "status" integer, "createdBy" varchar, "createdByName" varchar, "min_count" integer, "requestId" varchar, "requestType" varchar, "approvalPolicyId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_26bb3420001d31337393ed05bc3" FOREIGN KEY ("approvalPolicyId") REFERENCES "approval_policy" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8343741e7929043b2a7de89f739" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9feaa23ed7bc47d51315e304bb5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_request_approval"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "status", "createdBy", "createdByName", "min_count", "requestId", "requestType", "approvalPolicyId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "status", "createdBy", "createdByName", "min_count", "requestId", "requestType", "approvalPolicyId", "isActive", "isArchived", "deletedAt" FROM "request_approval"`
		);
		await queryRunner.query(`DROP TABLE "request_approval"`);
		await queryRunner.query(`ALTER TABLE "temporary_request_approval" RENAME TO "request_approval"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_26bb3420001d31337393ed05bc" ON "request_approval" ("approvalPolicyId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_c63fafc733ff8ab37dede8ffec" ON "request_approval" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_8343741e7929043b2a7de89f73" ON "request_approval" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9feaa23ed7bc47d51315e304bb" ON "request_approval" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_db152600f88a9a4888df0b626e" ON "request_approval" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_c77295d7f5d6086c815de3c120" ON "request_approval" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_cbd053921056e77c0a8e03122a"`);
		await queryRunner.query(`DROP INDEX "IDX_8307c5c44a4ad6210b767b17a9"`);
		await queryRunner.query(`DROP INDEX "IDX_e3130a39c1e4a740d044e68573"`);
		await queryRunner.query(`DROP INDEX "IDX_78f93dbb42a97f6785bcf53efd"`);
		await queryRunner.query(`DROP INDEX "IDX_5c36df1a5c85016952e90d760f"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_role_permission" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "permission" varchar NOT NULL, "enabled" boolean DEFAULT (0), "roleId" varchar NOT NULL, "description" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_cbd053921056e77c0a8e03122af" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_e3130a39c1e4a740d044e685730" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_role_permission"("id", "createdAt", "updatedAt", "tenantId", "permission", "enabled", "roleId", "description", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "permission", "enabled", "roleId", "description", "isActive", "isArchived", "deletedAt" FROM "role_permission"`
		);
		await queryRunner.query(`DROP TABLE "role_permission"`);
		await queryRunner.query(`ALTER TABLE "temporary_role_permission" RENAME TO "role_permission"`);
		await queryRunner.query(`CREATE INDEX "IDX_cbd053921056e77c0a8e03122a" ON "role_permission" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8307c5c44a4ad6210b767b17a9" ON "role_permission" ("permission") `);
		await queryRunner.query(`CREATE INDEX "IDX_e3130a39c1e4a740d044e68573" ON "role_permission" ("roleId") `);
		await queryRunner.query(`CREATE INDEX "IDX_78f93dbb42a97f6785bcf53efd" ON "role_permission" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_5c36df1a5c85016952e90d760f" ON "role_permission" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_1751a572e91385a09d41c62471"`);
		await queryRunner.query(`DROP INDEX "IDX_ae4578dcaed5adff96595e6166"`);
		await queryRunner.query(`DROP INDEX "IDX_c5f75cd3367769b6f22b298d29"`);
		await queryRunner.query(`DROP INDEX "IDX_09868c0733ba37a4753ff8931f"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_role" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "name" varchar NOT NULL, "isSystem" boolean NOT NULL DEFAULT (0), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_1751a572e91385a09d41c624714" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_role"("id", "createdAt", "updatedAt", "tenantId", "name", "isSystem", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "name", "isSystem", "isActive", "isArchived", "deletedAt" FROM "role"`
		);
		await queryRunner.query(`DROP TABLE "role"`);
		await queryRunner.query(`ALTER TABLE "temporary_role" RENAME TO "role"`);
		await queryRunner.query(`CREATE INDEX "IDX_1751a572e91385a09d41c62471" ON "role" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ae4578dcaed5adff96595e6166" ON "role" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_c5f75cd3367769b6f22b298d29" ON "role" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_09868c0733ba37a4753ff8931f" ON "role" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_b2923d394f3636671ff9b3c3e8"`);
		await queryRunner.query(`DROP INDEX "IDX_8e502eac7ed1347c71c26beae8"`);
		await queryRunner.query(`DROP INDEX "IDX_f4cdbe61d68413f4d6a671f8c2"`);
		await queryRunner.query(`DROP INDEX "IDX_ca52119f9e4857399706d723e9"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_skill" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "color" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_b2923d394f3636671ff9b3c3e81" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8e502eac7ed1347c71c26beae81" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_skill"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "color", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "color", "isActive", "isArchived", "deletedAt" FROM "skill"`
		);
		await queryRunner.query(`DROP TABLE "skill"`);
		await queryRunner.query(`ALTER TABLE "temporary_skill" RENAME TO "skill"`);
		await queryRunner.query(`CREATE INDEX "IDX_b2923d394f3636671ff9b3c3e8" ON "skill" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8e502eac7ed1347c71c26beae8" ON "skill" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f4cdbe61d68413f4d6a671f8c2" ON "skill" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_ca52119f9e4857399706d723e9" ON "skill" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_58876ee26a90170551027459bf"`);
		await queryRunner.query(`DROP INDEX "IDX_1f22c73374bcca1ea84a4dca59"`);
		await queryRunner.query(`DROP INDEX "IDX_c2f6bec0b39eaa3a6d90903ae9"`);
		await queryRunner.query(`DROP INDEX "IDX_b08dd29fb6a8acdf83c83d8988"`);
		await queryRunner.query(`DROP INDEX "IDX_49746602acc4e5e8721062b69e"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_tag" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "color" varchar NOT NULL, "isSystem" boolean NOT NULL DEFAULT (0), "icon" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "textColor" varchar, "fix_relational_custom_fields" boolean, "archivedAt" datetime, CONSTRAINT "FK_c2f6bec0b39eaa3a6d90903ae99" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b08dd29fb6a8acdf83c83d8988f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_49746602acc4e5e8721062b69ec" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_tag"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "color", "isSystem", "icon", "organizationTeamId", "isActive", "isArchived", "deletedAt", "textColor", "fix_relational_custom_fields") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "color", "isSystem", "icon", "organizationTeamId", "isActive", "isArchived", "deletedAt", "textColor", "fix_relational_custom_fields" FROM "tag"`
		);
		await queryRunner.query(`DROP TABLE "tag"`);
		await queryRunner.query(`ALTER TABLE "temporary_tag" RENAME TO "tag"`);
		await queryRunner.query(`CREATE INDEX "IDX_58876ee26a90170551027459bf" ON "tag" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_1f22c73374bcca1ea84a4dca59" ON "tag" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_c2f6bec0b39eaa3a6d90903ae9" ON "tag" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b08dd29fb6a8acdf83c83d8988" ON "tag" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_49746602acc4e5e8721062b69e" ON "tag" ("organizationTeamId") `);
		await queryRunner.query(`DROP INDEX "IDX_b022c2b684c35dcc63c22850f1"`);
		await queryRunner.query(`DROP INDEX "IDX_903b08cd4c8025e73316342452"`);
		await queryRunner.query(`DROP INDEX "IDX_ce5e588780497b05cd6267e20e"`);
		await queryRunner.query(`DROP INDEX "IDX_ecb357a3764a7344c633a257d7"`);
		await queryRunner.query(`DROP INDEX "IDX_9779a35ef1338bafb7b90714f1"`);
		await queryRunner.query(`DROP INDEX "IDX_f2cf366f3f08e31784b056df88"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_daily_plan" ("deletedAt" datetime, "id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "date" datetime NOT NULL, "workTimePlanned" decimal NOT NULL, "status" varchar NOT NULL, "employeeId" varchar, "organizationTeamId" varchar, "archivedAt" datetime, CONSTRAINT "FK_b022c2b684c35dcc63c22850f13" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ecb357a3764a7344c633a257d76" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9779a35ef1338bafb7b90714f16" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f2cf366f3f08e31784b056df880" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_daily_plan"("deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "date", "workTimePlanned", "status", "employeeId", "organizationTeamId") SELECT "deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "date", "workTimePlanned", "status", "employeeId", "organizationTeamId" FROM "daily_plan"`
		);
		await queryRunner.query(`DROP TABLE "daily_plan"`);
		await queryRunner.query(`ALTER TABLE "temporary_daily_plan" RENAME TO "daily_plan"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_b022c2b684c35dcc63c22850f1" ON "daily_plan" ("organizationTeamId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_903b08cd4c8025e73316342452" ON "daily_plan" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_ce5e588780497b05cd6267e20e" ON "daily_plan" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_ecb357a3764a7344c633a257d7" ON "daily_plan" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9779a35ef1338bafb7b90714f1" ON "daily_plan" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f2cf366f3f08e31784b056df88" ON "daily_plan" ("employeeId") `);
		await queryRunner.query(`DROP INDEX "IDX_a3ee022203211f678376cd919b"`);
		await queryRunner.query(`DROP INDEX "IDX_8f274646f2bdf4e12990feeb04"`);
		await queryRunner.query(`DROP INDEX "IDX_16507eb222e3c50be077fb4ace"`);
		await queryRunner.query(`DROP INDEX "IDX_87bfea6d0b9a1ec602ee88e5f6"`);
		await queryRunner.query(`DROP INDEX "IDX_b1a7086c279309b20e8384d0d9"`);
		await queryRunner.query(`DROP INDEX "IDX_1f3ffda4fce02682e76308b476"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_task_estimation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "estimate" integer NOT NULL, "employeeId" varchar NOT NULL, "taskId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a3ee022203211f678376cd919bb" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8f274646f2bdf4e12990feeb040" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_16507eb222e3c50be077fb4ace2" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_87bfea6d0b9a1ec602ee88e5f68" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_task_estimation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "estimate", "employeeId", "taskId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "estimate", "employeeId", "taskId", "isActive", "isArchived", "deletedAt" FROM "task_estimation"`
		);
		await queryRunner.query(`DROP TABLE "task_estimation"`);
		await queryRunner.query(`ALTER TABLE "temporary_task_estimation" RENAME TO "task_estimation"`);
		await queryRunner.query(`CREATE INDEX "IDX_a3ee022203211f678376cd919b" ON "task_estimation" ("taskId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8f274646f2bdf4e12990feeb04" ON "task_estimation" ("employeeId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_16507eb222e3c50be077fb4ace" ON "task_estimation" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_87bfea6d0b9a1ec602ee88e5f6" ON "task_estimation" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b1a7086c279309b20e8384d0d9" ON "task_estimation" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1f3ffda4fce02682e76308b476" ON "task_estimation" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_1909e9bae7d8b2c920b3e4d859"`);
		await queryRunner.query(`DROP INDEX "IDX_722ce5d7535524b96c6d03f7c4"`);
		await queryRunner.query(`DROP INDEX "IDX_8b12c913c39c72fe5980427c96"`);
		await queryRunner.query(`DROP INDEX "IDX_16dbef9d1b2b422abdce8ee3ae"`);
		await queryRunner.query(`DROP INDEX "IDX_4af451ab46a94e94394c72d911"`);
		await queryRunner.query(`DROP INDEX "IDX_af2d743ed61571bcdc5d9a27a0"`);
		await queryRunner.query(`DROP INDEX "IDX_33779b0395f72af0b50dc526d1"`);
		await queryRunner.query(`DROP INDEX "IDX_131331557078611a68b4a5b2e7"`);
		await queryRunner.query(`DROP INDEX "IDX_586513cceb16777fd14a17bfe1"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_issue_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "imageId" varchar, "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "isDefault" boolean NOT NULL DEFAULT (0), "archivedAt" datetime, CONSTRAINT "FK_8b12c913c39c72fe5980427c963" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_16dbef9d1b2b422abdce8ee3ae2" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_33779b0395f72af0b50dc526d1d" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_131331557078611a68b4a5b2e7e" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_586513cceb16777fd14a17bfe10" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_issue_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "imageId", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt", "isDefault") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "imageId", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt", "isDefault" FROM "issue_type"`
		);
		await queryRunner.query(`DROP TABLE "issue_type"`);
		await queryRunner.query(`ALTER TABLE "temporary_issue_type" RENAME TO "issue_type"`);
		await queryRunner.query(`CREATE INDEX "IDX_1909e9bae7d8b2c920b3e4d859" ON "issue_type" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_722ce5d7535524b96c6d03f7c4" ON "issue_type" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8b12c913c39c72fe5980427c96" ON "issue_type" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_16dbef9d1b2b422abdce8ee3ae" ON "issue_type" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4af451ab46a94e94394c72d911" ON "issue_type" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_af2d743ed61571bcdc5d9a27a0" ON "issue_type" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_33779b0395f72af0b50dc526d1" ON "issue_type" ("imageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_131331557078611a68b4a5b2e7" ON "issue_type" ("projectId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_586513cceb16777fd14a17bfe1" ON "issue_type" ("organizationTeamId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_579534d8e12f22d308d6bd5f42"`);
		await queryRunner.query(`DROP INDEX "IDX_ca2f7edd5a5ce8f14b257c9d54"`);
		await queryRunner.query(`DROP INDEX "IDX_3e16c81005c389a4db83c0e5e3"`);
		await queryRunner.query(`DROP INDEX "taskNumber"`);
		await queryRunner.query(`DROP INDEX "IDX_1e1f64696aa3a26d3e12c840e5"`);
		await queryRunner.query(`DROP INDEX "IDX_94fe6b3a5aec5f85427df4f8cd"`);
		await queryRunner.query(`DROP INDEX "IDX_3797a20ef5553ae87af126bc2f"`);
		await queryRunner.query(`DROP INDEX "IDX_5b0272d923a31c972bed1a1ac4"`);
		await queryRunner.query(`DROP INDEX "IDX_e91cbff3d206f150ccc14d0c3a"`);
		await queryRunner.query(`DROP INDEX "IDX_2fe7a278e6f08d2be55740a939"`);
		await queryRunner.query(`DROP INDEX "IDX_f092f3386f10f2e2ef5b0b6ad1"`);
		await queryRunner.query(`DROP INDEX "IDX_7127880d6fae956ecc1c84ac31"`);
		await queryRunner.query(`DROP INDEX "IDX_ed5441fb13e82854a994da5a78"`);
		await queryRunner.query(`DROP INDEX "IDX_0cbe714983eb0aae5feeee8212"`);
		await queryRunner.query(`DROP INDEX "IDX_2f4bdd2593fd6038aaa91fd107"`);
		await queryRunner.query(`DROP INDEX "IDX_b8616deefe44d0622233e73fbf"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_task" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "title" varchar NOT NULL, "description" varchar, "status" varchar, "estimate" integer, "dueDate" datetime, "projectId" varchar, "creatorId" varchar, "organizationSprintId" varchar, "number" integer, "prefix" varchar, "priority" varchar, "size" varchar, "public" boolean DEFAULT (1), "startDate" datetime, "resolvedAt" datetime, "version" varchar, "issueType" varchar, "parentId" varchar, "taskStatusId" varchar, "taskSizeId" varchar, "taskPriorityId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "projectModuleId" varchar, "archivedAt" datetime, "isDraft" boolean DEFAULT (0), CONSTRAINT "FK_579534d8e12f22d308d6bd5f428" FOREIGN KEY ("projectModuleId") REFERENCES "organization_project_module" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8c9920b5fb32c3d8453f64b705c" FOREIGN KEY ("parentId") REFERENCES "task" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_1e1f64696aa3a26d3e12c840e55" FOREIGN KEY ("organizationSprintId") REFERENCES "organization_sprint" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_94fe6b3a5aec5f85427df4f8cd7" FOREIGN KEY ("creatorId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5b0272d923a31c972bed1a1ac4d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e91cbff3d206f150ccc14d0c3a1" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0cbe714983eb0aae5feeee8212b" FOREIGN KEY ("taskStatusId") REFERENCES "task_status" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_2f4bdd2593fd6038aaa91fd1076" FOREIGN KEY ("taskSizeId") REFERENCES "task_size" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_b8616deefe44d0622233e73fbf9" FOREIGN KEY ("taskPriorityId") REFERENCES "task_priority" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_task"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "description", "status", "estimate", "dueDate", "projectId", "creatorId", "organizationSprintId", "number", "prefix", "priority", "size", "public", "startDate", "resolvedAt", "version", "issueType", "parentId", "taskStatusId", "taskSizeId", "taskPriorityId", "isActive", "isArchived", "deletedAt", "projectModuleId") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "description", "status", "estimate", "dueDate", "projectId", "creatorId", "organizationSprintId", "number", "prefix", "priority", "size", "public", "startDate", "resolvedAt", "version", "issueType", "parentId", "taskStatusId", "taskSizeId", "taskPriorityId", "isActive", "isArchived", "deletedAt", "projectModuleId" FROM "task"`
		);
		await queryRunner.query(`DROP TABLE "task"`);
		await queryRunner.query(`ALTER TABLE "temporary_task" RENAME TO "task"`);
		await queryRunner.query(`CREATE INDEX "IDX_579534d8e12f22d308d6bd5f42" ON "task" ("projectModuleId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ca2f7edd5a5ce8f14b257c9d54" ON "task" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_3e16c81005c389a4db83c0e5e3" ON "task" ("isActive") `);
		await queryRunner.query(`CREATE UNIQUE INDEX "taskNumber" ON "task" ("projectId", "number") `);
		await queryRunner.query(`CREATE INDEX "IDX_1e1f64696aa3a26d3e12c840e5" ON "task" ("organizationSprintId") `);
		await queryRunner.query(`CREATE INDEX "IDX_94fe6b3a5aec5f85427df4f8cd" ON "task" ("creatorId") `);
		await queryRunner.query(`CREATE INDEX "IDX_3797a20ef5553ae87af126bc2f" ON "task" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5b0272d923a31c972bed1a1ac4" ON "task" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e91cbff3d206f150ccc14d0c3a" ON "task" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_2fe7a278e6f08d2be55740a939" ON "task" ("status") `);
		await queryRunner.query(`CREATE INDEX "IDX_f092f3386f10f2e2ef5b0b6ad1" ON "task" ("priority") `);
		await queryRunner.query(`CREATE INDEX "IDX_7127880d6fae956ecc1c84ac31" ON "task" ("size") `);
		await queryRunner.query(`CREATE INDEX "IDX_ed5441fb13e82854a994da5a78" ON "task" ("issueType") `);
		await queryRunner.query(`CREATE INDEX "IDX_0cbe714983eb0aae5feeee8212" ON "task" ("taskStatusId") `);
		await queryRunner.query(`CREATE INDEX "IDX_2f4bdd2593fd6038aaa91fd107" ON "task" ("taskSizeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b8616deefe44d0622233e73fbf" ON "task" ("taskPriorityId") `);
		await queryRunner.query(`DROP INDEX "IDX_0848fd2b8c23c0ab55146297cf"`);
		await queryRunner.query(`DROP INDEX "IDX_6deea7b3671e45973e191a1502"`);
		await queryRunner.query(`DROP INDEX "IDX_24114c4059e6b6991daba541b1"`);
		await queryRunner.query(`DROP INDEX "IDX_20b50abc5c97610a75d49ad381"`);
		await queryRunner.query(`DROP INDEX "IDX_d49853e18e5bc772f5435b01a5"`);
		await queryRunner.query(`DROP INDEX "IDX_88021c0cd9508757d3d90333f8"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_task_linked_issues" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "action" integer NOT NULL, "taskFromId" varchar NOT NULL, "taskToId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_0848fd2b8c23c0ab55146297cff" FOREIGN KEY ("taskToId") REFERENCES "task" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6deea7b3671e45973e191a1502c" FOREIGN KEY ("taskFromId") REFERENCES "task" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_24114c4059e6b6991daba541b1d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_20b50abc5c97610a75d49ad3817" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_task_linked_issues"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "action", "taskFromId", "taskToId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "action", "taskFromId", "taskToId", "isActive", "isArchived", "deletedAt" FROM "task_linked_issues"`
		);
		await queryRunner.query(`DROP TABLE "task_linked_issues"`);
		await queryRunner.query(`ALTER TABLE "temporary_task_linked_issues" RENAME TO "task_linked_issues"`);
		await queryRunner.query(`CREATE INDEX "IDX_0848fd2b8c23c0ab55146297cf" ON "task_linked_issues" ("taskToId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_6deea7b3671e45973e191a1502" ON "task_linked_issues" ("taskFromId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_24114c4059e6b6991daba541b1" ON "task_linked_issues" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_20b50abc5c97610a75d49ad381" ON "task_linked_issues" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d49853e18e5bc772f5435b01a5" ON "task_linked_issues" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_88021c0cd9508757d3d90333f8" ON "task_linked_issues" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_db4237960ca989eb7a48cd433b"`);
		await queryRunner.query(`DROP INDEX "IDX_46daede7b19176b6ad959d70da"`);
		await queryRunner.query(`DROP INDEX "IDX_7d656b4cba8f11e639dbc5aab3"`);
		await queryRunner.query(`DROP INDEX "IDX_7fd1b30d159b608cbf59009f68"`);
		await queryRunner.query(`DROP INDEX "IDX_1818655f27b8cf4f0d1dbfeb8d"`);
		await queryRunner.query(`DROP INDEX "IDX_52b039cff6a1adf6b7f9e49ee4"`);
		await queryRunner.query(`DROP INDEX "IDX_8ddcc5eeaf96314f53ca486821"`);
		await queryRunner.query(`DROP INDEX "IDX_e6adb82db368af15f2b8cdd4e8"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_task_priority" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_52b039cff6a1adf6b7f9e49ee44" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_db4237960ca989eb7a48cd433b1" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1818655f27b8cf4f0d1dbfeb8db" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7fd1b30d159b608cbf59009f681" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_task_priority"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "task_priority"`
		);
		await queryRunner.query(`DROP TABLE "task_priority"`);
		await queryRunner.query(`ALTER TABLE "temporary_task_priority" RENAME TO "task_priority"`);
		await queryRunner.query(`CREATE INDEX "IDX_db4237960ca989eb7a48cd433b" ON "task_priority" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_46daede7b19176b6ad959d70da" ON "task_priority" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_7d656b4cba8f11e639dbc5aab3" ON "task_priority" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_7fd1b30d159b608cbf59009f68" ON "task_priority" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1818655f27b8cf4f0d1dbfeb8d" ON "task_priority" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_52b039cff6a1adf6b7f9e49ee4" ON "task_priority" ("organizationTeamId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_8ddcc5eeaf96314f53ca486821" ON "task_priority" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_e6adb82db368af15f2b8cdd4e8" ON "task_priority" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_4967ebdca0aefb9d43e56695e4"`);
		await queryRunner.query(`DROP INDEX "IDX_d99fe5b50dbe5078e0d9a9b6a9"`);
		await queryRunner.query(`DROP INDEX "IDX_61a7cb4452d9e23f91231b7fd6"`);
		await queryRunner.query(`DROP INDEX "IDX_9423f99da972c150f85dbc11c1"`);
		await queryRunner.query(`DROP INDEX "IDX_bed691e21fe01cf5aceee72295"`);
		await queryRunner.query(`DROP INDEX "IDX_b7b0ea8ac2825fb981c1181d11"`);
		await queryRunner.query(`DROP INDEX "IDX_5a341f51d8f5ec12db24ab033f"`);
		await queryRunner.query(`DROP INDEX "IDX_8177dd93be8044b37d3bb9285d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_task_related_issue_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_4967ebdca0aefb9d43e56695e42" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d99fe5b50dbe5078e0d9a9b6a9d" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_bed691e21fe01cf5aceee722952" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b7b0ea8ac2825fb981c1181d115" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_task_related_issue_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "task_related_issue_type"`
		);
		await queryRunner.query(`DROP TABLE "task_related_issue_type"`);
		await queryRunner.query(`ALTER TABLE "temporary_task_related_issue_type" RENAME TO "task_related_issue_type"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_4967ebdca0aefb9d43e56695e4" ON "task_related_issue_type" ("organizationTeamId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d99fe5b50dbe5078e0d9a9b6a9" ON "task_related_issue_type" ("projectId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_61a7cb4452d9e23f91231b7fd6" ON "task_related_issue_type" ("value") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9423f99da972c150f85dbc11c1" ON "task_related_issue_type" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_bed691e21fe01cf5aceee72295" ON "task_related_issue_type" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b7b0ea8ac2825fb981c1181d11" ON "task_related_issue_type" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5a341f51d8f5ec12db24ab033f" ON "task_related_issue_type" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8177dd93be8044b37d3bb9285d" ON "task_related_issue_type" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_ad6792b26526bd96ab18d63454"`);
		await queryRunner.query(`DROP INDEX "IDX_1a7b137d009616a2ff1aa6834f"`);
		await queryRunner.query(`DROP INDEX "IDX_90c54f57b29cc8b67edc2738ae"`);
		await queryRunner.query(`DROP INDEX "IDX_596512cc6508a482cc23ae6ab7"`);
		await queryRunner.query(`DROP INDEX "IDX_f6ec2207e50680a475d71c8979"`);
		await queryRunner.query(`DROP INDEX "IDX_f4438327b3c2afb0832569b2a1"`);
		await queryRunner.query(`DROP INDEX "IDX_d65afcfe2d64e49d43931579a3"`);
		await queryRunner.query(`DROP INDEX "IDX_8f26ffc61abaef417b0f807695"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_task_size" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_f4438327b3c2afb0832569b2a1e" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ad6792b26526bd96ab18d634544" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f6ec2207e50680a475d71c89793" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_596512cc6508a482cc23ae6ab78" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_task_size"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "task_size"`
		);
		await queryRunner.query(`DROP TABLE "task_size"`);
		await queryRunner.query(`ALTER TABLE "temporary_task_size" RENAME TO "task_size"`);
		await queryRunner.query(`CREATE INDEX "IDX_ad6792b26526bd96ab18d63454" ON "task_size" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1a7b137d009616a2ff1aa6834f" ON "task_size" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_90c54f57b29cc8b67edc2738ae" ON "task_size" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_596512cc6508a482cc23ae6ab7" ON "task_size" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f6ec2207e50680a475d71c8979" ON "task_size" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f4438327b3c2afb0832569b2a1" ON "task_size" ("organizationTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d65afcfe2d64e49d43931579a3" ON "task_size" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8f26ffc61abaef417b0f807695" ON "task_size" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_79c525a8c2209e90186bfcbea9"`);
		await queryRunner.query(`DROP INDEX "IDX_25d9737ee153411871b4d20c67"`);
		await queryRunner.query(`DROP INDEX "IDX_0330b4a942b536d8d1f264abe3"`);
		await queryRunner.query(`DROP INDEX "IDX_efbaf00a743316b394cc31e4a2"`);
		await queryRunner.query(`DROP INDEX "IDX_9b9a828a49f4bd6383a4073fe2"`);
		await queryRunner.query(`DROP INDEX "IDX_b0c955f276679dd2b2735c3936"`);
		await queryRunner.query(`DROP INDEX "IDX_68eaba689ed6d3e27ec93d3e88"`);
		await queryRunner.query(`DROP INDEX "IDX_a19e8975e5c296640d457dfc11"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_task_status" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "isCollapsed" boolean NOT NULL DEFAULT (0), "order" integer, "isTodo" boolean NOT NULL DEFAULT (0), "isInProgress" boolean NOT NULL DEFAULT (0), "isDone" boolean NOT NULL DEFAULT (0), "archivedAt" datetime, "isDefault" boolean NOT NULL DEFAULT (0), CONSTRAINT "FK_9b9a828a49f4bd6383a4073fe23" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_efbaf00a743316b394cc31e4a20" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a19e8975e5c296640d457dfc11f" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0330b4a942b536d8d1f264abe32" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_task_status"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt", "isCollapsed", "order", "isTodo", "isInProgress", "isDone") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt", "isCollapsed", "order", "isTodo", "isInProgress", "isDone" FROM "task_status"`
		);
		await queryRunner.query(`DROP TABLE "task_status"`);
		await queryRunner.query(`ALTER TABLE "temporary_task_status" RENAME TO "task_status"`);
		await queryRunner.query(`CREATE INDEX "IDX_79c525a8c2209e90186bfcbea9" ON "task_status" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_25d9737ee153411871b4d20c67" ON "task_status" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_0330b4a942b536d8d1f264abe3" ON "task_status" ("organizationTeamId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_efbaf00a743316b394cc31e4a2" ON "task_status" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9b9a828a49f4bd6383a4073fe2" ON "task_status" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b0c955f276679dd2b2735c3936" ON "task_status" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_68eaba689ed6d3e27ec93d3e88" ON "task_status" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_a19e8975e5c296640d457dfc11" ON "task_status" ("projectId") `);
		await queryRunner.query(`DROP INDEX "IDX_959e77718a2e76ee56498c1106"`);
		await queryRunner.query(`DROP INDEX "IDX_91988120385964f213aec8aa84"`);
		await queryRunner.query(`DROP INDEX "IDX_e9fd8df772ad2d955a65f4c68a"`);
		await queryRunner.query(`DROP INDEX "IDX_3396dda57286ca17ab61fd3704"`);
		await queryRunner.query(`DROP INDEX "IDX_9c845f353378371ee3aa60f686"`);
		await queryRunner.query(`DROP INDEX "IDX_379c8bd0ce203341148c1f99ee"`);
		await queryRunner.query(`DROP INDEX "IDX_7e509a66367ecaf8e3bc96f263"`);
		await queryRunner.query(`DROP INDEX "IDX_313b0e55871c1c9b6c22341536"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_task_version" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_959e77718a2e76ee56498c1106a" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_91988120385964f213aec8aa84c" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9c845f353378371ee3aa60f6865" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_379c8bd0ce203341148c1f99ee7" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_task_version"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "task_version"`
		);
		await queryRunner.query(`DROP TABLE "task_version"`);
		await queryRunner.query(`ALTER TABLE "temporary_task_version" RENAME TO "task_version"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_959e77718a2e76ee56498c1106" ON "task_version" ("organizationTeamId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_91988120385964f213aec8aa84" ON "task_version" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e9fd8df772ad2d955a65f4c68a" ON "task_version" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_3396dda57286ca17ab61fd3704" ON "task_version" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_9c845f353378371ee3aa60f686" ON "task_version" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_379c8bd0ce203341148c1f99ee" ON "task_version" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7e509a66367ecaf8e3bc96f263" ON "task_version" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_313b0e55871c1c9b6c22341536" ON "task_version" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_affdab301e348b892175f30fa3"`);
		await queryRunner.query(`DROP INDEX "IDX_1d9975b98d82f385ae14b4d7c6"`);
		await queryRunner.query(`DROP INDEX "IDX_a7500f9b1b7917bf10882c820e"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_tenant_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "name" varchar NOT NULL, "value" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_affdab301e348b892175f30fa39" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_tenant_setting"("id", "createdAt", "updatedAt", "tenantId", "name", "value", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "name", "value", "isActive", "isArchived", "deletedAt" FROM "tenant_setting"`
		);
		await queryRunner.query(`DROP TABLE "tenant_setting"`);
		await queryRunner.query(`ALTER TABLE "temporary_tenant_setting" RENAME TO "tenant_setting"`);
		await queryRunner.query(`CREATE INDEX "IDX_affdab301e348b892175f30fa3" ON "tenant_setting" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1d9975b98d82f385ae14b4d7c6" ON "tenant_setting" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_a7500f9b1b7917bf10882c820e" ON "tenant_setting" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_d154d06dac0d0e0a5d9a083e25"`);
		await queryRunner.query(`DROP INDEX "IDX_56211336b5ff35fd944f225917"`);
		await queryRunner.query(`DROP INDEX "IDX_b8eb9f3e420aa846f30e291960"`);
		await queryRunner.query(`DROP INDEX "IDX_eeedffab85b3534a1068d9270f"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_tenant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "logo" varchar, "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_d154d06dac0d0e0a5d9a083e253" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_tenant"("id", "createdAt", "updatedAt", "name", "logo", "imageId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "logo", "imageId", "isActive", "isArchived", "deletedAt" FROM "tenant"`
		);
		await queryRunner.query(`DROP TABLE "tenant"`);
		await queryRunner.query(`ALTER TABLE "temporary_tenant" RENAME TO "tenant"`);
		await queryRunner.query(`CREATE INDEX "IDX_d154d06dac0d0e0a5d9a083e25" ON "tenant" ("imageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_56211336b5ff35fd944f225917" ON "tenant" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_b8eb9f3e420aa846f30e291960" ON "tenant" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_eeedffab85b3534a1068d9270f" ON "tenant" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_7d7f69c79df4a6f152b0e362b1"`);
		await queryRunner.query(`DROP INDEX "IDX_c2744cffeca55c3c9c52bb9789"`);
		await queryRunner.query(`DROP INDEX "IDX_1c0ed84d54f8fbe4af10dfcda1"`);
		await queryRunner.query(`DROP INDEX "IDX_cf9377d3bcb7cb996f72268941"`);
		await queryRunner.query(`DROP INDEX "IDX_22d919e53cf5f6d836b18d407a"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_time_off_policy" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "requiresApproval" boolean NOT NULL, "paid" boolean NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_c2744cffeca55c3c9c52bb9789c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_1c0ed84d54f8fbe4af10dfcda1c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_time_off_policy"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "requiresApproval", "paid", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "requiresApproval", "paid", "isActive", "isArchived", "deletedAt" FROM "time_off_policy"`
		);
		await queryRunner.query(`DROP TABLE "time_off_policy"`);
		await queryRunner.query(`ALTER TABLE "temporary_time_off_policy" RENAME TO "time_off_policy"`);
		await queryRunner.query(`CREATE INDEX "IDX_7d7f69c79df4a6f152b0e362b1" ON "time_off_policy" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c2744cffeca55c3c9c52bb9789" ON "time_off_policy" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_1c0ed84d54f8fbe4af10dfcda1" ON "time_off_policy" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_cf9377d3bcb7cb996f72268941" ON "time_off_policy" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_22d919e53cf5f6d836b18d407a" ON "time_off_policy" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_c009cdd795be674c2047062374"`);
		await queryRunner.query(`DROP INDEX "IDX_c1f8ae47dc2f1882afc5045c73"`);
		await queryRunner.query(`DROP INDEX "IDX_981333982a6df8b815957dcbf2"`);
		await queryRunner.query(`DROP INDEX "IDX_4989834dd1c9c8ea3576ed99ce"`);
		await queryRunner.query(`DROP INDEX "IDX_45e4bc4476681f4db2097cc2d5"`);
		await queryRunner.query(`DROP INDEX "IDX_5ddef92c4694e6d650d9e557b3"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_time_off_request" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "documentUrl" varchar, "description" varchar, "start" datetime NOT NULL, "end" datetime NOT NULL, "requestDate" datetime NOT NULL, "status" varchar NOT NULL, "isHoliday" boolean DEFAULT (0), "isArchived" boolean DEFAULT (0), "policyId" varchar NOT NULL, "documentId" varchar, "isActive" boolean DEFAULT (1), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_c009cdd795be674c20470623742" FOREIGN KEY ("documentId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_c1f8ae47dc2f1882afc5045c739" FOREIGN KEY ("policyId") REFERENCES "time_off_policy" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_981333982a6df8b815957dcbf27" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_4989834dd1c9c8ea3576ed99ce5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_time_off_request"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "documentUrl", "description", "start", "end", "requestDate", "status", "isHoliday", "isArchived", "policyId", "documentId", "isActive", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "documentUrl", "description", "start", "end", "requestDate", "status", "isHoliday", "isArchived", "policyId", "documentId", "isActive", "deletedAt" FROM "time_off_request"`
		);
		await queryRunner.query(`DROP TABLE "time_off_request"`);
		await queryRunner.query(`ALTER TABLE "temporary_time_off_request" RENAME TO "time_off_request"`);
		await queryRunner.query(`CREATE INDEX "IDX_c009cdd795be674c2047062374" ON "time_off_request" ("documentId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c1f8ae47dc2f1882afc5045c73" ON "time_off_request" ("policyId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_981333982a6df8b815957dcbf2" ON "time_off_request" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_4989834dd1c9c8ea3576ed99ce" ON "time_off_request" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_45e4bc4476681f4db2097cc2d5" ON "time_off_request" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_5ddef92c4694e6d650d9e557b3" ON "time_off_request" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_ffd736f18ba71b3221e4f835a9"`);
		await queryRunner.query(`DROP INDEX "IDX_0e36a2c95e2f1df7f1b3059d24"`);
		await queryRunner.query(`DROP INDEX "IDX_f27285af15ef48363745ab2d79"`);
		await queryRunner.query(`DROP INDEX "IDX_b5525385e85f7429e233d4a0fa"`);
		await queryRunner.query(`DROP INDEX "IDX_302b60a4970ffe94d5223f1c23"`);
		await queryRunner.query(`DROP INDEX "IDX_a28a1682ea80f10d1ecc7babaa"`);
		await queryRunner.query(`DROP INDEX "IDX_2743f8990fde12f9586287eb09"`);
		await queryRunner.query(`DROP INDEX "IDX_4e382caaf07ab0923b2e06bf91"`);
		await queryRunner.query(`DROP INDEX "IDX_5a898f44fa31ef7916f0c38b01"`);
		await queryRunner.query(`DROP INDEX "IDX_a6f74ae99d549932391f0f4460"`);
		await queryRunner.query(`DROP INDEX "IDX_fdb3f018c2bba4885bfa5757d1"`);
		await queryRunner.query(`DROP INDEX "IDX_f2401d8fdff5d8970dfe30d3ae"`);
		await queryRunner.query(`DROP INDEX "IDX_ae6ac57aafef59f561d4db3dd7"`);
		await queryRunner.query(`DROP INDEX "IDX_d2d6db7f03da5632687e5d140e"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_activity" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "title" varchar, "description" varchar, "metaData" text, "date" date, "time" time, "duration" integer NOT NULL DEFAULT (0), "type" varchar, "source" varchar NOT NULL DEFAULT ('BROWSER'), "deletedAt" datetime, "employeeId" varchar NOT NULL, "projectId" varchar, "timeSlotId" varchar, "taskId" varchar, "recordedAt" datetime, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "archivedAt" datetime, CONSTRAINT "FK_2743f8990fde12f9586287eb09f" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_4e382caaf07ab0923b2e06bf918" FOREIGN KEY ("timeSlotId") REFERENCES "time_slot" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5a898f44fa31ef7916f0c38b016" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_a6f74ae99d549932391f0f44609" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_fdb3f018c2bba4885bfa5757d16" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f2401d8fdff5d8970dfe30d3aed" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_activity"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "description", "metaData", "date", "time", "duration", "type", "source", "deletedAt", "employeeId", "projectId", "timeSlotId", "taskId", "recordedAt", "isActive", "isArchived") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "description", "metaData", "date", "time", "duration", "type", "source", "deletedAt", "employeeId", "projectId", "timeSlotId", "taskId", "recordedAt", "isActive", "isArchived" FROM "activity"`
		);
		await queryRunner.query(`DROP TABLE "activity"`);
		await queryRunner.query(`ALTER TABLE "temporary_activity" RENAME TO "activity"`);
		await queryRunner.query(`CREATE INDEX "IDX_ffd736f18ba71b3221e4f835a9" ON "activity" ("recordedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_0e36a2c95e2f1df7f1b3059d24" ON "activity" ("source") `);
		await queryRunner.query(`CREATE INDEX "IDX_f27285af15ef48363745ab2d79" ON "activity" ("type") `);
		await queryRunner.query(`CREATE INDEX "IDX_b5525385e85f7429e233d4a0fa" ON "activity" ("time") `);
		await queryRunner.query(`CREATE INDEX "IDX_302b60a4970ffe94d5223f1c23" ON "activity" ("date") `);
		await queryRunner.query(`CREATE INDEX "IDX_a28a1682ea80f10d1ecc7babaa" ON "activity" ("title") `);
		await queryRunner.query(`CREATE INDEX "IDX_2743f8990fde12f9586287eb09" ON "activity" ("taskId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4e382caaf07ab0923b2e06bf91" ON "activity" ("timeSlotId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5a898f44fa31ef7916f0c38b01" ON "activity" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a6f74ae99d549932391f0f4460" ON "activity" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_fdb3f018c2bba4885bfa5757d1" ON "activity" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f2401d8fdff5d8970dfe30d3ae" ON "activity" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ae6ac57aafef59f561d4db3dd7" ON "activity" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_d2d6db7f03da5632687e5d140e" ON "activity" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_eea7986acfb827bf5d0622c41f"`);
		await queryRunner.query(`DROP INDEX "IDX_1b0867d86ead2332f3d4edba7d"`);
		await queryRunner.query(`DROP INDEX "IDX_fa1896dc735403799311968f7e"`);
		await queryRunner.query(`DROP INDEX "IDX_5b594d02d98d5defcde323abe5"`);
		await queryRunner.query(`DROP INDEX "IDX_0951aacffe3f8d0cff54cf2f34"`);
		await queryRunner.query(`DROP INDEX "IDX_235004f3dafac90692cd64d915"`);
		await queryRunner.query(`DROP INDEX "IDX_3d7feb5fe793e4811cdb79f983"`);
		await queryRunner.query(`DROP INDEX "IDX_2b374e5cdee1145ebb2a832f20"`);
		await queryRunner.query(`DROP INDEX "IDX_742688858e0484d66f04e4d4c4"`);
		await queryRunner.query(`DROP INDEX "IDX_892e285e1da2b3e61e51e50628"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_screenshot" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "file" varchar NOT NULL, "thumb" varchar, "recordedAt" datetime, "deletedAt" datetime, "timeSlotId" varchar, "storageProvider" varchar, "userId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "isWorkRelated" boolean, "description" varchar, "apps" text, "archivedAt" datetime, CONSTRAINT "FK_fa1896dc735403799311968f7ec" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5b594d02d98d5defcde323abe5b" FOREIGN KEY ("timeSlotId") REFERENCES "time_slot" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0951aacffe3f8d0cff54cf2f341" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_235004f3dafac90692cd64d9158" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_screenshot"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "file", "thumb", "recordedAt", "deletedAt", "timeSlotId", "storageProvider", "userId", "isActive", "isArchived", "isWorkRelated", "description", "apps") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "file", "thumb", "recordedAt", "deletedAt", "timeSlotId", "storageProvider", "userId", "isActive", "isArchived", "isWorkRelated", "description", "apps" FROM "screenshot"`
		);
		await queryRunner.query(`DROP TABLE "screenshot"`);
		await queryRunner.query(`ALTER TABLE "temporary_screenshot" RENAME TO "screenshot"`);
		await queryRunner.query(`CREATE INDEX "IDX_eea7986acfb827bf5d0622c41f" ON "screenshot" ("description") `);
		await queryRunner.query(`CREATE INDEX "IDX_1b0867d86ead2332f3d4edba7d" ON "screenshot" ("isWorkRelated") `);
		await queryRunner.query(`CREATE INDEX "IDX_fa1896dc735403799311968f7e" ON "screenshot" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5b594d02d98d5defcde323abe5" ON "screenshot" ("timeSlotId") `);
		await queryRunner.query(`CREATE INDEX "IDX_0951aacffe3f8d0cff54cf2f34" ON "screenshot" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_235004f3dafac90692cd64d915" ON "screenshot" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_3d7feb5fe793e4811cdb79f983" ON "screenshot" ("recordedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_2b374e5cdee1145ebb2a832f20" ON "screenshot" ("storageProvider") `);
		await queryRunner.query(`CREATE INDEX "IDX_742688858e0484d66f04e4d4c4" ON "screenshot" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_892e285e1da2b3e61e51e50628" ON "screenshot" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_154e9120e2acb632d8bd9b91ff"`);
		await queryRunner.query(`DROP INDEX "IDX_18dcdf754396f0cb0308dc91f4"`);
		await queryRunner.query(`DROP INDEX "IDX_d1e8f22c02c5e949453dde7f2d"`);
		await queryRunner.query(`DROP INDEX "IDX_1ddf2da35e34378fd845d80a18"`);
		await queryRunner.query(`DROP INDEX "IDX_54776f6f5fd3c13c3bc1fbfac5"`);
		await queryRunner.query(`DROP INDEX "IDX_e65393bb52aa8275b1392c73f7"`);
		await queryRunner.query(`DROP INDEX "IDX_a89a849957e005bafb8e4220bc"`);
		await queryRunner.query(`DROP INDEX "IDX_aed2d5cc5680fba9d387c7f931"`);
		await queryRunner.query(`DROP INDEX "IDX_fa9018cb248ea0f3b2b30ef143"`);
		await queryRunner.query(`DROP INDEX "IDX_189b79acd611870aba62b3594e"`);
		await queryRunner.query(`DROP INDEX "IDX_a1f8fcd70164d915fe7dd4a1ec"`);
		await queryRunner.query(`DROP INDEX "IDX_e80fb588b1086ce2a4f2244814"`);
		await queryRunner.query(`DROP INDEX "IDX_402290e7045e0c10ef97d9f982"`);
		await queryRunner.query(`DROP INDEX "IDX_722b9cb3a991c964d86396b6bc"`);
		await queryRunner.query(`DROP INDEX "IDX_f447474d185cd70b3015853874"`);
		await queryRunner.query(`DROP INDEX "IDX_79001d281ecb766005b3d331c1"`);
		await queryRunner.query(`DROP INDEX "IDX_a1910a76044b971609b75ea165"`);
		await queryRunner.query(`DROP INDEX "IDX_91a64228fbbe1516730a0cab5d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_time_log" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "startedAt" datetime, "stoppedAt" datetime, "logType" varchar NOT NULL DEFAULT ('TRACKED'), "source" varchar NOT NULL DEFAULT ('BROWSER'), "description" varchar, "reason" varchar, "isBillable" boolean NOT NULL DEFAULT (0), "deletedAt" datetime, "employeeId" varchar NOT NULL, "timesheetId" varchar, "projectId" varchar, "taskId" varchar, "organizationContactId" varchar, "isRunning" boolean, "version" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "editedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_18dcdf754396f0cb0308dc91f4c" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_d1e8f22c02c5e949453dde7f2d1" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_1ddf2da35e34378fd845d80a18b" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_54776f6f5fd3c13c3bc1fbfac5b" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_e65393bb52aa8275b1392c73f72" FOREIGN KEY ("timesheetId") REFERENCES "timesheet" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_aed2d5cc5680fba9d387c7f931d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_fa9018cb248ea0f3b2b30ef143b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a89a849957e005bafb8e4220bc7" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_time_log"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "startedAt", "stoppedAt", "logType", "source", "description", "reason", "isBillable", "deletedAt", "employeeId", "timesheetId", "projectId", "taskId", "organizationContactId", "isRunning", "version", "organizationTeamId", "isActive", "isArchived", "editedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "startedAt", "stoppedAt", "logType", "source", "description", "reason", "isBillable", "deletedAt", "employeeId", "timesheetId", "projectId", "taskId", "organizationContactId", "isRunning", "version", "organizationTeamId", "isActive", "isArchived", "editedAt" FROM "time_log"`
		);
		await queryRunner.query(`DROP TABLE "time_log"`);
		await queryRunner.query(`ALTER TABLE "temporary_time_log" RENAME TO "time_log"`);
		await queryRunner.query(`CREATE INDEX "IDX_154e9120e2acb632d8bd9b91ff" ON "time_log" ("editedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_18dcdf754396f0cb0308dc91f4" ON "time_log" ("organizationTeamId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_d1e8f22c02c5e949453dde7f2d" ON "time_log" ("organizationContactId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_1ddf2da35e34378fd845d80a18" ON "time_log" ("taskId") `);
		await queryRunner.query(`CREATE INDEX "IDX_54776f6f5fd3c13c3bc1fbfac5" ON "time_log" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e65393bb52aa8275b1392c73f7" ON "time_log" ("timesheetId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a89a849957e005bafb8e4220bc" ON "time_log" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_aed2d5cc5680fba9d387c7f931" ON "time_log" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_fa9018cb248ea0f3b2b30ef143" ON "time_log" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_189b79acd611870aba62b3594e" ON "time_log" ("startedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_a1f8fcd70164d915fe7dd4a1ec" ON "time_log" ("stoppedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_e80fb588b1086ce2a4f2244814" ON "time_log" ("logType") `);
		await queryRunner.query(`CREATE INDEX "IDX_402290e7045e0c10ef97d9f982" ON "time_log" ("source") `);
		await queryRunner.query(`CREATE INDEX "IDX_722b9cb3a991c964d86396b6bc" ON "time_log" ("isBillable") `);
		await queryRunner.query(`CREATE INDEX "IDX_f447474d185cd70b3015853874" ON "time_log" ("isRunning") `);
		await queryRunner.query(`CREATE INDEX "IDX_79001d281ecb766005b3d331c1" ON "time_log" ("version") `);
		await queryRunner.query(`CREATE INDEX "IDX_a1910a76044b971609b75ea165" ON "time_log" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_91a64228fbbe1516730a0cab5d" ON "time_log" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_7913305b850c7afc89b6ed96a3"`);
		await queryRunner.query(`DROP INDEX "IDX_c6e7d1075bfd97eea6643b1479"`);
		await queryRunner.query(`DROP INDEX "IDX_f44e721669d5c6bed32cd6a3bf"`);
		await queryRunner.query(`DROP INDEX "IDX_0c707825a7c2ecc4e186b07ebf"`);
		await queryRunner.query(`DROP INDEX "IDX_b8284109257b5137256b5b3e84"`);
		await queryRunner.query(`DROP INDEX "IDX_b407841271245501dd1a8c7551"`);
		await queryRunner.query(`DROP INDEX "IDX_645a6bc3f1141d4a111a3166d8"`);
		await queryRunner.query(`DROP INDEX "IDX_81060c5dbe69efa1f3b6e1a2e5"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_time_slot" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "duration" integer NOT NULL DEFAULT (0), "keyboard" integer NOT NULL DEFAULT (0), "mouse" integer NOT NULL DEFAULT (0), "overall" integer NOT NULL DEFAULT (0), "startedAt" datetime NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_7913305b850c7afc89b6ed96a30" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_b8284109257b5137256b5b3e848" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_b407841271245501dd1a8c75513" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_time_slot"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "keyboard", "mouse", "overall", "startedAt", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "keyboard", "mouse", "overall", "startedAt", "employeeId", "isActive", "isArchived", "deletedAt" FROM "time_slot"`
		);
		await queryRunner.query(`DROP TABLE "time_slot"`);
		await queryRunner.query(`ALTER TABLE "temporary_time_slot" RENAME TO "time_slot"`);
		await queryRunner.query(`CREATE INDEX "IDX_7913305b850c7afc89b6ed96a3" ON "time_slot" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c6e7d1075bfd97eea6643b1479" ON "time_slot" ("startedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_f44e721669d5c6bed32cd6a3bf" ON "time_slot" ("overall") `);
		await queryRunner.query(`CREATE INDEX "IDX_0c707825a7c2ecc4e186b07ebf" ON "time_slot" ("duration") `);
		await queryRunner.query(`CREATE INDEX "IDX_b8284109257b5137256b5b3e84" ON "time_slot" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b407841271245501dd1a8c7551" ON "time_slot" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_645a6bc3f1141d4a111a3166d8" ON "time_slot" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_81060c5dbe69efa1f3b6e1a2e5" ON "time_slot" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_9272701d3da8bd8507f316c915"`);
		await queryRunner.query(`DROP INDEX "IDX_82c5edbd179359212f16f0d386"`);
		await queryRunner.query(`DROP INDEX "IDX_c7f72cb68b22b8ab988158e4d2"`);
		await queryRunner.query(`DROP INDEX "IDX_8260fdc7862ca27d8cf10e6290"`);
		await queryRunner.query(`DROP INDEX "IDX_a3eeb9629f550c367bb752855e"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_time_slot_minute" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "keyboard" integer NOT NULL DEFAULT (0), "mouse" integer NOT NULL DEFAULT (0), "datetime" datetime NOT NULL, "timeSlotId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "UQ_0ac1d2777eefcee82db52ca3660" UNIQUE ("timeSlotId", "datetime"), CONSTRAINT "FK_9272701d3da8bd8507f316c9154" FOREIGN KEY ("timeSlotId") REFERENCES "time_slot" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_82c5edbd179359212f16f0d386a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_c7f72cb68b22b8ab988158e4d26" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_time_slot_minute"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "keyboard", "mouse", "datetime", "timeSlotId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "keyboard", "mouse", "datetime", "timeSlotId", "isActive", "isArchived", "deletedAt" FROM "time_slot_minute"`
		);
		await queryRunner.query(`DROP TABLE "time_slot_minute"`);
		await queryRunner.query(`ALTER TABLE "temporary_time_slot_minute" RENAME TO "time_slot_minute"`);
		await queryRunner.query(`CREATE INDEX "IDX_9272701d3da8bd8507f316c915" ON "time_slot_minute" ("timeSlotId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_82c5edbd179359212f16f0d386" ON "time_slot_minute" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_c7f72cb68b22b8ab988158e4d2" ON "time_slot_minute" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8260fdc7862ca27d8cf10e6290" ON "time_slot_minute" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_a3eeb9629f550c367bb752855e" ON "time_slot_minute" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_ea81b5247ecdf5d82cf71fa096"`);
		await queryRunner.query(`DROP INDEX "IDX_23fdffa8369387d87101090684"`);
		await queryRunner.query(`DROP INDEX "IDX_c828facbb4250117f83416d9f7"`);
		await queryRunner.query(`DROP INDEX "IDX_3502c60f98a7cda58dea75bcb5"`);
		await queryRunner.query(`DROP INDEX "IDX_3f8fc4b5718fcaa913f9438e27"`);
		await queryRunner.query(`DROP INDEX "IDX_6a79eb7534066b11f59243ede1"`);
		await queryRunner.query(`DROP INDEX "IDX_f6558fbb3158ab90da1c41d943"`);
		await queryRunner.query(`DROP INDEX "IDX_930e2b28de9ecb1ea689d5a97a"`);
		await queryRunner.query(`DROP INDEX "IDX_25b8df69c9b7f5752c6a6a6ef7"`);
		await queryRunner.query(`DROP INDEX "IDX_aca65a79fe0c1ec9e6a59022c5"`);
		await queryRunner.query(`DROP INDEX "IDX_8c8f821cb0fe0dd387491ea7d9"`);
		await queryRunner.query(`DROP INDEX "IDX_6c1f81934a3f597b3b1a17f562"`);
		await queryRunner.query(`DROP INDEX "IDX_42205a9e6af108364e5cc62dd4"`);
		await queryRunner.query(`DROP INDEX "IDX_f2d4cd3a7e839bfc7cb6b993ff"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_timesheet" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "duration" integer NOT NULL DEFAULT (0), "keyboard" integer NOT NULL DEFAULT (0), "mouse" integer NOT NULL DEFAULT (0), "overall" integer NOT NULL DEFAULT (0), "startedAt" datetime, "stoppedAt" datetime, "approvedAt" datetime, "submittedAt" datetime, "lockedAt" datetime, "isBilled" boolean NOT NULL DEFAULT (0), "status" varchar NOT NULL DEFAULT ('PENDING'), "deletedAt" datetime, "employeeId" varchar NOT NULL, "approvedById" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "editedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_6c1f81934a3f597b3b1a17f5623" FOREIGN KEY ("approvedById") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_25b8df69c9b7f5752c6a6a6ef7f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_aca65a79fe0c1ec9e6a59022c54" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8c8f821cb0fe0dd387491ea7d9e" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_timesheet"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "keyboard", "mouse", "overall", "startedAt", "stoppedAt", "approvedAt", "submittedAt", "lockedAt", "isBilled", "status", "deletedAt", "employeeId", "approvedById", "isActive", "isArchived", "editedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "keyboard", "mouse", "overall", "startedAt", "stoppedAt", "approvedAt", "submittedAt", "lockedAt", "isBilled", "status", "deletedAt", "employeeId", "approvedById", "isActive", "isArchived", "editedAt" FROM "timesheet"`
		);
		await queryRunner.query(`DROP TABLE "timesheet"`);
		await queryRunner.query(`ALTER TABLE "temporary_timesheet" RENAME TO "timesheet"`);
		await queryRunner.query(`CREATE INDEX "IDX_ea81b5247ecdf5d82cf71fa096" ON "timesheet" ("editedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_23fdffa8369387d87101090684" ON "timesheet" ("status") `);
		await queryRunner.query(`CREATE INDEX "IDX_c828facbb4250117f83416d9f7" ON "timesheet" ("isBilled") `);
		await queryRunner.query(`CREATE INDEX "IDX_3502c60f98a7cda58dea75bcb5" ON "timesheet" ("lockedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_3f8fc4b5718fcaa913f9438e27" ON "timesheet" ("submittedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_6a79eb7534066b11f59243ede1" ON "timesheet" ("approvedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_f6558fbb3158ab90da1c41d943" ON "timesheet" ("stoppedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_930e2b28de9ecb1ea689d5a97a" ON "timesheet" ("startedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_25b8df69c9b7f5752c6a6a6ef7" ON "timesheet" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_aca65a79fe0c1ec9e6a59022c5" ON "timesheet" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8c8f821cb0fe0dd387491ea7d9" ON "timesheet" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_6c1f81934a3f597b3b1a17f562" ON "timesheet" ("approvedById") `);
		await queryRunner.query(`CREATE INDEX "IDX_42205a9e6af108364e5cc62dd4" ON "timesheet" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f2d4cd3a7e839bfc7cb6b993ff" ON "timesheet" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_29c3c8cc3ea9db22e4a347f4b5"`);
		await queryRunner.query(`DROP INDEX "IDX_ca24fc59aac015d9660955f5f6"`);
		await queryRunner.query(`DROP INDEX "IDX_1f97ff07fb198bd0a7786b2abd"`);
		await queryRunner.query(`DROP INDEX "IDX_7143f31467178a6164a42426c1"`);
		await queryRunner.query(`DROP INDEX "IDX_611e1392c8cc9b101e3ea7ad80"`);
		await queryRunner.query(`DROP INDEX "IDX_c764336019c69cc4927f317cb0"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_user_organization" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "isDefault" boolean NOT NULL DEFAULT (1), "isActive" boolean DEFAULT (1), "userId" varchar NOT NULL, "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_29c3c8cc3ea9db22e4a347f4b5a" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7143f31467178a6164a42426c15" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_611e1392c8cc9b101e3ea7ad80c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_user_organization"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "isDefault", "isActive", "userId", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "isDefault", "isActive", "userId", "isArchived", "deletedAt" FROM "user_organization"`
		);
		await queryRunner.query(`DROP TABLE "user_organization"`);
		await queryRunner.query(`ALTER TABLE "temporary_user_organization" RENAME TO "user_organization"`);
		await queryRunner.query(`CREATE INDEX "IDX_29c3c8cc3ea9db22e4a347f4b5" ON "user_organization" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ca24fc59aac015d9660955f5f6" ON "user_organization" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1f97ff07fb198bd0a7786b2abd" ON "user_organization" ("isDefault") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_7143f31467178a6164a42426c1" ON "user_organization" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_611e1392c8cc9b101e3ea7ad80" ON "user_organization" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c764336019c69cc4927f317cb0" ON "user_organization" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_f725c3df76a1a94e3e9f0313a5"`);
		await queryRunner.query(`DROP INDEX "IDX_0e9f745ad08103a1c21523326c"`);
		await queryRunner.query(`DROP INDEX "IDX_5864814596f85fe59bd1a0dc76"`);
		await queryRunner.query(`DROP INDEX "IDX_1a8ae1126aae1823d62ccf3f82"`);
		await queryRunner.query(`DROP INDEX "IDX_685bf353c85f23b6f848e4dcde"`);
		await queryRunner.query(`DROP INDEX "IDX_19de43e9f1842360ce646253d7"`);
		await queryRunner.query(`DROP INDEX "IDX_58e4dbff0e1a32a9bdc861bb29"`);
		await queryRunner.query(`DROP INDEX "IDX_f0e1b4ecdca13b177e2e3a0613"`);
		await queryRunner.query(`DROP INDEX "IDX_e12875dfb3b1d92d7d7c5377e2"`);
		await queryRunner.query(`DROP INDEX "IDX_78a916df40e02a9deb1c4b75ed"`);
		await queryRunner.query(`DROP INDEX "IDX_c28e52f758e7bbc53828db9219"`);
		await queryRunner.query(`DROP INDEX "IDX_f2578043e491921209f5dadd08"`);
		await queryRunner.query(`DROP INDEX "IDX_5e028298e103e1694147ada69e"`);
		await queryRunner.query(`DROP INDEX "IDX_fde2ce12ab12b02ae583dd76c7"`);
		await queryRunner.query(`DROP INDEX "IDX_557cb712d32a9ad9ffbb4cd50d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_user" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "thirdPartyId" varchar, "firstName" varchar, "lastName" varchar, "email" varchar, "username" varchar, "hash" varchar, "imageUrl" varchar(500), "preferredLanguage" varchar DEFAULT ('en'), "preferredComponentLayout" varchar CHECK( "preferredComponentLayout" IN ('CARDS_GRID','TABLE') ) DEFAULT ('TABLE'), "roleId" varchar, "refreshToken" varchar, "isActive" boolean DEFAULT (1), "code" varchar, "codeExpireAt" datetime, "emailVerifiedAt" datetime, "emailToken" varchar, "phoneNumber" varchar, "timeZone" varchar, "imageId" varchar, "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "timeFormat" varchar CHECK( "timeFormat" IN ('12','24') ) NOT NULL DEFAULT (12), "lastLoginAt" datetime, "defaultTeamId" varchar, "lastTeamId" varchar, "defaultOrganizationId" varchar, "lastOrganizationId" varchar, "archivedAt" datetime, CONSTRAINT "FK_f725c3df76a1a94e3e9f0313a5f" FOREIGN KEY ("lastOrganizationId") REFERENCES "organization" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_0e9f745ad08103a1c21523326c6" FOREIGN KEY ("defaultOrganizationId") REFERENCES "organization" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_5864814596f85fe59bd1a0dc766" FOREIGN KEY ("lastTeamId") REFERENCES "organization_team" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_1a8ae1126aae1823d62ccf3f821" FOREIGN KEY ("defaultTeamId") REFERENCES "organization_team" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_685bf353c85f23b6f848e4dcded" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5e028298e103e1694147ada69e5" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_user"("id", "createdAt", "updatedAt", "tenantId", "thirdPartyId", "firstName", "lastName", "email", "username", "hash", "imageUrl", "preferredLanguage", "preferredComponentLayout", "roleId", "refreshToken", "isActive", "code", "codeExpireAt", "emailVerifiedAt", "emailToken", "phoneNumber", "timeZone", "imageId", "isArchived", "deletedAt", "timeFormat", "lastLoginAt", "defaultTeamId", "lastTeamId", "defaultOrganizationId", "lastOrganizationId") SELECT "id", "createdAt", "updatedAt", "tenantId", "thirdPartyId", "firstName", "lastName", "email", "username", "hash", "imageUrl", "preferredLanguage", "preferredComponentLayout", "roleId", "refreshToken", "isActive", "code", "codeExpireAt", "emailVerifiedAt", "emailToken", "phoneNumber", "timeZone", "imageId", "isArchived", "deletedAt", "timeFormat", "lastLoginAt", "defaultTeamId", "lastTeamId", "defaultOrganizationId", "lastOrganizationId" FROM "user"`
		);
		await queryRunner.query(`DROP TABLE "user"`);
		await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
		await queryRunner.query(`CREATE INDEX "IDX_f725c3df76a1a94e3e9f0313a5" ON "user" ("lastOrganizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_0e9f745ad08103a1c21523326c" ON "user" ("defaultOrganizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5864814596f85fe59bd1a0dc76" ON "user" ("lastTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1a8ae1126aae1823d62ccf3f82" ON "user" ("defaultTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_685bf353c85f23b6f848e4dcde" ON "user" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_19de43e9f1842360ce646253d7" ON "user" ("thirdPartyId") `);
		await queryRunner.query(`CREATE INDEX "IDX_58e4dbff0e1a32a9bdc861bb29" ON "user" ("firstName") `);
		await queryRunner.query(`CREATE INDEX "IDX_f0e1b4ecdca13b177e2e3a0613" ON "user" ("lastName") `);
		await queryRunner.query(`CREATE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
		await queryRunner.query(`CREATE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username") `);
		await queryRunner.query(`CREATE INDEX "IDX_c28e52f758e7bbc53828db9219" ON "user" ("roleId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f2578043e491921209f5dadd08" ON "user" ("phoneNumber") `);
		await queryRunner.query(`CREATE INDEX "IDX_5e028298e103e1694147ada69e" ON "user" ("imageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_fde2ce12ab12b02ae583dd76c7" ON "user" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_557cb712d32a9ad9ffbb4cd50d" ON "user" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_c899e17322d11e1977832e8c65"`);
		await queryRunner.query(`DROP INDEX "IDX_62573a939f834f2de343f98288"`);
		await queryRunner.query(`DROP INDEX "IDX_a8c9aee14d47ec7b3f2ac429eb"`);
		await queryRunner.query(`DROP INDEX "IDX_3f934c4772e7c7f2c66d7ea4e7"`);
		await queryRunner.query(`DROP INDEX "IDX_7a584a02d15a022e9c4f06ea72"`);
		await queryRunner.query(`DROP INDEX "IDX_3370818c940a51996d80bb4d16"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_warehouse_product" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "quantity" numeric DEFAULT (0), "warehouseId" varchar NOT NULL, "productId" varchar NOT NULL, "organizationId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_3f934c4772e7c7f2c66d7ea4e72" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a8c9aee14d47ec7b3f2ac429ebc" FOREIGN KEY ("warehouseId") REFERENCES "warehouse" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c899e17322d11e1977832e8c656" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_62573a939f834f2de343f98288c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_warehouse_product"("id", "createdAt", "updatedAt", "tenantId", "quantity", "warehouseId", "productId", "organizationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "quantity", "warehouseId", "productId", "organizationId", "isActive", "isArchived", "deletedAt" FROM "warehouse_product"`
		);
		await queryRunner.query(`DROP TABLE "warehouse_product"`);
		await queryRunner.query(`ALTER TABLE "temporary_warehouse_product" RENAME TO "warehouse_product"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_c899e17322d11e1977832e8c65" ON "warehouse_product" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_62573a939f834f2de343f98288" ON "warehouse_product" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_a8c9aee14d47ec7b3f2ac429eb" ON "warehouse_product" ("warehouseId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_3f934c4772e7c7f2c66d7ea4e7" ON "warehouse_product" ("productId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7a584a02d15a022e9c4f06ea72" ON "warehouse_product" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_3370818c940a51996d80bb4d16" ON "warehouse_product" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_d5f4b64e6a80546fd6dd4ac3ed"`);
		await queryRunner.query(`DROP INDEX "IDX_a1c4a97b928b547c3041d3ac1f"`);
		await queryRunner.query(`DROP INDEX "IDX_a2f863689d1316810c41c1ea38"`);
		await queryRunner.query(`DROP INDEX "IDX_617306cb3613dd8d59301ae16f"`);
		await queryRunner.query(`DROP INDEX "IDX_5f32a52e9bd19bf323b02efcd1"`);
		await queryRunner.query(`DROP INDEX "IDX_40aa52eaed1ce133f5fee76bca"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_warehouse_product_variant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "quantity" numeric DEFAULT (0), "variantId" varchar NOT NULL, "warehouseProductId" varchar NOT NULL, "organizationId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_d5f4b64e6a80546fd6dd4ac3ed0" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a1c4a97b928b547c3041d3ac1f6" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a2f863689d1316810c41c1ea38e" FOREIGN KEY ("variantId") REFERENCES "product_variant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_617306cb3613dd8d59301ae16fd" FOREIGN KEY ("warehouseProductId") REFERENCES "warehouse_product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_warehouse_product_variant"("id", "createdAt", "updatedAt", "tenantId", "quantity", "variantId", "warehouseProductId", "organizationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "quantity", "variantId", "warehouseProductId", "organizationId", "isActive", "isArchived", "deletedAt" FROM "warehouse_product_variant"`
		);
		await queryRunner.query(`DROP TABLE "warehouse_product_variant"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_warehouse_product_variant" RENAME TO "warehouse_product_variant"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d5f4b64e6a80546fd6dd4ac3ed" ON "warehouse_product_variant" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a1c4a97b928b547c3041d3ac1f" ON "warehouse_product_variant" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a2f863689d1316810c41c1ea38" ON "warehouse_product_variant" ("variantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_617306cb3613dd8d59301ae16f" ON "warehouse_product_variant" ("warehouseProductId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5f32a52e9bd19bf323b02efcd1" ON "warehouse_product_variant" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_40aa52eaed1ce133f5fee76bca" ON "warehouse_product_variant" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_9b2f00761a6b1b77cb6289e3ff"`);
		await queryRunner.query(`DROP INDEX "IDX_f5735eafddabdb4b20f621a976"`);
		await queryRunner.query(`DROP INDEX "IDX_f502dc6d9802306f9d1584932b"`);
		await queryRunner.query(`DROP INDEX "IDX_84594016a98da8b87e0f51cd93"`);
		await queryRunner.query(`DROP INDEX "IDX_ee85901ae866ffe2061d5b35c8"`);
		await queryRunner.query(`DROP INDEX "IDX_835691d3dd62d0b705302cbb2d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_warehouse" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "code" varchar NOT NULL, "email" varchar NOT NULL, "description" varchar, "active" boolean NOT NULL DEFAULT (1), "logoId" varchar, "contactId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "REL_84594016a98da8b87e0f51cd93" UNIQUE ("contactId"), CONSTRAINT "FK_84594016a98da8b87e0f51cd931" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f502dc6d9802306f9d1584932b8" FOREIGN KEY ("logoId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_f5735eafddabdb4b20f621a976a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9b2f00761a6b1b77cb6289e3fff" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_warehouse"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "email", "description", "active", "logoId", "contactId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "email", "description", "active", "logoId", "contactId", "isActive", "isArchived", "deletedAt" FROM "warehouse"`
		);
		await queryRunner.query(`DROP TABLE "warehouse"`);
		await queryRunner.query(`ALTER TABLE "temporary_warehouse" RENAME TO "warehouse"`);
		await queryRunner.query(`CREATE INDEX "IDX_9b2f00761a6b1b77cb6289e3ff" ON "warehouse" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f5735eafddabdb4b20f621a976" ON "warehouse" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f502dc6d9802306f9d1584932b" ON "warehouse" ("logoId") `);
		await queryRunner.query(`CREATE INDEX "IDX_84594016a98da8b87e0f51cd93" ON "warehouse" ("contactId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ee85901ae866ffe2061d5b35c8" ON "warehouse" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_835691d3dd62d0b705302cbb2d" ON "warehouse" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_744268ee0ec6073883267bc3b6"`);
		await queryRunner.query(`DROP INDEX "IDX_c2037b621d2e8023898aee4ac7"`);
		await queryRunner.query(`DROP INDEX "IDX_cc89233c87fcf64b01df07e038"`);
		await queryRunner.query(`DROP INDEX "IDX_cbc2b8338d45e774afd8682ffe"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_changelog" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "icon" varchar, "title" varchar, "date" datetime NOT NULL, "content" varchar NOT NULL, "learnMoreUrl" varchar, "isFeature" boolean, "imageUrl" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_744268ee0ec6073883267bc3b66" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c2037b621d2e8023898aee4ac74" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_changelog"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "icon", "title", "date", "content", "learnMoreUrl", "isFeature", "imageUrl", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "icon", "title", "date", "content", "learnMoreUrl", "isFeature", "imageUrl", "isActive", "isArchived", "deletedAt" FROM "changelog"`
		);
		await queryRunner.query(`DROP TABLE "changelog"`);
		await queryRunner.query(`ALTER TABLE "temporary_changelog" RENAME TO "changelog"`);
		await queryRunner.query(`CREATE INDEX "IDX_744268ee0ec6073883267bc3b6" ON "changelog" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c2037b621d2e8023898aee4ac7" ON "changelog" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_cc89233c87fcf64b01df07e038" ON "changelog" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_cbc2b8338d45e774afd8682ffe" ON "changelog" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_add7dbec156589dd0b27e2e0c4"`);
		await queryRunner.query(`DROP INDEX "IDX_9e8a77c1d330554fab9230100a"`);
		await queryRunner.query(`DROP INDEX "IDX_a146e202c19f521bf5ec69bb26"`);
		await queryRunner.query(`DROP INDEX "IDX_6eea42a69e130bbd14b7ea3659"`);
		await queryRunner.query(`DROP INDEX "IDX_ca0fa80f50baed7287a499dc2c"`);
		await queryRunner.query(`DROP INDEX "IDX_69d75a47af6bfcda545a865691"`);
		await queryRunner.query(`DROP INDEX "IDX_480158f21938444e4f62fb3185"`);
		await queryRunner.query(`DROP INDEX "IDX_ef65338e8597b9f56fd0fe3c94"`);
		await queryRunner.query(`DROP INDEX "IDX_5e97728cfda96f49cc7f95bbaf"`);
		await queryRunner.query(`DROP INDEX "IDX_04717f25bea7d9cef0d51cac50"`);
		await queryRunner.query(`DROP INDEX "IDX_34c48d11eb82ef42e89370bdc7"`);
		await queryRunner.query(`DROP INDEX "IDX_2eec784cadcb7847b64937fb58"`);
		await queryRunner.query(`DROP INDEX "IDX_59407d03d189560ac1a0a4b0eb"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_github_repository" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "repositoryId" bigint NOT NULL, "name" varchar NOT NULL, "fullName" varchar NOT NULL, "owner" varchar NOT NULL, "integrationId" varchar, "issuesCount" integer, "hasSyncEnabled" boolean DEFAULT (1), "private" boolean DEFAULT (0), "status" varchar, "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_add7dbec156589dd0b27e2e0c49" FOREIGN KEY ("integrationId") REFERENCES "integration_tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_69d75a47af6bfcda545a865691b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_480158f21938444e4f62fb31857" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_github_repository"("id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "repositoryId", "name", "fullName", "owner", "integrationId", "issuesCount", "hasSyncEnabled", "private", "status", "deletedAt") SELECT "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "repositoryId", "name", "fullName", "owner", "integrationId", "issuesCount", "hasSyncEnabled", "private", "status", "deletedAt" FROM "organization_github_repository"`
		);
		await queryRunner.query(`DROP TABLE "organization_github_repository"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_organization_github_repository" RENAME TO "organization_github_repository"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_add7dbec156589dd0b27e2e0c4" ON "organization_github_repository" ("integrationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9e8a77c1d330554fab9230100a" ON "organization_github_repository" ("owner") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a146e202c19f521bf5ec69bb26" ON "organization_github_repository" ("fullName") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6eea42a69e130bbd14b7ea3659" ON "organization_github_repository" ("name") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ca0fa80f50baed7287a499dc2c" ON "organization_github_repository" ("repositoryId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_69d75a47af6bfcda545a865691" ON "organization_github_repository" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_480158f21938444e4f62fb3185" ON "organization_github_repository" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ef65338e8597b9f56fd0fe3c94" ON "organization_github_repository" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5e97728cfda96f49cc7f95bbaf" ON "organization_github_repository" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_04717f25bea7d9cef0d51cac50" ON "organization_github_repository" ("issuesCount") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_34c48d11eb82ef42e89370bdc7" ON "organization_github_repository" ("hasSyncEnabled") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2eec784cadcb7847b64937fb58" ON "organization_github_repository" ("private") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_59407d03d189560ac1a0a4b0eb" ON "organization_github_repository" ("status") `
		);
		await queryRunner.query(`DROP INDEX "IDX_5065401113abb6e9608225e567"`);
		await queryRunner.query(`DROP INDEX "IDX_a8709a9c5cc142c6fbe92df274"`);
		await queryRunner.query(`DROP INDEX "IDX_055f310a04a928343494a5255a"`);
		await queryRunner.query(`DROP INDEX "IDX_6c8e119fc6a2a7d3413aa76d3b"`);
		await queryRunner.query(`DROP INDEX "IDX_b3234be5b70c2362cdf67bb188"`);
		await queryRunner.query(`DROP INDEX "IDX_c774c276d6b7ea05a7e12d3c81"`);
		await queryRunner.query(`DROP INDEX "IDX_d706210d377ece2a1bc3386388"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_organization_github_repository_issue" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "issueId" bigint NOT NULL, "issueNumber" integer NOT NULL, "repositoryId" varchar, "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_5065401113abb6e9608225e5678" FOREIGN KEY ("repositoryId") REFERENCES "organization_github_repository" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_6c8e119fc6a2a7d3413aa76d3bd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b3234be5b70c2362cdf67bb1889" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_organization_github_repository_issue"("id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "issueId", "issueNumber", "repositoryId", "deletedAt") SELECT "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "issueId", "issueNumber", "repositoryId", "deletedAt" FROM "organization_github_repository_issue"`
		);
		await queryRunner.query(`DROP TABLE "organization_github_repository_issue"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_organization_github_repository_issue" RENAME TO "organization_github_repository_issue"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5065401113abb6e9608225e567" ON "organization_github_repository_issue" ("repositoryId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a8709a9c5cc142c6fbe92df274" ON "organization_github_repository_issue" ("issueNumber") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_055f310a04a928343494a5255a" ON "organization_github_repository_issue" ("issueId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6c8e119fc6a2a7d3413aa76d3b" ON "organization_github_repository_issue" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b3234be5b70c2362cdf67bb188" ON "organization_github_repository_issue" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c774c276d6b7ea05a7e12d3c81" ON "organization_github_repository_issue" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d706210d377ece2a1bc3386388" ON "organization_github_repository_issue" ("isActive") `
		);
		await queryRunner.query(`DROP INDEX "IDX_cc28a54171231fbd9a127051f0"`);
		await queryRunner.query(`DROP INDEX "IDX_d59ec6899d435f430799795ad7"`);
		await queryRunner.query(`DROP INDEX "IDX_4177329f5e6ddbfb6416592713"`);
		await queryRunner.query(`DROP INDEX "IDX_61a30a7d83666bf265fd86a72d"`);
		await queryRunner.query(`DROP INDEX "IDX_e2836e856f491dd4676e1ec8d3"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_proposal" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "jobPostUrl" varchar, "valueDate" datetime, "jobPostContent" varchar NOT NULL, "proposalContent" varchar NOT NULL, "status" varchar NOT NULL, "employeeId" varchar, "organizationContactId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_61c45ab51852e4b0e539756d40f" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f399488a0f3ea10bb511e3f5aa3" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d59ec6899d435f430799795ad7b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_4177329f5e6ddbfb64165927134" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_proposal"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPostUrl", "valueDate", "jobPostContent", "proposalContent", "status", "employeeId", "organizationContactId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPostUrl", "valueDate", "jobPostContent", "proposalContent", "status", "employeeId", "organizationContactId", "isActive", "isArchived", "deletedAt" FROM "proposal"`
		);
		await queryRunner.query(`DROP TABLE "proposal"`);
		await queryRunner.query(`ALTER TABLE "temporary_proposal" RENAME TO "proposal"`);
		await queryRunner.query(`CREATE INDEX "IDX_cc28a54171231fbd9a127051f0" ON "proposal" ("jobPostUrl") `);
		await queryRunner.query(`CREATE INDEX "IDX_d59ec6899d435f430799795ad7" ON "proposal" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4177329f5e6ddbfb6416592713" ON "proposal" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_61a30a7d83666bf265fd86a72d" ON "proposal" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_e2836e856f491dd4676e1ec8d3" ON "proposal" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_2be728a7f8b118712a4200990d"`);
		await queryRunner.query(`DROP INDEX "IDX_a13f3564eae9db44ddc4308afc"`);
		await queryRunner.query(`DROP INDEX "IDX_0111963c9cb4dd14565c0d9c84"`);
		await queryRunner.query(`DROP INDEX "IDX_dc2ff85f7de16dea6453a833dd"`);
		await queryRunner.query(`DROP INDEX "IDX_ee780fbd8f91de31c004929eec"`);
		await queryRunner.query(`DROP INDEX "IDX_f577c9bc6183c1d1eae1e154bb"`);
		await queryRunner.query(`DROP INDEX "IDX_2bb17670e2bea3980ff960bbcf"`);
		await queryRunner.query(`DROP INDEX "IDX_e396663e1a31114eac39087829"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_employee_proposal_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "content" text, "isDefault" boolean NOT NULL DEFAULT (0), "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_2be728a7f8b118712a4200990d4" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ee780fbd8f91de31c004929eecb" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f577c9bc6183c1d1eae1e154bbc" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_employee_proposal_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "content", "isDefault", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "content", "isDefault", "employeeId", "isActive", "isArchived", "deletedAt" FROM "employee_proposal_template"`
		);
		await queryRunner.query(`DROP TABLE "employee_proposal_template"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_employee_proposal_template" RENAME TO "employee_proposal_template"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2be728a7f8b118712a4200990d" ON "employee_proposal_template" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a13f3564eae9db44ddc4308afc" ON "employee_proposal_template" ("isDefault") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0111963c9cb4dd14565c0d9c84" ON "employee_proposal_template" ("content") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_dc2ff85f7de16dea6453a833dd" ON "employee_proposal_template" ("name") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ee780fbd8f91de31c004929eec" ON "employee_proposal_template" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f577c9bc6183c1d1eae1e154bb" ON "employee_proposal_template" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2bb17670e2bea3980ff960bbcf" ON "employee_proposal_template" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e396663e1a31114eac39087829" ON "employee_proposal_template" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_44e22d88b47daf2095491b7cac"`);
		await queryRunner.query(`DROP INDEX "IDX_1a62a99e1016e4a2b461e886ec"`);
		await queryRunner.query(`DROP INDEX "IDX_9f1288205ae91f91cf356cac2f"`);
		await queryRunner.query(`DROP INDEX "IDX_cb64573b18dd7b23f591f15502"`);
		await queryRunner.query(`DROP INDEX "IDX_c8723c90a6f007f8d7e882a04f"`);
		await queryRunner.query(`DROP INDEX "IDX_4b8450a24233df8b47ca472923"`);
		await queryRunner.query(`DROP INDEX "IDX_e4bc75a1cbb07d117a0acfcdba"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_job_search_occupation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "jobSourceOccupationId" varchar, "jobSource" text NOT NULL DEFAULT ('upwork'), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_44e22d88b47daf2095491b7cac3" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1a62a99e1016e4a2b461e886ecd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_job_search_occupation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "jobSourceOccupationId", "jobSource", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "jobSourceOccupationId", "jobSource", "isActive", "isArchived", "deletedAt" FROM "job_search_occupation"`
		);
		await queryRunner.query(`DROP TABLE "job_search_occupation"`);
		await queryRunner.query(`ALTER TABLE "temporary_job_search_occupation" RENAME TO "job_search_occupation"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_44e22d88b47daf2095491b7cac" ON "job_search_occupation" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_1a62a99e1016e4a2b461e886ec" ON "job_search_occupation" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9f1288205ae91f91cf356cac2f" ON "job_search_occupation" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_cb64573b18dd7b23f591f15502" ON "job_search_occupation" ("jobSourceOccupationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c8723c90a6f007f8d7e882a04f" ON "job_search_occupation" ("jobSource") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4b8450a24233df8b47ca472923" ON "job_search_occupation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e4bc75a1cbb07d117a0acfcdba" ON "job_search_occupation" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_35e120f2b6e5188391cf068d3b"`);
		await queryRunner.query(`DROP INDEX "IDX_86381fb6d28978b101b3aec8ca"`);
		await queryRunner.query(`DROP INDEX "IDX_3b335bbcbf7d5e00853acaa165"`);
		await queryRunner.query(`DROP INDEX "IDX_d0a798419c775b9157bf0269f4"`);
		await queryRunner.query(`DROP INDEX "IDX_6ee5218c869b57197e4a209bed"`);
		await queryRunner.query(`DROP INDEX "IDX_36333846c37e5f8812a5c9f7ff"`);
		await queryRunner.query(`DROP INDEX "IDX_015231c6e28cfb2b789ca4b76f"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_job_search_category" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "jobSourceCategoryId" varchar, "jobSource" text NOT NULL DEFAULT ('upwork'), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_35e120f2b6e5188391cf068d3ba" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_86381fb6d28978b101b3aec8ca4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_job_search_category"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "jobSourceCategoryId", "jobSource", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "jobSourceCategoryId", "jobSource", "isActive", "isArchived", "deletedAt" FROM "job_search_category"`
		);
		await queryRunner.query(`DROP TABLE "job_search_category"`);
		await queryRunner.query(`ALTER TABLE "temporary_job_search_category" RENAME TO "job_search_category"`);
		await queryRunner.query(`CREATE INDEX "IDX_35e120f2b6e5188391cf068d3b" ON "job_search_category" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_86381fb6d28978b101b3aec8ca" ON "job_search_category" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_3b335bbcbf7d5e00853acaa165" ON "job_search_category" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_d0a798419c775b9157bf0269f4" ON "job_search_category" ("jobSourceCategoryId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6ee5218c869b57197e4a209bed" ON "job_search_category" ("jobSource") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_36333846c37e5f8812a5c9f7ff" ON "job_search_category" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_015231c6e28cfb2b789ca4b76f" ON "job_search_category" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_630337302efe97cc93deeb2151"`);
		await queryRunner.query(`DROP INDEX "IDX_afe6c40d3d9951388fa05f83f2"`);
		await queryRunner.query(`DROP INDEX "IDX_6bae61744663a416e73903d9af"`);
		await queryRunner.query(`DROP INDEX "IDX_0e130a25bb4abe1b27c8a0adf4"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_employee_upwork_job_search_criterion" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "jobPresetId" varchar, "employeeId" varchar NOT NULL, "occupationId" varchar, "categoryId" varchar, "keyword" varchar, "jobType" text, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_d2b148ddd67e520fb8061f4c133" FOREIGN KEY ("categoryId") REFERENCES "job_search_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_b6bcd5ceb60e4bb493344a6b4f2" FOREIGN KEY ("occupationId") REFERENCES "job_search_occupation" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_c872e6e3ab28e813c2324d1f4fb" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2dc73e07ac7040f273cea3c999d" FOREIGN KEY ("jobPresetId") REFERENCES "job_preset" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_630337302efe97cc93deeb21516" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_afe6c40d3d9951388fa05f83f28" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_employee_upwork_job_search_criterion"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPresetId", "employeeId", "occupationId", "categoryId", "keyword", "jobType", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPresetId", "employeeId", "occupationId", "categoryId", "keyword", "jobType", "isActive", "isArchived", "deletedAt" FROM "employee_upwork_job_search_criterion"`
		);
		await queryRunner.query(`DROP TABLE "employee_upwork_job_search_criterion"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_employee_upwork_job_search_criterion" RENAME TO "employee_upwork_job_search_criterion"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_630337302efe97cc93deeb2151" ON "employee_upwork_job_search_criterion" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_afe6c40d3d9951388fa05f83f2" ON "employee_upwork_job_search_criterion" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6bae61744663a416e73903d9af" ON "employee_upwork_job_search_criterion" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0e130a25bb4abe1b27c8a0adf4" ON "employee_upwork_job_search_criterion" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_f2c1b6770dd2a3abfa35f49411"`);
		await queryRunner.query(`DROP INDEX "IDX_a4b038417e3221c0791dd8c771"`);
		await queryRunner.query(`DROP INDEX "IDX_7e53ea80aca15da11a8a5ec038"`);
		await queryRunner.query(`DROP INDEX "IDX_46226c3185e3ca3d7033831d7a"`);
		await queryRunner.query(`DROP INDEX "IDX_e210f70c3904cf84ab5113be8f"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_job_preset" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_a4b038417e3221c0791dd8c7714" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7e53ea80aca15da11a8a5ec0380" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_job_preset"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "job_preset"`
		);
		await queryRunner.query(`DROP TABLE "job_preset"`);
		await queryRunner.query(`ALTER TABLE "temporary_job_preset" RENAME TO "job_preset"`);
		await queryRunner.query(`CREATE INDEX "IDX_f2c1b6770dd2a3abfa35f49411" ON "job_preset" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_a4b038417e3221c0791dd8c771" ON "job_preset" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7e53ea80aca15da11a8a5ec038" ON "job_preset" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_46226c3185e3ca3d7033831d7a" ON "job_preset" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_e210f70c3904cf84ab5113be8f" ON "job_preset" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_d5ca48cfacfb516543d6507ca4"`);
		await queryRunner.query(`DROP INDEX "IDX_2323220b4decfd2f4d8307fd78"`);
		await queryRunner.query(`DROP INDEX "IDX_af850e1fa48af82d66e9bf81c7"`);
		await queryRunner.query(`DROP INDEX "IDX_4070b6f3480e9c4b2dcf3f7b56"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_job_preset_upwork_job_search_criterion" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "jobPresetId" varchar NOT NULL, "occupationId" varchar, "categoryId" varchar, "keyword" varchar, "jobType" text, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_b909a3df761d7e489aca80f138a" FOREIGN KEY ("categoryId") REFERENCES "job_search_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d45b36b85ffbd5189f7e70f29f5" FOREIGN KEY ("occupationId") REFERENCES "job_search_occupation" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9a687ce1a10a3abda460922cf84" FOREIGN KEY ("jobPresetId") REFERENCES "job_preset" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d5ca48cfacfb516543d6507ca4a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2323220b4decfd2f4d8307fd78f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_job_preset_upwork_job_search_criterion"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPresetId", "occupationId", "categoryId", "keyword", "jobType", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPresetId", "occupationId", "categoryId", "keyword", "jobType", "isActive", "isArchived", "deletedAt" FROM "job_preset_upwork_job_search_criterion"`
		);
		await queryRunner.query(`DROP TABLE "job_preset_upwork_job_search_criterion"`);
		await queryRunner.query(
			`ALTER TABLE "temporary_job_preset_upwork_job_search_criterion" RENAME TO "job_preset_upwork_job_search_criterion"`
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d5ca48cfacfb516543d6507ca4" ON "job_preset_upwork_job_search_criterion" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2323220b4decfd2f4d8307fd78" ON "job_preset_upwork_job_search_criterion" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_af850e1fa48af82d66e9bf81c7" ON "job_preset_upwork_job_search_criterion" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4070b6f3480e9c4b2dcf3f7b56" ON "job_preset_upwork_job_search_criterion" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_ff979040ce93cbc60863d322ec"`);
		await queryRunner.query(`DROP INDEX "IDX_2ba72a9dec732a10e8c05bcdec"`);
		await queryRunner.query(`DROP INDEX "IDX_bcb30c9893f4c8d0c4e556b4ed"`);
		await queryRunner.query(`DROP INDEX "IDX_9b22423b8cb20087c16613ecba"`);
		await queryRunner.query(`DROP INDEX "IDX_0765098c5a6f93f51a55bda026"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_knowledge_base" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "flag" varchar NOT NULL, "icon" varchar NOT NULL, "privacy" varchar NOT NULL, "language" varchar NOT NULL, "color" varchar NOT NULL, "description" varchar, "data" varchar, "index" integer, "parentId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_ff979040ce93cbc60863d322ecd" FOREIGN KEY ("parentId") REFERENCES "knowledge_base" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_2ba72a9dec732a10e8c05bcdec1" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_bcb30c9893f4c8d0c4e556b4ed3" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_knowledge_base"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "flag", "icon", "privacy", "language", "color", "description", "data", "index", "parentId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "flag", "icon", "privacy", "language", "color", "description", "data", "index", "parentId", "isActive", "isArchived", "deletedAt" FROM "knowledge_base"`
		);
		await queryRunner.query(`DROP TABLE "knowledge_base"`);
		await queryRunner.query(`ALTER TABLE "temporary_knowledge_base" RENAME TO "knowledge_base"`);
		await queryRunner.query(`CREATE INDEX "IDX_ff979040ce93cbc60863d322ec" ON "knowledge_base" ("parentId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_2ba72a9dec732a10e8c05bcdec" ON "knowledge_base" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_bcb30c9893f4c8d0c4e556b4ed" ON "knowledge_base" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9b22423b8cb20087c16613ecba" ON "knowledge_base" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_0765098c5a6f93f51a55bda026" ON "knowledge_base" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_66af194845635058239e794e1b"`);
		await queryRunner.query(`DROP INDEX "IDX_3547f82f867489542ceae58a49"`);
		await queryRunner.query(`DROP INDEX "IDX_06a9902fedc1f9dcdbaf14afb0"`);
		await queryRunner.query(`DROP INDEX "IDX_1544c43e36e1ccf7d578c70607"`);
		await queryRunner.query(`DROP INDEX "IDX_e9720156c57ff1ad841e95ace7"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_knowledge_base_article" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "data" varchar, "draft" boolean NOT NULL, "privacy" boolean NOT NULL, "index" integer NOT NULL, "categoryId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_66af194845635058239e794e1b9" FOREIGN KEY ("categoryId") REFERENCES "knowledge_base" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3547f82f867489542ceae58a49e" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_06a9902fedc1f9dcdbaf14afb01" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_knowledge_base_article"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "data", "draft", "privacy", "index", "categoryId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "data", "draft", "privacy", "index", "categoryId", "isActive", "isArchived", "deletedAt" FROM "knowledge_base_article"`
		);
		await queryRunner.query(`DROP TABLE "knowledge_base_article"`);
		await queryRunner.query(`ALTER TABLE "temporary_knowledge_base_article" RENAME TO "knowledge_base_article"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_66af194845635058239e794e1b" ON "knowledge_base_article" ("categoryId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3547f82f867489542ceae58a49" ON "knowledge_base_article" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_06a9902fedc1f9dcdbaf14afb0" ON "knowledge_base_article" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_1544c43e36e1ccf7d578c70607" ON "knowledge_base_article" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e9720156c57ff1ad841e95ace7" ON "knowledge_base_article" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_2d5ecab1f06b327bad54553614"`);
		await queryRunner.query(`DROP INDEX "IDX_8eb7e413257d7a26104f4e326f"`);
		await queryRunner.query(`DROP INDEX "IDX_81558bb2bef673628d92540b4e"`);
		await queryRunner.query(`DROP INDEX "IDX_1551e821871d9230cc0dafbbe5"`);
		await queryRunner.query(`DROP INDEX "IDX_b9623984c84eb7be4c0eb076c2"`);
		await queryRunner.query(`DROP INDEX "IDX_a9130ad7824fb843f06103971e"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_knowledge_base_author" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "employeeId" varchar NOT NULL, "articleId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "archivedAt" datetime, CONSTRAINT "FK_2d5ecab1f06b327bad545536143" FOREIGN KEY ("articleId") REFERENCES "knowledge_base_article" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8eb7e413257d7a26104f4e326fd" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_81558bb2bef673628d92540b4e4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_1551e821871d9230cc0dafbbe58" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_knowledge_base_author"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "employeeId", "articleId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "employeeId", "articleId", "isActive", "isArchived", "deletedAt" FROM "knowledge_base_author"`
		);
		await queryRunner.query(`DROP TABLE "knowledge_base_author"`);
		await queryRunner.query(`ALTER TABLE "temporary_knowledge_base_author" RENAME TO "knowledge_base_author"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_2d5ecab1f06b327bad54553614" ON "knowledge_base_author" ("articleId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8eb7e413257d7a26104f4e326f" ON "knowledge_base_author" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_81558bb2bef673628d92540b4e" ON "knowledge_base_author" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_1551e821871d9230cc0dafbbe5" ON "knowledge_base_author" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b9623984c84eb7be4c0eb076c2" ON "knowledge_base_author" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a9130ad7824fb843f06103971e" ON "knowledge_base_author" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_db21a1dc776b455ee83eb7ff88"`);
		await queryRunner.query(`DROP INDEX "IDX_06e7335708b5e7870f1eaa608d"`);
		await queryRunner.query(`DROP INDEX "IDX_913f7739f1262fc8c70cbbafa3"`);
		await queryRunner.query(`DROP INDEX "IDX_f3591fd59cc32b585c3ba7d3ae"`);
		await queryRunner.query(`DROP INDEX "IDX_28f06c5655d507668b8839b59a"`);
		await queryRunner.query(`DROP INDEX "IDX_28ce717020729e36aa06cca5c5"`);
		await queryRunner.query(`DROP INDEX "IDX_586e6b1273ba2732ec0ee41a80"`);
		await queryRunner.query(`DROP INDEX "IDX_9cb4931c7348b6c171f13b6216"`);
		await queryRunner.query(`DROP INDEX "IDX_6248458c7e237cef4adac4761d"`);
		await queryRunner.query(
			`CREATE TABLE "temporary_product_review" ("deletedAt" datetime, "id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "title" varchar, "description" text, "rating" integer NOT NULL, "upvotes" integer NOT NULL DEFAULT (0), "downvotes" integer NOT NULL DEFAULT (0), "status" varchar NOT NULL DEFAULT ('pending'), "editedAt" datetime, "productId" varchar NOT NULL, "userId" varchar NOT NULL, "archivedAt" datetime, CONSTRAINT "FK_db21a1dc776b455ee83eb7ff88e" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_06e7335708b5e7870f1eaa608d2" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_28ce717020729e36aa06cca5c54" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_586e6b1273ba2732ec0ee41a80b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "temporary_product_review"("deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "title", "description", "rating", "upvotes", "downvotes", "status", "editedAt", "productId", "userId") SELECT "deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "title", "description", "rating", "upvotes", "downvotes", "status", "editedAt", "productId", "userId" FROM "product_review"`
		);
		await queryRunner.query(`DROP TABLE "product_review"`);
		await queryRunner.query(`ALTER TABLE "temporary_product_review" RENAME TO "product_review"`);
		await queryRunner.query(`CREATE INDEX "IDX_db21a1dc776b455ee83eb7ff88" ON "product_review" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_06e7335708b5e7870f1eaa608d" ON "product_review" ("productId") `);
		await queryRunner.query(`CREATE INDEX "IDX_913f7739f1262fc8c70cbbafa3" ON "product_review" ("editedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_f3591fd59cc32b585c3ba7d3ae" ON "product_review" ("downvotes") `);
		await queryRunner.query(`CREATE INDEX "IDX_28f06c5655d507668b8839b59a" ON "product_review" ("upvotes") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_28ce717020729e36aa06cca5c5" ON "product_review" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_586e6b1273ba2732ec0ee41a80" ON "product_review" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9cb4931c7348b6c171f13b6216" ON "product_review" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_6248458c7e237cef4adac4761d" ON "product_review" ("isActive") `);
	}

	/**
	 * SqliteDB and BetterSQlite3DB Down Migration
	 *
	 * @param queryRunner
	 */
	public async sqliteDownQueryRunner(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`DROP INDEX "IDX_6248458c7e237cef4adac4761d"`);
		await queryRunner.query(`DROP INDEX "IDX_9cb4931c7348b6c171f13b6216"`);
		await queryRunner.query(`DROP INDEX "IDX_586e6b1273ba2732ec0ee41a80"`);
		await queryRunner.query(`DROP INDEX "IDX_28ce717020729e36aa06cca5c5"`);
		await queryRunner.query(`DROP INDEX "IDX_28f06c5655d507668b8839b59a"`);
		await queryRunner.query(`DROP INDEX "IDX_f3591fd59cc32b585c3ba7d3ae"`);
		await queryRunner.query(`DROP INDEX "IDX_913f7739f1262fc8c70cbbafa3"`);
		await queryRunner.query(`DROP INDEX "IDX_06e7335708b5e7870f1eaa608d"`);
		await queryRunner.query(`DROP INDEX "IDX_db21a1dc776b455ee83eb7ff88"`);
		await queryRunner.query(`ALTER TABLE "product_review" RENAME TO "temporary_product_review"`);
		await queryRunner.query(
			`CREATE TABLE "product_review" ("deletedAt" datetime, "id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "title" varchar, "description" text, "rating" integer NOT NULL, "upvotes" integer NOT NULL DEFAULT (0), "downvotes" integer NOT NULL DEFAULT (0), "status" varchar NOT NULL DEFAULT ('pending'), "editedAt" datetime, "productId" varchar NOT NULL, "userId" varchar NOT NULL, CONSTRAINT "FK_db21a1dc776b455ee83eb7ff88e" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_06e7335708b5e7870f1eaa608d2" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_28ce717020729e36aa06cca5c54" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_586e6b1273ba2732ec0ee41a80b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_review"("deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "title", "description", "rating", "upvotes", "downvotes", "status", "editedAt", "productId", "userId") SELECT "deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "title", "description", "rating", "upvotes", "downvotes", "status", "editedAt", "productId", "userId" FROM "temporary_product_review"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_review"`);
		await queryRunner.query(`CREATE INDEX "IDX_6248458c7e237cef4adac4761d" ON "product_review" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_9cb4931c7348b6c171f13b6216" ON "product_review" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_586e6b1273ba2732ec0ee41a80" ON "product_review" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_28ce717020729e36aa06cca5c5" ON "product_review" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_28f06c5655d507668b8839b59a" ON "product_review" ("upvotes") `);
		await queryRunner.query(`CREATE INDEX "IDX_f3591fd59cc32b585c3ba7d3ae" ON "product_review" ("downvotes") `);
		await queryRunner.query(`CREATE INDEX "IDX_913f7739f1262fc8c70cbbafa3" ON "product_review" ("editedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_06e7335708b5e7870f1eaa608d" ON "product_review" ("productId") `);
		await queryRunner.query(`CREATE INDEX "IDX_db21a1dc776b455ee83eb7ff88" ON "product_review" ("userId") `);
		await queryRunner.query(`DROP INDEX "IDX_a9130ad7824fb843f06103971e"`);
		await queryRunner.query(`DROP INDEX "IDX_b9623984c84eb7be4c0eb076c2"`);
		await queryRunner.query(`DROP INDEX "IDX_1551e821871d9230cc0dafbbe5"`);
		await queryRunner.query(`DROP INDEX "IDX_81558bb2bef673628d92540b4e"`);
		await queryRunner.query(`DROP INDEX "IDX_8eb7e413257d7a26104f4e326f"`);
		await queryRunner.query(`DROP INDEX "IDX_2d5ecab1f06b327bad54553614"`);
		await queryRunner.query(`ALTER TABLE "knowledge_base_author" RENAME TO "temporary_knowledge_base_author"`);
		await queryRunner.query(
			`CREATE TABLE "knowledge_base_author" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "employeeId" varchar NOT NULL, "articleId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_2d5ecab1f06b327bad545536143" FOREIGN KEY ("articleId") REFERENCES "knowledge_base_article" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8eb7e413257d7a26104f4e326fd" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_81558bb2bef673628d92540b4e4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_1551e821871d9230cc0dafbbe58" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "knowledge_base_author"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "employeeId", "articleId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "employeeId", "articleId", "isActive", "isArchived", "deletedAt" FROM "temporary_knowledge_base_author"`
		);
		await queryRunner.query(`DROP TABLE "temporary_knowledge_base_author"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_a9130ad7824fb843f06103971e" ON "knowledge_base_author" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b9623984c84eb7be4c0eb076c2" ON "knowledge_base_author" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_1551e821871d9230cc0dafbbe5" ON "knowledge_base_author" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_81558bb2bef673628d92540b4e" ON "knowledge_base_author" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8eb7e413257d7a26104f4e326f" ON "knowledge_base_author" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2d5ecab1f06b327bad54553614" ON "knowledge_base_author" ("articleId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e9720156c57ff1ad841e95ace7"`);
		await queryRunner.query(`DROP INDEX "IDX_1544c43e36e1ccf7d578c70607"`);
		await queryRunner.query(`DROP INDEX "IDX_06a9902fedc1f9dcdbaf14afb0"`);
		await queryRunner.query(`DROP INDEX "IDX_3547f82f867489542ceae58a49"`);
		await queryRunner.query(`DROP INDEX "IDX_66af194845635058239e794e1b"`);
		await queryRunner.query(`ALTER TABLE "knowledge_base_article" RENAME TO "temporary_knowledge_base_article"`);
		await queryRunner.query(
			`CREATE TABLE "knowledge_base_article" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "data" varchar, "draft" boolean NOT NULL, "privacy" boolean NOT NULL, "index" integer NOT NULL, "categoryId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_66af194845635058239e794e1b9" FOREIGN KEY ("categoryId") REFERENCES "knowledge_base" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3547f82f867489542ceae58a49e" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_06a9902fedc1f9dcdbaf14afb01" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "knowledge_base_article"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "data", "draft", "privacy", "index", "categoryId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "data", "draft", "privacy", "index", "categoryId", "isActive", "isArchived", "deletedAt" FROM "temporary_knowledge_base_article"`
		);
		await queryRunner.query(`DROP TABLE "temporary_knowledge_base_article"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_e9720156c57ff1ad841e95ace7" ON "knowledge_base_article" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_1544c43e36e1ccf7d578c70607" ON "knowledge_base_article" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_06a9902fedc1f9dcdbaf14afb0" ON "knowledge_base_article" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3547f82f867489542ceae58a49" ON "knowledge_base_article" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_66af194845635058239e794e1b" ON "knowledge_base_article" ("categoryId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_0765098c5a6f93f51a55bda026"`);
		await queryRunner.query(`DROP INDEX "IDX_9b22423b8cb20087c16613ecba"`);
		await queryRunner.query(`DROP INDEX "IDX_bcb30c9893f4c8d0c4e556b4ed"`);
		await queryRunner.query(`DROP INDEX "IDX_2ba72a9dec732a10e8c05bcdec"`);
		await queryRunner.query(`DROP INDEX "IDX_ff979040ce93cbc60863d322ec"`);
		await queryRunner.query(`ALTER TABLE "knowledge_base" RENAME TO "temporary_knowledge_base"`);
		await queryRunner.query(
			`CREATE TABLE "knowledge_base" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "flag" varchar NOT NULL, "icon" varchar NOT NULL, "privacy" varchar NOT NULL, "language" varchar NOT NULL, "color" varchar NOT NULL, "description" varchar, "data" varchar, "index" integer, "parentId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_ff979040ce93cbc60863d322ecd" FOREIGN KEY ("parentId") REFERENCES "knowledge_base" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_2ba72a9dec732a10e8c05bcdec1" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_bcb30c9893f4c8d0c4e556b4ed3" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "knowledge_base"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "flag", "icon", "privacy", "language", "color", "description", "data", "index", "parentId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "flag", "icon", "privacy", "language", "color", "description", "data", "index", "parentId", "isActive", "isArchived", "deletedAt" FROM "temporary_knowledge_base"`
		);
		await queryRunner.query(`DROP TABLE "temporary_knowledge_base"`);
		await queryRunner.query(`CREATE INDEX "IDX_0765098c5a6f93f51a55bda026" ON "knowledge_base" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_9b22423b8cb20087c16613ecba" ON "knowledge_base" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_bcb30c9893f4c8d0c4e556b4ed" ON "knowledge_base" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_2ba72a9dec732a10e8c05bcdec" ON "knowledge_base" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_ff979040ce93cbc60863d322ec" ON "knowledge_base" ("parentId") `);
		await queryRunner.query(`DROP INDEX "IDX_4070b6f3480e9c4b2dcf3f7b56"`);
		await queryRunner.query(`DROP INDEX "IDX_af850e1fa48af82d66e9bf81c7"`);
		await queryRunner.query(`DROP INDEX "IDX_2323220b4decfd2f4d8307fd78"`);
		await queryRunner.query(`DROP INDEX "IDX_d5ca48cfacfb516543d6507ca4"`);
		await queryRunner.query(
			`ALTER TABLE "job_preset_upwork_job_search_criterion" RENAME TO "temporary_job_preset_upwork_job_search_criterion"`
		);
		await queryRunner.query(
			`CREATE TABLE "job_preset_upwork_job_search_criterion" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "jobPresetId" varchar NOT NULL, "occupationId" varchar, "categoryId" varchar, "keyword" varchar, "jobType" text, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_b909a3df761d7e489aca80f138a" FOREIGN KEY ("categoryId") REFERENCES "job_search_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d45b36b85ffbd5189f7e70f29f5" FOREIGN KEY ("occupationId") REFERENCES "job_search_occupation" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9a687ce1a10a3abda460922cf84" FOREIGN KEY ("jobPresetId") REFERENCES "job_preset" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d5ca48cfacfb516543d6507ca4a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2323220b4decfd2f4d8307fd78f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "job_preset_upwork_job_search_criterion"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPresetId", "occupationId", "categoryId", "keyword", "jobType", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPresetId", "occupationId", "categoryId", "keyword", "jobType", "isActive", "isArchived", "deletedAt" FROM "temporary_job_preset_upwork_job_search_criterion"`
		);
		await queryRunner.query(`DROP TABLE "temporary_job_preset_upwork_job_search_criterion"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_4070b6f3480e9c4b2dcf3f7b56" ON "job_preset_upwork_job_search_criterion" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_af850e1fa48af82d66e9bf81c7" ON "job_preset_upwork_job_search_criterion" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2323220b4decfd2f4d8307fd78" ON "job_preset_upwork_job_search_criterion" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d5ca48cfacfb516543d6507ca4" ON "job_preset_upwork_job_search_criterion" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e210f70c3904cf84ab5113be8f"`);
		await queryRunner.query(`DROP INDEX "IDX_46226c3185e3ca3d7033831d7a"`);
		await queryRunner.query(`DROP INDEX "IDX_7e53ea80aca15da11a8a5ec038"`);
		await queryRunner.query(`DROP INDEX "IDX_a4b038417e3221c0791dd8c771"`);
		await queryRunner.query(`DROP INDEX "IDX_f2c1b6770dd2a3abfa35f49411"`);
		await queryRunner.query(`ALTER TABLE "job_preset" RENAME TO "temporary_job_preset"`);
		await queryRunner.query(
			`CREATE TABLE "job_preset" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a4b038417e3221c0791dd8c7714" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7e53ea80aca15da11a8a5ec0380" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "job_preset"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "temporary_job_preset"`
		);
		await queryRunner.query(`DROP TABLE "temporary_job_preset"`);
		await queryRunner.query(`CREATE INDEX "IDX_e210f70c3904cf84ab5113be8f" ON "job_preset" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_46226c3185e3ca3d7033831d7a" ON "job_preset" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_7e53ea80aca15da11a8a5ec038" ON "job_preset" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a4b038417e3221c0791dd8c771" ON "job_preset" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f2c1b6770dd2a3abfa35f49411" ON "job_preset" ("name") `);
		await queryRunner.query(`DROP INDEX "IDX_0e130a25bb4abe1b27c8a0adf4"`);
		await queryRunner.query(`DROP INDEX "IDX_6bae61744663a416e73903d9af"`);
		await queryRunner.query(`DROP INDEX "IDX_afe6c40d3d9951388fa05f83f2"`);
		await queryRunner.query(`DROP INDEX "IDX_630337302efe97cc93deeb2151"`);
		await queryRunner.query(
			`ALTER TABLE "employee_upwork_job_search_criterion" RENAME TO "temporary_employee_upwork_job_search_criterion"`
		);
		await queryRunner.query(
			`CREATE TABLE "employee_upwork_job_search_criterion" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "jobPresetId" varchar, "employeeId" varchar NOT NULL, "occupationId" varchar, "categoryId" varchar, "keyword" varchar, "jobType" text, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_d2b148ddd67e520fb8061f4c133" FOREIGN KEY ("categoryId") REFERENCES "job_search_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_b6bcd5ceb60e4bb493344a6b4f2" FOREIGN KEY ("occupationId") REFERENCES "job_search_occupation" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_c872e6e3ab28e813c2324d1f4fb" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_2dc73e07ac7040f273cea3c999d" FOREIGN KEY ("jobPresetId") REFERENCES "job_preset" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_630337302efe97cc93deeb21516" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_afe6c40d3d9951388fa05f83f28" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "employee_upwork_job_search_criterion"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPresetId", "employeeId", "occupationId", "categoryId", "keyword", "jobType", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPresetId", "employeeId", "occupationId", "categoryId", "keyword", "jobType", "isActive", "isArchived", "deletedAt" FROM "temporary_employee_upwork_job_search_criterion"`
		);
		await queryRunner.query(`DROP TABLE "temporary_employee_upwork_job_search_criterion"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_0e130a25bb4abe1b27c8a0adf4" ON "employee_upwork_job_search_criterion" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6bae61744663a416e73903d9af" ON "employee_upwork_job_search_criterion" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_afe6c40d3d9951388fa05f83f2" ON "employee_upwork_job_search_criterion" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_630337302efe97cc93deeb2151" ON "employee_upwork_job_search_criterion" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_015231c6e28cfb2b789ca4b76f"`);
		await queryRunner.query(`DROP INDEX "IDX_36333846c37e5f8812a5c9f7ff"`);
		await queryRunner.query(`DROP INDEX "IDX_6ee5218c869b57197e4a209bed"`);
		await queryRunner.query(`DROP INDEX "IDX_d0a798419c775b9157bf0269f4"`);
		await queryRunner.query(`DROP INDEX "IDX_3b335bbcbf7d5e00853acaa165"`);
		await queryRunner.query(`DROP INDEX "IDX_86381fb6d28978b101b3aec8ca"`);
		await queryRunner.query(`DROP INDEX "IDX_35e120f2b6e5188391cf068d3b"`);
		await queryRunner.query(`ALTER TABLE "job_search_category" RENAME TO "temporary_job_search_category"`);
		await queryRunner.query(
			`CREATE TABLE "job_search_category" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "jobSourceCategoryId" varchar, "jobSource" text NOT NULL DEFAULT ('upwork'), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_35e120f2b6e5188391cf068d3ba" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_86381fb6d28978b101b3aec8ca4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "job_search_category"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "jobSourceCategoryId", "jobSource", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "jobSourceCategoryId", "jobSource", "isActive", "isArchived", "deletedAt" FROM "temporary_job_search_category"`
		);
		await queryRunner.query(`DROP TABLE "temporary_job_search_category"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_015231c6e28cfb2b789ca4b76f" ON "job_search_category" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_36333846c37e5f8812a5c9f7ff" ON "job_search_category" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_6ee5218c869b57197e4a209bed" ON "job_search_category" ("jobSource") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d0a798419c775b9157bf0269f4" ON "job_search_category" ("jobSourceCategoryId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_3b335bbcbf7d5e00853acaa165" ON "job_search_category" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_86381fb6d28978b101b3aec8ca" ON "job_search_category" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_35e120f2b6e5188391cf068d3b" ON "job_search_category" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_e4bc75a1cbb07d117a0acfcdba"`);
		await queryRunner.query(`DROP INDEX "IDX_4b8450a24233df8b47ca472923"`);
		await queryRunner.query(`DROP INDEX "IDX_c8723c90a6f007f8d7e882a04f"`);
		await queryRunner.query(`DROP INDEX "IDX_cb64573b18dd7b23f591f15502"`);
		await queryRunner.query(`DROP INDEX "IDX_9f1288205ae91f91cf356cac2f"`);
		await queryRunner.query(`DROP INDEX "IDX_1a62a99e1016e4a2b461e886ec"`);
		await queryRunner.query(`DROP INDEX "IDX_44e22d88b47daf2095491b7cac"`);
		await queryRunner.query(`ALTER TABLE "job_search_occupation" RENAME TO "temporary_job_search_occupation"`);
		await queryRunner.query(
			`CREATE TABLE "job_search_occupation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "jobSourceOccupationId" varchar, "jobSource" text NOT NULL DEFAULT ('upwork'), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_44e22d88b47daf2095491b7cac3" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1a62a99e1016e4a2b461e886ecd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "job_search_occupation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "jobSourceOccupationId", "jobSource", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "jobSourceOccupationId", "jobSource", "isActive", "isArchived", "deletedAt" FROM "temporary_job_search_occupation"`
		);
		await queryRunner.query(`DROP TABLE "temporary_job_search_occupation"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_e4bc75a1cbb07d117a0acfcdba" ON "job_search_occupation" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4b8450a24233df8b47ca472923" ON "job_search_occupation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c8723c90a6f007f8d7e882a04f" ON "job_search_occupation" ("jobSource") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_cb64573b18dd7b23f591f15502" ON "job_search_occupation" ("jobSourceOccupationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9f1288205ae91f91cf356cac2f" ON "job_search_occupation" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_1a62a99e1016e4a2b461e886ec" ON "job_search_occupation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_44e22d88b47daf2095491b7cac" ON "job_search_occupation" ("tenantId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e396663e1a31114eac39087829"`);
		await queryRunner.query(`DROP INDEX "IDX_2bb17670e2bea3980ff960bbcf"`);
		await queryRunner.query(`DROP INDEX "IDX_f577c9bc6183c1d1eae1e154bb"`);
		await queryRunner.query(`DROP INDEX "IDX_ee780fbd8f91de31c004929eec"`);
		await queryRunner.query(`DROP INDEX "IDX_dc2ff85f7de16dea6453a833dd"`);
		await queryRunner.query(`DROP INDEX "IDX_0111963c9cb4dd14565c0d9c84"`);
		await queryRunner.query(`DROP INDEX "IDX_a13f3564eae9db44ddc4308afc"`);
		await queryRunner.query(`DROP INDEX "IDX_2be728a7f8b118712a4200990d"`);
		await queryRunner.query(
			`ALTER TABLE "employee_proposal_template" RENAME TO "temporary_employee_proposal_template"`
		);
		await queryRunner.query(
			`CREATE TABLE "employee_proposal_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "content" text, "isDefault" boolean NOT NULL DEFAULT (0), "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_2be728a7f8b118712a4200990d4" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ee780fbd8f91de31c004929eecb" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f577c9bc6183c1d1eae1e154bbc" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "employee_proposal_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "content", "isDefault", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "content", "isDefault", "employeeId", "isActive", "isArchived", "deletedAt" FROM "temporary_employee_proposal_template"`
		);
		await queryRunner.query(`DROP TABLE "temporary_employee_proposal_template"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_e396663e1a31114eac39087829" ON "employee_proposal_template" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2bb17670e2bea3980ff960bbcf" ON "employee_proposal_template" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f577c9bc6183c1d1eae1e154bb" ON "employee_proposal_template" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ee780fbd8f91de31c004929eec" ON "employee_proposal_template" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_dc2ff85f7de16dea6453a833dd" ON "employee_proposal_template" ("name") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0111963c9cb4dd14565c0d9c84" ON "employee_proposal_template" ("content") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a13f3564eae9db44ddc4308afc" ON "employee_proposal_template" ("isDefault") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2be728a7f8b118712a4200990d" ON "employee_proposal_template" ("employeeId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e2836e856f491dd4676e1ec8d3"`);
		await queryRunner.query(`DROP INDEX "IDX_61a30a7d83666bf265fd86a72d"`);
		await queryRunner.query(`DROP INDEX "IDX_4177329f5e6ddbfb6416592713"`);
		await queryRunner.query(`DROP INDEX "IDX_d59ec6899d435f430799795ad7"`);
		await queryRunner.query(`DROP INDEX "IDX_cc28a54171231fbd9a127051f0"`);
		await queryRunner.query(`ALTER TABLE "proposal" RENAME TO "temporary_proposal"`);
		await queryRunner.query(
			`CREATE TABLE "proposal" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "jobPostUrl" varchar, "valueDate" datetime, "jobPostContent" varchar NOT NULL, "proposalContent" varchar NOT NULL, "status" varchar NOT NULL, "employeeId" varchar, "organizationContactId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_61c45ab51852e4b0e539756d40f" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f399488a0f3ea10bb511e3f5aa3" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d59ec6899d435f430799795ad7b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_4177329f5e6ddbfb64165927134" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "proposal"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPostUrl", "valueDate", "jobPostContent", "proposalContent", "status", "employeeId", "organizationContactId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "jobPostUrl", "valueDate", "jobPostContent", "proposalContent", "status", "employeeId", "organizationContactId", "isActive", "isArchived", "deletedAt" FROM "temporary_proposal"`
		);
		await queryRunner.query(`DROP TABLE "temporary_proposal"`);
		await queryRunner.query(`CREATE INDEX "IDX_e2836e856f491dd4676e1ec8d3" ON "proposal" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_61a30a7d83666bf265fd86a72d" ON "proposal" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_4177329f5e6ddbfb6416592713" ON "proposal" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d59ec6899d435f430799795ad7" ON "proposal" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_cc28a54171231fbd9a127051f0" ON "proposal" ("jobPostUrl") `);
		await queryRunner.query(`DROP INDEX "IDX_d706210d377ece2a1bc3386388"`);
		await queryRunner.query(`DROP INDEX "IDX_c774c276d6b7ea05a7e12d3c81"`);
		await queryRunner.query(`DROP INDEX "IDX_b3234be5b70c2362cdf67bb188"`);
		await queryRunner.query(`DROP INDEX "IDX_6c8e119fc6a2a7d3413aa76d3b"`);
		await queryRunner.query(`DROP INDEX "IDX_055f310a04a928343494a5255a"`);
		await queryRunner.query(`DROP INDEX "IDX_a8709a9c5cc142c6fbe92df274"`);
		await queryRunner.query(`DROP INDEX "IDX_5065401113abb6e9608225e567"`);
		await queryRunner.query(
			`ALTER TABLE "organization_github_repository_issue" RENAME TO "temporary_organization_github_repository_issue"`
		);
		await queryRunner.query(
			`CREATE TABLE "organization_github_repository_issue" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "issueId" bigint NOT NULL, "issueNumber" integer NOT NULL, "repositoryId" varchar, "deletedAt" datetime, CONSTRAINT "FK_5065401113abb6e9608225e5678" FOREIGN KEY ("repositoryId") REFERENCES "organization_github_repository" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_6c8e119fc6a2a7d3413aa76d3bd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b3234be5b70c2362cdf67bb1889" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_github_repository_issue"("id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "issueId", "issueNumber", "repositoryId", "deletedAt") SELECT "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "issueId", "issueNumber", "repositoryId", "deletedAt" FROM "temporary_organization_github_repository_issue"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_github_repository_issue"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_d706210d377ece2a1bc3386388" ON "organization_github_repository_issue" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c774c276d6b7ea05a7e12d3c81" ON "organization_github_repository_issue" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b3234be5b70c2362cdf67bb188" ON "organization_github_repository_issue" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6c8e119fc6a2a7d3413aa76d3b" ON "organization_github_repository_issue" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_055f310a04a928343494a5255a" ON "organization_github_repository_issue" ("issueId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a8709a9c5cc142c6fbe92df274" ON "organization_github_repository_issue" ("issueNumber") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5065401113abb6e9608225e567" ON "organization_github_repository_issue" ("repositoryId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_59407d03d189560ac1a0a4b0eb"`);
		await queryRunner.query(`DROP INDEX "IDX_2eec784cadcb7847b64937fb58"`);
		await queryRunner.query(`DROP INDEX "IDX_34c48d11eb82ef42e89370bdc7"`);
		await queryRunner.query(`DROP INDEX "IDX_04717f25bea7d9cef0d51cac50"`);
		await queryRunner.query(`DROP INDEX "IDX_5e97728cfda96f49cc7f95bbaf"`);
		await queryRunner.query(`DROP INDEX "IDX_ef65338e8597b9f56fd0fe3c94"`);
		await queryRunner.query(`DROP INDEX "IDX_480158f21938444e4f62fb3185"`);
		await queryRunner.query(`DROP INDEX "IDX_69d75a47af6bfcda545a865691"`);
		await queryRunner.query(`DROP INDEX "IDX_ca0fa80f50baed7287a499dc2c"`);
		await queryRunner.query(`DROP INDEX "IDX_6eea42a69e130bbd14b7ea3659"`);
		await queryRunner.query(`DROP INDEX "IDX_a146e202c19f521bf5ec69bb26"`);
		await queryRunner.query(`DROP INDEX "IDX_9e8a77c1d330554fab9230100a"`);
		await queryRunner.query(`DROP INDEX "IDX_add7dbec156589dd0b27e2e0c4"`);
		await queryRunner.query(
			`ALTER TABLE "organization_github_repository" RENAME TO "temporary_organization_github_repository"`
		);
		await queryRunner.query(
			`CREATE TABLE "organization_github_repository" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "repositoryId" bigint NOT NULL, "name" varchar NOT NULL, "fullName" varchar NOT NULL, "owner" varchar NOT NULL, "integrationId" varchar, "issuesCount" integer, "hasSyncEnabled" boolean DEFAULT (1), "private" boolean DEFAULT (0), "status" varchar, "deletedAt" datetime, CONSTRAINT "FK_add7dbec156589dd0b27e2e0c49" FOREIGN KEY ("integrationId") REFERENCES "integration_tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_69d75a47af6bfcda545a865691b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_480158f21938444e4f62fb31857" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_github_repository"("id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "repositoryId", "name", "fullName", "owner", "integrationId", "issuesCount", "hasSyncEnabled", "private", "status", "deletedAt") SELECT "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "repositoryId", "name", "fullName", "owner", "integrationId", "issuesCount", "hasSyncEnabled", "private", "status", "deletedAt" FROM "temporary_organization_github_repository"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_github_repository"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_59407d03d189560ac1a0a4b0eb" ON "organization_github_repository" ("status") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2eec784cadcb7847b64937fb58" ON "organization_github_repository" ("private") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_34c48d11eb82ef42e89370bdc7" ON "organization_github_repository" ("hasSyncEnabled") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_04717f25bea7d9cef0d51cac50" ON "organization_github_repository" ("issuesCount") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5e97728cfda96f49cc7f95bbaf" ON "organization_github_repository" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ef65338e8597b9f56fd0fe3c94" ON "organization_github_repository" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_480158f21938444e4f62fb3185" ON "organization_github_repository" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_69d75a47af6bfcda545a865691" ON "organization_github_repository" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ca0fa80f50baed7287a499dc2c" ON "organization_github_repository" ("repositoryId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6eea42a69e130bbd14b7ea3659" ON "organization_github_repository" ("name") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a146e202c19f521bf5ec69bb26" ON "organization_github_repository" ("fullName") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9e8a77c1d330554fab9230100a" ON "organization_github_repository" ("owner") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_add7dbec156589dd0b27e2e0c4" ON "organization_github_repository" ("integrationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_cbc2b8338d45e774afd8682ffe"`);
		await queryRunner.query(`DROP INDEX "IDX_cc89233c87fcf64b01df07e038"`);
		await queryRunner.query(`DROP INDEX "IDX_c2037b621d2e8023898aee4ac7"`);
		await queryRunner.query(`DROP INDEX "IDX_744268ee0ec6073883267bc3b6"`);
		await queryRunner.query(`ALTER TABLE "changelog" RENAME TO "temporary_changelog"`);
		await queryRunner.query(
			`CREATE TABLE "changelog" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "icon" varchar, "title" varchar, "date" datetime NOT NULL, "content" varchar NOT NULL, "learnMoreUrl" varchar, "isFeature" boolean, "imageUrl" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_744268ee0ec6073883267bc3b66" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c2037b621d2e8023898aee4ac74" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "changelog"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "icon", "title", "date", "content", "learnMoreUrl", "isFeature", "imageUrl", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "icon", "title", "date", "content", "learnMoreUrl", "isFeature", "imageUrl", "isActive", "isArchived", "deletedAt" FROM "temporary_changelog"`
		);
		await queryRunner.query(`DROP TABLE "temporary_changelog"`);
		await queryRunner.query(`CREATE INDEX "IDX_cbc2b8338d45e774afd8682ffe" ON "changelog" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_cc89233c87fcf64b01df07e038" ON "changelog" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_c2037b621d2e8023898aee4ac7" ON "changelog" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_744268ee0ec6073883267bc3b6" ON "changelog" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_835691d3dd62d0b705302cbb2d"`);
		await queryRunner.query(`DROP INDEX "IDX_ee85901ae866ffe2061d5b35c8"`);
		await queryRunner.query(`DROP INDEX "IDX_84594016a98da8b87e0f51cd93"`);
		await queryRunner.query(`DROP INDEX "IDX_f502dc6d9802306f9d1584932b"`);
		await queryRunner.query(`DROP INDEX "IDX_f5735eafddabdb4b20f621a976"`);
		await queryRunner.query(`DROP INDEX "IDX_9b2f00761a6b1b77cb6289e3ff"`);
		await queryRunner.query(`ALTER TABLE "warehouse" RENAME TO "temporary_warehouse"`);
		await queryRunner.query(
			`CREATE TABLE "warehouse" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "code" varchar NOT NULL, "email" varchar NOT NULL, "description" varchar, "active" boolean NOT NULL DEFAULT (1), "logoId" varchar, "contactId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "REL_84594016a98da8b87e0f51cd93" UNIQUE ("contactId"), CONSTRAINT "FK_84594016a98da8b87e0f51cd931" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f502dc6d9802306f9d1584932b8" FOREIGN KEY ("logoId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_f5735eafddabdb4b20f621a976a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9b2f00761a6b1b77cb6289e3fff" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "warehouse"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "email", "description", "active", "logoId", "contactId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "email", "description", "active", "logoId", "contactId", "isActive", "isArchived", "deletedAt" FROM "temporary_warehouse"`
		);
		await queryRunner.query(`DROP TABLE "temporary_warehouse"`);
		await queryRunner.query(`CREATE INDEX "IDX_835691d3dd62d0b705302cbb2d" ON "warehouse" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_ee85901ae866ffe2061d5b35c8" ON "warehouse" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_84594016a98da8b87e0f51cd93" ON "warehouse" ("contactId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f502dc6d9802306f9d1584932b" ON "warehouse" ("logoId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f5735eafddabdb4b20f621a976" ON "warehouse" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9b2f00761a6b1b77cb6289e3ff" ON "warehouse" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_40aa52eaed1ce133f5fee76bca"`);
		await queryRunner.query(`DROP INDEX "IDX_5f32a52e9bd19bf323b02efcd1"`);
		await queryRunner.query(`DROP INDEX "IDX_617306cb3613dd8d59301ae16f"`);
		await queryRunner.query(`DROP INDEX "IDX_a2f863689d1316810c41c1ea38"`);
		await queryRunner.query(`DROP INDEX "IDX_a1c4a97b928b547c3041d3ac1f"`);
		await queryRunner.query(`DROP INDEX "IDX_d5f4b64e6a80546fd6dd4ac3ed"`);
		await queryRunner.query(
			`ALTER TABLE "warehouse_product_variant" RENAME TO "temporary_warehouse_product_variant"`
		);
		await queryRunner.query(
			`CREATE TABLE "warehouse_product_variant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "quantity" numeric DEFAULT (0), "variantId" varchar NOT NULL, "warehouseProductId" varchar NOT NULL, "organizationId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_d5f4b64e6a80546fd6dd4ac3ed0" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a1c4a97b928b547c3041d3ac1f6" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a2f863689d1316810c41c1ea38e" FOREIGN KEY ("variantId") REFERENCES "product_variant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_617306cb3613dd8d59301ae16fd" FOREIGN KEY ("warehouseProductId") REFERENCES "warehouse_product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "warehouse_product_variant"("id", "createdAt", "updatedAt", "tenantId", "quantity", "variantId", "warehouseProductId", "organizationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "quantity", "variantId", "warehouseProductId", "organizationId", "isActive", "isArchived", "deletedAt" FROM "temporary_warehouse_product_variant"`
		);
		await queryRunner.query(`DROP TABLE "temporary_warehouse_product_variant"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_40aa52eaed1ce133f5fee76bca" ON "warehouse_product_variant" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5f32a52e9bd19bf323b02efcd1" ON "warehouse_product_variant" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_617306cb3613dd8d59301ae16f" ON "warehouse_product_variant" ("warehouseProductId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a2f863689d1316810c41c1ea38" ON "warehouse_product_variant" ("variantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a1c4a97b928b547c3041d3ac1f" ON "warehouse_product_variant" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d5f4b64e6a80546fd6dd4ac3ed" ON "warehouse_product_variant" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_3370818c940a51996d80bb4d16"`);
		await queryRunner.query(`DROP INDEX "IDX_7a584a02d15a022e9c4f06ea72"`);
		await queryRunner.query(`DROP INDEX "IDX_3f934c4772e7c7f2c66d7ea4e7"`);
		await queryRunner.query(`DROP INDEX "IDX_a8c9aee14d47ec7b3f2ac429eb"`);
		await queryRunner.query(`DROP INDEX "IDX_62573a939f834f2de343f98288"`);
		await queryRunner.query(`DROP INDEX "IDX_c899e17322d11e1977832e8c65"`);
		await queryRunner.query(`ALTER TABLE "warehouse_product" RENAME TO "temporary_warehouse_product"`);
		await queryRunner.query(
			`CREATE TABLE "warehouse_product" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "quantity" numeric DEFAULT (0), "warehouseId" varchar NOT NULL, "productId" varchar NOT NULL, "organizationId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_3f934c4772e7c7f2c66d7ea4e72" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a8c9aee14d47ec7b3f2ac429ebc" FOREIGN KEY ("warehouseId") REFERENCES "warehouse" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c899e17322d11e1977832e8c656" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_62573a939f834f2de343f98288c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "warehouse_product"("id", "createdAt", "updatedAt", "tenantId", "quantity", "warehouseId", "productId", "organizationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "quantity", "warehouseId", "productId", "organizationId", "isActive", "isArchived", "deletedAt" FROM "temporary_warehouse_product"`
		);
		await queryRunner.query(`DROP TABLE "temporary_warehouse_product"`);
		await queryRunner.query(`CREATE INDEX "IDX_3370818c940a51996d80bb4d16" ON "warehouse_product" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_7a584a02d15a022e9c4f06ea72" ON "warehouse_product" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_3f934c4772e7c7f2c66d7ea4e7" ON "warehouse_product" ("productId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_a8c9aee14d47ec7b3f2ac429eb" ON "warehouse_product" ("warehouseId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_62573a939f834f2de343f98288" ON "warehouse_product" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c899e17322d11e1977832e8c65" ON "warehouse_product" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_557cb712d32a9ad9ffbb4cd50d"`);
		await queryRunner.query(`DROP INDEX "IDX_fde2ce12ab12b02ae583dd76c7"`);
		await queryRunner.query(`DROP INDEX "IDX_5e028298e103e1694147ada69e"`);
		await queryRunner.query(`DROP INDEX "IDX_f2578043e491921209f5dadd08"`);
		await queryRunner.query(`DROP INDEX "IDX_c28e52f758e7bbc53828db9219"`);
		await queryRunner.query(`DROP INDEX "IDX_78a916df40e02a9deb1c4b75ed"`);
		await queryRunner.query(`DROP INDEX "IDX_e12875dfb3b1d92d7d7c5377e2"`);
		await queryRunner.query(`DROP INDEX "IDX_f0e1b4ecdca13b177e2e3a0613"`);
		await queryRunner.query(`DROP INDEX "IDX_58e4dbff0e1a32a9bdc861bb29"`);
		await queryRunner.query(`DROP INDEX "IDX_19de43e9f1842360ce646253d7"`);
		await queryRunner.query(`DROP INDEX "IDX_685bf353c85f23b6f848e4dcde"`);
		await queryRunner.query(`DROP INDEX "IDX_1a8ae1126aae1823d62ccf3f82"`);
		await queryRunner.query(`DROP INDEX "IDX_5864814596f85fe59bd1a0dc76"`);
		await queryRunner.query(`DROP INDEX "IDX_0e9f745ad08103a1c21523326c"`);
		await queryRunner.query(`DROP INDEX "IDX_f725c3df76a1a94e3e9f0313a5"`);
		await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
		await queryRunner.query(
			`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "thirdPartyId" varchar, "firstName" varchar, "lastName" varchar, "email" varchar, "username" varchar, "hash" varchar, "imageUrl" varchar(500), "preferredLanguage" varchar DEFAULT ('en'), "preferredComponentLayout" varchar CHECK( "preferredComponentLayout" IN ('CARDS_GRID','TABLE') ) DEFAULT ('TABLE'), "roleId" varchar, "refreshToken" varchar, "isActive" boolean DEFAULT (1), "code" varchar, "codeExpireAt" datetime, "emailVerifiedAt" datetime, "emailToken" varchar, "phoneNumber" varchar, "timeZone" varchar, "imageId" varchar, "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "timeFormat" varchar CHECK( "timeFormat" IN ('12','24') ) NOT NULL DEFAULT (12), "lastLoginAt" datetime, "defaultTeamId" varchar, "lastTeamId" varchar, "defaultOrganizationId" varchar, "lastOrganizationId" varchar, CONSTRAINT "FK_f725c3df76a1a94e3e9f0313a5f" FOREIGN KEY ("lastOrganizationId") REFERENCES "organization" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_0e9f745ad08103a1c21523326c6" FOREIGN KEY ("defaultOrganizationId") REFERENCES "organization" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_5864814596f85fe59bd1a0dc766" FOREIGN KEY ("lastTeamId") REFERENCES "organization_team" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_1a8ae1126aae1823d62ccf3f821" FOREIGN KEY ("defaultTeamId") REFERENCES "organization_team" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_685bf353c85f23b6f848e4dcded" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5e028298e103e1694147ada69e5" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "user"("id", "createdAt", "updatedAt", "tenantId", "thirdPartyId", "firstName", "lastName", "email", "username", "hash", "imageUrl", "preferredLanguage", "preferredComponentLayout", "roleId", "refreshToken", "isActive", "code", "codeExpireAt", "emailVerifiedAt", "emailToken", "phoneNumber", "timeZone", "imageId", "isArchived", "deletedAt", "timeFormat", "lastLoginAt", "defaultTeamId", "lastTeamId", "defaultOrganizationId", "lastOrganizationId") SELECT "id", "createdAt", "updatedAt", "tenantId", "thirdPartyId", "firstName", "lastName", "email", "username", "hash", "imageUrl", "preferredLanguage", "preferredComponentLayout", "roleId", "refreshToken", "isActive", "code", "codeExpireAt", "emailVerifiedAt", "emailToken", "phoneNumber", "timeZone", "imageId", "isArchived", "deletedAt", "timeFormat", "lastLoginAt", "defaultTeamId", "lastTeamId", "defaultOrganizationId", "lastOrganizationId" FROM "temporary_user"`
		);
		await queryRunner.query(`DROP TABLE "temporary_user"`);
		await queryRunner.query(`CREATE INDEX "IDX_557cb712d32a9ad9ffbb4cd50d" ON "user" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_fde2ce12ab12b02ae583dd76c7" ON "user" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_5e028298e103e1694147ada69e" ON "user" ("imageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f2578043e491921209f5dadd08" ON "user" ("phoneNumber") `);
		await queryRunner.query(`CREATE INDEX "IDX_c28e52f758e7bbc53828db9219" ON "user" ("roleId") `);
		await queryRunner.query(`CREATE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON "user" ("username") `);
		await queryRunner.query(`CREATE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
		await queryRunner.query(`CREATE INDEX "IDX_f0e1b4ecdca13b177e2e3a0613" ON "user" ("lastName") `);
		await queryRunner.query(`CREATE INDEX "IDX_58e4dbff0e1a32a9bdc861bb29" ON "user" ("firstName") `);
		await queryRunner.query(`CREATE INDEX "IDX_19de43e9f1842360ce646253d7" ON "user" ("thirdPartyId") `);
		await queryRunner.query(`CREATE INDEX "IDX_685bf353c85f23b6f848e4dcde" ON "user" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1a8ae1126aae1823d62ccf3f82" ON "user" ("defaultTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5864814596f85fe59bd1a0dc76" ON "user" ("lastTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_0e9f745ad08103a1c21523326c" ON "user" ("defaultOrganizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f725c3df76a1a94e3e9f0313a5" ON "user" ("lastOrganizationId") `);
		await queryRunner.query(`DROP INDEX "IDX_c764336019c69cc4927f317cb0"`);
		await queryRunner.query(`DROP INDEX "IDX_611e1392c8cc9b101e3ea7ad80"`);
		await queryRunner.query(`DROP INDEX "IDX_7143f31467178a6164a42426c1"`);
		await queryRunner.query(`DROP INDEX "IDX_1f97ff07fb198bd0a7786b2abd"`);
		await queryRunner.query(`DROP INDEX "IDX_ca24fc59aac015d9660955f5f6"`);
		await queryRunner.query(`DROP INDEX "IDX_29c3c8cc3ea9db22e4a347f4b5"`);
		await queryRunner.query(`ALTER TABLE "user_organization" RENAME TO "temporary_user_organization"`);
		await queryRunner.query(
			`CREATE TABLE "user_organization" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "isDefault" boolean NOT NULL DEFAULT (1), "isActive" boolean DEFAULT (1), "userId" varchar NOT NULL, "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_29c3c8cc3ea9db22e4a347f4b5a" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7143f31467178a6164a42426c15" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_611e1392c8cc9b101e3ea7ad80c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "user_organization"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "isDefault", "isActive", "userId", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "isDefault", "isActive", "userId", "isArchived", "deletedAt" FROM "temporary_user_organization"`
		);
		await queryRunner.query(`DROP TABLE "temporary_user_organization"`);
		await queryRunner.query(`CREATE INDEX "IDX_c764336019c69cc4927f317cb0" ON "user_organization" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_611e1392c8cc9b101e3ea7ad80" ON "user_organization" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_7143f31467178a6164a42426c1" ON "user_organization" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_1f97ff07fb198bd0a7786b2abd" ON "user_organization" ("isDefault") `);
		await queryRunner.query(`CREATE INDEX "IDX_ca24fc59aac015d9660955f5f6" ON "user_organization" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_29c3c8cc3ea9db22e4a347f4b5" ON "user_organization" ("userId") `);
		await queryRunner.query(`DROP INDEX "IDX_f2d4cd3a7e839bfc7cb6b993ff"`);
		await queryRunner.query(`DROP INDEX "IDX_42205a9e6af108364e5cc62dd4"`);
		await queryRunner.query(`DROP INDEX "IDX_6c1f81934a3f597b3b1a17f562"`);
		await queryRunner.query(`DROP INDEX "IDX_8c8f821cb0fe0dd387491ea7d9"`);
		await queryRunner.query(`DROP INDEX "IDX_aca65a79fe0c1ec9e6a59022c5"`);
		await queryRunner.query(`DROP INDEX "IDX_25b8df69c9b7f5752c6a6a6ef7"`);
		await queryRunner.query(`DROP INDEX "IDX_930e2b28de9ecb1ea689d5a97a"`);
		await queryRunner.query(`DROP INDEX "IDX_f6558fbb3158ab90da1c41d943"`);
		await queryRunner.query(`DROP INDEX "IDX_6a79eb7534066b11f59243ede1"`);
		await queryRunner.query(`DROP INDEX "IDX_3f8fc4b5718fcaa913f9438e27"`);
		await queryRunner.query(`DROP INDEX "IDX_3502c60f98a7cda58dea75bcb5"`);
		await queryRunner.query(`DROP INDEX "IDX_c828facbb4250117f83416d9f7"`);
		await queryRunner.query(`DROP INDEX "IDX_23fdffa8369387d87101090684"`);
		await queryRunner.query(`DROP INDEX "IDX_ea81b5247ecdf5d82cf71fa096"`);
		await queryRunner.query(`ALTER TABLE "timesheet" RENAME TO "temporary_timesheet"`);
		await queryRunner.query(
			`CREATE TABLE "timesheet" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "duration" integer NOT NULL DEFAULT (0), "keyboard" integer NOT NULL DEFAULT (0), "mouse" integer NOT NULL DEFAULT (0), "overall" integer NOT NULL DEFAULT (0), "startedAt" datetime, "stoppedAt" datetime, "approvedAt" datetime, "submittedAt" datetime, "lockedAt" datetime, "isBilled" boolean NOT NULL DEFAULT (0), "status" varchar NOT NULL DEFAULT ('PENDING'), "deletedAt" datetime, "employeeId" varchar NOT NULL, "approvedById" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "editedAt" datetime, CONSTRAINT "FK_6c1f81934a3f597b3b1a17f5623" FOREIGN KEY ("approvedById") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_25b8df69c9b7f5752c6a6a6ef7f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_aca65a79fe0c1ec9e6a59022c54" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8c8f821cb0fe0dd387491ea7d9e" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "timesheet"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "keyboard", "mouse", "overall", "startedAt", "stoppedAt", "approvedAt", "submittedAt", "lockedAt", "isBilled", "status", "deletedAt", "employeeId", "approvedById", "isActive", "isArchived", "editedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "keyboard", "mouse", "overall", "startedAt", "stoppedAt", "approvedAt", "submittedAt", "lockedAt", "isBilled", "status", "deletedAt", "employeeId", "approvedById", "isActive", "isArchived", "editedAt" FROM "temporary_timesheet"`
		);
		await queryRunner.query(`DROP TABLE "temporary_timesheet"`);
		await queryRunner.query(`CREATE INDEX "IDX_f2d4cd3a7e839bfc7cb6b993ff" ON "timesheet" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_42205a9e6af108364e5cc62dd4" ON "timesheet" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_6c1f81934a3f597b3b1a17f562" ON "timesheet" ("approvedById") `);
		await queryRunner.query(`CREATE INDEX "IDX_8c8f821cb0fe0dd387491ea7d9" ON "timesheet" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_aca65a79fe0c1ec9e6a59022c5" ON "timesheet" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_25b8df69c9b7f5752c6a6a6ef7" ON "timesheet" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_930e2b28de9ecb1ea689d5a97a" ON "timesheet" ("startedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_f6558fbb3158ab90da1c41d943" ON "timesheet" ("stoppedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_6a79eb7534066b11f59243ede1" ON "timesheet" ("approvedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_3f8fc4b5718fcaa913f9438e27" ON "timesheet" ("submittedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_3502c60f98a7cda58dea75bcb5" ON "timesheet" ("lockedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_c828facbb4250117f83416d9f7" ON "timesheet" ("isBilled") `);
		await queryRunner.query(`CREATE INDEX "IDX_23fdffa8369387d87101090684" ON "timesheet" ("status") `);
		await queryRunner.query(`CREATE INDEX "IDX_ea81b5247ecdf5d82cf71fa096" ON "timesheet" ("editedAt") `);
		await queryRunner.query(`DROP INDEX "IDX_a3eeb9629f550c367bb752855e"`);
		await queryRunner.query(`DROP INDEX "IDX_8260fdc7862ca27d8cf10e6290"`);
		await queryRunner.query(`DROP INDEX "IDX_c7f72cb68b22b8ab988158e4d2"`);
		await queryRunner.query(`DROP INDEX "IDX_82c5edbd179359212f16f0d386"`);
		await queryRunner.query(`DROP INDEX "IDX_9272701d3da8bd8507f316c915"`);
		await queryRunner.query(`ALTER TABLE "time_slot_minute" RENAME TO "temporary_time_slot_minute"`);
		await queryRunner.query(
			`CREATE TABLE "time_slot_minute" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "keyboard" integer NOT NULL DEFAULT (0), "mouse" integer NOT NULL DEFAULT (0), "datetime" datetime NOT NULL, "timeSlotId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "UQ_0ac1d2777eefcee82db52ca3660" UNIQUE ("timeSlotId", "datetime"), CONSTRAINT "FK_9272701d3da8bd8507f316c9154" FOREIGN KEY ("timeSlotId") REFERENCES "time_slot" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_82c5edbd179359212f16f0d386a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_c7f72cb68b22b8ab988158e4d26" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "time_slot_minute"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "keyboard", "mouse", "datetime", "timeSlotId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "keyboard", "mouse", "datetime", "timeSlotId", "isActive", "isArchived", "deletedAt" FROM "temporary_time_slot_minute"`
		);
		await queryRunner.query(`DROP TABLE "temporary_time_slot_minute"`);
		await queryRunner.query(`CREATE INDEX "IDX_a3eeb9629f550c367bb752855e" ON "time_slot_minute" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_8260fdc7862ca27d8cf10e6290" ON "time_slot_minute" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_c7f72cb68b22b8ab988158e4d2" ON "time_slot_minute" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_82c5edbd179359212f16f0d386" ON "time_slot_minute" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9272701d3da8bd8507f316c915" ON "time_slot_minute" ("timeSlotId") `);
		await queryRunner.query(`DROP INDEX "IDX_81060c5dbe69efa1f3b6e1a2e5"`);
		await queryRunner.query(`DROP INDEX "IDX_645a6bc3f1141d4a111a3166d8"`);
		await queryRunner.query(`DROP INDEX "IDX_b407841271245501dd1a8c7551"`);
		await queryRunner.query(`DROP INDEX "IDX_b8284109257b5137256b5b3e84"`);
		await queryRunner.query(`DROP INDEX "IDX_0c707825a7c2ecc4e186b07ebf"`);
		await queryRunner.query(`DROP INDEX "IDX_f44e721669d5c6bed32cd6a3bf"`);
		await queryRunner.query(`DROP INDEX "IDX_c6e7d1075bfd97eea6643b1479"`);
		await queryRunner.query(`DROP INDEX "IDX_7913305b850c7afc89b6ed96a3"`);
		await queryRunner.query(`ALTER TABLE "time_slot" RENAME TO "temporary_time_slot"`);
		await queryRunner.query(
			`CREATE TABLE "time_slot" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "duration" integer NOT NULL DEFAULT (0), "keyboard" integer NOT NULL DEFAULT (0), "mouse" integer NOT NULL DEFAULT (0), "overall" integer NOT NULL DEFAULT (0), "startedAt" datetime NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_7913305b850c7afc89b6ed96a30" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_b8284109257b5137256b5b3e848" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_b407841271245501dd1a8c75513" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "time_slot"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "keyboard", "mouse", "overall", "startedAt", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "keyboard", "mouse", "overall", "startedAt", "employeeId", "isActive", "isArchived", "deletedAt" FROM "temporary_time_slot"`
		);
		await queryRunner.query(`DROP TABLE "temporary_time_slot"`);
		await queryRunner.query(`CREATE INDEX "IDX_81060c5dbe69efa1f3b6e1a2e5" ON "time_slot" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_645a6bc3f1141d4a111a3166d8" ON "time_slot" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_b407841271245501dd1a8c7551" ON "time_slot" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b8284109257b5137256b5b3e84" ON "time_slot" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_0c707825a7c2ecc4e186b07ebf" ON "time_slot" ("duration") `);
		await queryRunner.query(`CREATE INDEX "IDX_f44e721669d5c6bed32cd6a3bf" ON "time_slot" ("overall") `);
		await queryRunner.query(`CREATE INDEX "IDX_c6e7d1075bfd97eea6643b1479" ON "time_slot" ("startedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_7913305b850c7afc89b6ed96a3" ON "time_slot" ("employeeId") `);
		await queryRunner.query(`DROP INDEX "IDX_91a64228fbbe1516730a0cab5d"`);
		await queryRunner.query(`DROP INDEX "IDX_a1910a76044b971609b75ea165"`);
		await queryRunner.query(`DROP INDEX "IDX_79001d281ecb766005b3d331c1"`);
		await queryRunner.query(`DROP INDEX "IDX_f447474d185cd70b3015853874"`);
		await queryRunner.query(`DROP INDEX "IDX_722b9cb3a991c964d86396b6bc"`);
		await queryRunner.query(`DROP INDEX "IDX_402290e7045e0c10ef97d9f982"`);
		await queryRunner.query(`DROP INDEX "IDX_e80fb588b1086ce2a4f2244814"`);
		await queryRunner.query(`DROP INDEX "IDX_a1f8fcd70164d915fe7dd4a1ec"`);
		await queryRunner.query(`DROP INDEX "IDX_189b79acd611870aba62b3594e"`);
		await queryRunner.query(`DROP INDEX "IDX_fa9018cb248ea0f3b2b30ef143"`);
		await queryRunner.query(`DROP INDEX "IDX_aed2d5cc5680fba9d387c7f931"`);
		await queryRunner.query(`DROP INDEX "IDX_a89a849957e005bafb8e4220bc"`);
		await queryRunner.query(`DROP INDEX "IDX_e65393bb52aa8275b1392c73f7"`);
		await queryRunner.query(`DROP INDEX "IDX_54776f6f5fd3c13c3bc1fbfac5"`);
		await queryRunner.query(`DROP INDEX "IDX_1ddf2da35e34378fd845d80a18"`);
		await queryRunner.query(`DROP INDEX "IDX_d1e8f22c02c5e949453dde7f2d"`);
		await queryRunner.query(`DROP INDEX "IDX_18dcdf754396f0cb0308dc91f4"`);
		await queryRunner.query(`DROP INDEX "IDX_154e9120e2acb632d8bd9b91ff"`);
		await queryRunner.query(`ALTER TABLE "time_log" RENAME TO "temporary_time_log"`);
		await queryRunner.query(
			`CREATE TABLE "time_log" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "startedAt" datetime, "stoppedAt" datetime, "logType" varchar NOT NULL DEFAULT ('TRACKED'), "source" varchar NOT NULL DEFAULT ('BROWSER'), "description" varchar, "reason" varchar, "isBillable" boolean NOT NULL DEFAULT (0), "deletedAt" datetime, "employeeId" varchar NOT NULL, "timesheetId" varchar, "projectId" varchar, "taskId" varchar, "organizationContactId" varchar, "isRunning" boolean, "version" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "editedAt" datetime, CONSTRAINT "FK_18dcdf754396f0cb0308dc91f4c" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_d1e8f22c02c5e949453dde7f2d1" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_1ddf2da35e34378fd845d80a18b" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_54776f6f5fd3c13c3bc1fbfac5b" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_e65393bb52aa8275b1392c73f72" FOREIGN KEY ("timesheetId") REFERENCES "timesheet" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_aed2d5cc5680fba9d387c7f931d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_fa9018cb248ea0f3b2b30ef143b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a89a849957e005bafb8e4220bc7" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "time_log"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "startedAt", "stoppedAt", "logType", "source", "description", "reason", "isBillable", "deletedAt", "employeeId", "timesheetId", "projectId", "taskId", "organizationContactId", "isRunning", "version", "organizationTeamId", "isActive", "isArchived", "editedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "startedAt", "stoppedAt", "logType", "source", "description", "reason", "isBillable", "deletedAt", "employeeId", "timesheetId", "projectId", "taskId", "organizationContactId", "isRunning", "version", "organizationTeamId", "isActive", "isArchived", "editedAt" FROM "temporary_time_log"`
		);
		await queryRunner.query(`DROP TABLE "temporary_time_log"`);
		await queryRunner.query(`CREATE INDEX "IDX_91a64228fbbe1516730a0cab5d" ON "time_log" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_a1910a76044b971609b75ea165" ON "time_log" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_79001d281ecb766005b3d331c1" ON "time_log" ("version") `);
		await queryRunner.query(`CREATE INDEX "IDX_f447474d185cd70b3015853874" ON "time_log" ("isRunning") `);
		await queryRunner.query(`CREATE INDEX "IDX_722b9cb3a991c964d86396b6bc" ON "time_log" ("isBillable") `);
		await queryRunner.query(`CREATE INDEX "IDX_402290e7045e0c10ef97d9f982" ON "time_log" ("source") `);
		await queryRunner.query(`CREATE INDEX "IDX_e80fb588b1086ce2a4f2244814" ON "time_log" ("logType") `);
		await queryRunner.query(`CREATE INDEX "IDX_a1f8fcd70164d915fe7dd4a1ec" ON "time_log" ("stoppedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_189b79acd611870aba62b3594e" ON "time_log" ("startedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_fa9018cb248ea0f3b2b30ef143" ON "time_log" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_aed2d5cc5680fba9d387c7f931" ON "time_log" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a89a849957e005bafb8e4220bc" ON "time_log" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e65393bb52aa8275b1392c73f7" ON "time_log" ("timesheetId") `);
		await queryRunner.query(`CREATE INDEX "IDX_54776f6f5fd3c13c3bc1fbfac5" ON "time_log" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1ddf2da35e34378fd845d80a18" ON "time_log" ("taskId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_d1e8f22c02c5e949453dde7f2d" ON "time_log" ("organizationContactId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_18dcdf754396f0cb0308dc91f4" ON "time_log" ("organizationTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_154e9120e2acb632d8bd9b91ff" ON "time_log" ("editedAt") `);
		await queryRunner.query(`DROP INDEX "IDX_892e285e1da2b3e61e51e50628"`);
		await queryRunner.query(`DROP INDEX "IDX_742688858e0484d66f04e4d4c4"`);
		await queryRunner.query(`DROP INDEX "IDX_2b374e5cdee1145ebb2a832f20"`);
		await queryRunner.query(`DROP INDEX "IDX_3d7feb5fe793e4811cdb79f983"`);
		await queryRunner.query(`DROP INDEX "IDX_235004f3dafac90692cd64d915"`);
		await queryRunner.query(`DROP INDEX "IDX_0951aacffe3f8d0cff54cf2f34"`);
		await queryRunner.query(`DROP INDEX "IDX_5b594d02d98d5defcde323abe5"`);
		await queryRunner.query(`DROP INDEX "IDX_fa1896dc735403799311968f7e"`);
		await queryRunner.query(`DROP INDEX "IDX_1b0867d86ead2332f3d4edba7d"`);
		await queryRunner.query(`DROP INDEX "IDX_eea7986acfb827bf5d0622c41f"`);
		await queryRunner.query(`ALTER TABLE "screenshot" RENAME TO "temporary_screenshot"`);
		await queryRunner.query(
			`CREATE TABLE "screenshot" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "file" varchar NOT NULL, "thumb" varchar, "recordedAt" datetime, "deletedAt" datetime, "timeSlotId" varchar, "storageProvider" varchar, "userId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "isWorkRelated" boolean, "description" varchar, "apps" text, CONSTRAINT "FK_fa1896dc735403799311968f7ec" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5b594d02d98d5defcde323abe5b" FOREIGN KEY ("timeSlotId") REFERENCES "time_slot" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0951aacffe3f8d0cff54cf2f341" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_235004f3dafac90692cd64d9158" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "screenshot"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "file", "thumb", "recordedAt", "deletedAt", "timeSlotId", "storageProvider", "userId", "isActive", "isArchived", "isWorkRelated", "description", "apps") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "file", "thumb", "recordedAt", "deletedAt", "timeSlotId", "storageProvider", "userId", "isActive", "isArchived", "isWorkRelated", "description", "apps" FROM "temporary_screenshot"`
		);
		await queryRunner.query(`DROP TABLE "temporary_screenshot"`);
		await queryRunner.query(`CREATE INDEX "IDX_892e285e1da2b3e61e51e50628" ON "screenshot" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_742688858e0484d66f04e4d4c4" ON "screenshot" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_2b374e5cdee1145ebb2a832f20" ON "screenshot" ("storageProvider") `);
		await queryRunner.query(`CREATE INDEX "IDX_3d7feb5fe793e4811cdb79f983" ON "screenshot" ("recordedAt") `);
		await queryRunner.query(`CREATE INDEX "IDX_235004f3dafac90692cd64d915" ON "screenshot" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_0951aacffe3f8d0cff54cf2f34" ON "screenshot" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5b594d02d98d5defcde323abe5" ON "screenshot" ("timeSlotId") `);
		await queryRunner.query(`CREATE INDEX "IDX_fa1896dc735403799311968f7e" ON "screenshot" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1b0867d86ead2332f3d4edba7d" ON "screenshot" ("isWorkRelated") `);
		await queryRunner.query(`CREATE INDEX "IDX_eea7986acfb827bf5d0622c41f" ON "screenshot" ("description") `);
		await queryRunner.query(`DROP INDEX "IDX_d2d6db7f03da5632687e5d140e"`);
		await queryRunner.query(`DROP INDEX "IDX_ae6ac57aafef59f561d4db3dd7"`);
		await queryRunner.query(`DROP INDEX "IDX_f2401d8fdff5d8970dfe30d3ae"`);
		await queryRunner.query(`DROP INDEX "IDX_fdb3f018c2bba4885bfa5757d1"`);
		await queryRunner.query(`DROP INDEX "IDX_a6f74ae99d549932391f0f4460"`);
		await queryRunner.query(`DROP INDEX "IDX_5a898f44fa31ef7916f0c38b01"`);
		await queryRunner.query(`DROP INDEX "IDX_4e382caaf07ab0923b2e06bf91"`);
		await queryRunner.query(`DROP INDEX "IDX_2743f8990fde12f9586287eb09"`);
		await queryRunner.query(`DROP INDEX "IDX_a28a1682ea80f10d1ecc7babaa"`);
		await queryRunner.query(`DROP INDEX "IDX_302b60a4970ffe94d5223f1c23"`);
		await queryRunner.query(`DROP INDEX "IDX_b5525385e85f7429e233d4a0fa"`);
		await queryRunner.query(`DROP INDEX "IDX_f27285af15ef48363745ab2d79"`);
		await queryRunner.query(`DROP INDEX "IDX_0e36a2c95e2f1df7f1b3059d24"`);
		await queryRunner.query(`DROP INDEX "IDX_ffd736f18ba71b3221e4f835a9"`);
		await queryRunner.query(`ALTER TABLE "activity" RENAME TO "temporary_activity"`);
		await queryRunner.query(
			`CREATE TABLE "activity" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "title" varchar, "description" varchar, "metaData" text, "date" date, "time" time, "duration" integer NOT NULL DEFAULT (0), "type" varchar, "source" varchar NOT NULL DEFAULT ('BROWSER'), "deletedAt" datetime, "employeeId" varchar NOT NULL, "projectId" varchar, "timeSlotId" varchar, "taskId" varchar, "recordedAt" datetime, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), CONSTRAINT "FK_2743f8990fde12f9586287eb09f" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_4e382caaf07ab0923b2e06bf918" FOREIGN KEY ("timeSlotId") REFERENCES "time_slot" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5a898f44fa31ef7916f0c38b016" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_a6f74ae99d549932391f0f44609" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_fdb3f018c2bba4885bfa5757d16" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f2401d8fdff5d8970dfe30d3aed" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "activity"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "description", "metaData", "date", "time", "duration", "type", "source", "deletedAt", "employeeId", "projectId", "timeSlotId", "taskId", "recordedAt", "isActive", "isArchived") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "description", "metaData", "date", "time", "duration", "type", "source", "deletedAt", "employeeId", "projectId", "timeSlotId", "taskId", "recordedAt", "isActive", "isArchived" FROM "temporary_activity"`
		);
		await queryRunner.query(`DROP TABLE "temporary_activity"`);
		await queryRunner.query(`CREATE INDEX "IDX_d2d6db7f03da5632687e5d140e" ON "activity" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_ae6ac57aafef59f561d4db3dd7" ON "activity" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f2401d8fdff5d8970dfe30d3ae" ON "activity" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_fdb3f018c2bba4885bfa5757d1" ON "activity" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a6f74ae99d549932391f0f4460" ON "activity" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5a898f44fa31ef7916f0c38b01" ON "activity" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4e382caaf07ab0923b2e06bf91" ON "activity" ("timeSlotId") `);
		await queryRunner.query(`CREATE INDEX "IDX_2743f8990fde12f9586287eb09" ON "activity" ("taskId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a28a1682ea80f10d1ecc7babaa" ON "activity" ("title") `);
		await queryRunner.query(`CREATE INDEX "IDX_302b60a4970ffe94d5223f1c23" ON "activity" ("date") `);
		await queryRunner.query(`CREATE INDEX "IDX_b5525385e85f7429e233d4a0fa" ON "activity" ("time") `);
		await queryRunner.query(`CREATE INDEX "IDX_f27285af15ef48363745ab2d79" ON "activity" ("type") `);
		await queryRunner.query(`CREATE INDEX "IDX_0e36a2c95e2f1df7f1b3059d24" ON "activity" ("source") `);
		await queryRunner.query(`CREATE INDEX "IDX_ffd736f18ba71b3221e4f835a9" ON "activity" ("recordedAt") `);
		await queryRunner.query(`DROP INDEX "IDX_5ddef92c4694e6d650d9e557b3"`);
		await queryRunner.query(`DROP INDEX "IDX_45e4bc4476681f4db2097cc2d5"`);
		await queryRunner.query(`DROP INDEX "IDX_4989834dd1c9c8ea3576ed99ce"`);
		await queryRunner.query(`DROP INDEX "IDX_981333982a6df8b815957dcbf2"`);
		await queryRunner.query(`DROP INDEX "IDX_c1f8ae47dc2f1882afc5045c73"`);
		await queryRunner.query(`DROP INDEX "IDX_c009cdd795be674c2047062374"`);
		await queryRunner.query(`ALTER TABLE "time_off_request" RENAME TO "temporary_time_off_request"`);
		await queryRunner.query(
			`CREATE TABLE "time_off_request" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "documentUrl" varchar, "description" varchar, "start" datetime NOT NULL, "end" datetime NOT NULL, "requestDate" datetime NOT NULL, "status" varchar NOT NULL, "isHoliday" boolean DEFAULT (0), "isArchived" boolean DEFAULT (0), "policyId" varchar NOT NULL, "documentId" varchar, "isActive" boolean DEFAULT (1), "deletedAt" datetime, CONSTRAINT "FK_c009cdd795be674c20470623742" FOREIGN KEY ("documentId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_c1f8ae47dc2f1882afc5045c739" FOREIGN KEY ("policyId") REFERENCES "time_off_policy" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_981333982a6df8b815957dcbf27" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_4989834dd1c9c8ea3576ed99ce5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "time_off_request"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "documentUrl", "description", "start", "end", "requestDate", "status", "isHoliday", "isArchived", "policyId", "documentId", "isActive", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "documentUrl", "description", "start", "end", "requestDate", "status", "isHoliday", "isArchived", "policyId", "documentId", "isActive", "deletedAt" FROM "temporary_time_off_request"`
		);
		await queryRunner.query(`DROP TABLE "temporary_time_off_request"`);
		await queryRunner.query(`CREATE INDEX "IDX_5ddef92c4694e6d650d9e557b3" ON "time_off_request" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_45e4bc4476681f4db2097cc2d5" ON "time_off_request" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_4989834dd1c9c8ea3576ed99ce" ON "time_off_request" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_981333982a6df8b815957dcbf2" ON "time_off_request" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_c1f8ae47dc2f1882afc5045c73" ON "time_off_request" ("policyId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c009cdd795be674c2047062374" ON "time_off_request" ("documentId") `);
		await queryRunner.query(`DROP INDEX "IDX_22d919e53cf5f6d836b18d407a"`);
		await queryRunner.query(`DROP INDEX "IDX_cf9377d3bcb7cb996f72268941"`);
		await queryRunner.query(`DROP INDEX "IDX_1c0ed84d54f8fbe4af10dfcda1"`);
		await queryRunner.query(`DROP INDEX "IDX_c2744cffeca55c3c9c52bb9789"`);
		await queryRunner.query(`DROP INDEX "IDX_7d7f69c79df4a6f152b0e362b1"`);
		await queryRunner.query(`ALTER TABLE "time_off_policy" RENAME TO "temporary_time_off_policy"`);
		await queryRunner.query(
			`CREATE TABLE "time_off_policy" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "requiresApproval" boolean NOT NULL, "paid" boolean NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_c2744cffeca55c3c9c52bb9789c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_1c0ed84d54f8fbe4af10dfcda1c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "time_off_policy"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "requiresApproval", "paid", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "requiresApproval", "paid", "isActive", "isArchived", "deletedAt" FROM "temporary_time_off_policy"`
		);
		await queryRunner.query(`DROP TABLE "temporary_time_off_policy"`);
		await queryRunner.query(`CREATE INDEX "IDX_22d919e53cf5f6d836b18d407a" ON "time_off_policy" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_cf9377d3bcb7cb996f72268941" ON "time_off_policy" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1c0ed84d54f8fbe4af10dfcda1" ON "time_off_policy" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c2744cffeca55c3c9c52bb9789" ON "time_off_policy" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_7d7f69c79df4a6f152b0e362b1" ON "time_off_policy" ("name") `);
		await queryRunner.query(`DROP INDEX "IDX_eeedffab85b3534a1068d9270f"`);
		await queryRunner.query(`DROP INDEX "IDX_b8eb9f3e420aa846f30e291960"`);
		await queryRunner.query(`DROP INDEX "IDX_56211336b5ff35fd944f225917"`);
		await queryRunner.query(`DROP INDEX "IDX_d154d06dac0d0e0a5d9a083e25"`);
		await queryRunner.query(`ALTER TABLE "tenant" RENAME TO "temporary_tenant"`);
		await queryRunner.query(
			`CREATE TABLE "tenant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "logo" varchar, "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_d154d06dac0d0e0a5d9a083e253" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "tenant"("id", "createdAt", "updatedAt", "name", "logo", "imageId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "logo", "imageId", "isActive", "isArchived", "deletedAt" FROM "temporary_tenant"`
		);
		await queryRunner.query(`DROP TABLE "temporary_tenant"`);
		await queryRunner.query(`CREATE INDEX "IDX_eeedffab85b3534a1068d9270f" ON "tenant" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_b8eb9f3e420aa846f30e291960" ON "tenant" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_56211336b5ff35fd944f225917" ON "tenant" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_d154d06dac0d0e0a5d9a083e25" ON "tenant" ("imageId") `);
		await queryRunner.query(`DROP INDEX "IDX_a7500f9b1b7917bf10882c820e"`);
		await queryRunner.query(`DROP INDEX "IDX_1d9975b98d82f385ae14b4d7c6"`);
		await queryRunner.query(`DROP INDEX "IDX_affdab301e348b892175f30fa3"`);
		await queryRunner.query(`ALTER TABLE "tenant_setting" RENAME TO "temporary_tenant_setting"`);
		await queryRunner.query(
			`CREATE TABLE "tenant_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "name" varchar NOT NULL, "value" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_affdab301e348b892175f30fa39" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "tenant_setting"("id", "createdAt", "updatedAt", "tenantId", "name", "value", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "name", "value", "isActive", "isArchived", "deletedAt" FROM "temporary_tenant_setting"`
		);
		await queryRunner.query(`DROP TABLE "temporary_tenant_setting"`);
		await queryRunner.query(`CREATE INDEX "IDX_a7500f9b1b7917bf10882c820e" ON "tenant_setting" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_1d9975b98d82f385ae14b4d7c6" ON "tenant_setting" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_affdab301e348b892175f30fa3" ON "tenant_setting" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_313b0e55871c1c9b6c22341536"`);
		await queryRunner.query(`DROP INDEX "IDX_7e509a66367ecaf8e3bc96f263"`);
		await queryRunner.query(`DROP INDEX "IDX_379c8bd0ce203341148c1f99ee"`);
		await queryRunner.query(`DROP INDEX "IDX_9c845f353378371ee3aa60f686"`);
		await queryRunner.query(`DROP INDEX "IDX_3396dda57286ca17ab61fd3704"`);
		await queryRunner.query(`DROP INDEX "IDX_e9fd8df772ad2d955a65f4c68a"`);
		await queryRunner.query(`DROP INDEX "IDX_91988120385964f213aec8aa84"`);
		await queryRunner.query(`DROP INDEX "IDX_959e77718a2e76ee56498c1106"`);
		await queryRunner.query(`ALTER TABLE "task_version" RENAME TO "temporary_task_version"`);
		await queryRunner.query(
			`CREATE TABLE "task_version" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_959e77718a2e76ee56498c1106a" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_91988120385964f213aec8aa84c" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9c845f353378371ee3aa60f6865" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_379c8bd0ce203341148c1f99ee7" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "task_version"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "temporary_task_version"`
		);
		await queryRunner.query(`DROP TABLE "temporary_task_version"`);
		await queryRunner.query(`CREATE INDEX "IDX_313b0e55871c1c9b6c22341536" ON "task_version" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_7e509a66367ecaf8e3bc96f263" ON "task_version" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_379c8bd0ce203341148c1f99ee" ON "task_version" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9c845f353378371ee3aa60f686" ON "task_version" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_3396dda57286ca17ab61fd3704" ON "task_version" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_e9fd8df772ad2d955a65f4c68a" ON "task_version" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_91988120385964f213aec8aa84" ON "task_version" ("projectId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_959e77718a2e76ee56498c1106" ON "task_version" ("organizationTeamId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_a19e8975e5c296640d457dfc11"`);
		await queryRunner.query(`DROP INDEX "IDX_68eaba689ed6d3e27ec93d3e88"`);
		await queryRunner.query(`DROP INDEX "IDX_b0c955f276679dd2b2735c3936"`);
		await queryRunner.query(`DROP INDEX "IDX_9b9a828a49f4bd6383a4073fe2"`);
		await queryRunner.query(`DROP INDEX "IDX_efbaf00a743316b394cc31e4a2"`);
		await queryRunner.query(`DROP INDEX "IDX_0330b4a942b536d8d1f264abe3"`);
		await queryRunner.query(`DROP INDEX "IDX_25d9737ee153411871b4d20c67"`);
		await queryRunner.query(`DROP INDEX "IDX_79c525a8c2209e90186bfcbea9"`);
		await queryRunner.query(`ALTER TABLE "task_status" RENAME TO "temporary_task_status"`);
		await queryRunner.query(
			`CREATE TABLE "task_status" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "isCollapsed" boolean NOT NULL DEFAULT (0), "order" integer, "isTodo" boolean NOT NULL DEFAULT (0), "isInProgress" boolean NOT NULL DEFAULT (0), "isDone" boolean NOT NULL DEFAULT (0), CONSTRAINT "FK_9b9a828a49f4bd6383a4073fe23" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_efbaf00a743316b394cc31e4a20" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a19e8975e5c296640d457dfc11f" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0330b4a942b536d8d1f264abe32" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "task_status"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt", "isCollapsed", "order", "isTodo", "isInProgress", "isDone") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt", "isCollapsed", "order", "isTodo", "isInProgress", "isDone" FROM "temporary_task_status"`
		);
		await queryRunner.query(`DROP TABLE "temporary_task_status"`);
		await queryRunner.query(`CREATE INDEX "IDX_a19e8975e5c296640d457dfc11" ON "task_status" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_68eaba689ed6d3e27ec93d3e88" ON "task_status" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_b0c955f276679dd2b2735c3936" ON "task_status" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_9b9a828a49f4bd6383a4073fe2" ON "task_status" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_efbaf00a743316b394cc31e4a2" ON "task_status" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_0330b4a942b536d8d1f264abe3" ON "task_status" ("organizationTeamId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_25d9737ee153411871b4d20c67" ON "task_status" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_79c525a8c2209e90186bfcbea9" ON "task_status" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_8f26ffc61abaef417b0f807695"`);
		await queryRunner.query(`DROP INDEX "IDX_d65afcfe2d64e49d43931579a3"`);
		await queryRunner.query(`DROP INDEX "IDX_f4438327b3c2afb0832569b2a1"`);
		await queryRunner.query(`DROP INDEX "IDX_f6ec2207e50680a475d71c8979"`);
		await queryRunner.query(`DROP INDEX "IDX_596512cc6508a482cc23ae6ab7"`);
		await queryRunner.query(`DROP INDEX "IDX_90c54f57b29cc8b67edc2738ae"`);
		await queryRunner.query(`DROP INDEX "IDX_1a7b137d009616a2ff1aa6834f"`);
		await queryRunner.query(`DROP INDEX "IDX_ad6792b26526bd96ab18d63454"`);
		await queryRunner.query(`ALTER TABLE "task_size" RENAME TO "temporary_task_size"`);
		await queryRunner.query(
			`CREATE TABLE "task_size" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_f4438327b3c2afb0832569b2a1e" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ad6792b26526bd96ab18d634544" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f6ec2207e50680a475d71c89793" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_596512cc6508a482cc23ae6ab78" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "task_size"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "temporary_task_size"`
		);
		await queryRunner.query(`DROP TABLE "temporary_task_size"`);
		await queryRunner.query(`CREATE INDEX "IDX_8f26ffc61abaef417b0f807695" ON "task_size" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_d65afcfe2d64e49d43931579a3" ON "task_size" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f4438327b3c2afb0832569b2a1" ON "task_size" ("organizationTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f6ec2207e50680a475d71c8979" ON "task_size" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_596512cc6508a482cc23ae6ab7" ON "task_size" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_90c54f57b29cc8b67edc2738ae" ON "task_size" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_1a7b137d009616a2ff1aa6834f" ON "task_size" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_ad6792b26526bd96ab18d63454" ON "task_size" ("projectId") `);
		await queryRunner.query(`DROP INDEX "IDX_8177dd93be8044b37d3bb9285d"`);
		await queryRunner.query(`DROP INDEX "IDX_5a341f51d8f5ec12db24ab033f"`);
		await queryRunner.query(`DROP INDEX "IDX_b7b0ea8ac2825fb981c1181d11"`);
		await queryRunner.query(`DROP INDEX "IDX_bed691e21fe01cf5aceee72295"`);
		await queryRunner.query(`DROP INDEX "IDX_9423f99da972c150f85dbc11c1"`);
		await queryRunner.query(`DROP INDEX "IDX_61a7cb4452d9e23f91231b7fd6"`);
		await queryRunner.query(`DROP INDEX "IDX_d99fe5b50dbe5078e0d9a9b6a9"`);
		await queryRunner.query(`DROP INDEX "IDX_4967ebdca0aefb9d43e56695e4"`);
		await queryRunner.query(`ALTER TABLE "task_related_issue_type" RENAME TO "temporary_task_related_issue_type"`);
		await queryRunner.query(
			`CREATE TABLE "task_related_issue_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_4967ebdca0aefb9d43e56695e42" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d99fe5b50dbe5078e0d9a9b6a9d" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_bed691e21fe01cf5aceee722952" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b7b0ea8ac2825fb981c1181d115" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "task_related_issue_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "temporary_task_related_issue_type"`
		);
		await queryRunner.query(`DROP TABLE "temporary_task_related_issue_type"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_8177dd93be8044b37d3bb9285d" ON "task_related_issue_type" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5a341f51d8f5ec12db24ab033f" ON "task_related_issue_type" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b7b0ea8ac2825fb981c1181d11" ON "task_related_issue_type" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_bed691e21fe01cf5aceee72295" ON "task_related_issue_type" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9423f99da972c150f85dbc11c1" ON "task_related_issue_type" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_61a7cb4452d9e23f91231b7fd6" ON "task_related_issue_type" ("value") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d99fe5b50dbe5078e0d9a9b6a9" ON "task_related_issue_type" ("projectId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4967ebdca0aefb9d43e56695e4" ON "task_related_issue_type" ("organizationTeamId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e6adb82db368af15f2b8cdd4e8"`);
		await queryRunner.query(`DROP INDEX "IDX_8ddcc5eeaf96314f53ca486821"`);
		await queryRunner.query(`DROP INDEX "IDX_52b039cff6a1adf6b7f9e49ee4"`);
		await queryRunner.query(`DROP INDEX "IDX_1818655f27b8cf4f0d1dbfeb8d"`);
		await queryRunner.query(`DROP INDEX "IDX_7fd1b30d159b608cbf59009f68"`);
		await queryRunner.query(`DROP INDEX "IDX_7d656b4cba8f11e639dbc5aab3"`);
		await queryRunner.query(`DROP INDEX "IDX_46daede7b19176b6ad959d70da"`);
		await queryRunner.query(`DROP INDEX "IDX_db4237960ca989eb7a48cd433b"`);
		await queryRunner.query(`ALTER TABLE "task_priority" RENAME TO "temporary_task_priority"`);
		await queryRunner.query(
			`CREATE TABLE "task_priority" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_52b039cff6a1adf6b7f9e49ee44" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_db4237960ca989eb7a48cd433b1" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1818655f27b8cf4f0d1dbfeb8db" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7fd1b30d159b608cbf59009f681" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "task_priority"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "temporary_task_priority"`
		);
		await queryRunner.query(`DROP TABLE "temporary_task_priority"`);
		await queryRunner.query(`CREATE INDEX "IDX_e6adb82db368af15f2b8cdd4e8" ON "task_priority" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_8ddcc5eeaf96314f53ca486821" ON "task_priority" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_52b039cff6a1adf6b7f9e49ee4" ON "task_priority" ("organizationTeamId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_1818655f27b8cf4f0d1dbfeb8d" ON "task_priority" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7fd1b30d159b608cbf59009f68" ON "task_priority" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7d656b4cba8f11e639dbc5aab3" ON "task_priority" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_46daede7b19176b6ad959d70da" ON "task_priority" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_db4237960ca989eb7a48cd433b" ON "task_priority" ("projectId") `);
		await queryRunner.query(`DROP INDEX "IDX_88021c0cd9508757d3d90333f8"`);
		await queryRunner.query(`DROP INDEX "IDX_d49853e18e5bc772f5435b01a5"`);
		await queryRunner.query(`DROP INDEX "IDX_20b50abc5c97610a75d49ad381"`);
		await queryRunner.query(`DROP INDEX "IDX_24114c4059e6b6991daba541b1"`);
		await queryRunner.query(`DROP INDEX "IDX_6deea7b3671e45973e191a1502"`);
		await queryRunner.query(`DROP INDEX "IDX_0848fd2b8c23c0ab55146297cf"`);
		await queryRunner.query(`ALTER TABLE "task_linked_issues" RENAME TO "temporary_task_linked_issues"`);
		await queryRunner.query(
			`CREATE TABLE "task_linked_issues" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "action" integer NOT NULL, "taskFromId" varchar NOT NULL, "taskToId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_0848fd2b8c23c0ab55146297cff" FOREIGN KEY ("taskToId") REFERENCES "task" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6deea7b3671e45973e191a1502c" FOREIGN KEY ("taskFromId") REFERENCES "task" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_24114c4059e6b6991daba541b1d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_20b50abc5c97610a75d49ad3817" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "task_linked_issues"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "action", "taskFromId", "taskToId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "action", "taskFromId", "taskToId", "isActive", "isArchived", "deletedAt" FROM "temporary_task_linked_issues"`
		);
		await queryRunner.query(`DROP TABLE "temporary_task_linked_issues"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_88021c0cd9508757d3d90333f8" ON "task_linked_issues" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_d49853e18e5bc772f5435b01a5" ON "task_linked_issues" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_20b50abc5c97610a75d49ad381" ON "task_linked_issues" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_24114c4059e6b6991daba541b1" ON "task_linked_issues" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6deea7b3671e45973e191a1502" ON "task_linked_issues" ("taskFromId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_0848fd2b8c23c0ab55146297cf" ON "task_linked_issues" ("taskToId") `);
		await queryRunner.query(`DROP INDEX "IDX_b8616deefe44d0622233e73fbf"`);
		await queryRunner.query(`DROP INDEX "IDX_2f4bdd2593fd6038aaa91fd107"`);
		await queryRunner.query(`DROP INDEX "IDX_0cbe714983eb0aae5feeee8212"`);
		await queryRunner.query(`DROP INDEX "IDX_ed5441fb13e82854a994da5a78"`);
		await queryRunner.query(`DROP INDEX "IDX_7127880d6fae956ecc1c84ac31"`);
		await queryRunner.query(`DROP INDEX "IDX_f092f3386f10f2e2ef5b0b6ad1"`);
		await queryRunner.query(`DROP INDEX "IDX_2fe7a278e6f08d2be55740a939"`);
		await queryRunner.query(`DROP INDEX "IDX_e91cbff3d206f150ccc14d0c3a"`);
		await queryRunner.query(`DROP INDEX "IDX_5b0272d923a31c972bed1a1ac4"`);
		await queryRunner.query(`DROP INDEX "IDX_3797a20ef5553ae87af126bc2f"`);
		await queryRunner.query(`DROP INDEX "IDX_94fe6b3a5aec5f85427df4f8cd"`);
		await queryRunner.query(`DROP INDEX "IDX_1e1f64696aa3a26d3e12c840e5"`);
		await queryRunner.query(`DROP INDEX "taskNumber"`);
		await queryRunner.query(`DROP INDEX "IDX_3e16c81005c389a4db83c0e5e3"`);
		await queryRunner.query(`DROP INDEX "IDX_ca2f7edd5a5ce8f14b257c9d54"`);
		await queryRunner.query(`DROP INDEX "IDX_579534d8e12f22d308d6bd5f42"`);
		await queryRunner.query(`ALTER TABLE "task" RENAME TO "temporary_task"`);
		await queryRunner.query(
			`CREATE TABLE "task" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "title" varchar NOT NULL, "description" varchar, "status" varchar, "estimate" integer, "dueDate" datetime, "projectId" varchar, "creatorId" varchar, "organizationSprintId" varchar, "number" integer, "prefix" varchar, "priority" varchar, "size" varchar, "public" boolean DEFAULT (1), "startDate" datetime, "resolvedAt" datetime, "version" varchar, "issueType" varchar, "parentId" varchar, "taskStatusId" varchar, "taskSizeId" varchar, "taskPriorityId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "projectModuleId" varchar, CONSTRAINT "FK_579534d8e12f22d308d6bd5f428" FOREIGN KEY ("projectModuleId") REFERENCES "organization_project_module" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8c9920b5fb32c3d8453f64b705c" FOREIGN KEY ("parentId") REFERENCES "task" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_1e1f64696aa3a26d3e12c840e55" FOREIGN KEY ("organizationSprintId") REFERENCES "organization_sprint" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_94fe6b3a5aec5f85427df4f8cd7" FOREIGN KEY ("creatorId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5b0272d923a31c972bed1a1ac4d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e91cbff3d206f150ccc14d0c3a1" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0cbe714983eb0aae5feeee8212b" FOREIGN KEY ("taskStatusId") REFERENCES "task_status" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_2f4bdd2593fd6038aaa91fd1076" FOREIGN KEY ("taskSizeId") REFERENCES "task_size" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_b8616deefe44d0622233e73fbf9" FOREIGN KEY ("taskPriorityId") REFERENCES "task_priority" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "task"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "description", "status", "estimate", "dueDate", "projectId", "creatorId", "organizationSprintId", "number", "prefix", "priority", "size", "public", "startDate", "resolvedAt", "version", "issueType", "parentId", "taskStatusId", "taskSizeId", "taskPriorityId", "isActive", "isArchived", "deletedAt", "projectModuleId") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "description", "status", "estimate", "dueDate", "projectId", "creatorId", "organizationSprintId", "number", "prefix", "priority", "size", "public", "startDate", "resolvedAt", "version", "issueType", "parentId", "taskStatusId", "taskSizeId", "taskPriorityId", "isActive", "isArchived", "deletedAt", "projectModuleId" FROM "temporary_task"`
		);
		await queryRunner.query(`DROP TABLE "temporary_task"`);
		await queryRunner.query(`CREATE INDEX "IDX_b8616deefe44d0622233e73fbf" ON "task" ("taskPriorityId") `);
		await queryRunner.query(`CREATE INDEX "IDX_2f4bdd2593fd6038aaa91fd107" ON "task" ("taskSizeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_0cbe714983eb0aae5feeee8212" ON "task" ("taskStatusId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ed5441fb13e82854a994da5a78" ON "task" ("issueType") `);
		await queryRunner.query(`CREATE INDEX "IDX_7127880d6fae956ecc1c84ac31" ON "task" ("size") `);
		await queryRunner.query(`CREATE INDEX "IDX_f092f3386f10f2e2ef5b0b6ad1" ON "task" ("priority") `);
		await queryRunner.query(`CREATE INDEX "IDX_2fe7a278e6f08d2be55740a939" ON "task" ("status") `);
		await queryRunner.query(`CREATE INDEX "IDX_e91cbff3d206f150ccc14d0c3a" ON "task" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5b0272d923a31c972bed1a1ac4" ON "task" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_3797a20ef5553ae87af126bc2f" ON "task" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_94fe6b3a5aec5f85427df4f8cd" ON "task" ("creatorId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1e1f64696aa3a26d3e12c840e5" ON "task" ("organizationSprintId") `);
		await queryRunner.query(`CREATE UNIQUE INDEX "taskNumber" ON "task" ("projectId", "number") `);
		await queryRunner.query(`CREATE INDEX "IDX_3e16c81005c389a4db83c0e5e3" ON "task" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_ca2f7edd5a5ce8f14b257c9d54" ON "task" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_579534d8e12f22d308d6bd5f42" ON "task" ("projectModuleId") `);
		await queryRunner.query(`DROP INDEX "IDX_586513cceb16777fd14a17bfe1"`);
		await queryRunner.query(`DROP INDEX "IDX_131331557078611a68b4a5b2e7"`);
		await queryRunner.query(`DROP INDEX "IDX_33779b0395f72af0b50dc526d1"`);
		await queryRunner.query(`DROP INDEX "IDX_af2d743ed61571bcdc5d9a27a0"`);
		await queryRunner.query(`DROP INDEX "IDX_4af451ab46a94e94394c72d911"`);
		await queryRunner.query(`DROP INDEX "IDX_16dbef9d1b2b422abdce8ee3ae"`);
		await queryRunner.query(`DROP INDEX "IDX_8b12c913c39c72fe5980427c96"`);
		await queryRunner.query(`DROP INDEX "IDX_722ce5d7535524b96c6d03f7c4"`);
		await queryRunner.query(`DROP INDEX "IDX_1909e9bae7d8b2c920b3e4d859"`);
		await queryRunner.query(`ALTER TABLE "issue_type" RENAME TO "temporary_issue_type"`);
		await queryRunner.query(
			`CREATE TABLE "issue_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "value" varchar NOT NULL, "description" varchar, "icon" varchar, "color" varchar, "isSystem" boolean NOT NULL DEFAULT (0), "imageId" varchar, "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "isDefault" boolean NOT NULL DEFAULT (0), CONSTRAINT "FK_8b12c913c39c72fe5980427c963" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_16dbef9d1b2b422abdce8ee3ae2" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_33779b0395f72af0b50dc526d1d" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_131331557078611a68b4a5b2e7e" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_586513cceb16777fd14a17bfe10" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "issue_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "imageId", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt", "isDefault") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "value", "description", "icon", "color", "isSystem", "imageId", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt", "isDefault" FROM "temporary_issue_type"`
		);
		await queryRunner.query(`DROP TABLE "temporary_issue_type"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_586513cceb16777fd14a17bfe1" ON "issue_type" ("organizationTeamId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_131331557078611a68b4a5b2e7" ON "issue_type" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_33779b0395f72af0b50dc526d1" ON "issue_type" ("imageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_af2d743ed61571bcdc5d9a27a0" ON "issue_type" ("value") `);
		await queryRunner.query(`CREATE INDEX "IDX_4af451ab46a94e94394c72d911" ON "issue_type" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_16dbef9d1b2b422abdce8ee3ae" ON "issue_type" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8b12c913c39c72fe5980427c96" ON "issue_type" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_722ce5d7535524b96c6d03f7c4" ON "issue_type" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1909e9bae7d8b2c920b3e4d859" ON "issue_type" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_1f3ffda4fce02682e76308b476"`);
		await queryRunner.query(`DROP INDEX "IDX_b1a7086c279309b20e8384d0d9"`);
		await queryRunner.query(`DROP INDEX "IDX_87bfea6d0b9a1ec602ee88e5f6"`);
		await queryRunner.query(`DROP INDEX "IDX_16507eb222e3c50be077fb4ace"`);
		await queryRunner.query(`DROP INDEX "IDX_8f274646f2bdf4e12990feeb04"`);
		await queryRunner.query(`DROP INDEX "IDX_a3ee022203211f678376cd919b"`);
		await queryRunner.query(`ALTER TABLE "task_estimation" RENAME TO "temporary_task_estimation"`);
		await queryRunner.query(
			`CREATE TABLE "task_estimation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "estimate" integer NOT NULL, "employeeId" varchar NOT NULL, "taskId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a3ee022203211f678376cd919bb" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8f274646f2bdf4e12990feeb040" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_16507eb222e3c50be077fb4ace2" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_87bfea6d0b9a1ec602ee88e5f68" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "task_estimation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "estimate", "employeeId", "taskId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "estimate", "employeeId", "taskId", "isActive", "isArchived", "deletedAt" FROM "temporary_task_estimation"`
		);
		await queryRunner.query(`DROP TABLE "temporary_task_estimation"`);
		await queryRunner.query(`CREATE INDEX "IDX_1f3ffda4fce02682e76308b476" ON "task_estimation" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_b1a7086c279309b20e8384d0d9" ON "task_estimation" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_87bfea6d0b9a1ec602ee88e5f6" ON "task_estimation" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_16507eb222e3c50be077fb4ace" ON "task_estimation" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_8f274646f2bdf4e12990feeb04" ON "task_estimation" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a3ee022203211f678376cd919b" ON "task_estimation" ("taskId") `);
		await queryRunner.query(`DROP INDEX "IDX_f2cf366f3f08e31784b056df88"`);
		await queryRunner.query(`DROP INDEX "IDX_9779a35ef1338bafb7b90714f1"`);
		await queryRunner.query(`DROP INDEX "IDX_ecb357a3764a7344c633a257d7"`);
		await queryRunner.query(`DROP INDEX "IDX_ce5e588780497b05cd6267e20e"`);
		await queryRunner.query(`DROP INDEX "IDX_903b08cd4c8025e73316342452"`);
		await queryRunner.query(`DROP INDEX "IDX_b022c2b684c35dcc63c22850f1"`);
		await queryRunner.query(`ALTER TABLE "daily_plan" RENAME TO "temporary_daily_plan"`);
		await queryRunner.query(
			`CREATE TABLE "daily_plan" ("deletedAt" datetime, "id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "date" datetime NOT NULL, "workTimePlanned" decimal NOT NULL, "status" varchar NOT NULL, "employeeId" varchar, "organizationTeamId" varchar, CONSTRAINT "FK_b022c2b684c35dcc63c22850f13" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ecb357a3764a7344c633a257d76" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9779a35ef1338bafb7b90714f16" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f2cf366f3f08e31784b056df880" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "daily_plan"("deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "date", "workTimePlanned", "status", "employeeId", "organizationTeamId") SELECT "deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "date", "workTimePlanned", "status", "employeeId", "organizationTeamId" FROM "temporary_daily_plan"`
		);
		await queryRunner.query(`DROP TABLE "temporary_daily_plan"`);
		await queryRunner.query(`CREATE INDEX "IDX_f2cf366f3f08e31784b056df88" ON "daily_plan" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9779a35ef1338bafb7b90714f1" ON "daily_plan" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ecb357a3764a7344c633a257d7" ON "daily_plan" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ce5e588780497b05cd6267e20e" ON "daily_plan" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_903b08cd4c8025e73316342452" ON "daily_plan" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_b022c2b684c35dcc63c22850f1" ON "daily_plan" ("organizationTeamId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_49746602acc4e5e8721062b69e"`);
		await queryRunner.query(`DROP INDEX "IDX_b08dd29fb6a8acdf83c83d8988"`);
		await queryRunner.query(`DROP INDEX "IDX_c2f6bec0b39eaa3a6d90903ae9"`);
		await queryRunner.query(`DROP INDEX "IDX_1f22c73374bcca1ea84a4dca59"`);
		await queryRunner.query(`DROP INDEX "IDX_58876ee26a90170551027459bf"`);
		await queryRunner.query(`ALTER TABLE "tag" RENAME TO "temporary_tag"`);
		await queryRunner.query(
			`CREATE TABLE "tag" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "color" varchar NOT NULL, "isSystem" boolean NOT NULL DEFAULT (0), "icon" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "textColor" varchar, "fix_relational_custom_fields" boolean, CONSTRAINT "FK_c2f6bec0b39eaa3a6d90903ae99" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b08dd29fb6a8acdf83c83d8988f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_49746602acc4e5e8721062b69ec" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "tag"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "color", "isSystem", "icon", "organizationTeamId", "isActive", "isArchived", "deletedAt", "textColor", "fix_relational_custom_fields") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "color", "isSystem", "icon", "organizationTeamId", "isActive", "isArchived", "deletedAt", "textColor", "fix_relational_custom_fields" FROM "temporary_tag"`
		);
		await queryRunner.query(`DROP TABLE "temporary_tag"`);
		await queryRunner.query(`CREATE INDEX "IDX_49746602acc4e5e8721062b69e" ON "tag" ("organizationTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b08dd29fb6a8acdf83c83d8988" ON "tag" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c2f6bec0b39eaa3a6d90903ae9" ON "tag" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_1f22c73374bcca1ea84a4dca59" ON "tag" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_58876ee26a90170551027459bf" ON "tag" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_ca52119f9e4857399706d723e9"`);
		await queryRunner.query(`DROP INDEX "IDX_f4cdbe61d68413f4d6a671f8c2"`);
		await queryRunner.query(`DROP INDEX "IDX_8e502eac7ed1347c71c26beae8"`);
		await queryRunner.query(`DROP INDEX "IDX_b2923d394f3636671ff9b3c3e8"`);
		await queryRunner.query(`ALTER TABLE "skill" RENAME TO "temporary_skill"`);
		await queryRunner.query(
			`CREATE TABLE "skill" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "color" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_b2923d394f3636671ff9b3c3e81" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8e502eac7ed1347c71c26beae81" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "skill"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "color", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "color", "isActive", "isArchived", "deletedAt" FROM "temporary_skill"`
		);
		await queryRunner.query(`DROP TABLE "temporary_skill"`);
		await queryRunner.query(`CREATE INDEX "IDX_ca52119f9e4857399706d723e9" ON "skill" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_f4cdbe61d68413f4d6a671f8c2" ON "skill" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8e502eac7ed1347c71c26beae8" ON "skill" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b2923d394f3636671ff9b3c3e8" ON "skill" ("organizationId") `);
		await queryRunner.query(`DROP INDEX "IDX_09868c0733ba37a4753ff8931f"`);
		await queryRunner.query(`DROP INDEX "IDX_c5f75cd3367769b6f22b298d29"`);
		await queryRunner.query(`DROP INDEX "IDX_ae4578dcaed5adff96595e6166"`);
		await queryRunner.query(`DROP INDEX "IDX_1751a572e91385a09d41c62471"`);
		await queryRunner.query(`ALTER TABLE "role" RENAME TO "temporary_role"`);
		await queryRunner.query(
			`CREATE TABLE "role" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "name" varchar NOT NULL, "isSystem" boolean NOT NULL DEFAULT (0), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_1751a572e91385a09d41c624714" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "role"("id", "createdAt", "updatedAt", "tenantId", "name", "isSystem", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "name", "isSystem", "isActive", "isArchived", "deletedAt" FROM "temporary_role"`
		);
		await queryRunner.query(`DROP TABLE "temporary_role"`);
		await queryRunner.query(`CREATE INDEX "IDX_09868c0733ba37a4753ff8931f" ON "role" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_c5f75cd3367769b6f22b298d29" ON "role" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_ae4578dcaed5adff96595e6166" ON "role" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_1751a572e91385a09d41c62471" ON "role" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_5c36df1a5c85016952e90d760f"`);
		await queryRunner.query(`DROP INDEX "IDX_78f93dbb42a97f6785bcf53efd"`);
		await queryRunner.query(`DROP INDEX "IDX_e3130a39c1e4a740d044e68573"`);
		await queryRunner.query(`DROP INDEX "IDX_8307c5c44a4ad6210b767b17a9"`);
		await queryRunner.query(`DROP INDEX "IDX_cbd053921056e77c0a8e03122a"`);
		await queryRunner.query(`ALTER TABLE "role_permission" RENAME TO "temporary_role_permission"`);
		await queryRunner.query(
			`CREATE TABLE "role_permission" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "permission" varchar NOT NULL, "enabled" boolean DEFAULT (0), "roleId" varchar NOT NULL, "description" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_cbd053921056e77c0a8e03122af" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_e3130a39c1e4a740d044e685730" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "role_permission"("id", "createdAt", "updatedAt", "tenantId", "permission", "enabled", "roleId", "description", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "permission", "enabled", "roleId", "description", "isActive", "isArchived", "deletedAt" FROM "temporary_role_permission"`
		);
		await queryRunner.query(`DROP TABLE "temporary_role_permission"`);
		await queryRunner.query(`CREATE INDEX "IDX_5c36df1a5c85016952e90d760f" ON "role_permission" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_78f93dbb42a97f6785bcf53efd" ON "role_permission" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_e3130a39c1e4a740d044e68573" ON "role_permission" ("roleId") `);
		await queryRunner.query(`CREATE INDEX "IDX_8307c5c44a4ad6210b767b17a9" ON "role_permission" ("permission") `);
		await queryRunner.query(`CREATE INDEX "IDX_cbd053921056e77c0a8e03122a" ON "role_permission" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_c77295d7f5d6086c815de3c120"`);
		await queryRunner.query(`DROP INDEX "IDX_db152600f88a9a4888df0b626e"`);
		await queryRunner.query(`DROP INDEX "IDX_9feaa23ed7bc47d51315e304bb"`);
		await queryRunner.query(`DROP INDEX "IDX_8343741e7929043b2a7de89f73"`);
		await queryRunner.query(`DROP INDEX "IDX_c63fafc733ff8ab37dede8ffec"`);
		await queryRunner.query(`DROP INDEX "IDX_26bb3420001d31337393ed05bc"`);
		await queryRunner.query(`ALTER TABLE "request_approval" RENAME TO "temporary_request_approval"`);
		await queryRunner.query(
			`CREATE TABLE "request_approval" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "status" integer, "createdBy" varchar, "createdByName" varchar, "min_count" integer, "requestId" varchar, "requestType" varchar, "approvalPolicyId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_26bb3420001d31337393ed05bc3" FOREIGN KEY ("approvalPolicyId") REFERENCES "approval_policy" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8343741e7929043b2a7de89f739" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9feaa23ed7bc47d51315e304bb5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "request_approval"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "status", "createdBy", "createdByName", "min_count", "requestId", "requestType", "approvalPolicyId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "status", "createdBy", "createdByName", "min_count", "requestId", "requestType", "approvalPolicyId", "isActive", "isArchived", "deletedAt" FROM "temporary_request_approval"`
		);
		await queryRunner.query(`DROP TABLE "temporary_request_approval"`);
		await queryRunner.query(`CREATE INDEX "IDX_c77295d7f5d6086c815de3c120" ON "request_approval" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_db152600f88a9a4888df0b626e" ON "request_approval" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_9feaa23ed7bc47d51315e304bb" ON "request_approval" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_8343741e7929043b2a7de89f73" ON "request_approval" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_c63fafc733ff8ab37dede8ffec" ON "request_approval" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_26bb3420001d31337393ed05bc" ON "request_approval" ("approvalPolicyId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_bdcb4ea389bdb794bae75b0170"`);
		await queryRunner.query(`DROP INDEX "IDX_34b2e8f794e0336b9ac410d8bd"`);
		await queryRunner.query(`DROP INDEX "IDX_94b2a3d0f17c9549dea1493dc9"`);
		await queryRunner.query(`DROP INDEX "IDX_77e1050669b32cfff482f96016"`);
		await queryRunner.query(`DROP INDEX "IDX_6c75d8a8c609e88896b2653cc4"`);
		await queryRunner.query(`DROP INDEX "IDX_9ccdaee6c5c62cda8f7375e841"`);
		await queryRunner.query(`ALTER TABLE "request_approval_team" RENAME TO "temporary_request_approval_team"`);
		await queryRunner.query(
			`CREATE TABLE "request_approval_team" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "status" integer, "requestApprovalId" varchar NOT NULL, "teamId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_9ccdaee6c5c62cda8f7375e8417" FOREIGN KEY ("teamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_6c75d8a8c609e88896b2653cc41" FOREIGN KEY ("requestApprovalId") REFERENCES "request_approval" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_77e1050669b32cfff482f960169" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_94b2a3d0f17c9549dea1493dc96" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "request_approval_team"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "status", "requestApprovalId", "teamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "status", "requestApprovalId", "teamId", "isActive", "isArchived", "deletedAt" FROM "temporary_request_approval_team"`
		);
		await queryRunner.query(`DROP TABLE "temporary_request_approval_team"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_bdcb4ea389bdb794bae75b0170" ON "request_approval_team" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_34b2e8f794e0336b9ac410d8bd" ON "request_approval_team" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_94b2a3d0f17c9549dea1493dc9" ON "request_approval_team" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_77e1050669b32cfff482f96016" ON "request_approval_team" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6c75d8a8c609e88896b2653cc4" ON "request_approval_team" ("requestApprovalId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9ccdaee6c5c62cda8f7375e841" ON "request_approval_team" ("teamId") `);
		await queryRunner.query(`DROP INDEX "IDX_3d66190c19b9fe69a8bbb300df"`);
		await queryRunner.query(`DROP INDEX "IDX_2634ff04775e659c4792325f38"`);
		await queryRunner.query(`DROP INDEX "IDX_a5445b38b780b29b09369e36a9"`);
		await queryRunner.query(`DROP INDEX "IDX_4071f027554eefff65ac8123e6"`);
		await queryRunner.query(`DROP INDEX "IDX_563fec5539b89a57f40731f985"`);
		await queryRunner.query(`DROP INDEX "IDX_ce2113039f070b3f003aa0db61"`);
		await queryRunner.query(
			`ALTER TABLE "request_approval_employee" RENAME TO "temporary_request_approval_employee"`
		);
		await queryRunner.query(
			`CREATE TABLE "request_approval_employee" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "status" integer, "requestApprovalId" varchar NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_ce2113039f070b3f003aa0db611" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_563fec5539b89a57f40731f9858" FOREIGN KEY ("requestApprovalId") REFERENCES "request_approval" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4071f027554eefff65ac8123e6e" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a5445b38b780b29b09369e36a9b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "request_approval_employee"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "status", "requestApprovalId", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "status", "requestApprovalId", "employeeId", "isActive", "isArchived", "deletedAt" FROM "temporary_request_approval_employee"`
		);
		await queryRunner.query(`DROP TABLE "temporary_request_approval_employee"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_3d66190c19b9fe69a8bbb300df" ON "request_approval_employee" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2634ff04775e659c4792325f38" ON "request_approval_employee" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a5445b38b780b29b09369e36a9" ON "request_approval_employee" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4071f027554eefff65ac8123e6" ON "request_approval_employee" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_563fec5539b89a57f40731f985" ON "request_approval_employee" ("requestApprovalId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ce2113039f070b3f003aa0db61" ON "request_approval_employee" ("employeeId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_1316fdd7b9a2926437a13271bf"`);
		await queryRunner.query(`DROP INDEX "IDX_143ead1a6ac5f73125d8c4c3aa"`);
		await queryRunner.query(`DROP INDEX "IDX_6f9ee54eb839117e83b937648d"`);
		await queryRunner.query(`DROP INDEX "IDX_ef16fed5f7e6951027502e6458"`);
		await queryRunner.query(`DROP INDEX "IDX_230652e48daa99c50c000fc5d1"`);
		await queryRunner.query(`ALTER TABLE "report" RENAME TO "temporary_report"`);
		await queryRunner.query(
			`CREATE TABLE "report" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "categoryId" varchar NOT NULL, "name" varchar NOT NULL, "slug" varchar, "description" varchar, "image" varchar, "iconClass" varchar, "showInMenu" boolean NOT NULL DEFAULT (0), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_230652e48daa99c50c000fc5d10" FOREIGN KEY ("categoryId") REFERENCES "report_category" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "report"("id", "createdAt", "updatedAt", "categoryId", "name", "slug", "description", "image", "iconClass", "showInMenu", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "categoryId", "name", "slug", "description", "image", "iconClass", "showInMenu", "isActive", "isArchived", "deletedAt" FROM "temporary_report"`
		);
		await queryRunner.query(`DROP TABLE "temporary_report"`);
		await queryRunner.query(`CREATE INDEX "IDX_1316fdd7b9a2926437a13271bf" ON "report" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_143ead1a6ac5f73125d8c4c3aa" ON "report" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_6f9ee54eb839117e83b937648d" ON "report" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_ef16fed5f7e6951027502e6458" ON "report" ("slug") `);
		await queryRunner.query(`CREATE INDEX "IDX_230652e48daa99c50c000fc5d1" ON "report" ("categoryId") `);
		await queryRunner.query(`DROP INDEX "IDX_40459267d68604655aa6df4251"`);
		await queryRunner.query(`DROP INDEX "IDX_a6bde8f44e18f17b1ca603e150"`);
		await queryRunner.query(`DROP INDEX "IDX_edf9bd011d7f08e3e18a5becb8"`);
		await queryRunner.query(`DROP INDEX "IDX_5193788a3ebc1143bedb74cf72"`);
		await queryRunner.query(`ALTER TABLE "report_organization" RENAME TO "temporary_report_organization"`);
		await queryRunner.query(
			`CREATE TABLE "report_organization" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "reportId" varchar NOT NULL, "isEnabled" boolean NOT NULL DEFAULT (1), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a085d6f9bcfd19f8bae1dbfe135" FOREIGN KEY ("reportId") REFERENCES "report" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5193788a3ebc1143bedb74cf725" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_edf9bd011d7f08e3e18a5becb8b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "report_organization"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "reportId", "isEnabled", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "reportId", "isEnabled", "isActive", "isArchived", "deletedAt" FROM "temporary_report_organization"`
		);
		await queryRunner.query(`DROP TABLE "temporary_report_organization"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_40459267d68604655aa6df4251" ON "report_organization" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_a6bde8f44e18f17b1ca603e150" ON "report_organization" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_edf9bd011d7f08e3e18a5becb8" ON "report_organization" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_5193788a3ebc1143bedb74cf72" ON "report_organization" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_656f05f951faa13d7195853424"`);
		await queryRunner.query(`DROP INDEX "IDX_dd9fcd7916d0a22189ecea6a36"`);
		await queryRunner.query(`DROP INDEX "IDX_fa278d337ba5e200d44ade6697"`);
		await queryRunner.query(`ALTER TABLE "report_category" RENAME TO "temporary_report_category"`);
		await queryRunner.query(
			`CREATE TABLE "report_category" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "iconClass" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime)`
		);
		await queryRunner.query(
			`INSERT INTO "report_category"("id", "createdAt", "updatedAt", "name", "iconClass", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "iconClass", "isActive", "isArchived", "deletedAt" FROM "temporary_report_category"`
		);
		await queryRunner.query(`DROP TABLE "temporary_report_category"`);
		await queryRunner.query(`CREATE INDEX "IDX_656f05f951faa13d7195853424" ON "report_category" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_dd9fcd7916d0a22189ecea6a36" ON "report_category" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_fa278d337ba5e200d44ade6697" ON "report_category" ("name") `);
		await queryRunner.query(`DROP INDEX "IDX_96413a8061ff4ccdc418d4e16a"`);
		await queryRunner.query(`DROP INDEX "IDX_1d9ca23c7e1c606061fec8bb74"`);
		await queryRunner.query(`DROP INDEX "IDX_7533fd275bfb3219ce9eb4004c"`);
		await queryRunner.query(`DROP INDEX "IDX_e6abcacc3d3a4f9cf5ca97f2b2"`);
		await queryRunner.query(`DROP INDEX "IDX_d24bc28e54f1dc296452a25591"`);
		await queryRunner.query(`ALTER TABLE "product_translation" RENAME TO "temporary_product_translation"`);
		await queryRunner.query(
			`CREATE TABLE "product_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_d24bc28e54f1dc296452a255917" FOREIGN KEY ("referenceId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e6abcacc3d3a4f9cf5ca97f2b28" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7533fd275bfb3219ce9eb4004c7" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_translation"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_translation"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_96413a8061ff4ccdc418d4e16a" ON "product_translation" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_1d9ca23c7e1c606061fec8bb74" ON "product_translation" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_7533fd275bfb3219ce9eb4004c" ON "product_translation" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_e6abcacc3d3a4f9cf5ca97f2b2" ON "product_translation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d24bc28e54f1dc296452a25591" ON "product_translation" ("referenceId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_6f58935aa2175d930e47e97c9f"`);
		await queryRunner.query(`DROP INDEX "IDX_7bb2b2f7a4c8a4916d4339d7f4"`);
		await queryRunner.query(`DROP INDEX "IDX_08293ca31a601d3cd0228120bc"`);
		await queryRunner.query(`DROP INDEX "IDX_32a4bdd261ec81f4ca6b3abe26"`);
		await queryRunner.query(`DROP INDEX "IDX_4627873dbc1af07d732e6eec7b"`);
		await queryRunner.query(`DROP INDEX "IDX_374bfd0d1b0e1398d7206456d9"`);
		await queryRunner.query(`DROP INDEX "IDX_618194d24a7ea86a165d7ec628"`);
		await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
		await queryRunner.query(
			`CREATE TABLE "product" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "enabled" boolean NOT NULL DEFAULT (1), "code" varchar NOT NULL, "imageUrl" varchar, "featuredImageId" varchar, "productTypeId" varchar, "productCategoryId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_618194d24a7ea86a165d7ec628e" FOREIGN KEY ("productCategoryId") REFERENCES "product_category" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_374bfd0d1b0e1398d7206456d98" FOREIGN KEY ("productTypeId") REFERENCES "product_type" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_4627873dbc1af07d732e6eec7be" FOREIGN KEY ("featuredImageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_32a4bdd261ec81f4ca6b3abe262" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_08293ca31a601d3cd0228120bc9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "enabled", "code", "imageUrl", "featuredImageId", "productTypeId", "productCategoryId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "enabled", "code", "imageUrl", "featuredImageId", "productTypeId", "productCategoryId", "isActive", "isArchived", "deletedAt" FROM "temporary_product"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product"`);
		await queryRunner.query(`CREATE INDEX "IDX_6f58935aa2175d930e47e97c9f" ON "product" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_7bb2b2f7a4c8a4916d4339d7f4" ON "product" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_08293ca31a601d3cd0228120bc" ON "product" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_32a4bdd261ec81f4ca6b3abe26" ON "product" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4627873dbc1af07d732e6eec7b" ON "product" ("featuredImageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_374bfd0d1b0e1398d7206456d9" ON "product" ("productTypeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_618194d24a7ea86a165d7ec628" ON "product" ("productCategoryId") `);
		await queryRunner.query(`DROP INDEX "IDX_e0005cbdabb760488f66f3fbba"`);
		await queryRunner.query(`DROP INDEX "IDX_e0d896cadbc695a490f64bb7e7"`);
		await queryRunner.query(`DROP INDEX "IDX_9121e00c4dc3500dc610cf8722"`);
		await queryRunner.query(`DROP INDEX "IDX_6a289b10030ae86903406e3c9b"`);
		await queryRunner.query(`DROP INDEX "IDX_6e420052844edf3a5506d863ce"`);
		await queryRunner.query(`DROP INDEX "IDX_b83f23626741630a8629960715"`);
		await queryRunner.query(`ALTER TABLE "product_variant" RENAME TO "temporary_product_variant"`);
		await queryRunner.query(
			`CREATE TABLE "product_variant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "taxes" integer NOT NULL DEFAULT (0), "notes" varchar, "quantity" integer NOT NULL DEFAULT (0), "billingInvoicingPolicy" varchar NOT NULL DEFAULT ('Quantity ordered'), "internalReference" varchar, "enabled" boolean NOT NULL DEFAULT (1), "productId" varchar, "imageId" varchar, "priceId" varchar, "settingId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "REL_9f0fd369dfeb275415c649d110" UNIQUE ("settingId"), CONSTRAINT "REL_41b31a71dda350cfe5da07e0e4" UNIQUE ("priceId"), CONSTRAINT "FK_b83f23626741630a86299607156" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6e420052844edf3a5506d863ce6" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9f0fd369dfeb275415c649d110b" FOREIGN KEY ("settingId") REFERENCES "product_variant_setting" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_41b31a71dda350cfe5da07e0e4f" FOREIGN KEY ("priceId") REFERENCES "product_variant_price" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_6a289b10030ae86903406e3c9bd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9121e00c4dc3500dc610cf8722e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_variant"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "taxes", "notes", "quantity", "billingInvoicingPolicy", "internalReference", "enabled", "productId", "imageId", "priceId", "settingId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "taxes", "notes", "quantity", "billingInvoicingPolicy", "internalReference", "enabled", "productId", "imageId", "priceId", "settingId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_variant"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_variant"`);
		await queryRunner.query(`CREATE INDEX "IDX_e0005cbdabb760488f66f3fbba" ON "product_variant" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_e0d896cadbc695a490f64bb7e7" ON "product_variant" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_9121e00c4dc3500dc610cf8722" ON "product_variant" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_6a289b10030ae86903406e3c9b" ON "product_variant" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_6e420052844edf3a5506d863ce" ON "product_variant" ("productId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b83f23626741630a8629960715" ON "product_variant" ("imageId") `);
		await queryRunner.query(`DROP INDEX "IDX_24ac11e35221577e4ba4fdd229"`);
		await queryRunner.query(`DROP INDEX "IDX_562ef5984b6d4bed640bfcc6a2"`);
		await queryRunner.query(`DROP INDEX "IDX_7052eaf00a5795afa5ebf35995"`);
		await queryRunner.query(`DROP INDEX "IDX_0cfba32db58a952f58b1e35cf1"`);
		await queryRunner.query(`ALTER TABLE "product_variant_price" RENAME TO "temporary_product_variant_price"`);
		await queryRunner.query(
			`CREATE TABLE "product_variant_price" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "unitCost" integer NOT NULL DEFAULT (0), "unitCostCurrency" varchar NOT NULL DEFAULT ('USD'), "retailPrice" integer NOT NULL DEFAULT (0), "retailPriceCurrency" varchar NOT NULL DEFAULT ('USD'), "productVariantId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "REL_5842f603bd85d924127d63d73c" UNIQUE ("productVariantId"), CONSTRAINT "FK_5842f603bd85d924127d63d73cd" FOREIGN KEY ("productVariantId") REFERENCES "product_variant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0cfba32db58a952f58b1e35cf1c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7052eaf00a5795afa5ebf359950" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_variant_price"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "unitCost", "unitCostCurrency", "retailPrice", "retailPriceCurrency", "productVariantId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "unitCost", "unitCostCurrency", "retailPrice", "retailPriceCurrency", "productVariantId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_variant_price"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_variant_price"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_24ac11e35221577e4ba4fdd229" ON "product_variant_price" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_562ef5984b6d4bed640bfcc6a2" ON "product_variant_price" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7052eaf00a5795afa5ebf35995" ON "product_variant_price" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0cfba32db58a952f58b1e35cf1" ON "product_variant_price" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_49064ee0f3acd5882f4d893f3d"`);
		await queryRunner.query(`DROP INDEX "IDX_90cc635a1065702ed3b79da6ec"`);
		await queryRunner.query(`DROP INDEX "IDX_f206c807fc7e41fc8a8b6679ae"`);
		await queryRunner.query(`DROP INDEX "IDX_e4e4120b0c19d3a207ce38d758"`);
		await queryRunner.query(`ALTER TABLE "product_type" RENAME TO "temporary_product_type"`);
		await queryRunner.query(
			`CREATE TABLE "product_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "icon" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_e4e4120b0c19d3a207ce38d7581" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f206c807fc7e41fc8a8b6679ae0" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "icon", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "icon", "isActive", "isArchived", "deletedAt" FROM "temporary_product_type"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_type"`);
		await queryRunner.query(`CREATE INDEX "IDX_49064ee0f3acd5882f4d893f3d" ON "product_type" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_90cc635a1065702ed3b79da6ec" ON "product_type" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f206c807fc7e41fc8a8b6679ae" ON "product_type" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e4e4120b0c19d3a207ce38d758" ON "product_type" ("organizationId") `);
		await queryRunner.query(`DROP INDEX "IDX_65874d6bab7fefcaeccd2252c1"`);
		await queryRunner.query(`DROP INDEX "IDX_e9dca49bad996f1761db3b2f56"`);
		await queryRunner.query(`DROP INDEX "IDX_30aafca59cdb456bf5231f9e46"`);
		await queryRunner.query(`DROP INDEX "IDX_2dd271bdeb602b8c3956287e33"`);
		await queryRunner.query(`DROP INDEX "IDX_f4b767c43b4e9130c63382c9b2"`);
		await queryRunner.query(
			`ALTER TABLE "product_type_translation" RENAME TO "temporary_product_type_translation"`
		);
		await queryRunner.query(
			`CREATE TABLE "product_type_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_f4b767c43b4e9130c63382c9b28" FOREIGN KEY ("referenceId") REFERENCES "product_type" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2dd271bdeb602b8c3956287e33c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_30aafca59cdb456bf5231f9e463" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_type_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_type_translation"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_type_translation"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_65874d6bab7fefcaeccd2252c1" ON "product_type_translation" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e9dca49bad996f1761db3b2f56" ON "product_type_translation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_30aafca59cdb456bf5231f9e46" ON "product_type_translation" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2dd271bdeb602b8c3956287e33" ON "product_type_translation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f4b767c43b4e9130c63382c9b2" ON "product_type_translation" ("referenceId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_ae78776111e1906accfd61511d"`);
		await queryRunner.query(`DROP INDEX "IDX_ad107ba78e487cd8b13313593b"`);
		await queryRunner.query(`DROP INDEX "IDX_2efe48435d4ba480a4bb8b96fa"`);
		await queryRunner.query(`DROP INDEX "IDX_bed9d45e15866d9b8e87e7a7bf"`);
		await queryRunner.query(`ALTER TABLE "product_variant_setting" RENAME TO "temporary_product_variant_setting"`);
		await queryRunner.query(
			`CREATE TABLE "product_variant_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "isSubscription" boolean NOT NULL DEFAULT (0), "isPurchaseAutomatically" boolean NOT NULL DEFAULT (0), "canBeSold" boolean NOT NULL DEFAULT (1), "canBePurchased" boolean NOT NULL DEFAULT (1), "canBeCharged" boolean NOT NULL DEFAULT (0), "canBeRented" boolean NOT NULL DEFAULT (0), "isEquipment" boolean NOT NULL DEFAULT (0), "trackInventory" boolean NOT NULL DEFAULT (0), "productVariantId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "REL_b0d86990fe7160a5f3e4011fb2" UNIQUE ("productVariantId"), CONSTRAINT "FK_b0d86990fe7160a5f3e4011fb23" FOREIGN KEY ("productVariantId") REFERENCES "product_variant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_bed9d45e15866d9b8e87e7a7bfe" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2efe48435d4ba480a4bb8b96fa6" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_variant_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "isSubscription", "isPurchaseAutomatically", "canBeSold", "canBePurchased", "canBeCharged", "canBeRented", "isEquipment", "trackInventory", "productVariantId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "isSubscription", "isPurchaseAutomatically", "canBeSold", "canBePurchased", "canBeCharged", "canBeRented", "isEquipment", "trackInventory", "productVariantId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_variant_setting"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_variant_setting"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_ae78776111e1906accfd61511d" ON "product_variant_setting" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ad107ba78e487cd8b13313593b" ON "product_variant_setting" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2efe48435d4ba480a4bb8b96fa" ON "product_variant_setting" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_bed9d45e15866d9b8e87e7a7bf" ON "product_variant_setting" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_35d083f4ecfe72cce72ee88f58"`);
		await queryRunner.query(`DROP INDEX "IDX_d81028785f188c253e0bd49a03"`);
		await queryRunner.query(`DROP INDEX "IDX_985d235aa5394937c4493262c7"`);
		await queryRunner.query(`DROP INDEX "IDX_47ffb82a65c43f102b7e0efa41"`);
		await queryRunner.query(`DROP INDEX "IDX_a6debf9198e2fbfa006aa10d71"`);
		await queryRunner.query(`ALTER TABLE "product_option" RENAME TO "temporary_product_option"`);
		await queryRunner.query(
			`CREATE TABLE "product_option" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "code" varchar, "groupId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a6debf9198e2fbfa006aa10d710" FOREIGN KEY ("groupId") REFERENCES "product_option_group" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_47ffb82a65c43f102b7e0efa41a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_985d235aa5394937c4493262c7f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_option"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "groupId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "groupId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_option"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_option"`);
		await queryRunner.query(`CREATE INDEX "IDX_35d083f4ecfe72cce72ee88f58" ON "product_option" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_d81028785f188c253e0bd49a03" ON "product_option" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_985d235aa5394937c4493262c7" ON "product_option" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_47ffb82a65c43f102b7e0efa41" ON "product_option" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_a6debf9198e2fbfa006aa10d71" ON "product_option" ("groupId") `);
		await queryRunner.query(`DROP INDEX "IDX_2f581c3477a5c7a66de5d7f264"`);
		await queryRunner.query(`DROP INDEX "IDX_f284f666950392c55afa0806c8"`);
		await queryRunner.query(`DROP INDEX "IDX_9869d7680f48487e584f5d2fca"`);
		await queryRunner.query(`DROP INDEX "IDX_4dc2f466cfa3d0b7fef19d1273"`);
		await queryRunner.query(`DROP INDEX "IDX_f43c46e12db0580af320db7738"`);
		await queryRunner.query(
			`ALTER TABLE "product_option_translation" RENAME TO "temporary_product_option_translation"`
		);
		await queryRunner.query(
			`CREATE TABLE "product_option_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_f43c46e12db0580af320db77381" FOREIGN KEY ("referenceId") REFERENCES "product_option" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_4dc2f466cfa3d0b7fef19d12731" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9869d7680f48487e584f5d2fca7" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_option_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_option_translation"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_option_translation"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_2f581c3477a5c7a66de5d7f264" ON "product_option_translation" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f284f666950392c55afa0806c8" ON "product_option_translation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9869d7680f48487e584f5d2fca" ON "product_option_translation" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4dc2f466cfa3d0b7fef19d1273" ON "product_option_translation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f43c46e12db0580af320db7738" ON "product_option_translation" ("referenceId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e9e50109d3054fb81205c0a74e"`);
		await queryRunner.query(`DROP INDEX "IDX_75b7065234a6d32fbd03d8703f"`);
		await queryRunner.query(`DROP INDEX "IDX_fd6b39f1fd1db026b5dcc3c795"`);
		await queryRunner.query(`DROP INDEX "IDX_0e2fcc31743e20a45fc3cf0211"`);
		await queryRunner.query(`DROP INDEX "IDX_c9ce1da98b6d93293daafee63a"`);
		await queryRunner.query(
			`ALTER TABLE "product_option_group_translation" RENAME TO "temporary_product_option_group_translation"`
		);
		await queryRunner.query(
			`CREATE TABLE "product_option_group_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_c9ce1da98b6d93293daafee63aa" FOREIGN KEY ("referenceId") REFERENCES "product_option_group" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_0e2fcc31743e20a45fc3cf0211d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_fd6b39f1fd1db026b5dcc3c7953" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_option_group_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_option_group_translation"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_option_group_translation"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_e9e50109d3054fb81205c0a74e" ON "product_option_group_translation" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_75b7065234a6d32fbd03d8703f" ON "product_option_group_translation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_fd6b39f1fd1db026b5dcc3c795" ON "product_option_group_translation" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0e2fcc31743e20a45fc3cf0211" ON "product_option_group_translation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c9ce1da98b6d93293daafee63a" ON "product_option_group_translation" ("referenceId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_76bda4c33c83614617278617ae"`);
		await queryRunner.query(`DROP INDEX "IDX_0fc743f2bc16502dbc5e85420c"`);
		await queryRunner.query(`DROP INDEX "IDX_462a7fd3ce68935cf973c6709f"`);
		await queryRunner.query(`DROP INDEX "IDX_4a1430a01b71ecdfcd54b2b6c5"`);
		await queryRunner.query(`DROP INDEX "IDX_a6e91739227bf4d442f23c52c7"`);
		await queryRunner.query(`ALTER TABLE "product_option_group" RENAME TO "temporary_product_option_group"`);
		await queryRunner.query(
			`CREATE TABLE "product_option_group" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "productId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a6e91739227bf4d442f23c52c75" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_4a1430a01b71ecdfcd54b2b6c5c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_462a7fd3ce68935cf973c6709f9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_option_group"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "productId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "productId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_option_group"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_option_group"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_76bda4c33c83614617278617ae" ON "product_option_group" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0fc743f2bc16502dbc5e85420c" ON "product_option_group" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_462a7fd3ce68935cf973c6709f" ON "product_option_group" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4a1430a01b71ecdfcd54b2b6c5" ON "product_option_group" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a6e91739227bf4d442f23c52c7" ON "product_option_group" ("productId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_06cd3959f09e0b12793a763515"`);
		await queryRunner.query(`DROP INDEX "IDX_198fba43f049ea621407e7d188"`);
		await queryRunner.query(`DROP INDEX "IDX_853302351eaa4daa39920c270a"`);
		await queryRunner.query(`DROP INDEX "IDX_0a0cf25cd8232a154d1cce2641"`);
		await queryRunner.query(`DROP INDEX "IDX_f38e86bd280ff9c9c7d9cb7839"`);
		await queryRunner.query(`ALTER TABLE "product_category" RENAME TO "temporary_product_category"`);
		await queryRunner.query(
			`CREATE TABLE "product_category" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "imageUrl" varchar, "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_f38e86bd280ff9c9c7d9cb78393" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_0a0cf25cd8232a154d1cce2641c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_853302351eaa4daa39920c270a9" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "product_category"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "imageUrl", "imageId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "imageUrl", "imageId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_category"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_category"`);
		await queryRunner.query(`CREATE INDEX "IDX_06cd3959f09e0b12793a763515" ON "product_category" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_198fba43f049ea621407e7d188" ON "product_category" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_853302351eaa4daa39920c270a" ON "product_category" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_0a0cf25cd8232a154d1cce2641" ON "product_category" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f38e86bd280ff9c9c7d9cb7839" ON "product_category" ("imageId") `);
		await queryRunner.query(`DROP INDEX "IDX_d32c5d5e4451acf44fd5b212ce"`);
		await queryRunner.query(`DROP INDEX "IDX_e690dd59b69e74a6bb5d94f32b"`);
		await queryRunner.query(`DROP INDEX "IDX_27d71aa2e843f07fbf36329be3"`);
		await queryRunner.query(`DROP INDEX "IDX_e46203bf1dbf3291d174f02cb3"`);
		await queryRunner.query(`DROP INDEX "IDX_586294149d24cd835678878ef1"`);
		await queryRunner.query(
			`ALTER TABLE "product_category_translation" RENAME TO "temporary_product_category_translation"`
		);
		await queryRunner.query(
			`CREATE TABLE "product_category_translation" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "languageCode" varchar NOT NULL, "referenceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_586294149d24cd835678878ef12" FOREIGN KEY ("referenceId") REFERENCES "product_category" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e46203bf1dbf3291d174f02cb34" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_27d71aa2e843f07fbf36329be3f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "product_category_translation"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "languageCode", "referenceId", "isActive", "isArchived", "deletedAt" FROM "temporary_product_category_translation"`
		);
		await queryRunner.query(`DROP TABLE "temporary_product_category_translation"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_d32c5d5e4451acf44fd5b212ce" ON "product_category_translation" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e690dd59b69e74a6bb5d94f32b" ON "product_category_translation" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_27d71aa2e843f07fbf36329be3" ON "product_category_translation" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e46203bf1dbf3291d174f02cb3" ON "product_category_translation" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_586294149d24cd835678878ef1" ON "product_category_translation" ("referenceId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_1adf9f97094bc93e176ede2482"`);
		await queryRunner.query(`DROP INDEX "IDX_f3027eabd451ec18b93fab7ed5"`);
		await queryRunner.query(`DROP INDEX "IDX_683274c59fb08b21249096e305"`);
		await queryRunner.query(`DROP INDEX "IDX_873ade98fbd6ca71c8b4d1bbca"`);
		await queryRunner.query(`ALTER TABLE "pipeline" RENAME TO "temporary_pipeline"`);
		await queryRunner.query(
			`CREATE TABLE "pipeline" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "description" text, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_873ade98fbd6ca71c8b4d1bbcac" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_683274c59fb08b21249096e305c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "pipeline"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "name", "isActive", "isArchived", "deletedAt" FROM "temporary_pipeline"`
		);
		await queryRunner.query(`DROP TABLE "temporary_pipeline"`);
		await queryRunner.query(`CREATE INDEX "IDX_1adf9f97094bc93e176ede2482" ON "pipeline" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_f3027eabd451ec18b93fab7ed5" ON "pipeline" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_683274c59fb08b21249096e305" ON "pipeline" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_873ade98fbd6ca71c8b4d1bbca" ON "pipeline" ("organizationId") `);
		await queryRunner.query(`DROP INDEX "IDX_074caa106ee22d5d675a696a98"`);
		await queryRunner.query(`DROP INDEX "IDX_a6acee4ad726734b73f3886c14"`);
		await queryRunner.query(`DROP INDEX "IDX_28965bf63ad4c0976892d0fd5e"`);
		await queryRunner.query(`DROP INDEX "IDX_04d16bdd72668de12c3e41a85a"`);
		await queryRunner.query(`ALTER TABLE "pipeline_stage" RENAME TO "temporary_pipeline_stage"`);
		await queryRunner.query(
			`CREATE TABLE "pipeline_stage" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "description" text, "index" integer NOT NULL, "name" varchar NOT NULL, "pipelineId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_73ec3158bf224b485fd715cb3a6" FOREIGN KEY ("pipelineId") REFERENCES "pipeline" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_04d16bdd72668de12c3e41a85a6" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_28965bf63ad4c0976892d0fd5e8" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "pipeline_stage"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "index", "name", "pipelineId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "index", "name", "pipelineId", "isActive", "isArchived", "deletedAt" FROM "temporary_pipeline_stage"`
		);
		await queryRunner.query(`DROP TABLE "temporary_pipeline_stage"`);
		await queryRunner.query(`CREATE INDEX "IDX_074caa106ee22d5d675a696a98" ON "pipeline_stage" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_a6acee4ad726734b73f3886c14" ON "pipeline_stage" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_28965bf63ad4c0976892d0fd5e" ON "pipeline_stage" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_04d16bdd72668de12c3e41a85a" ON "pipeline_stage" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_8c4018eab11e92c3b09583495f"`);
		await queryRunner.query(`DROP INDEX "IDX_16a49d62227bf23686b77b5a21"`);
		await queryRunner.query(`DROP INDEX "IDX_6959c37c3acf0832103a253570"`);
		await queryRunner.query(`DROP INDEX "IDX_be7fcc9fb8cd5a74cb602ec6c9"`);
		await queryRunner.query(`DROP INDEX "IDX_62ef561a3bb084a7d12dad8a2d"`);
		await queryRunner.query(`DROP INDEX "IDX_87223c7f1d4c2ca51cf6992784"`);
		await queryRunner.query(`DROP INDEX "IDX_3f13c738eff604a85700746ec7"`);
		await queryRunner.query(`DROP INDEX "IDX_8846e403ec45e1ad8c309f91a3"`);
		await queryRunner.query(`DROP INDEX "IDX_82753b9e315af84b20eaf84d77"`);
		await queryRunner.query(`ALTER TABLE "payment" RENAME TO "temporary_payment"`);
		await queryRunner.query(
			`CREATE TABLE "payment" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "paymentDate" datetime, "amount" numeric, "note" varchar, "currency" varchar NOT NULL, "paymentMethod" varchar, "overdue" boolean, "employeeId" varchar, "invoiceId" varchar, "recordedById" varchar NOT NULL, "projectId" varchar, "organizationContactId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_82753b9e315af84b20eaf84d778" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_8846e403ec45e1ad8c309f91a37" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_3f13c738eff604a85700746ec7d" FOREIGN KEY ("recordedById") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_87223c7f1d4c2ca51cf69927844" FOREIGN KEY ("invoiceId") REFERENCES "invoice" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_62ef561a3bb084a7d12dad8a2d9" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_be7fcc9fb8cd5a74cb602ec6c9b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_6959c37c3acf0832103a2535703" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "payment"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "paymentDate", "amount", "note", "currency", "paymentMethod", "overdue", "employeeId", "invoiceId", "recordedById", "projectId", "organizationContactId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "paymentDate", "amount", "note", "currency", "paymentMethod", "overdue", "employeeId", "invoiceId", "recordedById", "projectId", "organizationContactId", "isActive", "isArchived", "deletedAt" FROM "temporary_payment"`
		);
		await queryRunner.query(`DROP TABLE "temporary_payment"`);
		await queryRunner.query(`CREATE INDEX "IDX_8c4018eab11e92c3b09583495f" ON "payment" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_16a49d62227bf23686b77b5a21" ON "payment" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_6959c37c3acf0832103a253570" ON "payment" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_be7fcc9fb8cd5a74cb602ec6c9" ON "payment" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_62ef561a3bb084a7d12dad8a2d" ON "payment" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_87223c7f1d4c2ca51cf6992784" ON "payment" ("invoiceId") `);
		await queryRunner.query(`CREATE INDEX "IDX_3f13c738eff604a85700746ec7" ON "payment" ("recordedById") `);
		await queryRunner.query(`CREATE INDEX "IDX_8846e403ec45e1ad8c309f91a3" ON "payment" ("projectId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_82753b9e315af84b20eaf84d77" ON "payment" ("organizationContactId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_36e929b98372d961bb63bd4b4e"`);
		await queryRunner.query(`DROP INDEX "IDX_1c88db6e50f0704688d1f1978c"`);
		await queryRunner.query(`DROP INDEX "IDX_380c03025a41ad032191f1ef2d"`);
		await queryRunner.query(`DROP INDEX "IDX_e71a736d52820b568f6b0ca203"`);
		await queryRunner.query(`DROP INDEX "IDX_1fa632f2d12a06ef8dcc00858f"`);
		await queryRunner.query(`ALTER TABLE "password_reset" RENAME TO "temporary_password_reset"`);
		await queryRunner.query(
			`CREATE TABLE "password_reset" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "email" varchar NOT NULL, "token" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "tenantId" varchar, CONSTRAINT "FK_1fa632f2d12a06ef8dcc00858ff" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "password_reset"("id", "createdAt", "updatedAt", "email", "token", "isActive", "isArchived", "deletedAt", "tenantId") SELECT "id", "createdAt", "updatedAt", "email", "token", "isActive", "isArchived", "deletedAt", "tenantId" FROM "temporary_password_reset"`
		);
		await queryRunner.query(`DROP TABLE "temporary_password_reset"`);
		await queryRunner.query(`CREATE INDEX "IDX_36e929b98372d961bb63bd4b4e" ON "password_reset" ("token") `);
		await queryRunner.query(`CREATE INDEX "IDX_1c88db6e50f0704688d1f1978c" ON "password_reset" ("email") `);
		await queryRunner.query(`CREATE INDEX "IDX_380c03025a41ad032191f1ef2d" ON "password_reset" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_e71a736d52820b568f6b0ca203" ON "password_reset" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_1fa632f2d12a06ef8dcc00858f" ON "password_reset" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_47b6a97e09895a06606a4a8042"`);
		await queryRunner.query(`DROP INDEX "IDX_7965db2b12872551b586f76dd7"`);
		await queryRunner.query(`DROP INDEX "IDX_2360aa7a4b5ab99e026584f305"`);
		await queryRunner.query(`DROP INDEX "IDX_15458cef74076623c270500053"`);
		await queryRunner.query(`DROP INDEX "IDX_9ea70bf5c390b00e7bb96b86ed"`);
		await queryRunner.query(`DROP INDEX "IDX_c75285bf286b17c7ca5537857b"`);
		await queryRunner.query(`DROP INDEX "IDX_f37d866c3326eca5f579cef35c"`);
		await queryRunner.query(`DROP INDEX "IDX_b03a8a28f6ebdb6df8f630216b"`);
		await queryRunner.query(`DROP INDEX "IDX_6cc2b2052744e352834a4c9e78"`);
		await queryRunner.query(`DROP INDEX "IDX_40460ab803bf6e5a62b75a35c5"`);
		await queryRunner.query(`DROP INDEX "IDX_03e5eecc2328eb545ff748cbdd"`);
		await queryRunner.query(`DROP INDEX "IDX_c21e615583a3ebbb0977452afb"`);
		await queryRunner.query(`DROP INDEX "IDX_745a293c8b2c750bc421fa0633"`);
		await queryRunner.query(`DROP INDEX "IDX_6de52b8f3de32abee3df2628a3"`);
		await queryRunner.query(`DROP INDEX "IDX_b2091c1795f1d0d919b278ab23"`);
		await queryRunner.query(`ALTER TABLE "organization" RENAME TO "temporary_organization"`);
		await queryRunner.query(
			`CREATE TABLE "organization" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "name" varchar NOT NULL, "isDefault" boolean NOT NULL DEFAULT (0), "profile_link" varchar, "banner" varchar, "totalEmployees" integer, "short_description" varchar, "client_focus" varchar, "overview" varchar, "imageUrl" varchar(500), "currency" varchar NOT NULL, "valueDate" datetime, "defaultValueDateType" varchar CHECK( "defaultValueDateType" IN ('TODAY','END_OF_MONTH','START_OF_MONTH') ) DEFAULT ('TODAY'), "isActive" boolean DEFAULT (1), "defaultAlignmentType" varchar, "timeZone" varchar, "regionCode" varchar, "brandColor" varchar, "dateFormat" varchar, "officialName" varchar, "startWeekOn" varchar, "taxId" varchar, "numberFormat" varchar, "minimumProjectSize" varchar, "bonusType" varchar, "bonusPercentage" integer, "invitesAllowed" boolean DEFAULT (1), "show_income" boolean, "show_profits" boolean, "show_bonuses_paid" boolean, "show_total_hours" boolean, "show_minimum_project_size" boolean, "show_projects_count" boolean, "show_clients_count" boolean, "show_clients" boolean, "show_employees_count" boolean, "inviteExpiryPeriod" integer, "fiscalStartDate" datetime, "fiscalEndDate" datetime, "registrationDate" datetime, "futureDateAllowed" boolean, "allowManualTime" boolean NOT NULL DEFAULT (1), "allowModifyTime" boolean NOT NULL DEFAULT (1), "allowDeleteTime" boolean NOT NULL DEFAULT (1), "requireReason" boolean NOT NULL DEFAULT (0), "requireDescription" boolean NOT NULL DEFAULT (0), "requireProject" boolean NOT NULL DEFAULT (0), "requireTask" boolean NOT NULL DEFAULT (0), "requireClient" boolean NOT NULL DEFAULT (0), "timeFormat" integer NOT NULL DEFAULT (12), "separateInvoiceItemTaxAndDiscount" boolean, "website" varchar, "fiscalInformation" varchar, "currencyPosition" varchar NOT NULL DEFAULT ('LEFT'), "discountAfterTax" boolean, "defaultStartTime" varchar, "defaultEndTime" varchar, "defaultInvoiceEstimateTerms" varchar, "convertAcceptedEstimates" boolean, "daysUntilDue" integer, "contactId" varchar, "allowTrackInactivity" boolean NOT NULL DEFAULT (1), "inactivityTimeLimit" integer NOT NULL DEFAULT (10), "activityProofDuration" integer NOT NULL DEFAULT (1), "isRemoveIdleTime" boolean NOT NULL DEFAULT (0), "allowScreenshotCapture" boolean NOT NULL DEFAULT (1), "imageId" varchar, "upworkOrganizationId" varchar, "upworkOrganizationName" varchar, "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "randomScreenshot" boolean DEFAULT (0), "trackOnSleep" boolean DEFAULT (0), "screenshotFrequency" numeric NOT NULL DEFAULT (10), "enforced" boolean DEFAULT (0), CONSTRAINT "FK_745a293c8b2c750bc421fa06332" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7965db2b12872551b586f76dd79" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_47b6a97e09895a06606a4a80421" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization"("id", "createdAt", "updatedAt", "tenantId", "name", "isDefault", "profile_link", "banner", "totalEmployees", "short_description", "client_focus", "overview", "imageUrl", "currency", "valueDate", "defaultValueDateType", "isActive", "defaultAlignmentType", "timeZone", "regionCode", "brandColor", "dateFormat", "officialName", "startWeekOn", "taxId", "numberFormat", "minimumProjectSize", "bonusType", "bonusPercentage", "invitesAllowed", "show_income", "show_profits", "show_bonuses_paid", "show_total_hours", "show_minimum_project_size", "show_projects_count", "show_clients_count", "show_clients", "show_employees_count", "inviteExpiryPeriod", "fiscalStartDate", "fiscalEndDate", "registrationDate", "futureDateAllowed", "allowManualTime", "allowModifyTime", "allowDeleteTime", "requireReason", "requireDescription", "requireProject", "requireTask", "requireClient", "timeFormat", "separateInvoiceItemTaxAndDiscount", "website", "fiscalInformation", "currencyPosition", "discountAfterTax", "defaultStartTime", "defaultEndTime", "defaultInvoiceEstimateTerms", "convertAcceptedEstimates", "daysUntilDue", "contactId", "allowTrackInactivity", "inactivityTimeLimit", "activityProofDuration", "isRemoveIdleTime", "allowScreenshotCapture", "imageId", "upworkOrganizationId", "upworkOrganizationName", "isArchived", "deletedAt", "randomScreenshot", "trackOnSleep", "screenshotFrequency", "enforced") SELECT "id", "createdAt", "updatedAt", "tenantId", "name", "isDefault", "profile_link", "banner", "totalEmployees", "short_description", "client_focus", "overview", "imageUrl", "currency", "valueDate", "defaultValueDateType", "isActive", "defaultAlignmentType", "timeZone", "regionCode", "brandColor", "dateFormat", "officialName", "startWeekOn", "taxId", "numberFormat", "minimumProjectSize", "bonusType", "bonusPercentage", "invitesAllowed", "show_income", "show_profits", "show_bonuses_paid", "show_total_hours", "show_minimum_project_size", "show_projects_count", "show_clients_count", "show_clients", "show_employees_count", "inviteExpiryPeriod", "fiscalStartDate", "fiscalEndDate", "registrationDate", "futureDateAllowed", "allowManualTime", "allowModifyTime", "allowDeleteTime", "requireReason", "requireDescription", "requireProject", "requireTask", "requireClient", "timeFormat", "separateInvoiceItemTaxAndDiscount", "website", "fiscalInformation", "currencyPosition", "discountAfterTax", "defaultStartTime", "defaultEndTime", "defaultInvoiceEstimateTerms", "convertAcceptedEstimates", "daysUntilDue", "contactId", "allowTrackInactivity", "inactivityTimeLimit", "activityProofDuration", "isRemoveIdleTime", "allowScreenshotCapture", "imageId", "upworkOrganizationId", "upworkOrganizationName", "isArchived", "deletedAt", "randomScreenshot", "trackOnSleep", "screenshotFrequency", "enforced" FROM "temporary_organization"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization"`);
		await queryRunner.query(`CREATE INDEX "IDX_47b6a97e09895a06606a4a8042" ON "organization" ("imageId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7965db2b12872551b586f76dd7" ON "organization" ("contactId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_2360aa7a4b5ab99e026584f305" ON "organization" ("defaultValueDateType") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_15458cef74076623c270500053" ON "organization" ("currency") `);
		await queryRunner.query(`CREATE INDEX "IDX_9ea70bf5c390b00e7bb96b86ed" ON "organization" ("overview") `);
		await queryRunner.query(`CREATE INDEX "IDX_c75285bf286b17c7ca5537857b" ON "organization" ("client_focus") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_f37d866c3326eca5f579cef35c" ON "organization" ("short_description") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_b03a8a28f6ebdb6df8f630216b" ON "organization" ("totalEmployees") `);
		await queryRunner.query(`CREATE INDEX "IDX_6cc2b2052744e352834a4c9e78" ON "organization" ("banner") `);
		await queryRunner.query(`CREATE INDEX "IDX_40460ab803bf6e5a62b75a35c5" ON "organization" ("profile_link") `);
		await queryRunner.query(`CREATE INDEX "IDX_03e5eecc2328eb545ff748cbdd" ON "organization" ("isDefault") `);
		await queryRunner.query(`CREATE INDEX "IDX_c21e615583a3ebbb0977452afb" ON "organization" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_745a293c8b2c750bc421fa0633" ON "organization" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_6de52b8f3de32abee3df2628a3" ON "organization" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_b2091c1795f1d0d919b278ab23" ON "organization" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_266972cd6ff9656eec8818e12d"`);
		await queryRunner.query(`DROP INDEX "IDX_04c6320f910056ecb11b147ac8"`);
		await queryRunner.query(`DROP INDEX "IDX_7e0bf6063e1728c9813d5da7ca"`);
		await queryRunner.query(`DROP INDEX "IDX_56dd132aa3743cfa9b034d020e"`);
		await queryRunner.query(`DROP INDEX "IDX_e56e80136b07ecd52545368611"`);
		await queryRunner.query(`ALTER TABLE "organization_vendor" RENAME TO "temporary_organization_vendor"`);
		await queryRunner.query(
			`CREATE TABLE "organization_vendor" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "email" varchar, "phone" varchar, "website" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_56dd132aa3743cfa9b034d020eb" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7e0bf6063e1728c9813d5da7caa" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_vendor"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "email", "phone", "website", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "email", "phone", "website", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_vendor"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_vendor"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_266972cd6ff9656eec8818e12d" ON "organization_vendor" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_04c6320f910056ecb11b147ac8" ON "organization_vendor" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_7e0bf6063e1728c9813d5da7ca" ON "organization_vendor" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_56dd132aa3743cfa9b034d020e" ON "organization_vendor" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_e56e80136b07ecd52545368611" ON "organization_vendor" ("name") `);
		await queryRunner.query(`DROP INDEX "IDX_38f1d96e8c2d59e4f0f84209ab"`);
		await queryRunner.query(`DROP INDEX "IDX_722d648e0b83267d4a66332ccb"`);
		await queryRunner.query(`DROP INDEX "IDX_51e91be110fa0b8e70066f5727"`);
		await queryRunner.query(`DROP INDEX "IDX_da625f694eb1e23e585f301008"`);
		await queryRunner.query(`DROP INDEX "IDX_103ae3eb65f4b091efc55cb532"`);
		await queryRunner.query(`DROP INDEX "IDX_eef1c19a0cb5321223cfe3286c"`);
		await queryRunner.query(`DROP INDEX "IDX_176f5ed3c4534f3110d423d569"`);
		await queryRunner.query(`DROP INDEX "IDX_e22ab0f1236b1a07785b641727"`);
		await queryRunner.query(`ALTER TABLE "organization_team" RENAME TO "temporary_organization_team"`);
		await queryRunner.query(
			`CREATE TABLE "organization_team" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "prefix" varchar, "createdById" varchar, "public" boolean DEFAULT (0), "profile_link" varchar, "logo" varchar, "imageId" varchar, "color" varchar, "emoji" varchar, "teamSize" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, "shareProfileView" boolean DEFAULT (1), "requirePlanToTrack" boolean NOT NULL DEFAULT (0), CONSTRAINT "FK_176f5ed3c4534f3110d423d5690" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_eef1c19a0cb5321223cfe3286c4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_da625f694eb1e23e585f3010082" FOREIGN KEY ("createdById") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_51e91be110fa0b8e70066f5727f" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_team"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "prefix", "createdById", "public", "profile_link", "logo", "imageId", "color", "emoji", "teamSize", "isActive", "isArchived", "deletedAt", "shareProfileView", "requirePlanToTrack") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "prefix", "createdById", "public", "profile_link", "logo", "imageId", "color", "emoji", "teamSize", "isActive", "isArchived", "deletedAt", "shareProfileView", "requirePlanToTrack" FROM "temporary_organization_team"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_team"`);
		await queryRunner.query(`CREATE INDEX "IDX_38f1d96e8c2d59e4f0f84209ab" ON "organization_team" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_722d648e0b83267d4a66332ccb" ON "organization_team" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_51e91be110fa0b8e70066f5727" ON "organization_team" ("imageId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_da625f694eb1e23e585f301008" ON "organization_team" ("createdById") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_103ae3eb65f4b091efc55cb532" ON "organization_team" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_eef1c19a0cb5321223cfe3286c" ON "organization_team" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_176f5ed3c4534f3110d423d569" ON "organization_team" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_e22ab0f1236b1a07785b641727" ON "organization_team" ("profile_link") `
		);
		await queryRunner.query(`DROP INDEX "IDX_b027ee2cb18245356b8d963d2f"`);
		await queryRunner.query(`DROP INDEX "IDX_29ece7e3bb764028387cdbc888"`);
		await queryRunner.query(`DROP INDEX "IDX_171b852be7c1f387eca93775aa"`);
		await queryRunner.query(`DROP INDEX "IDX_5e73656ce0355347477c42ae19"`);
		await queryRunner.query(`DROP INDEX "IDX_c15823bf3f63b1fe331d9de662"`);
		await queryRunner.query(`DROP INDEX "IDX_d9529008c733cb90044b8c2ad6"`);
		await queryRunner.query(
			`ALTER TABLE "organization_team_join_request" RENAME TO "temporary_organization_team_join_request"`
		);
		await queryRunner.query(
			`CREATE TABLE "organization_team_join_request" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "email" varchar NOT NULL, "fullName" varchar, "linkAddress" varchar, "position" varchar, "status" varchar, "code" varchar, "token" varchar, "expiredAt" datetime, "userId" varchar, "organizationTeamId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_171b852be7c1f387eca93775aad" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5e73656ce0355347477c42ae19b" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c15823bf3f63b1fe331d9de6625" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_d9529008c733cb90044b8c2ad6b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_team_join_request"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "email", "fullName", "linkAddress", "position", "status", "code", "token", "expiredAt", "userId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "email", "fullName", "linkAddress", "position", "status", "code", "token", "expiredAt", "userId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_team_join_request"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_team_join_request"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_b027ee2cb18245356b8d963d2f" ON "organization_team_join_request" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_29ece7e3bb764028387cdbc888" ON "organization_team_join_request" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_171b852be7c1f387eca93775aa" ON "organization_team_join_request" ("organizationTeamId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5e73656ce0355347477c42ae19" ON "organization_team_join_request" ("userId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c15823bf3f63b1fe331d9de662" ON "organization_team_join_request" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d9529008c733cb90044b8c2ad6" ON "organization_team_join_request" ("tenantId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_719aeb37fa7a1dd80d25336a0c"`);
		await queryRunner.query(`DROP INDEX "IDX_ce83034f38496f5fe3f1979697"`);
		await queryRunner.query(`DROP INDEX "IDX_a2a5601d799fbfc29c17b99243"`);
		await queryRunner.query(`DROP INDEX "IDX_8dc83cdd7c519d73afc0d8bdf0"`);
		await queryRunner.query(`DROP INDEX "IDX_d8eba1c0e500c60be1b69c1e77"`);
		await queryRunner.query(`DROP INDEX "IDX_fe12e1b76bbb76209134d9bdc2"`);
		await queryRunner.query(`DROP INDEX "IDX_70fcc451944fbde73d223c2af3"`);
		await queryRunner.query(`DROP INDEX "IDX_752d7a0fe6597ee6bbc6502a12"`);
		await queryRunner.query(
			`ALTER TABLE "organization_team_employee" RENAME TO "temporary_organization_team_employee"`
		);
		await queryRunner.query(
			`CREATE TABLE "organization_team_employee" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "organizationTeamId" varchar NOT NULL, "employeeId" varchar NOT NULL, "roleId" varchar, "isTrackingEnabled" boolean DEFAULT (1), "activeTaskId" varchar, "deletedAt" datetime, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "order" integer, CONSTRAINT "FK_fe12e1b76bbb76209134d9bdc2e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d8eba1c0e500c60be1b69c1e777" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8dc83cdd7c519d73afc0d8bdf09" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a2a5601d799fbfc29c17b99243f" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ce83034f38496f5fe3f19796977" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_719aeb37fa7a1dd80d25336a0cf" FOREIGN KEY ("activeTaskId") REFERENCES "task" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_team_employee"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "organizationTeamId", "employeeId", "roleId", "isTrackingEnabled", "activeTaskId", "deletedAt", "isActive", "isArchived", "order") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "organizationTeamId", "employeeId", "roleId", "isTrackingEnabled", "activeTaskId", "deletedAt", "isActive", "isArchived", "order" FROM "temporary_organization_team_employee"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_team_employee"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_719aeb37fa7a1dd80d25336a0c" ON "organization_team_employee" ("activeTaskId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ce83034f38496f5fe3f1979697" ON "organization_team_employee" ("roleId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a2a5601d799fbfc29c17b99243" ON "organization_team_employee" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8dc83cdd7c519d73afc0d8bdf0" ON "organization_team_employee" ("organizationTeamId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d8eba1c0e500c60be1b69c1e77" ON "organization_team_employee" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_fe12e1b76bbb76209134d9bdc2" ON "organization_team_employee" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_70fcc451944fbde73d223c2af3" ON "organization_team_employee" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_752d7a0fe6597ee6bbc6502a12" ON "organization_team_employee" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_b7be7e61daf2b5af3232c9c4d6"`);
		await queryRunner.query(`DROP INDEX "IDX_f0e2385b2d5f176f9ed3b6a9e3"`);
		await queryRunner.query(`DROP INDEX "IDX_582768159ef0c749e8552ea9bc"`);
		await queryRunner.query(`DROP INDEX "IDX_5830901876e426adfc15fb7341"`);
		await queryRunner.query(`DROP INDEX "IDX_19ab7adf33199bc6f913db277d"`);
		await queryRunner.query(`DROP INDEX "IDX_20a290f166c0810eafbf271717"`);
		await queryRunner.query(
			`ALTER TABLE "organization_task_setting" RENAME TO "temporary_organization_task_setting"`
		);
		await queryRunner.query(
			`CREATE TABLE "organization_task_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "isTasksPrivacyEnabled" boolean NOT NULL DEFAULT (1), "isTasksMultipleAssigneesEnabled" boolean NOT NULL DEFAULT (1), "isTasksManualTimeEnabled" boolean NOT NULL DEFAULT (1), "isTasksGroupEstimationEnabled" boolean NOT NULL DEFAULT (1), "isTasksEstimationInHoursEnabled" boolean NOT NULL DEFAULT (1), "isTasksEstimationInStoryPointsEnabled" boolean NOT NULL DEFAULT (1), "isTasksProofOfCompletionEnabled" boolean NOT NULL DEFAULT (1), "tasksProofOfCompletionType" varchar NOT NULL DEFAULT ('PRIVATE'), "isTasksLinkedEnabled" boolean NOT NULL DEFAULT (1), "isTasksCommentsEnabled" boolean NOT NULL DEFAULT (1), "isTasksHistoryEnabled" boolean NOT NULL DEFAULT (1), "isTasksAcceptanceCriteriaEnabled" boolean NOT NULL DEFAULT (1), "isTasksDraftsEnabled" boolean NOT NULL DEFAULT (1), "isTasksNotifyLeftEnabled" boolean NOT NULL DEFAULT (1), "tasksNotifyLeftPeriodDays" integer NOT NULL DEFAULT (7), "isTasksAutoCloseEnabled" boolean NOT NULL DEFAULT (1), "tasksAutoClosePeriodDays" integer NOT NULL DEFAULT (7), "isTasksAutoArchiveEnabled" boolean NOT NULL DEFAULT (1), "tasksAutoArchivePeriodDays" integer NOT NULL DEFAULT (7), "isTasksAutoStatusEnabled" boolean NOT NULL DEFAULT (1), "projectId" varchar, "organizationTeamId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_20a290f166c0810eafbf2717171" FOREIGN KEY ("organizationTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_19ab7adf33199bc6f913db277d7" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5830901876e426adfc15fb7341b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_582768159ef0c749e8552ea9bcd" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_task_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "isTasksPrivacyEnabled", "isTasksMultipleAssigneesEnabled", "isTasksManualTimeEnabled", "isTasksGroupEstimationEnabled", "isTasksEstimationInHoursEnabled", "isTasksEstimationInStoryPointsEnabled", "isTasksProofOfCompletionEnabled", "tasksProofOfCompletionType", "isTasksLinkedEnabled", "isTasksCommentsEnabled", "isTasksHistoryEnabled", "isTasksAcceptanceCriteriaEnabled", "isTasksDraftsEnabled", "isTasksNotifyLeftEnabled", "tasksNotifyLeftPeriodDays", "isTasksAutoCloseEnabled", "tasksAutoClosePeriodDays", "isTasksAutoArchiveEnabled", "tasksAutoArchivePeriodDays", "isTasksAutoStatusEnabled", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "isTasksPrivacyEnabled", "isTasksMultipleAssigneesEnabled", "isTasksManualTimeEnabled", "isTasksGroupEstimationEnabled", "isTasksEstimationInHoursEnabled", "isTasksEstimationInStoryPointsEnabled", "isTasksProofOfCompletionEnabled", "tasksProofOfCompletionType", "isTasksLinkedEnabled", "isTasksCommentsEnabled", "isTasksHistoryEnabled", "isTasksAcceptanceCriteriaEnabled", "isTasksDraftsEnabled", "isTasksNotifyLeftEnabled", "tasksNotifyLeftPeriodDays", "isTasksAutoCloseEnabled", "tasksAutoClosePeriodDays", "isTasksAutoArchiveEnabled", "tasksAutoArchivePeriodDays", "isTasksAutoStatusEnabled", "projectId", "organizationTeamId", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_task_setting"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_task_setting"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_b7be7e61daf2b5af3232c9c4d6" ON "organization_task_setting" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f0e2385b2d5f176f9ed3b6a9e3" ON "organization_task_setting" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_582768159ef0c749e8552ea9bc" ON "organization_task_setting" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5830901876e426adfc15fb7341" ON "organization_task_setting" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_19ab7adf33199bc6f913db277d" ON "organization_task_setting" ("projectId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_20a290f166c0810eafbf271717" ON "organization_task_setting" ("organizationTeamId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_76e53f9609ca05477d50980743"`);
		await queryRunner.query(`DROP INDEX "IDX_5596b4fa7fb2ceb0955580becd"`);
		await queryRunner.query(`DROP INDEX "IDX_f57ad03c4e471bd8530494ea63"`);
		await queryRunner.query(`DROP INDEX "IDX_8a1fe8afb3aa672bae5993fbe7"`);
		await queryRunner.query(`ALTER TABLE "organization_sprint" RENAME TO "temporary_organization_sprint"`);
		await queryRunner.query(
			`CREATE TABLE "organization_sprint" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "projectId" varchar NOT NULL, "goal" varchar, "length" integer NOT NULL DEFAULT (7), "startDate" datetime, "endDate" datetime, "dayStart" integer, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a140b7e30ff3455551a0fd599fb" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8a1fe8afb3aa672bae5993fbe7d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f57ad03c4e471bd8530494ea63d" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_sprint"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "projectId", "goal", "length", "startDate", "endDate", "dayStart", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "projectId", "goal", "length", "startDate", "endDate", "dayStart", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_sprint"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_sprint"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_76e53f9609ca05477d50980743" ON "organization_sprint" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_5596b4fa7fb2ceb0955580becd" ON "organization_sprint" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f57ad03c4e471bd8530494ea63" ON "organization_sprint" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_8a1fe8afb3aa672bae5993fbe7" ON "organization_sprint" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_f3ef2000abb9762b138cc5a1b3"`);
		await queryRunner.query(`DROP INDEX "IDX_9ad08dbc039d08279dae2dd94e"`);
		await queryRunner.query(`DROP INDEX "IDX_0b19a287858af40661bd3eb741"`);
		await queryRunner.query(`DROP INDEX "IDX_8a12e7a0d47d3c6a6b35f7984e"`);
		await queryRunner.query(`DROP INDEX "IDX_f1e5497ee6be7ba3f2ee90bf4b"`);
		await queryRunner.query(`DROP INDEX "IDX_61387780d015923453f4b015b4"`);
		await queryRunner.query(`DROP INDEX "IDX_637ac2c467df4bc3b71795a866"`);
		await queryRunner.query(
			`ALTER TABLE "organization_recurring_expense" RENAME TO "temporary_organization_recurring_expense"`
		);
		await queryRunner.query(
			`CREATE TABLE "organization_recurring_expense" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "startDay" integer NOT NULL, "startMonth" integer NOT NULL, "startYear" integer NOT NULL, "startDate" datetime NOT NULL, "endDay" integer, "endMonth" integer, "endYear" integer, "endDate" datetime, "categoryName" varchar NOT NULL, "value" numeric NOT NULL, "currency" varchar NOT NULL, "splitExpense" boolean, "parentRecurringExpenseId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_8a12e7a0d47d3c6a6b35f7984e3" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_0b19a287858af40661bd3eb7411" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_recurring_expense"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "startDay", "startMonth", "startYear", "startDate", "endDay", "endMonth", "endYear", "endDate", "categoryName", "value", "currency", "splitExpense", "parentRecurringExpenseId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "startDay", "startMonth", "startYear", "startDate", "endDay", "endMonth", "endYear", "endDate", "categoryName", "value", "currency", "splitExpense", "parentRecurringExpenseId", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_recurring_expense"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_recurring_expense"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_f3ef2000abb9762b138cc5a1b3" ON "organization_recurring_expense" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9ad08dbc039d08279dae2dd94e" ON "organization_recurring_expense" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0b19a287858af40661bd3eb741" ON "organization_recurring_expense" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8a12e7a0d47d3c6a6b35f7984e" ON "organization_recurring_expense" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f1e5497ee6be7ba3f2ee90bf4b" ON "organization_recurring_expense" ("categoryName") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_61387780d015923453f4b015b4" ON "organization_recurring_expense" ("currency") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_637ac2c467df4bc3b71795a866" ON "organization_recurring_expense" ("parentRecurringExpenseId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_f33638d289aff2306328c32a8c"`);
		await queryRunner.query(`DROP INDEX "IDX_a56086e95fb2627ba2a3dd2eaa"`);
		await queryRunner.query(`DROP INDEX "IDX_8a7a4d4206c003c3827c5afe5d"`);
		await queryRunner.query(`DROP INDEX "IDX_cd928adcb5ebb00c9f2c57e390"`);
		await queryRunner.query(`DROP INDEX "IDX_86438fbaa1d857f32f66b24885"`);
		await queryRunner.query(`DROP INDEX "IDX_7fd3c8f54c01943b283080aefa"`);
		await queryRunner.query(`DROP INDEX "IDX_8f2054a6a2d4b9c17624b9c8a0"`);
		await queryRunner.query(`DROP INDEX "IDX_e6b6555e5fc6c5120110a0195c"`);
		await queryRunner.query(
			`ALTER TABLE "organization_project_module" RENAME TO "temporary_organization_project_module"`
		);
		await queryRunner.query(
			`CREATE TABLE "organization_project_module" ("deletedAt" datetime, "id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" text, "status" varchar, "startDate" datetime, "endDate" datetime, "public" boolean DEFAULT (0), "isFavorite" boolean DEFAULT (0), "parentId" varchar, "projectId" varchar, "creatorId" varchar, "managerId" varchar, CONSTRAINT "FK_e6b6555e5fc6c5120110a0195cd" FOREIGN KEY ("managerId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8f2054a6a2d4b9c17624b9c8a01" FOREIGN KEY ("creatorId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7fd3c8f54c01943b283080aefa3" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4bb6fbfa64cf5d5977c2e5346a9" FOREIGN KEY ("parentId") REFERENCES "organization_project_module" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_cd928adcb5ebb00c9f2c57e3908" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8a7a4d4206c003c3827c5afe5dc" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_project_module"("deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "name", "description", "status", "startDate", "endDate", "public", "isFavorite", "parentId", "projectId", "creatorId", "managerId") SELECT "deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "organizationId", "name", "description", "status", "startDate", "endDate", "public", "isFavorite", "parentId", "projectId", "creatorId", "managerId" FROM "temporary_organization_project_module"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_project_module"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_f33638d289aff2306328c32a8c" ON "organization_project_module" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a56086e95fb2627ba2a3dd2eaa" ON "organization_project_module" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8a7a4d4206c003c3827c5afe5d" ON "organization_project_module" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_cd928adcb5ebb00c9f2c57e390" ON "organization_project_module" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_86438fbaa1d857f32f66b24885" ON "organization_project_module" ("status") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7fd3c8f54c01943b283080aefa" ON "organization_project_module" ("projectId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8f2054a6a2d4b9c17624b9c8a0" ON "organization_project_module" ("creatorId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e6b6555e5fc6c5120110a0195c" ON "organization_project_module" ("managerId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_3e128d30e9910ff920eee4ef37"`);
		await queryRunner.query(`DROP INDEX "IDX_c5c4366237dc2bb176c1503426"`);
		await queryRunner.query(`DROP INDEX "IDX_75855b44250686f84b7c4bc1f1"`);
		await queryRunner.query(`DROP INDEX "IDX_063324fdceb51f7086e401ed2c"`);
		await queryRunner.query(`DROP INDEX "IDX_7cf84e8b5775f349f81a1f3cc4"`);
		await queryRunner.query(`DROP INDEX "IDX_9d8afc1e1e64d4b7d48dd2229d"`);
		await queryRunner.query(`DROP INDEX "IDX_37215da8dee9503d759adb3538"`);
		await queryRunner.query(`DROP INDEX "IDX_c210effeb6314d325bc024d21e"`);
		await queryRunner.query(`DROP INDEX "IDX_bc1e32c13683dbb16ada1c6da1"`);
		await queryRunner.query(`DROP INDEX "IDX_18e22d4b569159bb91dec869aa"`);
		await queryRunner.query(`DROP INDEX "IDX_3590135ac2034d7aa88efa7e52"`);
		await queryRunner.query(`DROP INDEX "IDX_904ae0b765faef6ba2db8b1e69"`);
		await queryRunner.query(`ALTER TABLE "organization_project" RENAME TO "temporary_organization_project"`);
		await queryRunner.query(
			`CREATE TABLE "organization_project" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "startDate" datetime, "endDate" datetime, "billing" varchar, "currency" varchar, "public" boolean, "owner" varchar, "taskListType" varchar NOT NULL DEFAULT ('GRID'), "code" varchar, "description" varchar, "color" varchar, "billable" boolean, "billingFlat" boolean, "openSource" boolean, "projectUrl" varchar, "openSourceProjectUrl" varchar, "budget" integer, "budgetType" text DEFAULT ('cost'), "organizationContactId" varchar, "membersCount" integer DEFAULT (0), "imageUrl" varchar(500), "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "repositoryId" varchar, "isTasksAutoSync" boolean DEFAULT (1), "isTasksAutoSyncOnLabel" boolean DEFAULT (1), "syncTag" varchar, "deletedAt" datetime, "fix_relational_custom_fields" boolean, CONSTRAINT "FK_904ae0b765faef6ba2db8b1e698" FOREIGN KEY ("repositoryId") REFERENCES "organization_github_repository" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_bc1e32c13683dbb16ada1c6da14" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE, CONSTRAINT "FK_9d8afc1e1e64d4b7d48dd2229d7" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7cf84e8b5775f349f81a1f3cc44" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_063324fdceb51f7086e401ed2c9" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_project"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "startDate", "endDate", "billing", "currency", "public", "owner", "taskListType", "code", "description", "color", "billable", "billingFlat", "openSource", "projectUrl", "openSourceProjectUrl", "budget", "budgetType", "organizationContactId", "membersCount", "imageUrl", "imageId", "isActive", "isArchived", "repositoryId", "isTasksAutoSync", "isTasksAutoSyncOnLabel", "syncTag", "deletedAt", "fix_relational_custom_fields") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "startDate", "endDate", "billing", "currency", "public", "owner", "taskListType", "code", "description", "color", "billable", "billingFlat", "openSource", "projectUrl", "openSourceProjectUrl", "budget", "budgetType", "organizationContactId", "membersCount", "imageUrl", "imageId", "isActive", "isArchived", "repositoryId", "isTasksAutoSync", "isTasksAutoSyncOnLabel", "syncTag", "deletedAt", "fix_relational_custom_fields" FROM "temporary_organization_project"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_project"`);
		await queryRunner.query(`CREATE INDEX "IDX_3e128d30e9910ff920eee4ef37" ON "organization_project" ("syncTag") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c5c4366237dc2bb176c1503426" ON "organization_project" ("isTasksAutoSyncOnLabel") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_75855b44250686f84b7c4bc1f1" ON "organization_project" ("isTasksAutoSync") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_063324fdceb51f7086e401ed2c" ON "organization_project" ("imageId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_7cf84e8b5775f349f81a1f3cc4" ON "organization_project" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9d8afc1e1e64d4b7d48dd2229d" ON "organization_project" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_37215da8dee9503d759adb3538" ON "organization_project" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c210effeb6314d325bc024d21e" ON "organization_project" ("currency") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_bc1e32c13683dbb16ada1c6da1" ON "organization_project" ("organizationContactId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_18e22d4b569159bb91dec869aa" ON "organization_project" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3590135ac2034d7aa88efa7e52" ON "organization_project" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_904ae0b765faef6ba2db8b1e69" ON "organization_project" ("repositoryId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_ce8721ddf715f0efa4bd3d2c5f"`);
		await queryRunner.query(`DROP INDEX "IDX_7317abf7a05a169783b6aa7932"`);
		await queryRunner.query(`DROP INDEX "IDX_a8f497b1006ec967964abb0d49"`);
		await queryRunner.query(`DROP INDEX "IDX_a0409e39f23ff6d418f2c03df5"`);
		await queryRunner.query(`DROP INDEX "IDX_3f02c20145af9997253531349c"`);
		await queryRunner.query(`ALTER TABLE "organization_position" RENAME TO "temporary_organization_position"`);
		await queryRunner.query(
			`CREATE TABLE "organization_position" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a0409e39f23ff6d418f2c03df58" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a8f497b1006ec967964abb0d497" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_position"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_position"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_position"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_ce8721ddf715f0efa4bd3d2c5f" ON "organization_position" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7317abf7a05a169783b6aa7932" ON "organization_position" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a8f497b1006ec967964abb0d49" ON "organization_position" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a0409e39f23ff6d418f2c03df5" ON "organization_position" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_3f02c20145af9997253531349c" ON "organization_position" ("name") `);
		await queryRunner.query(`DROP INDEX "IDX_6577ec9ca4cef331a507264d44"`);
		await queryRunner.query(`DROP INDEX "IDX_b79e8d45a3ef5503579643f5de"`);
		await queryRunner.query(`DROP INDEX "IDX_225e476592214e32e117a85213"`);
		await queryRunner.query(`DROP INDEX "IDX_4513931e2d530f78d7144c8c7c"`);
		await queryRunner.query(`DROP INDEX "IDX_020516e74a57cb85d75381e841"`);
		await queryRunner.query(`ALTER TABLE "organization_language" RENAME TO "temporary_organization_language"`);
		await queryRunner.query(
			`CREATE TABLE "organization_language" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "languageCode" varchar NOT NULL, "name" varchar NOT NULL, "level" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_020516e74a57cb85d75381e841a" FOREIGN KEY ("languageCode") REFERENCES "language" ("code") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4513931e2d530f78d7144c8c7cd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_225e476592214e32e117a85213c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_language"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "languageCode", "name", "level", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "languageCode", "name", "level", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_language"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_language"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_6577ec9ca4cef331a507264d44" ON "organization_language" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b79e8d45a3ef5503579643f5de" ON "organization_language" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_225e476592214e32e117a85213" ON "organization_language" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4513931e2d530f78d7144c8c7c" ON "organization_language" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_020516e74a57cb85d75381e841" ON "organization_language" ("languageCode") `
		);
		await queryRunner.query(`DROP INDEX "IDX_cc096d49e2399e89cdf32297da"`);
		await queryRunner.query(`DROP INDEX "IDX_880f3cce5e03f42bec3da6e6dc"`);
		await queryRunner.query(`DROP INDEX "IDX_227b5bd9867287cbbeece8f6ba"`);
		await queryRunner.query(`DROP INDEX "IDX_a583cfe32f492f5ba99b7bb205"`);
		await queryRunner.query(
			`ALTER TABLE "organization_employment_type" RENAME TO "temporary_organization_employment_type"`
		);
		await queryRunner.query(
			`CREATE TABLE "organization_employment_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a583cfe32f492f5ba99b7bb2050" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_227b5bd9867287cbbeece8f6ba9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_employment_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_employment_type"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_employment_type"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_cc096d49e2399e89cdf32297da" ON "organization_employment_type" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_880f3cce5e03f42bec3da6e6dc" ON "organization_employment_type" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_227b5bd9867287cbbeece8f6ba" ON "organization_employment_type" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a583cfe32f492f5ba99b7bb205" ON "organization_employment_type" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_72c6a8ad9de5c04b2b689fd229"`);
		await queryRunner.query(`DROP INDEX "IDX_e5edb48261db95f46c3b4d34a5"`);
		await queryRunner.query(`DROP INDEX "IDX_1057ec001a4c6b258658143047"`);
		await queryRunner.query(`DROP INDEX "IDX_4bc83945c022a862a33629ff1e"`);
		await queryRunner.query(`DROP INDEX "IDX_c129dee7d1cb84e01e69b5e2c6"`);
		await queryRunner.query(`ALTER TABLE "organization_document" RENAME TO "temporary_organization_document"`);
		await queryRunner.query(
			`CREATE TABLE "organization_document" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "documentUrl" varchar, "documentId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_c129dee7d1cb84e01e69b5e2c66" FOREIGN KEY ("documentId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_4bc83945c022a862a33629ff1e1" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1057ec001a4c6b258658143047a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_document"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "documentUrl", "documentId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "documentUrl", "documentId", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_document"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_document"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_72c6a8ad9de5c04b2b689fd229" ON "organization_document" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e5edb48261db95f46c3b4d34a5" ON "organization_document" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_1057ec001a4c6b258658143047" ON "organization_document" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4bc83945c022a862a33629ff1e" ON "organization_document" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c129dee7d1cb84e01e69b5e2c6" ON "organization_document" ("documentId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_b65059949804b20048b1c86c3d"`);
		await queryRunner.query(`DROP INDEX "IDX_6139cd4c620e81aefd4895d370"`);
		await queryRunner.query(`DROP INDEX "IDX_b3644ff7cd65239e29d292a41d"`);
		await queryRunner.query(`DROP INDEX "IDX_c61a562a2379d1c0077fe7de33"`);
		await queryRunner.query(`DROP INDEX "IDX_91b652409dc1fb2f712590dd21"`);
		await queryRunner.query(`ALTER TABLE "organization_department" RENAME TO "temporary_organization_department"`);
		await queryRunner.query(
			`CREATE TABLE "organization_department" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_c61a562a2379d1c0077fe7de332" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b3644ff7cd65239e29d292a41d1" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_department"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_department"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_department"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_b65059949804b20048b1c86c3d" ON "organization_department" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6139cd4c620e81aefd4895d370" ON "organization_department" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b3644ff7cd65239e29d292a41d" ON "organization_department" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c61a562a2379d1c0077fe7de33" ON "organization_department" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_91b652409dc1fb2f712590dd21" ON "organization_department" ("name") `);
		await queryRunner.query(`DROP INDEX "IDX_f91783c7a8565c648b65635efc"`);
		await queryRunner.query(`DROP INDEX "IDX_53627a383c9817dbf1164d7dc6"`);
		await queryRunner.query(`DROP INDEX "IDX_e68c43e315ad3aaea4e99cf461"`);
		await queryRunner.query(`DROP INDEX "IDX_6200736cb4d3617b004e5b647f"`);
		await queryRunner.query(`DROP INDEX "IDX_de33f92e042365d196d959e774"`);
		await queryRunner.query(`DROP INDEX "IDX_a86d2e378b953cb39261f457d2"`);
		await queryRunner.query(`DROP INDEX "IDX_8cfcdc6bc8fb55e273d9ace5fd"`);
		await queryRunner.query(`ALTER TABLE "organization_contact" RENAME TO "temporary_organization_contact"`);
		await queryRunner.query(
			`CREATE TABLE "organization_contact" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "primaryEmail" varchar, "primaryPhone" varchar, "inviteStatus" varchar, "notes" varchar, "contactType" varchar CHECK( "contactType" IN ('CLIENT','CUSTOMER','LEAD') ) NOT NULL DEFAULT ('CLIENT'), "imageUrl" varchar(500), "budget" integer, "budgetType" varchar CHECK( "budgetType" IN ('hours','cost') ) DEFAULT ('cost'), "createdBy" varchar, "contactId" varchar, "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "REL_a86d2e378b953cb39261f457d2" UNIQUE ("contactId"), CONSTRAINT "FK_8cfcdc6bc8fb55e273d9ace5fd5" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_a86d2e378b953cb39261f457d26" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_6200736cb4d3617b004e5b647ff" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_e68c43e315ad3aaea4e99cf461d" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_contact"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "primaryEmail", "primaryPhone", "inviteStatus", "notes", "contactType", "imageUrl", "budget", "budgetType", "createdBy", "contactId", "imageId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "primaryEmail", "primaryPhone", "inviteStatus", "notes", "contactType", "imageUrl", "budget", "budgetType", "createdBy", "contactId", "imageId", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_contact"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_contact"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_f91783c7a8565c648b65635efc" ON "organization_contact" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_53627a383c9817dbf1164d7dc6" ON "organization_contact" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e68c43e315ad3aaea4e99cf461" ON "organization_contact" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6200736cb4d3617b004e5b647f" ON "organization_contact" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_de33f92e042365d196d959e774" ON "organization_contact" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_a86d2e378b953cb39261f457d2" ON "organization_contact" ("contactId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_8cfcdc6bc8fb55e273d9ace5fd" ON "organization_contact" ("imageId") `);
		await queryRunner.query(`DROP INDEX "IDX_34c6749e2bc94b2e52e9572f32"`);
		await queryRunner.query(`DROP INDEX "IDX_4062b5d54aa740aaff9a6c5fbb"`);
		await queryRunner.query(`DROP INDEX "IDX_af6423760433da72002a7f369e"`);
		await queryRunner.query(`DROP INDEX "IDX_2e0d21aab892b5993abaac09bc"`);
		await queryRunner.query(`DROP INDEX "IDX_31626e7d39eb95b710d5a2d80f"`);
		await queryRunner.query(`ALTER TABLE "organization_award" RENAME TO "temporary_organization_award"`);
		await queryRunner.query(
			`CREATE TABLE "organization_award" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "year" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_2e0d21aab892b5993abaac09bcd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_af6423760433da72002a7f369eb" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "organization_award"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "year", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "year", "isActive", "isArchived", "deletedAt" FROM "temporary_organization_award"`
		);
		await queryRunner.query(`DROP TABLE "temporary_organization_award"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_34c6749e2bc94b2e52e9572f32" ON "organization_award" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_4062b5d54aa740aaff9a6c5fbb" ON "organization_award" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_af6423760433da72002a7f369e" ON "organization_award" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_2e0d21aab892b5993abaac09bc" ON "organization_award" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_31626e7d39eb95b710d5a2d80f" ON "organization_award" ("name") `);
		await queryRunner.query(`DROP INDEX "IDX_0a0f972564e74c9c4905e3abcb"`);
		await queryRunner.query(`DROP INDEX "IDX_a03be8a86e528e2720504a041f"`);
		await queryRunner.query(`DROP INDEX "IDX_533144d7ae94180235ea456625"`);
		await queryRunner.query(`DROP INDEX "IDX_d306a524b507f72fa8550aeffe"`);
		await queryRunner.query(`DROP INDEX "IDX_e03ddff05652be527e04abdc56"`);
		await queryRunner.query(`DROP INDEX "IDX_20acc3c3a6c900c6ef9fc68199"`);
		await queryRunner.query(`ALTER TABLE "merchant" RENAME TO "temporary_merchant"`);
		await queryRunner.query(
			`CREATE TABLE "merchant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "code" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar, "description" varchar, "active" boolean NOT NULL DEFAULT (1), "currency" varchar NOT NULL DEFAULT ('USD'), "contactId" varchar, "logoId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "REL_e03ddff05652be527e04abdc56" UNIQUE ("contactId"), CONSTRAINT "FK_20acc3c3a6c900c6ef9fc681996" FOREIGN KEY ("logoId") REFERENCES "image_asset" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_e03ddff05652be527e04abdc56f" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d306a524b507f72fa8550aeffe4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_533144d7ae94180235ea456625b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "merchant"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "email", "phone", "description", "active", "currency", "contactId", "logoId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "code", "email", "phone", "description", "active", "currency", "contactId", "logoId", "isActive", "isArchived", "deletedAt" FROM "temporary_merchant"`
		);
		await queryRunner.query(`DROP TABLE "temporary_merchant"`);
		await queryRunner.query(`CREATE INDEX "IDX_0a0f972564e74c9c4905e3abcb" ON "merchant" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_a03be8a86e528e2720504a041f" ON "merchant" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_533144d7ae94180235ea456625" ON "merchant" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d306a524b507f72fa8550aeffe" ON "merchant" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e03ddff05652be527e04abdc56" ON "merchant" ("contactId") `);
		await queryRunner.query(`CREATE INDEX "IDX_20acc3c3a6c900c6ef9fc68199" ON "merchant" ("logoId") `);
		await queryRunner.query(`DROP INDEX "IDX_15fcb8179bc7b0642ca78da69e"`);
		await queryRunner.query(`DROP INDEX "IDX_3a7abee35dfa3c90ed491583eb"`);
		await queryRunner.query(`ALTER TABLE "language" RENAME TO "temporary_language"`);
		await queryRunner.query(
			`CREATE TABLE "language" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "code" varchar, "is_system" boolean DEFAULT (1), "description" varchar, "color" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "UQ_465b3173cdddf0ac2d3fe73a33c" UNIQUE ("code"))`
		);
		await queryRunner.query(
			`INSERT INTO "language"("id", "createdAt", "updatedAt", "name", "code", "is_system", "description", "color", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "code", "is_system", "description", "color", "isActive", "isArchived", "deletedAt" FROM "temporary_language"`
		);
		await queryRunner.query(`DROP TABLE "temporary_language"`);
		await queryRunner.query(`CREATE INDEX "IDX_15fcb8179bc7b0642ca78da69e" ON "language" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_3a7abee35dfa3c90ed491583eb" ON "language" ("isActive") `);
		await queryRunner.query(`DROP INDEX "IDX_8889e2618366faefa575a8049b"`);
		await queryRunner.query(`DROP INDEX "IDX_9b62dd2dddcde032f46a981733"`);
		await queryRunner.query(`DROP INDEX "IDX_8ac2c6b487d03157adda874789"`);
		await queryRunner.query(`DROP INDEX "IDX_d1f45ca98f17bd84a5e430feaf"`);
		await queryRunner.query(`DROP INDEX "IDX_5880347716f9ec5056ec15112c"`);
		await queryRunner.query(`DROP INDEX "IDX_c89adeff0de3aedb2e772a5bf4"`);
		await queryRunner.query(`DROP INDEX "IDX_38dc003f3484eff4b59918e9ae"`);
		await queryRunner.query(`DROP INDEX "IDX_d8547e21ccb8e37ac9f0d69c1a"`);
		await queryRunner.query(`DROP INDEX "IDX_4e1e975124c1d717814a4bb2ec"`);
		await queryRunner.query(`DROP INDEX "IDX_3e1d08761a717c1dd71fe67249"`);
		await queryRunner.query(`ALTER TABLE "key_result" RENAME TO "temporary_key_result"`);
		await queryRunner.query(
			`CREATE TABLE "key_result" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar NOT NULL, "type" varchar NOT NULL, "targetValue" integer, "initialValue" integer, "unit" varchar, "update" integer NOT NULL, "progress" integer NOT NULL, "deadline" varchar NOT NULL, "hardDeadline" datetime, "softDeadline" datetime, "status" varchar NOT NULL, "weight" varchar, "ownerId" varchar NOT NULL, "leadId" varchar, "projectId" varchar, "taskId" varchar, "kpiId" varchar, "goalId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_3e1d08761a717c1dd71fe67249b" FOREIGN KEY ("goalId") REFERENCES "goal" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4e1e975124c1d717814a4bb2ec8" FOREIGN KEY ("kpiId") REFERENCES "goal_kpi" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d8547e21ccb8e37ac9f0d69c1af" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_38dc003f3484eff4b59918e9ae3" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_c89adeff0de3aedb2e772a5bf4c" FOREIGN KEY ("leadId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_5880347716f9ec5056ec15112cc" FOREIGN KEY ("ownerId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_d1f45ca98f17bd84a5e430feaf4" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8ac2c6b487d03157adda874789f" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "key_result"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "targetValue", "initialValue", "unit", "update", "progress", "deadline", "hardDeadline", "softDeadline", "status", "weight", "ownerId", "leadId", "projectId", "taskId", "kpiId", "goalId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "targetValue", "initialValue", "unit", "update", "progress", "deadline", "hardDeadline", "softDeadline", "status", "weight", "ownerId", "leadId", "projectId", "taskId", "kpiId", "goalId", "isActive", "isArchived", "deletedAt" FROM "temporary_key_result"`
		);
		await queryRunner.query(`DROP TABLE "temporary_key_result"`);
		await queryRunner.query(`CREATE INDEX "IDX_8889e2618366faefa575a8049b" ON "key_result" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_9b62dd2dddcde032f46a981733" ON "key_result" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8ac2c6b487d03157adda874789" ON "key_result" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d1f45ca98f17bd84a5e430feaf" ON "key_result" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5880347716f9ec5056ec15112c" ON "key_result" ("ownerId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c89adeff0de3aedb2e772a5bf4" ON "key_result" ("leadId") `);
		await queryRunner.query(`CREATE INDEX "IDX_38dc003f3484eff4b59918e9ae" ON "key_result" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d8547e21ccb8e37ac9f0d69c1a" ON "key_result" ("taskId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4e1e975124c1d717814a4bb2ec" ON "key_result" ("kpiId") `);
		await queryRunner.query(`CREATE INDEX "IDX_3e1d08761a717c1dd71fe67249" ON "key_result" ("goalId") `);
		await queryRunner.query(`DROP INDEX "IDX_94aad97b26aede6545a3226fb3"`);
		await queryRunner.query(`DROP INDEX "IDX_12b8b54f416ec9f5ec002f0a83"`);
		await queryRunner.query(`DROP INDEX "IDX_cd9cbc0d5b6d62dbb63c3b3a65"`);
		await queryRunner.query(`DROP INDEX "IDX_fd4b0cb7a44ed914acdda55e29"`);
		await queryRunner.query(`ALTER TABLE "key_result_update" RENAME TO "temporary_key_result_update"`);
		await queryRunner.query(
			`CREATE TABLE "key_result_update" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "update" integer NOT NULL, "progress" integer NOT NULL, "owner" varchar NOT NULL, "status" varchar NOT NULL, "keyResultId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_7497a70a581e5f56f792015dd37" FOREIGN KEY ("keyResultId") REFERENCES "key_result" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_fd4b0cb7a44ed914acdda55e29c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_cd9cbc0d5b6d62dbb63c3b3a65b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "key_result_update"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "update", "progress", "owner", "status", "keyResultId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "update", "progress", "owner", "status", "keyResultId", "isActive", "isArchived", "deletedAt" FROM "temporary_key_result_update"`
		);
		await queryRunner.query(`DROP TABLE "temporary_key_result_update"`);
		await queryRunner.query(`CREATE INDEX "IDX_94aad97b26aede6545a3226fb3" ON "key_result_update" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_12b8b54f416ec9f5ec002f0a83" ON "key_result_update" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_cd9cbc0d5b6d62dbb63c3b3a65" ON "key_result_update" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_fd4b0cb7a44ed914acdda55e29" ON "key_result_update" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_aa0e9b0cfcba1926925b025512"`);
		await queryRunner.query(`DROP INDEX "IDX_f4e813d72dc732f16497ee2c52"`);
		await queryRunner.query(`DROP INDEX "IDX_86c09eb673b0e66129dbdc7211"`);
		await queryRunner.query(`DROP INDEX "IDX_fab6b6200b9ed6fd002c1ff62a"`);
		await queryRunner.query(`DROP INDEX "IDX_46426ea45456e240a092b73204"`);
		await queryRunner.query(`ALTER TABLE "key_result_template" RENAME TO "temporary_key_result_template"`);
		await queryRunner.query(
			`CREATE TABLE "key_result_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "type" varchar NOT NULL, "unit" varchar, "targetValue" integer, "initialValue" integer, "deadline" varchar NOT NULL, "kpiId" varchar, "goalId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_46426ea45456e240a092b732047" FOREIGN KEY ("goalId") REFERENCES "goal_template" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4bc62c3d2ffdd6f9c7f8b3dcd1c" FOREIGN KEY ("kpiId") REFERENCES "goal_kpi_template" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_fab6b6200b9ed6fd002c1ff62ab" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_86c09eb673b0e66129dbdc72111" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "key_result_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "type", "unit", "targetValue", "initialValue", "deadline", "kpiId", "goalId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "type", "unit", "targetValue", "initialValue", "deadline", "kpiId", "goalId", "isActive", "isArchived", "deletedAt" FROM "temporary_key_result_template"`
		);
		await queryRunner.query(`DROP TABLE "temporary_key_result_template"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_aa0e9b0cfcba1926925b025512" ON "key_result_template" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_f4e813d72dc732f16497ee2c52" ON "key_result_template" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_86c09eb673b0e66129dbdc7211" ON "key_result_template" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_fab6b6200b9ed6fd002c1ff62a" ON "key_result_template" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_46426ea45456e240a092b73204" ON "key_result_template" ("goalId") `);
		await queryRunner.query(`DROP INDEX "IDX_eabacf7474d75e53d7b7046f3e"`);
		await queryRunner.query(`DROP INDEX "IDX_850ca385c1985c1808cd4ea241"`);
		await queryRunner.query(`DROP INDEX "IDX_7fb52a5f267f53b7d93af3d8c3"`);
		await queryRunner.query(`DROP INDEX "IDX_058ef835f99e28fc6717cd7c80"`);
		await queryRunner.query(`DROP INDEX "IDX_b5c33892e630b66c65d623baf8"`);
		await queryRunner.query(`DROP INDEX "IDX_d9e965da0f63c94983d3a1006a"`);
		await queryRunner.query(`ALTER TABLE "invoice" RENAME TO "temporary_invoice"`);
		await queryRunner.query(
			`CREATE TABLE "invoice" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "invoiceDate" datetime, "invoiceNumber" numeric, "dueDate" datetime, "currency" varchar NOT NULL, "discountValue" numeric NOT NULL, "paid" boolean, "tax" numeric, "tax2" numeric, "terms" varchar NOT NULL, "totalValue" numeric, "status" varchar NOT NULL, "isEstimate" boolean, "isAccepted" boolean, "discountType" varchar, "taxType" varchar, "tax2Type" varchar, "invoiceType" varchar, "sentTo" varchar, "organizationContactId" varchar, "internalNote" varchar, "alreadyPaid" numeric, "amountDue" numeric, "hasRemainingAmountInvoiced" boolean, "token" varchar, "isArchived" boolean DEFAULT (0), "fromOrganizationId" varchar NOT NULL, "toContactId" varchar, "isActive" boolean DEFAULT (1), "deletedAt" datetime, CONSTRAINT "UQ_d7bed97fb47876e03fd7d7c285a" UNIQUE ("invoiceNumber"), CONSTRAINT "FK_d9e965da0f63c94983d3a1006ac" FOREIGN KEY ("toContactId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_b5c33892e630b66c65d623baf8e" FOREIGN KEY ("fromOrganizationId") REFERENCES "organization" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_058ef835f99e28fc6717cd7c80f" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7fb52a5f267f53b7d93af3d8c3c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "invoice"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "invoiceDate", "invoiceNumber", "dueDate", "currency", "discountValue", "paid", "tax", "tax2", "terms", "totalValue", "status", "isEstimate", "isAccepted", "discountType", "taxType", "tax2Type", "invoiceType", "sentTo", "organizationContactId", "internalNote", "alreadyPaid", "amountDue", "hasRemainingAmountInvoiced", "token", "isArchived", "fromOrganizationId", "toContactId", "isActive", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "invoiceDate", "invoiceNumber", "dueDate", "currency", "discountValue", "paid", "tax", "tax2", "terms", "totalValue", "status", "isEstimate", "isAccepted", "discountType", "taxType", "tax2Type", "invoiceType", "sentTo", "organizationContactId", "internalNote", "alreadyPaid", "amountDue", "hasRemainingAmountInvoiced", "token", "isArchived", "fromOrganizationId", "toContactId", "isActive", "deletedAt" FROM "temporary_invoice"`
		);
		await queryRunner.query(`DROP TABLE "temporary_invoice"`);
		await queryRunner.query(`CREATE INDEX "IDX_eabacf7474d75e53d7b7046f3e" ON "invoice" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_850ca385c1985c1808cd4ea241" ON "invoice" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_7fb52a5f267f53b7d93af3d8c3" ON "invoice" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_058ef835f99e28fc6717cd7c80" ON "invoice" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b5c33892e630b66c65d623baf8" ON "invoice" ("fromOrganizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d9e965da0f63c94983d3a1006a" ON "invoice" ("toContactId") `);
		await queryRunner.query(`DROP INDEX "IDX_b7da14d2b61cf1dd5c65188b9c"`);
		await queryRunner.query(`DROP INDEX "IDX_e2835fd8776ae5d56d892e087e"`);
		await queryRunner.query(`DROP INDEX "IDX_f78214cd9de76e80fe8a6305f5"`);
		await queryRunner.query(`DROP INDEX "IDX_e89749c8e8258b2ec110c0776f"`);
		await queryRunner.query(`ALTER TABLE "invoice_item" RENAME TO "temporary_invoice_item"`);
		await queryRunner.query(
			`CREATE TABLE "invoice_item" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "description" varchar, "price" numeric NOT NULL, "quantity" numeric NOT NULL, "totalValue" numeric NOT NULL, "applyTax" boolean, "applyDiscount" boolean, "expenseId" varchar, "invoiceId" varchar, "taskId" varchar, "employeeId" varchar, "projectId" varchar, "productId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_e558df60d7d9a3e412ef0bbb844" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_16f1d0e74b4d33e59c0eabdaac7" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_d4d92abde074b3da8054d7cfbc7" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_62d486728b272e3b4d23a6b5db6" FOREIGN KEY ("taskId") REFERENCES "task" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_553d5aac210d22fdca5c8d48ead" FOREIGN KEY ("invoiceId") REFERENCES "invoice" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_897c33b49a04cf3db7acd336afc" FOREIGN KEY ("expenseId") REFERENCES "expense" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_e89749c8e8258b2ec110c0776ff" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f78214cd9de76e80fe8a6305f52" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "invoice_item"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "price", "quantity", "totalValue", "applyTax", "applyDiscount", "expenseId", "invoiceId", "taskId", "employeeId", "projectId", "productId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "price", "quantity", "totalValue", "applyTax", "applyDiscount", "expenseId", "invoiceId", "taskId", "employeeId", "projectId", "productId", "isActive", "isArchived", "deletedAt" FROM "temporary_invoice_item"`
		);
		await queryRunner.query(`DROP TABLE "temporary_invoice_item"`);
		await queryRunner.query(`CREATE INDEX "IDX_b7da14d2b61cf1dd5c65188b9c" ON "invoice_item" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_e2835fd8776ae5d56d892e087e" ON "invoice_item" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f78214cd9de76e80fe8a6305f5" ON "invoice_item" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e89749c8e8258b2ec110c0776f" ON "invoice_item" ("organizationId") `);
		await queryRunner.query(`DROP INDEX "IDX_cc0ac824ba89deda98bb418e8c"`);
		await queryRunner.query(`DROP INDEX "IDX_856f24297f120604f8ae294276"`);
		await queryRunner.query(`DROP INDEX "IDX_da2893697d57368470952a76f6"`);
		await queryRunner.query(`DROP INDEX "IDX_31ec3d5a6b0985cec544c64217"`);
		await queryRunner.query(`DROP INDEX "IDX_483eb296a94d821ebedb375858"`);
		await queryRunner.query(`DROP INDEX "IDX_8106063f79cce8e67790d79092"`);
		await queryRunner.query(
			`ALTER TABLE "invoice_estimate_history" RENAME TO "temporary_invoice_estimate_history"`
		);
		await queryRunner.query(
			`CREATE TABLE "invoice_estimate_history" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "action" varchar NOT NULL, "userId" varchar, "invoiceId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "title" varchar, "deletedAt" datetime, CONSTRAINT "FK_cc0ac824ba89deda98bb418e8ca" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_856f24297f120604f8ae2942769" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_da2893697d57368470952a76f65" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_31ec3d5a6b0985cec544c642178" FOREIGN KEY ("invoiceId") REFERENCES "invoice" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "invoice_estimate_history"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "action", "userId", "invoiceId", "isActive", "isArchived", "title", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "action", "userId", "invoiceId", "isActive", "isArchived", "title", "deletedAt" FROM "temporary_invoice_estimate_history"`
		);
		await queryRunner.query(`DROP TABLE "temporary_invoice_estimate_history"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_cc0ac824ba89deda98bb418e8c" ON "invoice_estimate_history" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_856f24297f120604f8ae294276" ON "invoice_estimate_history" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_da2893697d57368470952a76f6" ON "invoice_estimate_history" ("userId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_31ec3d5a6b0985cec544c64217" ON "invoice_estimate_history" ("invoiceId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_483eb296a94d821ebedb375858" ON "invoice_estimate_history" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8106063f79cce8e67790d79092" ON "invoice_estimate_history" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_3cef860504647ccd52d39d7dc2"`);
		await queryRunner.query(`DROP INDEX "IDX_bd44bcb10034bc0c5fe4427b3e"`);
		await queryRunner.query(`DROP INDEX "IDX_91bfeec7a9574f458e5b592472"`);
		await queryRunner.query(`DROP INDEX "IDX_900a3ed40499c79c1c289fec28"`);
		await queryRunner.query(`DROP INDEX "IDX_5a182e8b3e225b14ddf6df7e6c"`);
		await queryRunner.query(`DROP INDEX "IDX_68eef4ab86b67747f24f288a16"`);
		await queryRunner.query(`DROP INDEX "IDX_7c2328f76efb850b8114797247"`);
		await queryRunner.query(`ALTER TABLE "invite" RENAME TO "temporary_invite"`);
		await queryRunner.query(
			`CREATE TABLE "invite" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "token" varchar NOT NULL, "email" varchar NOT NULL, "status" varchar NOT NULL, "expireDate" datetime, "actionDate" datetime, "invitedById" varchar, "roleId" varchar, "code" varchar, "fullName" varchar, "userId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_7c2328f76efb850b81147972476" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_68eef4ab86b67747f24f288a16c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_5a182e8b3e225b14ddf6df7e6c3" FOREIGN KEY ("invitedById") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_900a3ed40499c79c1c289fec284" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_91bfeec7a9574f458e5b592472d" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "invite"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "token", "email", "status", "expireDate", "actionDate", "invitedById", "roleId", "code", "fullName", "userId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "token", "email", "status", "expireDate", "actionDate", "invitedById", "roleId", "code", "fullName", "userId", "isActive", "isArchived", "deletedAt" FROM "temporary_invite"`
		);
		await queryRunner.query(`DROP TABLE "temporary_invite"`);
		await queryRunner.query(`CREATE INDEX "IDX_3cef860504647ccd52d39d7dc2" ON "invite" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_bd44bcb10034bc0c5fe4427b3e" ON "invite" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_91bfeec7a9574f458e5b592472" ON "invite" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_900a3ed40499c79c1c289fec28" ON "invite" ("roleId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5a182e8b3e225b14ddf6df7e6c" ON "invite" ("invitedById") `);
		await queryRunner.query(`CREATE INDEX "IDX_68eef4ab86b67747f24f288a16" ON "invite" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_7c2328f76efb850b8114797247" ON "invite" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_85d7b0f07f3e3707b4586670a9"`);
		await queryRunner.query(`DROP INDEX "IDX_24981cd300007cf88601c2d616"`);
		await queryRunner.query(`ALTER TABLE "integration" RENAME TO "temporary_integration"`);
		await queryRunner.query(
			`CREATE TABLE "integration" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "imgSrc" varchar, "isComingSoon" boolean NOT NULL DEFAULT (0), "isPaid" boolean NOT NULL DEFAULT (0), "version" varchar, "docUrl" varchar, "isFreeTrial" boolean NOT NULL DEFAULT (0), "freeTrialPeriod" numeric DEFAULT (0), "order" integer, "provider" varchar, "redirectUrl" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "UQ_938c19d92ad3f290ff5fc163531" UNIQUE ("name"))`
		);
		await queryRunner.query(
			`INSERT INTO "integration"("id", "createdAt", "updatedAt", "name", "imgSrc", "isComingSoon", "isPaid", "version", "docUrl", "isFreeTrial", "freeTrialPeriod", "order", "provider", "redirectUrl", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "imgSrc", "isComingSoon", "isPaid", "version", "docUrl", "isFreeTrial", "freeTrialPeriod", "order", "provider", "redirectUrl", "isActive", "isArchived", "deletedAt" FROM "temporary_integration"`
		);
		await queryRunner.query(`DROP TABLE "temporary_integration"`);
		await queryRunner.query(`CREATE INDEX "IDX_85d7b0f07f3e3707b4586670a9" ON "integration" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_24981cd300007cf88601c2d616" ON "integration" ("isActive") `);
		await queryRunner.query(`DROP INDEX "IDX_e7b65ef60492b1c34007736f99"`);
		await queryRunner.query(`DROP INDEX "IDX_34a49d941459e1031c766b941f"`);
		await queryRunner.query(`ALTER TABLE "integration_type" RENAME TO "temporary_integration_type"`);
		await queryRunner.query(
			`CREATE TABLE "integration_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "groupName" varchar NOT NULL, "order" integer NOT NULL, "description" varchar, "icon" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "UQ_be0d67f4df84f036fab2ed89c47" UNIQUE ("name"))`
		);
		await queryRunner.query(
			`INSERT INTO "integration_type"("id", "createdAt", "updatedAt", "name", "groupName", "order", "description", "icon", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "groupName", "order", "description", "icon", "isActive", "isArchived", "deletedAt" FROM "temporary_integration_type"`
		);
		await queryRunner.query(`DROP TABLE "temporary_integration_type"`);
		await queryRunner.query(`CREATE INDEX "IDX_e7b65ef60492b1c34007736f99" ON "integration_type" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_34a49d941459e1031c766b941f" ON "integration_type" ("isActive") `);
		await queryRunner.query(`DROP INDEX "IDX_d0532ed8020981736b58748de6"`);
		await queryRunner.query(`DROP INDEX "IDX_0d6ddc27d687ca879042c5f3ce"`);
		await queryRunner.query(`DROP INDEX "IDX_24e37d03ef224f1a16a35069c2"`);
		await queryRunner.query(`DROP INDEX "IDX_33ab224e7755a46fff5bc1e64e"`);
		await queryRunner.query(`DROP INDEX "IDX_c5ff5d3ab364b7da72bf3fbb46"`);
		await queryRunner.query(`DROP INDEX "IDX_5487f9197c106d774bae20991c"`);
		await queryRunner.query(`ALTER TABLE "integration_tenant" RENAME TO "temporary_integration_tenant"`);
		await queryRunner.query(
			`CREATE TABLE "integration_tenant" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "integrationId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "lastSyncedAt" datetime DEFAULT (CURRENT_TIMESTAMP), "deletedAt" datetime, CONSTRAINT "FK_33ab224e7755a46fff5bc1e64e5" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_24e37d03ef224f1a16a35069c2c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0d6ddc27d687ca879042c5f3ce3" FOREIGN KEY ("integrationId") REFERENCES "integration" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "integration_tenant"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "integrationId", "isActive", "isArchived", "lastSyncedAt", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "integrationId", "isActive", "isArchived", "lastSyncedAt", "deletedAt" FROM "temporary_integration_tenant"`
		);
		await queryRunner.query(`DROP TABLE "temporary_integration_tenant"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_d0532ed8020981736b58748de6" ON "integration_tenant" ("lastSyncedAt") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0d6ddc27d687ca879042c5f3ce" ON "integration_tenant" ("integrationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_24e37d03ef224f1a16a35069c2" ON "integration_tenant" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_33ab224e7755a46fff5bc1e64e" ON "integration_tenant" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_c5ff5d3ab364b7da72bf3fbb46" ON "integration_tenant" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_5487f9197c106d774bae20991c" ON "integration_tenant" ("isArchived") `
		);
		await queryRunner.query(`DROP INDEX "IDX_f515574f1251562c52fe25b6a3"`);
		await queryRunner.query(`DROP INDEX "IDX_97c0d54aae21ccdbb5c3581642"`);
		await queryRunner.query(`DROP INDEX "IDX_954c6b05297814776d9cb66ca7"`);
		await queryRunner.query(`DROP INDEX "IDX_369eaafb13afe9903a170077ed"`);
		await queryRunner.query(`DROP INDEX "IDX_34daf030004ad37b88f1f3d863"`);
		await queryRunner.query(`ALTER TABLE "integration_setting" RENAME TO "temporary_integration_setting"`);
		await queryRunner.query(
			`CREATE TABLE "integration_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "settingsName" varchar NOT NULL, "settingsValue" varchar NOT NULL, "integrationId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_34daf030004ad37b88f1f3d863c" FOREIGN KEY ("integrationId") REFERENCES "integration_tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_369eaafb13afe9903a170077edb" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_954c6b05297814776d9cb66ca77" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "integration_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "settingsName", "settingsValue", "integrationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "settingsName", "settingsValue", "integrationId", "isActive", "isArchived", "deletedAt" FROM "temporary_integration_setting"`
		);
		await queryRunner.query(`DROP TABLE "temporary_integration_setting"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_f515574f1251562c52fe25b6a3" ON "integration_setting" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_97c0d54aae21ccdbb5c3581642" ON "integration_setting" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_954c6b05297814776d9cb66ca7" ON "integration_setting" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_369eaafb13afe9903a170077ed" ON "integration_setting" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_34daf030004ad37b88f1f3d863" ON "integration_setting" ("integrationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_e63f4791631e7572ca213ac4a4"`);
		await queryRunner.query(`DROP INDEX "IDX_c79464c4ccf7e5195d69675c15"`);
		await queryRunner.query(`DROP INDEX "IDX_c327ea26bda3d349a1eceb5658"`);
		await queryRunner.query(`DROP INDEX "IDX_7022dafd72c1b92f7d50691441"`);
		await queryRunner.query(`DROP INDEX "IDX_eec3d6064578610ddc609dd360"`);
		await queryRunner.query(`ALTER TABLE "integration_map" RENAME TO "temporary_integration_map"`);
		await queryRunner.query(
			`CREATE TABLE "integration_map" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "entity" varchar NOT NULL, "sourceId" varchar NOT NULL, "gauzyId" varchar NOT NULL, "integrationId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_c327ea26bda3d349a1eceb5658e" FOREIGN KEY ("integrationId") REFERENCES "integration_tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_eec3d6064578610ddc609dd360e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7022dafd72c1b92f7d506914411" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "integration_map"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sourceId", "gauzyId", "integrationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sourceId", "gauzyId", "integrationId", "isActive", "isArchived", "deletedAt" FROM "temporary_integration_map"`
		);
		await queryRunner.query(`DROP TABLE "temporary_integration_map"`);
		await queryRunner.query(`CREATE INDEX "IDX_e63f4791631e7572ca213ac4a4" ON "integration_map" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_c79464c4ccf7e5195d69675c15" ON "integration_map" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c327ea26bda3d349a1eceb5658" ON "integration_map" ("integrationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_7022dafd72c1b92f7d50691441" ON "integration_map" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_eec3d6064578610ddc609dd360" ON "integration_map" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_1c653ebceca3b9c8766131db91"`);
		await queryRunner.query(`DROP INDEX "IDX_e3d407c5532edaceaa4df34623"`);
		await queryRunner.query(`DROP INDEX "IDX_f80ff4ebbf0b33a67dce598911"`);
		await queryRunner.query(`DROP INDEX "IDX_c6c01e38eebd8b26b9214b9044"`);
		await queryRunner.query(`DROP INDEX "IDX_23e9cfcf1bfff07dcc3254378d"`);
		await queryRunner.query(
			`ALTER TABLE "integration_entity_setting" RENAME TO "temporary_integration_entity_setting"`
		);
		await queryRunner.query(
			`CREATE TABLE "integration_entity_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "entity" varchar NOT NULL, "sync" boolean NOT NULL, "integrationId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_f80ff4ebbf0b33a67dce5989117" FOREIGN KEY ("integrationId") REFERENCES "integration_tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_23e9cfcf1bfff07dcc3254378df" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c6c01e38eebd8b26b9214b90441" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "integration_entity_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sync", "integrationId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sync", "integrationId", "isActive", "isArchived", "deletedAt" FROM "temporary_integration_entity_setting"`
		);
		await queryRunner.query(`DROP TABLE "temporary_integration_entity_setting"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_1c653ebceca3b9c8766131db91" ON "integration_entity_setting" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e3d407c5532edaceaa4df34623" ON "integration_entity_setting" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f80ff4ebbf0b33a67dce598911" ON "integration_entity_setting" ("integrationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_c6c01e38eebd8b26b9214b9044" ON "integration_entity_setting" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_23e9cfcf1bfff07dcc3254378d" ON "integration_entity_setting" ("tenantId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_101cd83aa75949cfb5b8eec084"`);
		await queryRunner.query(`DROP INDEX "IDX_6d43cc33c80221dbe4854b38e6"`);
		await queryRunner.query(`DROP INDEX "IDX_3fb863167095805e33f38a0fdc"`);
		await queryRunner.query(`DROP INDEX "IDX_d5ac36aa3d5919908414154fca"`);
		await queryRunner.query(`DROP INDEX "IDX_b208a754c7a538cb3422f39f5b"`);
		await queryRunner.query(
			`ALTER TABLE "integration_entity_setting_tied" RENAME TO "temporary_integration_entity_setting_tied"`
		);
		await queryRunner.query(
			`CREATE TABLE "integration_entity_setting_tied" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "entity" varchar NOT NULL, "sync" boolean NOT NULL, "integrationEntitySettingId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_3fb863167095805e33f38a0fdcc" FOREIGN KEY ("integrationEntitySettingId") REFERENCES "integration_entity_setting" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_b208a754c7a538cb3422f39f5b9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d5ac36aa3d5919908414154fca0" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "integration_entity_setting_tied"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sync", "integrationEntitySettingId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "entity", "sync", "integrationEntitySettingId", "isActive", "isArchived", "deletedAt" FROM "temporary_integration_entity_setting_tied"`
		);
		await queryRunner.query(`DROP TABLE "temporary_integration_entity_setting_tied"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_101cd83aa75949cfb5b8eec084" ON "integration_entity_setting_tied" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6d43cc33c80221dbe4854b38e6" ON "integration_entity_setting_tied" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3fb863167095805e33f38a0fdc" ON "integration_entity_setting_tied" ("integrationEntitySettingId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d5ac36aa3d5919908414154fca" ON "integration_entity_setting_tied" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b208a754c7a538cb3422f39f5b" ON "integration_entity_setting_tied" ("tenantId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_aedb8b1d10c498309bed9edf53"`);
		await queryRunner.query(`DROP INDEX "IDX_904ab9ee6ac5e74bf3616c8ccb"`);
		await queryRunner.query(`DROP INDEX "IDX_8608b275644cfc7a0f3f585081"`);
		await queryRunner.query(`DROP INDEX "IDX_64409de4711cd14e2c43371cc0"`);
		await queryRunner.query(`DROP INDEX "IDX_bd39a647a2843177723ddf733e"`);
		await queryRunner.query(`DROP INDEX "IDX_86b5a121b3775a1b0b7fa75680"`);
		await queryRunner.query(`DROP INDEX "IDX_20207d9f915066dfbc2210bcf1"`);
		await queryRunner.query(`DROP INDEX "IDX_a05d52b7ffe89140f9cbcf114b"`);
		await queryRunner.query(`DROP INDEX "IDX_29fbd3a17710a27e6f856072c0"`);
		await queryRunner.query(`ALTER TABLE "income" RENAME TO "temporary_income"`);
		await queryRunner.query(
			`CREATE TABLE "income" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "amount" numeric NOT NULL, "currency" varchar NOT NULL, "valueDate" datetime, "notes" varchar, "isBonus" boolean, "reference" varchar, "employeeId" varchar, "clientId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_29fbd3a17710a27e6f856072c01" FOREIGN KEY ("clientId") REFERENCES "organization_contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_a05d52b7ffe89140f9cbcf114b3" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_64409de4711cd14e2c43371cc02" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8608b275644cfc7a0f3f5850814" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "income"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "amount", "currency", "valueDate", "notes", "isBonus", "reference", "employeeId", "clientId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "amount", "currency", "valueDate", "notes", "isBonus", "reference", "employeeId", "clientId", "isActive", "isArchived", "deletedAt" FROM "temporary_income"`
		);
		await queryRunner.query(`DROP TABLE "temporary_income"`);
		await queryRunner.query(`CREATE INDEX "IDX_aedb8b1d10c498309bed9edf53" ON "income" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_904ab9ee6ac5e74bf3616c8ccb" ON "income" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8608b275644cfc7a0f3f585081" ON "income" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_64409de4711cd14e2c43371cc0" ON "income" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_bd39a647a2843177723ddf733e" ON "income" ("amount") `);
		await queryRunner.query(`CREATE INDEX "IDX_86b5a121b3775a1b0b7fa75680" ON "income" ("currency") `);
		await queryRunner.query(`CREATE INDEX "IDX_20207d9f915066dfbc2210bcf1" ON "income" ("notes") `);
		await queryRunner.query(`CREATE INDEX "IDX_a05d52b7ffe89140f9cbcf114b" ON "income" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_29fbd3a17710a27e6f856072c0" ON "income" ("clientId") `);
		await queryRunner.query(`DROP INDEX "IDX_af1a212cb378bb0eed51c1b2bc"`);
		await queryRunner.query(`DROP INDEX "IDX_9d44ce9eb8689e578b941a6a54"`);
		await queryRunner.query(`DROP INDEX "IDX_d3675304df9971cccf96d9a7c3"`);
		await queryRunner.query(`DROP INDEX "IDX_01856a9a730b7e79d70aa661cb"`);
		await queryRunner.query(`ALTER TABLE "image_asset" RENAME TO "temporary_image_asset"`);
		await queryRunner.query(
			`CREATE TABLE "image_asset" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar, "url" varchar NOT NULL, "width" integer NOT NULL DEFAULT (0), "height" integer NOT NULL DEFAULT (0), "isFeatured" boolean NOT NULL DEFAULT (0), "thumb" varchar, "size" numeric, "externalProviderId" varchar, "storageProvider" varchar CHECK( "storageProvider" IN ('LOCAL','S3','WASABI','CLOUDINARY','DIGITALOCEAN') ), "deletedAt" datetime, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), CONSTRAINT "FK_01856a9a730b7e79d70aa661cb0" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d3675304df9971cccf96d9a7c34" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "image_asset"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "url", "width", "height", "isFeatured", "thumb", "size", "externalProviderId", "storageProvider", "deletedAt", "isActive", "isArchived") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "url", "width", "height", "isFeatured", "thumb", "size", "externalProviderId", "storageProvider", "deletedAt", "isActive", "isArchived" FROM "temporary_image_asset"`
		);
		await queryRunner.query(`DROP TABLE "temporary_image_asset"`);
		await queryRunner.query(`CREATE INDEX "IDX_af1a212cb378bb0eed51c1b2bc" ON "image_asset" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_9d44ce9eb8689e578b941a6a54" ON "image_asset" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_d3675304df9971cccf96d9a7c3" ON "image_asset" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_01856a9a730b7e79d70aa661cb" ON "image_asset" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_4a2c00a44350a063d75be80ba9"`);
		await queryRunner.query(`DROP INDEX "IDX_72641ffde44e1a1627aa2d040f"`);
		await queryRunner.query(`DROP INDEX "IDX_6b4758a5442713070c9a366d0e"`);
		await queryRunner.query(`DROP INDEX "IDX_c6e8ae55a4db3584686cbf6afe"`);
		await queryRunner.query(`DROP INDEX "IDX_ac161c1a0c0ff8e83554f097e5"`);
		await queryRunner.query(`DROP INDEX "IDX_35526ff1063ab5fa2b20e71bd6"`);
		await queryRunner.query(`DROP INDEX "IDX_af0a11734e70412b742ac339c8"`);
		await queryRunner.query(`DROP INDEX "IDX_4c8b4e887a994182fd6132e640"`);
		await queryRunner.query(`ALTER TABLE "goal" RENAME TO "temporary_goal"`);
		await queryRunner.query(
			`CREATE TABLE "goal" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar NOT NULL, "deadline" varchar NOT NULL, "level" varchar NOT NULL, "progress" integer NOT NULL, "ownerTeamId" varchar, "ownerEmployeeId" varchar, "leadId" varchar, "alignedKeyResultId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_4c8b4e887a994182fd6132e6400" FOREIGN KEY ("alignedKeyResultId") REFERENCES "key_result" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_af0a11734e70412b742ac339c88" FOREIGN KEY ("leadId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_35526ff1063ab5fa2b20e71bd66" FOREIGN KEY ("ownerEmployeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ac161c1a0c0ff8e83554f097e5e" FOREIGN KEY ("ownerTeamId") REFERENCES "organization_team" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c6e8ae55a4db3584686cbf6afe1" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_6b4758a5442713070c9a366d0e5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "goal"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "deadline", "level", "progress", "ownerTeamId", "ownerEmployeeId", "leadId", "alignedKeyResultId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "deadline", "level", "progress", "ownerTeamId", "ownerEmployeeId", "leadId", "alignedKeyResultId", "isActive", "isArchived", "deletedAt" FROM "temporary_goal"`
		);
		await queryRunner.query(`DROP TABLE "temporary_goal"`);
		await queryRunner.query(`CREATE INDEX "IDX_4a2c00a44350a063d75be80ba9" ON "goal" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_72641ffde44e1a1627aa2d040f" ON "goal" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_6b4758a5442713070c9a366d0e" ON "goal" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_c6e8ae55a4db3584686cbf6afe" ON "goal" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_ac161c1a0c0ff8e83554f097e5" ON "goal" ("ownerTeamId") `);
		await queryRunner.query(`CREATE INDEX "IDX_35526ff1063ab5fa2b20e71bd6" ON "goal" ("ownerEmployeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_af0a11734e70412b742ac339c8" ON "goal" ("leadId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4c8b4e887a994182fd6132e640" ON "goal" ("alignedKeyResultId") `);
		await queryRunner.query(`DROP INDEX "IDX_ef4ec26ca3a7e0d8c9e1748be2"`);
		await queryRunner.query(`DROP INDEX "IDX_646565982726362cc2ca4fb807"`);
		await queryRunner.query(`DROP INDEX "IDX_b56723b53a76ca1c171890c479"`);
		await queryRunner.query(`DROP INDEX "IDX_405bc5bba9ed71aefef84a29f1"`);
		await queryRunner.query(`ALTER TABLE "goal_time_frame" RENAME TO "temporary_goal_time_frame"`);
		await queryRunner.query(
			`CREATE TABLE "goal_time_frame" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "status" varchar NOT NULL, "startDate" datetime NOT NULL, "endDate" datetime NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_405bc5bba9ed71aefef84a29f10" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b56723b53a76ca1c171890c479b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "goal_time_frame"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "status", "startDate", "endDate", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "status", "startDate", "endDate", "isActive", "isArchived", "deletedAt" FROM "temporary_goal_time_frame"`
		);
		await queryRunner.query(`DROP TABLE "temporary_goal_time_frame"`);
		await queryRunner.query(`CREATE INDEX "IDX_ef4ec26ca3a7e0d8c9e1748be2" ON "goal_time_frame" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_646565982726362cc2ca4fb807" ON "goal_time_frame" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_b56723b53a76ca1c171890c479" ON "goal_time_frame" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_405bc5bba9ed71aefef84a29f1" ON "goal_time_frame" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_056e869152a335f88c38c5b693"`);
		await queryRunner.query(`DROP INDEX "IDX_cd91c5925942061527b1bc112c"`);
		await queryRunner.query(`DROP INDEX "IDX_774bf82989475befe301fe1bca"`);
		await queryRunner.query(`DROP INDEX "IDX_5708fe06608c72fc77b65ae651"`);
		await queryRunner.query(`ALTER TABLE "goal_template" RENAME TO "temporary_goal_template"`);
		await queryRunner.query(
			`CREATE TABLE "goal_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "level" varchar NOT NULL, "category" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_5708fe06608c72fc77b65ae6519" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_774bf82989475befe301fe1bca5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "goal_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "level", "category", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "level", "category", "isActive", "isArchived", "deletedAt" FROM "temporary_goal_template"`
		);
		await queryRunner.query(`DROP TABLE "temporary_goal_template"`);
		await queryRunner.query(`CREATE INDEX "IDX_056e869152a335f88c38c5b693" ON "goal_template" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_cd91c5925942061527b1bc112c" ON "goal_template" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_774bf82989475befe301fe1bca" ON "goal_template" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5708fe06608c72fc77b65ae651" ON "goal_template" ("organizationId") `);
		await queryRunner.query(`DROP INDEX "IDX_a96c22c51607f878c8a98bc488"`);
		await queryRunner.query(`DROP INDEX "IDX_cfc393bd9835d8259e73019226"`);
		await queryRunner.query(`DROP INDEX "IDX_43aa2985216560cd9fa93f501e"`);
		await queryRunner.query(`DROP INDEX "IDX_e49e37fe88a2725a38a3b05849"`);
		await queryRunner.query(`DROP INDEX "IDX_d4f093ca4eb7c40db68d9a789d"`);
		await queryRunner.query(`ALTER TABLE "goal_kpi" RENAME TO "temporary_goal_kpi"`);
		await queryRunner.query(
			`CREATE TABLE "goal_kpi" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "type" varchar NOT NULL, "unit" varchar, "operator" varchar NOT NULL, "currentValue" integer NOT NULL, "targetValue" integer NOT NULL, "leadId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_d4f093ca4eb7c40db68d9a789d0" FOREIGN KEY ("leadId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_e49e37fe88a2725a38a3b058493" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_43aa2985216560cd9fa93f501e5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "goal_kpi"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "unit", "operator", "currentValue", "targetValue", "leadId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "unit", "operator", "currentValue", "targetValue", "leadId", "isActive", "isArchived", "deletedAt" FROM "temporary_goal_kpi"`
		);
		await queryRunner.query(`DROP TABLE "temporary_goal_kpi"`);
		await queryRunner.query(`CREATE INDEX "IDX_a96c22c51607f878c8a98bc488" ON "goal_kpi" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_cfc393bd9835d8259e73019226" ON "goal_kpi" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_43aa2985216560cd9fa93f501e" ON "goal_kpi" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e49e37fe88a2725a38a3b05849" ON "goal_kpi" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d4f093ca4eb7c40db68d9a789d" ON "goal_kpi" ("leadId") `);
		await queryRunner.query(`DROP INDEX "IDX_26311c417ba945c901c65d515d"`);
		await queryRunner.query(`DROP INDEX "IDX_b4f4701ddb0e973602445ed1c6"`);
		await queryRunner.query(`DROP INDEX "IDX_cc72d4e8e4284dcc8ffbf96caf"`);
		await queryRunner.query(`DROP INDEX "IDX_df7ab026698c02859ff7540809"`);
		await queryRunner.query(`ALTER TABLE "goal_kpi_template" RENAME TO "temporary_goal_kpi_template"`);
		await queryRunner.query(
			`CREATE TABLE "goal_kpi_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "type" varchar NOT NULL, "unit" varchar, "operator" varchar NOT NULL, "currentValue" integer NOT NULL, "targetValue" integer NOT NULL, "leadId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_f69e740b066c6469d1c68a4a28b" FOREIGN KEY ("leadId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_df7ab026698c02859ff75408093" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_cc72d4e8e4284dcc8ffbf96caf4" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "goal_kpi_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "unit", "operator", "currentValue", "targetValue", "leadId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "type", "unit", "operator", "currentValue", "targetValue", "leadId", "isActive", "isArchived", "deletedAt" FROM "temporary_goal_kpi_template"`
		);
		await queryRunner.query(`DROP TABLE "temporary_goal_kpi_template"`);
		await queryRunner.query(`CREATE INDEX "IDX_26311c417ba945c901c65d515d" ON "goal_kpi_template" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_b4f4701ddb0e973602445ed1c6" ON "goal_kpi_template" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_cc72d4e8e4284dcc8ffbf96caf" ON "goal_kpi_template" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_df7ab026698c02859ff7540809" ON "goal_kpi_template" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_4a44905db4ca1e40b62021fdfb"`);
		await queryRunner.query(`DROP INDEX "IDX_bdee8704ebeb79368ff6154fc7"`);
		await queryRunner.query(`DROP INDEX "IDX_d17a5159d888ac6320459eda39"`);
		await queryRunner.query(`DROP INDEX "IDX_e35d0f7b794ca8850669d12c78"`);
		await queryRunner.query(`ALTER TABLE "goal_general_setting" RENAME TO "temporary_goal_general_setting"`);
		await queryRunner.query(
			`CREATE TABLE "goal_general_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "maxObjectives" integer NOT NULL, "maxKeyResults" integer NOT NULL, "employeeCanCreateObjective" boolean NOT NULL, "canOwnObjectives" varchar NOT NULL, "canOwnKeyResult" varchar NOT NULL, "krTypeKPI" boolean NOT NULL, "krTypeTask" boolean NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_e35d0f7b794ca8850669d12c78c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_d17a5159d888ac6320459eda392" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "goal_general_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "maxObjectives", "maxKeyResults", "employeeCanCreateObjective", "canOwnObjectives", "canOwnKeyResult", "krTypeKPI", "krTypeTask", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "maxObjectives", "maxKeyResults", "employeeCanCreateObjective", "canOwnObjectives", "canOwnKeyResult", "krTypeKPI", "krTypeTask", "isActive", "isArchived", "deletedAt" FROM "temporary_goal_general_setting"`
		);
		await queryRunner.query(`DROP TABLE "temporary_goal_general_setting"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_4a44905db4ca1e40b62021fdfb" ON "goal_general_setting" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_bdee8704ebeb79368ff6154fc7" ON "goal_general_setting" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d17a5159d888ac6320459eda39" ON "goal_general_setting" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e35d0f7b794ca8850669d12c78" ON "goal_general_setting" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_a26cc341268d22bd55f06e3ef6"`);
		await queryRunner.query(`DROP INDEX "IDX_5405b67f1df904831a358df7c4"`);
		await queryRunner.query(`DROP INDEX "IDX_4832be692a2dc63d67e8e93c75"`);
		await queryRunner.query(`DROP INDEX "IDX_c30465b5a6e0fae1c8ee7e3120"`);
		await queryRunner.query(`DROP INDEX "IDX_d4a28a8e70d450a412bf0cfb52"`);
		await queryRunner.query(`ALTER TABLE "feature" RENAME TO "temporary_feature"`);
		await queryRunner.query(
			`CREATE TABLE "feature" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "name" varchar NOT NULL, "code" varchar NOT NULL, "isPaid" boolean NOT NULL DEFAULT (0), "description" varchar, "image" varchar, "link" varchar NOT NULL, "status" varchar, "icon" varchar, "parentId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_d4a28a8e70d450a412bf0cfb52a" FOREIGN KEY ("parentId") REFERENCES "feature" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "feature"("id", "createdAt", "updatedAt", "name", "code", "isPaid", "description", "image", "link", "status", "icon", "parentId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "name", "code", "isPaid", "description", "image", "link", "status", "icon", "parentId", "isActive", "isArchived", "deletedAt" FROM "temporary_feature"`
		);
		await queryRunner.query(`DROP TABLE "temporary_feature"`);
		await queryRunner.query(`CREATE INDEX "IDX_a26cc341268d22bd55f06e3ef6" ON "feature" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_5405b67f1df904831a358df7c4" ON "feature" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_4832be692a2dc63d67e8e93c75" ON "feature" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_c30465b5a6e0fae1c8ee7e3120" ON "feature" ("code") `);
		await queryRunner.query(`CREATE INDEX "IDX_d4a28a8e70d450a412bf0cfb52" ON "feature" ("parentId") `);
		await queryRunner.query(`DROP INDEX "IDX_e4c142f37091b47056012d34ba"`);
		await queryRunner.query(`DROP INDEX "IDX_4ee685760ddb60ff71f763d8f6"`);
		await queryRunner.query(`DROP INDEX "IDX_8f71803d96dcdbcc6b19bb28d3"`);
		await queryRunner.query(`DROP INDEX "IDX_6a94e6b0a572f591288ac44a42"`);
		await queryRunner.query(`DROP INDEX "IDX_6d413f9fdd5366b1b9add46483"`);
		await queryRunner.query(`ALTER TABLE "feature_organization" RENAME TO "temporary_feature_organization"`);
		await queryRunner.query(
			`CREATE TABLE "feature_organization" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "isEnabled" boolean NOT NULL DEFAULT (1), "featureId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_6d413f9fdd5366b1b9add464836" FOREIGN KEY ("featureId") REFERENCES "feature" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_6a94e6b0a572f591288ac44a421" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8f71803d96dcdbcc6b19bb28d38" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "feature_organization"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "isEnabled", "featureId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "isEnabled", "featureId", "isActive", "isArchived", "deletedAt" FROM "temporary_feature_organization"`
		);
		await queryRunner.query(`DROP TABLE "temporary_feature_organization"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_e4c142f37091b47056012d34ba" ON "feature_organization" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4ee685760ddb60ff71f763d8f6" ON "feature_organization" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8f71803d96dcdbcc6b19bb28d3" ON "feature_organization" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6a94e6b0a572f591288ac44a42" ON "feature_organization" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6d413f9fdd5366b1b9add46483" ON "feature_organization" ("featureId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_339328a7247aa09d061c642ae1"`);
		await queryRunner.query(`DROP INDEX "IDX_b90957ef81e74c43d6ae037560"`);
		await queryRunner.query(`DROP INDEX "IDX_a43b235c35c2c4d3263ada770c"`);
		await queryRunner.query(`ALTER TABLE "import-record" RENAME TO "temporary_import-record"`);
		await queryRunner.query(
			`CREATE TABLE "import-record" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "entityType" varchar NOT NULL, "sourceId" varchar NOT NULL, "destinationId" varchar NOT NULL, "importDate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a43b235c35c2c4d3263ada770c6" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "import-record"("id", "createdAt", "updatedAt", "tenantId", "entityType", "sourceId", "destinationId", "importDate", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "entityType", "sourceId", "destinationId", "importDate", "isActive", "isArchived", "deletedAt" FROM "temporary_import-record"`
		);
		await queryRunner.query(`DROP TABLE "temporary_import-record"`);
		await queryRunner.query(`CREATE INDEX "IDX_339328a7247aa09d061c642ae1" ON "import-record" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_b90957ef81e74c43d6ae037560" ON "import-record" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_a43b235c35c2c4d3263ada770c" ON "import-record" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_d6a626bee6cddf4bc53a493bc3"`);
		await queryRunner.query(`DROP INDEX "IDX_e339340014a6c4e2f57be00b0c"`);
		await queryRunner.query(`DROP INDEX "IDX_54868607115e2fee3b0b764eec"`);
		await queryRunner.query(`ALTER TABLE "import-history" RENAME TO "temporary_import-history"`);
		await queryRunner.query(
			`CREATE TABLE "import-history" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "file" varchar NOT NULL, "path" varchar NOT NULL, "size" integer, "status" varchar NOT NULL, "importDate" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_54868607115e2fee3b0b764eec2" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "import-history"("id", "createdAt", "updatedAt", "tenantId", "file", "path", "size", "status", "importDate", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "file", "path", "size", "status", "importDate", "isActive", "isArchived", "deletedAt" FROM "temporary_import-history"`
		);
		await queryRunner.query(`DROP TABLE "temporary_import-history"`);
		await queryRunner.query(`CREATE INDEX "IDX_d6a626bee6cddf4bc53a493bc3" ON "import-history" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_e339340014a6c4e2f57be00b0c" ON "import-history" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_54868607115e2fee3b0b764eec" ON "import-history" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_d77aeb93f2439ebdf4babaab4c"`);
		await queryRunner.query(`DROP INDEX "IDX_1aa0e5fd480214ae4851471e3c"`);
		await queryRunner.query(`DROP INDEX "IDX_047b8b5c0782d5a6d4c8bfc1a4"`);
		await queryRunner.query(`DROP INDEX "IDX_9971c4171ae051e74b833984a3"`);
		await queryRunner.query(`DROP INDEX "IDX_42eea5debc63f4d1bf89881c10"`);
		await queryRunner.query(`DROP INDEX "IDX_eacb116ab0521ad9b96f2bb53b"`);
		await queryRunner.query(`DROP INDEX "IDX_5e7b197dbac69012dbdb4964f3"`);
		await queryRunner.query(`DROP INDEX "IDX_5f57d077c28b378a6c885e81c5"`);
		await queryRunner.query(`DROP INDEX "IDX_97ed0e2b80f2e7ec260fd81cd9"`);
		await queryRunner.query(`DROP INDEX "IDX_0006d3025b6c92fbd4089b9465"`);
		await queryRunner.query(`DROP INDEX "IDX_dd8ab9312fb8d787982b9feebf"`);
		await queryRunner.query(`DROP INDEX "IDX_cbfebdb1419f9b8036a8b0546e"`);
		await queryRunner.query(`DROP INDEX "IDX_89508d119b1a279c037d9da151"`);
		await queryRunner.query(`DROP INDEX "IDX_3826d6ca74a08a8498fa17d330"`);
		await queryRunner.query(`DROP INDEX "IDX_b5bb8f62d401475fcc8c2ba35e"`);
		await queryRunner.query(`DROP INDEX "IDX_846a933af451a33b95b7b198c6"`);
		await queryRunner.query(`DROP INDEX "IDX_c5fb146726ff128e600f23d0a1"`);
		await queryRunner.query(`DROP INDEX "IDX_6d171c9d5f81095436b99da5e6"`);
		await queryRunner.query(`ALTER TABLE "expense" RENAME TO "temporary_expense"`);
		await queryRunner.query(
			`CREATE TABLE "expense" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "amount" numeric NOT NULL, "typeOfExpense" varchar, "notes" varchar, "currency" varchar NOT NULL, "valueDate" datetime, "purpose" varchar, "taxType" varchar, "taxLabel" varchar, "rateValue" numeric, "receipt" varchar, "splitExpense" boolean, "reference" varchar, "status" varchar, "employeeId" varchar, "vendorId" varchar, "categoryId" varchar, "projectId" varchar, "organizationContactId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_42eea5debc63f4d1bf89881c10a" FOREIGN KEY ("categoryId") REFERENCES "expense_category" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_eacb116ab0521ad9b96f2bb53ba" FOREIGN KEY ("vendorId") REFERENCES "organization_vendor" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_6d171c9d5f81095436b99da5e62" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c5fb146726ff128e600f23d0a1b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_5e7b197dbac69012dbdb4964f37" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9971c4171ae051e74b833984a30" FOREIGN KEY ("projectId") REFERENCES "organization_project" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_047b8b5c0782d5a6d4c8bfc1a4e" FOREIGN KEY ("organizationContactId") REFERENCES "organization_contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "expense"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "amount", "typeOfExpense", "notes", "currency", "valueDate", "purpose", "taxType", "taxLabel", "rateValue", "receipt", "splitExpense", "reference", "status", "employeeId", "vendorId", "categoryId", "projectId", "organizationContactId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "amount", "typeOfExpense", "notes", "currency", "valueDate", "purpose", "taxType", "taxLabel", "rateValue", "receipt", "splitExpense", "reference", "status", "employeeId", "vendorId", "categoryId", "projectId", "organizationContactId", "isActive", "isArchived", "deletedAt" FROM "temporary_expense"`
		);
		await queryRunner.query(`DROP TABLE "temporary_expense"`);
		await queryRunner.query(`CREATE INDEX "IDX_d77aeb93f2439ebdf4babaab4c" ON "expense" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_1aa0e5fd480214ae4851471e3c" ON "expense" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_047b8b5c0782d5a6d4c8bfc1a4" ON "expense" ("organizationContactId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9971c4171ae051e74b833984a3" ON "expense" ("projectId") `);
		await queryRunner.query(`CREATE INDEX "IDX_42eea5debc63f4d1bf89881c10" ON "expense" ("categoryId") `);
		await queryRunner.query(`CREATE INDEX "IDX_eacb116ab0521ad9b96f2bb53b" ON "expense" ("vendorId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5e7b197dbac69012dbdb4964f3" ON "expense" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_5f57d077c28b378a6c885e81c5" ON "expense" ("receipt") `);
		await queryRunner.query(`CREATE INDEX "IDX_97ed0e2b80f2e7ec260fd81cd9" ON "expense" ("rateValue") `);
		await queryRunner.query(`CREATE INDEX "IDX_0006d3025b6c92fbd4089b9465" ON "expense" ("taxLabel") `);
		await queryRunner.query(`CREATE INDEX "IDX_dd8ab9312fb8d787982b9feebf" ON "expense" ("taxType") `);
		await queryRunner.query(`CREATE INDEX "IDX_cbfebdb1419f9b8036a8b0546e" ON "expense" ("purpose") `);
		await queryRunner.query(`CREATE INDEX "IDX_89508d119b1a279c037d9da151" ON "expense" ("currency") `);
		await queryRunner.query(`CREATE INDEX "IDX_3826d6ca74a08a8498fa17d330" ON "expense" ("notes") `);
		await queryRunner.query(`CREATE INDEX "IDX_b5bb8f62d401475fcc8c2ba35e" ON "expense" ("typeOfExpense") `);
		await queryRunner.query(`CREATE INDEX "IDX_846a933af451a33b95b7b198c6" ON "expense" ("amount") `);
		await queryRunner.query(`CREATE INDEX "IDX_c5fb146726ff128e600f23d0a1" ON "expense" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_6d171c9d5f81095436b99da5e6" ON "expense" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_e9cef5d359dfa48ee5d0cd5fcc"`);
		await queryRunner.query(`DROP INDEX "IDX_8376e41fd82aba147a433dc097"`);
		await queryRunner.query(`DROP INDEX "IDX_37504e920ee5ca46a4000b89da"`);
		await queryRunner.query(`DROP INDEX "IDX_9c9bfe5baaf83f53533ff035fc"`);
		await queryRunner.query(`ALTER TABLE "expense_category" RENAME TO "temporary_expense_category"`);
		await queryRunner.query(
			`CREATE TABLE "expense_category" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_9c9bfe5baaf83f53533ff035fc0" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_37504e920ee5ca46a4000b89da5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "expense_category"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "temporary_expense_category"`
		);
		await queryRunner.query(`DROP TABLE "temporary_expense_category"`);
		await queryRunner.query(`CREATE INDEX "IDX_e9cef5d359dfa48ee5d0cd5fcc" ON "expense_category" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_8376e41fd82aba147a433dc097" ON "expense_category" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_37504e920ee5ca46a4000b89da" ON "expense_category" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_9c9bfe5baaf83f53533ff035fc" ON "expense_category" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_613cfa5783e164cad10dc27e58"`);
		await queryRunner.query(`DROP INDEX "IDX_f14eee32875b112fab1139b332"`);
		await queryRunner.query(`DROP INDEX "IDX_92fc62260c0c7ff108622850bf"`);
		await queryRunner.query(`DROP INDEX "IDX_fc8818d6fde74370ec703a0135"`);
		await queryRunner.query(`DROP INDEX "IDX_4b02d8616129f39fca2b10e98b"`);
		await queryRunner.query(`DROP INDEX "IDX_9d5980ff1064e2edb77509d312"`);
		await queryRunner.query(`DROP INDEX "IDX_43459c650957e478203c738574"`);
		await queryRunner.query(`DROP INDEX "IDX_5bde7aeb2c7fb3a421b175871e"`);
		await queryRunner.query(`DROP INDEX "IDX_24d905ec9e127ade23754a363d"`);
		await queryRunner.query(`ALTER TABLE "event_type" RENAME TO "temporary_event_type"`);
		await queryRunner.query(
			`CREATE TABLE "event_type" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "duration" numeric NOT NULL, "durationUnit" varchar, "title" varchar, "description" varchar, "isActive" boolean DEFAULT (1), "employeeId" varchar, "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_24d905ec9e127ade23754a363dd" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_fc8818d6fde74370ec703a01352" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_92fc62260c0c7ff108622850bff" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "event_type"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "durationUnit", "title", "description", "isActive", "employeeId", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "duration", "durationUnit", "title", "description", "isActive", "employeeId", "isArchived", "deletedAt" FROM "temporary_event_type"`
		);
		await queryRunner.query(`DROP TABLE "temporary_event_type"`);
		await queryRunner.query(`CREATE INDEX "IDX_613cfa5783e164cad10dc27e58" ON "event_type" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_f14eee32875b112fab1139b332" ON "event_type" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_92fc62260c0c7ff108622850bf" ON "event_type" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_fc8818d6fde74370ec703a0135" ON "event_type" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4b02d8616129f39fca2b10e98b" ON "event_type" ("duration") `);
		await queryRunner.query(`CREATE INDEX "IDX_9d5980ff1064e2edb77509d312" ON "event_type" ("durationUnit") `);
		await queryRunner.query(`CREATE INDEX "IDX_43459c650957e478203c738574" ON "event_type" ("title") `);
		await queryRunner.query(`CREATE INDEX "IDX_5bde7aeb2c7fb3a421b175871e" ON "event_type" ("description") `);
		await queryRunner.query(`CREATE INDEX "IDX_24d905ec9e127ade23754a363d" ON "event_type" ("employeeId") `);
		await queryRunner.query(`DROP INDEX "IDX_f1fac79e17c475f00daa4db3d2"`);
		await queryRunner.query(`DROP INDEX "IDX_1a4bd2a8034bb1309b4ea87882"`);
		await queryRunner.query(`DROP INDEX "IDX_391d3f83244fea73c619aecadd"`);
		await queryRunner.query(`DROP INDEX "IDX_233c1d351d63441aeb039d1164"`);
		await queryRunner.query(`ALTER TABLE "estimate_email" RENAME TO "temporary_estimate_email"`);
		await queryRunner.query(
			`CREATE TABLE "estimate_email" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "token" varchar NOT NULL, "email" varchar NOT NULL, "expireDate" datetime NOT NULL, "convertAcceptedEstimates" boolean, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_233c1d351d63441aeb039d1164f" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_391d3f83244fea73c619aecadd9" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "estimate_email"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "token", "email", "expireDate", "convertAcceptedEstimates", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "token", "email", "expireDate", "convertAcceptedEstimates", "isActive", "isArchived", "deletedAt" FROM "temporary_estimate_email"`
		);
		await queryRunner.query(`DROP TABLE "temporary_estimate_email"`);
		await queryRunner.query(`CREATE INDEX "IDX_f1fac79e17c475f00daa4db3d2" ON "estimate_email" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_1a4bd2a8034bb1309b4ea87882" ON "estimate_email" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_391d3f83244fea73c619aecadd" ON "estimate_email" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_233c1d351d63441aeb039d1164" ON "estimate_email" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_d8452bfe9f18ced4ce76c4b70b"`);
		await queryRunner.query(`DROP INDEX "IDX_39e1b443404ea7fa42b3d36ccb"`);
		await queryRunner.query(`DROP INDEX "IDX_fb6808468066849ab7b7454d5f"`);
		await queryRunner.query(`DROP INDEX "IDX_f98ce0d210aa9f91b729d44780"`);
		await queryRunner.query(`ALTER TABLE "equipment" RENAME TO "temporary_equipment"`);
		await queryRunner.query(
			`CREATE TABLE "equipment" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "type" varchar NOT NULL, "serialNumber" varchar NOT NULL, "manufacturedYear" numeric, "initialCost" numeric, "currency" varchar NOT NULL, "maxSharePeriod" numeric, "autoApproveShare" boolean NOT NULL, "imageId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_0ab80a66282582ae8b0282508e7" FOREIGN KEY ("imageId") REFERENCES "image_asset" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_f98ce0d210aa9f91b729d447806" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_fb6808468066849ab7b7454d5f3" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "equipment"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "type", "serialNumber", "manufacturedYear", "initialCost", "currency", "maxSharePeriod", "autoApproveShare", "imageId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "type", "serialNumber", "manufacturedYear", "initialCost", "currency", "maxSharePeriod", "autoApproveShare", "imageId", "isActive", "isArchived", "deletedAt" FROM "temporary_equipment"`
		);
		await queryRunner.query(`DROP TABLE "temporary_equipment"`);
		await queryRunner.query(`CREATE INDEX "IDX_d8452bfe9f18ced4ce76c4b70b" ON "equipment" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_39e1b443404ea7fa42b3d36ccb" ON "equipment" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_fb6808468066849ab7b7454d5f" ON "equipment" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f98ce0d210aa9f91b729d44780" ON "equipment" ("organizationId") `);
		await queryRunner.query(`DROP INDEX "IDX_a734598f5637cf1501288331e3"`);
		await queryRunner.query(`DROP INDEX "IDX_70ff31cefa0f578f6fa82d2bcc"`);
		await queryRunner.query(`DROP INDEX "IDX_fa525e61fb3d8d9efec0f364a4"`);
		await queryRunner.query(`DROP INDEX "IDX_ea9254be07ae4a8604f0aaab19"`);
		await queryRunner.query(`DROP INDEX "IDX_acad51a6362806fc499e583e40"`);
		await queryRunner.query(`DROP INDEX "IDX_0ecfe0ce0cd2b197249d5f1c10"`);
		await queryRunner.query(`ALTER TABLE "equipment_sharing" RENAME TO "temporary_equipment_sharing"`);
		await queryRunner.query(
			`CREATE TABLE "equipment_sharing" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar, "shareRequestDay" datetime, "shareStartDay" datetime, "shareEndDay" datetime, "status" integer NOT NULL, "createdBy" varchar, "createdByName" varchar, "equipmentId" varchar, "equipmentSharingPolicyId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_0ecfe0ce0cd2b197249d5f1c105" FOREIGN KEY ("equipmentSharingPolicyId") REFERENCES "equipment_sharing_policy" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_acad51a6362806fc499e583e402" FOREIGN KEY ("equipmentId") REFERENCES "equipment" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ea9254be07ae4a8604f0aaab196" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_fa525e61fb3d8d9efec0f364a4b" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "equipment_sharing"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "shareRequestDay", "shareStartDay", "shareEndDay", "status", "createdBy", "createdByName", "equipmentId", "equipmentSharingPolicyId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "shareRequestDay", "shareStartDay", "shareEndDay", "status", "createdBy", "createdByName", "equipmentId", "equipmentSharingPolicyId", "isActive", "isArchived", "deletedAt" FROM "temporary_equipment_sharing"`
		);
		await queryRunner.query(`DROP TABLE "temporary_equipment_sharing"`);
		await queryRunner.query(`CREATE INDEX "IDX_a734598f5637cf1501288331e3" ON "equipment_sharing" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_70ff31cefa0f578f6fa82d2bcc" ON "equipment_sharing" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_fa525e61fb3d8d9efec0f364a4" ON "equipment_sharing" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_ea9254be07ae4a8604f0aaab19" ON "equipment_sharing" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_acad51a6362806fc499e583e40" ON "equipment_sharing" ("equipmentId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0ecfe0ce0cd2b197249d5f1c10" ON "equipment_sharing" ("equipmentSharingPolicyId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_b0fc293cf47f31ba512fd29bf0"`);
		await queryRunner.query(`DROP INDEX "IDX_0f3ee47a5fb7192d5eb00c71ae"`);
		await queryRunner.query(`DROP INDEX "IDX_5443ca8ed830626656d8cfecef"`);
		await queryRunner.query(`DROP INDEX "IDX_5311a833ff255881454bd5b3b5"`);
		await queryRunner.query(`DROP INDEX "IDX_04c9e514ed70897f6ad8cadc3c"`);
		await queryRunner.query(
			`ALTER TABLE "equipment_sharing_policy" RENAME TO "temporary_equipment_sharing_policy"`
		);
		await queryRunner.query(
			`CREATE TABLE "equipment_sharing_policy" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_5311a833ff255881454bd5b3b58" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_5443ca8ed830626656d8cfecef7" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "equipment_sharing_policy"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "isActive", "isArchived", "deletedAt" FROM "temporary_equipment_sharing_policy"`
		);
		await queryRunner.query(`DROP TABLE "temporary_equipment_sharing_policy"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_b0fc293cf47f31ba512fd29bf0" ON "equipment_sharing_policy" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0f3ee47a5fb7192d5eb00c71ae" ON "equipment_sharing_policy" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5443ca8ed830626656d8cfecef" ON "equipment_sharing_policy" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5311a833ff255881454bd5b3b5" ON "equipment_sharing_policy" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_04c9e514ed70897f6ad8cadc3c" ON "equipment_sharing_policy" ("name") `
		);
		await queryRunner.query(`DROP INDEX "IDX_5e719204dcafa8d6b2ecdeda13"`);
		await queryRunner.query(`DROP INDEX "IDX_1c0c1370ecd98040259625e17e"`);
		await queryRunner.query(`DROP INDEX "IDX_f4b0d329c4a3cf79ffe9d56504"`);
		await queryRunner.query(`DROP INDEX "IDX_96dfbcaa2990df01fe5bb39ccc"`);
		await queryRunner.query(`DROP INDEX "IDX_c6a48286f3aa8ae903bee0d1e7"`);
		await queryRunner.query(`DROP INDEX "IDX_4b3303a6b7eb92d237a4379734"`);
		await queryRunner.query(`DROP INDEX "IDX_510cb87f5da169e57e694d1a5c"`);
		await queryRunner.query(`DROP INDEX "IDX_175b7be641928a31521224daa8"`);
		await queryRunner.query(`ALTER TABLE "employee" RENAME TO "temporary_employee"`);
		await queryRunner.query(
			`CREATE TABLE "employee" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "valueDate" datetime, "isActive" boolean DEFAULT (1), "short_description" varchar(200), "description" varchar, "startedWorkOn" datetime, "endWork" datetime, "payPeriod" varchar, "billRateValue" integer, "billRateCurrency" varchar, "reWeeklyLimit" integer, "offerDate" datetime, "acceptDate" datetime, "rejectDate" datetime, "employeeLevel" varchar(500), "anonymousBonus" boolean, "averageIncome" numeric, "averageBonus" numeric, "totalWorkHours" numeric DEFAULT (0), "averageExpenses" numeric, "show_anonymous_bonus" boolean, "show_average_bonus" boolean, "show_average_expenses" boolean, "show_average_income" boolean, "show_billrate" boolean, "show_payperiod" boolean, "show_start_work_on" boolean, "isJobSearchActive" boolean, "linkedInUrl" varchar, "facebookUrl" varchar, "instagramUrl" varchar, "twitterUrl" varchar, "githubUrl" varchar, "gitlabUrl" varchar, "upworkUrl" varchar, "stackoverflowUrl" varchar, "isVerified" boolean, "isVetted" boolean, "totalJobs" numeric, "jobSuccess" numeric, "profile_link" varchar, "userId" varchar NOT NULL, "contactId" varchar, "organizationPositionId" varchar, "isTrackingEnabled" boolean DEFAULT (0), "deletedAt" datetime, "allowScreenshotCapture" boolean NOT NULL DEFAULT (1), "upworkId" varchar, "linkedInId" varchar, "isOnline" boolean DEFAULT (0), "isTrackingTime" boolean DEFAULT (0), "minimumBillingRate" integer, "isAway" boolean DEFAULT (0), "isArchived" boolean DEFAULT (0), "fix_relational_custom_fields" boolean, CONSTRAINT "REL_f4b0d329c4a3cf79ffe9d56504" UNIQUE ("userId"), CONSTRAINT "REL_1c0c1370ecd98040259625e17e" UNIQUE ("contactId"), CONSTRAINT "FK_4b3303a6b7eb92d237a4379734e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_c6a48286f3aa8ae903bee0d1e72" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1c0c1370ecd98040259625e17e2" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_5e719204dcafa8d6b2ecdeda130" FOREIGN KEY ("organizationPositionId") REFERENCES "organization_position" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "employee"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "valueDate", "isActive", "short_description", "description", "startedWorkOn", "endWork", "payPeriod", "billRateValue", "billRateCurrency", "reWeeklyLimit", "offerDate", "acceptDate", "rejectDate", "employeeLevel", "anonymousBonus", "averageIncome", "averageBonus", "totalWorkHours", "averageExpenses", "show_anonymous_bonus", "show_average_bonus", "show_average_expenses", "show_average_income", "show_billrate", "show_payperiod", "show_start_work_on", "isJobSearchActive", "linkedInUrl", "facebookUrl", "instagramUrl", "twitterUrl", "githubUrl", "gitlabUrl", "upworkUrl", "stackoverflowUrl", "isVerified", "isVetted", "totalJobs", "jobSuccess", "profile_link", "userId", "contactId", "organizationPositionId", "isTrackingEnabled", "deletedAt", "allowScreenshotCapture", "upworkId", "linkedInId", "isOnline", "isTrackingTime", "minimumBillingRate", "isAway", "isArchived", "fix_relational_custom_fields") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "valueDate", "isActive", "short_description", "description", "startedWorkOn", "endWork", "payPeriod", "billRateValue", "billRateCurrency", "reWeeklyLimit", "offerDate", "acceptDate", "rejectDate", "employeeLevel", "anonymousBonus", "averageIncome", "averageBonus", "totalWorkHours", "averageExpenses", "show_anonymous_bonus", "show_average_bonus", "show_average_expenses", "show_average_income", "show_billrate", "show_payperiod", "show_start_work_on", "isJobSearchActive", "linkedInUrl", "facebookUrl", "instagramUrl", "twitterUrl", "githubUrl", "gitlabUrl", "upworkUrl", "stackoverflowUrl", "isVerified", "isVetted", "totalJobs", "jobSuccess", "profile_link", "userId", "contactId", "organizationPositionId", "isTrackingEnabled", "deletedAt", "allowScreenshotCapture", "upworkId", "linkedInId", "isOnline", "isTrackingTime", "minimumBillingRate", "isAway", "isArchived", "fix_relational_custom_fields" FROM "temporary_employee"`
		);
		await queryRunner.query(`DROP TABLE "temporary_employee"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_5e719204dcafa8d6b2ecdeda13" ON "employee" ("organizationPositionId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_1c0c1370ecd98040259625e17e" ON "employee" ("contactId") `);
		await queryRunner.query(`CREATE INDEX "IDX_f4b0d329c4a3cf79ffe9d56504" ON "employee" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_96dfbcaa2990df01fe5bb39ccc" ON "employee" ("profile_link") `);
		await queryRunner.query(`CREATE INDEX "IDX_c6a48286f3aa8ae903bee0d1e7" ON "employee" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4b3303a6b7eb92d237a4379734" ON "employee" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_510cb87f5da169e57e694d1a5c" ON "employee" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_175b7be641928a31521224daa8" ON "employee" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_01237d04f882cf1ea794678e8d"`);
		await queryRunner.query(`DROP INDEX "IDX_48fae30026b4e166a3445fee6d"`);
		await queryRunner.query(`DROP INDEX "IDX_9516a627a131626d2a5738a05a"`);
		await queryRunner.query(`DROP INDEX "IDX_56e96cd218a185ed59b5a8e786"`);
		await queryRunner.query(`DROP INDEX "IDX_9537fae454ebebc98ee5adb3a2"`);
		await queryRunner.query(`DROP INDEX "IDX_710c71526edb89b2a7033abcdf"`);
		await queryRunner.query(`DROP INDEX "IDX_95ea18af6ef8123503d332240c"`);
		await queryRunner.query(`ALTER TABLE "employee_setting" RENAME TO "temporary_employee_setting"`);
		await queryRunner.query(
			`CREATE TABLE "employee_setting" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "month" integer NOT NULL, "year" integer NOT NULL, "settingType" varchar NOT NULL, "value" integer NOT NULL, "currency" varchar NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_95ea18af6ef8123503d332240c2" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_56e96cd218a185ed59b5a8e7869" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9516a627a131626d2a5738a05a8" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "employee_setting"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "month", "year", "settingType", "value", "currency", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "month", "year", "settingType", "value", "currency", "employeeId", "isActive", "isArchived", "deletedAt" FROM "temporary_employee_setting"`
		);
		await queryRunner.query(`DROP TABLE "temporary_employee_setting"`);
		await queryRunner.query(`CREATE INDEX "IDX_01237d04f882cf1ea794678e8d" ON "employee_setting" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_48fae30026b4e166a3445fee6d" ON "employee_setting" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_9516a627a131626d2a5738a05a" ON "employee_setting" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_56e96cd218a185ed59b5a8e786" ON "employee_setting" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_9537fae454ebebc98ee5adb3a2" ON "employee_setting" ("settingType") `);
		await queryRunner.query(`CREATE INDEX "IDX_710c71526edb89b2a7033abcdf" ON "employee_setting" ("currency") `);
		await queryRunner.query(`CREATE INDEX "IDX_95ea18af6ef8123503d332240c" ON "employee_setting" ("employeeId") `);
		await queryRunner.query(`DROP INDEX "IDX_3980b0fe1e757b092ea5323656"`);
		await queryRunner.query(`DROP INDEX "IDX_25f8915182128f377d84b60d26"`);
		await queryRunner.query(`DROP INDEX "IDX_0ac8526c48a3daa267c86225fb"`);
		await queryRunner.query(`DROP INDEX "IDX_6e570174fda71e97616e9d2eea"`);
		await queryRunner.query(`DROP INDEX "IDX_739f8cdce21cc72d400559ce00"`);
		await queryRunner.query(`DROP INDEX "IDX_a4b5a2ea2afecf1ee254f1a704"`);
		await queryRunner.query(`DROP INDEX "IDX_3ee5147bb1fde625fa33c0e956"`);
		await queryRunner.query(`DROP INDEX "IDX_5fde7be40b3c03bc0fdac0c2f6"`);
		await queryRunner.query(
			`ALTER TABLE "employee_recurring_expense" RENAME TO "temporary_employee_recurring_expense"`
		);
		await queryRunner.query(
			`CREATE TABLE "employee_recurring_expense" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "startDay" integer NOT NULL, "startMonth" integer NOT NULL, "startYear" integer NOT NULL, "startDate" datetime NOT NULL, "endDay" integer, "endMonth" integer, "endYear" integer, "endDate" datetime, "categoryName" varchar NOT NULL, "value" numeric NOT NULL, "currency" varchar NOT NULL, "parentRecurringExpenseId" varchar, "employeeId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_0ac8526c48a3daa267c86225fb5" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3ee5147bb1fde625fa33c0e956b" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_5fde7be40b3c03bc0fdac0c2f66" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "employee_recurring_expense"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "startDay", "startMonth", "startYear", "startDate", "endDay", "endMonth", "endYear", "endDate", "categoryName", "value", "currency", "parentRecurringExpenseId", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "startDay", "startMonth", "startYear", "startDate", "endDay", "endMonth", "endYear", "endDate", "categoryName", "value", "currency", "parentRecurringExpenseId", "employeeId", "isActive", "isArchived", "deletedAt" FROM "temporary_employee_recurring_expense"`
		);
		await queryRunner.query(`DROP TABLE "temporary_employee_recurring_expense"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_3980b0fe1e757b092ea5323656" ON "employee_recurring_expense" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_25f8915182128f377d84b60d26" ON "employee_recurring_expense" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0ac8526c48a3daa267c86225fb" ON "employee_recurring_expense" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_6e570174fda71e97616e9d2eea" ON "employee_recurring_expense" ("parentRecurringExpenseId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_739f8cdce21cc72d400559ce00" ON "employee_recurring_expense" ("currency") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a4b5a2ea2afecf1ee254f1a704" ON "employee_recurring_expense" ("categoryName") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3ee5147bb1fde625fa33c0e956" ON "employee_recurring_expense" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5fde7be40b3c03bc0fdac0c2f6" ON "employee_recurring_expense" ("tenantId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_aa98ea786d490db300d3dbbdb6"`);
		await queryRunner.query(`DROP INDEX "IDX_587d11ffbd87adb6dff367f3cd"`);
		await queryRunner.query(`DROP INDEX "IDX_d543336994b1f764c449e0b1d3"`);
		await queryRunner.query(`DROP INDEX "IDX_0f9cefa604913e1ab322591546"`);
		await queryRunner.query(`DROP INDEX "IDX_ba7b2ef5a9cd165a1e4e2ad0ef"`);
		await queryRunner.query(`DROP INDEX "IDX_329ebd01a757d1a0c3c4d628e2"`);
		await queryRunner.query(`ALTER TABLE "employee_phone" RENAME TO "temporary_employee_phone"`);
		await queryRunner.query(
			`CREATE TABLE "employee_phone" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "type" varchar, "phoneNumber" varchar NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_329ebd01a757d1a0c3c4d628e29" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_0f9cefa604913e1ab3225915469" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_d543336994b1f764c449e0b1d3c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "employee_phone"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "type", "phoneNumber", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "type", "phoneNumber", "employeeId", "isActive", "isArchived", "deletedAt" FROM "temporary_employee_phone"`
		);
		await queryRunner.query(`DROP TABLE "temporary_employee_phone"`);
		await queryRunner.query(`CREATE INDEX "IDX_aa98ea786d490db300d3dbbdb6" ON "employee_phone" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_587d11ffbd87adb6dff367f3cd" ON "employee_phone" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_d543336994b1f764c449e0b1d3" ON "employee_phone" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_0f9cefa604913e1ab322591546" ON "employee_phone" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_ba7b2ef5a9cd165a1e4e2ad0ef" ON "employee_phone" ("phoneNumber") `);
		await queryRunner.query(`CREATE INDEX "IDX_329ebd01a757d1a0c3c4d628e2" ON "employee_phone" ("employeeId") `);
		await queryRunner.query(`DROP INDEX "IDX_88a58d149404145ed7b3385387"`);
		await queryRunner.query(`DROP INDEX "IDX_90bd442869709bae9d1b18e489"`);
		await queryRunner.query(`DROP INDEX "IDX_d3fc52d497bc44d6f493dbedc3"`);
		await queryRunner.query(`DROP INDEX "IDX_c4668533292bf4526e61aedf74"`);
		await queryRunner.query(`ALTER TABLE "employee_level" RENAME TO "temporary_employee_level"`);
		await queryRunner.query(
			`CREATE TABLE "employee_level" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "level" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_c4668533292bf4526e61aedf74a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_d3fc52d497bc44d6f493dbedc3a" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "employee_level"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "level", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "level", "isActive", "isArchived", "deletedAt" FROM "temporary_employee_level"`
		);
		await queryRunner.query(`DROP TABLE "temporary_employee_level"`);
		await queryRunner.query(`CREATE INDEX "IDX_88a58d149404145ed7b3385387" ON "employee_level" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_90bd442869709bae9d1b18e489" ON "employee_level" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_d3fc52d497bc44d6f493dbedc3" ON "employee_level" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c4668533292bf4526e61aedf74" ON "employee_level" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_8fb47e8bfd26340ddaeabd24e5"`);
		await queryRunner.query(`DROP INDEX "IDX_c07390f325c847be7df93d0d17"`);
		await queryRunner.query(`DROP INDEX "IDX_91e0f7efcd17d20b5029fb1342"`);
		await queryRunner.query(`DROP INDEX "IDX_caf8363b0ed7d5f24ae866ba3b"`);
		await queryRunner.query(`DROP INDEX "IDX_6912685bbb0e303eab392978d9"`);
		await queryRunner.query(`DROP INDEX "IDX_0c5266f3f488add404f92d56ec"`);
		await queryRunner.query(`ALTER TABLE "employee_award" RENAME TO "temporary_employee_award"`);
		await queryRunner.query(
			`CREATE TABLE "employee_award" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "year" varchar NOT NULL, "employeeId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_0c5266f3f488add404f92d56ec7" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_caf8363b0ed7d5f24ae866ba3bb" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_91e0f7efcd17d20b5029fb1342d" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "employee_award"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "year", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "year", "employeeId", "isActive", "isArchived", "deletedAt" FROM "temporary_employee_award"`
		);
		await queryRunner.query(`DROP TABLE "temporary_employee_award"`);
		await queryRunner.query(`CREATE INDEX "IDX_8fb47e8bfd26340ddaeabd24e5" ON "employee_award" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_c07390f325c847be7df93d0d17" ON "employee_award" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_91e0f7efcd17d20b5029fb1342" ON "employee_award" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_caf8363b0ed7d5f24ae866ba3b" ON "employee_award" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_6912685bbb0e303eab392978d9" ON "employee_award" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_0c5266f3f488add404f92d56ec" ON "employee_award" ("employeeId") `);
		await queryRunner.query(`DROP INDEX "IDX_64c83df9d37d9ada96edb66557"`);
		await queryRunner.query(`DROP INDEX "IDX_d0219ada2359ede9e7b0d511ba"`);
		await queryRunner.query(`DROP INDEX "IDX_a35637bb659c59e18adb4f38f8"`);
		await queryRunner.query(`DROP INDEX "IDX_86cf36c137712e779dd7e2301e"`);
		await queryRunner.query(`ALTER TABLE "employee_appointment" RENAME TO "temporary_employee_appointment"`);
		await queryRunner.query(
			`CREATE TABLE "employee_appointment" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "employeeId" varchar, "agenda" varchar NOT NULL, "description" varchar, "location" varchar, "startDateTime" datetime NOT NULL, "endDateTime" datetime NOT NULL, "bufferTimeStart" boolean, "bufferTimeEnd" boolean, "bufferTimeInMins" integer, "breakTimeInMins" integer, "breakStartTime" datetime, "emails" varchar, "status" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_2f58132c57108540887dc3e88eb" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_86cf36c137712e779dd7e2301e6" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a35637bb659c59e18adb4f38f87" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "employee_appointment"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "employeeId", "agenda", "description", "location", "startDateTime", "endDateTime", "bufferTimeStart", "bufferTimeEnd", "bufferTimeInMins", "breakTimeInMins", "breakStartTime", "emails", "status", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "employeeId", "agenda", "description", "location", "startDateTime", "endDateTime", "bufferTimeStart", "bufferTimeEnd", "bufferTimeInMins", "breakTimeInMins", "breakStartTime", "emails", "status", "isActive", "isArchived", "deletedAt" FROM "temporary_employee_appointment"`
		);
		await queryRunner.query(`DROP TABLE "temporary_employee_appointment"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_64c83df9d37d9ada96edb66557" ON "employee_appointment" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d0219ada2359ede9e7b0d511ba" ON "employee_appointment" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a35637bb659c59e18adb4f38f8" ON "employee_appointment" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_86cf36c137712e779dd7e2301e" ON "employee_appointment" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_29d60114e1968c0cd68a19e3c5"`);
		await queryRunner.query(`DROP INDEX "IDX_e4932e0a726b9b07d81d8b6905"`);
		await queryRunner.query(`DROP INDEX "IDX_753e005a45556b5909e11937aa"`);
		await queryRunner.query(`DROP INDEX "IDX_c160fe6234675fac031aa3e7c5"`);
		await queryRunner.query(`DROP INDEX "IDX_274708db64fcce5448f2c4541c"`);
		await queryRunner.query(`DROP INDEX "IDX_7e688e6613930ba721b841db43"`);
		await queryRunner.query(`ALTER TABLE "email_template" RENAME TO "temporary_email_template"`);
		await queryRunner.query(
			`CREATE TABLE "email_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "languageCode" varchar NOT NULL, "mjml" text, "hbs" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_c160fe6234675fac031aa3e7c50" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_753e005a45556b5909e11937aaf" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "email_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "mjml", "hbs", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "mjml", "hbs", "isActive", "isArchived", "deletedAt" FROM "temporary_email_template"`
		);
		await queryRunner.query(`DROP TABLE "temporary_email_template"`);
		await queryRunner.query(`CREATE INDEX "IDX_29d60114e1968c0cd68a19e3c5" ON "email_template" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_e4932e0a726b9b07d81d8b6905" ON "email_template" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_753e005a45556b5909e11937aa" ON "email_template" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_c160fe6234675fac031aa3e7c5" ON "email_template" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_274708db64fcce5448f2c4541c" ON "email_template" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_7e688e6613930ba721b841db43" ON "email_template" ("languageCode") `);
		await queryRunner.query(`DROP INDEX "IDX_13247a755d17e7905d5bb4cfda"`);
		await queryRunner.query(`DROP INDEX "IDX_e3321e3575289b7ee1e8eb1042"`);
		await queryRunner.query(`DROP INDEX "IDX_4ac734f2a1a3c055dca04fba99"`);
		await queryRunner.query(`DROP INDEX "IDX_93799dfaeff51de06f1e02ac41"`);
		await queryRunner.query(`DROP INDEX "IDX_03d16a2fd43d7c601743440212"`);
		await queryRunner.query(`DROP INDEX "IDX_4be518a169bbcbfe92025ac574"`);
		await queryRunner.query(`DROP INDEX "IDX_9e80c9ec749dfda6dbe2cd9704"`);
		await queryRunner.query(`DROP INDEX "IDX_e37af4ab2ba0bf268bfd982634"`);
		await queryRunner.query(`ALTER TABLE "email_reset" RENAME TO "temporary_email_reset"`);
		await queryRunner.query(
			`CREATE TABLE "email_reset" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "email" varchar NOT NULL, "oldEmail" varchar NOT NULL, "code" varchar NOT NULL, "userId" varchar, "token" varchar, "expiredAt" datetime, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_93799dfaeff51de06f1e02ac414" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_e37af4ab2ba0bf268bfd9826345" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "email_reset"("id", "createdAt", "updatedAt", "tenantId", "email", "oldEmail", "code", "userId", "token", "expiredAt", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "email", "oldEmail", "code", "userId", "token", "expiredAt", "isActive", "isArchived", "deletedAt" FROM "temporary_email_reset"`
		);
		await queryRunner.query(`DROP TABLE "temporary_email_reset"`);
		await queryRunner.query(`CREATE INDEX "IDX_13247a755d17e7905d5bb4cfda" ON "email_reset" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_e3321e3575289b7ee1e8eb1042" ON "email_reset" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_4ac734f2a1a3c055dca04fba99" ON "email_reset" ("token") `);
		await queryRunner.query(`CREATE INDEX "IDX_93799dfaeff51de06f1e02ac41" ON "email_reset" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_03d16a2fd43d7c601743440212" ON "email_reset" ("email") `);
		await queryRunner.query(`CREATE INDEX "IDX_4be518a169bbcbfe92025ac574" ON "email_reset" ("oldEmail") `);
		await queryRunner.query(`CREATE INDEX "IDX_9e80c9ec749dfda6dbe2cd9704" ON "email_reset" ("code") `);
		await queryRunner.query(`CREATE INDEX "IDX_e37af4ab2ba0bf268bfd982634" ON "email_reset" ("userId") `);
		await queryRunner.query(`DROP INDEX "IDX_5956ce758c01ebf8a539e8d4f0"`);
		await queryRunner.query(`DROP INDEX "IDX_9033faf41b23c61ba201c48796"`);
		await queryRunner.query(`DROP INDEX "IDX_a954fda57cca81dc48446e73b8"`);
		await queryRunner.query(`DROP INDEX "IDX_0af511c44de7a16beb45cc3785"`);
		await queryRunner.query(`DROP INDEX "IDX_525f4873c6edc3d94559f88900"`);
		await queryRunner.query(`DROP INDEX "IDX_953df0eb0df3035baf140399f6"`);
		await queryRunner.query(`DROP INDEX "IDX_1261c457b3035b77719556995b"`);
		await queryRunner.query(`DROP INDEX "IDX_d825bc6da1c52a3900a9373260"`);
		await queryRunner.query(`DROP INDEX "IDX_9a69f7077e0333d2c848895a1b"`);
		await queryRunner.query(`ALTER TABLE "email_sent" RENAME TO "temporary_email_sent"`);
		await queryRunner.query(
			`CREATE TABLE "email_sent" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar, "content" varchar, "email" varchar NOT NULL, "isArchived" boolean DEFAULT (0), "userId" varchar, "emailTemplateId" varchar NOT NULL, "isActive" boolean DEFAULT (1), "status" varchar CHECK( "status" IN ('SENT','FAILED') ), "deletedAt" datetime, CONSTRAINT "FK_1261c457b3035b77719556995bf" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_525f4873c6edc3d94559f88900c" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_0af511c44de7a16beb45cc37852" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9033faf41b23c61ba201c487969" FOREIGN KEY ("emailTemplateId") REFERENCES "email_template" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "email_sent"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "content", "email", "isArchived", "userId", "emailTemplateId", "isActive", "status", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "content", "email", "isArchived", "userId", "emailTemplateId", "isActive", "status", "deletedAt" FROM "temporary_email_sent"`
		);
		await queryRunner.query(`DROP TABLE "temporary_email_sent"`);
		await queryRunner.query(`CREATE INDEX "IDX_5956ce758c01ebf8a539e8d4f0" ON "email_sent" ("status") `);
		await queryRunner.query(`CREATE INDEX "IDX_9033faf41b23c61ba201c48796" ON "email_sent" ("emailTemplateId") `);
		await queryRunner.query(`CREATE INDEX "IDX_a954fda57cca81dc48446e73b8" ON "email_sent" ("email") `);
		await queryRunner.query(`CREATE INDEX "IDX_0af511c44de7a16beb45cc3785" ON "email_sent" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_525f4873c6edc3d94559f88900" ON "email_sent" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_953df0eb0df3035baf140399f6" ON "email_sent" ("name") `);
		await queryRunner.query(`CREATE INDEX "IDX_1261c457b3035b77719556995b" ON "email_sent" ("userId") `);
		await queryRunner.query(`CREATE INDEX "IDX_d825bc6da1c52a3900a9373260" ON "email_sent" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_9a69f7077e0333d2c848895a1b" ON "email_sent" ("isArchived") `);
		await queryRunner.query(`DROP INDEX "IDX_443c561d45f6c57f3790a759ba"`);
		await queryRunner.query(`DROP INDEX "IDX_0d8c964237e5061627de82df80"`);
		await queryRunner.query(`DROP INDEX "IDX_46a3c00bfc3e36b4412d8bcdb0"`);
		await queryRunner.query(`DROP INDEX "IDX_38fb85abdf9995efcf217f5955"`);
		await queryRunner.query(`DROP INDEX "IDX_4b1ff44e6bae5065429dbab554"`);
		await queryRunner.query(`DROP INDEX "IDX_9211f5b62988df6e95522be7da"`);
		await queryRunner.query(`ALTER TABLE "deal" RENAME TO "temporary_deal"`);
		await queryRunner.query(
			`CREATE TABLE "deal" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "title" varchar NOT NULL, "probability" integer NOT NULL, "createdByUserId" varchar NOT NULL, "stageId" varchar NOT NULL, "clientId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "REL_1ae3abc0ae1dcf6c13f49b62b5" UNIQUE ("clientId"), CONSTRAINT "FK_1ae3abc0ae1dcf6c13f49b62b56" FOREIGN KEY ("clientId") REFERENCES "organization_contact" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9211f5b62988df6e95522be7daa" FOREIGN KEY ("stageId") REFERENCES "pipeline_stage" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4b1ff44e6bae5065429dbab554b" FOREIGN KEY ("createdByUserId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_38fb85abdf9995efcf217f59554" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_46a3c00bfc3e36b4412d8bcdb08" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "deal"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "probability", "createdByUserId", "stageId", "clientId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "probability", "createdByUserId", "stageId", "clientId", "isActive", "isArchived", "deletedAt" FROM "temporary_deal"`
		);
		await queryRunner.query(`DROP TABLE "temporary_deal"`);
		await queryRunner.query(`CREATE INDEX "IDX_443c561d45f6c57f3790a759ba" ON "deal" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_0d8c964237e5061627de82df80" ON "deal" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_46a3c00bfc3e36b4412d8bcdb0" ON "deal" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_38fb85abdf9995efcf217f5955" ON "deal" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_4b1ff44e6bae5065429dbab554" ON "deal" ("createdByUserId") `);
		await queryRunner.query(`CREATE INDEX "IDX_9211f5b62988df6e95522be7da" ON "deal" ("stageId") `);
		await queryRunner.query(`DROP INDEX "IDX_f10372f9d038d0954d5b20635a"`);
		await queryRunner.query(`DROP INDEX "IDX_e2c7d28bb07adc915d74437c7b"`);
		await queryRunner.query(`DROP INDEX "IDX_15a1306132d66c63ef31f7288c"`);
		await queryRunner.query(`DROP INDEX "IDX_2aa3fc8daa25beec4788d2be26"`);
		await queryRunner.query(`ALTER TABLE "custom_smtp" RENAME TO "temporary_custom_smtp"`);
		await queryRunner.query(
			`CREATE TABLE "custom_smtp" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "host" varchar NOT NULL, "port" integer NOT NULL, "secure" boolean NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "isValidate" boolean NOT NULL DEFAULT (0), "fromAddress" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_2aa3fc8daa25beec4788d2be26c" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_15a1306132d66c63ef31f7288c1" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "custom_smtp"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "host", "port", "secure", "username", "password", "isValidate", "fromAddress", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "host", "port", "secure", "username", "password", "isValidate", "fromAddress", "isActive", "isArchived", "deletedAt" FROM "temporary_custom_smtp"`
		);
		await queryRunner.query(`DROP TABLE "temporary_custom_smtp"`);
		await queryRunner.query(`CREATE INDEX "IDX_f10372f9d038d0954d5b20635a" ON "custom_smtp" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_e2c7d28bb07adc915d74437c7b" ON "custom_smtp" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_15a1306132d66c63ef31f7288c" ON "custom_smtp" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_2aa3fc8daa25beec4788d2be26" ON "custom_smtp" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_8203f1410475748bbbc6d3029d"`);
		await queryRunner.query(`DROP INDEX "IDX_03cc024ddc2f196dca7fead7cb"`);
		await queryRunner.query(`DROP INDEX "IDX_0b0fbda74f6c82c943e706a3cc"`);
		await queryRunner.query(`ALTER TABLE "currency" RENAME TO "temporary_currency"`);
		await queryRunner.query(
			`CREATE TABLE "currency" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isoCode" varchar NOT NULL, "currency" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime)`
		);
		await queryRunner.query(
			`INSERT INTO "currency"("id", "createdAt", "updatedAt", "isoCode", "currency", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "isoCode", "currency", "isActive", "isArchived", "deletedAt" FROM "temporary_currency"`
		);
		await queryRunner.query(`DROP TABLE "temporary_currency"`);
		await queryRunner.query(`CREATE INDEX "IDX_8203f1410475748bbbc6d3029d" ON "currency" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_03cc024ddc2f196dca7fead7cb" ON "currency" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_0b0fbda74f6c82c943e706a3cc" ON "currency" ("isoCode") `);
		await queryRunner.query(`DROP INDEX "IDX_6cd9b7ea6818e862217035436c"`);
		await queryRunner.query(`DROP INDEX "IDX_97ebcd8db30a408b5f907d6ff4"`);
		await queryRunner.query(`DROP INDEX "IDX_6eba1a52ee121d100c8a0a6510"`);
		await queryRunner.query(`ALTER TABLE "country" RENAME TO "temporary_country"`);
		await queryRunner.query(
			`CREATE TABLE "country" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isoCode" varchar NOT NULL, "country" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime)`
		);
		await queryRunner.query(
			`INSERT INTO "country"("id", "createdAt", "updatedAt", "isoCode", "country", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "isoCode", "country", "isActive", "isArchived", "deletedAt" FROM "temporary_country"`
		);
		await queryRunner.query(`DROP TABLE "temporary_country"`);
		await queryRunner.query(`CREATE INDEX "IDX_6cd9b7ea6818e862217035436c" ON "country" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_97ebcd8db30a408b5f907d6ff4" ON "country" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_6eba1a52ee121d100c8a0a6510" ON "country" ("isoCode") `);
		await queryRunner.query(`DROP INDEX "IDX_4164bd34bdcce8754641f0e567"`);
		await queryRunner.query(`DROP INDEX "IDX_05831d37eabeb6150f99c69784"`);
		await queryRunner.query(`DROP INDEX "IDX_7719d73cd16a9f57ecc6ac24b3"`);
		await queryRunner.query(`DROP INDEX "IDX_60468af1ce34043a900809c84f"`);
		await queryRunner.query(`ALTER TABLE "contact" RENAME TO "temporary_contact"`);
		await queryRunner.query(
			`CREATE TABLE "contact" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar, "firstName" varchar, "lastName" varchar, "country" varchar, "city" varchar, "address" varchar, "address2" varchar, "postcode" varchar, "latitude" numeric, "longitude" numeric, "regionCode" varchar, "fax" varchar, "fiscalInformation" varchar, "website" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_60468af1ce34043a900809c84f2" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_7719d73cd16a9f57ecc6ac24b3d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`
		);
		await queryRunner.query(
			`INSERT INTO "contact"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "firstName", "lastName", "country", "city", "address", "address2", "postcode", "latitude", "longitude", "regionCode", "fax", "fiscalInformation", "website", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "firstName", "lastName", "country", "city", "address", "address2", "postcode", "latitude", "longitude", "regionCode", "fax", "fiscalInformation", "website", "isActive", "isArchived", "deletedAt" FROM "temporary_contact"`
		);
		await queryRunner.query(`DROP TABLE "temporary_contact"`);
		await queryRunner.query(`CREATE INDEX "IDX_4164bd34bdcce8754641f0e567" ON "contact" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_05831d37eabeb6150f99c69784" ON "contact" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_7719d73cd16a9f57ecc6ac24b3" ON "contact" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_60468af1ce34043a900809c84f" ON "contact" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_af835b66fa10279103bd89e225"`);
		await queryRunner.query(`DROP INDEX "IDX_2b8091376a529383e23ba3356a"`);
		await queryRunner.query(`DROP INDEX "IDX_8b900e8a39f76125e610ab30c0"`);
		await queryRunner.query(`DROP INDEX "IDX_77ac426e04553ff1654421bce4"`);
		await queryRunner.query(`DROP INDEX "IDX_16fb27ffd1a99c6506c92ad57a"`);
		await queryRunner.query(`DROP INDEX "IDX_b674793a804b7d69d74c8f6c5b"`);
		await queryRunner.query(`DROP INDEX "IDX_1e3e8228e7df634fa4cec6322c"`);
		await queryRunner.query(`DROP INDEX "IDX_4ea108fd8b089237964d5f98fb"`);
		await queryRunner.query(`DROP INDEX "IDX_3930aa71e0fa24f09201811b1b"`);
		await queryRunner.query(`ALTER TABLE "candidate" RENAME TO "temporary_candidate"`);
		await queryRunner.query(
			`CREATE TABLE "candidate" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "rating" numeric, "valueDate" datetime, "appliedDate" datetime, "hiredDate" datetime, "status" varchar DEFAULT ('APPLIED'), "rejectDate" datetime, "candidateLevel" varchar(500), "reWeeklyLimit" integer, "billRateCurrency" varchar(255), "billRateValue" integer, "payPeriod" varchar, "cvUrl" varchar, "isArchived" boolean DEFAULT (0), "contactId" varchar, "organizationPositionId" varchar, "sourceId" varchar, "userId" varchar NOT NULL, "employeeId" varchar, "minimumBillingRate" integer, "isActive" boolean DEFAULT (1), "deletedAt" datetime, CONSTRAINT "REL_3930aa71e0fa24f09201811b1b" UNIQUE ("userId"), CONSTRAINT "REL_4ea108fd8b089237964d5f98fb" UNIQUE ("sourceId"), CONSTRAINT "REL_b674793a804b7d69d74c8f6c5b" UNIQUE ("contactId"), CONSTRAINT "UQ_91b20077aa92f9115764033cd06" UNIQUE ("employeeId"), CONSTRAINT "FK_3930aa71e0fa24f09201811b1bb" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4ea108fd8b089237964d5f98fba" FOREIGN KEY ("sourceId") REFERENCES "candidate_source" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_1e3e8228e7df634fa4cec6322c7" FOREIGN KEY ("organizationPositionId") REFERENCES "organization_position" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_b674793a804b7d69d74c8f6c5ba" FOREIGN KEY ("contactId") REFERENCES "contact" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_16fb27ffd1a99c6506c92ad57a7" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_77ac426e04553ff1654421bce4d" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_8b900e8a39f76125e610ab30c0e" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "rating", "valueDate", "appliedDate", "hiredDate", "status", "rejectDate", "candidateLevel", "reWeeklyLimit", "billRateCurrency", "billRateValue", "payPeriod", "cvUrl", "isArchived", "contactId", "organizationPositionId", "sourceId", "userId", "employeeId", "minimumBillingRate", "isActive", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "rating", "valueDate", "appliedDate", "hiredDate", "status", "rejectDate", "candidateLevel", "reWeeklyLimit", "billRateCurrency", "billRateValue", "payPeriod", "cvUrl", "isArchived", "contactId", "organizationPositionId", "sourceId", "userId", "employeeId", "minimumBillingRate", "isActive", "deletedAt" FROM "temporary_candidate"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate"`);
		await queryRunner.query(`CREATE INDEX "IDX_af835b66fa10279103bd89e225" ON "candidate" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_2b8091376a529383e23ba3356a" ON "candidate" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8b900e8a39f76125e610ab30c0" ON "candidate" ("employeeId") `);
		await queryRunner.query(`CREATE INDEX "IDX_77ac426e04553ff1654421bce4" ON "candidate" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_16fb27ffd1a99c6506c92ad57a" ON "candidate" ("organizationId") `);
		await queryRunner.query(`CREATE INDEX "IDX_b674793a804b7d69d74c8f6c5b" ON "candidate" ("contactId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_1e3e8228e7df634fa4cec6322c" ON "candidate" ("organizationPositionId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_4ea108fd8b089237964d5f98fb" ON "candidate" ("sourceId") `);
		await queryRunner.query(`CREATE INDEX "IDX_3930aa71e0fa24f09201811b1b" ON "candidate" ("userId") `);
		await queryRunner.query(`DROP INDEX "IDX_97aa0328b72e1bf919e61bccdc"`);
		await queryRunner.query(`DROP INDEX "IDX_199ca43300fa4e64239656a677"`);
		await queryRunner.query(`DROP INDEX "IDX_a6fecb615b07987b480defac64"`);
		await queryRunner.query(`DROP INDEX "IDX_9d46b8c5382acd4d4514bc5c62"`);
		await queryRunner.query(`DROP INDEX "IDX_063663c7e61e45d172d1b83265"`);
		await queryRunner.query(`ALTER TABLE "candidate_technology" RENAME TO "temporary_candidate_technology"`);
		await queryRunner.query(
			`CREATE TABLE "candidate_technology" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "rating" numeric, "interviewId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_063663c7e61e45d172d1b832656" FOREIGN KEY ("interviewId") REFERENCES "candidate_interview" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_9d46b8c5382acd4d4514bc5c62e" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_a6fecb615b07987b480defac647" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_technology"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "rating", "interviewId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "rating", "interviewId", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_technology"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_technology"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_97aa0328b72e1bf919e61bccdc" ON "candidate_technology" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_199ca43300fa4e64239656a677" ON "candidate_technology" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a6fecb615b07987b480defac64" ON "candidate_technology" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9d46b8c5382acd4d4514bc5c62" ON "candidate_technology" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_063663c7e61e45d172d1b83265" ON "candidate_technology" ("interviewId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_509101ab1a46a5934ee278d447"`);
		await queryRunner.query(`DROP INDEX "IDX_2be9182096747fb18cb8afb1f0"`);
		await queryRunner.query(`DROP INDEX "IDX_b2a1ba27a76dd819cd8294cce3"`);
		await queryRunner.query(`DROP INDEX "IDX_e92027b5280828cadd7cd6ea71"`);
		await queryRunner.query(`ALTER TABLE "candidate_source" RENAME TO "temporary_candidate_source"`);
		await queryRunner.query(
			`CREATE TABLE "candidate_source" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_e92027b5280828cadd7cd6ea719" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_b2a1ba27a76dd819cd8294cce38" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_source"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_source"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_source"`);
		await queryRunner.query(`CREATE INDEX "IDX_509101ab1a46a5934ee278d447" ON "candidate_source" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_2be9182096747fb18cb8afb1f0" ON "candidate_source" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_b2a1ba27a76dd819cd8294cce3" ON "candidate_source" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_e92027b5280828cadd7cd6ea71" ON "candidate_source" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_a38fe0c3f2ff0a4e475f2a1347"`);
		await queryRunner.query(`DROP INDEX "IDX_6907163d0bb8e9f0440b9bf2a7"`);
		await queryRunner.query(`DROP INDEX "IDX_8a07f780c6fce2b82830ab0687"`);
		await queryRunner.query(`DROP INDEX "IDX_d7986743e7f11720349a6c9557"`);
		await queryRunner.query(`ALTER TABLE "candidate_skill" RENAME TO "temporary_candidate_skill"`);
		await queryRunner.query(
			`CREATE TABLE "candidate_skill" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "candidateId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_492548e6c176f5655adfae9f5ea" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d7986743e7f11720349a6c95572" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8a07f780c6fce2b82830ab06877" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_skill"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "candidateId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "candidateId", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_skill"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_skill"`);
		await queryRunner.query(`CREATE INDEX "IDX_a38fe0c3f2ff0a4e475f2a1347" ON "candidate_skill" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_6907163d0bb8e9f0440b9bf2a7" ON "candidate_skill" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_8a07f780c6fce2b82830ab0687" ON "candidate_skill" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_d7986743e7f11720349a6c9557" ON "candidate_skill" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_ff6776d92db4ef71edbfba9903"`);
		await queryRunner.query(`DROP INDEX "IDX_afe01503d4337c9623c06f22df"`);
		await queryRunner.query(`DROP INDEX "IDX_045de7c208adcd0c68c0a65174"`);
		await queryRunner.query(`DROP INDEX "IDX_d321f4547ed467d07cce1e7d9a"`);
		await queryRunner.query(`DROP INDEX "IDX_a0d171f45bdbcf2b990c0c37c3"`);
		await queryRunner.query(
			`ALTER TABLE "candidate_personal_quality" RENAME TO "temporary_candidate_personal_quality"`
		);
		await queryRunner.query(
			`CREATE TABLE "candidate_personal_quality" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "rating" numeric, "interviewId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_a0d171f45bdbcf2b990c0c37c32" FOREIGN KEY ("interviewId") REFERENCES "candidate_interview" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d321f4547ed467d07cce1e7d9a5" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_045de7c208adcd0c68c0a651748" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_personal_quality"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "rating", "interviewId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "rating", "interviewId", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_personal_quality"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_personal_quality"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_ff6776d92db4ef71edbfba9903" ON "candidate_personal_quality" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_afe01503d4337c9623c06f22df" ON "candidate_personal_quality" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_045de7c208adcd0c68c0a65174" ON "candidate_personal_quality" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d321f4547ed467d07cce1e7d9a" ON "candidate_personal_quality" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a0d171f45bdbcf2b990c0c37c3" ON "candidate_personal_quality" ("interviewId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_2043abff09f084fb8690009fb8"`);
		await queryRunner.query(`DROP INDEX "IDX_b9132118c3a98c4c48e417c0c5"`);
		await queryRunner.query(`DROP INDEX "IDX_f0ca69c78eea92c95d9044764a"`);
		await queryRunner.query(`DROP INDEX "IDX_5f1e315db848990dfffa72817c"`);
		await queryRunner.query(`DROP INDEX "IDX_ecb65075e94b47bbab11cfa5a1"`);
		await queryRunner.query(`DROP INDEX "IDX_9e7b20eb3dfa082b83b198fdad"`);
		await queryRunner.query(`ALTER TABLE "candidate_interviewer" RENAME TO "temporary_candidate_interviewer"`);
		await queryRunner.query(
			`CREATE TABLE "candidate_interviewer" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "interviewId" varchar NOT NULL, "employeeId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_9e7b20eb3dfa082b83b198fdad4" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ecb65075e94b47bbab11cfa5a1e" FOREIGN KEY ("interviewId") REFERENCES "candidate_interview" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5f1e315db848990dfffa72817ca" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f0ca69c78eea92c95d9044764a2" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_interviewer"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "interviewId", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "interviewId", "employeeId", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_interviewer"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_interviewer"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_2043abff09f084fb8690009fb8" ON "candidate_interviewer" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b9132118c3a98c4c48e417c0c5" ON "candidate_interviewer" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_f0ca69c78eea92c95d9044764a" ON "candidate_interviewer" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_5f1e315db848990dfffa72817c" ON "candidate_interviewer" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ecb65075e94b47bbab11cfa5a1" ON "candidate_interviewer" ("interviewId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9e7b20eb3dfa082b83b198fdad" ON "candidate_interviewer" ("employeeId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_7b49ce2928b327213f2de66b95"`);
		await queryRunner.query(`DROP INDEX "IDX_b9191cf49f8cd1f192cb74233c"`);
		await queryRunner.query(`DROP INDEX "IDX_91996439c4baafee8395d3df15"`);
		await queryRunner.query(`DROP INDEX "IDX_03be41e88b1fecfe4e24d6b04b"`);
		await queryRunner.query(`DROP INDEX "IDX_59b765e6d13d83dba4852a43eb"`);
		await queryRunner.query(`ALTER TABLE "candidate_interview" RENAME TO "temporary_candidate_interview"`);
		await queryRunner.query(
			`CREATE TABLE "candidate_interview" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "title" varchar NOT NULL, "startTime" datetime, "endTime" datetime, "location" varchar, "note" varchar, "isArchived" boolean DEFAULT (0), "rating" numeric, "candidateId" varchar, "isActive" boolean DEFAULT (1), "deletedAt" datetime, CONSTRAINT "FK_59b765e6d13d83dba4852a43eb5" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_03be41e88b1fecfe4e24d6b04b2" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_91996439c4baafee8395d3df153" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_interview"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "startTime", "endTime", "location", "note", "isArchived", "rating", "candidateId", "isActive", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "title", "startTime", "endTime", "location", "note", "isArchived", "rating", "candidateId", "isActive", "deletedAt" FROM "temporary_candidate_interview"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_interview"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_7b49ce2928b327213f2de66b95" ON "candidate_interview" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_b9191cf49f8cd1f192cb74233c" ON "candidate_interview" ("isActive") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_91996439c4baafee8395d3df15" ON "candidate_interview" ("candidateId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_03be41e88b1fecfe4e24d6b04b" ON "candidate_interview" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_59b765e6d13d83dba4852a43eb" ON "candidate_interview" ("tenantId") `);
		await queryRunner.query(`DROP INDEX "IDX_05ed49a5ebdd5ec533f913b620"`);
		await queryRunner.query(`DROP INDEX "IDX_c660aef2ca5aff9dbf45a9a4bb"`);
		await queryRunner.query(`DROP INDEX "IDX_6cb21fa0f65ff69679966c836f"`);
		await queryRunner.query(`DROP INDEX "IDX_3a6928f8501fce33820721a8fe"`);
		await queryRunner.query(`DROP INDEX "IDX_98c008fd8cf597e83dcdccfd16"`);
		await queryRunner.query(`DROP INDEX "IDX_0862c274d336126b951bfe009a"`);
		await queryRunner.query(`ALTER TABLE "candidate_feedback" RENAME TO "temporary_candidate_feedback"`);
		await queryRunner.query(
			`CREATE TABLE "candidate_feedback" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "description" varchar, "rating" numeric, "status" varchar, "candidateId" varchar, "interviewId" varchar, "interviewerId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "REL_44f3d80c3293e1de038c87f115" UNIQUE ("interviewerId"), CONSTRAINT "FK_44f3d80c3293e1de038c87f115d" FOREIGN KEY ("interviewerId") REFERENCES "candidate_interviewer" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_0862c274d336126b951bfe009a7" FOREIGN KEY ("interviewId") REFERENCES "candidate_interview" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_98c008fd8cf597e83dcdccfd161" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3a6928f8501fce33820721a8fe8" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_6cb21fa0f65ff69679966c836f2" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_feedback"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "rating", "status", "candidateId", "interviewId", "interviewerId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "description", "rating", "status", "candidateId", "interviewId", "interviewerId", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_feedback"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_feedback"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_05ed49a5ebdd5ec533f913b620" ON "candidate_feedback" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_c660aef2ca5aff9dbf45a9a4bb" ON "candidate_feedback" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_6cb21fa0f65ff69679966c836f" ON "candidate_feedback" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_3a6928f8501fce33820721a8fe" ON "candidate_feedback" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_98c008fd8cf597e83dcdccfd16" ON "candidate_feedback" ("candidateId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0862c274d336126b951bfe009a" ON "candidate_feedback" ("interviewId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_c24bce6dd33e56ef8e8dacef1a"`);
		await queryRunner.query(`DROP INDEX "IDX_dafa68d060cf401d5f62a57ad4"`);
		await queryRunner.query(`DROP INDEX "IDX_8dcf5fc8bc7f77a80b0fc648bf"`);
		await queryRunner.query(`DROP INDEX "IDX_a50eb955f940ca93e044d175c6"`);
		await queryRunner.query(`ALTER TABLE "candidate_experience" RENAME TO "temporary_candidate_experience"`);
		await queryRunner.query(
			`CREATE TABLE "candidate_experience" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "occupation" varchar NOT NULL, "duration" varchar NOT NULL, "description" varchar, "candidateId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_cf75465b3663652a28cf1841ce2" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a50eb955f940ca93e044d175c62" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8dcf5fc8bc7f77a80b0fc648bfc" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_experience"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "occupation", "duration", "description", "candidateId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "occupation", "duration", "description", "candidateId", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_experience"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_experience"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_c24bce6dd33e56ef8e8dacef1a" ON "candidate_experience" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_dafa68d060cf401d5f62a57ad4" ON "candidate_experience" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_8dcf5fc8bc7f77a80b0fc648bf" ON "candidate_experience" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_a50eb955f940ca93e044d175c6" ON "candidate_experience" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_b443c78c3796f2e9aab05a2bb9"`);
		await queryRunner.query(`DROP INDEX "IDX_336eb14606016757d2302efa4d"`);
		await queryRunner.query(`DROP INDEX "IDX_00cdd9ed7571be8e2c8d09e7cd"`);
		await queryRunner.query(`DROP INDEX "IDX_f660af89b2c69fea2334508cbb"`);
		await queryRunner.query(`ALTER TABLE "candidate_education" RENAME TO "temporary_candidate_education"`);
		await queryRunner.query(
			`CREATE TABLE "candidate_education" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "schoolName" varchar NOT NULL, "degree" varchar NOT NULL, "field" varchar NOT NULL, "completionDate" datetime NOT NULL, "notes" varchar, "candidateId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_59b61ba52a58851cfc85b1e6c66" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_f660af89b2c69fea2334508cbbd" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_00cdd9ed7571be8e2c8d09e7cd4" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_education"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "schoolName", "degree", "field", "completionDate", "notes", "candidateId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "schoolName", "degree", "field", "completionDate", "notes", "candidateId", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_education"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_education"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_b443c78c3796f2e9aab05a2bb9" ON "candidate_education" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_336eb14606016757d2302efa4d" ON "candidate_education" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_00cdd9ed7571be8e2c8d09e7cd" ON "candidate_education" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_f660af89b2c69fea2334508cbb" ON "candidate_education" ("organizationId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_3ed4bac12d0ca32eada4ea5a49"`);
		await queryRunner.query(`DROP INDEX "IDX_bf8070715e42b3afe9730e7b30"`);
		await queryRunner.query(`DROP INDEX "IDX_4d9b7ab09f9f9517d488b5fed1"`);
		await queryRunner.query(`DROP INDEX "IDX_d108a827199fda86a9ec216989"`);
		await queryRunner.query(`DROP INDEX "IDX_3f9053719c9d11ebdea03e5a2d"`);
		await queryRunner.query(`ALTER TABLE "candidate_document" RENAME TO "temporary_candidate_document"`);
		await queryRunner.query(
			`CREATE TABLE "candidate_document" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "documentUrl" varchar, "candidateId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_3f9053719c9d11ebdea03e5a2d4" FOREIGN KEY ("candidateId") REFERENCES "candidate" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d108a827199fda86a9ec216989a" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_4d9b7ab09f9f9517d488b5fed1e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_document"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "documentUrl", "candidateId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "documentUrl", "candidateId", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_document"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_document"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_3ed4bac12d0ca32eada4ea5a49" ON "candidate_document" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_bf8070715e42b3afe9730e7b30" ON "candidate_document" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_4d9b7ab09f9f9517d488b5fed1" ON "candidate_document" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_d108a827199fda86a9ec216989" ON "candidate_document" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3f9053719c9d11ebdea03e5a2d" ON "candidate_document" ("candidateId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_fcab96cef60fd8bccac610ccef"`);
		await queryRunner.query(`DROP INDEX "IDX_0a417dafb1dd14eb92a69fa641"`);
		await queryRunner.query(`DROP INDEX "IDX_9d5bd131452ef689df2b46551b"`);
		await queryRunner.query(`DROP INDEX "IDX_b106406e94bb7317493efc2c98"`);
		await queryRunner.query(`DROP INDEX "IDX_d1d16bc87d3afaf387f34cdceb"`);
		await queryRunner.query(`DROP INDEX "IDX_ba4c376b2069aa82745d4e9682"`);
		await queryRunner.query(`DROP INDEX "IDX_159f821dd214792f1d2ad9cff7"`);
		await queryRunner.query(
			`ALTER TABLE "candidate_criterion_rating" RENAME TO "temporary_candidate_criterion_rating"`
		);
		await queryRunner.query(
			`CREATE TABLE "candidate_criterion_rating" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "rating" integer NOT NULL, "technologyId" varchar, "personalQualityId" varchar, "feedbackId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_159f821dd214792f1d2ad9cff7c" FOREIGN KEY ("feedbackId") REFERENCES "candidate_feedback" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ba4c376b2069aa82745d4e96822" FOREIGN KEY ("personalQualityId") REFERENCES "candidate_personal_quality" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d1d16bc87d3afaf387f34cdceb7" FOREIGN KEY ("technologyId") REFERENCES "candidate_technology" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_b106406e94bb7317493efc2c989" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_9d5bd131452ef689df2b46551b4" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "candidate_criterion_rating"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "rating", "technologyId", "personalQualityId", "feedbackId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "rating", "technologyId", "personalQualityId", "feedbackId", "isActive", "isArchived", "deletedAt" FROM "temporary_candidate_criterion_rating"`
		);
		await queryRunner.query(`DROP TABLE "temporary_candidate_criterion_rating"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_fcab96cef60fd8bccac610ccef" ON "candidate_criterion_rating" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0a417dafb1dd14eb92a69fa641" ON "candidate_criterion_rating" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_9d5bd131452ef689df2b46551b" ON "candidate_criterion_rating" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_b106406e94bb7317493efc2c98" ON "candidate_criterion_rating" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_d1d16bc87d3afaf387f34cdceb" ON "candidate_criterion_rating" ("technologyId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_ba4c376b2069aa82745d4e9682" ON "candidate_criterion_rating" ("personalQualityId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_159f821dd214792f1d2ad9cff7" ON "candidate_criterion_rating" ("feedbackId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_a2eb41b1d6ee72de9486558199"`);
		await queryRunner.query(`DROP INDEX "IDX_1d8e3566b66fbad38b6e2290a2"`);
		await queryRunner.query(`DROP INDEX "IDX_a3b32d609a4c884a776ab883be"`);
		await queryRunner.query(`DROP INDEX "IDX_e8b7694e86fe9534778832f90c"`);
		await queryRunner.query(`ALTER TABLE "social_account" RENAME TO "temporary_social_account"`);
		await queryRunner.query(
			`CREATE TABLE "social_account" ("deletedAt" datetime, "id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "tenantId" varchar, "provider" varchar NOT NULL, "providerAccountId" varchar NOT NULL, "userId" varchar NOT NULL, CONSTRAINT "FK_e8b7694e86fe9534778832f90c0" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a3b32d609a4c884a776ab883be3" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "social_account"("deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "provider", "providerAccountId", "userId") SELECT "deletedAt", "id", "createdAt", "updatedAt", "isActive", "isArchived", "tenantId", "provider", "providerAccountId", "userId" FROM "temporary_social_account"`
		);
		await queryRunner.query(`DROP TABLE "temporary_social_account"`);
		await queryRunner.query(`CREATE INDEX "IDX_a2eb41b1d6ee72de9486558199" ON "social_account" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1d8e3566b66fbad38b6e2290a2" ON "social_account" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_a3b32d609a4c884a776ab883be" ON "social_account" ("tenantId") `);
		await queryRunner.query(`CREATE INDEX "IDX_e8b7694e86fe9534778832f90c" ON "social_account" ("userId") `);
		await queryRunner.query(`DROP INDEX "IDX_3aabb2cdf5b6e0df87cb94bdca"`);
		await queryRunner.query(`DROP INDEX "IDX_3e20b617c7d7a87b8bf53ddcbe"`);
		await queryRunner.query(`DROP INDEX "IDX_f008a481cb4eed547704bb9d83"`);
		await queryRunner.query(`DROP INDEX "IDX_d544bd3a63634a4438509ac958"`);
		await queryRunner.query(`DROP INDEX "IDX_46ed3c2287423f5dc089100fee"`);
		await queryRunner.query(`ALTER TABLE "availability_slot" RENAME TO "temporary_availability_slot"`);
		await queryRunner.query(
			`CREATE TABLE "availability_slot" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "startTime" datetime NOT NULL, "endTime" datetime NOT NULL, "allDay" boolean NOT NULL, "type" text, "employeeId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_46ed3c2287423f5dc089100feeb" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_d544bd3a63634a4438509ac958d" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f008a481cb4eed547704bb9d839" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "availability_slot"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "startTime", "endTime", "allDay", "type", "employeeId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "startTime", "endTime", "allDay", "type", "employeeId", "isActive", "isArchived", "deletedAt" FROM "temporary_availability_slot"`
		);
		await queryRunner.query(`DROP TABLE "temporary_availability_slot"`);
		await queryRunner.query(`CREATE INDEX "IDX_3aabb2cdf5b6e0df87cb94bdca" ON "availability_slot" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_3e20b617c7d7a87b8bf53ddcbe" ON "availability_slot" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_f008a481cb4eed547704bb9d83" ON "availability_slot" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_d544bd3a63634a4438509ac958" ON "availability_slot" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_46ed3c2287423f5dc089100fee" ON "availability_slot" ("employeeId") `);
		await queryRunner.query(`DROP INDEX "IDX_f50ce5a39d610cfcd9da9652b1"`);
		await queryRunner.query(`DROP INDEX "IDX_338364927c68961167606e989c"`);
		await queryRunner.query(`DROP INDEX "IDX_1462391059ebe137645098d727"`);
		await queryRunner.query(`DROP INDEX "IDX_dfe3b357df3ce136917b1f0984"`);
		await queryRunner.query(`DROP INDEX "IDX_45f32a5a12d42fba17fe62a279"`);
		await queryRunner.query(`ALTER TABLE "approval_policy" RENAME TO "temporary_approval_policy"`);
		await queryRunner.query(
			`CREATE TABLE "approval_policy" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "description" varchar, "approvalType" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_dfe3b357df3ce136917b1f09843" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_1462391059ebe137645098d7276" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "approval_policy"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "approvalType", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "description", "approvalType", "isActive", "isArchived", "deletedAt" FROM "temporary_approval_policy"`
		);
		await queryRunner.query(`DROP TABLE "temporary_approval_policy"`);
		await queryRunner.query(`CREATE INDEX "IDX_f50ce5a39d610cfcd9da9652b1" ON "approval_policy" ("isArchived") `);
		await queryRunner.query(`CREATE INDEX "IDX_338364927c68961167606e989c" ON "approval_policy" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_1462391059ebe137645098d727" ON "approval_policy" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_dfe3b357df3ce136917b1f0984" ON "approval_policy" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_45f32a5a12d42fba17fe62a279" ON "approval_policy" ("name") `);
		await queryRunner.query(`DROP INDEX "IDX_2a6f8c4b8da6f85e2903daf5c3"`);
		await queryRunner.query(`DROP INDEX "IDX_379af16b0aeed6a4d8f15c53bc"`);
		await queryRunner.query(`DROP INDEX "IDX_2c0494466d5a7e1165cea3dca9"`);
		await queryRunner.query(`DROP INDEX "IDX_3c3a62226896345c4716bfe1d9"`);
		await queryRunner.query(`DROP INDEX "IDX_0ddc50b7521b9a905d9ca8c8ba"`);
		await queryRunner.query(`DROP INDEX "IDX_e9ca170a0fae05e44a9bd137d8"`);
		await queryRunner.query(`ALTER TABLE "appointment_employee" RENAME TO "temporary_appointment_employee"`);
		await queryRunner.query(
			`CREATE TABLE "appointment_employee" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "appointmentId" varchar NOT NULL, "employeeId" varchar NOT NULL, "employeeAppointmentId" varchar, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_e9ca170a0fae05e44a9bd137d8b" FOREIGN KEY ("employeeAppointmentId") REFERENCES "employee_appointment" ("id") ON DELETE SET NULL ON UPDATE NO ACTION, CONSTRAINT "FK_0ddc50b7521b9a905d9ca8c8ba3" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3c3a62226896345c4716bfe1d96" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2c0494466d5a7e1165cea3dca98" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "appointment_employee"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "appointmentId", "employeeId", "employeeAppointmentId", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "appointmentId", "employeeId", "employeeAppointmentId", "isActive", "isArchived", "deletedAt" FROM "temporary_appointment_employee"`
		);
		await queryRunner.query(`DROP TABLE "temporary_appointment_employee"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_2a6f8c4b8da6f85e2903daf5c3" ON "appointment_employee" ("isArchived") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_379af16b0aeed6a4d8f15c53bc" ON "appointment_employee" ("isActive") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_2c0494466d5a7e1165cea3dca9" ON "appointment_employee" ("tenantId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_3c3a62226896345c4716bfe1d9" ON "appointment_employee" ("organizationId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_0ddc50b7521b9a905d9ca8c8ba" ON "appointment_employee" ("employeeId") `
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_e9ca170a0fae05e44a9bd137d8" ON "appointment_employee" ("employeeAppointmentId") `
		);
		await queryRunner.query(`DROP INDEX "IDX_7ac2c1c487dd77fe38c2d571ea"`);
		await queryRunner.query(`DROP INDEX "IDX_5cf7c007fc9c83bee748f08806"`);
		await queryRunner.query(`DROP INDEX "IDX_2ca6a49062a4ed884e413bf572"`);
		await queryRunner.query(`DROP INDEX "IDX_e66511b175393255c6c4e7b007"`);
		await queryRunner.query(`DROP INDEX "IDX_968c1c9a131a61a3720b3a72f6"`);
		await queryRunner.query(`DROP INDEX "IDX_a841eabc6b656c965d8846223e"`);
		await queryRunner.query(`ALTER TABLE "accounting_template" RENAME TO "temporary_accounting_template"`);
		await queryRunner.query(
			`CREATE TABLE "accounting_template" ("id" varchar PRIMARY KEY NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "tenantId" varchar, "organizationId" varchar, "name" varchar NOT NULL, "languageCode" varchar NOT NULL, "mjml" text, "hbs" varchar NOT NULL, "templateType" varchar NOT NULL, "isActive" boolean DEFAULT (1), "isArchived" boolean DEFAULT (0), "deletedAt" datetime, CONSTRAINT "FK_e66511b175393255c6c4e7b007f" FOREIGN KEY ("organizationId") REFERENCES "organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_2ca6a49062a4ed884e413bf572e" FOREIGN KEY ("tenantId") REFERENCES "tenant" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`
		);
		await queryRunner.query(
			`INSERT INTO "accounting_template"("id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "mjml", "hbs", "templateType", "isActive", "isArchived", "deletedAt") SELECT "id", "createdAt", "updatedAt", "tenantId", "organizationId", "name", "languageCode", "mjml", "hbs", "templateType", "isActive", "isArchived", "deletedAt" FROM "temporary_accounting_template"`
		);
		await queryRunner.query(`DROP TABLE "temporary_accounting_template"`);
		await queryRunner.query(
			`CREATE INDEX "IDX_7ac2c1c487dd77fe38c2d571ea" ON "accounting_template" ("isArchived") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_5cf7c007fc9c83bee748f08806" ON "accounting_template" ("isActive") `);
		await queryRunner.query(`CREATE INDEX "IDX_2ca6a49062a4ed884e413bf572" ON "accounting_template" ("tenantId") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_e66511b175393255c6c4e7b007" ON "accounting_template" ("organizationId") `
		);
		await queryRunner.query(`CREATE INDEX "IDX_968c1c9a131a61a3720b3a72f6" ON "accounting_template" ("name") `);
		await queryRunner.query(
			`CREATE INDEX "IDX_a841eabc6b656c965d8846223e" ON "accounting_template" ("languageCode") `
		);
	}

	/**
	 * MySQL Up Migration
	 *
	 * @param queryRunner
	 */
	public async mysqlUpQueryRunner(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`ALTER TABLE \`accounting_template\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`appointment_employee\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`approval_policy\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`availability_slot\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`social_account\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_criterion_rating\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_document\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_education\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_experience\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_feedback\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_interview\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_interviewer\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_personal_quality\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_skill\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_source\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate_technology\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`candidate\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`contact\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`country\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`currency\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`custom_smtp\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`deal\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`email_sent\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`email_reset\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`email_template\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`employee_appointment\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`employee_award\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`employee_level\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`employee_phone\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`employee_recurring_expense\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`employee_setting\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`employee\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`equipment_sharing_policy\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`equipment_sharing\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`equipment\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`estimate_email\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`event_type\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`expense_category\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`expense\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`import-history\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`import-record\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`feature_organization\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`feature\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`goal_general_setting\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`goal_kpi_template\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`goal_kpi\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`goal_template\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`goal_time_frame\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`goal\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`image_asset\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`income\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`integration_entity_setting_tied\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`integration_entity_setting\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`integration_map\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`integration_setting\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`integration_tenant\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`integration_type\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`integration\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`invite\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`invoice_estimate_history\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`invoice_item\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`invoice\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`key_result_template\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`key_result_update\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`key_result\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`language\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`merchant\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_award\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_contact\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_department\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_document\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_employment_type\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_language\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_position\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_project\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_project_module\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_recurring_expense\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_sprint\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_task_setting\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_team_employee\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_team_join_request\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_team\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_vendor\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`password_reset\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`payment\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`pipeline_stage\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`pipeline\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_category_translation\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_category\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_option_group\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_option_group_translation\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_option_translation\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_option\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_variant_setting\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_type_translation\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_type\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_variant_price\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_variant\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_translation\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`report_category\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`report_organization\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`report\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`request_approval_employee\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`request_approval_team\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`request_approval\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`role_permission\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`role\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`skill\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`tag\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`daily_plan\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`task_estimation\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`issue_type\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`task\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`task\` ADD \`isDraft\` tinyint NULL DEFAULT 0`);
		await queryRunner.query(`ALTER TABLE \`task_linked_issues\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`task_priority\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`task_related_issue_type\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`task_size\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`task_status\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`task_status\` ADD \`isDefault\` tinyint NOT NULL DEFAULT 0`);
		await queryRunner.query(`ALTER TABLE \`task_version\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`tenant_setting\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`tenant\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`time_off_policy\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`time_off_request\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`activity\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`screenshot\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`time_log\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`time_slot\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`time_slot_minute\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`timesheet\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`user_organization\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`user\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`warehouse_product\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`warehouse_product_variant\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`warehouse\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`changelog\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`organization_github_repository\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(
			`ALTER TABLE \`organization_github_repository_issue\` ADD \`archivedAt\` datetime NULL`
		);
		await queryRunner.query(`ALTER TABLE \`proposal\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`employee_proposal_template\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`job_search_occupation\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`job_search_category\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(
			`ALTER TABLE \`employee_upwork_job_search_criterion\` ADD \`archivedAt\` datetime NULL`
		);
		await queryRunner.query(`ALTER TABLE \`job_preset\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(
			`ALTER TABLE \`job_preset_upwork_job_search_criterion\` ADD \`archivedAt\` datetime NULL`
		);
		await queryRunner.query(`ALTER TABLE \`knowledge_base\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`knowledge_base_article\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`knowledge_base_author\` ADD \`archivedAt\` datetime NULL`);
		await queryRunner.query(`ALTER TABLE \`product_review\` ADD \`archivedAt\` datetime NULL`);
	}

	/**
	 * MySQL Down Migration
	 *
	 * @param queryRunner
	 */
	public async mysqlDownQueryRunner(queryRunner: QueryRunner): Promise<any> {
		await queryRunner.query(`ALTER TABLE \`product_review\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`knowledge_base_author\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`knowledge_base_article\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`knowledge_base\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`job_preset_upwork_job_search_criterion\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`job_preset\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`employee_upwork_job_search_criterion\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`job_search_category\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`job_search_occupation\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`employee_proposal_template\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`proposal\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_github_repository_issue\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_github_repository\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`changelog\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`warehouse\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`warehouse_product_variant\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`warehouse_product\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`user_organization\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`timesheet\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`time_slot_minute\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`time_slot\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`time_log\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`screenshot\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`activity\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`time_off_request\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`time_off_policy\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`tenant\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`tenant_setting\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`task_version\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`task_status\` DROP COLUMN \`isDefault\``);
		await queryRunner.query(`ALTER TABLE \`task_status\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`task_size\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`task_related_issue_type\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`task_priority\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`task_linked_issues\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`isDraft\``);
		await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`issue_type\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`task_estimation\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`daily_plan\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`tag\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`skill\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`role\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`role_permission\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`request_approval\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`request_approval_team\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`request_approval_employee\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`report\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`report_organization\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`report_category\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_translation\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_variant\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_variant_price\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_type\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_type_translation\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_variant_setting\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_option\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_option_translation\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_option_group_translation\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_option_group\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_category\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`product_category_translation\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`pipeline\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`pipeline_stage\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`password_reset\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_vendor\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_team\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_team_join_request\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_team_employee\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_task_setting\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_sprint\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_recurring_expense\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_project_module\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_project\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_position\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_language\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_employment_type\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_document\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_department\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_contact\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`organization_award\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`merchant\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`language\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`key_result\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`key_result_update\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`key_result_template\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`invoice\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`invoice_item\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`invoice_estimate_history\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`invite\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`integration\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`integration_type\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`integration_tenant\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`integration_setting\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`integration_map\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`integration_entity_setting\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`integration_entity_setting_tied\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`income\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`image_asset\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`goal\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`goal_time_frame\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`goal_template\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`goal_kpi\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`goal_kpi_template\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`goal_general_setting\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`feature\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`feature_organization\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`import-record\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`import-history\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`expense\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`expense_category\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`event_type\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`estimate_email\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`equipment\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`equipment_sharing\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`equipment_sharing_policy\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`employee_setting\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`employee_recurring_expense\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`employee_phone\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`employee_level\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`employee_award\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`employee_appointment\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`email_template\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`email_reset\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`email_sent\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`deal\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`custom_smtp\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`currency\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`country\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`contact\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_technology\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_source\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_skill\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_personal_quality\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_interviewer\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_interview\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_feedback\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_experience\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_education\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_document\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`candidate_criterion_rating\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`social_account\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`availability_slot\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`approval_policy\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`appointment_employee\` DROP COLUMN \`archivedAt\``);
		await queryRunner.query(`ALTER TABLE \`accounting_template\` DROP COLUMN \`archivedAt\``);
	}
}
