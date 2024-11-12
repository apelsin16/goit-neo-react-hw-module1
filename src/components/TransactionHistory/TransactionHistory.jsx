import clsx from 'clsx';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.header}>Type</th>
                    <th className={css.header}>Amount</th>
                    <th className={css.header}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }, index) => (
                    <tr key={id} className={clsx(index % 2 === 1 && css.grey)}>
                        <td className={css.type}>{type}</td>
                        <td className={css.cell}>{amount}</td>
                        <td className={css.cell}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
