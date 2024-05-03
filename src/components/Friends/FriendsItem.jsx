import s from './Friends.module.css';

function FriendsItem({ name, avatar, isOnline }) {
  return (
    <>
      <span
        className={s.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

export default FriendsItem;
