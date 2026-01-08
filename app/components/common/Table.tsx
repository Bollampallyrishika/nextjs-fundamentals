type TableProps = {
  headers: string[];
  rows: any[];
};

/*
  Table
  - Generic table
  - Props-driven rows & headers
*/
export default function Table({ headers, rows }: TableProps) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} className="border px-2 py-1 text-left">
              {h}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((cell, j) => (
              <td key={j} className="border px-2 py-1">
                {cell as string}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
