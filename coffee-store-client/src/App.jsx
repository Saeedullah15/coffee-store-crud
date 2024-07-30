import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';

function App() {
    const allCoffeeData = useLoaderData();
    const [coffees, setCoffees] = useState(allCoffeeData);

    return (
        <>
            <h1 className='text-center text-2xl font-bold mt-10 mb-4'>Coffee Store: {coffees.length}</h1>
            <div className='grid grid-cols-3 gap-10 max-w-7xl mx-auto'>
                {
                    coffees.map(eachCoffee => <CoffeeCard
                        key={eachCoffee._id}
                        eachCoffee={eachCoffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </>
    )
}

export default App
