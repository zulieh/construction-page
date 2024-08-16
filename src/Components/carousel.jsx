import { Carousel, Typography, Button } from "@material-tailwind/react";
import PrimaryButton from "./Buttons/PrimaryButton";
 
export function CarouselWithContent() {
  return (
    <Carousel className=" translate-x-6 ease-in duration-300">
      <div className="relative h-full w-full">
        <video
          src="/images/glass.mp4"
          alt="image 1"
          className=" w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center /75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              welcome to the building facility
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something.
            </Typography>
            <div className="flex justify-center gap-2">
            <PrimaryButton 
            children="Explore" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
         src="/images/con1.jpg"
          alt="image 2"
          className=" w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center /75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts. 
            </Typography>
            <div className="flex gap-2">
            <PrimaryButton 
            children="Explore" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/images/con2.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Join with us as we bring this project life
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
            </Typography>
            <div className="flex gap-2">
            <PrimaryButton 
            children="Explore" />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}