import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.Profile}>
            <div className={css.top}>
                <img src={image} alt="User avatar" className={css.image} />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span className={css.statsLabel}>Followers</span>
                    <span className={css.statsValue}>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.statsLabel}>Views</span>
                    <span className={css.statsValue}>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.statsLabel}>Likes</span>
                    <span className={css.statsValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
