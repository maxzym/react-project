import React from 'react'
import '../templates/Style.css'

export default function Form2() {
    return (
        <div>
            <br />
            <h1>Product List</h1>
            <div className="container">
               
                <form className="form-inline">
                    <label>No.&nbsp;: &nbsp;<input type="text" className="form-control sm-2 mr-sm-2" id="No" name="No"></input></label>
                </form>
                <div className="container p-3 my-3 border">
                <form>
                <div className="row">
                    <div className="col">
                        <label>Classifiacation</label>
                        <input type="text" className="form-control" id="Classifiacation" name="Classifiacation" />
                        <label>Priority</label>
                        <input type="text" className="form-control" id="Priority" name="Priority" />
                        <label>Priority</label>
                        <input type="text" className="form-control" id="Priority" name="Priority" />
                        <label>Capital Expenditure Item</label>
                        <input type="text" className="form-control" id="Capital" name="Capital" />
                        <label>Division</label>
                        <input type="text" className="form-control" id="Division" name="Division" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <label>Total Investment amount</label>
                        <input type="number" className="form-control" id="Total" name="Total" />
                    </div>
                    <div className="col">
                        <label>1st H Plan</label>
                        <input type="number" className="form-control" id="1st" name="1st" />
                    </div>
                    <div className="col">
                        <label>2st H Plan</label>
                        <input type="number" className="form-control" id="2st" name="2st" />
                    </div>
                    <div className="col">
                        <label>Full Year Plan</label>
                        <input type="number" className="form-control" id="Full" name="Full" />
                    </div>
                    <div className="col">
                        <label>Deferred to 2021</label>
                        <input type="number" className="form-control" id="Deferred" name="Deferred" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <label>Goal</label>
                        <input type="text" className="form-control" id="Goal" name="Goal" />
                    </div>
                    <div className="col">
                        <label>Main Components</label>
                        <input type="text" className="form-control" id="Components" name="Components" />
                    </div>
                    <div className="col">
                        <label>Expectattion profit Gain</label>
                        <input type="text" className="form-control" id="Gain" name="Gain" />
                    </div>
                </div>
                <br />
                <button type="button" class="btn btn-success">Success</button>
            </form>
                </div>
                
                

            </div>
        </div>
    )
}
