const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			episodes: [],
			favs:{
				characters:[],
				episodes:[],
			},
			search: "",
			listModal: [],
		},
		actions: {
			getInfo: (url, options = {method: 'GET', headers: {'Content-Type': 'application/json'}})=>{
				fetch(url, options)
				.then(resp=>resp.json())
				.then(data=>{
					let type = url.split('/')[url.split('/').length-1];
					if (type.includes('character')) {
						setStore({characters: data})
						localStorage.setItem('characters', JSON.stringify(data));
					};
					if (type.includes('episode')) {
						setStore({episodes: data})
						localStorage.setItem('episodes', JSON.stringify(data));
					};
				})
			},
			loadInfo: (type)=>{
				const data = JSON.parse(localStorage.getItem(type));
				if (type == 'characters') setStore({characters: data});
				if (type == 'episodes') setStore({episodes:data});
				if (type == 'favs') setStore({favs: data});
			},
			addOrRemove: (data, type)=>{
				const {favs} = getStore();
				if (type=="character" && !favs.characters.map(item=>item.id).includes(data.id)){
					favs.characters.push(data);
				} else if (type=="character") favs.characters=favs.characters.filter(item=>item.id != data.id);
				if (type=="episode" && !favs.episodes.map(item=>item.id).includes(data.id)){
					favs.episodes.push(data);
				} else if (type=="episode") favs.episodes = favs.episodes.filter(item=>item.id != data.id);
				setStore({favs: favs});
				localStorage.setItem('favs', JSON.stringify(favs));
			},
			setSearch: (value) =>{
				setStore({search: value});
			},
			setListModal: (data) =>{
				setStore({listModal: data})
			},
		}
	};
};

export default getState;
