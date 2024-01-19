import {Card} from './Card'

export const ProductList = ({ products }) => {
  return (
    <div className="grid w-4/5 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {
            products && products.map((product) => (
                <Card productData={product} key={product.id} />
            ))
        }
    </div>
  )
}
