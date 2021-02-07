import React, {Component} from 'react';

class CreateProduct extends Component{
    constructor(){
        super();

        this.state = {
            name: '',
            description: '',
            image_url: '',
            price: 0
        }

        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct(){
        this.props.add(this.state);
        this.setState({
            name: '',
            description: '',
            image_url: '',
            price: 0
        });
    }

    updateName(val){
        this.setState({
            name: val
        });
    }

    updateDescription(val){
        this.setState({
            description: val
        });
    }

    updateImage(val){
        this.setState({
            image_url: val
        });
    }

    updatePrice(val){
        this.setState({
            price: val
        });
    }

    render(){
        return(
            <div className="add">
                <input type="text" value={this.state.name} placeholder='name' onChange={e => this.updateName(e.target.value)}/>
                <input type="text" value={this.state.description} placeholder="description" onChange={e => this.updateDescription(e.target.value)}/>
                <input type="text" value={this.state.image_url} placeholder="image" onChange={e => this.updateImage(e.target.value)}/>
                <input type="number" value={this.state.price} onChange={e => this.updatePrice(e.target.value)}/>
                <button onClick={this.addProduct}>Add</button>
            </div>
        )
    }
}

export default CreateProduct;