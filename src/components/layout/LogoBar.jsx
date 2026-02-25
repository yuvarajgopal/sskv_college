import { Link } from 'react-router-dom';
import { images } from '../../data/media';

export default function LogoBar() {
  return (
    <div className="hidden md:block bg-white border-b-2 border-accent-400">
      <div className="container-custom mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-6">
        {/* Left: Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={images.general.logo}
            alt="SSKV College Logo"
            className="h-20 w-20 object-contain rounded-full"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </Link>

        {/* Center: College identity */}
        <div className="flex-1 text-center">
          <h1 className="font-heading font-bold text-primary-800 text-xl lg:text-2xl xl:text-3xl leading-tight">
            SSKV College of Arts &amp; Science for Women
          </h1>
          <p className="text-primary-600 text-sm mt-0.5">
            (Affiliated to University of Madras | Approved by UGC)
          </p>
          <p className="text-neutral-500 text-xs mt-0.5">
            Kilambi, Kanchipuram — 631 551
          </p>
        </div>

        {/* Right: NAAC badge */}
        <div className="flex-shrink-0 flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-lg px-3 py-1.5">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">N</span>
            </div>
            <div className="text-right">
              <div className="text-amber-800 font-bold text-xs leading-tight">NAAC</div>
              <div className="text-amber-600 text-[10px] leading-tight">Accreditation Applied</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
