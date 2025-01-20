import { IGenre } from "@/data/genres";
import ScrollContainer from "../ScrollContainer";

const GenreCard = ({ title, subtitle, likes, thumbnail }: IGenre) => (
  <div
    className='w-48 h-48 p-4 object-fill bg-cover snap-center'
    style={{
      backgroundImage: `url(${ thumbnail })`,
    }}
  >
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {subtitle && <p className="text-sm text-gray-200">{subtitle}</p>}
      </div>
      <p className="text-sm text-gray-300">{likes} Likes</p>
    </div>
  </div>
);

export default function TopGenre ({ genres }: { genres: IGenre[]; }) {
  return (
    <ScrollContainer>
        <div className="w-max flex space-x-4">
          {genres.map((genre, index) => (
            <GenreCard key={index} {...genre} />
          ))}
        </div>
      </ScrollContainer>
  );

}