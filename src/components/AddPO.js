import React, { Component } from 'react'
import Header from './Header'


export default class AddPO extends Component {
  render() {
    return (
      
      
         <div className="container">
          
          
          
      <h2>AddPO</h2>
      
      
  
<style>{'body { background-color:light;}'}</style>


  <div className="row">
    <div className="col-12">
      <table className="table table-bordered ">
        <thead className="thead-dark">
        
        
  <tr>
    <th>Item Code</th>
    <th>Description</th>
    <th>Avlbi qty</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Amount</th>
  </tr>
  <tr>
    <td>123</td>
    <td>Product 1</td>
    <td>10</td>
    <td>5</td>
    <td>$10</td>
    <td>$50</td>
  </tr>
  <tr>
    <td>456</td>
    <td>Product 2</td>
    <td>20</td>
    <td>10</td>
    <td>$5</td>
    <td>$50</td>
  </tr>
  <tr>
    <td>789</td>
    <td>Product 3</td>
    <td>15</td>
    <td>8</td>
    <td>$8</td>
    <td>$64</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <th>Total   Price</th>
    <td></td>
  </tr>
  

  </thead>
      <div className=" d-flex justify-content-center mx-4 mb-3 mb-lg-4">
   <button type="button" class="btn btn-primary btn-lg">Submit PO TO Supplier</button>
                  </div>

</table>


      </div>
      </div>
      
      </div>
      
    )
  }
}
