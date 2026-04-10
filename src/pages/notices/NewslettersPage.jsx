import { useState, useCallback } from 'react';
import { FaNewspaper, FaDownload, FaFilePdf, FaChevronLeft, FaChevronRight, FaSearchPlus, FaSearchMinus, FaExpand } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const newsletters = [
  { title: 'SSKV Newsletter 2026', year: '2026', file: 'SSKV_Newsletter_2026.pdf', available: true },
];

function PDFViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

  const goToPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goToNext = () => setPageNumber((p) => Math.min(numPages || 1, p + 1));
  const zoomIn = () => setScale((s) => Math.min(2.5, s + 0.2));
  const zoomOut = () => setScale((s) => Math.max(0.6, s - 0.2));
  const resetZoom = () => setScale(1.2);

  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-primary-900 text-white flex-wrap">
        <div className="flex items-center gap-2">
          <button onClick={goToPrev} disabled={pageNumber <= 1} className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <FaChevronLeft className="text-sm" />
          </button>
          <span className="text-sm font-medium min-w-[100px] text-center">
            Page {pageNumber} of {numPages || '...'}
          </span>
          <button onClick={goToNext} disabled={pageNumber >= (numPages || 1)} className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button onClick={zoomOut} className="p-2 rounded-lg hover:bg-white/10 transition-colors" title="Zoom out">
            <FaSearchMinus className="text-sm" />
          </button>
          <button onClick={resetZoom} className="px-2 py-1 rounded-lg hover:bg-white/10 transition-colors text-xs font-medium" title="Reset zoom">
            {Math.round(scale * 100)}%
          </button>
          <button onClick={zoomIn} className="p-2 rounded-lg hover:bg-white/10 transition-colors" title="Zoom in">
            <FaSearchPlus className="text-sm" />
          </button>
          <a href={file} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors ml-2" title="Open fullscreen">
            <FaExpand className="text-sm" />
          </a>
          <a href={file} download className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-400 text-primary-900 text-xs font-bold rounded-lg hover:bg-accent-300 transition-colors ml-1">
            <FaDownload className="text-[10px]" /> Download
          </a>
        </div>
      </div>

      {/* PDF Page */}
      <div className="overflow-auto bg-neutral-200 flex justify-center py-6" style={{ maxHeight: '80vh' }}>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4" />
              <p className="text-neutral-500 text-sm">Loading newsletter...</p>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center py-20">
              <FaFilePdf className="text-4xl text-red-300 mb-3" />
              <p className="text-neutral-500 text-sm">Failed to load PDF. Please try downloading instead.</p>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            loading={
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
              </div>
            }
          />
        </Document>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-center gap-3 px-4 py-3 bg-neutral-50 border-t border-neutral-100">
        <button onClick={goToPrev} disabled={pageNumber <= 1} className="flex items-center gap-1.5 px-4 py-2 bg-primary-800 text-white text-xs font-bold rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors">
          <FaChevronLeft className="text-[10px]" /> Previous
        </button>
        <span className="text-neutral-500 text-sm">Page {pageNumber} of {numPages || '...'}</span>
        <button onClick={goToNext} disabled={pageNumber >= (numPages || 1)} className="flex items-center gap-1.5 px-4 py-2 bg-primary-800 text-white text-xs font-bold rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors">
          Next <FaChevronRight className="text-[10px]" />
        </button>
      </div>
    </div>
  );
}

export default function NewslettersPage() {
  return (
    <>
      <Hero title="Newsletters" subtitle="The SSKV College newsletter — stories, achievements, and campus life" height="medium" breadcrumb="Notices › Newsletters" />
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="College Newsletters" subtitle={`"Reflections" — the SSKV College magazine launched in February 2016`} />

          {newsletters.map((n, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <FaNewspaper className="text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 text-lg">{n.title}</h3>
                    <p className="text-neutral-400 text-xs">{n.year}</p>
                  </div>
                </div>
                {n.available ? (
                  <PDFViewer file={`/pdfs/newsletter/${n.file}`} />
                ) : (
                  <div className="text-center py-12 bg-white rounded-2xl border border-neutral-100">
                    <FaFilePdf className="text-3xl text-neutral-200 mx-auto mb-3" />
                    <p className="text-neutral-400 text-sm">Coming soon</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
