import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import ScrollMotionEffect from '../motion/ScrollMotionEffect';

const DashboardFlow = () => {
  return (
    <SectionLayout>
      <ScrollMotionEffect effect='fade-up' duration='2000'>
        <h2
          className={`text-stone-950 font-medium text-2xl md:text-4xl mt-5 mb-14 text-center !leading-normal`}
        >
          One
          <>
            <strong> Dashboard </strong>
          </>
          To manage your teams links <br />
          and entire customer Interaction <strong>flow</strong>
        </h2>
      </ScrollMotionEffect>

      <div className='mt-[-18%] mb-[-18%] md:mt-[-14%] md:mb-[-16%]'>
        <div className='flex justify-center items-center mx-auto'>
          <video className='object-cover' autoPlay loop muted playsInline>
            <source
              src='/assets/home/laptop-admin-dashboard.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </SectionLayout>
  );
};

export default DashboardFlow;
