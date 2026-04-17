import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { COLLEGE_INFO } from './constants';

function addCollegeHeader(doc) {
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(88, 56, 27);
  doc.text(COLLEGE_INFO.name, 105, 18, { align: 'center' });

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text(
    `${COLLEGE_INFO.location} | Affiliated to ${COLLEGE_INFO.affiliation}`,
    105, 26, { align: 'center' }
  );
  doc.text(
    `Phone: ${COLLEGE_INFO.phone[0]} | Email: ${COLLEGE_INFO.email[0]}`,
    105, 32, { align: 'center' }
  );

  doc.setDrawColor(88, 56, 27);
  doc.setLineWidth(0.7);
  doc.line(14, 37, 196, 37);
}

/**
 * Generates the application form PDF.
 * @param {object} formData - All form fields from ApplicationFormPage
 * @returns {{ base64: string, applicationNo: string }}
 */
export function generateApplicationPDF(formData) {
  const applicationNo = `SSKV-2026-${String(Date.now()).slice(-4)}`;
  const doc = new jsPDF();

  addCollegeHeader(doc);

  // Title
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(88, 56, 27);
  doc.text('APPLICATION FORM — ADMISSION 2026–2027', 105, 47, { align: 'center' });

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.text(`Application No: ${applicationNo}`, 14, 56);
  doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, 155, 56);

  // Section 1 — Personal
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(88, 56, 27);
  doc.text('1. Personal Information', 14, 65);

  autoTable(doc, {
    startY: 69,
    body: [
      ['Full Name', formData.fullName || ''],
      ['Date of Birth', formData.dob || ''],
      ['Gender', formData.gender || ''],
      ['Nationality', formData.nationality || ''],
      ['Religion', formData.religion || ''],
      ['Community', formData.community || ''],
      ['Aadhaar Number', formData.aadhaar || ''],
      ['Mother Tongue', formData.motherTongue || ''],
      ['Mobile', formData.mobile || ''],
      ['Email', formData.email || ''],
      ['Permanent Address', formData.address || ''],
      ['District', formData.district || ''],
      ['PIN Code', formData.pin || ''],
    ],
    columnStyles: {
      0: { cellWidth: 55, fontStyle: 'bold', fillColor: [248, 243, 236] },
      1: { cellWidth: 125 },
    },
    styles: { fontSize: 8.5, cellPadding: 2.5 },
    theme: 'grid',
    tableLineColor: [200, 185, 165],
    tableLineWidth: 0.3,
  });

  // Section 2 — Academics
  const acY = doc.lastAutoTable.finalY + 8;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(88, 56, 27);
  doc.text('2. Educational Qualifications', 14, acY);

  autoTable(doc, {
    startY: acY + 4,
    head: [['Exam', 'Board / University', 'School / College', 'Year', 'Marks', 'Max', '%']],
    body: [
      [
        '10th (SSLC)',
        formData.tenthBoard || '',
        formData.tenthSchool || '',
        formData.tenthYear || '',
        formData.tenthMarks || '',
        formData.tenthMax || '',
        formData.tenthPercent || '',
      ],
      [
        '12th (HSC)',
        formData.twelfthBoard || '',
        formData.twelfthSchool || '',
        formData.twelfthYear || '',
        formData.twelfthMarks || '',
        formData.twelfthMax || '',
        formData.twelfthPercent || '',
      ],
    ],
    headStyles: { fillColor: [88, 56, 27], textColor: 255, fontSize: 8.5 },
    styles: { fontSize: 8.5, cellPadding: 2.5 },
    theme: 'grid',
    tableLineColor: [200, 185, 165],
    tableLineWidth: 0.3,
  });

  // Section 3 — Program
  const prY = doc.lastAutoTable.finalY + 8;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(88, 56, 27);
  doc.text('3. Program Selection', 14, prY);

  autoTable(doc, {
    startY: prY + 4,
    body: [
      ['Program Applied', formData.program || ''],
      ['Shift Preference', formData.shift || 'N/A'],
      ['Subject Group (12th)', formData.twelfthSubjectGroup || ''],
      ['Medium of Instruction', formData.medium || ''],
      ['First Graduate in Family', formData.firstGraduate || ''],
      ['Extracurricular Activities', formData.extracurricular || 'None mentioned'],
    ],
    columnStyles: {
      0: { cellWidth: 65, fontStyle: 'bold', fillColor: [248, 243, 236] },
      1: { cellWidth: 115 },
    },
    styles: { fontSize: 8.5, cellPadding: 2.5 },
    theme: 'grid',
    tableLineColor: [200, 185, 165],
    tableLineWidth: 0.3,
  });

  // Section 4 — Parents
  const paY = doc.lastAutoTable.finalY + 8;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(88, 56, 27);
  doc.text('4. Parent / Guardian Details', 14, paY);

  autoTable(doc, {
    startY: paY + 4,
    body: [
      ["Father's Name", formData.fatherName || ''],
      ["Father's Occupation", formData.fatherOccupation || ''],
      ['Annual Income', formData.annualIncome || ''],
      ["Mother's Name", formData.motherName || ''],
      ["Mother's Occupation", formData.motherOccupation || ''],
      ['Emergency Contact', formData.emergencyName || ''],
      ['Emergency Phone', formData.emergencyPhone || ''],
      ['Relationship', formData.emergencyRelation || ''],
    ],
    columnStyles: {
      0: { cellWidth: 65, fontStyle: 'bold', fillColor: [248, 243, 236] },
      1: { cellWidth: 115 },
    },
    styles: { fontSize: 8.5, cellPadding: 2.5 },
    theme: 'grid',
    tableLineColor: [200, 185, 165],
    tableLineWidth: 0.3,
  });

  // Declaration
  const declY = doc.lastAutoTable.finalY + 12;
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(80, 80, 80);
  doc.text(
    'Declaration: I hereby declare that the above information is true, correct and complete to the best of my knowledge and belief.',
    14, declY, { maxWidth: 180 }
  );
  doc.setFont('helvetica', 'normal');
  doc.text('Signature of Applicant: ___________________________', 14, declY + 14);
  doc.text('Date: _______________', 148, declY + 14);

  doc.setFontSize(8);
  doc.setTextColor(140, 140, 140);
  doc.text('This is a computer-generated application form. Application Fee ₹500 Paid.', 105, 287, { align: 'center' });

  const base64 = doc.output('datauristring');
  return { base64, applicationNo };
}

