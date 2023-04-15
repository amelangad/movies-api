import React from 'react'
import {useContext} from 'react'
import { SearchContext, QueryContext, ResultContext } from './Main';

function Form() {

  const [search, setSearch] = useContext(SearchContext);
  const [query, setQuery] = useContext(QueryContext);
  const [result, setResult] = useContext(ResultContext);

  function onSubmit(e) {
    e.preventDefault()
    setQuery(search);
    setResult('brak filmu');
}

  return (
    <div className ="w-full flex flex-col justify-center items-center">
        <h1
            className="flex justify-center items-center p-5 text-green">
            Search for movies...
        </h1>
        <form
            onSubmit={onSubmit}
            className="w-full lg:w-1/2 flex justify-center items-center">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="  What movie for today? :)"
                className="justify-center items-center w-full h-12 rounded-full">
            </input>
            <button
                type="submit"
                className=" w-20 h-12 ml-5 cursor-pointer  bg-green rounded-full">Search</button>
        </form>
        </div>
  )
}

export default Form