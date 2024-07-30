const AbstractRepository = require("./AbstractRepository");

class OperationModerationRepository extends AbstractRepository {
  constructor() {
    super({ table: "moderation_operation" });
  }

  // The C of CRUD - Create operation

  async create(moderation) {
    const [result] = await this.database.query(
      `insert into ${this.table} (moderation_operation_date, moderation_action, nursery_id, parent_id, booking_operation_id,  moderator_id ) values (?, ?, ?, ?)`,
      [
        moderation.moderation_operation_date,
        moderation.moderation_action,
        moderation.state,
        moderation.nursery_id,
      ]
    );

    // Return the ID of the newly inserted moderation
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific moderation by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where moderation_operation_id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the moderation
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve a specific moderation by its ID
    const [rows] = await this.database.query(`select * from ${this.table}`, []);

    // Return the first row of the result, which represents the moderation
    return rows[0];
  }

  async delete(id) {
    // Execute the SQL DELETE query to delete a moderation from the 'moderation_operation' table
    const [rows] = await this.database.query(
      `delete from ${this.table} where moderation_operation_id = ?`,
      [id]
    );
    // Return how many rows were affected
    return rows;
  }
}

module.exports = OperationModerationRepository;
