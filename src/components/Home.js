import Rect from 'react';

function Home()
{
    return(
        <div>

            <div className="add-to-card">
                <img  src="https://cdn.vectorstock.com/i/1000x1000/08/83/shopping-cart-icon-with-plus-sign-vector-19920883.jpg" />
            </div>

            <h1>Hi I Am Home.</h1>

            <div className="cart-wrapper">
                <div className="img-warpper item">
                    <img src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg" />
                </div>
            </div>


                <div className="text-warpper item">
                   <span>I-Phone</span>
                   <span>Price: $1000.00</span>
                </div>

                <div className="btn-warpper item">
                  <button >Add To Card</button>
                </div>
        </div>
    )
}


export default Home;