import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/characterCard";
import { API_URL } from "../../config";
import Loading from "../component/loading";
import { EpisodeCard } from "../component/episodeCard";
import { ModalList } from "../component/modalList";


export const Episode = () => {

	const { store, actions } = useContext(Context);
	const {getInfo} = actions;
	const {episodes} = store;

	return (
		<div className="container">
			<ModalList data={store?.listModal}/>
			<div className="row">
				<div className="col-md-12 d-flex justify-content-around py-3">
					<button className="btn btn-primary" onClick={() => {
						if (episodes.info.prev !== null) {
							getInfo(episodes.info.prev);
						} else {
							getInfo(API_URL+"/episode" + "?page=" + episodes.info.pages);
						}
					}} >
						Prev
					</button>
					<div>
						<p>
							Page: {!!episodes?.info?.prev
								? parseInt(episodes?.info.prev.slice(-1))+1
								: 1
							}
							<span> de {episodes?.info?.pages}</span>
						</p>
					</div>

					<button className="btn btn-primary" onClick={() => {
						if (episodes.info.next !== null) {
							getInfo(episodes.info.next);
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
					(!!episodes && store.search == "") ?
						episodes.results?.length > 0 &&
						episodes.results.map((item) => {
							return (
								<div className="col-md-6 col-sm-6 col-12" key={item.id}>
									<EpisodeCard {...item} />
								</div>
							)
						}) : !!store.search ?
							episodes.results.filter(item => item.name == store.search).map((item) => {
								return (
									<div className="col-md-6 col-sm-6 col-12" key={item.id}>
										<EpisodeCard {...item} />
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
