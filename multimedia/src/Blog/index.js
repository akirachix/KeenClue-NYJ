import "./index.css"

const Blog = () =>{
    return (
        <div>
            <div>
            <h1 className='heading'>Blogs</h1>
            </div>
            
            <div className='book-intro'>
            <img src="/images/book.jpg" alt='born a crime' className='book'/>
            <p className='title'>Born A Crime By Trevor Noah</p>
            </div>
            <p className='blogs'>Get Blogs</p>

            <div className='links'>
                <div>
                <img src="/images/Trevor.jpg" alt='Trevor' className='trevor'/> 
                <a href='https://born-a-crime.vercel.app/'className='learn'>Learn more</a>
                </div>
               
               <div>
               <img src="/images/Trevor.jpg" alt='Trevor' className='trevor'/>   
               <p className='learn'>Learn more</p>
               </div>

               <div>
               <img src="/images/Trevor.jpg" alt='Trevor' className='trevor'/> 
               <p className='learn'>Learn more</p>
               </div>
              
            </div>
        </div>

    )
}

export default Blog;