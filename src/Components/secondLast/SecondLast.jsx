import React from 'react';
import Last from "../../assets/Image/last.webp";
import Email from '../Email/Email';
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io"; // Import Twitter icon
import { FaDribbble, FaInstagram } from "react-icons/fa";

function SecondLast() {
  return (
    <div className='bg-black mt-5'>
      <div className='text-white max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between'>
        <div className="hidden md:block w-[270px] h-[460px]"></div>
        <div className='w-[340px] h-[460px]'>
          <p className="w-full">Janelle Brown </p>
          <p className='text-gray-500 mt-2'>
            Senior UX Designer, currently crafting experiences at Crosby.
          </p>
          <img src={Last} alt="Profile" className="w-full" />
        </div>
        <div className="hidden md:block w-[100px] h-[460px]"></div>
        <div className='w-[601px] h-[375px] mt-5 md:mt-0'>
          <h4 className='text-3xl mb-8'>
            Think I’d be a good fit for your team or project? Let’s connect.
          </h4>
          <Email />
          <div className='flex flex-col md:flex-row gap-4 md:gap-8 mt-7'>
            <div>
              <p className='mb-5'>SELECTED PROJECTS</p>
              <ProjectLink href="#" text="Crosby: POS Tool Launch" />
              <ProjectLink href="#" text="Norman & Co: Scout Product Launch" />
              <ProjectLink href="#" text="Gardona: Online Store Redesign" />
              <ProjectLink href="#" text="Carmine: Skycast App Launch" />
            </div>
            <div className='mt-4 md:mt-0'>
              <p className='mb-5'>SOCIALS</p>
              <SocialLink href="#" text="Linkedin" icon={<IoLogoLinkedin />} />
              <SocialLink href="#" text="Twitter" icon={<IoLogoTwitter />} />
              <SocialLink href="#" text="Dribbble" icon={<FaDribbble />} />
              <SocialLink href="#" text="Instagram" icon={<FaInstagram />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectLink = ({ href, text }) => (
  <a href={href} className='hover:underline block mb-3'>{text}</a>
);

const SocialLink = ({ href, text, icon }) => (
  <a href={href} className='hover:underline flex items-center mb-3'>
    {icon} <span className="ml-2">{text}</span>
  </a>
);

export default SecondLast;
