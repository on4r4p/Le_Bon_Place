import { useState } from "react";

export default function FavButton() {
    const [isFav, setIsFav] = useState(false);
    const [Showmess, setShowmess] = useState(false);

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setIsFav(!isFav);

        setShowmess(true);
        setTimeout(() => {
            setShowmess(false);
        }, 6000);
    }

    return (
        <div className="relative inline-block">
            {Showmess && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm bg-black text-white px-4 py-2 rounded-md whitespace-nowrap">
                    {isFav ? "Ajouté aux favoris" : "Retiré des favoris"}
                </div>
            )}

            <button
                type="button"
                onClick={handleClick}
                className="bg-white p-2 rounded-2xl"
            >
                {isFav ? "💖" : "🤍"}
            </button>
        </div>
    );
}
