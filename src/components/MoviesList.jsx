import React from 'react';
import { useState, useEffect, useContext, createContext,useRef } from 'react';
import Post from './Post';
import Aside from './Aside';
import { QueryContext, ResultContext } from './Main';
import { MdFavorite } from "react-icons/md";

export const ListContext = createContext('')
const apiKey = '3aa1a549';
const url = `http://www.omdbapi.com/?apikey=${apiKey}&s`;

function MoviesList() {
    const [query, setQuery] = useContext(QueryContext);
    const [result, setResult] = useContext(ResultContext);
    const [list, setList] = useState([]);
    const [favourite, setFavourite] = useState('Star Wars');

    const searchMovies = async () => {
        try {
            const res = await fetch(`${url}=${query}`)
            const data = await res.json()
            await setResult(data.Search.map(item => {
                return <div key={crypto.randomUUID()}>
                    <Post
                        Title={item.Title}
                        Poster={item.Poster}
                        Year={item.Year}
                        Type={item.Type}/>
                    <button type="submit"
                        onClick={() => setFavourite(item.Title)}
                        className="bg-red  text-xl m-auto w-1/2 h-full flex justify-center mb-8 ">
                        The best movie! <span className="text-2xl px-2"><MdFavorite /></span></button>
                    <button type="submit"
                        onClick={() => list.includes(item.Title)? console.log('is on the list') : setList(prevList => { return [...prevList, item.Title] })  }
                         className="bg-red w-full h-full text-xl flex justify-center">Add to favourite list</button>
                </div>
            }))
        }

        catch (err) { return setResult(result) }
    }

    useEffect(() => {
        searchMovies()
    }, [query, list]);


    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-full">
                <ListContext.Provider value={[list, setList]} >
                    <Aside favourite={favourite} />
                </ListContext.Provider>
            </div>
            <div className="w-full justify-end items-center p-5">
                <ul
                    className="flex flex-wrap items-center justify-center p-10 gap-10 text-green ">
                    {result}
                </ul>
            </div>
        </div>
    )

}
export default MoviesList