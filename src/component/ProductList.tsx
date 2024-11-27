import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProduct] = useState<string[]>([]);

  /**
   * @useEffect takes two parametres 1 is the functions which execute after the component render has been completed
   * 2 is the dependancy 
   * @Note that the @useEffect with run only once when there's a dependancy if the @dependancy value changed the 
   * @useEffect will be re-run again
   */
  useEffect(() => {
    console.log("Fetching product form", category);
    setProduct(["clothing", "house holde"]);
  }, [category]);
  return <div>ProductList</div>;
};
export default ProductList;
