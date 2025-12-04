import type { Ad } from "../type";
import AdCard from "./AdCard";

export default function RecentAds() {
    const ads: Ad[] = [
        {
            id: 1,
            picpath:
                "https://www.wizicar.com/wp-content/uploads/2020/01/nouvelle-peugeot-208.jpg",
            prix: 5000,
            titre: "Peugeot 208",
        },
        {
            id: 2,
            picpath:
                "https://s12.gifyu.com/images/bEbbZ.png",
            prix: 35,
            titre: "t-shirt noir",
        },

        {
            id: 3,
            picpath:
                "https://i.ibb.co/s4R4LNS/Screenshot-From-2025-12-03-17-38-19.png",
            prix: 123,
            titre: "Chat patriote mignon",
        },

        {
            id: 4,
            picpath:
                "https://i.postimg.cc/Bbx02Nc1/Cat-Guitar-Sunglasses.png",
            prix: 175,
            titre: "Chat Gandalf métaleux",
        },

    ];

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-6">Annonces récentes</h2>
            <div className="flex flex-wrap">
                {ads.map((a) => (
                    <AdCard ad={a} key={a.id} />
                ))}
            </div>
        </div>
    );
}