const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			episodes: [],
			favs:[],
		},
		actions: {
			getInfo: (url, options = {method: 'GET', headers: {'Content-Type': 'application/json',}})=>{
				fetch(url, options)
				.then(resp=>resp.json())
				.then(data=>{
					let type = url.split('/')[length(url.split('/')-1)];
					if (type == 'character') {
						setStore({characters: data})
						localStorage.setItem('characters', JSON.stringify(data));
					};
					if (type == 'episodes') {
						setStore({episodes: data})
						localStorage.setItem('episodes', JSON.stringify(data));
					};
				})
			},
			loadInfo: (type)=>{
				const data = JSON.parse(localStorage.getItem(type));
				if (type == 'characters') setStore({characters: data});
				if (type == 'episodes') setStore({episodes:data});
			},
		}
	};
};

export default getState;
