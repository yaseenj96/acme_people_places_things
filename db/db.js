const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_people_places_things"
);

//destructure String type from Sequelize
const { STRING } = Sequelize;

//Create Models for Person, Place, Thing
const Person = db.define("person", {
  name: {
    type: STRING(20),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

const Place = db.define("place", {
  name: {
    type: STRING(20),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

const Thing = db.define("thing", {
  name: {
    type: STRING(20),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

const Souvenir = db.define("souvenir", {});

//Person.hasMany(Souvenir);
Souvenir.belongsTo(Person);
Person.hasMany(Souvenir);
Souvenir.belongsTo(Place);
Place.hasMany(Souvenir);
Souvenir.belongsTo(Thing);
Thing.hasMany(Souvenir);

module.exports = {
  db,
  models: {
    Person,
    Place,
    Thing,
    Souvenir,
  },
};
