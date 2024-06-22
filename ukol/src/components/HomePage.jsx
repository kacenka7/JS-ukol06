
const response = await fetch("http://localhost:4000/api/eshop");
const jason = await response.json();
const products = jason.data

export const HomePage = () => {
    
    return (
      <div className='homePage'>
  
        <div className = "productList">
                {
                  products.map ((item)=> (
                    <div className='product'>
                      <h2 key={item.id}>{item.name}</h2>
                      <img src={item.img} alt="produkt" />
                      <h2 key={item.price}>{item.price}</h2>
                      <div className='productDetail'>
                        <button id = {`detailButton${item.id}`}> <a href={`detail.html?id=${item.id}`}>Detail produktu</a></button>
                      </div>
                      
                    </div>
                  ))
                }
        </div>
      </div>
    )
  
  }


