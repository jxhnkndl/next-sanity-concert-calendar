import Image from 'next/image';
import Link from 'next/link';

import dayjs from 'dayjs';

import { getConcerts } from '@/sanity/utils';

export default async function Home() {
  const concerts = await getConcerts();

  console.log(concerts);

  return (
    <main className='px-10 my-20 flex flex-col items-center'>
      <h1 className='text-6xl text-center font-medium uppercase mb-20'>
        Concerts
      </h1>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 mb-20'>
        {concerts.map((concert) => (
          <div key={concert._id} className='bg-slate-50 relative'>
            <div className='p-4 uppercase font-extrabold flex flex-col justify-center items-center bg-black text-slate-50 absolute top-0 right-0 w-[100px] z-50'>
              {dayjs(concert.date).format('MMM D')}
            </div>
            <div className='h-[400px] relative overflow-hidden'>
              <Image
                src={concert.image}
                alt={concert.altText}
                fill
                className='object-cover object-top'
              />
            </div>
            <div className='p-6'>
              <h2 className='text-3xl font-medium mb-1'>{concert.headliner}</h2>
              <p className='text-lg'>{concert.openers}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href='/contact'
        className='flex flex-col items-center justify-center uppercase font-medium bg-black text-slate-50 hover:bg-gray-800 transition-all w-[200px] p-4 mb-10'>
        Contact
      </Link>
    </main>
  );
}
