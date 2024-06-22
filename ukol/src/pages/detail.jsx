import { render } from '@czechitas/render';
import '../global.css'
import './detail.css';

const params = new URLSearchParams(window.location.search);
const id = params.get("id")

const response = await fetch(`http://localhost:4000/api/eshop/${id}`)
const json = await response.json();
const produkt = json.data

const ProductPage = () => {
 return(
    <div className="productPage">
        <div className="productContent">
            <h2>{produkt.name}</h2>
            <p>Výrobce: {produkt.manufacturer}</p>
            <p>Cena: {produkt.price}</p>
            <p>Barva: {produkt.color}</p>
            <p>Popis produktu:</p>
            <p>{produkt.description}</p>
      </div>
      <div className="productImage">
        <img src={produkt.img} alt={produkt.name} />
      </div>
    </div>

 )

}


document.querySelector('#root').innerHTML = render(
    <div className="container">
      <h1>Kočkoshop</h1>
      <ProductPage/>
    </div>
  );
  