import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/characterCard";
import Loading from "../component/loading";
import { Modal } from "../component/modalCharacter";
import { ModalList } from "../component/modalList";
import { Pagination } from "../component/pagination";


export const Home = () => {

	const { store } = useContext(Context);
	const { characters } = store;
	const [showCharacter, setShowCharacter] = useState(null);

	return (
		<div className="container">
			<Modal
				data={showCharacter}
			/>
			<ModalList data={showCharacter?.episode} />
			{!!characters && <Pagination data={characters}/>}
			
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
			{!!characters && <Pagination data={characters}/>}
		</div>
	)


};
