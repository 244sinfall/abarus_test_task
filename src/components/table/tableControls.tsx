import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setPage} from "../../app/model/contentSlice";
import NavigationButtons from "./navigationButtons";

const TableControls = () => {
    const state = useAppSelector((state) => state)
    const dispatch = useAppDispatch()
    const firstPage = 1
    return (
        <div className="tableControls">
            <button className="pageButton" onClick={() => dispatch(setPage(state.content.currentPage-1))}
                    disabled={state.content.currentPage === firstPage}>Назад</button>
            <NavigationButtons/>
            <button className="pageButton" onClick={() => dispatch(setPage(state.content.currentPage+1))}
                    disabled={state.content.currentPage === state.content.maxPage}>Далее</button>
        </div>
    );
};

export default TableControls;