/**
 * Generates a fee receipt PDF.
 * @param {{ studentName, rollNo, program, feeType, amount, transactionId }} params
 * @returns {string} base64 data URI
 */
export function generateReceiptPDF({ studentName, rollNo, program, feeType, amount, transactionId }) {
  const receiptNo = `SSKV-FEE-${String(Date.now()).slice(-6)}`;
  const doc = new jsPDF();

  addCollegeHeader(doc);

  // Title bar
  doc.setFillColor(88, 56, 27);
  doc.rect(14, 41, 182, 10, 'F');
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('FEE RECEIPT', 105, 48, { align: 'center' });

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.text(`Receipt No: ${receiptNo}`, 14, 60);
  doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, 155, 60);

  autoTable(doc, {
    startY: 66,
    body: [
      ['Transaction ID', transactionId || 'N/A'],
      ['Student Name', studentName || ''],
      ['Roll / Registration No.', rollNo || ''],
      ['Program', program || ''],
      ['Fee Type', feeType || ''],
      ['Amount Paid', `Rs.${Number(amount || 0).toLocaleString('en-IN')}`],
      ['Payment Status', 'SUCCESS'],
    ],
    columnStyles: {
      0: { cellWidth: 70, fontStyle: 'bold', fillColor: [248, 243, 236] },
      1: { cellWidth: 110 },
    },
    styles: { fontSize: 10, cellPadding: 4 },
    theme: 'grid',
    tableLineColor: [200, 185, 165],
    tableLineWidth: 0.3,
  });

  // PAID stamp
  const stampY = doc.lastAutoTable.finalY + 15;
  doc.setDrawColor(0, 140, 60);
  doc.setLineWidth(1.5);
  doc.roundedRect(70, stampY - 8, 70, 20, 3, 3);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 140, 60);
  doc.text('PAID', 105, stampY + 7, { align: 'center' });

  const noteY = stampY + 28;
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(100, 100, 100);
  doc.text('This is a computer-generated receipt. No physical signature required.', 105, noteY, { align: 'center' });
  doc.text(`For queries: ${COLLEGE_INFO.email[0]} | ${COLLEGE_INFO.phone[0]}`, 105, noteY + 7, { align: 'center' });

  return doc.output('datauristring');
}
