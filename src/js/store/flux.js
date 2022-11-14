const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			episodes: [],
			favs:[],
		},
		actions: {
			getInfo: (url, options = {method: 'GET', headers: {'Content-Type': 'application/json'}})=>{
				fetch(url, options)
				.then(resp=>resp.json())
				.then(data=>{
					let type = url.split('/')[url.split('/').length-1];
					if (type.includes('character')) {
						setStore({character: data})
						localStorage.setItem('characters', JSON.stringify(data));
					};
					if (type.includes('episode')) {
						setStore({episode: data})
						localStorage.setItem('episodes', JSON.stringify(data));
					};
				})
			},
			loadInfo: (type)=>{
				const data = JSON.parse(localStorage.getItem(type));
				if (type == 'characters') setStore({character: data});
				if (type == 'episodes') setStore({episode:data});
			},
		}
	};
};

export default getState;
