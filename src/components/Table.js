/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import { COLUMNS } from "./data";
import { GlobalFilter } from "./GlobalFilter";
import "./styles.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const Table = ({ newData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => newData);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, globalFilter } = state;

  return (
    <div className="divCon">
      <div>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="thSearch" {...column.getHeaderProps()}>
                {column.render("Header")}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </div>

      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div>
        <table className="table" {...getTableProps()}>
          <thead className="thead">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span className="icon">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <BsFillArrowDownCircleFill />
                        ) : (
                          <BsFillArrowUpCircleFill />
                        )
                      ) : (
                        <BsFillArrowUpCircleFill />
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className="td" {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="footerDiv">
        <button
          className={!canPreviousPage ? "disabledButton" : "button"}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          First 10 rows
        </button>
        <button
          className={!canPreviousPage ? "disabledButton" : "button"}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className={!canNextPage ? "disabledButton" : "button"}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          className={!canNextPage ? "disabledButton" : "button"}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          Last 10 rows
        </button>
      </div>
      <div className="footerDiv">
        <span>
          Page <strong>{pageIndex + 1}</strong>{" "}
        </span>
      </div>
    </div>
  );
};
