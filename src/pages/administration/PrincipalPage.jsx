import LeaderPage from './LeaderPage';
import { getLeaderById } from '../../data/leaders';

export default function PrincipalPage() {
  return <LeaderPage leader={getLeaderById('principal')} />;
}
