import React from 'react';


const AddCity = ({handleSubmit, handleInputChange, newCity}) =>{
    return(
        <form className="px-8 pt-6 pb-5 mb-2" onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Add your favorite city" 
            onChange={handleInputChange}
            className="shadow border bg-white border border-blue-500 hover:border-blue-700 rounded sm:w-1/4 md:w-2/5 text-gray-darker text-sm  py-3 px-8 mx-2 leading-tight"
            value={newCity}/>
            <button type="submit" className="bg-blue-500 hover:bg-transparent text-white font-semibold sm:w-1/4 md:w-1/5 hover:text-blue-700 py-2 px-4 mx-2 my-2 border border-blue-500 hover:border-blue-700 rounded"> + Add City </button>
            
        </form>
    )
}

export default AddCity;