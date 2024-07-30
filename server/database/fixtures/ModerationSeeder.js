const AbstractSeeder = require("./AbstractSeeder");
const ParentSeeder = require("./ParentSeeder");
const ModeratorSeeder = require("./ModeratorSeeder");
const NurserySeeder = require("./NurserySeeder");
const BookingOperationSeeder = require("./BookingOperationSeeder");

class ModerationSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the managed operation class (AbstractSeeder) with appropriate options
    super({
      table: "moderation_operation",
      truncate: true,
      dependencies: [
        NurserySeeder,
        ParentSeeder,
        ModeratorSeeder,
        BookingOperationSeeder,
      ],
    });
  }

  run() {
    const moderationOperations = [
      {
        moderation_operation_date: "2024-04-04",
        nursery_id: 2,
        moderator_id: 1,
      },
      {
        moderation_operation_date: "2024-07-07",
        nursery_id: 6,
        moderator_id: 1,
      },
    ];

    moderationOperations.forEach((bookingOperation) => {
      this.insert(bookingOperation);
    });
  }
}

module.exports = ModerationSeeder;
