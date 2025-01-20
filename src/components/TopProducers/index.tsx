import { IProducers } from "@/data/producers";
import ScrollContainer from "../ScrollContainer";

const ProducerCard = ({ name, followers, avatar }: IProducers) => (
  <div className="flex flex-col items-start space-y-2 bg-cover rounded-lg"
  >
    <img src={avatar} alt={name} className="w-40 h-40 rounded-full" />
    <h4 className="text-white text-sm font-medium">{name}</h4>
    <p className="text-xs text-gray-400">{followers} Followers</p>
  </div>
);

export default function TopProducers ({ producers }: { producers: IProducers[]; }) {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Top Producers</h2>
      <p className="text-sm text-gray-400 mb-6">
        Most successful producers on MusicGPT
      </p>
      <ScrollContainer>
        <div className="flex gap-8 py-4 w-max">
          {producers.map((producer, index) => (
            <ProducerCard key={index} {...producer} />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
}