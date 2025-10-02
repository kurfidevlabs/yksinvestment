import React, { useState, useMemo } from 'react';
import HeaderBanner from '../components/EbikePage/HeaderBanner';
import FilterSortBar from '../components/EbikePage/FilterSortBar';
import ProductGrid from '../components/EbikePage/ProductGrid';
import ComparisonStrip from '../components/EbikePage/ComparisonStrip';
import PromoBanner from '../components/EbikePage/PromoBanner';
import { categories, sortOptions } from '../components/EbikePage/FilterSortBar';

export interface Bike {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'Urban' | 'Mountain' | 'Folding' | 'Premium';
  isNew: boolean;
  isBestSeller: boolean;
}

const bikesData: Bike[] = [
    { id: 1, name: 'Urban Glide X1', price: 1299, image: 'https://global.honda/content/dam/site/global-en/newsroom-new/cq_img/news/2024/11/c241105deng/c241105deng_og.jpg', category: 'Urban', isNew: false, isBestSeller: true },
    { id: 2, name: 'Mountain Peak Pro', price: 2499, image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1711551084-ANTHEM_PHOTON_BLUE_LEFT.jpg', category: 'Mountain', isNew: true, isBestSeller: false },
    { id: 3, name: 'City Cruiser V2', price: 999, image: 'https://cdn.bikedekho.com/processedimages/ultraviolette/f77/source/f7768a816a13cca5.jpg', category: 'Urban', isNew: false, isBestSeller: false },
    { id: 4, name: 'Folding Flash', price: 1450, image: 'https://global.honda/en/motorcycle/news/shared/img/thumb_c250916.webp', category: 'Folding', isNew: true, isBestSeller: true },
    { id: 5, name: 'Trail Blazer 500', price: 1899, image: 'https://www.bikeleague.in/wp-content/uploads/2023/10/electric-motorcycles-scooters-advantages-and-disadvantages.jpg', category: 'Mountain', isNew: false, isBestSeller: false },
    { id: 6, name: 'Premium Volt', price: 3200, image: 'https://global.honda/content/dam/site/global-en/newsroom-new/cq_img/news/2024/11/c241105deng/c241105deng_og.jpg', category: 'Premium', isNew: false, isBestSeller: true },
    { id: 7, name: 'Commuter Express', price: 1150, image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1711551084-ANTHEM_PHOTON_BLUE_LEFT.jpg', category: 'Urban', isNew: true, isBestSeller: false },
    { id: 8, name: 'Stealth Bomber', price: 3100, image: 'https://cdn.bikedekho.com/processedimages/ultraviolette/f77/source/f7768a816a13cca5.jpg', category: 'Premium', isNew: false, isBestSeller: false },
    { id: 9, name: 'Pocket Rocket', price: 1350, image: 'https://global.honda/en/motorcycle/news/shared/img/thumb_c250916.webp', category: 'Folding', isNew: false, isBestSeller: false },
];


const EbikeCatalog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState(sortOptions[0]);

    const filteredAndSortedBikes = useMemo(() => {
        let result = bikesData;

        if (activeCategory !== 'All') {
            result = result.filter(bike => bike.category === activeCategory);
        }

        if (searchTerm) {
            result = result.filter(bike => bike.name.toLowerCase().includes(searchTerm.toLowerCase()));
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
            <ProductGrid bikes={filteredAndSortedBikes} />
            <ComparisonStrip />
            <PromoBanner />
        </div>
    );
};

export default EbikeCatalog;
