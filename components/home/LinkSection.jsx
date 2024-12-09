import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import Image from 'next/image';
import ScrollMotionEffect from '../motion/ScrollMotionEffect';

const linkInfo = [
  {
    icon: '/assets/home/link-icon/flexibility.png',
    iconColor: 'bg-[#E5C5FF]',
    highlightText: 'Flexibility-',
    textColor: 'text-[#E5C5FF]',
    text: 'Manage your entire teams networking by creating them a unique link to share their important info.',
  },
  {
    icon: '/assets/home/link-icon/scalability.png',
    iconColor: 'bg-[#83D0FF]',
    highlightText: 'Scalability-',
    textColor: 'text-[#83D0FF]',
    text: 'designed to onboard large amounts of traffic to your ecosystem with our tools',
  },
  {
    icon: '/assets/home/link-icon/customization.png',
    iconColor: 'bg-[#B4FFB7]',
    highlightText: 'Customization-',
    textColor: 'text-[#B4FFB7]',
    text: 'Build your links your way, upload videos, blogs, promotions, products, contact info and more.',
  },
  {
    icon: '/assets/home/link-icon/speed.png',
    iconColor: 'bg-[#FF9898]',
    highlightText: 'Speed-',
    textColor: 'text-[#FF9898]',
    text: 'Route people where they need to go in a click and connect with people and  clients over the internet.',
  },
  {
    icon: '/assets/home/link-icon/1st-party-data.png',
    iconColor: 'bg-[#FFFB95]',
    highlightText: '1st Party Data-',
    textColor: 'text-[#FFFB95]',
    text: 'Generate + manage all your leads and analytics in one easy to use database for your account.',
  },
  {
    icon: '/assets/home/link-icon/security.png',
    iconColor: 'bg-[#FFB084]',
    highlightText: 'Security-',
    textColor: 'text-[#FFB084]',
    text: 'Blockchain-encrypted transactions, messaging and decentralized storage .',
  },
];

const LinkSection = () => {
  return (
    <SectionLayout>
      <ScrollMotionEffect effect='fade-up' duration='2000'>
        <h2
          className={`text-stone-950 font-medium text-2xl md:text-4xl text-center !leading-normal`}
        >
          One{' '}
          <>
            <strong>Link</strong>
          </>{' '}
          For All <br />
          Of Your Interactions
        </h2>
      </ScrollMotionEffect>

      <div className='grid grid-cols-1 md:grid-cols-3 items-start justify-between gap-14 mt-10 md:mt-24'>
        {linkInfo?.map((el, index) => (
          <ScrollMotionEffect effect='fade-up' duration='2000' key={index}>
            <div>
              <div
                className={`${el.iconColor} rounded-md p-4 w-20 h-20 flex justify-center mx-auto`}
              >
                <Image
                  width={60}
                  height={50}
                  src={el.icon}
                  alt='Link icon'
                  className='mx-auto'
                />
              </div>
              <p className='mb-4 text-xl md:text-[20px] text-stone-950 text-center mt-6'>
                <span className={`${el.textColor}`}> {el.highlightText}</span>{' '}
                {el.text}
              </p>
            </div>
          </ScrollMotionEffect>
        ))}
      </div>
    </SectionLayout>
  );
};

export default LinkSection;
