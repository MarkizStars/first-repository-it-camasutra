import draft from './FirstPost.module.css';

const FirstPost= (props)=>{
  

    return (
      <div>
        <div ><img className={draft.ImgContent} src="https://i.baraholka.com.ru/files/3/2/3215263.jpg" alt="грустно" />
       {props.message} </div>
        <div>
        <span>like</span>
      </div>
        
   </div>
   
    );
}
export default FirstPost;
