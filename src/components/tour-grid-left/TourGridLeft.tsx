// // "use client";
// // import { tourData } from "@/data/tour-data";
// // import React from "react";
// // import SidebarSearchArea from "../shearedComponents/SidebarSearchArea";
// // import PaginationWrapper from "../shearedComponents/PaginationWrapper";
// // import RoomSingleCard from "../common/roomElements/RoomSingleCard";
// // import { useSearch } from "@/hooks/useSearch";
// // import BookingFormModal from "@/elements/modals/BookingFormModal";
// // import sampleMapData from "./sampleMapData";

// // const TourGridLeft = () => {
// //   const filterData = tourData.slice(28, 40);
// //   const searchData = useSearch("tour");
// //   // const mapData = searchData?.length ? searchData : filterData;
// //   const mapData = searchData?.length ? searchData : sampleMapData; // Use sample data if no search results

// //   return (
// //     <>
// //       <section className="bd-tour-grid-area section-space">
// //         <div className="container">
// //           <div className="row gy-24">
// //             <div className="col-xxl-4 col-xl-4 col-lg-5 order-lg-0 order-1">
// //               <SidebarSearchArea placeHolderTextData="Tour Place" />
// //             </div>
// //             <div className="col-xxl-8 col-xl-8 col-lg-7 order-lg-1 order-0">
// //               <div className="row gy-24">
// //                 {mapData?.map((item) => (
// //                   <RoomSingleCard
// //                     tour={item}
// //                     key={item?.id}
// //                   />
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //           <PaginationWrapper />
// //         </div>
// //       </section>
// //       <BookingFormModal />
// //     </>
// //   );
// // };

// // export default TourGridLeft;

// // components/HotelGridLeft.tsx
// "use client";
// import React, { useCallback, useRef, useState } from "react";
// import SidebarSearchArea from "../shearedComponents/SidebarSearchArea";
// import RoomSingleCard from "../common/roomElements/RoomSingleCard";
// import { useGetHotelsQuery } from "@/services/hotelAPI";
// import BookingFormModal from "@/elements/modals/BookingFormModal";
// import sampleMapData from "./sampleMapData";

//   const mapData = sampleMapData; // Use sample data if no search results
// const HotelGridLeft = () => {
//   const [page, setPage] = useState(1);
//   const [search, setSearch] = useState("");
//   const [sortField, setSortField] = useState("createdAt");
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
//   const containerRef = useRef<HTMLDivElement>(null);

//   const {
//     data: hotelsData,
//     isLoading,
//     isFetching,
//     isError,
//     error
//   } = useGetHotelsQuery({
//     page,
//     limit: 12,
//     search,
//     status: "active",
//     sortField,
//     sortOrder,
//   });

//   console.log("hotelsData", hotelsData);

//   const handleSearch = (searchTerm: string) => {
//     setSearch(searchTerm);
//     setPage(1);
//   };

//   // Check if there are more pages to load
//   const hasMorePages = useCallback(() => {
//     if (!hotelsData?.data?.pagination) return false;
//     const { page: currentPage, pages: totalPages } = hotelsData.data.pagination;
//     return currentPage < totalPages;
//   }, [hotelsData?.data?.pagination]);

//   // Intersection Observer for infinite scroll
//   const observerRef = useRef<IntersectionObserver>();
//   const lastHotelRef = useCallback((node: HTMLDivElement) => {
//     if (isLoading || isFetching) return;
//     if (observerRef.current) observerRef.current.disconnect();

//     observerRef.current = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && hasMorePages()) {
//         setPage((prev) => prev + 1);
//       }
//     });

//     if (node) observerRef.current.observe(node);
//   }, [isLoading, isFetching, hasMorePages]);

//   // Early return for loading state
//   if (isLoading && page === 1) {
//     return (
//       <section className="bd-tour-grid-area section-space">
//         <div className="container">
//           <div className="text-center py-4">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // Early return for error state
//   if (isError) {
//     return (
//       <section className="bd-tour-grid-area section-space">
//         <div className="container">
//           <div className="alert alert-danger">
//             Error loading hotels. Please try again.
//             {error && <div className="mt-2">{JSON.stringify(error)}</div>}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   const hotels = hotelsData?.data?.hotels || [];
//   const pagination = hotelsData?.data?.pagination || {
//     page: 1,
//     limit: 12,
//     total: 0,
//     pages: 1,
//   };

