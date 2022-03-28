import React from 'react';
import Filters from '../../components/Filters';
import OrderBy from '../../components/OrderBy';

import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';

export default function Home() {
  return (
    <>
      <SearchBar />
      <Filters />
      <OrderBy />
      <Table />
    </>
  );
}
