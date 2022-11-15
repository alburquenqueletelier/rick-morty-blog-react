import React, { useContext } from "react";
import { Context } from "../store/appContext";7
import { API_URL } from "../../config";

export const Pagination = (props) => {
    const {actions} = useContext(Context);
    const {getInfo} = actions

    if (props?.data?.info?.next?.includes('character') || props?.data?.info?.prev?.includes('character')) var type = 'character';
    else var type = 'episode';

    return (
        <div className="row">
				<div className="col-md-12 d-flex justify-content-center py-3">
					<button className="btn btn-primary" onClick={() => {
						if (props?.data?.info?.prev !== null) {
							getInfo(props?.data?.info?.prev);
						} else {
							getInfo(API_URL + "/"+ type + "?page=" + props?.data?.info?.pages);
						}
                        actions.setSearch("");
					}} >
						Prev
					</button>
					<div className="d-flex pt-2gi mx-2 align-middle">
						<p>
							Page: {!!props.data?.info?.prev
								? parseInt(props?.data?.info?.prev?.split("=").slice(-1)) + 1
								: 1
							}
							<span> de {props?.data?.info?.pages}</span>
						</p>
					</div>

					<button className="btn btn-primary" onClick={() => {
						if (props?.data?.info?.next !== null) {
							getInfo(props?.data?.info?.next);
						} else {
							getInfo(API_URL + "/" + type);
						}
                        actions.setSearch("");
					}}>
						Next
					</button>
				</div>
			</div>
    )
}