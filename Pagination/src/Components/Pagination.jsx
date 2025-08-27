import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import "./Pagination.css";

const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    // Fetch all products once
    const fetchData = async () => {
        fetch("https://dummyjson.com/products?limit=500")
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }

    useEffect(() => {
        fetchData()
    }, []);

    // Calculate the products to show on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate total pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    }

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    }

    return (
        <div>
            <div className='product'>
                {currentProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        title={product.title} 
                        price={product.price} 
                        img={product.images[0]} 
                    />
                ))}
            </div>

            {/* Pagination buttons */}
            <div className="pagination">
                <button 
                    onClick={handlePrevious} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index} 
                        className={currentPage === index + 1 ? 'active' : ''} 
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                <button 
                    onClick={handleNext} 
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;
