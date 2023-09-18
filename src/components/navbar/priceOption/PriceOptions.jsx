import PriceOption from "./PriceOption";
const PriceOptions = () => {
  const prices =  [
        {
          "id": 1,
          "name": "Product A",
          "description": "This is a description for Product A. It is a high-quality product with great features.",
          "price": 19.99
        },
        {
          "id": 2,
          "name": "Product B",
          "description": "Product B is a versatile and reliable choice for your needs. It comes with various options.",
          "price": 29.99
        },
        {
          "id": 3,
          "name": "Product C",
          "description": "Product C is known for its durability and exceptional performance. A top choice for professionals.",
          "price": 39.99
        }
      ]
      
    return ( 
          <div>
              <h2 className="text-3xl font-extrabold text-center my-10 border-b-2 border-black w-fit mx-auto">Price Options</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-10">
            {
                prices.map(option => <PriceOption option={option}></PriceOption>)
            }
        </div>
          </div>
     );
}
 
export default PriceOptions;