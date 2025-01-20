export interface IGenre {
  title: string,
  subtitle?: string;
  likes: string;
  thumbnail: string;
}

export const topGenres: IGenre[] = [
  {
    title: "Top 50",
    subtitle: "Global",
    likes: "3M",
    thumbnail: "/top-50.png",
  },
  { title: "Beats", likes: "777K", thumbnail: "/beats.png" },
  { title: "Jazz", likes: "845K", thumbnail: "/jaxzz.png" },
  { title: "Reimagined", likes: "1.4M", thumbnail: "/reimagined.png" },
  { title: "R&B", likes: "500K", thumbnail: "/reimagined.png" },
  { title: "Rap", likes: "921K", thumbnail: "/reimagined.png" },
];
