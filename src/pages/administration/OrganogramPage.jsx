import Hero from '../../components/shared/Hero';
import AnimatedSection from '../../components/shared/AnimatedSection';

const govBody = [
  { name: 'Dr. Nanditha Krishna', role: 'President' },
  { name: 'Dr. Uma Devi',         role: 'Vice-President' },
  { name: 'Dr. C.K. Raman',       role: 'Secretary' },
  { name: 'Dr. Sumanth C. Raman', role: 'Joint Secretary' },
  { name: 'Dr. K. Thirumamagal',  role: 'Principal' },
];

const branches = [
  {
    name: 'Departments',
    levels: ['Head of Departments', 'Faculty Members'],
  },
  {
    name: 'Administrative Office',
    levels: ['Office Superintendent', 'Office Staff (Non Teaching)'],
  },
  {
    name: 'Committees',
    levels: ['Nodal Officers', 'Member Faculty', 'Member Students'],
  },
  {
    name: 'Clubs',
    levels: ['Coordinators', 'Member Faculty', 'Member Students'],
  },
  {
    name: 'Units',
    levels: ['Programme Coordinators', 'Member Students'],
  },
];

/* ── Reusable node box ───────────────────────────────────────── */
function Node({ label, variant = 'branch' }) {
  const styles = {
    header:  'bg-emerald-700 text-white font-bold text-xs',
    branch:  'bg-emerald-600 text-white text-[11px]',
    leaf:    'bg-emerald-500 text-white text-[11px]',
  };
  return (
    <div className={`${styles[variant]} text-center rounded px-2 py-2.5 w-full leading-snug shadow-sm`}>
      {label}
    </div>
  );
}

/* ── Vertical connector line ─────────────────────────────────── */
function VLine({ h = 'h-5' }) {
  return <div className={`w-px ${h} bg-neutral-500 flex-shrink-0`} />;
}

export default function OrganogramPage() {
  return (
    <>
      <Hero
        title="College Organogram"
        subtitle="Organisational structure of SSKV College of Arts and Science for Women"
        height="medium"
        breadcrumb="Administration › College Organogram"
      />

      <section className="section-padding bg-sky-100">
        <div className="container-custom mx-auto">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">

              {/* ── Governing Body ───────────────────────────── */}
              <div className="flex flex-col items-center">
                <div className="border-2 border-neutral-600 rounded-lg bg-white shadow-md w-72">
                  <div className="bg-neutral-700 text-white text-center text-sm font-bold py-2.5 rounded-t-md tracking-wide">
                    Governing Body
                  </div>
                  <div className="p-3 space-y-1.5">
                    {govBody.map((p) => (
                      <div
                        key={p.name}
                        className="bg-emerald-700 text-white rounded px-3 py-2 text-center"
                      >
                        <div className="text-xs font-bold leading-snug">{p.name}</div>
                        <div className="text-[10px] text-emerald-200 mt-0.5">{p.role}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drop from gov body → horizontal rail */}
                <VLine h="h-7" />
              </div>

              {/* ── Horizontal rail + 5 branch columns ──────── */}
              {/*
                  With gap-0 and 5 equal columns the center of col-1 = 10%
                  and center of col-5 = 90%, so left-[10%] right-[10%] spans
                  exactly between the two outer column centers.
              */}
              <div className="relative">
                {/* Horizontal connector line */}
                <div className="absolute top-0 left-[10%] right-[10%] border-t-2 border-neutral-500" />

                <div className="grid grid-cols-5 gap-0">
                  {branches.map((branch) => (
                    <div key={branch.name} className="flex flex-col items-center px-2">

                      {/* Vertical drop from rail to branch header */}
                      <VLine h="h-7" />

                      {/* Branch header */}
                      <Node label={branch.name} variant="header" />

                      {/* Levels within branch */}
                      {branch.levels.map((level, j) => (
                        <div key={j} className="flex flex-col items-center w-full">
                          <VLine h="h-4" />
                          <Node
                            label={level}
                            variant={j === branch.levels.length - 1 ? 'leaf' : 'branch'}
                          />
                        </div>
                      ))}

                    </div>
                  ))}
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
