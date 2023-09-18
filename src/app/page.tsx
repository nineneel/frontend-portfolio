import { tungsten } from "@/lib/styles/font";

export default function Home() {
  return (
    <>
      <section className='h-screen'>
        <div className="w-full">
          <h1 className={`${tungsten.variable} text-center font-hero text-[18rem] leading-none`}>
            NINENEEL
          </h1>
        </div>
      </section>
    </>
  );
}
