import React from "react";
import Table from "react-bootstrap/Table";

const FavoriteWords = ({ favoriteWords }) => {
	console.log(favoriteWords);
	favoriteWords.forEach((word, index) => {
		console.log(`index: ${index} word: ${word.word}, date: ${word.date}`);
	});
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
					{favoriteWords &&
						favoriteWords.map((word, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{word.word}</td>
								<td>{new Date(word.date).toDateString()}</td>
							</tr>
						))}
				</tbody>
			</Table>
		</>
	);
};

export default FavoriteWords;
