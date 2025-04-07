import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// DataTableProps: 테이블 컴포넌트가 받을 props의 타입 정의
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]; // 테이블의 열 정의
  data: TData[]; // 테이블에 표시할 데이터
  onRowClick?: (row: TData) => void; // 행 클릭 시 호출되는 콜백 함수 (선택적)
}

const DataTable = <TData, TValue>({
  columns,
  data,
  onRowClick,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data, // 테이블에 표시할 데이터
    columns, // 테이블의 열 정의
    getCoreRowModel: getCoreRowModel(), // 기본 행 모델을 가져오는 함수
  });

  //
  return (
    <div className="rounded-md border">
      {/* 테이블 컴포넌트 */}
      <Table>
        {/* 테이블 헤더 */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {/* 열 헤더 렌더링 */}
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header, // 열의 헤더 정의
                          header.getContext() // 헤더 컨텍스트
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        {/* 테이블 바디 */}
        <TableBody>
          {/* 데이터가 있는 경우 */}
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id} // 각 행의 고유 ID
                data-state={row.getIsSelected() && "selected"} // 선택된 행 상태
                onClick={() => onRowClick?.(row.original)} // 행 클릭 시 콜백 호출
                className={onRowClick ? "cursor-pointer hover:bg-gray-100" : ""}
              >
                {/* 각 셀 렌더링 */}
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell, // 셀의 내용 정의
                      cell.getContext() // 셀 컨텍스트
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            // 데이터가 없는 경우
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results. {/* 데이터가 없을 때 표시할 메시지 */}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
