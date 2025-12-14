import { unlink } from "node:fs/promises";
import { resolve } from "node:path";
import { Ad } from "../entities/Ad";
import { Category } from "../entities/Category";
import { Tag } from "../entities/Tag";
import db from "./index";

export async function clearDB() {
  await unlink(resolve("src/db/lebonplace.sqlite"));
}

async function main() {
  await clearDB().catch(console.error);
  await db.initialize();

  const duke = Ad.create({
    title: "DukeNukem",
    description: "He got balls of steels",
    price: 666,
    pictureUrl:
      "https://2.bp.blogspot.com/_GJHAezShK6I/S2dpBNo4ovI/AAAAAAAANGM/3NLH0KVR40g/s400/Duke%2520Nukem.jpg",
    location: "UpYours",
  });
  const riging = Ad.create({
    title: "Cat Rigging",
    description:
      "Chat en train d'appeler frénétiquement un maitre d'hotel.Parfait pour decorer vos soirée vip",
    price: 422,
    pictureUrl: "https://i.postimg.cc/tJYZQY2K/catriging.png",
    location: "Hotel du Palais Biarritz",
  });

  const tshirt = Ad.create({
    title: "Tshirt Antilope",
    description: "Tshit noir designée par ma fille de 9 ans",
    price: 34,
    pictureUrl: "https://s12.gifyu.com/images/bEbbZ.png",
    location: "Paris",
  });
  const patriote = Ad.create({
    title: "Chat Patriote Mignon",
    description: "Make cats great again",
    price: 911,
    pictureUrl:
      "https://i.ibb.co/s4R4LNS/Screenshot-From-2025-12-03-17-38-19.png",
    location: "USA USA USA USA",
  });
  const gandalf = Ad.create({
    title: "Chat Gandalf métaleux",
    description: "Rock and Roll you Foul !",
    price: 423,
    pictureUrl: "https://i.postimg.cc/Bbx02Nc1/Cat-Guitar-Sunglasses.png",
    location: "Middle Earth",
  });
  const duck = Ad.create({
    title: "DuckNukem",
    description: "It's not a duck , its a feature .",
    price: 12,
    pictureUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg",
    location: "ligne 404",
  });

  const bsdm = Ad.create({
    title: "Accessoires polyvalents",
    description: "Occasion presque jamais utilisé.",
    price: 69,
    pictureUrl: "https://m.media-amazon.com/images/I/61yKaUSqtZL.jpg",
    location: "Bois de boulogne",
  });

  const peignoir = Ad.create({
    title: "Peignoir pour Nathan",
    description: "Peignoir lépoard taille s",
    price: 25,
    pictureUrl: "https://i.ibb.co/YJkfY99/peignoireleopard.png",
    location: "Tanzanie",
  });

  const cake = Ad.create({
    title: "Black Forest cake",
    description: "The Cake Is A Lie",
    price: 42,
    pictureUrl:
      "https://spillthebeans.ie/wp-content/uploads/2015/08/portalcake1.jpg",
    location: "Aperture science",
  });

  const dj = Ad.create({
    title: "Chat Dj",
    description: "Dj Cat is in da house",
    price: 299,
    pictureUrl:
      "https://i.ibb.co/C5M3MP7C/Screenshot-From-2025-12-05-10-58-39.png",
    location: "MacoumbaNightclub",
  });

  const Bricocat = Ad.create({
    title: "Chat bricolo",
    description: "Pip my cat",
    price: 366,
    pictureUrl: "https://i.ibb.co/fVz8GT8Y/catbricolo.png",
    location: "Le garage le plus proche",
  });

  const catdonald = Ad.create({
    title: "Catdonald",
    description: "Cat Maxi Deluxe",
    price: 99,
    pictureUrl:
      "https://i.ibb.co/Z6Hsv0tq/Screenshot-From-2025-12-13-21-27-51.png",
    location: "Fast cat food city",
  });

  const sleepycat = Ad.create({
    title: "Sleepy Cat",
    description: "Sleepy cat,Sleepy cat ..But it's not your fault!",
    price: 2,
    pictureUrl:
      "https://i.ibb.co/xcbJf5d/Screenshot-From-2025-12-13-21-28-25.png",
    location: "Each Morning",
  });

  const supercat = Ad.create({
    title: "Chat Fusé",
    description: "Super Cat strikes again",
    price: 723,
    pictureUrl: "https://i.postimg.cc/9XrkthCv/Cat-Jump-Epic.png",
    location: "Litiére de la solitude",
  });

  const gamecat = await Category.create({ name: "informatique" }).save();
  const vetementcat = await Category.create({ name: "vêtement" }).save();
  const accessoirecat = await Category.create({ name: "accessoire" }).save();
  const chatcat = await Category.create({ name: "chat" }).save();
  const gateaucat = await Category.create({ name: "gâteau" }).save();

  const tag1 = await Tag.create({ name: "tag1" }).save();
  const tag2 = await Tag.create({ name: "tag2" }).save();
  const tag3 = await Tag.create({ name: "tag3" }).save();

  duck.category = gamecat;
  duke.category = gamecat;

  tshirt.category = vetementcat;
  peignoir.category = vetementcat;

  cake.category = gateaucat;
  bsdm.category = accessoirecat;

  Bricocat.category = chatcat;
  supercat.category = chatcat;
  catdonald.category = chatcat;
  sleepycat.category = chatcat;
  gandalf.category = chatcat;
  riging.category = chatcat;
  patriote.category = chatcat;
  dj.category = chatcat;

  await sleepycat.save();
  await catdonald.save();
  await duck.save();
  await duke.save();
  await tshirt.save();
  await patriote.save();
  await dj.save();
  await riging.save();
  await gandalf.save();
  await peignoir.save();
  await Bricocat.save();
  await cake.save();
  await bsdm.save();
  await supercat.save();

  await db.destroy();
  console.log("db reset done !");
}

main().catch(console.log);
