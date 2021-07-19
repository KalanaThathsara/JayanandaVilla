import { ColumnFilter } from "../common/ColumnFilter";
import { Link } from "react-router-dom";

export const COLUMNS = [
  {
    Header: "Action",
    Cell: (props) => {
      const bookingID = props.row.original._id;

      async function onDeliver(bookingID) {
        console.log("Per ID", bookingID);
        // await deliverOrder(orderNo)
        // return
      }
      // async function getBackOnClick(memberID){
      //     console.log(memberID)
      //     await getMembershipBack(memberID)
      //     return
      // }

      return (
        <Link to={`/admin/view-one-reception-book/${bookingID}`}>
          <button
            className="btn btn-outline-primary"
            onClick={() => onDeliver(bookingID)}
          >
            View
          </button>
        </Link>
      );
    },
  },

  // {
  //   Header: "Status",
  //   accessor: "status",
  //   Filter: ColumnFilter,
  // },
  {
    Header: "Package No",
    accessor: "packageNo",
    Filter: ColumnFilter,
  },
  {
    Header: "Package",
    accessor: "package",
    Filter: ColumnFilter,
    style: {
      width: "20%",
    },
  },
  {
    Header: "Booking Date",
    accessor: "bookDate",
    Filter: ColumnFilter,
  },
  {
    Header: "# Persons",
    accessor: "adults",
    Filter: ColumnFilter,
  },
  {
    Header: "Total Amount",
    accessor: "total",
    Filter: ColumnFilter,
  },

  {
    Header: "Customer Name",
    accessor: "customer",
    Filter: ColumnFilter,
  },
  {
    Header: "Contact No",
    accessor: "contactNo",
    Filter: ColumnFilter,
  },
  {
    Header: "Email",
    accessor: "email",
    Filter: ColumnFilter,
  },
  {
    Header: "Date",
    accessor: "date",
    Filter: ColumnFilter,
  },
  {
    Header: "Time",
    accessor: "time",
    Filter: ColumnFilter,
  },
];
