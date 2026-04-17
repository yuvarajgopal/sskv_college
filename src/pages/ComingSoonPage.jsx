import { Link, useLocation } from 'react-router-dom';
import { FaHardHat, FaArrowLeft } from 'react-icons/fa';

// Derive a friendly section name from the URL query or pathname
function getSectionName(location) {
  const params = new URLSearchParams(location.search);
  const section = params.get('section');
  if (section) return section.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return null;
}

export default function ComingSoonPage() {
  const location = useLocation();
  const section = getSectionName(location);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-neutral-50">
      <div className="text-center px-6 max-w-lg">
        <div className="w-20 h-20 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
          <FaHardHat className="text-4xl text-accent-600" />
        </div>
        <h1 className="text-3xl font-bold text-primary-800 font-heading mb-3">
          {section ? section : 'Coming Soon'}
        </h1>
        <p className="text-neutral-500 leading-relaxed mb-8">
          This section is currently being developed. Please check back soon — we're working hard to bring you this content.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors font-heading"
        >
          <FaArrowLeft className="text-xs" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
