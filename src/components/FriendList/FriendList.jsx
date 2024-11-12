import clsx from 'clsx';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.FriendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li key={id} className={css.friend}>
                    <img src={avatar} alt="Avatar" className={css.image} />
                    <p className={css.name}>{name}</p>
                    <p
                        className={clsx(
                            css.status,
                            isOnline ? css.online : css.offline
                        )}
                    >
                        {isOnline ? 'Online' : 'Offline'}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default FriendList;
