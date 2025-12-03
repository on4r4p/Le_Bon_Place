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
            prix: 5,
            titre: "t-shirt noir",
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