import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc7fF4FRhP2-Hzo7DoRiSOBGIKgOou1id3_Ecv2T4mCs4ep-Q/viewform';

export default function EmployeesFeedbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(GOOGLE_FORM_URL, '_blank');
    navigate('/');
  }, [navigate]);

  return null;
}
