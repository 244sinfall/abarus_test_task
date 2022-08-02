import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {FilterType, inverseSortingOrder, setFilterType} from "../../app/model/contentSlice";
import './table.css'

const TableHead = () => {
    const state = useAppSelector((state) => state)
    const dispatch = useAppDispatch()
    const handleFilterClick = (triggeredBy: FilterType) => {
        if(state.content.filterBy === triggeredBy) {
            dispatch(inverseSortingOrder())
        } else {
            dispatch(setFilterType(triggeredBy))
        }
    }
    const downPointingFilterSVG = <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
        <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
    </svg>
    const upPointingFilterSVG = <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="12.3008" y1="7.18434" x2="6.4787" y2="1.35329" stroke="#FCFCFC"/>
        <line x1="7.01224" y1="1.5234" x2="1.35103" y2="7.1759" stroke="white"/>
    </svg>


    return (
        <div className="tableHead">
            <div className="headColumn headId idColumn" onClick={() => handleFilterClick(FilterType.id)}>
                <p>ID</p>
                {(state.content.filterBy === FilterType.id && !state.content.filterDescending)
                    ? upPointingFilterSVG : downPointingFilterSVG}
            </div>
            <div className="headColumn headTitle titleColumn" onClick={() => handleFilterClick(FilterType.title)}>
                <p>Заголовок</p>
                {(state.content.filterBy === FilterType.title && !state.content.filterDescending)
                    ? upPointingFilterSVG : downPointingFilterSVG}
            </div>
            <div className="headColumn headBody bodyColumn" onClick={() => handleFilterClick(FilterType.body)}>
                <p>Описание</p>
                {(state.content.filterBy === FilterType.body && !state.content.filterDescending)
                    ? upPointingFilterSVG : downPointingFilterSVG}
            </div>
        </div>
    );
};

export default TableHead;