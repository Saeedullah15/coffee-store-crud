import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ eachCoffee, coffees, setCoffees }) => {
    console.log(eachCoffee);
    const { _id, name, quantity, supplier, taste, category, details, photo } = eachCoffee;

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this action!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:3000/coffee/${id}`, {
                        method: "delete"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Your coffee has been deleted!", {
                                    icon: "success",
                                });
                                const remainingCoffees = coffees.filter(each => each._id !== id);
                                setCoffees(remainingCoffees);
                            }
                        })
                } else {
                    swal("Your coffee is safe!");
                }
            });
    }

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='w-full h-48' src={photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className='flex'>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                        <p>{category}</p>
                    </div>
                    <div className="card-actions justify-center mt-4">
                        <button className="btn btn-success">see details</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-primary">edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-warning">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;