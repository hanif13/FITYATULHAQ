import Image from "next/image";
import FloatingParticles from "./components/FloatingParticles";
import FogEffect from "./components/FogEffect";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-white overflow-hidden">
      {/* ===== Background Decorations ===== */}
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
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logos */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-14">
          <div className="animate-slide-in-left delay-100">
            <Image
              src="/logo-fityatulhaq.png"
              alt="FITYATULHAQ Logo"
              width={150}
              height={150}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain"
              priority
            />
          </div>

          {/* Separator */}
          <div className="animate-fade-in delay-300">
            <div className="w-px h-14 sm:h-20 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          </div>

          <div className="animate-slide-in-right delay-100">
            <Image
              src="/TMYDA_LOGO-06.png"
              alt="TMYDA Logo"
              width={150}
              height={150}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain"
              priority
            />
          </div>
        </div>

        {/* Coming Soon — Big & Bold */}
        <h1 className="animate-fade-in-up delay-400 text-center">
          <span className="block text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-none bg-gradient-to-r from-[#0099cc] to-[#33bbee] bg-clip-text text-transparent animate-gradient">
            Coming
          </span>
          <span className="block text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight leading-none text-gray-900 mt-2">
            Soon
          </span>
        </h1>

        {/* Minimal pulsing dot */}
        <div className="animate-fade-in delay-1000 mt-10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0099cc] animate-pulse" />
          <span className="text-sm text-gray-400 tracking-widest uppercase">Stay tuned</span>
        </div>

        {/* Social Links — ใส่ลิงค์ได้ที่ href */}
        <div className="animate-fade-in delay-1200 mt-12 flex items-start justify-center gap-10 sm:gap-16">

          {/* FITYATULHAQ */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300">FITYATULHAQ</span>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/FityatulhaqOfficial" id="fityatulhaq-facebook" aria-label="FITYATULHAQ Facebook" className="group p-2.5 rounded-full hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#0099cc] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/fityatulhaq.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" id="fityatulhaq-instagram" aria-label="FITYATULHAQ Instagram" className="group p-2.5 rounded-full hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#0099cc] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@officiald2i?si=H5rRYKKSWwN45Ps7" id="fityatulhaq-youtube" aria-label="FITYATULHAQ YouTube" className="group p-2.5 rounded-full hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#0099cc] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* TMYDA */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300">TMYDA</span>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/TMYDA" id="tmyda-facebook" aria-label="TMYDA Facebook" className="group p-2.5 rounded-full hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#0099cc] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/tmyda.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" id="tmyda-instagram" aria-label="TMYDA Instagram" className="group p-2.5 rounded-full hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#0099cc] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@tmyda1906?si=1suEa0FpGv1SHdO8" id="tmyda-youtube" aria-label="TMYDA YouTube" className="group p-2.5 rounded-full hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#0099cc] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <p className="animate-fade-in delay-1500 mt-8 text-xs text-gray-300 tracking-wide">
          © {new Date().getFullYear()} FITYATULHAQ TMYDA
        </p>
      </div>
    </main>
  );
}
