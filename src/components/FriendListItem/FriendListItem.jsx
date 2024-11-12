import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.friend}>
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
        </div>
    );
};

export default FriendListItem;
