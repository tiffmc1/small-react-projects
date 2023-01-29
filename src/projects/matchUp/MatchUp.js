import { useState } from "react";
//import Timer from "./Timer";
import "./matchUp.css";

const MatchUp = () => {
	const [grid, setGrid] = useState(new Array(18).fill(0));
	const [revealedGrid, setRevealedGrid] = useState(
		new Array(grid.length).fill(false)
	);
	const [firstClick, setFirstClick] = useState({});
	const [disablePageClick, setDisablePageClick] = useState(false);
	const [disableCardClick, setDisableCardClick] = useState(
		new Array(grid.length).fill(true)
	);
	const [count, setCount] = useState(0);
	const [bestScore, setBestScore] = useState(16);

	const generateRandomPairs = () => {
		let startingGrid = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
		let newGrid = startingGrid.sort(() => Math.floor(Math.random() - 0.5));

		// RESETS GAME
		let resetRevealedGrid = revealedGrid.map(
			(revealedCard) => (revealedCard = false)
		);
		let resetDisableCardClick = disableCardClick.map(
			(disabledCard) => (disabledCard = false)
		);

		setGrid(newGrid);
		setDisableCardClick(resetDisableCardClick);
		setRevealedGrid(resetRevealedGrid);
		setCount(0);
		setFirstClick({});
	};

	const handleCardFlip = (index) => {
		const clickedNum = grid[index];
		const copiedRevealedGrid = [...revealedGrid];
		let copiedDisableCardClick = [...disableCardClick];

		copiedRevealedGrid[index] = true;
		copiedDisableCardClick[index] = true;

		setRevealedGrid(copiedRevealedGrid);
		setDisableCardClick(copiedDisableCardClick);
		setFirstClick({ num: clickedNum, idx: index });

		// CHECK FOR MATCH BETWEEN CARDS
		const handleSecondCardFlip = (i) => {
			setDisablePageClick(true);

			if (firstClick.num !== clickedNum) {
				setTimeout(() => {
					copiedRevealedGrid[i] = false;
					copiedRevealedGrid[firstClick.idx] = false;
					copiedDisableCardClick[i] = false;
					copiedDisableCardClick[firstClick.idx] = false;

					setRevealedGrid(copiedRevealedGrid);
					setDisableCardClick(copiedDisableCardClick);
					setDisablePageClick(false);
				}, 1000);
			} else {
				setTimeout(() => {
					copiedDisableCardClick[i] = true;

					setDisableCardClick(copiedDisableCardClick);
					setDisablePageClick(false);
				}, 1000);
			}
			setFirstClick({});
		};

		if (firstClick.num) {
			handleSecondCardFlip(index);
			setCount(count + 1);
		}

		// IF EVERY CARD HAS BEEN REVEALED
		let hasWon = copiedRevealedGrid.every((cardRevealed) => cardRevealed);

		if (hasWon && count < bestScore) {
			setBestScore(count);

			setTimeout(() => {
				alert("CONGRATS! YOU WON AND ARE THE TOP SCORER!");
			}, 1000);
		}

		if (hasWon) {
			setTimeout(() => {
				alert("Congrats! You won! However, try again to beat the top score.");
			}, 1000);
		}
	};

	return (
		<>
			<div className={disablePageClick ? "no-click" : ""}>
				<div className="header-container">
					<div className="header-title">Match Up!</div>
					<div className="header-desc">
						Below are pairs of matching cards ranging from 1 to 9. Your job is
						to correctly match all the pairs{/*before the time runs out*/}!
						Click the button below to begin
					</div>
					<button className="grid-btn" onClick={generateRandomPairs}>
						Generate Grid
					</button>
					<div>Pair Attempts: {count}</div>
					<div>Best Score: {bestScore}</div>
					{/* <Timer revealedGrid={revealedGrid} /> */}
				</div>
				<div className="grid-container">
					{grid.map((num, i) => (
						<div
							key={i}
							className={disableCardClick[i] ? "no-click cards" : "cards"}
							onClick={() => handleCardFlip(i)}
						>
							{revealedGrid[i] ? num : " "}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default MatchUp;
