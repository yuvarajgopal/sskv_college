import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaYoutube, FaInstagram } from 'react-icons/fa';
import { COLLEGE_INFO } from '../../utils/constants';

export default function TopBar() {
  return (
    <div className="hidden md:block bg-primary-900 text-white text-xs">
      <div className="container-custom mx-auto px-4 md:px-8 flex items-center justify-between h-9">
        {/* Left: contact info */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-white/70">
            <FaPhone className="text-accent-400 text-[10px]" />
            {COLLEGE_INFO.phone[0]} | {COLLEGE_INFO.phone[1]}
          </span>
          <span className="flex items-center gap-1.5 text-white/70">
            <FaEnvelope className="text-accent-400 text-[10px]" />
            {COLLEGE_INFO.email[0]}
          </span>
        </div>

        {/* Right: quick links + social */}
        <div className="flex items-center gap-4">
          <Link to="/naac" className="text-white/70 hover:text-accent-400 transition-colors">
            NAAC
          </Link>
          <Link to="/iqac" className="text-white/70 hover:text-accent-400 transition-colors">
            IQAC
          </Link>
          <Link to="/mandatory-disclosures" className="text-white/70 hover:text-accent-400 transition-colors">
            Mandatory Disclosures
          </Link>
          <a href="#anti-ragging" className="text-white/70 hover:text-accent-400 transition-colors">
            Anti-Ragging
          </a>
          <div className="w-px h-4 bg-white/20" />
          <a
            href={COLLEGE_INFO.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <FaYoutube className="text-[#FF0000] text-2xl" />
          </a>
          <a
            href={COLLEGE_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <FaInstagram className="text-[#E1306C] text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
