import styles from "../sass/pages/Products.module.scss";
import ProductsRow from "../components/ProductsRow";

const Products = () => {
  return (
  <section className={styles.section}>
    <div className={styles.maxWidthWrap}>
    <ProductsRow
    rowName={"Men's Clothing"}
    products={[{name: "Blue Shirt", price: "$10"}, {name: "Red Dress", price: "$50"},{name: "Red Shirt", price: "$35"}, {name: "Jeans", price: "$50"}]}
    pageLink='/men'
    />

    <ProductsRow
    rowName={"Women's Clothing"}
    products={[{name: "Blue Shirt", price: "$10"}, {name: "Red Dress", price: "$50"},{name: "Red Shirt", price: "$35"}, {name: "Jeans", price: "$50"}]}
    pageLink='/women'
    />

    <ProductsRow
    rowName={"All Pronouns"}
    products={[{name: "Blue Shirt", price: "$10"}, {name: "Red Dress", price: "$50"},{name: "Red Shirt", price: "$35"}, {name: "Jeans", price: "$50"}]} 
    pageLink='/everyone'
    />

    <ProductsRow
    rowName={"Teen Fever"}
    products={[{name: "Blue Shirt", price: "$10"}, {name: "Red Dress", price: "$50"},{name: "Red Shirt", price: "$35"}, {name: "Jeans", price: "$50"}]}
    pageLink='/teens'
    />

    <ProductsRow
    rowName={"Kids' Wears"}
    products={[{name: "Blue Shirt", price: "$10"}, {name: "Red Dress", price: "$50"},{name: "Red Shirt", price: "$35"}, {name: "Jeans", price: "$50"}]}
    pageLink='/kids'
    />

    <ProductsRow
    rowName={"Accessories"}
    products={[{name: "Blue Shirt", price: "$10"}, {name: "Red Dress", price: "$50"},{name: "Red Shirt", price: "$35"}, {name: "Jeans", price: "$50"}]}
    pageLink='/accessories'
    />
    </div>
  </section>
  );
};

export default Products;