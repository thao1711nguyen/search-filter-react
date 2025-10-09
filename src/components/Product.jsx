export default function Product({product}) {
    return(
        <>
            <div>
                {product.id}, {product.title}
            </div>
            <div>
                {product.description}
            </div>
        </>

    )
}