//   return (
//     <section className="bd-tour-grid-area section-space">
//       <div className="container">
//         <div className="row gy-24">
//           <div className="col-xxl-4 col-xl-4 col-lg-5 order-lg-0 order-1">
//             <SidebarSearchArea 
//               placeHolderTextData="Search Hotels" 
//               // onSearch={handleSearch}
//             />

//             {/* Sorting Options */}
//             <div className="mt-4">
//               <select 
//                 className="form-select"
//                 value={`${sortField}-${sortOrder}`}
//                 onChange={(e) => {
//                   const [field, order] = e.target.value.split("-") as [string, "asc" | "desc"];
//                   setSortField(field);
//                   setSortOrder(order);
//                   setPage(1);
//                 }}
//               >
//                 <option value="rating-desc">Rating (High to Low)</option>
//                 <option value="rating-asc">Rating (Low to High)</option>
//                 <option value="createdAt-desc">Newest First</option>
//                 <option value="createdAt-asc">Oldest First</option>
//               </select>
//             </div>
//           </div>

//           <div className="col-xxl-8 col-xl-8 col-lg-7 order-lg-1 order-0">
//           {hotels.length === 0 && !isLoading ? (
//               <div className="alert alert-info">
//                 No hotels found matching your criteria.
//               </div>
//             ) : (
//               <>
//                 <div className="row gy-24" ref={containerRef}>
//                   {hotels.map((hotel, index) => (
//                     <div
//                       key={hotel._id}
//                       ref={index === hotels.length - 1 ? lastHotelRef : null}
//                       // className="col-md-6"
//                     >
//                       <RoomSingleCard
//                         tour={{
//                           id: hotel._id,
//                           img: hotel.images[0] || '/placeholder-hotel.jpg',
//                           tourTitle: hotel.name,
//                           tourLocation: `${hotel.address.city}, ${hotel.address.country}`,
//                           tourType: hotel.type,
//                           highlightFeature: hotel.description.substring(0, 100) + '...',
//                           tourRating: hotel.rating,
//                           tourPrice: 0, // Add price if available in your data
//                           taxesAndFees: 0, // Add if available
//                           distanceFromLandmark: 'City Center', // Add if available
//                           amenities: hotel.amenities,
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 {/* Loading indicator for infinite scroll */}
//                 {isFetching && (
//                   <div className="text-center py-4">
//                     <div className="spinner-border text-primary" role="status">
//                       <span className="visually-hidden">Loading more...</span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Results count */}
//                 <div className="mt-4 text-muted">
//                   Showing {hotels.length} of {pagination.total} hotels
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <BookingFormModal />
//     </section>
//   );
// };

// export default HotelGridLeft;

// "use client";
// import React, { useCallback, useRef, useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useGetHotelsQuery } from "@/services/hotelAPI";
// import RoomSingleCard from "../common/roomElements/RoomSingleCard";
// import BookingFormModal from "@/elements/modals/BookingFormModal";
// import HotelFilterSidebar from "../shearedComponents/HotelFilterSidebar";
// import type { IHotel } from "@/services/hotelAPI";


// interface FilterState {
//   priceRange: [number, number];
//   amenities: string[];
//   search: string;
//   checkIn?: string;
//   checkOut?: string;
//   adults?: number;
//   children?: number;
// }

