import { Link } from 'react-router-dom';
import { FaFilePdf, FaBell, FaCalendarAlt } from 'react-icons/fa';
import AnimatedSection from '../shared/AnimatedSection';
import { events } from '../../data/events';

const notices = [
  {
    id: 1,
    date: 'Feb 20, 2026',
    title: 'Farewell to final year students ',
    isNew: true,
  },
  {
    id: 2,
    date: 'Feb 18, 2026',
    title: 'parents teachers meeting - commerce (G) department ',
    isNew: true,
    hasPdf: true,
  },
  {
    id: 3,
    date: 'Feb 15, 2026',
    title: 'parents teachers meeting computer science department ',
    isNew: true,
  },
  {
    id: 4,
    date: 'Feb 10, 2026',
    title: 'parents teachers meeting tamil department ',
    isNew: false,
    hasPdf: true,
  },
  {
    id: 5,
    date: 'Feb 5, 2026',
    title: 'Scholarship Application Deadline — Feb 28',
    isNew: false,
  },
  {
    id: 6,
    date: 'April 20, 2026',
    title: 'Farewell to final year students ',
    isNew: false,
    hasPdf: true,
  },
];

export default function NoticeBoard() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Notices */}
          <AnimatedSection direction="left">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden h-full">
              <div className="bg-primary-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-lg">
                  <FaBell className="text-accent-400" />
                  Latest Notices / Circulars
                </div>
                <span className="text-xs text-white/50">Updated regularly</span>
              </div>
              <ul className="divide-y divide-neutral-100">
                {notices.map((notice) => (
                  <li key={notice.id} className="flex items-start gap-3 px-5 py-3.5 hover:bg-neutral-50 transition-colors">
                    <div className="flex-shrink-0 text-right min-w-[80px]">
                      <span className="text-xs text-neutral-400 leading-tight">{notice.date}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2">
                        <p className="text-sm text-neutral-700 leading-snug">{notice.title}</p>
                        {notice.isNew && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded">
                            NEW
                          </span>
                        )}
                        {notice.hasPdf && (
                          <FaFilePdf className="flex-shrink-0 text-red-500 text-sm mt-0.5" title="PDF available" />
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-5 py-3 border-t border-neutral-100 bg-neutral-50">
                <Link
                  to="/about"
                  className="text-sm text-primary-700 font-semibold hover:text-accent-600 transition-colors"
                >
                  View All Notices →
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Events */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden h-full">
              <div className="bg-accent-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-lg">
                  <FaCalendarAlt />
                  Upcoming Events
                </div>
                <span className="text-xs text-white/70">2026</span>
              </div>
              <ul className="divide-y divide-neutral-100">
                {events.slice(0, 6).map((event, index) => (
                  <li key={index} className="flex items-start gap-4 px-5 py-3.5 hover:bg-neutral-50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-center">
                      <span className="text-primary-800 font-bold text-xs leading-tight">{event.date}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 leading-snug">{event.title}</p>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">{event.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-5 py-3 border-t border-neutral-100 bg-neutral-50">
                <Link
                  to="/about"
                  className="text-sm text-accent-700 font-semibold hover:text-accent-600 transition-colors"
                >
                  View All Events →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
