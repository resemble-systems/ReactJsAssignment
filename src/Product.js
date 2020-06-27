import React, { Component } from "react";
 
class Product extends Component {
  render() {
    return (
      <div>
       <div class="bgProduct"></div>  
       <div>
       <div class="RSHeading">
         <span class="RSHeader">Product</span>
         <span class="thrv_wrapper"><hr class="tve_sep"></hr></span>
      </div>
        
 
        </div> 
        <div class="container">
  <main class="gridProduct">
  <article>
      <div>
      <div class="left-container">
      <div class="card-Left">
    <img class="imgsize1" src={require('./Image/Kamvopremium.png')}  alt="image"></img> </div>
      </div>
      
    <div class="right-container">
    <div class="card-Right">
      <h4  class="textProduct"> Kamvo Enterprise Project Management</h4>
        <p class="Ptag">Kamvo is an in-house designed Enterprise Project Management with an…</p>
        <p class="PtagReadmore">Read More</p>
        </div> 
    </div>     
      </div>
    </article>
   
    <article>
      <div>
      <div class="left-container">
      <div class="card-Left">
    <img class="imgsize1" src={require('./Image/Cloudkart.jpg')}  alt="image"></img> </div>
      </div>
      
    <div class="right-container">
    <div class="card-Right">
      <h4  class="textProduct">CloudKart Digital eCommerce</h4>
        <p class="Ptag">CloudKart is an eCommerce product designed by Resemble Systems to…</p>
        <p class="PtagReadmore">Read More</p>
        </div> 
    </div>    
      </div>
    </article>
    <article>
      <div>
      <div class="left-container">
      <div class="card-Left">
    <img class="imgsize1" src={require('./Image/thump.jpg')}  alt="image"></img> </div>
      </div>
      
    <div class="right-container">
    <div class="card-Right">
      <h4  class="textProduct"> IdeatePro KAIZEN Innovation Management</h4>
        <p class="Ptag">IdeatePro is an in-house designed Kaizen based product for enterprise…</p>
        <p class="PtagReadmore">Read More</p>
        </div> 
    </div>    
      </div>
    </article>
    <article>
      <div>
      <div class="left-container">
      <div class="card-Left">
    <img class="imgsize1" src={require('./Image/Pic1.jpg')}  alt="image"></img> </div>
      </div>
      
    <div class="right-container">
    <div class="card-Right">
      <h4  class="textProduct"> General Ledger Reconciliation</h4>
        <p class="Ptag">GLReconcile is an house designed product for Banking sector to…</p>
        <p class="PtagReadmore">Read More</p>
        </div> 
    </div>    
      </div>
    </article>
  </main>
</div>


      </div>
    );
  }
}
 
export default Product;