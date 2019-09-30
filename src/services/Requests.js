class Requests {

    constructor(){
        this.API = `https://api.github.com/users`
    }

    async getProfile(profileName){
        const query = profileName;
        return new Promise((resolve, reject) => {
            fetch(`${this.API}/${query}`)
                .then(response => response.json()
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                }));
        });
    }

    async getRepos(profileName){
        const query = profileName;
        return new Promise((resolve, reject) => {
            fetch(`${this.API}/${query}/repos`)
                .then(response => response.json()
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                }))
        })
    }

    async getStars(profileName){
        const query = profileName;
        return new Promise((resolve, reject) => {
            fetch(`${this.API}/${query}/starred`)
                .then(response => response.json()
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                }))
        })
    }
}

export default Requests;