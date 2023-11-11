// Create a SearchResults component
import { useState } from "react";
import { SearchBar } from "./Welcome";
import { ProductCard } from "@/Components/ProductCard";
import { Head, Link } from "@inertiajs/react";
const SearchResults = ({ products, query, category, sortBy, sortOrder }) => {
    function setSorting(value) {
        if (value === "name_asc") {
            setSortBy("name");
            setSortOrder("asc");
        } else if (value === "name_desc") {
            setSortBy("name");
            setSortOrder("desc");
        } else if (value === "price_asc") {
            setSortBy("price");
            setSortOrder("asc");
        } else if (value === "price_desc") {
            setSortBy("price");
            setSortOrder("desc");
        }
    }

    const generateSortUrl = (newSortBy, newSortOrder) => {
        if (query === null || category === null) {
            return `/search?sort_by=${newSortBy}&sort_order${newSortOrder}`;
        }
        return `/search?query=${query}&category=${category}&sort_by=${newSortBy}&sort_order=${newSortOrder}`;
    };

    const routes = ["Jerseys", "Basketballs", "Clothing", "Goodies", "Other"];
    return (
        <>
            <Head title={`"${query}" ${category}`} />
            <div>
                <h1>Search Results for "{query}"</h1>
                {/* <p>cat:{category}</p>
                <p>{category}</p>
                <p>{sortBy}</p>
                <p>{sortOrder}</p> */}
                <SearchBar />
                {products.length <= 0 ? (
                    <div className="p-6">
                        <h1 className="text-2xl font-semibold mb-6 text-center">
                            No product found. Please make a new search or select
                            a new product category.
                        </h1>
                        <div className="flex flex-col text-2xl gap-2">
                            <Link
                                className="duration-200 text-gray-400 hover:text-gray-900"
                                href="/"
                            >
                                Accueil
                            </Link>
                            {routes.map((route) => {
                                return (
                                    <>
                                        <Link
                                            className="duration-200 text-gray-400 hover:text-gray-900"
                                            key={route}
                                            href={`/products/${route}`}
                                        >
                                            {route}
                                        </Link>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="h-full justify-between flex flex-col flex-nowrap">
                            <div className="flex gap-6 p-6 bg-slate-200 w-full">
                                <p className="font-semibold">Sort by:</p>
                                <div className="flex gap-6">
                                    <a href={generateSortUrl("name", "asc")}>
                                        Name A-Z
                                    </a>
                                    <a href={generateSortUrl("name", "desc")}>
                                        Name Z-A
                                    </a>
                                    <a href={generateSortUrl("price", "asc")}>
                                        Price - to +
                                    </a>
                                    <a href={generateSortUrl("price", "desc")}>
                                        Price + - -
                                    </a>
                                </div>
                            </div>
                            <h1 className="text-xl m-6">
                                Search Results for "{query}"
                            </h1>
                            <div className="flex flex-wrap justify-center w-full m-2 p-2 gap-6">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default SearchResults;
