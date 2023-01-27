import React from 'react'
import Header from './Header'



const Inventory = () => {
  return (
    
    
    <div className="container">
      <Header/>
      <h1>Inventory</h1>
      <body>
  
<style>{'body { background-color:light;}'}</style>

</body>
      
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Select </th>
            <th scope="col">Item Code</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Available Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                  <label className="custom-control-label" for="customCheck1"></label>
              </div>
            </td>
            <td>11212</td>
            <td>Cristina</td>
            <td>913</td>
            <td>2.846</td>
          </tr>
          <tr>
            <td>
              <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                  <label className="custom-control-label" for="customCheck2"></label>
              </div>
            </td>
            <td>121212</td>
            <td>Cristina</td>
            <td>1.434</td>
            <td>3.417</td>
          </tr>
          <tr>
            <td>
              <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                  <label className="custom-control-label" for="customCheck3"></label>
              </div>
            </td>
            <td>21212</td>
            <td>Cristina</td>
            <td>1.877</td>
            <td>1.234</td>
          </tr>
        </tbody>
       
      </table>
      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg">Create PO</button>
                  </div>
                  

    </div>
  </div>
</div>


  )
}

export default Inventory
