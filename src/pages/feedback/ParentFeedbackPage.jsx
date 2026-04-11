import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdl9YZl8mXx6L5F99t_RfoRSwv-FuJR-GdTm3i8FS3BrDKtkg/viewform';

export default function ParentsFeedbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(GOOGLE_FORM_URL, '_blank');
    navigate('/');
  }, [navigate]);

  return null;
}
