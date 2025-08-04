/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';
import IloveBaliPemdaLogo from '/public/img/logo/ilovebali-pemda-logo.png';
import VectorSidebar from '/public/img/vector/sidebar-vector.png';

import { IRoute } from 'types/navigation';
import Image from 'next/image';

function SidebarHorizon(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (
    <div
      className={`sm:none duration-175 w-72 linear fixed !z-50 flex h-[calc(100vh-3rem)] my-6 mx-5 flex-col rounded-xl bg-white shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <HiX />
      </span>

      <div className={`my-10 flex flex-col justify-center items-center`}>
        <Image
          src={IloveBaliPemdaLogo}
          width={250}
          alt="ilovebali-pemda-logo"
        />
        <Image
          src={VectorSidebar}
          width={250}
          alt="vector-sidebar"
          className="mt-5"
        />
      </div>
      {/* Nav item */}

      <ul className="mb-auto -mt-5">
        <Links routes={routes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
}

export default SidebarHorizon;
