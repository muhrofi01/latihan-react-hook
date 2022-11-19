import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const User = (props) => {
    const [data, setData] = useState(null);

    const getUsers = async() => {
        try {
            await fetch("https://jsonplaceholder.typicode.com" + props.urlEnd)
                    .then((res) => res.json())
                    .then((data) => setData(data));
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        getUsers();
    }, []);
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Company Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data && data.map((item) => (
                    <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item.name}
                        </TableCell>
                        <TableCell>{item.username}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.address.street}</TableCell>
                        <TableCell>{item.company.name}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default User;