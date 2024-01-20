const api_key: String = '9615af462cf43344acdc7dcf531e0ff1';
const url_base: String = 'https://api.themoviedb.org/3/';

export class ApiService {
    static async getPopularMovies(){
        try {
        const response = await fetch(`${url_base}movie/popular?language=en-US&page=1&api_key=${api_key}`);
        if(!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`)
         }
        
        const moviesData = response.json();
        return moviesData;
        } catch (error){
            console.error('Error in getPopularMovies', error);
            throw error;
        }
    }
}