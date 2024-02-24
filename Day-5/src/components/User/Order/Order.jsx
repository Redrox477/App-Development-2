import React from 'react';
import './Order.css'; // Import CSS file
import { Link } from 'react-router-dom';

const Order = () => {
  return (
    <div class="table-responsive pb-5">
                <table id="tbOrderHistory" class="table border ps-table w-100 mb-3">
                    <thead>
                        <tr>
                            <th class="font-weight-bold py-2 border-0">Document Type</th>
                            <th class="font-weight-bold py-2 border-0 quantity">Number</th>
                            <th class="font-weight-bold py-2 border-0 ">Created</th>
                            <th class="font-weight-bold py-2 border-0 ">Expiration</th>
                            <th class="font-weight-bold py-2 border-0 ">PO</th>
                            <th class="font-weight-bold py-2 border-0 ">Customer</th>
                            <th class="font-weight-bold py-2 border-0 ">Total</th>
                            <th class="font-weight-bold py-2 border-0 ">Status</th>
                            <th class="font-weight-bold py-2 border-0 ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
  );
};

export default Order;