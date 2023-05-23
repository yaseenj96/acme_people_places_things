const {
  db,
  models: { Person, Place, Thing, Souvenir },
} = require("./db/db");

//can create separate function to seed data and call within syncAndSeed
const seedEx = () => {};

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const [
      moe,
      larry,
      lucy,
      ethyl,
      paris,
      nyc,
      chicago,
      london,
      hat,
      bag,
      shirt,
      cup,
    ] = await Promise.all([
      Person.create({ name: "moe" }),
      Person.create({ name: "larry" }),
      Person.create({ name: "lucy" }),
      Person.create({ name: "ethyl" }),
      Place.create({ name: "paris" }),
      Place.create({ name: "nyc" }),
      Place.create({ name: "chicago" }),
      Place.create({ name: "london" }),
      Thing.create({ name: "hat" }),
      Thing.create({ name: "bag" }),
      Thing.create({ name: "shirt" }),
      Thing.create({ name: "cup" }),
    ]);

    await Promise.all([
      Souvenir.create({
        personId: moe.id,
        thingId: hat.id,
        placeId: london.id,
      }),
      Souvenir.create({ personId: moe.id, thingId: bag.id, placeId: paris.id }),
      Souvenir.create({
        personId: ethyl.id,
        thingId: shirt.id,
        placeId: nyc.id,
      }),
    ]);

    db.close();
  } catch (error) {
    console.log(error);
    db.close();
  }
};

syncAndSeed();
