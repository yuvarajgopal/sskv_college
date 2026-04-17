import LeaderPage from './LeaderPage';
import { getLeaderById } from '../../data/leaders';

export default function VicePresidentPage() {
  return <LeaderPage leader={getLeaderById('vice-president')} />;
}
