function Search({onSearchChange}) {

    const handleChange = (e) =>{
        onSearchChange(e.target.value);
    }


    return (
        <div className="container mx-auto px-4 mt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Rechercher des films</h1>

            <input
                type="text"
                onChange={handleChange}
                placeholder="Rechercher des films..."
                className="w-full p-2 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
    );
}

export default Search;
