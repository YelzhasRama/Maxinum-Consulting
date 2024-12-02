import React, { useState } from 'react';
import axios from 'axios';

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        dateTime: '',
        author: '',
        sum: '',
        category: 'Food',
        comment: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/transactions', formData);
            alert('Transaction added successfully!');
        } catch (err) {
            console.error(err);
            alert('Error adding transaction.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Date:</label>
                <input type="datetime-local" name="dateTime" onChange={handleChange} required />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" name="author" onChange={handleChange} required />
            </div>
            <div>
                <label>Sum:</label>
                <input type="number" name="sum" onChange={handleChange} required />
            </div>
            <div>
                <label>Category:</label>
                <select name="category" onChange={handleChange}>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label>Comment:</label>
                <textarea name="comment" onChange={handleChange}></textarea>
            </div>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
