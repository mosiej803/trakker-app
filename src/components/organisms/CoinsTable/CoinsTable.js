import React, { useEffect } from 'react';
import TableRow from 'components/molecules/TableRow/TableRow';
import {
  Table,
  TableWrapper,
  TableContainer,
  StickyTable,
  SideShadow,
} from './CoinsTable.styles';
import useStickyTableHead from 'hooks/useStickyTableHead';
import TableHead from 'components/molecules/TableHead/TableHead';
import Spinner from 'components/atoms/Spinner/Spinner';

const CoinsTable = ({ data, handleSetTableRef }) => {
  const { tableRef, tableContainerRef, isSticky, leftPosition } =
    useStickyTableHead();

  useEffect(() => {
    handleSetTableRef(tableRef);
  }, []);

  return (
    <TableWrapper>
      {!data && <Spinner />}
      <TableContainer ref={tableContainerRef}>
        {data && <SideShadow />}
        <Table ref={tableRef}>
          {data && (
            <>
              <TableHead />
              <tbody>
                {data.map((crypto) => (
                  <TableRow key={crypto.name + crypto.symbol} data={crypto} />
                ))}
              </tbody>
              <caption>Live Crypto Prices</caption>
            </>
          )}
        </Table>
        {isSticky && (
          <StickyTable leftPosition={leftPosition}>
            <TableHead />
          </StickyTable>
        )}
      </TableContainer>
    </TableWrapper>
  );
};

export default CoinsTable;
