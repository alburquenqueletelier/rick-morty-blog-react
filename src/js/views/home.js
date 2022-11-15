import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/characterCard";
import { API_URL } from "../../config";
import Loading from "../component/loading";
import { Modal } from "../component/modalCharacter";
import { ModalList } from "../component/modalList";


export const Home = () => {

	const { store, actions } = useContext(Context);
	const { getInfo } = actions;
	const { characters } = store;
	const [showCharacter, setShowCharacter] = useState(null);

	return (
		<div className="container">
			<Modal
				data={showCharacter}
			/>
			<ModalList data={showCharacter?.episode} />
			<div className="row">
				<div className="col-md-12 d-flex justify-content-around py-3">
					<button className="btn btn-primary" onClick={() => {
						if (characters.info.prev !== null) {
							getInfo(characters.info.prev);
						} else {
							getInfo(API_URL + "/characters" + "?page=" + characters.info.pages);
						}
					}} >
						Prev
					</button>
					<div>
						<p>
							Page: {!!characters?.info?.prev
								? parseInt(characters?.info.prev.slice(-1)) + 1
								: 1
							}
							<span> de {characters?.info?.pages}</span>
						</p>
					</div>

					<button className="btn btn-primary" onClick={() => {
						if (characters.info.next !== null) {
							getInfo(characters.info.next);
						} else {
							getInfo(API_URL + "/character");
						}
					}}>
						Next
					</button>
				</div>
			</div>
			<div className="row">
				{
					(!!characters && store.search == "") ?
						characters.results?.length > 0 &&
						characters.results.map((char) => {
							return (
								<div className="col-md-6 col-sm-6 col-12" key={char.id} onClick={() => setShowCharacter(char)}>
									<CharacterCard {...char} />
								</div>
							)
						}) : !!store.search ?
							characters.results.filter(char => char.name == store.search).map((char) => {
								return (
									<div className="col-md-6 col-sm-6 col-12" key={char.id} onClick={() => setShowCharacter(char)}>
										<CharacterCard {...char} />
									</div>
								)
							})
							: (
								<div className="col-md-12 text-center">
									<Loading />
								</div>
							)

				}
			</div>
		</div>
	)


};
