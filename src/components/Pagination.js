
import { usePagination } from '../hooks/usePagination';

const Pagination = (props) => {
  const {
    onPageChange,
    totalPageCount,
    siblingCount = 1,
    currentPage,
  } = props;


  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  return (
    <div className=" h-[40px] my-5 flex justify-center items-center gap-4">

        {/* Previous Button */}
        { currentPage > 1 && 
        <div className="h-8 w-8 cursor-pointer hover:scale-125 hover:transition-all" onClick={() => onPageChange(currentPage - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="LeftArrow"><g data-name="Layer 2" fill="#f97316" class="color000000 svgShape"><path d="M22 12a10 10 0 1 0-10 10 10 10 0 0 0 10-10zm-11.86 3.69-2.86-3a.49.49 0 0 1-.1-.15.54.54 0 0 1-.1-.16.94.94 0 0 1 0-.76 1 1 0 0 1 .21-.33l3-3a1 1 0 0 1 1.42 1.42L10.41 11H16a1 1 0 0 1 0 2h-5.66l1.25 1.31a1 1 0 0 1-1.45 1.38z" data-name="arrow-circle-left" fill="#f97316" class="color000000 svgShape"></path></g></svg>
        </div> }

        {/* Page Numbers */}
        {paginationRange?.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === 'DOTS') {
            return <p className="text-md text-gray-500 ">...</p>;
            }
		
        // Render our Page Pills
            return (
                <p
                className={`text-base text-center cursor-pointer h-7 w-7 rounded-full shadow-sm hover:bg-orange-300 hover:text-white ${pageNumber === currentPage ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700' }`}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </p>
            );
        })}

        {/* Next Button */}
        { currentPage < totalPageCount && <div className=" h-8 w-8 cursor-pointer hover:scale-125 hover:transition-all" onClick={() => onPageChange(currentPage + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="RightArrow"><g data-name="Layer 2" fill="#f97316" class="color000000 svgShape"><path d="M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12zm11.86-3.69 2.86 3a.49.49 0 0 1 .1.15.54.54 0 0 1 .1.16.94.94 0 0 1 0 .76 1 1 0 0 1-.21.33l-3 3a1 1 0 0 1-1.42-1.42l1.3-1.29H8a1 1 0 0 1 0-2h5.66l-1.25-1.31a1 1 0 0 1 1.45-1.38z" data-name="arrow-circle-right" fill="#f97316" className="color000000 svgShape"></path></g></svg>
        </div> 
    }
      </div>
  );
};

export default Pagination;

