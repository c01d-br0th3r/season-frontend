import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
  data: any[];
}

const TableView: React.FC<IProps> = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <td>name</td>
        <td>time</td>
        <td>score</td>
      </thead>
      {data.map((d) => (
        <tr>
          <td>{d.name}</td>
          <td>{`${d.submitTime.toLocaleString("ko-KR")}`}</td>
          <td>{d.score}</td>
        </tr>
      ))}
    </Table>
  );
};

export default TableView;
