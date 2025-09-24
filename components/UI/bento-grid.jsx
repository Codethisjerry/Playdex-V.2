import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition duration-200 hover:border-white/20 hover:bg-white/10 hover:shadow-lg relative overflow-hidden",
        className
      )}>
      <GlowingEffect
        variant="white"
        glow={true}
        disabled={false}
        blur={0}
        spread={25}
        proximity={60}
        borderWidth={1}
        movementDuration={1.2}
        inactiveZone={0.4}
        className="rounded-xl"
      />
      <div className="relative z-10">
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          <div
            className="mt-2 mb-2 font-sans font-bold text-lg text-white">
            {title}
          </div>
          <div
            className="font-sans text-sm font-normal text-gray-300">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
