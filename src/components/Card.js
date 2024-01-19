

export const Card = ({ productData }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-6 rounded-lg border border-gray-200 shadow hover:border-orange-500 hover:shadow-lg cursor-pointer">
    <img src={productData.imageUrl} alt={productData.name} className="object-contain h-72 w-auto" />
    <div className="text-md text-gray-800 mt-4">
    <p className="font-bold">{productData.name}</p>
    <div className="mt-4">
    <p className="text-sm font-light">PRICE</p>
    
    <p className="text-orange-500 text-xl font-extrabold">US ${productData.price} <span className="line-through text-base text-gray-300">{productData.msrp && (productData.msrp > productData.price?`US $ ${productData.msrp}`:"")}</span></p>
    </div>
    </div>
  
    </div>
  )
}
