import { FilterData } from "./FilterData";
export const COLUMNS = [
  {
    Header: "Log ID",
    accessor: "logId",
    Filter: FilterData,
  },
  {
    Header: "Application Type",
    accessor: "applicationType",
    Filter: FilterData,
  },
  {
    Header: "Application ID",
    accessor: "applicationId",
    Filter: FilterData,
  },
  {
    Header: "Action",
    accessor: "actionType",
    Filter: FilterData,
  },
  {
    Header: "Action Details",
    accessor: "Action Details",
    Filter: FilterData,
  },
  {
    Header: "From Date",
    accessor: "creationTimestamp",
    Filter: FilterData,
  },
];
