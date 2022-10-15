import { OfferGame } from "epic-free-games";
import Image from "next/image";

export const Card = ({ game, current }: { game: OfferGame; current: boolean }) => {
  const calculateDays = (date: string) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date();
    const secondDate = new Date(date);

    const diffDays = Math.round(Math.abs((+firstDate - +secondDate) / oneDay));
    return diffDays;
  };

  return (
    <div className="bg-white w-72 rounded-lg flex flex-col space-y-1 shadow-2xl transition duration-500 hover:scale-105">
      <div className="w-full h-80 relative">
        <Image src={game.keyImages[0].url} layout="fill" objectFit="cover" sizes="100%" alt="game image" className="rounded-t-lg" />
      </div>
      <div className="px-2 pb-2 flex flex-col space-y-2">
        <h1 className="font-bold self-center">{game.title}</h1>
        {current ? (
          <div className="flex flex-row justify-between">
            <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Active</span>
            <span className="bg-gray-200 text-gray-600 py-1 px-3 rounded-full text-xs">
              {calculateDays(game.promotions.promotionalOffers[0].promotionalOffers[0].endDate)} days left
            </span>
          </div>
        ) : (
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Coming Soon</span>
            <span className="bg-orange-200 text-orange-600 py-1 px-3 rounded-full text-xs">
              Available in {calculateDays(game.promotions.upcomingPromotionalOffers[0].promotionalOffers[0].startDate)} days
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
