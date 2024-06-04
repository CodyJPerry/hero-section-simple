import Image from 'next/image';

export default function Home() {
  return (
    <main className='m-4'>
      {/* Base Card */}
      <section className='bg-gradient-to-b from-gray-50 to-[#EDF0F3] py-14 shadow-sm rounded'>
        <div className='rounded px-3 py-12'>
          {/* Content */}
          <div>
            {/* Heading */}
            <h1 className='text-4xl text-neutral-900 font-semibold mb-4'>
              Well crafted abstract images
            </h1>
            {/* Description */}
            <p className='text-lg font-normal text-neutral-600 mb-8 md:mb-16'>
              High quality abstract images for your projects, wallpaper and
              presentations.
            </p>
            {/* Buttons */}
            <div className='flex gap-4 md:gap-8 mb-12 md:mb-8'>
              <button className='text-base md:text-lg text-neutral-900 font-medium px-5 py-3 md:px-12 md:py-4 border-[0.5px] bg-white rounded grow md:grow-0 shadow'>
                Learn more
              </button>
              <button className='text-base md:text-lg text-white font-medium bg-indigo-700 px-5 py-3 md:px-12 md:py-4 rounded grow md:grow-0 shadow'>
                See pricing
              </button>
            </div>
          </div>
          {/* Image */}
          <figure>
            <Image
              className='rounded-2xl'
              src='/prism.png'
              alt='Prism Hero'
              width={640}
              height={484}
              layout='responsive'
              priority
            />
            <figcaption className='sr-only'>Prism Hero Image</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
