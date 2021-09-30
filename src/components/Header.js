import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import classes from './Header.module.css';
function Header() {
	return (
		<div className={classes.header}>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item lg={8} sm={8} container alignItems="center">
					<Grid item lg={2}>
						<Typography variant="h5" style={{ fontWeight: 'bold' }}>
							Logo
						</Typography>
					</Grid>
					<Grid item lg={8}>
						<Box display="flex">
							<Typography variant="subtitle1" className={classes.text}>
								Menu
							</Typography>
							<Typography variant="subtitle1" className={classes.text}>
								Menu
							</Typography>
							<Typography variant="subtitle1" className={classes.text}>
								Menu
							</Typography>
							<Typography variant="subtitle1" className={classes.text}>
								Menu
							</Typography>
						</Box>
					</Grid>
				</Grid>
				<Grid item>
					<Box display="flex" justifyContent="center" alignItems="center">
						<Typography variant="body1">Login</Typography>
						<Button
							variant="contained"
							color="primary"
							style={{ marginLeft: '1rem', position: 'relative' }}
						>
							Register
						</Button>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}

export default Header;
