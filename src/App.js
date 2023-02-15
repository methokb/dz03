import './App.css';
import Header from './accordion/Header';
import React, {useState} from 'react';

function App() {
const [active, setActive] = useState("")
const [answers, setAnswer] = useState([
  {
    id: 1,
    answer:'Кто такие люди людоеды ? Людоед — существо, употребляющее в пищу человеческую плоть: Людоед — то же, что каннибал.',
  },
  {
    id: 2,
    answer:'fl;dsakfkdsal;fkdsajfkljdsklfkldsjfkjadslkfjsdlafjadklsfjiourqrioweruqeios.'
  }
])
  return (
    <div className='App'>
 
    <Header title="Кто такие люди людоеды?" answer='Кто такие люди людоеды ? Людоед — существо, употребляющее в пищу человеческую плоть: Людоед — то же, что каннибал.' active={active} setActive={setActive}/>
    <Header title="Кто такие люди полиглоты?" answer='Полигло́т (греч. πολύγλωττος от греч. πολυ-, «много» и γλώττα, «язык») — человек, знающий много языков.' active={active} setActive={setActive} />
    <Header title="Как узнать свой уровень IQ?" answer='Определяется с помощью специальных тестов. Тесты IQ рассчитаны на оценку мыслительных способностей, а не уровня знаний. Каждый тест состоит из множества различных заданий нарастающей сложности. Среди них тестовые задания на логическое и пространственное мышление, а также задания других типов.' active={active} setActive={setActive}/>
    <Header title="Как ведет себя женщина которая любит?" answer='Если вы действительно нравитесь девушке, она выдаст это своими словами: она хочет сначала услышать ваше мнение, а ее глаза жаждут одобрения, когда вы обсуждаете щепетильную тему. Любящая девушка не боится перемен и хочет действительно вам понравиться. Постоянное желание встреч и общения.' active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
