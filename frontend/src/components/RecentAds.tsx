import type { Ad } from "../types";
import AdCard from "./AdCard";

export default function RecentAds() {
    const ads: Ad[] = [
        {
            id: 1,
            pictureUrl:
                "https://www.wizicar.com/wp-content/uploads/2020/01/nouvelle-peugeot-208.jpg",
            price: 5000,
            title: "Peugeot 208",
        },
        {
            id: 2,
            pictureUrl:
                "https://s12.gifyu.com/images/bEbbZ.png",
            price: 5,
            title: "t-shirt noir",
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