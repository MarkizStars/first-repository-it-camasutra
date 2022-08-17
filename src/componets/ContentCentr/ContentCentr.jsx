import draft from './ContentCentr.module.css';
import MyPosts from './MyPosts/MyPosts';




const ContentCentr = ()=>{
    return (
      <div className={draft.content}>
      <div>
         <img className={draft.ImgContent} src='https://img1.akspic.ru/attachments/crops/5/2/9/1/21925/21925-liniya_gorizonta-gorizont-gorod-dnevnoe_vremya-metropoliya-1920x1080.jpg'></img>
      </div>
      <div>
         ava
      </div>
      <MyPosts/>
      
   </div>

    );
}
export default ContentCentr;
