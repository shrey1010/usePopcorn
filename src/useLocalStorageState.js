import { useState,useEffect } from "react";

export function useLocalStorageState(initialState){
      const [watched, setWatched] = useState(function () {
        const storedValue = localStorage.getItem("watched");
        return storedValue ? JSON.parse(storedValue) : initialState
      });  
    useEffect(
        function () {
        localStorage.setItem("watched", JSON.stringify(watched));
        },
        [watched]
    );
    return [watched, setWatched];
}