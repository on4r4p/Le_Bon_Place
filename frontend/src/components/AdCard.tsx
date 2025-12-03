import type { Ad } from "../type";

interface AdCardProps {
    ad: Ad;
}

export default function AdCard({
    ad: { titre, prix, picpath },
}: AdCardProps) {
    return (
        <div className="w-[400px] h- [4000px]">
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
                </div>
            </div>
        </div>
    );
}