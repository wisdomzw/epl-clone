import Link from 'next/link';
import { ReactNode } from 'react';

import { VscLinkExternal } from 'react-icons/vsc';
import Logo from '../components/Logo';
import { Arsenal, AstonVilla, Brentford, Brighton, Chelsea, Everton, Leeds, Leicester, Liverpool, ManCity, ManUtd  } from '../components/Logos'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div>
      <header>
      {/* .5rem 0 .5rem 16.5rem */}
        <div className='flex py-1.5 pl-40'>
          <div className='flex items-center text-xs'>
            <h4 className='uppercase font-bold'>Club Sites</h4>
            <VscLinkExternal className='ml-1'/>
          </div>

          <ul className='flex'>            
              <Logo clubLink='/' imgSource={Arsenal} altText='Arsenal' />            
              <Logo clubLink='/' imgSource={AstonVilla} altText='Aston Villa'/>            
              <Logo clubLink='/' imgSource={Brentford} altText='Brentford'/>            
              <Logo clubLink='/' imgSource={Brighton} altText='Brighton'/>            
              <Logo clubLink='/' imgSource={Chelsea} altText='Chelsea'/>            
              <Logo clubLink='/' imgSource={Everton} altText='Everton'/>            
              <Logo clubLink='/' imgSource={Leeds} altText='Leeds'/>            
              <Logo clubLink='/' imgSource={Leicester} altText='Leicester'/>            
              <Logo clubLink='/' imgSource={Liverpool} altText='Liverpool'/>            
              <Logo clubLink='/' imgSource={ManCity} altText='Man City'/>            
              <Logo clubLink='/' imgSource={ManUtd} altText='Man Utd'/>
          </ul>
        </div>

        <nav className='bg-purple-900 text-white h-[60px] flex items-center'>
          <ul className="flex flex-wrap text-sm font-bold ">
            <li className="px-6 ">
              <Link href="/">
                <a className="border-none text-white ">
                  Premier League
                </a>
              </Link>
            </li>
            <li className="px-6">
              <Link href="/about/">
                <a className="border-none text-white">
                  Fantasy
                </a>
              </Link>
            </li>
            <li className="px-6">
              <a className="border-none text-white">
                Video
              </a>
            </li>
            <li>
              <a className="border-none text-white">
                More
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
