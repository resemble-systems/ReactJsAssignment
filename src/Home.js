import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
          <div class="bgImage"></div>  
       <div>
       <div class="RSHeading">
         <span class="RSHeader">Covid 19 - Most Relevant Offerings</span>
         <span class="thrv_wrapper"><hr class="tve_sep"></hr></span>
      </div>
        <p class="RSPara">Covid 19 - Most Relevant Offerings Resemble Systems is at the forefront of providing customers with the most needed software solutions that enables Organizations with business continuity and increase productivity while working remote.</p>
 
        </div> 
       
<div class="container">
  <main class="grid">
    <article>
      <div class="text">
        <img class="imgsize" src={require('./Image/edge.png')}  alt="image"></img>
        <h4>Digital E-Commerce</h4>
        <p>Quickly go online with our Online Ordering System connecting your inventory with consumers for Essential items</p>
        
      </div>
    </article>
   
    <article>
  <div class="text">
    <img class="imgsize" src={require('./Image/Portfolio.png')}  alt="image"></img>
        <h4> Portfolio & Project Management</h4>
        <p>Connect Strategic Objectives with Execution by automating manual processes with Rapid Web Application Platform and increase productivity and efficiency </p>
        
      </div>
    </article>
    <article>
    
      <div class="text">
      <img class="imgsize" src={require('./Image/moder.png')}  alt="image"></img>
        <h4> Modern Workplace</h4>
        <p>​Improve collaboration while working from home by implementing Microsoft Teams</p>
        
      </div>
    </article>

  </main>
</div>

      </div>
    );
  }
}
 
export default Home;