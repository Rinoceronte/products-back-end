

function Product(props){
    return(
        <section className="product">
            <h1>{props.product.name} </h1>
            <img src={props.product.image_url} alt='item' />
            <input type="text" value={props.product.description} onChange={e => props.updateProduct(props.product.product_id, e.target.value, "desc")}/>
            <h3> {props.product.price}</h3>
            <button onClick={() => {props.update(props.product.product_id)}}>Update</button>
            <button onClick={() => {props.delete(props.product.product_id)}}>Delete</button>
        </section>
    );
}

export default Product;