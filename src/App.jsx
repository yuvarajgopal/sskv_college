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
const BCAShiftIIDepartmentPage = lazy(() => import('./pages/departments/BCAShiftIIDepartmentPage'));
const CSShiftIIDepartmentPage = lazy(() => import('./pages/departments/CSShiftIIDepartmentPage'));
const BComGeneralShiftIIDepartmentPage = lazy(() => import('./pages/departments/BComGeneralShiftIIDepartmentPage'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));
const PolicyDocumentsPage = lazy(() => import('./pages/PolicyDocumentsPage'));
const CollegeTimelinePage = lazy(() => import('./pages/CollegeTimelinePage'));
const GoalsVisionPage = lazy(() => import('./pages/GoalsVisionPage'));
const GroupInstitutionsPage = lazy(() => import('./pages/GroupInstitutionsPage'));
const GoverningBodyPage = lazy(() => import('./pages/administration/GoverningBodyPage'));
const PresidentPage = lazy(() => import('./pages/administration/PresidentPage'));
const VicePresidentPage = lazy(() => import('./pages/administration/VicePresidentPage'));
const SecretaryPage = lazy(() => import('./pages/administration/SecretaryPage'));
const JointSecretaryPage = lazy(() => import('./pages/administration/JointSecretaryPage'));
const PrincipalPage = lazy(() => import('./pages/administration/PrincipalPage'));
const ChiefSuperintendentPage = lazy(() => import('./pages/administration/ChiefSuperintendentPage'));
const FinanceSectionPage = lazy(() => import('./pages/administration/FinanceSectionPage'));
const ExecutiveCommitteePage = lazy(() => import('./pages/administration/ExecutiveCommitteePage'));
const ICCPage = lazy(() => import('./pages/administration/ICCPage'));
const OrganogramPage = lazy(() => import('./pages/administration/OrganogramPage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const AcademicCollaborationsPage = lazy(() => import('./pages/AcademicCollaborationsPage'));
const AcademicCalendarPage = lazy(() => import('./pages/AcademicCalendarPage'));
const AISHEPage = lazy(() => import('./pages/AISHEPage'));
const NIRFPage = lazy(() => import('./pages/NIRFPage'));
const StatutesOrdinancesPage = lazy(() => import('./pages/StatutesOrdinancesPage'));
const AnnualAccountsReportPage = lazy(() => import('./pages/AnnualAccountsReportPage'));
const FeeRefundPolicyPage = lazy(() => import('./pages/FeeRefundPolicyPage'));
const DownloadApplicationPage = lazy(() => import('./pages/DownloadApplicationPage'));
const ProspectusPage = lazy(() => import('./pages/ProspectusPage'));
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
const SEDGCellPage = lazy(() => import('./pages/student-life/SEDGCellPage'));
const MusicArtsPage = lazy(() => import('./pages/student-life/MusicArtsPage'));
const SilambamPage = lazy(() => import('./pages/student-life/SilambamPage'));
const SkillTrainingBhumiPage = lazy(() => import('./pages/student-life/SkillTrainingBhumiPage'));
const HandInHandPage = lazy(() => import('./pages/student-life/HandInHandPage'));
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
const EVSClubPage = lazy(() => import('./pages/clubs/EVSClubPage'));
const RotaryClubPage = lazy(() => import('./pages/clubs/RotaryClubPage'));
const QuizClubPage = lazy(() => import('./pages/clubs/QuizClubPage'));
const CulturalClubPage = lazy(() => import('./pages/clubs/CulturalClubPage'));
const LiteraryClubPage = lazy(() => import('./pages/clubs/LiteraryClubPage'));
const ElectoralLiteracyClubPage = lazy(() => import('./pages/clubs/ElectoralLiteracyClubPage'));
const FitnessClubPage = lazy(() => import('./pages/clubs/FitnessClubPage'));
const TalentExpClubPage = lazy(() => import('./pages/clubs/TalentExpClubPage'));
const OutreachClubPage = lazy(() => import('./pages/clubs/OutreachClubPage'));
const SupportClubPage = lazy(() => import('./pages/clubs/SupportClubPage'));
const ConsumerClubPage = lazy(() => import('./pages/clubs/ConsumerClubPage'));
const ValueEducationClubPage = lazy(() => import('./pages/clubs/ValueEducationClubPage'));
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
            <Route path="/departments/bca-shift-ii" element={<BCAShiftIIDepartmentPage />} />
            <Route path="/departments/computer-science-shift-ii" element={<CSShiftIIDepartmentPage />} />
            <Route path="/departments/bcom-general-shift-ii" element={<BComGeneralShiftIIDepartmentPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="/policy-documents" element={<PolicyDocumentsPage />} />
            <Route path="/about/timeline" element={<CollegeTimelinePage />} />
            <Route path="/about/goals" element={<GoalsVisionPage />} />
            <Route path="/about/institutions" element={<GroupInstitutionsPage />} />
            <Route path="/administration/governing-body" element={<GoverningBodyPage />} />
            <Route path="/administration/president" element={<PresidentPage />} />
            <Route path="/administration/vice-president" element={<VicePresidentPage />} />
            <Route path="/administration/secretary" element={<SecretaryPage />} />
            <Route path="/administration/joint-secretary" element={<JointSecretaryPage />} />
            <Route path="/administration/principal" element={<PrincipalPage />} />
            <Route path="/administration/chief-superintendent" element={<ChiefSuperintendentPage />} />
            <Route path="/administration/finance" element={<FinanceSectionPage />} />
            <Route path="/administration/executive-committee" element={<ExecutiveCommitteePage />} />
            <Route path="/administration/icc" element={<ICCPage />} />
            <Route path="/administration/organogram" element={<OrganogramPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/academic-collaborations" element={<AcademicCollaborationsPage />} />
            <Route path="/academic-calendar" element={<AcademicCalendarPage />} />
            <Route path="/aishe" element={<AISHEPage />} />
            <Route path="/nirf" element={<NIRFPage />} />
            <Route path="/statutes-ordinances" element={<StatutesOrdinancesPage />} />
            <Route path="/annual-accounts" element={<AnnualAccountsReportPage />} />
            <Route path="/fee-refund-policy" element={<FeeRefundPolicyPage />} />
            <Route path="/download-application" element={<DownloadApplicationPage />} />
            <Route path="/prospectus" element={<ProspectusPage />} />
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
            <Route path="/student-life/sedg-cell" element={<SEDGCellPage />} />
            <Route path="/student-life/music-arts" element={<MusicArtsPage />} />
            <Route path="/student-life/silambam" element={<SilambamPage />} />
            <Route path="/student-life/skill-training-bhumi" element={<SkillTrainingBhumiPage />} />
            <Route path="/student-life/skill-training-hand-in-hand" element={<HandInHandPage />} />
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
            <Route path="/clubs/evs" element={<EVSClubPage />} />
            <Route path="/clubs/rotary" element={<RotaryClubPage />} />
            <Route path="/clubs/quiz" element={<QuizClubPage />} />
            <Route path="/clubs/cultural" element={<CulturalClubPage />} />
            <Route path="/clubs/literary" element={<LiteraryClubPage />} />
            <Route path="/clubs/electoral-literacy" element={<ElectoralLiteracyClubPage />} />
            <Route path="/clubs/fitness" element={<FitnessClubPage />} />
            <Route path="/clubs/talent-exp" element={<TalentExpClubPage />} />
            <Route path="/clubs/outreach" element={<OutreachClubPage />} />
            <Route path="/clubs/support" element={<SupportClubPage />} />
            <Route path="/clubs/consumer" element={<ConsumerClubPage />} />
            <Route path="/clubs/value-education" element={<ValueEducationClubPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/transport" element={<TransportPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
