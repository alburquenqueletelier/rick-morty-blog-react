import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/characterCard";
import { API_URL } from "../../config";
import Loading from "../component/loading";
import { EpisodeCard } from "../component/episodeCard";
import { ModalList } from "../component/modalList";
import { Pagination } from "../component/pagination";


export const Episode = () => {

	const { store, actions } = useContext(Context);
	const { episodes } = store;

	return (
		<div className="container">
			<ModalList data={store?.listModal} />
			<Pagination data={store?.episodes} />
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
			<Pagination data={store?.episodes} />
		</div>
	)


};
