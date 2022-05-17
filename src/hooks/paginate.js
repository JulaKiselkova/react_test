import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { useState, useCallback, memo, useEffect } from "react";
//import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationControlled = ({perPage, total, paginate}) => {
    const pageNums = [];
    for(let i=0; i <= Math.ceil(total/perPage); i++) {
        pageNums.push(i);
    }

    return(<div>
        <ul>
            {pageNums.map((number)=>{})}
        </ul>
    </div>)

}