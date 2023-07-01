import React from 'react'
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

const Table = ({ columns = [], rows = [], height, ...others }) => {
  return (
    <div style={{ height: height }}>
      <DataGrid
        columns={columns}
        rows={rows}
        className='rdg-light'
        style={{ height: '100%' }}
        {...others}
      />;
    </div>
  );
}

export default Table