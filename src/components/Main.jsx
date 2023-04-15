import React from 'react'
import Form from './Form'
import MoviesList from './MoviesList'
import { useState } from 'react'
import { createContext } from 'react'

export const SearchContext = createContext('')
export const QueryContext = createContext([])
export const ResultContext = createContext([])

export default function Main() {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState([]);
    const [result, setResult] = useState([]);

  return (
    <div className = "w-full h-full">
    <ResultContext.Provider value={[result, setResult]}>
        <QueryContext.Provider value={[query, setQuery]}>
          <SearchContext.Provider value={[search, setSearch]}>
            <Form />
          </SearchContext.Provider>
          <MoviesList />
        </QueryContext.Provider>
      </ResultContext.Provider>
      </div>
  )
}