// const HotelGridLeft = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [page, setPage] = useState(1);
//   const [sortField, setSortField] = useState<string>("createdAt");
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   const [filters, setFilters] = useState<FilterState>({
//     priceRange: [500, 5000],
//     amenities: [],
//     search: "",
//     checkIn: undefined,
//     checkOut: undefined,
//     adults: undefined,
//     children: undefined
//   });

//   // Update filters from URL on mount and when URL changes
//   useEffect(() => {
//     const city = searchParams.get('city') || '';
//     const minPrice = searchParams.get('minPrice') || '500';
//     const maxPrice = searchParams.get('maxPrice') || '5000';
//     const amenities = searchParams.get('amenities')?.split(',').filter(Boolean) || [];
//     const checkIn = searchParams.get('checkIn') || undefined;
//     const checkOut = searchParams.get('checkOut') || undefined;
//     const adults = searchParams.get('adult') ? parseInt(searchParams.get('adult')!) : undefined;
//     const children = searchParams.get('children') ? parseInt(searchParams.get('children')!) : undefined;
    
//     setFilters({
//       search: city,
//       priceRange: [parseInt(minPrice), parseInt(maxPrice)],
//       amenities,
//       checkIn,
//       checkOut,
//       adults,
//       children
//     });
    
//     // Reset page when filters change
//     setPage(1);
//   }, [searchParams]);

//   // Create query string from current filters
//   const createQueryString = useCallback((filters: FilterState) => {
//     const params = new URLSearchParams(searchParams.toString());
    
//     // Update filter parameters
//     if (filters.search) {
//       params.set('city', filters.search);
//     } else {
//       params.delete('city');
//     }
    
//     params.set('minPrice', filters.priceRange[0].toString());
//     params.set('maxPrice', filters.priceRange[1].toString());
    
//     if (filters.amenities.length > 0) {
//       params.set('amenities', filters.amenities.join(','));
//     } else {
//       params.delete('amenities');
//     }
    
//     // Keep existing date and guest parameters if they exist
//     if (filters.checkIn) params.set('checkIn', filters.checkIn);
//     if (filters.checkOut) params.set('checkOut', filters.checkOut);
//     if (filters.adults) params.set('adult', filters.adults.toString());
//     if (filters.children) params.set('children', filters.children.toString());
    
//     return params.toString();
//   }, [searchParams]);

//   // Handle filter changes
//   const handleFilterChange = (newFilters: Partial<FilterState>) => {
//     const updatedFilters = { ...filters, ...newFilters };
//     setFilters(updatedFilters);
//     setPage(1);
    
//     const queryString = createQueryString(updatedFilters);
//     router.push(`/hotels?${queryString}`);
//   };

//   const {
//     data: hotelsData,
//     isLoading,
//     isFetching,
//     isError,
//     error
//   } = useGetHotelsQuery({
//     page,
//     limit: 12,
//     search: filters.search,
//     status: "active",
//     sortField,
//     sortOrder,
//     minPrice: filters.priceRange[0],
//     maxPrice: filters.priceRange[1],
//     amenities: filters.amenities,
//     city: filters.search,
//     checkIn: filters.checkIn,
//     checkOut: filters.checkOut,
//     adults: filters.adults,
//     children: filters.children
//   });

//   // Infinite scroll logic
//   const observerRef = useRef<IntersectionObserver>();
//   const lastHotelRef = useCallback((node: HTMLDivElement) => {
//     if (isLoading || isFetching) return;
//     if (observerRef.current) observerRef.current.disconnect();

//     observerRef.current = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && 
//           hotelsData?.data?.pagination?.page !== undefined &&
//           hotelsData?.data?.pagination?.pages !== undefined &&
//           hotelsData.data.pagination.page < hotelsData.data.pagination.pages) {
//         setPage(prev => prev + 1);
//       }
//     });

//     if (node) observerRef.current.observe(node);
//   }, [isLoading, isFetching, hotelsData?.data?.pagination]);

//   if (isLoading && page === 1) {
//     return (
//       <section className="bd-tour-grid-area section-space">
//         <div className="container">
//           <div className="text-center py-4">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   const hotels = hotelsData?.data?.hotels || [];
//   const pagination = hotelsData?.data?.pagination || {
//     page: 1,
//     limit: 12,
//     total: 0,
//     pages: 1,
//   };
//   const availableFilters = hotelsData?.data?.filters;

//   return (
//     <section className="bd-tour-grid-area section-space">
//       <div className="container">
//         <div className="row gy-24">
//           {/* Sidebar */}
//           <div className="col-xxl-4 col-xl-4 col-lg-5 order-lg-0 order-1">
//             <HotelFilterSidebar
//               initialFilters={filters}
//               availableFilters={availableFilters}
//               onFilterChange={handleFilterChange}
//               onSortChange={(field: string, order: "asc" | "desc") => {
//                 setSortField(field);
//                 setSortOrder(order);
//                 setPage(1);
//               }}
//             />
//           </div>

//           {/* Main Content */}
//           <div className="col-xxl-8 col-xl-8 col-lg-7 order-lg-1 order-0">
//             {isError ? (
//               <div className="alert alert-danger">
//                 Error loading hotels. Please try again.
//                 {error && typeof error === 'object' && 'error' in error && (
//                   <div className="mt-2">{String(error.error)}</div>
//                 )}
//               </div>
//             ) : hotels.length === 0 && !isLoading ? (
//               <div className="alert alert-info">
//                 No hotels found matching your criteria.
//               </div>
//             ) : (
//               <>
//                 {/* Active Filters */}
//                 {(filters.search || filters.amenities.length > 0) && (
//                   <div className="mb-4 p-3 bg-light rounded">
//                     <h6 className="mb-2">Active Filters:</h6>
//                     <div className="d-flex flex-wrap gap-2">
//                       {filters.search && (
//                         <span className="badge bg-primary">
//                           Location: {filters.search}
//                         </span>
//                       )}
//                       {filters.amenities.map(amenity => (
//                         <span key={amenity} className="badge bg-secondary">
//                           {amenity}
//                           <button
//                             type="button"
//                             className="btn-close btn-close-white ms-2"
//                             onClick={() => handleFilterChange({
//                               amenities: filters.amenities.filter(a => a !== amenity)
//                             })}
//                           />
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div className="row gy-24" ref={containerRef}>
//                   {hotels.map((hotel, index) => (
//                     <div
//                       key={hotel._id}
//                       ref={index === hotels.length - 1 ? lastHotelRef : null}
//                       className="col-md-6"
//                     >
//                       <RoomSingleCard
//       tour={{
//         id: hotel._id,
//         img: hotel.images[0] || '/placeholder-hotel.jpg',
//         tourTitle: hotel.name,
//         tourLocation: `${hotel.address.city}, ${hotel.address.country}`,
//         tourType: hotel.type,
//         highlightFeature: hotel.description?.substring(0, 100) + '...',
//         tourRating: hotel.rating,
//         tourPrice: hotel.price?.amount || 0, // Now TypeScript knows price exists
//         taxesAndFees: 0,
//         distanceFromLandmark: 'City Center',
//         amenities: hotel.amenities,
//       }}
//     />
//                     </div>
//                   ))}
//                 </div>

//                 {/* Loading indicator for infinite scroll */}
//                 {isFetching && page > 1 && (
//                   <div className="text-center py-4">
//                     <div className="spinner-border text-primary" role="status">
//                       <span className="visually-hidden">Loading more...</span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Results count */}
//                 <div className="mt-4 text-muted">
//                   Showing {hotels.length} of {pagination.total} hotels
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <BookingFormModal />
//     </section>
//   );
// };

// export default HotelGridLeft;



"use client";
import React, { useCallback, useRef, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { useGetHotelsQuery } from "@/services/hotelAPI";
import RoomSingleCard from "../common/roomElements/RoomSingleCard";
import BookingFormModal from "@/elements/modals/BookingFormModal";
import HotelFilterSidebar from "../shearedComponents/HotelFilterSidebar";
import { setFilters, setSorting } from '@/redux/slices/filterSlice';
import type { RootState } from '@/redux/store';
import HotelSingleCard from "../common/roomElements/RoomSingleCard";


const HotelGridLeft = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filter);
  console.log("filters", filters);
  const [page, setPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    data: hotelsData,
    isLoading,
    isFetching,
    isError,
    error
  } = useGetHotelsQuery({
    page,
    limit: 2,
    search: filters.search,
    status: "active",
    sortField: filters.sortField,
    sortOrder: filters.sortOrder,
    minPrice: filters.priceRange[0],
    maxPrice: filters.priceRange[1],
    amenities: filters.amenities,
    checkIn: filters.checkIn,
    checkOut: filters.checkOut,
    adults: filters.adults,
    children: filters.children,
    city: filters.city,
  });
  console.log("hotelsData", hotelsData);

  // Infinite scroll logic
  const observerRef = useRef<IntersectionObserver>();
  const lastHotelRef = useCallback((node: HTMLDivElement) => {
    if (isLoading || isFetching) return;
    if (observerRef.current) observerRef.current.disconnect();

    // observerRef.current = new IntersectionObserver((entries) => {
    //   if (entries[0].isIntersecting && 
    //       hotelsData?.data?.pagination?.page !== undefined &&
    //       hotelsData?.data?.pagination?.pages !== undefined &&
    //       hotelsData.data.pagination.page < hotelsData.data.pagination.pages) {
    //     setPage(prev => prev + 1);
    //   }
    // });

    // if (node) observerRef.current.observe(node);
  }, [isLoading, isFetching, hotelsData?.data?.pagination]);

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    dispatch(setFilters(newFilters));
    setPage(1);
  };

  const handleSortChange = (field: string, order: "asc" | "desc") => {
    dispatch(setSorting({ field, order }));
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  if (isLoading && page === 1) {
    return (
      <div className="bd-tour-grid-area section-space">
        <div className="container">
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const hotels = hotelsData?.data?.hotels || [];
  console.log("hotels", hotels);

  const pagination = hotelsData?.data?.pagination || {
    page: 1,
    limit: 12,
    total: 0,
    pages: 1,
  };

  console.log("pagination", pagination);

  const hasMorePages = pagination.page < pagination.pages;
  console.log("hasMorePages", hasMorePages);


  return (
    <section className="bd-tour-grid-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <HotelFilterSidebar
              initialFilters={filters}
              availableFilters={hotelsData?.data?.filters}
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
            />
          </div>

          <div className="col-xxl-8 col-xl-8 col-lg-8">
            {isError ? (
              <div className="alert alert-danger">
                Error loading hotels. Please try again.
                {error && typeof error === 'object' && 'error' in error && (
                  <div className="mt-2">{String(error.error)}</div>
                )}
              </div>
            ) : hotels.length === 0 ? (
              <div className="alert alert-info">
                No hotels found matching your criteria.
              </div>
            ) : (
              <>
              <div className="row g-4" ref={containerRef}>
                {hotels.map((hotel:any, index) => (
                  <div
                    key={hotel._id}
                    ref={index === hotels.length - 1 ? lastHotelRef : null}
                    className=""
                  >
                 <HotelSingleCard
  hotel={{
    id: hotel._id,
    img: hotel.mainImage || hotel.images[0] || '/placeholder-hotel.jpg',
    name: hotel.name,
    location: `${hotel.address.city}, ${hotel.address.country}`,
    type: hotel.type,
    highlightFeature: hotel.propertyHighlights || hotel.description?.substring(0, 100) + '...',
    rating: hotel.rating,
    // Update pricing structure to match API response
    price: hotel.pricing?.basePrice || 0,
    originalPrice: hotel.pricing?.totalPrice || 0,
    taxesAndFees: hotel.pricing?.taxesAndFees || 0,
    distanceFromLandmark: hotel.address.distanceFromLandmark || 'City Center',
    amenities: hotel.amenities,
    // Add additional properties from API
    images: hotel.images || [],
    deals: hotel.deals || '',
    hotelId: hotel._id
  }}
/>
                  </div>
                ))}
              </div>

                

                {/* {isFetching && page > 1 && (
                  <div className="text-center py-4">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading more...</span>
                    </div>
                  </div>
                )}

                <div className="mt-4 text-muted">
                  Showing {hotels.length} of {pagination.total} hotels
                </div>
              </div> */}

<div className="text-center mt-4">
                  {hasMorePages && (
                    <button
                      className="load-more-btn"
                      onClick={handleLoadMore}
                      disabled={isFetching}
                    >
                      {isFetching ? 'Loading...' : 'Load More'}
                    </button>
                  )}
                  
                  <div className="mt-3 text-muted">
                    Showing {hotels.length} of {pagination.total} hotels
                  </div>
                </div>

                <style jsx>{`
                  .load-more-btn {
                    background-color: #198754;
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                  }

                  .load-more-btn:hover {
                    background-color: #157347;
                    transform: translateY(-2px);
                  }

                  .load-more-btn:disabled {
                    background-color: #6c757d;
                    cursor: not-allowed;
                    transform: none;
                  }
                `}</style>
              </>
            )}
          </div>
        </div>
      </div>
      <BookingFormModal />
    </section>
  );
};

export default HotelGridLeft;