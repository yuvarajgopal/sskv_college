import LeaderPage from './LeaderPage';
import { getLeaderById } from '../../data/leaders';

export default function JointSecretaryPage() {
  return <LeaderPage leader={getLeaderById('joint-secretary')} />;
}
