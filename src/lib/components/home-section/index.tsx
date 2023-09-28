export default function HomeSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className='bg-transparent bg-noice'>
      {/* Main Content */}
      <div className='border-t-2 border-dark'>
        <div className='sticky top-16 z-10 items-center justify-center border-b-2 border-dark bg-background bg-noice px-6 py-4 md:px-12'>
          <h2 className='text-4xl font-bold uppercase'>{title}</h2>
        </div>
        <div className=' bg-background'>{children}</div>
      </div>
      {/* End Main Contente */}
    </section>
  );
}
