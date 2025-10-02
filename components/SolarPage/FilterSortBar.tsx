import React from 'react';
import { SearchIcon, ChevronDownIcon } from '../icons';

export const categories = ["All", "Panels", "Batteries", "Generators"];
export const sortOptions = ["Best Sellers", "Price Low → High", "Price High → Low", "Newest"];

interface FilterSortBarProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    sortOption: string;
    setSortOption: (option: string) => void;
}

const FilterSortBar: React.FC<FilterSortBarProps> = ({ 
    activeCategory, 
    setActiveCategory, 
    searchTerm, 
    setSearchTerm, 
    sortOption, 
    setSortOption 
}) => {
    return (
        <div className="h-[70px] bg-white border-b border-gray-200 px-4 md:px-16 flex items-center justify-between sticky top-[70px] z-40">
            <div className="hidden md:flex items-center space-x-5">
                {categories.map(category => (
                    <button 
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`text-base font-medium transition-colors duration-200 relative pb-1 ${
                            activeCategory === category 
                            ? 'text-[#0A2540] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00BFA6]' 
                            : 'text-gray-500 hover:text-[#0A2540]'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-4">
                 <div className="relative">
                    <input
                        type="search"
                        placeholder="Search solar products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-[240px] h-[40px] bg-white rounded-lg pl-4 pr-10 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition-all"
                    />
                    <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                 <div className="relative">
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="appearance-none w-full md:w-[180px] h-[40px] bg-white rounded-lg px-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00BFA6] transition-all"
                        aria-label="Sort by"
                    >
                        {sortOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
                </div>
            </div>
        </div>
    );
};

export default FilterSortBar;