import React from 'react'
// import { Input } from 'reactstrap';

export const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column
    return (
        <span>
            {/* Search: {' '} */}
            <input className="form-control" value={filterValue || ''} 
            onChange={(e)=> setFilter(e.target.value)}/>
        </span>
    )
}

