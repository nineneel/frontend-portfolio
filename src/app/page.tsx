'use client';

import { HomeSection } from '@/lib/components';
import { SectionBreak } from '@/lib/elements';
import { tungsten } from '@/lib/styles/font';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import Link from 'next/link';

export default function Home() {
  // dummy data
  const techStackImageURL = [
    {
      name: 'figma',
      url: 'https://s3-alpha-sig.figma.com/img/9ec5/84d3/dd6568cc111fcf8306a148e299bb0442?Expires=1696204800&Signature=MPlinXf2q~DcKSgANoZiAjjSnra4OXIHFrOdC-4dirrNOXwXc6uaJF0~lXS7PkedKnfz9VJ0bWp7MfEDHCltqtzeluiySoXBO9Vv7xlUfxoIBBpCBle3xn7Y9fyuraCvu6BoW-om7Pw8JLH7Z07j0P1EzkzMF82DXA58L~qdVHW6sEEgoXcvSt0Shy9UbfSkzQUFlpBnkQt3ySj5jI-he8n19iPgitzffT5-FdAYVjxbVLQmLwTKcNIHqMmFpZ05JYizHMo-qhc7CiB4vpY1AleJ6VsZiGbtPX1xC5c9raPvaOtpb4V4B8eog3oniyZWj4Omw~a-sllx7DFhxr8B~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'next js',
      url: 'https://s3-alpha-sig.figma.com/img/a981/5ff8/8719b044721c232085430bf829ebebf5?Expires=1696204800&Signature=Sx914aB0OFr8hG6~-Rr~8eY82obyxLCGsVVYd--Mg70PKheFudMxsye-SjpZZXvF0W2s~3j3ajwdjrQBh8pvvzntQ9nZitLNzGZ13QcmYnzCyAY4u5AfWRki8gM9FJ8Vo5jaKHPfDQEtHhhz4Skge-XZOK3owLw-Q0pMkvCydjmxv~O1bDbrabuMcUaT~oGJQBJUJL9XnRsGw6EweW5~QJQ64uWynR5845eHLEVIEhARhg1NMuCdMAFBFu72xZemifMpTbfWapiM1xyfhtQy22N5U~-7YSglddIL9e2pNLSUyBv3G5Vo0~SgIIae6BdnOm3xfI5ls29Q9zSma5xr-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'laravel',
      url: 'https://s3-alpha-sig.figma.com/img/6bc8/a43f/6a9696555f06a245adb3aeb0d3158ea7?Expires=1696204800&Signature=dZJ~CJy3tA7WCrmrQPVZCAVSCT3qB8FrbA99kbDJNOz3Qv4h9igU5WwYsMSQ2xnG73Zmd1fhKnfMgRGY9me5r1js5igNUHL6VmPhny6TRP29l5L9OqRAlm82UlyImkB4iYChUfN7ndWvFwMH0meYwPLRtWG0PCGZuC1bCn~5X4H-HMquhUgNDn1PxcsJTq1J9qyvZBPshm1ewcUcpe6fnjyoxbC7r1RjL3aLbhgeOdagi7MGMn8-hsdu~xGSD2iOO5cMXDZ688PbCgsufS8wfzkVL8toA43mJxG0-YRudqr46t5mKIWFZ50OlY3-qyzjqklN5tIxhF6qU7tt-dLNSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'flutter',
      url: 'https://s3-alpha-sig.figma.com/img/5ff8/335c/4d13b3e6ceb993456a0ed8af22099b7f?Expires=1696204800&Signature=d8XcD59zWkOZWBCW9HnwMGNrq1R7vYF5f84FHW5-OKMXQxTqilvG~U7om1aATanhV9DMyee7PxRDaQZ7EE2~RkfwXR-yDc1Ll7-i2tuYsroY~0-3HBoym3NftJDwMrS-doDiq5Hb7B~IgMqRoE04rJ~djddHnBxgCIlhoSws-jsczFAB8vii8V6-b9N4d4ig~oTCQrTN-k59eUFYfHq~8Rt0Uj0bts3zLJXKQE~wm9n-FAke74h1cqAYF-~saCnHGrho0QONEPuA-WfvVN6wiVsB4h0nUesTJAtpWHh4Gff8gU29dV2~AQEQ~I6dauCUEXv02l~eqJWesFMDSdBcTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  const services = [
    {
      title: 'Web Design',
      content:
        'Across all of Instagram, our algorithm relies on based on how you interact with the app, and how other people interact with you.',
      imageUrl: '/placeholder.png',
    },
    {
      title: 'Graphic Design',
      content:
        'Graphic design is the art of creating visual content to communicate messages. It includes designing logos, posters, brochures, and other marketing materials.',
      imageUrl: './vercel.svg',
    },
    {
      title: 'Front-End Development',
      content:
        'Front-end development focuses on creating the user interface of a website. It involves coding using HTML, CSS, and JavaScript to make web pages interactive and responsive.',
      imageUrl: './next.svg',
    },
    {
      title: 'Back-End Development',
      content:
        'Back-end development involves server-side programming and database management. It powers the behind-the-scenes functionality of websites and web applications.',
      imageUrl: './vercel.svg',
    },
  ];

  const works = [
    {
      projectName: 'Project A',
      developmentDate: '2022',
      services: 'Web Development',
      agency: 'Personal Website',
      tools: 'Tailwind, Laravel',
      url: 'https://www.example.com/project-a',
      overview:
        'Ini adalah deskripsi proyek Project A. Proyek ini adalah pengembangan situs web yang melibatkan desain responsif dan integrasi dengan berbagai API pihak ketiga. Kami menggunakan teknologi seperti Tailwind CSS untuk mengoptimalkan UI dan Laravel untuk mengelola backend. Hasilnya adalah situs web yang cepat, interaktif, dan berfungsi dengan baik.',
      slug: 'project-a',
      image: '/placeholder.png', // URL gambar proyek A
    },
    {
      projectName: 'Project B',
      developmentDate: '2023',
      services: 'Mobile App Development',
      agency: 'Tech Solutions Inc.',
      tools: 'React Native, Node.js',
      url: 'https://www.example.com/project-b',
      overview:
        'Project B adalah aplikasi seluler inovatif yang dibangun dengan React Native. Kami telah bekerja sama dengan Tech Solutions Inc. untuk mengembangkan aplikasi ini. Aplikasi ini memanfaatkan teknologi Node.js di sisi server untuk mengelola data dan interaksi pengguna. Aplikasi ini memungkinkan pengguna untuk melakukan berbagai tugas dengan cepat dan mudah.',
      slug: 'project-b',
      image: '/next.svg', // URL gambar proyek A
    },
    {
      projectName: 'Project C',
      developmentDate: '2021',
      services: 'UI/UX Design',
      agency: 'Design Studio XYZ',
      tools: 'Figma, Sketch',
      url: 'https://www.example.com/project-c',
      overview:
        'Project C adalah proyek desain antarmuka pengguna yang dilakukan oleh Design Studio XYZ. Kami menggunakan alat seperti Figma dan Sketch untuk merancang tata letak, elemen UI, dan interaksi pengguna. Hasilnya adalah desain yang menarik dan ramah pengguna yang memenuhi kebutuhan klien kami.',
      slug: 'project-c',
      image: '/vercel.svg', // URL gambar proyek A
    },
  ];

  // Service
  const [hoveredService, setHoverdService] = useState<number>(0);

  const handleMouseEnterService = (index: number) => {
    setHoverdService(index);
  };
  // end of service

  // Work
  const [selectedWork, setSelectedWork] = useState<number>(0);
  const swiperRefWork = useRef<SwiperCore | null>(null);

  const handleNextWork = () => {
    if (swiperRefWork.current && !swiperRefWork.current.isEnd) {
      swiperRefWork.current.slideNext();
      setSelectedWork(swiperRefWork.current.realIndex);
    }
  };

  const handlePrevWork = () => {
    if (swiperRefWork.current && !swiperRefWork.current.isBeginning) {
      swiperRefWork.current.slidePrev();
      setSelectedWork(swiperRefWork.current.realIndex);
    }
  };
  // End of Work
  return (
    <>
      {/* Hero Section */}
      <section className='sticky top-0 -z-50 -mt-16 h-screen'>
        <div className='flex h-full flex-col items-center justify-center gap-4 py-20 pt-32'>
          {/* Noice Effect */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-50 h-full w-full bg-noice bg-repeat'></div>

          {/* Badge */}
          <div className='mx-4 flex items-center justify-center bg-dark px-10 py-4 uppercase tracking-wider text-ligth md:tracking-[0.2rem]'>
            <h4
              className={`${tungsten.variable} text-center font-secondary text-xl md:text-2xl`}
            >
              Discover More About Nineneel.
            </h4>
          </div>

          {/* Big Title */}
          <div className='w-full overflow-x-hidden py-2'>
            <h2 className='animate-marquee whitespace-nowrap text-[4rem] md:text-[12rem]'>
              Create your Business Now. Create your Business Now. Create your
              Business Now.
            </h2>
          </div>

          {/* Desc */}
          <div className='mx-auto max-w-3xl px-4'>
            <p className='text-center text-base font-medium md:text-2xl'>
              As a programmer, I intend to create a comprehensive portfolio
              website showcasing my projects, mini-projects, collections,
              certificates, and more.
            </p>
          </div>

          {/* Logo Tools */}
          <div className='mx-4 grid grid-cols-4 items-center gap-6 pt-14 md:gap-10'>
            {techStackImageURL.map((item) => (
              <Image
                key={item.name}
                src={item.url}
                alt={`${item.name} Logo`}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Section Break */}
      <SectionBreak />
      {/* End Section Break */}

      {/* What I Do Section */}
      <HomeSection title='What I Do'>
        <div className='flex h-full'>
          <div className='hidden justify-center border-r border-dark md:block md:w-1/2'>
            <div className='sticky top-0 bg-noice px-12'>
              <div className='h-screen pt-36'>
                <Image
                  src={services[hoveredService].imageUrl}
                  alt=''
                  className='h-full w-full transform object-contain transition-transform duration-500'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className='w-full border-l border-dark bg-noice md:w-1/2'>
            <div className='h-full w-full'>
              <ul>
                {services.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => handleMouseEnterService(index)}
                  >
                    <div
                      className={` flex w-full flex-col border-dark px-8 py-20 transition-all duration-500 ${
                        hoveredService === index ? 'py-40' : ''
                      } 
                      ${
                        index === services.length - 1
                          ? 'border-b-0'
                          : 'border-b-2'
                      }`}
                    >
                      <div className='pb-10 md:hidden'>
                        <Image
                          src={item.imageUrl}
                          alt=''
                          className={` w-full scale-100 transform object-contain transition-transform duration-500 ${
                            hoveredService === index ? 'visible' : 'invisible'
                          } `}
                          width={0}
                          height={0}
                        />
                      </div>
                      <h4 className='text-3xl font-semibold'>{item.title}</h4>
                      <div
                        className={`flex h-0 items-center opacity-0 transition-all duration-500 ${
                          hoveredService === index
                            ? 'mt-16 opacity-100 md:mt-8'
                            : ''
                        }`}
                      >
                        <p className='text-justify font-medium'>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </HomeSection>
      {/* End What I Do section */}

      {/* Work Section */}
      <HomeSection title='Work'>
        <div className='flex h-full'>
          <div className='flex w-full flex-col justify-between border-r border-dark bg-noice py-10 md:block md:w-2/5'>
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRefWork.current = swiper;
              }}
              grabCursor={false}
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: false,
                  translate: [0, 0, -1000],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
              modules={[EffectCreative]}
              className='w-full'
              onSlideChange={() => {
                if (swiperRefWork.current) {
                  setSelectedWork(swiperRefWork.current.realIndex);
                }
              }}
              navigation={false}
            >
              {works.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className='h-full w-full bg-background bg-noice'
                >
                  <div className='flex w-full flex-col gap-8 px-6 md:px-12'>
                    <div className='flex flex-col gap-2'>
                      <span className='text-xl font-medium'>
                        {item.developmentDate}
                      </span>
                      <h3 className='text-5xl font-bold'>{item.projectName}</h3>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='text-base'>Services</span>
                      <h4 className='text-2xl font-medium'>{item.services}</h4>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='text-base'>Agency</span>
                      <h4 className='text-2xl font-medium'>{item.agency}</h4>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='text-base'>Tools</span>
                      <h4 className='text-2xl font-medium'>{item.tools}</h4>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='text-base'>View Project</span>
                      <Link href={item.url} className='w-min'>
                        <h4 className='text-2xl font-medium underline'>
                          View Website
                        </h4>
                      </Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='text-base'>Overview</span>
                      <p className='text-base'>{item.overview}</p>
                    </div>
                    <div className='pb-10 md:hidden'>
                      <Image
                        src={item.image}
                        alt=''
                        className='h-full w-full transform object-contain transition-transform duration-500'
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='mt-20 px-6 md:px-12'>
              <div className='mb-3'>
                <span className='text-lg font-normal'>
                  0{selectedWork + 1}/0{works.length}
                </span>
              </div>
              <div className='flex items-center justify-between gap-4'>
                <div className='flex gap-4'>
                  <button onClick={handlePrevWork}>
                    <div className='flex h-8 items-center  rounded-[100px] border border-dark px-6 hover:scale-95'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='50'
                        height='18'
                        viewBox='0 0 50 18'
                        fill='none'
                      >
                        <path
                          d='M0 9L15 17.6603V0.339746L0 9ZM13.5 10.5H50V7.5H13.5V10.5Z'
                          fill='black'
                        />
                      </svg>
                    </div>
                  </button>
                  <button onClick={handleNextWork}>
                    <div className='flex h-8 items-center  rounded-[100px] border border-dark px-6 hover:scale-95'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='50'
                        height='18'
                        viewBox='0 0 50 18'
                        fill='none'
                      >
                        <path
                          d='M50 9L35 0.339746V17.6603L50 9ZM0 10.5H36.5V7.5H0V10.5Z'
                          fill='black'
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                <Link href={'/work'} className='font-medium'>
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden border-l border-dark md:block md:w-3/5'>
            <div className='sticky top-32'>
              <div className='h-screen bg-noice'>
                <Image
                  src={works[selectedWork].image}
                  alt={works[selectedWork].projectName}
                  className='h-full w-full transform object-contain transition-transform duration-500'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </HomeSection>
      {/* End Work Section */}

      {/* Mini Project Section */}
      <HomeSection title='Mini Project'>
        <div className='flex h-full'>
          <div className='w-full border-r border-dark bg-noice md:w-1/2'>
            <ul>
              <li className=''>
                <div className='flex items-center justify-between border-b-2 border-dark bg-transparent/10 px-6 py-4 md:px-12'>
                  {/* tag */}
                  <span className='border border-dark px-2 py-0.5'>game</span>
                  {/* title */}
                  <h3 className='truncate text-right text-2xl font-medium'>
                    Game One
                  </h3>
                </div>
              </li>
              <li className=''>
                <div className='flex items-center justify-between border-b-2 border-dark px-6 py-4 md:px-12'>
                  {/* tag */}
                  <span className='border border-dark px-2 py-0.5'>game</span>
                  {/* title */}
                  <h3 className='truncate text-right text-2xl font-medium'>
                    Game Cloning Two
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className='hidden h-full border-l border-dark md:block md:w-1/2'>
            <div className='flex flex-col'>
              <div className='w-full border-b-2 border-dark'>
                <Image
                  src='/placeholder.png'
                  alt='placeholder'
                  height={500}
                  width={500}
                  className='aspect-square h-full w-full'
                />
              </div>
              <div className='flex flex-col gap-2 px-4 py-4'>
                <span className='w-max border border-dark px-2 py-0.5'>
                  game
                </span>
                <h2 className='text-3xl font-bold'>Game One</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
                {/* button */}
                <div className='mt-2 w-max border border-dark px-4 py-1'>
                  View Project
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeSection>
      {/* End Mini Project Section */}
    </>
  );
}
