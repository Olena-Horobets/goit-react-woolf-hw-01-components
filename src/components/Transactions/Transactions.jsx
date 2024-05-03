import s from './Transactions.module.css';

function Transactions({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.tableHead}>Type</th>
          <th className={s.tableHead}>Amount</th>
          <th className={s.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => {
          return (
            <tr key={item.id} className={s.tableRow}>
              <td className={s.tableData}>{item.type}</td>
              <td className={s.tableData}>{item.amount}</td>
              <td className={s.tableData}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Transactions;
