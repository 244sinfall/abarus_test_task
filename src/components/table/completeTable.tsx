import React from 'react';
import SearchBar from "../searchBar/searchBar";
import DataTable from "./dataTable";

const CompleteTable = () => {
    return (
        <div className="app">
            <SearchBar/>
            <DataTable />
        </div>
    );
};

export default CompleteTable;