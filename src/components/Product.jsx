import styles from "../styles/Product.module.css";

export default function Product({
  product: { name, description, color, category, price, rating, imageUrl },
}) {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={imageUrl} alt="" />
      <h1 className={styles.title}>{name.toUpperCase()}</h1>
      <div className={styles.description}>{description}</div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>COLOR</td>
            <td>{color}</td>
          </tr>
          <tr>
            <td>CATEGORY</td>
            <td>{category}</td>
          </tr>
          <tr>
            <td>PRICE</td>
            <td>{price} BYN</td>
          </tr>
          <tr>
            <td>RATING</td>
            <td>{rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
