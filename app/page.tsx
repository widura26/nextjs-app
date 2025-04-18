import AcmeLogo from '@/app/ui/acme-logo';
import styles from '@/app/ui/home.module.css';
import MainContent from 'components/MainContent';
import Navbar from 'components/Navbar';
import RightSidebar from 'components/RightSidebar';
<div className={styles.shape} />;
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='flex flex-col h-screen'>
      <Navbar/>
      <div className="bg-[#252525] flex overflow-hidden">
        <div className="flex-1 p-4 overflow-y-auto">
          <MainContent/>
        </div>
        <div className="w-[350px] p-4">
          <RightSidebar/>
        </div>
      </div>
    </main>

  );
}
