const pink_gradiant = 'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]'
const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]'
const blue_gradiant = 'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]'
const black_gradiant = 'bg-gradient-to-t from-transparent via-black-800 to-transparent filter blur-[123px]'
const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900'
const text_gradient = ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text'


const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

interface moviesdbprops {
    movie: {
        title: string,
        director: string,
        year: number,
        genre: string[],
        rating: number,
        stars: string[],
        runtime: number,
        overview: string,
        release_date: string,
        trailer: string,
        images: string[],
    }
}

const HeroSection = ({ movie }: moviesdbprops) => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className={`flex flex-row items-center py-[6px] px-4 ${bg_discount_gradient} rounded-[10px] mb-2`}>
                    <img src={'https://i.imgur.com/5BZrGDw.png'} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">20%</span> Discount For{" "}
                        <span className="text-white">1 Month</span> Account
                    </p>
                </div>

                <div className="flex flex-row justify-between items-right w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        {movie.title}<br />
                        {/* <span className={`${text_gradient}`}>{movie}</span> */}
                    </h1>
                </div>



                <h3 className="font-poppins font-semibold ss:text-[30px] text-[10px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    {/* Add Something like movies runtime R-Rated etc */}
                    Comming Soon
                </h3>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    {movie.overview}
                </p>
                <div className={`ss:flex hidden md:mr-4 mr-0 mt-5`}>
                    <button className="btn btn-primary ss:flex hidden md:mr-10 mr-0">Get Started</button>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                        <linearGradient id="4kXag7aWDZG56P3e36kb0a_43987_gr1" x1="48" x2="48" y1="29.833" y2="35.539" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#4kXag7aWDZG56P3e36kb0a_43987_gr1)" d="M53.91,30c-0.47,2.84-2.94,5-5.91,5c-2.97,0-5.44-2.16-5.91-5H53.91z"></path><linearGradient id="4kXag7aWDZG56P3e36kb0b_43987_gr2" x1="21" x2="21" y1="22.833" y2="37.504" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#4kXag7aWDZG56P3e36kb0b_43987_gr2)" d="M28,23v10c-2.21,0-4,1.79-4,4H14C14,29.27,20.27,23,28,23z"></path><linearGradient id="4kXag7aWDZG56P3e36kb0c_43987_gr3" x1="32" x2="32" y1="2" y2="61.397" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#4kXag7aWDZG56P3e36kb0c_43987_gr3)" d="M58,29c1.103,0,2-0.897,2-2v-2c0-1.103-0.897-2-2-2H47.483C42.972,16.732,35.734,13,28,13 C14.767,13,4,23.767,4,37s10.767,24,24,24c6.837,0,13.322-2.914,17.878-8H58c1.103,0,2-0.897,2-2v-2c0-1.103-0.897-2-2-2 c0-3.962-2.321-7.382-5.67-9C55.679,36.382,58,32.962,58,29z M58,27H38v-2h20V27z M36,49v2c0,0.686,0.348,1.293,0.876,1.653 C34.185,54.188,31.163,55,28,55c-9.587,0-17.426-7.541-17.949-17h13.05c0.465,2.279,2.484,4,4.899,4c2.757,0,5-2.243,5-5 c0-2.414-1.721-4.434-4-4.899V19.05c3.806,0.206,7.359,1.574,10.287,3.95H38c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2 c0,3.962,2.322,7.382,5.67,9C40.322,39.618,38,43.038,38,47C36.897,47,36,47.897,36,49z M28,34c1.654,0,3,1.346,3,3s-1.346,3-3,3 s-3-1.346-3-3S26.346,34,28,34z M27,32.101C25.044,32.5,23.5,34.044,23.101,36h-13.05C10.556,26.874,17.874,19.556,27,19.051V32.101 z M28,59C15.869,59,6,49.131,6,37s9.869-22,22-22c6.594,0,12.795,2.963,16.958,8h-2.701C38.512,19.19,33.35,17,28,17 C16.972,17,8,25.972,8,37s8.972,20,20,20c4.372,0,8.504-1.389,11.983-4h3.113C39.03,56.836,33.645,59,28,59z M58,51H38v-2h20V51z M56,47H40c0-4.072,3.06-7.436,7-7.931V41h2v-1.931C52.94,39.564,56,42.928,56,47z M49,36.931V35h-2v1.931 c-3.94-0.495-7-3.859-7-7.931h16C56,33.072,52.94,36.436,49,36.931z"></path><linearGradient id="4kXag7aWDZG56P3e36kb0d_43987_gr4" x1="45" x2="45" y1="2" y2="61.397" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#4kXag7aWDZG56P3e36kb0d_43987_gr4)" d="M49.949 17.536L41.465 9.05 40.051 10.464 48.535 18.95z"></path><linearGradient id="4kXag7aWDZG56P3e36kb0e_43987_gr5" x1="11" x2="11" y1="2" y2="61.397" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#4kXag7aWDZG56P3e36kb0e_43987_gr5)" d="M15.949 10.464L14.535 9.05 6.051 17.536 7.465 18.95z"></path><linearGradient id="4kXag7aWDZG56P3e36kb0f_43987_gr6" x1="28" x2="28" y1="2" y2="61.397" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#4kXag7aWDZG56P3e36kb0f_43987_gr6)" d="M28,11c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S25.794,11,28,11z M28,5 c1.103,0,2,0.897,2,2s-0.897,2-2,2s-2-0.897-2-2S26.897,5,28,5z"></path>
                    </svg>
                    {movie.runtime}h
                </div>

            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <video
                    autoPlay
                    loop
                    muted
                    className="w-[100%] h-[100%] relative z-0 pr-5 opacity-60"
                >
                    <source src="https://avodmp4s3ww-a.akamaihd.net/ww_iad/b703/ee9d/dd0b/427a-8e55-92f19445b1d9/ed40b853-09eb-4536-94ea-ebf16a3885cf_video_720p_2500kbps_audio_aaclc_128kbps.mp4" type="video/mp4" />
                </video>
                {/* gradient start */}
                <div className={`absolute z-[0] w-[40%] h-[35%] top-0 ${pink_gradiant} `} />
                <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${black_gradiant} bottom-40`} />
                <div className={`absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 ${blue_gradiant}`} />
                {/* gradient end */}
            </div>
        </section>
    )
}

export default HeroSection