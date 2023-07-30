import React from 'react';
import { useState } from 'react';

const AddProductPage = ({ addProduct }) => {
  const [data, setData] = useState({});
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...data, [name]: value };
    setData(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addProduct(data);
  };

  return (
    <div>
      <form
        action=''
        onSubmit={onHandleSubmit}>
        <input
          type='text'
          placeholder='Enter Product Name'
          onChange={onHandleChange}
          name='name'
        />
        <input
          type='text'
          placeholder='Enter Product Price'
          onChange={onHandleChange}
          name='price'
        />
        <button>Add New</button>
      </form>
    </div>
  );
};

export default AddProductPage;
