import axios from 'axios'
import './App.css';
import { useState } from 'react';
import { ProductList } from './components/ProductList';
import Pagination from './components/Pagination';

function App() {
  const [prompt, setPrompt] = useState('')
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const handleChange = (e) => {
    setPrompt(e.target.value)
  }
  const handleSubmit = async (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      await fetchData(1); 
    }
  }

  const fetchData = async (pageNo) => {
    if(prompt) {
      const {data} = await axios.get(`https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${prompt}&resultsFormat=native&page=${pageNo}`)

      setProducts(data.results)
      setTotalPages(data.pagination.totalPages)
      setCurrentPage(data.pagination.currentPage)
      return data

    }
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {/* Search Bar */}
      <form className="flex justify-center items-center w-4/5 h-full my-5 space-x-2 relative">
        <input type="text" placeholder="Type your query here..." className="w-full h-12 border border-gray-300 text-gray-800 shadow hover:border-orange-500 rounded-full p-4 outline-none placeholder:text-orange-300" onChange={(e) => handleChange(e)} onKeyDown={handleSubmit}  />

        <button type="button" className="absolute right-4 h-5 w-5" onClick={() => {fetchData(1)}}> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Search"><path d="M46.599 40.236L36.054 29.691C37.89 26.718 39 23.25 39 19.5 39 8.73 30.27 0 19.5 0S0 8.73 0 19.5 8.73 39 19.5 39c3.75 0 7.218-1.11 10.188-2.943l10.548 10.545a4.501 4.501 0 0 0 6.363-6.366zM19.5 33C12.045 33 6 26.955 6 19.5S12.045 6 19.5 6 33 12.045 33 19.5 26.955 33 19.5 33z" fill="#f97316" className="color000000 svgShape"></path></svg>
        </button>
      </form>


      {/* Top Pagination */}
      { products.length > 0 && currentPage <= totalPages && <Pagination onPageChange={fetchData} totalPageCount={totalPages} currentPage={currentPage} />}

      {/* Products grid */}
      <ProductList products={products}/>

      {/* bottom Pagination */}
      { products.length > 0 && currentPage <= totalPages && <Pagination onPageChange={fetchData} totalPageCount={totalPages} currentPage={currentPage} />}
    </div>
  );
}

export default App;
