import { Star } from 'lucide-react';

function Rating({ value, color }) {
    const MAX_STARS = 5;

    // Générer les étoiles
    const stars = Array.from({ length: MAX_STARS }, (_, index) => {
        const starValue = index + 1; // Les valeurs des étoiles (1 à 5)
        if (value >= starValue) {
            // Étoile pleine
            return <Star key={index} className={`w-6 h-6 text-${color}-500 fill-current`} />;
        } else if (value >= starValue - 0.5) {
            // Demi-étoile (on pourrait utiliser un style spécial si nécessaire)
            return (
                <Star
                    key={index}
                    className={`w-6 h-6 text-${color}-500`}
                    style={{
                        clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)', // Remplir à moitié
                    }}
                />
            );
        } else {
            // Étoile vide
            return <Star key={index} className={`w-6 h-6 text-gray-300`} />;
        }
    });

    return (
        <div className="flex items-center gap-1">
            {stars}
        </div>
    );
}

export default Rating;
