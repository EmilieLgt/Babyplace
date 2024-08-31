const AbstractSeeder = require("./AbstractSeeder");
const ParentSeeder = require("./ParentSeeder");
const ModeratorSeeder = require("./ModeratorSeeder");
const NurserySeeder = require("./NurserySeeder");
const ChildSeeder = require("./ChildSeeder");

class BookingOperationSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the managed operation class (AbstractSeeder) with appropriate options
    super({
      table: "booking_operation",
      truncate: true,
      dependencies: [NurserySeeder, ParentSeeder, ModeratorSeeder, ChildSeeder],
    });
  }

  run() {
    const bookingOperations = [
      {
        booking_operation_date: "2024-08-24",
        slots: "15h-19h",
        state: "Passée",
        parent_id: this.getRef("parent_celine.lelouche@gmail.com").insertId,
        child_id: this.getRef("child_Martin").insertId,
        nursery_id: this.getRef("nursery_contact@lillomomes.fr").insertId,
      },

      {
        booking_operation_date: "2024-10-01",
        slots: "14h-19h",
        state: "A venir",
        parent_id: this.getRef("parent_celine.lelouche@gmail.com").insertId,
        child_id: this.getRef("child_Martin").insertId,
        nursery_id: this.getRef("nursery_contact@lillomomes.fr").insertId,
      },

      {
        booking_operation_date: "2024-09-02",
        slots: "7h-12h",
        state: "Passée",
        parent_id: this.getRef("parent_celine.lelouche@gmail.com").insertId,
        child_id: this.getRef("child_Martin").insertId,
        nursery_id: this.getRef("nursery_contact@lillomomes.fr").insertId,
      },

      {
        booking_operation_date: "2024-10-02",
        slots: "7h-12h",
        state: "En attente",
        parent_id: this.getRef("parent_celine.lelouche@gmail.com").insertId,
        child_id: this.getRef("child_Zoé").insertId,
        nursery_id: this.getRef("nursery_contact@lillomomes.fr").insertId,
      },

      {
        booking_operation_date: "2024-09-13",
        slots: "8h-18h",
        state: "En attente",
        parent_id: this.getRef("parent_celine.lelouche@gmail.com").insertId,
        child_id: this.getRef("child_Martin").insertId,
        nursery_id: this.getRef("nursery_hello@tambourin-et-castagnettes.com")
          .insertId,
      },

      {
        booking_operation_date: "2024-09-12",
        slots: "8h-18h",
        state: "A venir",
        parent_id: this.getRef("parent_celine.lelouche@gmail.com").insertId,
        child_id: this.getRef("child_Martin").insertId,
        nursery_id: this.getRef("nursery_hello@tambourin-et-castagnettes.com")
          .insertId,
      },

      {
        booking_operation_date: "2024-09-12",
        slots: "9h-17h",
        state: "Libre",
        nursery_id: this.getRef("nursery_hello@tambourin-et-castagnettes.com")
          .insertId,
      },

      {
        booking_operation_date: "2024-09-17",
        slots: "7h-12h",
        state: "Libre",
        nursery_id: this.getRef("nursery_contact@crechendo-creches.com")
          .insertId,
      },

      {
        booking_operation_date: "2024-07-11",
        slots: "10h-18h",
        state: "Passée",
        nursery_id: this.getRef("nursery_hello@tilleul.com").insertId,
      },

      {
        booking_operation_date: "2024-09-15",
        slots: "10h-18h",
        state: "Libre",
        nursery_id: this.getRef("nursery_hello@tambourin-et-castagnettes.com")
          .insertId,
      },

      {
        booking_operation_date: "2024-09-16",
        slots: "9h-18h",
        state: "Libre",
        nursery_id: this.getRef("nursery_contact@minilions.fr").insertId,
      },
      {
        booking_operation_date: "2024-09-26",
        slots: "9h-12h",
        state: "Libre",
        nursery_id: this.getRef("nursery_contact@minilions.fr").insertId,
      },
      {
        booking_operation_date: "2024-09-30",
        slots: "7h-12h",
        state: "Libre",
        nursery_id: this.getRef("nursery_contact@lillomomes.fr").insertId,
      },
      {
        booking_operation_date: "2024-09-10",
        slots: "8h-17h",
        state: "Libre",
        nursery_id: this.getRef("nursery_contact@lillomomes.fr").insertId,
      },
      {
        booking_operation_date: "2024-09-10",
        slots: "8h-18h",
        state: "Libre",
        nursery_id: this.getRef("nursery_hello@harmonie.com").insertId,
      },
      {
        booking_operation_date: "2024-09-26",
        slots: "8h-18h",
        state: "Libre",
        nursery_id: this.getRef("nursery_hello@royaumepetitslutins.com")
          .insertId,
      },
      {
        booking_operation_date: "2024-09-12",
        slots: "9h-16h",
        state: "Libre",
        nursery_id: this.getRef("nursery_hello@royaumepetitslutins.com")
          .insertId,
      },
      {
        booking_operation_date: "2024-09-16",
        slots: "10h-17h",
        state: "Libre",
        nursery_id: this.getRef("nursery_hello@petitssoleils.com").insertId,
      },
      {
        booking_operation_date: "2024-09-10",
        slots: "10h-17h",
        state: "Libre",
        nursery_id: this.getRef("nursery_hello@petitssoleils.com").insertId,
      },
      {
        booking_operation_date: "2024-09-10",
        slots: "8h-12h",
        state: "Libre",
        nursery_id: this.getRef("nursery_hello@tambourin-et-castagnettes.com")
          .insertId,
      },
      {
        booking_operation_date: "2024-09-11",
        slots: "10h-19h",
        state: "Libre",
        nursery_id: this.getRef("nursery_hello@tambourin-et-castagnettes.com")
          .insertId,
      },
      {
        booking_operation_date: "2024-09-12",
        slots: "10h-18h",
        state: "A venir",
        parent_id: this.getRef("parent_georges.st-pierre@gmail.com").insertId,
        child_id: this.getRef("child_Benoit").insertId,
        nursery_id: this.getRef("nursery_hello@tambourin-et-castagnettes.com")
          .insertId,
      },
      {
        booking_operation_date: "2024-09-16",
        slots: "10h-18h",
        state: "A venir",
        parent_id: this.getRef("parent_georges.st-pierre@gmail.com").insertId,
        child_id: this.getRef("child_Benoit").insertId,
        nursery_id: this.getRef("nursery_hello@tambourin-et-castagnettes.com")
          .insertId,
      },
      {
        booking_operation_date: "2024-06-02",
        slots: "10h-20h",
        state: "Passée",
        parent_id: this.getRef("parent_celine.lelouche@gmail.com").insertId,
        child_id: this.getRef("child_Zoé").insertId,
        nursery_id: this.getRef("nursery_hello@tambourin-et-castagnettes.com")
          .insertId,
      },
      {
        booking_operation_date: "2024-09-14",
        slots: "8h-12h",
        state: "A venir",
        parent_id: this.getRef("parent_celine.lelouche@gmail.com").insertId,
        child_id: this.getRef("child_Martin").insertId,
        nursery_id: this.getRef("nursery_hello@harmonie.com").insertId,
      },
      {
        booking_operation_date: "2024-08-12",
        slots: "10h-16h",
        state: "Passée",
        parent_id: this.getRef("parent_celine.lelouche@gmail.com").insertId,
        child_id: this.getRef("child_Martin").insertId,
        nursery_id: this.getRef("nursery_hello@tilleul.com").insertId,
      },
    ];
    bookingOperations.forEach((bookingOperation) => {
      this.insert(bookingOperation);
    });
  }
}
// Export the ModeratorSeeder class
module.exports = BookingOperationSeeder;
