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
    gotoPage,
    nextPage,
    // previousPage,
    canNextPage,
    // canPreviousPage,
    setGlobalFilter,
    pageCount,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 15 } },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  const pageinationItems = useMemo(() => {
    const items: any[] = [];
    for (let i = 0; i < pageCount; i++) {
      items.push(
        <button
          key={i}
          onClick={() => gotoPage(i)}
          style={{ fontWeight: pageIndex === i ? "bold" : "normal", margin: "2px", fontSize: '10px'}}
        >
          {i + 1}
        </button>
      );
    }
    return items;
  }, [gotoPage, pageIndex, pageCount]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };

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
          className="w-[1018px] h-[43px] rounded-[13px] border border-black-100 text-[15px] font-light focus:outline-none leading-[16.52px] pl-[43px]"
          placeholder="Search by name, interests, skills"
          onChange={handleSearchChange}
        />
      </div>
      <table {...getTableProps()} style={{ marginTop: "1rem" }}>
        <thead
          style={{
            textAlign: "left",
            fontSize: "10.83px",
          }}
        >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    ...(column.id == "address" && {
                      position: "absolute",
                      left: "565px",
                      top: "58px",
                    }),
                    ...(column.id == "birth" && {
                      position: "absolute",
                      left: "370px",
                      top: "58px",
                    }),
                    ...(column.id == "interests" && {
                      position: "absolute",
                      left: "800px",
                    }),
                    ...(column.id == "availability" && {
                      position: "absolute",
                      left: "1090px",
                      top: "58px",
                    }),
                    ...(column.id == "fullname" && {
                      position: "relative",
                      left: "25px",
                    }),
                    ...(column.id == "days" && {
                      display: "block",
                      width: "132px",
                      position: "absolute",
                      left: "940px",
                    }),
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} style={{ marginTop: "15px" }}>
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
      <div className="mt-[15px] flex justify-end">
        {/* <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button> */}
        {pageinationItems}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <img src={media.polygon} />
        </button>{" "}
        <button onClick={() => gotoPage(pageCount -1)} disabled={!canNextPage} className="flex items-center ml-1">
        <img src={media.polygon} /><img src={media.polygon} />
        </button>
      </div>
    </div>
  );
};
