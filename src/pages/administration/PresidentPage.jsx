import LeaderPage from './LeaderPage';
import { getLeaderById } from '../../data/leaders';

export default function PresidentPage() {
  return <LeaderPage leader={getLeaderById('president')} />;
}
