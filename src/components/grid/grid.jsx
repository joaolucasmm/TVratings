import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import supabase from "../../config/supabaseClient";

export default function Grid() {
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      const { data, error } = await supabase.from("shows").select("*");

      if (error) {
        setFetchError("Could not fetch the data");
        setShows(null);
      }
      if (data) {
        setShows(data);
        setFetchError(null);
      }
    };
    fetchShows();
  }, []);

  function createData(title, duration, genre, rating, release) {
    return { title, duration, genre, rating, release };
  }

  const rows = shows
    ? shows.map((show) =>
        createData(
          show.title,
          show.duration,
          show.genre,
          show.rating,
          show.release
        )
      )
    : [];

  return (
    <>
      {fetchError && <div>{fetchError}</div>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Duration</TableCell>
              <TableCell align="right">Genre</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">Release</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">{row.genre}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">{row.release}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
