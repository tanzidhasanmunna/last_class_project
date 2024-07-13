import './Blog.css';

export default function Blog(props) {
    console.log(props)
    const {title,img, para }=props.blog;
  return (
    <div className='blog-card'>
        <img src={img} alt="" style={{width:'100%', height: '60%'}}/>
        <h1>{title}</h1>
        <p>{para}</p>
        <button>Read More</button>
    </div>

  )
}
