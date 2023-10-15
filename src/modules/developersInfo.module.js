import { Module } from '../core/module'

export class DevelopersInfoModule extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {

		const mainDiv = document.querySelector('.developersInfo');
		mainDiv.classList.remove('hiden');

		const token = '';
		const usernames = [
			'PileroiD',
			'DenisKardash',
			'boririna',
			'doograssen'
		];

		const ourNames = [];
		const photos = [];
		const links = [];

		const fetchPromises = usernames.map(item => {
			return fetch(`https://api.github.com/users/${item}`, {
				method: 'GET',
				headers: {
					Authorization: `token ${token}`,
				},
			})
				.then(response => response.json())
				.then(data => {
					const profileImageURL = data.avatar_url;
					const userName = data.name;
					const htmlUrl = data.html_url;
					ourNames.push(userName);
					photos.push(profileImageURL);
					links.push(htmlUrl);
				})
				.catch(error => {
					console.error('Произошла ошибка при запросе к GitHub API:', error);
				});
		});

		Promise.all(fetchPromises)
			.then(() => {
				for (let i = 0; i < 4; i++) {
					const developerItem = document.createElement('div');
					developerItem.className = 'developer-item';
					developerItem.innerHTML = `
                        <img src=${photos[i]} alt="photo" class="developer-img">
                        <a href="${links[i]}" class="developer-name">${ourNames[i]}</a>
                    `;

					mainDiv.append(developerItem);
				}
			});

		document.querySelector('.close-button').addEventListener('click', () => {
			mainDiv.classList.add('hiden');
			mainDiv.innerHTML = '<div class="close-button">&times;</div>';
		});
	}
}