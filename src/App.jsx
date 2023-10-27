import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './component/MovieCard'
import MovieDescription from './component/MovieCard'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
  const [movies, setmovie] = useState([
    {
      title: "Batman",
     // url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.latimes.com%2Fentertainment-arts%2Fmovies%2Fstory%2F2022-02-28%2Fthe-batman-review-robert-pattinson-zoe-kravitz-colin-farrell&psig=AOvVaw19l4fqgJZnGHc6-ea7Fzbv&ust=1698416357375000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi_mJH0k4IDFQAAAAAdAAAAABAE",
      year: "2020",
      rating: "7.5",
      trailer: "https://www.youtube.com/embed/K6WXTjGOfbk?si=iWm2NhdePsc4cFNK" ,
    },
    {
      title: "zootopia",
     // url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2948356%2F&psig=AOvVaw1ll1CVMi83moio4ggkP-RO&ust=1698416894347000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDpyJP2k4IDFQAAAAAdAAAAABAE",
      year: "2018",
      rating: "8.5",
      trailer: "https://www.youtube.com/embed/LnSYihRoGA4?si=A9C1YXMyVRr8vNCt",
    },
    {
      title: "Barbie",
     // url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwwd.com%2Ffashion-news%2Ffashion-scoops%2Fbarbie-doll-industry-barbiecore-fashion-euromonitor-1235744029%2F&psig=AOvVaw3VaNC4qMwIfGRDqyodn34H&ust=1698417364632000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJi3q_D3k4IDFQAAAAAdAAAAABAE",
      year: "2015",
      rating: "7.8",
      trailer: "https://www.youtube.com/embed/dSi8FHposyM?si=1wZIPek84n0w0Td5",
    },
    {
      title: "mardagascar",
      //url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.empireonline.com%2Fmovies%2Freviews%2Fmadagascar-review%2F&psig=AOvVaw0BmbmrfDKHdBSA5Wclfz7M&ust=1698417662577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDWtP74k4IDFQAAAAAdAAAAABAE",
      year: "2000",
      rating: "8.9",
      trailer: "https://www.youtube.com/embed/jFWnVdsSgxs?si=kmw6BRnO8zZyDe2e",
    },
    {
      title: "Sing",
     // url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnn.com%2F2021%2F12%2F22%2Fentertainment%2Fsing-2-review%2Findex.html&psig=AOvVaw2IwYnnN4wRBJuL7b8fP8mz&ust=1698417942696000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDw14P6k4IDFQAAAAAdAAAAABAJ",
      year: "2022",
      rating: "6.7",
      trailer: "https://www.youtube.com/embed/pHZneOidj9A?si=WlRGx6UNfA9cyNn5",
    },
    {
      title: "naruto",
     // url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thepopverse.com%2Fnaruto-anime-movies-episodes-watch-order-shippuden-boruto&psig=AOvVaw2gusojr1ZRETsrQfwf7sVf&ust=1698418334240000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiG3777k4IDFQAAAAAdAAAAABAE",
      year: "2017",
      rating: "5.5",
      trailer: "https://www.youtube.com/embed/Xo_nioC5cQ4?si=5D2DuXrmhbNUNz9p",
    },
    {
      title: "nut job",
     // url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.heyuguys.com%2Fthe-nut-job-2-trailer%2F&psig=AOvVaw3dyxRzt0W07x7xzCTyILIt&ust=1698418522841000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDDl5n8k4IDFQAAAAAdAAAAABAE",
      year: "2016",
      rating: "7.3",
      trailer: "https://www.youtube.com/embed/7TcmbwRAaQc?si=KCbzvAq8qTuj3K8v",
    },
    {
      title: "little marmaid",
      //url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.disneyplus.com%2Fmovies%2Fthe-little-mermaid%2F5V7zkeKCcrWo&psig=AOvVaw1zgMTOTOD78i7CWlN7yHZ5&ust=1698418801484000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDh1p39k4IDFQAAAAAdAAAAABAE",
      year:"2015",
      rating: "7.4",
      trailer: "https://www.youtube.com/embed/Wbv_huklr5E?si=5emyHi1V2_nvWfjp",
    }
  ])
}


const [searchText, setSearchText] = useState("")


     const filteredMovies = movies?.filter(
      (movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      )
     );

     const handleHome = () => {
        setSearchText("")
     }
      
  return (
    <div>
    
    <Router path="/movie/:title">
          <MovieDescription
            title={filteredMovies.title}
            description={filteredMovies.description}
            rating={filteredMovies.rating}
            trailerURL={filteredMovies.trailerURL}
          />
        </Router>
      

        <Router path="/">
    <div>
      <button onClick={handleHome}>Back To Home</button>
    </div>
    <div className="form">
       <form>
         <input type="text" placeholder="Search" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
          </form>
     </div>  
     <div className="first">
       {filteredMovies.map(({id,title,description,rating,trailerURl}) =>{
         return(
           <MovieCard 
           key={id}
           title={title}
           description={description}
          //  posterURL={posterUrl}
           rating={rating}
           trailerURL={trailerURl}

           ></MovieCard>
         )
       })}
     
     </div>
    </Router>
    
    </div>
  )


export default App
