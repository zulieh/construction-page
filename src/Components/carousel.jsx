import { Carousel, Typography } from "@material-tailwind/react";
import PrimaryButton from "./Buttons/PrimaryButton";

export function CarouselWithContent() {
  return (
    <Carousel className="translate-x-0 ease-in duration-300">
      <div className="relative h-[50vh] md:h-[70vh] lg:h-[90vh] w-full">
        <video
          src="https://cdn.pixabay.com/video/2024/07/13/220941_large.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-11/12 md:w-3/4 lg:w-2/4 text-center px-4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
              Welcome to the Building Facility
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men's hearts, as for that subtle something.
            </Typography>
            <div className="flex justify-center gap-2">
              <PrimaryButton>Explore</PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[50vh] md:h-[70vh] lg:h-[90vh] w-full">
        <video
          src="https://cdn.pixabay.com/video/2016/07/25/3992-176171691_large.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-11/12 md:w-3/4 lg:w-2/4 text-center px-4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men's hearts.
            </Typography>
            <div className="flex justify-center gap-2">
              <PrimaryButton>Explore</PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[50vh] md:h-[70vh] lg:h-[90vh] w-full">
        <video
          src="https://cdn.pixabay.com/video/2020/06/23/42923-434300950_large.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-end bg-black/50">
          <div className="w-11/12 md:w-3/4 lg:w-2/4 text-center px-4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
              Join Us as We Bring This Project to Life
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-10 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men's hearts, as for that subtle something, that quality.
            </Typography>
            <div className="flex justify-center gap-2 mb-16">
              <PrimaryButton>Explore</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
