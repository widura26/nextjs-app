import { Metadata } from 'next';
import { Poppins } from "next/font/google";

export const metadata = {
  title: 'Happy Graduation',
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function ZetiraLayout({
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
