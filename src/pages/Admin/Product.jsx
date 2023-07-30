import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductPage = ({ products, removeProduct }) => {
  const onHandleRemove = (id) => {
    removeProduct(id);
  };

  return (
    <div>
      <Link to={`/admin/product/add`}>
        <button>Add New Product</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/admin/product/update/${item.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => onHandleRemove(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
