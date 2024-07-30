import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const coffeeData = { name, quantity, supplier, taste, category, details, photo };
        console.log(coffeeData);

        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    swal("good job", "coffee updated successfully!", "success");
                }
            })
    }

    return (
        <div className='w-2/3 mx-auto text-center my-20 bg-gray-100 p-20'>
            <h2 className='text-2xl font-bold mb-5 text-center'>update a coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-2 gap-5'>
                    <label className="input input-bordered flex items-center gap-2">
                        Coffee Name:
                        <input type="text" name='name' className="grow" defaultValue={name} placeholder="type here..." />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Quantity:
                        <input type="text" name='quantity' className="grow" defaultValue={quantity} placeholder="type here..." />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Supplier:
                        <input type="text" name='supplier' className="grow" defaultValue={supplier} placeholder="type here..." />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Taste:
                        <input type="text" name='taste' className="grow" defaultValue={taste} placeholder="type here..." />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Category:
                        <input type="text" name='category' className="grow" defaultValue={category} placeholder="type here..." />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Details:
                        <input type="text" name='details' className="grow" defaultValue={details} placeholder="type here..." />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Photo URL:
                        <input type="text" name='photo' className="grow" defaultValue={photo} placeholder="type here..." />
                    </label>
                </div>
                <input className='btn btn-neutral mt-4' type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;