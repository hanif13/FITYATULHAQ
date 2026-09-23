'use client';

import { useState } from 'react';
import { Share2, Home, Mail } from 'lucide-react';
import Link from 'next/link';
import FloatingParticles from '../components/FloatingParticles';
import FogEffect from '../components/FogEffect';

// Custom Brand icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

// Custom TikTok icon for consistency with Lucide style
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

type OrgType = 'fityatulhaq' | 'tmyda' | 'youthcare';

type LinkItem = {
  id: string;
  icon: React.ElementType;
  label: string;
  url: string;
  handle: string;
};

type OrgData = {
  id: OrgType;
  name: string;
  subtitle: string;
  logo: string;
  links: LinkItem[];
};

const CONTACT_DATA: Record<OrgType, OrgData> = {
  fityatulhaq: {
    id: 'fityatulhaq',
    name: 'Fityatulhaq',
    subtitle: 'Fityatulhaq Official Contact',
    logo: '/logo-fityatulhaq.png',
    links: [
      { id: 'fb', icon: FacebookIcon, label: 'Facebook', url: 'https://www.facebook.com/FityatulhaqOfficial', handle: 'fityatulhaq' },
      { id: 'ig', icon: InstagramIcon, label: 'Instagram', url: 'https://www.instagram.com/fityatulhaq.official/', handle: '@fityatulhaq' },
      { id: 'yt', icon: YoutubeIcon, label: 'YouTube', url: 'https://www.youtube.com/@officialD2i', handle: 'fityatulhaq' },
      { id: 'tk', icon: TikTokIcon, label: 'TikTok', url: 'https://www.tiktok.com/@fityatulhaq?lang=th-TH', handle: '@fityatulhaq' },
      { id: 'mail', icon: Mail, label: 'อีเมล', url: '#', handle: 'contact@fityatulhaq.org' },
    ]
  },
  tmyda: {
    id: 'tmyda',
    name: 'TMYDA',
    subtitle: 'TMYDA Official Contact',
    logo: '/TMYDA_LOGO-06.png',
    links: [
      { id: 'fb', icon: FacebookIcon, label: 'Facebook', url: 'https://www.facebook.com/TMYDA', handle: 'tmyda' },
      { id: 'ig', icon: InstagramIcon, label: 'Instagram', url: 'https://www.instagram.com/tmyda.official/', handle: '@tmyda' },
      { id: 'yt', icon: YoutubeIcon, label: 'YouTube', url: 'https://www.youtube.com/@tmyda1906', handle: 'tmyda' },
      { id: 'tk', icon: TikTokIcon, label: 'TikTok', url: 'https://www.tiktok.com/@tmyda.official?lang=th-TH', handle: '@tmyda' },
      { id: 'mail', icon: Mail, label: 'อีเมล', url: 'mailto:tmyda.info@gmail.com', handle: 'tmyda.info@gmail.com' },
    ]
  },
  youthcare: {
    id: 'youthcare',
    name: 'Youthcare',
    subtitle: 'Youthcare Official Contact',
    logo: '/youthcare.jpg',
    links: [
      { id: 'fb', icon: FacebookIcon, label: 'Facebook', url: 'https://www.facebook.com/IslamYouthCare', handle: 'youthcare' },
      { id: 'ig', icon: InstagramIcon, label: 'Instagram', url: 'https://www.instagram.com/youth.care.official/', handle: '@youthcare' },
    ]
  }
};

export default function ContactPage() {
  const [activeOrg, setActiveOrg] = useState<OrgType>('fityatulhaq');

  const currentData = CONTACT_DATA[activeOrg];

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center py-10 px-4 text-[#1a1a1a] overflow-hidden" style={{ fontFamily: 'var(--font-prompt), sans-serif' }}>
      {/* ===== Background Decorations (same as main page) ===== */}
      <FloatingParticles />
      <FogEffect />

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40 z-0" aria-hidden="true" />

      {/* Large decorative gradient circles */}
      <div
        className="decorative-circle w-[500px] h-[500px] -top-60 -right-60 bg-gradient-to-br from-[#0099cc]/[0.04] to-transparent animate-pulse-ring"
        aria-hidden="true"
      />
      <div
        className="decorative-circle w-[400px] h-[400px] -bottom-40 -left-40 bg-gradient-to-tr from-[#0099cc]/[0.03] to-transparent animate-pulse-ring"
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 w-full max-w-[480px] flex flex-col items-center">

        {/* Share Button (Top Right) */}
        <button
          className="absolute right-0 top-0 p-3 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-gray-500 hover:text-gray-900 transition-colors"
          aria-label="Share"
          onClick={async () => {
            const shareData = {
              title: `${currentData.name} — Contact`,
              text: `ติดต่อ ${currentData.name} ผ่านช่องทางต่างๆ`,
              url: window.location.href,
            };
            try {
              if (navigator.share) {
                await navigator.share(shareData);
              } else {
                await navigator.clipboard.writeText(window.location.href);
                alert('คัดลอกลิงก์แล้ว!');
              }
            } catch (err) {
              // User cancelled share
            }
          }}
        >
          <Share2 className="w-5 h-5" />
        </button>



        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 w-full transition-opacity duration-500" key={activeOrg}>
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.08)] mb-4 border-2 border-white overflow-hidden">
            <img
              src={currentData.logo}
              alt={`${currentData.name} logo`}
              className="w-16 h-16 object-contain"
            />
          </div>

          <h1 className="text-2xl font-bold  mb-1">{currentData.name}</h1>
          <p className="text-sm text-gray-500 font-medium mb-3">{currentData.subtitle}</p>

          <div className="px-4 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm text-sm text-gray-700 ">
            สร้างเยาวชนคุณภาพ ให้กับสังคม
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-white p-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] mb-8 w-full max-w-[320px]">
          {(['fityatulhaq', 'tmyda', 'youthcare'] as OrgType[]).map((org) => (
            <button
              key={org}
              onClick={() => setActiveOrg(org)}
              className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all ${activeOrg === org
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              {org === 'fityatulhaq' ? 'Fityatulhaq' : org === 'tmyda' ? 'TMYDA' : 'Youthcare'}
            </button>
          ))}
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-3 mb-8">
          {currentData.links.map((link, index) => (
            <a
              key={`${activeOrg}-${link.id}`}
              href={link.url}
              className="group flex items-center p-4 bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-transparent hover:border-gray-100 transition-all duration-300"
              style={{ animationFillMode: 'both', animationDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                <link.icon className="w-5 h-5" />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="font-bold text-[15px] text-gray-900  leading-tight">{link.label}</h2>
                <p className="text-[13px] text-gray-500 mt-0.5">{link.handle}</p>
              </div>
              <div className="text-gray-300 group-hover:text-blue-500 transition-colors pr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Return to Home Button */}
        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 p-4 bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all font-bold text-[15px]  text-gray-700 hover:text-blue-600 border border-transparent hover:border-gray-100"
        >
          <Home className="w-5 h-5" />
          กลับสู่หน้าหลักเว็บไซต์
        </Link>

        {/* Footer */}
        <div className="mt-12 text-center text-[13px] text-gray-400  px-4">
          © 2025 FITYATULHAQ × TMYDA. สงวนลิขสิทธิ์.
        </div>

      </div>
    </div>
  );
}
