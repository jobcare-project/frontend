import React, { Component, useState } from 'react';
// import ReactDOM from "react-dom";
import Pagination from 'react-js-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const PaginationStyled = styled.div`
    ul.pagination {
        display: flex;
        justify-content: center;
        li {
            text-align: center;
            border-radius: 10px;
            width: 30px;
            height: 30px;
            a {
                color: #000;
                text-decoration: none;
            }
            :nth-child(2) {
                display: none;
            }
            :nth-last-child(2) {
                display: none;
            }
            /* :last-child {
            display: none;
        } */
        }
        .active {
            background-color: #000;
            a {
                color: #fff;
            }
        }
    }
`;
const PaginationCOM = ({ items, setjobsItem }) => {
    const [startPage, setStartPage] = useState(0);
    const [endPage, setEndPage] = useState(5);
    const [activePage, setActivePage] = useState(1);
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        console.log('items', items);
        let start = endPage;
        let end = pageNumber * 5;
        setStartPage(start);
        setEndPage(end);
        const jobs = items.slice(start, end);
        console.log(jobs);
        setjobsItem(jobs);
    };

    return (
        <PaginationStyled>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={5}
                totalItemsCount={items.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        </PaginationStyled>
    );
};

export default PaginationCOM;
