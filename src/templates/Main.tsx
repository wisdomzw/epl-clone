import Link from 'next/link';
import { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';
import { VscLinkExternal } from 'react-icons/vsc';
import Image from 'next/image'
import { Arsenal, Liverpool, ManCity, ManUtd  } from './Logos'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div>
      <header>
        <div className='flex'>
          <div className='flex items-center text-xs'>
            <h4 className='uppercase font-bold'>Club Sites</h4>
            <VscLinkExternal className='ml-1'/>
          </div>

          <ul className='flex'>
            <li>
              <Image src={Arsenal} width={30} height={30} alt='Arsenal'/>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>
              <Image src={Liverpool} width={30} height={30} alt='Liverpool'/>
            </li>
            <li>
              <Image src={ManCity} width={30} height={30} alt='Man City'/>
            </li>
            <li>
              <Image src={ManUtd} width={30} height={30} alt='Man Utd'/>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <nav>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  About
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content py-5 text-xl mx-auto max-w-screen-lg">{props.children}</div>

      <footer>
        <span className='text-bold text-sm' >&copy; Premier League {new Date().getFullYear()}</span>
      </footer>
    </div>
  </div>
);

export { Main };
