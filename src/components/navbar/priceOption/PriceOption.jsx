const PriceOptions = ({option}) => {
    const {price, name, description} = option;
    return ( 
        <div className="p-5 shadow-lg rounded space-y-3 bg-gray-300  text-center">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-xl font-bold ">Price: ${price}</p>
            <p className="font-semibold " ><small>{description}</small></p>
            <button className="text-xl text-white font-semibold bg-black w-full py-1 hover:bg-gray-700 rounded">Buy Now</button>
        </div>
     );
}
 
export default PriceOptions;