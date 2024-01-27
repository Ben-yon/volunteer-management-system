import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { media } from "../assets";
import { TableProps } from "../interfaces/TablePropsInterface";

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 10 } }, useGlobalFilter, usePagination);

  const { globalFilter, pageIndex, pageSize } = state;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };

  const filteredData = useMemo(() => {
      return data.filter((row) => {
          return Object.values(row).some((cellValue) =>
            String(cellValue).toLowerCase().includes(globalFilter)
          );
        })
  }, [data, globalFilter]);

  return (
    <div>
      <div className="relative">
        <img
          src={media.search}
          alt=""
          className="absolute top-[10px] left-[14px]"
        />
        <input
          type="text"
          value={globalFilter || ""}
          className="w-[1018px] h-[43px] rounded-[13px] border border-black-100 text-[15px] font-light  leading-[16.52px] pl-[43px]"
          placeholder="Search by name, interests, skills"
          onChange={handleSearchChange}
        />
      </div>
      <table {...getTableProps()} style={{ marginTop: "1rem" }}>
        <thead className="text-[12.83px] text-left">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <>
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  </>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-[15px]">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="text-primary p-4 py-2 text-center bg-black rounded-[10px]"
        >
          Previous
        </button>{" "}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="text-primary p-4 py-2 text-center bg-black rounded-[10px]"
        >
          Next
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {Math.ceil(filteredData.length / pageSize)}
          </strong>{" "}
        </span>
      </div>
    </div>
  );
};
