import React from "react";
import Table from "react-bootstrap/Table";

const FavoriteWords = ({ favoriteWords }) => {
	return (
		<>
			<Table striped bordered className="mt-2">
				<thead>
					<tr>
						<th>#</th>
						<th>Word</th>
						<th>Date Added</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Hello</td>
						<td>25/6/1235</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
};

export default FavoriteWords;
