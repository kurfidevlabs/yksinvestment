import React from 'react';
import { SolarProduct } from '../../pages/SolarCatalog';

interface ProductCardProps {
    product: SolarProduct;
}

const SolarProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden">
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                 {(product.isBestSeller || product.isNew) && (
                    <span className={`absolute top-4 left-4 text-xs font-medium py-1 px-3 rounded-full text-[#0A2540] ${product.isBestSeller ? 'bg-[#FFB703]' : 'bg-gray-200'}`}>
                       {product.isBestSeller ? 'Best Seller' : 'New'}
                    </span>
                 )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#0A2540]">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                <div className="mt-4 flex-grow">
                    <p className="text-2xl font-bold text-[#00BFA6]">{formatter.format(product.price)}</p>
                    <p className="text-sm text-gray-500">or {formatter.format(product.price / 2)} upfront</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                    <button className="flex-1 bg-[#0A2540] text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-[#1D3557] transition-colors duration-300">
                        View Details
                    </button>
                    <button className="flex-1 bg-[#00BFA6] text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-[#06D6A0] transition-colors duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};


interface ProductGridProps {
    products: SolarProduct[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
        <section className="bg-[#F6F8FA] py-16 px-4 md:px-16">
            <div className="container mx-auto">
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <SolarProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                         <h3 className="text-2xl font-semibold text-gray-700">No products found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;