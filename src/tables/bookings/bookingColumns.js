import { ColumnFilter } from '../common/ColumnFilter'

export const COLUMNS = [

    {
        Header: 'Booked Date',
        accessor: 'date',
        Filter: ColumnFilter,
        
    },
    {
        Header: 'Booked Time',
        accessor: 'time',
        Filter: ColumnFilter,
        
    },
    {
        Header: 'Room',
        accessor: 'room',
        Filter: ColumnFilter,
        
    },
    {
        Header: 'Dates',
        accessor: 'dates',
        Filter: ColumnFilter,
        style: {
            width: '20%'
        }
        
    },  
    {
        Header: 'Total Amount',
        accessor: 'total',
        Filter: ColumnFilter
    },  
    {
        Header: 'Customer Name',
        accessor: 'customer',
        Filter: ColumnFilter
    },
    {
        Header: 'Contact No',
        accessor: 'contactNo',
        Filter: ColumnFilter
    },
    {
        Header: 'Email',
        accessor: 'email',
        Filter: ColumnFilter
    }
    // {
    //     Header: 'Total Sales',
    //     accessor: 'sales',
    //     Filter: ColumnFilter
    // },
    // {
    //     Header: 'XS',
    //     accessor: 'XS',
    //     Filter: ColumnFilter
    // },    
    // {
    //     Header: 'S',
    //     accessor: 'S',
    //     Filter: ColumnFilter
    // },
    // {
    //     Header: 'M',
    //     accessor: 'M',
    //     Filter: ColumnFilter
    // },
    // {
    //     Header: 'L',
    //     accessor: 'L',
    //     Filter: ColumnFilter
    // },
    // {
    //     Header: 'XL',
    //     accessor: 'XL',
    //     Filter: ColumnFilter,
    // },
    // {
    //     Header: 'XXL',
    //     accessor: 'XXL',
    //     Filter: ColumnFilter,
    // }

]

// export const GROUPED_COLUMNS = [
    
//     {
//         Header: 'Name',
//         columns: [
//             {
//                 Header: 'Title',
//                 accessor: 'title',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Name with Initials',
//                 accessor: 'nameWinitials',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Full Name',
//                 accessor: 'fullName',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'First Name',
//                 accessor: 'commonFirst',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Last Name',
//                 accessor: 'commomLast',
//                 Filter: ColumnFilter
//             }
//         ]
//     },
//     {
//         Header: 'Gender',
//         accessor: 'gender',
//         Filter: ColumnFilter,
//     },
//     {
//         Header: 'Date of Birth',
//         accessor: 'dob',
//         Filter: ColumnFilter,
//     },
//     {
//         Header: 'NIC',
//         accessor: 'nic',
//         Filter: ColumnFilter,
//     },
//     {
//         Header: 'Contact Information',
//         columns: [
//             {
//                 Header: 'Email',
//                 accessor: 'email',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Mobile No',
//                 accessor: 'mobileNo',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Fixed No',
//                 accessor: 'fixedNo',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Residence Address',
//                 accessor: 'resAddrs',
//                 Filter: ColumnFilter
//             },
//             {
//                 Header: 'Permanent Address',
//                 accessor: 'perAddrs',
//                 Filter: ColumnFilter
//             }
//         ]
        
//     }
// ]