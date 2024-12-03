import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel
} from '@tanstack/react-table';
import { Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Feature } from '../../types/admin';

interface FeatureTableProps {
  features: Feature[];
  onEdit: (index: number) => void;
  onRemove: (index: number) => void;
}

export default function FeatureTable({ features, onEdit, onRemove }: FeatureTableProps) {
  const columnHelper = createColumnHelper<Feature>();
  
  const columns = [
    columnHelper.display({
      id: 'sequence',
      header: '序号',
      cell: props => (
        <div className="text-primary-500 font-medium w-8 text-center">
          {props.row.index + 1}
        </div>
      ),
    }),
    columnHelper.accessor('title', {
      header: '标题',
      cell: info => (
        <div className="max-w-[200px] truncate">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor('description', {
      header: '描述',
      cell: info => (
        <div className="max-w-[300px] truncate">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor('url', {
      header: '链接',
      cell: info => (
        <div className="max-w-[200px] truncate">
          <a 
            href={info.getValue()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800"
          >
            {info.getValue()}
          </a>
        </div>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: '操作',
      cell: props => (
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(props.row.index)}
            className="text-primary-600 hover:text-primary-800 p-1"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={() => onRemove(props.row.index)}
            className="text-red-600 hover:text-red-800 p-1"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: features,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-primary-50">
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="text-left p-3 text-sm font-medium text-primary-900 border-b border-primary-200"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              className="border-b border-primary-100 hover:bg-primary-50"
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-3 text-sm text-primary-800">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="text-primary-600">
          共 {features.length} 条记录
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-1 text-primary-600 hover:text-primary-800 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-primary-600">
            第 {table.getState().pagination.pageIndex + 1} 页，
            共 {table.getPageCount()} 页
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-1 text-primary-600 hover:text-primary-800 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}