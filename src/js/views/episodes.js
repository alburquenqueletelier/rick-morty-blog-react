import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/characterCard";
import { API_URL } from "../../config";
import Loading from "../component/loading";


export const Episode = () => {

	const { store, actions } = useContext(Context);
	const {getInfo} = actions;
	const {episode} = store;

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 d-flex justify-content-around py-3">
					<button className="btn btn-primary" onClick={() => {
						if (episode.info.prev !== null) {
							getInfo(episode.info.prev);
						} else {
							getInfo(API_URL+"/episode" + "?page=" + episode.info.pages);
						}
					}} >
						Prev
					</button>
					<div>
						<p>
							Page: {!!episode?.info?.prev
								? parseInt(episode?.info.prev.slice(-1))+1
								: 1
							}
							<span> de {episode?.info?.pages}</span>
						</p>
					</div>

					<button className="btn btn-primary" onClick={() => {
						if (episode.info.next !== null) {
							getInfo(episode.info.next);
						} else {
							getInfo(API_URL + "/episode");
						}
					}}>
						Next
					</button>
				</div>
			</div>
			<div className="row">
				{
					!!episode &&
						episode.results?.length > 0 ?
						episode.results.map((char) => {
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
