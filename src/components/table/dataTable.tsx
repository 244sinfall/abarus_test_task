import React, {useEffect} from 'react';
import TableHead from "./tableHead";
import {getContent} from "../../app/model/tableData";
import TableItem from "./tableItem";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setContent, setPage} from "../../app/model/contentSlice";
import TableControls from "./tableControls";
import {useParams} from "react-router";


const DataTable = () => {
    const state = useAppSelector((state) => state)
    const dispatch = useAppDispatch()
    let sliceStart = (state.content.currentPage - 1) * 10
    let { routedPage } = useParams()
    useEffect(() => {
        getContent().then((data) => dispatch(setContent(data)))
    }, [dispatch])
    useEffect(() => {
        if(routedPage && !isNaN(parseInt(routedPage))) {
            dispatch(setPage(Number(routedPage)))
        }
    }, [dispatch, routedPage])
    useEffect(() => {
        window.history.pushState({}, '', String(state.content.currentPage))
    }, [state.content.currentPage])
    return (
        <div className="tableContainer">
            <TableHead/>
            {state.content.displayedData.slice(sliceStart, sliceStart+10).map((tableItem) => {
                    return <TableItem key={tableItem.id} id={tableItem.id} title={tableItem.title} body={tableItem.body}/>
                })}
            {state.content.maxPage !== 0 && <TableControls/>}
        </div>
    );
};

export default DataTable;