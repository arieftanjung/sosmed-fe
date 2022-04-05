import Image from "next/image";

export const StoryCard = ({ src, profile }) => {
  return (
    <div className="relative h-14 w-14">
      <Image
        className="absolute opecity-0 lg:opacity-100 rounded-t-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
      />
    </div>
  );
};
