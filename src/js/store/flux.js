const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			episode: [],
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
						localStorage.setItem('character', JSON.stringify(data));
					};
					if (type.includes('episode')) {
						setStore({episode: data})
						localStorage.setItem('episode', JSON.stringify(data));
					};
				})
			},
			loadInfo: (type)=>{
				const data = JSON.parse(localStorage.getItem(type));
				if (type == 'character') setStore({character: data});
				if (type == 'episode') setStore({episode:data});
			},
		}
	};
};

export default getState;
