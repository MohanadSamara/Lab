import styles from './List.module.css';

function List(props) {
  const itemList = props.item;
  const category = props.category;

  itemList.sort((a, b) => a.name.localeCompare(b.name));

  const ListItems = itemList.map(item => (
    <li key={item.id} className={styles.listItem}>
      {item.name}
      <span>Calories: {item.Calories}</span>
    </li>
  ));

  return (
    <div className={styles.listContainer}>
      <h1 className={styles.categoryHeading}>{category}</h1>
      <ul className={styles.list}>
        {ListItems}
      </ul>
      <hr className={styles.divider} />
    </div>
  );
}

List.defaultProps = {
  item: [],
  category: 'Items',
};

export default List;