import Profile from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';

import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>
      <StatisticsList data={data} title="Upload stats"></StatisticsList>
    </div>
  );
};
