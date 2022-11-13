import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/characterCard";
import { API_URL } from "../../config";
import Loading from "../component/loading";


export const Episodes = () => {

	const { store, actions } = useContext(Context);
	const {getInfo} = actions;
	const {character} = store;

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-center">Rick and Morty</h1>
					{/* {show && <ComponentA />}
                        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}
				</div>

						{/* ///////////////////////7 */}


						{/* ///////////////////////7 */}



				<div className="col-md-12 d-flex justify-content-around py-3">
					<button className="btn btn-primary" onClick={() => {
						if (character.info.prev !== null) {
							getInfo(character.info.prev);
						} else {
							getInfo(API_URL+"/character" + "?page=" + character.info.pages);
						}
					}} >
						Prev
					</button>
					<div>
						<p>
							Page: {!!character?.info?.prev
								? parseInt(character?.info.prev.slice(-1))+1
								: 1
							}
							<span> de {character?.info?.pages}</span>
						</p>
					</div>

					<button className="btn btn-primary" onClick={() => {
						if (character.info.next !== null) {
							getInfo(character.info.next);
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
					!!character &&
						character.results?.length > 0 ?
						character.results.map((char) => {
							return (
								<div className="col-md-6 col-sm-6 col-12" key={char.id}>
									<CharacterCard {...char} />
								</div>
							)
						}) :
						(
							<div className="col-md-12 text-center">
								<Loading />
							</div>
						)
				}
			</div>
		</div>
	)


};
