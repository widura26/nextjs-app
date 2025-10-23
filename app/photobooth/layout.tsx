import Sidebar from 'components/home/Sidebar';
import Navbar from 'components/Navbar';

const PhotoBoothLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className=''>
            {/* <Navbar/>
            <div className="bg-[#252525] h-screen flex overflow-hidden">
                <Sidebar/>
                <div className="flex-1 p-4 overflow-y-auto">{children}</div>
            </div> */}
            {children}
        </main>
    );
};

export default PhotoBoothLayout;