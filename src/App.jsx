import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NAACPage = lazy(() => import('./pages/NAACPage'));
const IQACPage = lazy(() => import('./pages/IQACPage'));
const MandatoryDisclosuresPage = lazy(() => import('./pages/MandatoryDisclosuresPage'));
const ApplicationFormPage = lazy(() => import('./pages/ApplicationFormPage'));
const FeesPage = lazy(() => import('./pages/FeesPage'));
const AdministrationPage = lazy(() => import('./pages/AdministrationPage'));
const TamilDepartmentPage = lazy(() => import('./pages/departments/TamilDepartmentPage'));
const EnglishDepartmentPage = lazy(() => import('./pages/departments/EnglishDepartmentPage'));
const ComputerScienceDepartmentPage = lazy(() => import('./pages/departments/ComputerScienceDepartmentPage'));
const CSAIDepartmentPage = lazy(() => import('./pages/departments/CSAIDepartmentPage'));
const MathematicsDepartmentPage = lazy(() => import('./pages/departments/MathematicsDepartmentPage'));
const BCADepartmentPage = lazy(() => import('./pages/departments/BCADepartmentPage'));
const BComGeneralDepartmentPage = lazy(() => import('./pages/departments/BComGeneralDepartmentPage'));
const BComAFDepartmentPage = lazy(() => import('./pages/departments/BComAFDepartmentPage'));
const BComCSDepartmentPage = lazy(() => import('./pages/departments/BComCSDepartmentPage'));
const BBADepartmentPage = lazy(() => import('./pages/departments/BBADepartmentPage'));
const CriminologyDepartmentPage = lazy(() => import('./pages/departments/CriminologyDepartmentPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));
const PolicyDocumentsPage = lazy(() => import('./pages/PolicyDocumentsPage'));
const CollegeTimelinePage = lazy(() => import('./pages/CollegeTimelinePage'));
const GoverningBodyPage = lazy(() => import('./pages/administration/GoverningBodyPage'));
const ChiefSuperintendentPage = lazy(() => import('./pages/administration/ChiefSuperintendentPage'));
const FinanceSectionPage = lazy(() => import('./pages/administration/FinanceSectionPage'));
const ExecutiveCommitteePage = lazy(() => import('./pages/administration/ExecutiveCommitteePage'));
const ICCPage = lazy(() => import('./pages/administration/ICCPage'));
const OrganogramPage = lazy(() => import('./pages/administration/OrganogramPage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const AcademicCollaborationsPage = lazy(() => import('./pages/AcademicCollaborationsPage'));
const AcademicCalendarPage = lazy(() => import('./pages/AcademicCalendarPage'));
const ResearchDevelopmentPage = lazy(() => import('./pages/ResearchDevelopmentPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const EntrepreneurshipCellPage = lazy(() => import('./pages/EntrepreneurshipCellPage'));
// Student Life
const CulturalsPage = lazy(() => import('./pages/student-life/CulturalsPage'));
const AddOnCoursesPage = lazy(() => import('./pages/student-life/AddOnCoursesPage'));
const SportsPage = lazy(() => import('./pages/student-life/SportsPage'));
const NccNssPage = lazy(() => import('./pages/student-life/NccNssPage'));
const YrcPage = lazy(() => import('./pages/student-life/YrcPage'));
const PlacementCellPage = lazy(() => import('./pages/student-life/PlacementCellPage'));
const GrievanceRedressalPage = lazy(() => import('./pages/student-life/GrievanceRedressalPage'));
const IndianKnowledgeSystemPage = lazy(() => import('./pages/student-life/IndianKnowledgeSystemPage'));
const HealthFacilitiesPage = lazy(() => import('./pages/student-life/HealthFacilitiesPage'));
const AntiRaggingPage = lazy(() => import('./pages/student-life/AntiRaggingPage'));
const EqualOpportunityCellPage = lazy(() => import('./pages/student-life/EqualOpportunityCellPage'));
const DifferentlyAbledPage = lazy(() => import('./pages/student-life/DifferentlyAbledPage'));
// Alumnae
const AlumnaePage = lazy(() => import('./pages/AlumnaePage'));
// Notices
const CircularsPage = lazy(() => import('./pages/notices/CircularsPage'));
const AnnouncementsPage = lazy(() => import('./pages/notices/AnnouncementsPage'));
const NewslettersPage = lazy(() => import('./pages/notices/NewslettersPage'));
const NewsEventsPage = lazy(() => import('./pages/notices/NewsEventsPage'));
const ReservationRosterPage = lazy(() => import('./pages/notices/ReservationRosterPage'));
// Activities & Infrastructure
const IndustryAcademiaPage = lazy(() => import('./pages/IndustryAcademiaPage'));
const ClubsPage = lazy(() => import('./pages/ClubsPage'));
const InfrastructurePage = lazy(() => import('./pages/InfrastructurePage'));
const TransportPage = lazy(() => import('./pages/TransportPage'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-4 border-accent-400 border-t-transparent animate-spin mx-auto mb-4" />
        <p className="text-neutral-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/naac" element={<NAACPage />} />
            <Route path="/iqac" element={<IQACPage />} />
            <Route path="/mandatory-disclosures" element={<MandatoryDisclosuresPage />} />
            <Route path="/apply" element={<ApplicationFormPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/departments/tamil" element={<TamilDepartmentPage />} />
            <Route path="/departments/english" element={<EnglishDepartmentPage />} />
            <Route path="/departments/computer-science" element={<ComputerScienceDepartmentPage />} />
            <Route path="/departments/cs-ai" element={<CSAIDepartmentPage />} />
            <Route path="/departments/mathematics" element={<MathematicsDepartmentPage />} />
            <Route path="/departments/bca" element={<BCADepartmentPage />} />
            <Route path="/departments/bcom-general" element={<BComGeneralDepartmentPage />} />
            <Route path="/departments/bcom-af" element={<BComAFDepartmentPage />} />
            <Route path="/departments/bcom-cs" element={<BComCSDepartmentPage />} />
            <Route path="/departments/bba" element={<BBADepartmentPage />} />
            <Route path="/departments/criminology" element={<CriminologyDepartmentPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="/policy-documents" element={<PolicyDocumentsPage />} />
            <Route path="/about/timeline" element={<CollegeTimelinePage />} />
            <Route path="/administration/governing-body" element={<GoverningBodyPage />} />
            <Route path="/administration/chief-superintendent" element={<ChiefSuperintendentPage />} />
            <Route path="/administration/finance" element={<FinanceSectionPage />} />
            <Route path="/administration/executive-committee" element={<ExecutiveCommitteePage />} />
            <Route path="/administration/icc" element={<ICCPage />} />
            <Route path="/administration/organogram" element={<OrganogramPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/academic-collaborations" element={<AcademicCollaborationsPage />} />
            <Route path="/academic-calendar" element={<AcademicCalendarPage />} />
            <Route path="/research-development" element={<ResearchDevelopmentPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/entrepreneurship-cell" element={<EntrepreneurshipCellPage />} />
            {/* Student Life */}
            <Route path="/student-life/culturals" element={<CulturalsPage />} />
            <Route path="/student-life/add-on-courses" element={<AddOnCoursesPage />} />
            <Route path="/student-life/sports" element={<SportsPage />} />
            <Route path="/student-life/ncc-nss" element={<NccNssPage />} />
            <Route path="/student-life/yrc" element={<YrcPage />} />
            <Route path="/student-life/placement-cell" element={<PlacementCellPage />} />
            <Route path="/student-life/grievance-redressal" element={<GrievanceRedressalPage />} />
            <Route path="/student-life/indian-knowledge-system" element={<IndianKnowledgeSystemPage />} />
            <Route path="/student-life/health-facilities" element={<HealthFacilitiesPage />} />
            <Route path="/student-life/anti-ragging" element={<AntiRaggingPage />} />
            <Route path="/student-life/equal-opportunity-cell" element={<EqualOpportunityCellPage />} />
            <Route path="/student-life/differently-abled" element={<DifferentlyAbledPage />} />
            {/* Alumnae */}
            <Route path="/alumnae" element={<AlumnaePage />} />
            {/* Notices */}
            <Route path="/notices/circulars" element={<CircularsPage />} />
            <Route path="/notices/announcements" element={<AnnouncementsPage />} />
            <Route path="/notices/newsletters" element={<NewslettersPage />} />
            <Route path="/notices/news-events" element={<NewsEventsPage />} />
            <Route path="/notices/reservation-roster" element={<ReservationRosterPage />} />
            {/* Activities & Infrastructure */}
            <Route path="/industry-academia" element={<IndustryAcademiaPage />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/transport" element={<TransportPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
