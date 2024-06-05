import React from 'react'


const Home = () => {
  return (
    <div>
       <section className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to Demon Hub</h1>
            <p>Discover the next level of Clothing and Electronic items with our innovative product.</p>
            <p>Our mission is to provide you with the best experience possible, offering high-quality materials, innovative design, and exceptional performance.</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="col-md-6">
            <img src="https://queue-it.com/media/ppcp1twv/product-drop.jpg" alt="[Product Image]" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
   
    </div>
  )
}

export default Home
