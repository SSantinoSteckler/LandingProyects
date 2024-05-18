type ChildrenProp = {
  children: string;
};

export const CardProyect = ({ children }: ChildrenProp) => {
  return (
    <div className=' bg-white w-full h-80 shadow-2xl  cursor-pointer relative border-2 border-black'>
      <iframe src={children} className='w-full h-full'></iframe>
      <a
        href={children}
        target='_blank'
        className='absolute bg-black text-white p-2 px-6 bottom-5 left-5 rounded-xl hover:bg-white hover:text-black hover:border-2 border-black transition-all'
      >
        Abrir
      </a>
    </div>
  );
};
