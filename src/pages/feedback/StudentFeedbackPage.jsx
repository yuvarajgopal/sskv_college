import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdO1lbxhTu9u2XyiZvcZF_g1nUhu9r5cI_0hcz7PmySx53j7A/viewform';

export default function StudentFeedbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(GOOGLE_FORM_URL, '_blank');
    navigate('/');
  }, [navigate]);

  return null;
}
