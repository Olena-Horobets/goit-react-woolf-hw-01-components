import Section from './Section/Section';
import Profile from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';
import FriendsList from './Friends/FriendsList';
import Transactions from './Transactions/Transactions';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <div>
        <Section className="profile" title="My profile">
          <Profile user={user}></Profile>
        </Section>
        <Section className="statistics" title="Upload stats">
          <StatisticsList data={data}></StatisticsList>
        </Section>
      </div>
      <Section className="friendsList" title="My friends">
        <FriendsList data={friends} />
      </Section>
      <Section className="transactions" title="My transactions">
        <Transactions transactions={transactions}></Transactions>
      </Section>
    </div>
  );
};
