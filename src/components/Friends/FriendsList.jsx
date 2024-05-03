import s from './Friends.module.css';
import FriendsItem from './FriendsItem';

function FriendsList({ data }) {
  return (
    <ul>
      {data.map(item => {
        return (
          <li className={s.item} key={item.id}>
            <FriendsItem
              name={item.name}
              avatar={item.avatar}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendsList;
