import { unlink } from 'node:fs/promises'
import { resolve } from 'node:path'
import { Ad } from "../entities/Ad";
import { Category } from "../entities/Cat";
import { Tag } from "../entities/Tg";
import db from "./index";

export async function clearDB() {
    await unlink(resolve(__dirname, "lebonplace.sqlite"));
}

async function main() {
    await clearDB();
    await db.initialize();

    const macbook = Ad.create({
        title: "DukeNukem",
        description:
            "He got balls of steels",
        price: 666,
        pictureUrl:
            "https://2.bp.blogspot.com/_GJHAezShK6I/S2dpBNo4ovI/AAAAAAAANGM/3NLH0KVR40g/s400/Duke%2520Nukem.jpg",
        location: "UpYours",
    });
    const keyboard = Ad.create({
        title: "Tshirt Antilope",
        description:
            "Tshit noir designé par ma fille de 9 ans",
        price: 30,
        pictureUrl: "https://s12.gifyu.com/images/bEbbZ.png",
        location: "Paris",
    });
    const peugeot = Ad.create({
        title: "Chat Patriote Mignon",
        description: "Make cats great again",
        price: 911,
        pictureUrl: "https://i.ibb.co/s4R4LNS/Screenshot-From-2025-12-03-17-38-19.png",
        location: "USA USA USA USA",
    });
    const renault = Ad.create({
        title: "Chat Gandalf métaleux",
        description: "Rock and Roll you Foul !",
        price: 423,
        pictureUrl: "https://i.postimg.cc/Bbx02Nc1/Cat-Guitar-Sunglasses.png",
        location: "Middle Earth",
    });
    const porsche = Ad.create({
        title: "Accessoires polyvalents",
        description: "Occasion presque jamais utilisé.",
        price: 69,
        pictureUrl:
            "https://m.media-amazon.com/images/I/61yKaUSqtZL.jpg",
        location: "Bois de boulogne",
    });

    const raquette = Ad.create({
        title: "Peignoir pour Nathan",
        description: "Peignoir lépoard taille s",
        price: 25,
        pictureUrl: "https://i.ibb.co/21b3GHMh/Leapoard-3-D.webp",
        location: "Tanzanie",
    });

    const skis = Ad.create({
        title: "Black Forest cake Delicious and moist",
        description: "The Cake Is A Lie",
        price: 29,
        pictureUrl: "https://spillthebeans.ie/wp-content/uploads/2015/08/portalcake1.jpg",
        location: "Aperture science",
    });

    const computerCat = await Category.create({ name: "informatique" }).save();
    const voitureCat = await Category.create({ name: "automobile" }).save();
    const sportCat = await Category.create({ name: "sport" }).save();
    const tag1 = await Tag.create({ name: "tag1" }).save();
    const tag2 = await Tag.create({ name: "tag2" }).save();
    const tag3 = await Tag.create({ name: "tag3" }).save();

    keyboard.category = computerCat;
    keyboard.tags = [tag1, tag2];

    macbook.category = computerCat;
    macbook.tags = [tag2, tag3];

    peugeot.category = voitureCat;
    renault.category = voitureCat;
    porsche.category = voitureCat;

    skis.category = sportCat;
    raquette.category = sportCat;

    await keyboard.save();
    await macbook.save();
    await peugeot.save();
    await renault.save();
    await porsche.save();
    await raquette.save();
    await skis.save();

    await db.destroy();
    console.log("done !");
}

main();
