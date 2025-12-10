//import { useEffect, useState } from "react";
import { useRecentAdsQuery } from "@/grafq/gen/schema";
import { useQuery } from "@apollo/client/react";
import type { Ad } from "@/types_frontend";
import { gql } from "@apollo/client";
import Loader from "./Loader";
import AdCard from "./AdCard";

const GET_RECENT_ADS = gql`

    query GET_RECENT_ADS = gql`
        query Ads {
            ads {
        id
        titre
        price
        picpath
    }
}



export default function RecentAds() {
    const { loading, error, data } = useQuery<{ ads: Ad[] }>(GET_RECENT_ADS);
    const ads = data?.ads || [];
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-6">Annonces récentes</h2>
            <div className="flex flex-wrap">
                {loading && <Loader />}
                {error && (<p className="text-red-600">Erreur de ouf de chargement.</p>)}
                {ads.map((a) => (
                    <AdCard ad={a} key={a.id} />
                ))}
            </div>
        </div>
    );
}





/*    const [ads, setAds] = useState<Ad[]>([]);


    useEffect(() => {
        fetch("http://127.0.0.1:4000/ads")
            .then((res) => res.json())
            .then((data) => {
                setAds(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

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
}*/