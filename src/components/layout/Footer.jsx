import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { navLinks, quickLinks, externalLinks } from '../../data/navigation';
import { departments } from '../../data/departments';
import { COLLEGE_INFO } from '../../utils/constants';

// Show up to Placement by default
const CUTOFF_LABEL = 'Placement';
const cutoffIndex = navLinks.findIndex((l) => l.label === CUTOFF_LABEL);
const primaryLinks = navLinks.slice(0, cutoffIndex + 1);
const moreLinks = navLinks.slice(cutoffIndex + 1);

export default function Footer() {
  const [showMore, setShowMore] = useState(false);

  return (
    <footer className="bg-primary-900 text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-accent-400" />

      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">

            {/* Column 1: About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/logo/SSKV.png"
                  alt="SSKV College Logo"
                  className="h-12 w-auto object-contain flex-shrink-0"
                />
                <div>
                  <div className="font-heading font-bold text-base leading-tight">SSKV College</div>
                  <div className="text-white/60 text-xs">Arts & Science for Women</div>
                   <div className="text-white/60 text-xs">(Recognised under Section 2(f) of the UGC Act)</div>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                Empowering women through quality education. Affiliated to University of Madras, offering diverse programs in Arts, Science, and Commerce.
              </p>
              <div className="flex gap-3">
                <a
                  href={COLLEGE_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-white text-2xl" />
                </a>
                <a
                  href={COLLEGE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg flex items-center justify-center hover:opacity-80 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #833AB4, #E1306C, #FCAF45)' }}
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white text-2xl" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-base mb-4 text-accent-400">Quick Links</h3>
              <ul className="space-y-1.5">
                {primaryLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-accent-400 transition-colors text-sm"
                    >
                      › {link.label}
                    </Link>
                  </li>
                ))}

                {showMore && (
                  <>
                    {moreLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-white/60 hover:text-accent-400 transition-colors text-sm"
                        >
                          › {link.label}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-1 border-t border-white/10 mt-2">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block text-white/60 hover:text-accent-400 transition-colors text-sm mt-1.5"
                        >
                          › {link.label}
                        </Link>
                      ))}
                    </li>
                  </>
                )}

                <li className="pt-1">
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center gap-1.5 text-accent-400 text-sm font-semibold hover:text-accent-300 transition-colors"
                  >
                    {showMore ? (
                      <>Show Less <FaChevronUp className="text-[10px]" /></>
                    ) : (
                      <>View More <FaChevronDown className="text-[10px]" /></>
                    )}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Departments */}
            <div>
              <h3 className="font-heading font-bold text-base mb-4 text-accent-400">Departments</h3>
              <ul className="space-y-1.5">
                {departments.slice(0, 6).map((dept) => (
                  <li key={dept.id}>
                    <Link
                      to="/academics"
                      className="text-white/60 hover:text-accent-400 transition-colors text-sm"
                    >
                      › {dept.degree}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/academics" className="text-accent-400 text-sm font-semibold hover:text-accent-300 transition-colors">
                    View All Programs →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Important Links */}
            <div>
              <h3 className="font-heading font-bold text-base mb-4 text-accent-400">Important Links</h3>
              <ul className="space-y-1.5">
                {externalLinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white/60 hover:text-accent-400 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt className="text-[10px] flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Contact */}
            <div>
              <h3 className="font-heading font-bold text-base mb-4 text-accent-400">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm">
                  <FaMapMarkerAlt className="text-accent-400 mt-0.5 flex-shrink-0 text-xs" />
                  <span className="text-white/60 text-xs leading-relaxed">
                    {COLLEGE_INFO.name},<br />Kilambi, Kanchipuram — 631 551
                  </span>
                </li>
                <li className="flex gap-2 text-sm">
                  <FaPhone className="text-accent-400 mt-0.5 flex-shrink-0 text-xs" />
                  <div className="text-white/60 text-xs space-y-0.5">
                    {COLLEGE_INFO.phoneList.map((p) => (
                      <a
                        key={p.tel}
                        href={`tel:${p.tel}`}
                        className="block hover:text-accent-400 transition-colors"
                      >
                        <span className="text-white/40">{p.label}:</span> {p.display}
                      </a>
                    ))}
                  </div>
                </li>
                
                <li className="flex gap-2 text-sm">
                  <FaEnvelope className="text-accent-400 mt-0.5 flex-shrink-0 text-xs" />
                  <div className="text-white/60 text-xs">
                    {COLLEGE_INFO.email.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="block hover:text-accent-400 transition-colors">
                        {email}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-4 md:px-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} {COLLEGE_INFO.shortName}. All rights reserved.</p>
            <p className="text-center">
              Affiliated to {COLLEGE_INFO.affiliation} | Anti-Ragging Helpline:{' '}
              <span className="text-accent-400 font-semibold">1800-180-5522</span>
            </p>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-[9px]">N</span>
              </div>
              <span>NAAC Accreditation Applied</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
