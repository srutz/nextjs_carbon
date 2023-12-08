/* eslint-disable react/jsx-key */
"use client"

import { ChangeEvent } from "react"
import classes from "./page.module.css";

/* table von

https://react.carbondesignsystem.com/?path=/story/components-datatable-toolbar--default

*/

import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch, TableToolbarMenu, Button } from "@carbon/react";

export default function Page() {

    const onInputChange = (e: ChangeEvent) => {
        console.log("onInputChange")
    }
    const action = (action: string) => {
        console.log("action "+ action)

    }

    const headers = [
        {
            header: 'Name',
            key: 'name',
        },
        {
            header: 'Age',
            key: 'age',
        },
        {
            header: 'Location',
            key: 'location',
        },
    ];

    // Prepare some sample data
    const id = 1
    const templateRow = { id: '_', name: 'John Doe', age: 30, location: 'New York' }
    const rows: typeof templateRow[] = []
    for (let i = 1; i <= 100; i++) {
        const row = {...templateRow}
        row.id = i.toString()
        row.name += i
        row.location += i
        rows.push(row)
    }


    return <div className={`sticky ${classes.datatablepage}`}>
    <DataTable
            rows={rows}
            headers={headers}
            render={({ rows, headers, getHeaderProps, getRowProps }) => (
                <TableContainer title="Sample Data Table">
                    <Table>
                        <TableHead>
                            <TableRow>
                                {headers.map(header => (
                                    <TableHeader {...getHeaderProps({ header }) as any}>
                                        {header.header}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ overflow: 'auto' }}>
                            {rows.map(row => (
                                <TableRow key={row.id} {...getRowProps({ row }) as any}>
                                    {row.cells.map(cell => (
                                        <TableCell key={cell.id}>{cell.value}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        />
      </div>;
}
