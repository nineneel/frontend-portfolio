import { tungsten } from '@/lib/styles/font';

export default function Home() {
  return (
    <>
      <section className='-mt-16 h-screen pt-16'>
        <div className='flex h-full flex-col justify-between py-20'>
          <h1
            className={`${tungsten.variable} px-12 text-left font-hero text-[7rem] leading-none md:text-[18rem]`}
          >
            NINENEEL
          </h1>
          <p className='px-12 text-justify text-3xl uppercase leading-10 tracking-normal'>
            Saya seorang mahasiswa dan web developer. Fokus saya adalah dalam
            membuat dan mengembangkan website dan terus meningkatkan
            keterampilan saya untuk menjadi seorang web developer yang lebih
            baik. Silakan cek CV saya untuk informasi lebih lanjut tentang
            keterampilan dan pengalaman saya.
          </p>
          <div className='mt-10 bg-dark px-12 py-8 uppercase text-ligth'>
            <h4 className=' text-4xl font-semibold uppercase'>Laravel</h4>
          </div>
        </div>
      </section>
    </>
  );
}
