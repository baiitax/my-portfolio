import type { Metadata } from 'next';
import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-500.css';
import '@fontsource/manrope/latin-600.css';
import '@fontsource/manrope/latin-700.css';
import './globals.css';
export const metadata: Metadata={...(process.env.NEXT_PUBLIC_SITE_URL ? {metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL)} : {}),title:'Mujahid Yakubu Baita | Technology, Business Systems & Digital Transformation',description:'Explore the professional portfolio of Mujahid Yakubu Baita, covering software development, business-process automation, digital transformation, product architecture, and agro-commercial strategy.',openGraph:{title:'Mujahid Yakubu Baita — Technology. Systems. Strategy.',description:'Building Intelligent Systems. Automating Business. Connecting Markets.',type:'website',images:[{url:'/opengraph-image',width:1200,height:630}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
