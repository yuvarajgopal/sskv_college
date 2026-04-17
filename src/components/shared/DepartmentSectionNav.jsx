import { useEffect, useState } from 'react';

const sections = [
  { id: 'about', label: 'About the Department' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'programmes', label: 'Programmes Offered' },
  { id: 'activities', label: 'Department Activities' },
  { id: 'newsletter', label: 'Newsletter' },
];

export default function DepartmentSectionNav() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const offset = 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActive(sections[i].id);
          return;
        }
      }
      setActive('about');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white border-b border-neutral-200 sticky top-[60px] z-40 shadow-sm">
      <div className="container-custom mx-auto">
        <div className="flex items-center gap-1 overflow-x-auto py-1 no-scrollbar">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors duration-200 ${
                active === s.id
                  ? 'text-accent-400 bg-primary-50'
                  : 'text-neutral-500 hover:text-primary-800 hover:bg-neutral-50'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
