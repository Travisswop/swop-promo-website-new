import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import Link from 'next/link';
import ScrollMotionEffect from '../motion/ScrollMotionEffect';

const linkInfo = [
  {
    icon: '/assets/home/swopple-icon/connection.png',
    iconColor: 'bg-[#C48DEF]',
    bgColor: 'bg-[#F3E4FF]',
    title: 'Earn For Connections',
    text: 'Follow other SmartSites and earn tokens for every new connection you make, enhancing your network and rewards simultaneously.',
  },
  {
    icon: '/assets/home/swopple-icon/leads.png',
    iconColor: 'bg-[#4DA9E3]',
    bgColor: 'bg-[#D8F0FF]',
    title: 'Earn For Leads',
    text: 'Earn tokens for every authentic lead generated through the SmartSite lead system, rewarding your effective engagement.',
  },
  {
    icon: '/assets/home/swopple-icon/double-tap.png',
    iconColor: 'bg-[#7BC67E]',
    bgColor: 'bg-[#E9FFEA]',
    title: 'Earn For Taps',
    text: 'Use your NFC device or QR code as a menu to share information or use in marketing for ads and earn tokens for reaching scan milestones.',
  },
];

const SwoppleSection = () => {
  return (
    <SectionLayout>
      <ScrollMotionEffect effect='fade-up' duration='2000'>
        <h2
          className={`text-stone-950 font-medium text-2xl md:text-4xl mt-5 mb-14 text-center leading-normal `}
        >
          Earn
          <strong> Swopple </strong>
          Connecting <br />
          with<strong> others</strong>
        </h2>
      </ScrollMotionEffect>

      <div className='grid grid-cols-1 md:grid-cols-3 items-start justify-between gap-14 mt-24'>
        {linkInfo.map((el, index) => (
          <ScrollMotionEffect effect='fade-up' duration='2000' key={index}>
            <div className={`${el.bgColor} rounded-xl pt-10 px-10 mb-10`}>
              <div
                className={`${el.iconColor} rounded-md p-4 w-20 h-20 flex justify-center mx-auto mt-[-80px]`}
              >
                <Image
                  width={60}
                  height={50}
                  src={el.icon}
                  alt='Link icon'
                  className='mx-auto'
                />
              </div>
              <div className='py-10'>
                <h2 className='mb-2 text-xl text-stone-950 text-center mt-6 font-bold'>
                  {el.title}
                </h2>
                <p className='mb-4 text-lg text-stone-950 text-center mt-1'>
                  {el.text}
                </p>
              </div>
              <div className={`${el.iconColor} rounded-t-2xl h-4`} />
            </div>
          </ScrollMotionEffect>
        ))}
      </div>
      <ScrollMotionEffect effect='fade-up' duration='2000'>
        <div className='flex justify-center mx-auto'>
          <Link
            href={''}
            className='text-black bg-none hover:bg-black hover:text-white font-medium text-sm md:text-lg px-2 md:px-8 py-2 mb-2 border-2 border-black items-center justify-center flex rounded-xl w-[45%] md:w-[13%] mx-auto'
          >
            Learn More
          </Link>
        </div>
      </ScrollMotionEffect>
    </SectionLayout>
  );
};

export default SwoppleSection;
