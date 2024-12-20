import React from "react";
import clsx from "clsx";

const SectionLayout = React.memo(({ children, img, bg, className }) => {
  return (
    <section
      className={clsx(
        img,
        bg,
        "mx-auto flex justify-center items-center w-full"
      )}
    >
      <div className={" py-[1.5rem] md:py-[3.5rem] px-5 xl:px-0" + className}>
        {children}
      </div>
    </section>
  );
});

export default SectionLayout;
