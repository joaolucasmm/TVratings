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
    const [shows, setShows] = useState(null);

    useEffect(() => {
        const fetchShows = async () => {
            const { data, error } = await supabase.from("shows").select("*");

            console.log("Dados retornados:", data);
            console.log("Erro retornado:", error);

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

    function createData(name, duration, gender, rate, release) {
        return { name, duration, gender, rate, release };
    }

    const rows = shows
        ? shows.map((show) =>
              createData(show.name, show.duration, show.gender, show.rate, show.release)
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
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Rate</TableCell>
                            <TableCell align="right">Release</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.duration}
                                </TableCell>
                                <TableCell align="right">
                                    {row.gender}
                                </TableCell>
                                <TableCell align="right">{row.rate}</TableCell>
                                <TableCell align="right">
                                    {row.release}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
