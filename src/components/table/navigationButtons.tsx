import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setPage} from "../../app/model/contentSlice";

const NavigationButtons = () => {
    const state = useAppSelector((state) => state)
    const dispatch = useAppDispatch()
    const [numbers, setNumbers] = useState<number[]>([])
    useEffect(() => {
        if(state.content.currentPage < 3) {
            setNumbers([1, 2, 3, 4, 5])
        } else if (state.content.maxPage - state.content.currentPage < 3) {
            let m = state.content.maxPage
            setNumbers([m-4, m-3, m-2, m-1, m])
        } else {
            let c = state.content.currentPage
            setNumbers([c-2, c-1, c, c+1, c+2])
        }

    }, [state.content.currentPage, state.content.maxPage])
    return (
        <div className="navigationButtons">
            {numbers.map((number) => {
                return <button key={number} className="pageButton navigationButton"
                               disabled={number === state.content.currentPage}
                onClick={() => dispatch(setPage(number))}>{number}</button>
            })}
        </div>
    );
};

export default NavigationButtons;