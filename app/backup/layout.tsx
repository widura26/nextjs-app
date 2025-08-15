import '@/app/ui/global.css';
import { Metadata } from 'next';
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: 'Widura Blog',
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className='font-poppins'>
        {children}
      </body>
    </html>
  );
}
