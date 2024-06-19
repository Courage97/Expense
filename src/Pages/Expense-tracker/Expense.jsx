import React from 'react';
import { useAddTransaction } from '../../Hooks/useAddTransaction';

export const Expense = () => {
    const { addTransaction } = useAddTransaction(); // Destructure addTransaction from useAddTransaction

    const onSubmit = async (e) => {
        e.preventDefault();
        await addTransaction({
            description: "Haircut",
            transactionAmount:"22",
            transactionType: "expense"
        });
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-blue-700 mb-4">Expense Tracker</h1>
                <div className="mb-4">
                    <h3 className="text-xl text-gray-700">Your balance</h3>
                    <h2 className="text-2xl text-green-700 font-bold">$00:00</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-200 p-4 rounded-md">
                        <h4 className="text-lg font-semibold text-blue-700">Income</h4>
                        <p className="text-green-700">$00:00</p>
                    </div>
                    <div className="bg-blue-200 p-4 rounded-md">
                        <h4 className="text-lg font-semibold text-blue-700">Expenses</h4>
                        <p className="text-red-700">$00:00</p>
                    </div>
                </div>
                <form className="mb-6" onSubmit={onSubmit}>
                    <input type="text" placeholder="Description" className="w-full px-3 py-2 rounded-md border border-gray-300 mb-2" required />
                    <input type="number" placeholder="Amount" className="w-full px-3 py-2 rounded-md border border-gray-300 mb-2" required />
                    <div className="mb-2">
                        <input type="radio" name="transactionType" id="expense" className="mr-1" />
                        <label htmlFor="expense" className="text-gray-700 mr-4">Expense</label>
                        <input type="radio" name="transactionType" id="income" className="mr-1" />
                        <label htmlFor="income" className="text-gray-700">Income</label>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-blue-600">Add Transaction</button>
                </form>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">TRANSACTION</h2>
            </div>
        </div>
    );
};

export default Expense;
