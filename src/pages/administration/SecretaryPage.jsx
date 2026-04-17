import LeaderPage from './LeaderPage';
import { getLeaderById } from '../../data/leaders';

export default function SecretaryPage() {
  return <LeaderPage leader={getLeaderById('secretary')} />;
}
