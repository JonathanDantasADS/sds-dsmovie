import MovieCard from "components/MovieCard";
// import MovieScore from "components/MovieScore";
// import MovieStars from "components/Navbar/MovieStars";
import Pagination from "components/Navbar/Pagination";

function Listing() {
    return (
        <>
            <Pagination />

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                    </div>
            </div>
         </>
    );
}

export default Listing;