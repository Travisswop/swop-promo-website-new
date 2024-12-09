'use client';
import React, { useState } from 'react';
import SectionLayout from '../shared/SectionLayout';
import parse from 'html-react-parser';
import { Accordion, AccordionItem } from '@nextui-org/react';
import ScrollMotionEffect from '../motion/ScrollMotionEffect';

const jobsPostInfo = [
  {
    id: 1,
    jobTitle: 'Technical Leads (Engineer Manager)',
    jobDesc: `
      <div>
        <h5 class='text-lg font-semibold mb-4'>
          Are you a seasoned engineer with a passion for leadership and
          innovation? We&rsquo;re looking for a dynamic Technical Lead to guide
          our talented team and drive cutting-edge projects to success.
        </h5>

        <h5 class='text-md font-bold underline mb-2'>About You</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>🔧 Lead and mentor a team of skilled engineers</li>
          <li>
            💡 Drive technical strategy and ensure high-quality deliverables
          </li>
          <li>
            📈 Collaborate with cross-functional teams to innovate and solve
            complex problems
          </li>
          <li>
            ⚙️ Oversee the development lifecycle from design to deployment
          </li>
        </ul>

        <h5 class='text-md font-bold underline mb-2'>You Will:</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>
            ✅ Proven experience in software engineering and team leadership
          </li>
          <li>✅ Strong technical expertise in [relevant technologies]</li>
          <li>✅ Excellent problem-solving and communication skills</li>
        </ul>

        <h5 class='text-md font-bold underline mb-2'>You Should Have:</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>🌟 Work with a passionate and collaborative team</li>
          <li>📚 Opportunities for professional growth and development</li>
          <li>🏆 Competitive salary and benefits</li>
          <li>🚀 Be part of a company that values innovation and excellence</li>
        </ul>

        <div class='overflow-x-auto'>
          <table class='w-full mb-4 hidden md:table'>
            <thead>
              <tr>
                <th class='p-2 text-left'>Seniority Level</th>
                <th class='p-2 text-left'>Employment Type</th>
                <th class='p-2 text-left'>Job Function</th>
                <th class='p-2 text-left'>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='p-2'>Mid Level</td>
                <td class='p-2'>Full Time</td>
                <td class='p-2'>Engineering</td>
                <td class='p-2'>$50K - $80K / Yearly</td>
              </tr>
            </tbody>
          </table>

          <div class='block md:hidden'>
            <div class='mb-4'>
              <h5 class='font-bold'>Seniority Level:</h5>
              <p>Mid Level</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Employment Type:</h5>
              <p>Full Time</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Job Function:</h5>
              <p>Engineering</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Salary:</h5>
              <p>$50K - $80K / Yearly</p>
            </div>
          </div>
        </div>
      </div>
`,
  },
  {
    id: 2,
    jobTitle: 'Sr. Software Engineer (Backend)',
    jobDesc: `
      <div>
        <h5 class='text-lg font-semibold mb-4'>
          Are you a seasoned engineer with a passion for leadership and
          innovation? We&rsquo;re looking for a dynamic Technical Lead to guide
          our talented team and drive cutting-edge projects to success.
        </h5>

        <h5 class='text-md font-bold underline mb-2'>About You</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>🔧 Lead and mentor a team of skilled engineers</li>
          <li>
            💡 Drive technical strategy and ensure high-quality deliverables
          </li>
          <li>
            📈 Collaborate with cross-functional teams to innovate and solve
            complex problems
          </li>
          <li>
            ⚙️ Oversee the development lifecycle from design to deployment
          </li>
        </ul>

        <h5 class='text-md font-bold underline mb-2'>You Will:</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>
            ✅ Proven experience in software engineering and team leadership
          </li>
          <li>✅ Strong technical expertise in [relevant technologies]</li>
          <li>✅ Excellent problem-solving and communication skills</li>
        </ul>

        <h5 class='text-md font-bold underline mb-2'>You Should Have:</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>🌟 Work with a passionate and collaborative team</li>
          <li>📚 Opportunities for professional growth and development</li>
          <li>🏆 Competitive salary and benefits</li>
          <li>🚀 Be part of a company that values innovation and excellence</li>
        </ul>

        <div class='overflow-x-auto'>
          <table class='w-full mb-4 hidden md:table'>
            <thead>
              <tr>
                <th class='p-2 text-left'>Seniority Level</th>
                <th class='p-2 text-left'>Employment Type</th>
                <th class='p-2 text-left'>Job Function</th>
                <th class='p-2 text-left'>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='p-2'>Mid Level</td>
                <td class='p-2'>Full Time</td>
                <td class='p-2'>Engineering</td>
                <td class='p-2'>$50K - $80K / Yearly</td>
              </tr>
            </tbody>
          </table>

          <div class='block md:hidden'>
            <div class='mb-4'>
              <h5 class='font-bold'>Seniority Level:</h5>
              <p>Mid Level</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Employment Type:</h5>
              <p>Full Time</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Job Function:</h5>
              <p>Engineering</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Salary:</h5>
              <p>$50K - $80K / Yearly</p>
            </div>
          </div>
        </div>
      </div>
      `,
  },
  {
    id: 3,
    jobTitle: 'Sr. Software Engineer (React Frontend)',
    jobDesc: `
      <div>
        <h5 class='text-lg font-semibold mb-4'>
          Are you a seasoned engineer with a passion for leadership and
          innovation? We&rsquo;re looking for a dynamic Technical Lead to guide
          our talented team and drive cutting-edge projects to success.
        </h5>

        <h5 class='text-md font-bold underline mb-2'>About You</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>🔧 Lead and mentor a team of skilled engineers</li>
          <li>
            💡 Drive technical strategy and ensure high-quality deliverables
          </li>
          <li>
            📈 Collaborate with cross-functional teams to innovate and solve
            complex problems
          </li>
          <li>
            ⚙️ Oversee the development lifecycle from design to deployment
          </li>
        </ul>

        <h5 class='text-md font-bold underline mb-2'>You Will:</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>
            ✅ Proven experience in software engineering and team leadership
          </li>
          <li>✅ Strong technical expertise in [relevant technologies]</li>
          <li>✅ Excellent problem-solving and communication skills</li>
        </ul>

        <h5 class='text-md font-bold underline mb-2'>You Should Have:</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>🌟 Work with a passionate and collaborative team</li>
          <li>📚 Opportunities for professional growth and development</li>
          <li>🏆 Competitive salary and benefits</li>
          <li>🚀 Be part of a company that values innovation and excellence</li>
        </ul>

        <div class='overflow-x-auto'>
          <table class='w-full mb-4 hidden md:table'>
            <thead>
              <tr>
                <th class='p-2 text-left'>Seniority Level</th>
                <th class='p-2 text-left'>Employment Type</th>
                <th class='p-2 text-left'>Job Function</th>
                <th class='p-2 text-left'>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='p-2'>Mid Level</td>
                <td class='p-2'>Full Time</td>
                <td class='p-2'>Engineering</td>
                <td class='p-2'>$50K - $80K / Yearly</td>
              </tr>
            </tbody>
          </table>

          <div class='block md:hidden'>
            <div class='mb-4'>
              <h5 class='font-bold'>Seniority Level:</h5>
              <p>Mid Level</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Employment Type:</h5>
              <p>Full Time</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Job Function:</h5>
              <p>Engineering</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Salary:</h5>
              <p>$50K - $80K / Yearly</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 4,
    jobTitle: 'Sr. Digital Product Designer',
    jobDesc: `
      <div>
        <h5 class='text-lg font-semibold mb-4'>
          Are you a seasoned engineer with a passion for leadership and
          innovation? We&rsquo;re looking for a dynamic Technical Lead to guide
          our talented team and drive cutting-edge projects to success.
        </h5>

        <h5 class='text-md font-bold underline mb-2'>About You</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>🔧 Lead and mentor a team of skilled engineers</li>
          <li>
            💡 Drive technical strategy and ensure high-quality deliverables
          </li>
          <li>
            📈 Collaborate with cross-functional teams to innovate and solve
            complex problems
          </li>
          <li>
            ⚙️ Oversee the development lifecycle from design to deployment
          </li>
        </ul>

        <h5 class='text-md font-bold underline mb-2'>You Will:</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>
            ✅ Proven experience in software engineering and team leadership
          </li>
          <li>✅ Strong technical expertise in [relevant technologies]</li>
          <li>✅ Excellent problem-solving and communication skills</li>
        </ul>

        <h5 class='text-md font-bold underline mb-2'>You Should Have:</h5>
        <ul class='list-none pl-5 mb-4'>
          <li>🌟 Work with a passionate and collaborative team</li>
          <li>📚 Opportunities for professional growth and development</li>
          <li>🏆 Competitive salary and benefits</li>
          <li>🚀 Be part of a company that values innovation and excellence</li>
        </ul>

        <div class='overflow-x-auto'>
          <table class='w-full mb-4 hidden md:table'>
            <thead>
              <tr>
                <th class='p-2 text-left'>Seniority Level</th>
                <th class='p-2 text-left'>Employment Type</th>
                <th class='p-2 text-left'>Job Function</th>
                <th class='p-2 text-left'>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='p-2'>Mid Level</td>
                <td class='p-2'>Full Time</td>
                <td class='p-2'>Engineering</td>
                <td class='p-2'>$50K - $80K / Yearly</td>
              </tr>
            </tbody>
          </table>

          <div class='block md:hidden'>
            <div class='mb-4'>
              <h5 class='font-bold'>Seniority Level:</h5>
              <p>Mid Level</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Employment Type:</h5>
              <p>Full Time</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Job Function:</h5>
              <p>Engineering</p>
            </div>
            <div class='mb-4'>
              <h5 class='font-bold'>Salary:</h5>
              <p>$50K - $80K / Yearly</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
];

const JobSection = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']));

  return (
    <SectionLayout>
      <ScrollMotionEffect effect='fade-up' duration='2000'>
        <h2
          className={`text-stone-950 font-normal text-2xl md:text-4xl text-center !leading-none`}
        >
          <strong>Jobs</strong>
        </h2>
        <p className='text-lg md:text-xl text-stone-950 text-center mt-4 max-w-[620px] mx-auto'>
          Discover rewarding career paths, innovative work environments, and the
          chance to grow with us. Find your perfect job and start making an
          impact today.
        </p>
      </ScrollMotionEffect>

      <div className='mx-6 md:mx-32 mt-16 '>
        <ScrollMotionEffect effect='fade-up' duration='2000'>
          <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            className='border-2 shadow-lg !p-5 !md:p-10 rounded-lg text-2xl py-5 bg-white'
            // style={{ border: '1px solid red' }}
          >
            {jobsPostInfo?.map((el, index) => (
              <AccordionItem
                key={el.id}
                aria-label='Accordion 1'
                title={
                  <div className='text-xl md:text-[24px] font-medium'>
                    {el.jobTitle}
                  </div>
                }
                className='text-[18px] md:text-lg '
              >
                {parse(el.jobDesc)}
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollMotionEffect>
      </div>
    </SectionLayout>
  );
};

export default JobSection;
