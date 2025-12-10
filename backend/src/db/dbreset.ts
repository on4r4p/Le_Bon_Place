import { unlink } from 'node:fs/promises'
import { resolve } from 'node:path'
import { Ad } from "../entities/Ad";
import { Category } from "../entities/Cat";
import { Tag } from "../entities/Tg";
import db from "./index";
import { parentPort } from 'node:worker_threads';

export async function clearDB() {
    await unlink(resolve(__dirname, "lebonplace.sqlite"));
}

async function main() {
    await clearDB().catch(console.error);
    await db.initialize();

    const duke = Ad.create({
        titre: "DukeNukem",
        description:
            "He got balls of steels",
        prix: 666,
        picpath:
            "https://2.bp.blogspot.com/_GJHAezShK6I/S2dpBNo4ovI/AAAAAAAANGM/3NLH0KVR40g/s400/Duke%2520Nukem.jpg",
        location: "UpYours",
    });
    const riging = Ad.create({
        titre: "Cat Rigging",
        description:
            "Chat en train d'appeler frénétiquement un maitre d'hotel.Parfait pour decorer vos soirée vip",
        prix: 422,
        picpath: "https://i.postimg.cc/tJYZQY2K/catriging.png",
        location: "Hotel du Palais Biarritz",
    });

    const tshirt = Ad.create({
        titre: "Tshirt Antilope",
        description:
            "Tshit noir designée par ma fille de 9 ans",
        prix: 34,
        picpath: "https://s12.gifyu.com/images/bEbbZ.png",
        location: "Paris",
    });
    const patriote = Ad.create({
        titre: "Chat Patriote Mignon",
        description: "Make cats great again",
        prix: 911,
        picpath: "https://i.ibb.co/s4R4LNS/Screenshot-From-2025-12-03-17-38-19.png",
        location: "USA USA USA USA",
    });
    const gandalf = Ad.create({
        titre: "Chat Gandalf métaleux",
        description: "Rock and Roll you Foul !",
        prix: 423,
        picpath: "https://i.postimg.cc/Bbx02Nc1/Cat-Guitar-Sunglasses.png",
        location: "Middle Earth",
    });
    const bsdm = Ad.create({
        titre: "Accessoires polyvalents",
        description: "Occasion presque jamais utilisé.",
        prix: 69,
        picpath:
            "https://m.media-amazon.com/images/I/61yKaUSqtZL.jpg",
        location: "Bois de boulogne",
    });

    const peignoir = Ad.create({
        titre: "Peignoir pour Nathan",
        description: "Peignoir lépoard taille s",
        prix: 25,
        picpath: "https://i.ibb.co/YJkfY99/peignoireleopard.png",
        location: "Tanzanie",
    });

    const cake = Ad.create({
        titre: "Black Forest cake",
        description: "The Cake Is A Lie",
        prix: 42,
        picpath: "https://spillthebeans.ie/wp-content/uploads/2015/08/portalcake1.jpg",
        location: "Aperture science",
    });

    const dj = Ad.create({
        titre: "CHat Dj",
        description: "Dj Cat is in da house",
        prix: 299,
        picpath: "https://i.ibb.co/C5M3MP7C/Screenshot-From-2025-12-05-10-58-39.png",
        location: "MacoumbaNightclub",
    });

    const Bricocat = Ad.create({
        titre: "Chat bricolo",
        description: "Pip my cat",
        prix: 366,
        picpath: "https://i.ibb.co/fVz8GT8Y/catbricolo.png",
        location: "Le garage le plus proche",
    });

    const gamecat = await Category.create({ nom: "informatique" }).save();
    const vetementcat = await Category.create({ nom: "vetement" }).save();
    const accessoirecat = await Category.create({ nom: "accessoire" }).save();
    const chatcat = await Category.create({ nom: "chat" }).save();
    const gateaucat = await Category.create({ nom: "gateau" }).save();


    duke.categorie = gamecat;
    tshirt.categorie = vetementcat;
    peignoir.categorie = vetementcat;
    patriote.categorie = chatcat;
    dj.categorie = chatcat;
    gandalf.categorie = chatcat;
    riging.categorie = chatcat;
    cake.categorie = gateaucat;
    bsdm.categorie = accessoirecat;
    Bricocat.categorie = chatcat;

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

    await db.destroy();
    console.log("done !");
}

main().catch(console.log);
