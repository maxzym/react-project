import React from 'react'
import './Style.css'
export default function Sidebar() {
    return (
      <div>
        <div className="sidenav">
          <h4>PRODUCT</h4>
          <a href="/Order">Order</a>
          <a href="/Product">Product list</a>
        </div>
      </div>
    );
}
