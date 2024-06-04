import Image from 'next/image';

export default function Home() {
  return (
    <main className='m-4'>
      {/* Base Card */}
      <section className='bg-gradient-to-b from-gray-50 to-[#EDF0F3] py-14 shadow-sm rounded'>
        <div className='rounded px-3 py-12'>
          {/* Heading */}
          <h1 className='text-4xl text-neutral-900 font-semibold mb-4'>
            Well crafted abstract images
          </h1>
          {/* Description */}
          <p className='text-lg font-normal text-neutral-600 mb-8'>
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>
          {/* Buttons */}
          <div className='flex gap-4 mb-12'>
            <button className='text-base text-neutral-900 font-medium px-5 py-3 border-[0.5px] bg-white rounded grow shadow'>
              Learn more
            </button>
            <button className='text-base text-white font-medium bg-indigo-700 px-5 py-3 rounded grow shadow'>
              See pricing
            </button>
          </div>
          {/* Image */}
          <figure className='w-full'>
            <Image
              className='rounded-2xl'
              src='/prism.png'
              alt='Prism Hero'
              width={640}
              height={484}
              priority
            />
            <figcaption className='sr-only'>Prism Hero Image</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
