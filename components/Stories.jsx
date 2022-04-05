import Image from "next/image";
import Aqilprofil from "./../assets/aqilprofil.jpg";
import Storiesaqil from "./../assets/storisaqil.jpg";
import Profilselda from "./../assets/profilselda.jpeg";
import Storiesselda from "./../assets/storiesselda.jpeg";
import Nova from "./../assets/nova.jpeg";
import Storiesnova from "./../assets/storiesnova.jpeg";
import { StoryCard } from "./Storycard";

const stories = [
  {
    name: "Raditya Aqil",
    src: "./../assets/aqilprofil.jpg",
    // profile: "storisaqil.jpg",
  },
  // {
  //   name: "Selda",
  //   src: <Image src={Profilselda} />,
  //   profile: <Image src={Storiesselda} />,
  // },
  // {
  //   name: "Nova",
  //   src: {"<Image src={Nova} />"},
  //   profile: <Image src={Storiesnova} />,
  // },
];

export const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 ">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};
