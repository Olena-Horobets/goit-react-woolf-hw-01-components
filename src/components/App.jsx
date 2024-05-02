import Profile from './Profile/Profile';

import user from '../data/user.json';

export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>
    </div>
  );
};
