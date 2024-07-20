import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { Maximize } from "@mui/icons-material";

const PaginatedTable = ({ columns }) => {
  const rowsPerPage = 25;
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const handleNextPage = () => {
    if (page < Math.ceil(data.length / rowsPerPage) - 1) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const filteredData = data.filter((row) =>
    columns.some((column) =>
      row[column.id].toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/visitors-list"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "30px", padding: "10px" }}>
      <br />
      <h2>What's New</h2>
      <hr />
      <p>
        Welcome to Visitex 2.0, your new and enhanced personal visitor
        management system. equipped with more complex features to make your work
        organised.
      </p>
      <br />
      <h2>Visitor's List</h2>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginBottom: "15px",
        }}
      >
        <p
          style={{
            marginBottom: "0px",
          }}
        >
          Search:{" "}
        </p>
        <input
          type="text"
          className="form-control-plaintext"
          style={{
            background: "white",
            padding: "5px",
            color: "black",
            width: "25%",
          }}
          color="black"
          value={searchQuery || ""}
          placeholder="Type in to Search"
          onChange={handleSearch}
        />
      </div>
      <TableContainer>
        <Table className="table table-hover">
          <TableHead>
            <TableRow>
              <TableCell>S. No</TableCell>
              <TableCell>Visitor Name</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Company Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-dark">
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} style={{ textAlign: "center" }}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
              filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{row[column.id]}</TableCell>
                    ))}
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <button
          onClick={handlePreviousPage}
          disabled={page === 0}
          className="btn btn-primary"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedTable;
