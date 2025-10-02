import React, { useState, useMemo } from 'react';
import HeaderBanner from '../components/SolarPage/HeaderBanner';
import FilterSortBar, { categories, sortOptions } from '../components/SolarPage/FilterSortBar';
import ProductGrid from '../components/SolarPage/ProductGrid';
import InfoStrip from '../components/SolarPage/InfoStrip';
import ComparisonStrip from '../components/SolarPage/ComparisonStrip';
import PromoBanner from '../components/SolarPage/PromoBanner';

export interface SolarProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'Panels' | 'Batteries' | 'Generators';
  isNew: boolean;
  isBestSeller: boolean;
}

const solarProductsData: SolarProduct[] = [
    { id: 1, name: 'SunPower 400W Panel', price: 650, image: 'https://me3energy.ng/media/catalog/product/cache/aee3773ba3df5dbc5c7b764f11e5adc0/c/a/canadian_solar_panels_price_1_1.png', category: 'Panels', isNew: false, isBestSeller: true },
    { id: 2, name: 'YkS PowerWall 2.0', price: 2800, image: 'https://novelsolar.com/wp-content/uploads/2025/08/PHOTO-2025-08-20-17-40-24-e1755898658749.jpg', category: 'Batteries', isNew: true, isBestSeller: false },
    { id: 3, name: 'EcoFlow Delta Pro', price: 3599, image: 'http://www.hiteksolar.co.nz/cdn/shop/products/Hitek_PSG_700Wh_Pro_grande.jpg?v=1637300082', category: 'Generators', isNew: false, isBestSeller: true },
    { id: 4, name: 'LG NeON R 380W', price: 550, image: 'https://atcoenergy.com.ng/wp-content/uploads/2018/03/solar-panel.jpg', category: 'Panels', isNew: true, isBestSeller: false },
    { id: 5, name: 'Tesla Powerwall+', price: 8500, image: 'https://novelsolar.com/wp-content/uploads/2025/08/PHOTO-2025-08-20-17-40-24-e1755898658749.jpg', category: 'Batteries', isNew: false, isBestSeller: true },
    { id: 6, name: 'Jackery Explorer 1000', price: 999, image: 'http://www.hiteksolar.co.nz/cdn/shop/products/Hitek_PSG_700Wh_Pro_grande.jpg?v=1637300082', category: 'Generators', isNew: false, isBestSeller: false },
    { id: 7, name: 'Renogy 200W Kit', price: 450, image: 'https://me3energy.ng/media/catalog/product/cache/aee3773ba3df5dbc5c7b764f11e5adc0/c/a/canadian_solar_panels_price_1_1.png', category: 'Panels', isNew: false, isBestSeller: false },
    { id: 8, name: 'Enphase Encharge 10', price: 7200, image: 'https://www.suluway.ng/wp-content/uploads/2024/10/IMG_0017-1.jpg', category: 'Batteries', isNew: true, isBestSeller: false },
    { id: 9, name: 'Bluetti AC200MAX', price: 2099, image: 'https://www.suluway.ng/wp-content/uploads/2024/10/IMG_0017-1.jpg', category: 'Generators', isNew: false, isBestSeller: false },
];

const SolarCatalog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState(sortOptions[0]);

    const filteredAndSortedProducts = useMemo(() => {
        let result = solarProductsData;

        if (activeCategory !== 'All') {
            result = result.filter(product => product.category === activeCategory);
        }

        if (searchTerm) {
            result = result.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        switch (sortOption) {
            case 'Price Low → High':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'Price High → Low':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'Newest':
                result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
                break;
            case 'Best Sellers':
            default:
                result.sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller));
                break;
        }

        return result;
    }, [activeCategory, searchTerm, sortOption]);

    return (
        <div>
            <HeaderBanner />
            <FilterSortBar 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortOption={sortOption}
                setSortOption={setSortOption}
            />
            <ProductGrid products={filteredAndSortedProducts} />
            <InfoStrip />
            <ComparisonStrip />
            <PromoBanner />
        </div>
    );
};

export default SolarCatalog;