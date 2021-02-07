import React, {Component} from 'react';
import axios from 'axios';
import Product from './Product.js';
import CreateProduct from './CreateProduct';

class Axis extends Component{
    constructor(){
        super();

        this.state = {
            products: []
        }

        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    componentDidMount(){
        this.getProducts();
    }

    update(id){
        let index = this.state.products.findIndex(p => p.product_id === id);
        axios.put(`/api/products/${id}?desc=${this.state.products[index].description}`)
        .then( res => {
            this.setState({
                products: res.data
            })
        }).catch(err => console.log(err));
    }

    delete(id){
        axios.delete(`/api/products/${id}`)
        .then( res => {
            this.setState({
                products: res.data
            })
        }).catch(err => console.log(err));
    }

    updateProduct = (id, val, field) => {
        let index = this.state.products.findIndex(p => p.product_id === id);
        let copyArray = this.state.products.slice();
        let product = copyArray[index];
        switch(field){
            case 'name':
                product.name = val;
                break;
            case 'desc':
                product.description = val;
                break;
            case 'img':
                product.image_url = val;
                break;
            case 'price':
                product.price = val;
                break;
            default:
                break;
        }
        copyArray.splice(index, 1, product);
        this.setState({
            products: copyArray
        });
    }

    getProducts(){
        axios.get('/api/products').then(res => {
            this.setState({products: res.data});
        }
        ).catch(err => console.log(err));
    }

    addProduct = (product) => {

        axios.post('/api/products', product).then(res => {
            this.setState({
                products: res.data
            });
        }).catch(err => console.log(err));
    }

    render(){
        let mapped = this.state.products.map((p, i) => <Product key={i} product={p} updateProduct={this.updateProduct} update={this.update} delete={this.delete} />
        )
        return <div className="content">
            <div className='items'>
                {mapped}
            </div>
            <CreateProduct add={this.addProduct}/>
        </div>
    }
}

export default Axis;