'use client';

import { useState } from 'react';
import { Copy, Check, X } from 'lucide-react';
import Link from 'next/link';
import FloatingParticles from '../components/FloatingParticles';
import FogEffect from '../components/FogEffect';

// ===== แก้ไขข้อมูลบัญชีธนาคารตรงนี้ =====
const BANK_INFO = {
  bankName: 'ธนาคารกรุงไทย',
  accountName: 'สมาคมพัฒนาเยาวชนมุสลิมไทย',
  accountNumber: '905-3-29013-3',
  qrImage: '/IMG_1120.jpg', // ใส่ path รูป QR PromptPay ที่นี่
};

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(BANK_INFO.accountNumber.replace(/-/g, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = BANK_INFO.accountNumber.replace(/-/g, '');
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10 overflow-hidden"
      style={{ fontFamily: 'var(--font-prompt), sans-serif' }}
    >
      {/* ===== Background Decorations ===== */}
      <FloatingParticles />
      <FogEffect />
      <div className="absolute inset-0 dot-pattern opacity-40 z-0" aria-hidden="true" />
      <div
        className="decorative-circle w-[500px] h-[500px] -top-60 -right-60 bg-gradient-to-br from-[#0099cc]/[0.04] to-transparent animate-pulse-ring"
        aria-hidden="true"
      />
      <div
        className="decorative-circle w-[400px] h-[400px] -bottom-40 -left-40 bg-gradient-to-tr from-[#0099cc]/[0.03] to-transparent animate-pulse-ring"
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      />

      {/* ===== Card ===== */}
      <div className="relative z-10 w-full max-w-[480px] bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 sm:p-8">
        {/* Close Button */}
        <Link
          href="/contact"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="ปิด"
        >
          <X className="w-5 h-5" />
        </Link>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-[#1a2a5e] mb-6 pr-8">
          สนับสนุนการทำงานของกลุ่ม
        </h1>

        {/* QR Code Section */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-100">
            <img
              src={BANK_INFO.qrImage}
              alt="PromptPay QR Code"
              className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] object-contain"
            />
          </div>
        </div>

        {/* Bank Details */}
        <div className="space-y-0 mb-6">
          {/* ธนาคาร */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] text-gray-500">ธนาคาร</span>
            <span className="text-[15px] font-bold text-[#1a2a5e]">{BANK_INFO.bankName}</span>
          </div>

          {/* ชื่อบัญชี */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] text-gray-500">ชื่อบัญชี</span>
            <span className="text-[15px] font-bold text-[#1a2a5e]">{BANK_INFO.accountName}</span>
          </div>

          {/* เลขบัญชี */}
          <div className="flex items-center justify-between py-4">
            <span className="text-[15px] text-gray-500">เลขบัญชี</span>
            <span className="text-[15px] font-bold text-blue-600 tracking-wide">{BANK_INFO.accountNumber}</span>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-[15px] font-bold transition-all duration-300 ${copied
            ? 'bg-green-500 text-white shadow-[0_4px_15px_rgba(34,197,94,0.3)]'
            : 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_4px_15px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]'
            }`}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              คัดลอกแล้ว!
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              คัดลอกเลขบัญชี
            </>
          )}
        </button>
      </div>
    </div>
  );
}
