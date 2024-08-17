import React, { useMemo } from "react";
import { useTable, Column } from "react-table";

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  onEdit: (row: T) => void;
  onDelete: (row: T) => void;
}

function DynamicTable<T extends object>({
  columns,
  data,
  onEdit,
  onDelete,
}: TableProps<T>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
            <th>Actions</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.length > 0 ? (
          rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                <td>
                  <button
                    onClick={() => onEdit(row.original)}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(row.original)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={columns.length} style={{ textAlign: "center" }}>
              No records found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default DynamicTable;
