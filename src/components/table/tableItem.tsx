import React from 'react';

const TableItem = (props: {id: number, title: string, body: string}) => {
    return (
        <div className="tableItem">
            <div className="tableItemColumn itemId idColumn">{props.id}</div>
            <div className="tableItemColumn itemTitle titleColumn">{props.title}</div>
            <div className="tableItemColumn itemBody bodyColumn">{props.body}</div>
        </div>
    );
};

export default TableItem;