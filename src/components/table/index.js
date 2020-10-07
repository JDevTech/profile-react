import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"


const ResponsiveContainer = styled.div`
  ${props => props.responsive && css`
      overflow-x: auto;
    `
  }
`

const TableContainer = styled.table`
  width: 100%;
`

const THead = styled.thead`

`

const TBody = styled.tbody`

`

const TitleHead = styled.th`
  color: white;
  padding: 10px;
  background: #61D6F8;
`

const TRow = styled.tr`

`

const TColumn = styled.td`
  text-align: right;
`

const Table = ({ data, columns, responsive }) => {
  return(
    <ResponsiveContainer responsive={responsive}>
      {(data.length > 0 && columns.length > 0) ? (
        <TableContainer>
          <THead>
            <TRow>
              {columns.map((column, key) => {
                return (<TitleHead key={key}>{column.title}</TitleHead>)
              })}
            </TRow>
          </THead>
          <TBody>
            {data.map((dat, keyData) => {
                return (
                  <TRow key={keyData}>
                    {columns.map((column, keyColumn) => {
                      return (<TColumn key={keyColumn}>{dat[column.field]}</TColumn>)
                    })}
                  </TRow>
                )
              })}
          </TBody>
        </TableContainer>
      ) : null}
    </ResponsiveContainer>
  )
}

Table.propTypes = {
  responsive: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired
}

Table.defaultProps = {
  data: [],
  columns: [],
  responsive: false
}

export default Table;
