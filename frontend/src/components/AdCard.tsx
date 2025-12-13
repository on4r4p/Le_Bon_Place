import Link from "next/link";
import type { Ad } from "../types_frontend";
import FavButton from "./FavButton";

interface AdCardProps {
    ad: Ad;
}

export default function AdCard({ ad: { id, titre, picpath, prix } }: AdCardProps) {
    return (
        <Link href={`http://127.0.0.1:3000/ads/${id}`}
            className="w-[400px] h- [400px] cursor-pointer">

            <div className="relative shadow-md border rounded-lg p-4 bg-white mr-5 mb-3">
                {/** biome-ignore lint/performance/noImgElement: images come form unknown domains */}
                <img
                    className="h-[400px] w-full object-cover rounded-md"

                    src={picpath}
                    alt={titre}
                />
                <div className="flex justify-between pt-6">
                    <div className="ad-card-titre">{titre}</div>
                    <div className="ad-card-prix">{prix} €</div>
                    <FavButton />

                </div>
            </div>

        </Link>
    );
}