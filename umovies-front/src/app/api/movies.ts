export async function getTrendMovies() {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzUwMmE4ZDdlYWI4NWM2ZWY4NGZmZDM2MzdlZDYyZiIsInN1YiI6IjY2MDRkZWRlOTU2NjU4MDE2MTdkZWE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yO95rRycns4wz-jHxYpQE_7BIctTDKT9uaHevc1br8o'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error('error:' + err);
      }
}