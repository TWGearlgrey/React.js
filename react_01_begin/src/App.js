import './App.css';
import React, {useState} from "react";

const ArticleList = ({title}) => {
  return (
    <div className="list">
      <h4>{ title }</h4>
      <p>11월 5일 발행</p>
    </div>
  )
}

function App() {

  let post = 'React 공부 하기';
  //let [logo, setLogo] = useState('TWGearlgrey의 blog');
  // logo의 경우 변경될 일이 적으므로 변수를 선언. 자주 변경될 경우만 state 이용할 것.
  let logo = 'TWGearlgrey의 blog';
  let [title, setTitle] = useState('TypeScript 공부 하기');

  let num = [1, 2];
  let [a, c] = [1, 2];
  //let a = num[0]; //1
  //let c = num[1]; //2

  // state를 사용하면 state를 쓰던 html은 자동으로 재렌더링 됨.

  let [posts, setPosts] = 
      useState(['리액트 공부', '자바스크립트 공부', 
          '자바 공부', '프로젝트 공부', '가나다 정렬하기']);
  let thumbs_array = new Array(posts.length).fill(0);
  let [thumbs, setThumbs] = useState(thumbs_array);
  let [thumbs1, setThumbs1] = useState(0);
  let [thumbs2, setThumbs2] = useState(0);

  let [modal, setModal] = useState(new Array(posts.length).fill(false));

  let [inputValue, setInputValue] = useState("");

  function thumbsUp() {
      setThumbs1(thumbs1 + 1);
  }

  function asc(a, b) {
      return(a<b)?-1:(a==b)?0:1;
  }


  //setPosts([...posts.slice(0, 2), 'Java Study'])에서 0은 인덱스 0부터 2번째 요소까지. 즉 0, 1인덱스를 의미.
  // 정리해서, 인덱스 0,1의 배열을 새로 생성하고 거기에 'Java Study'을 추가한 것.

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={{color: 'white', fontSize: '16px'}}>{ logo }</h4>
      </div>
        {/*<Modal></Modal>
      {['React 공부', 'TypeScript 공부', 'JavaScript 공부'].map((title) =>
        <ArticleList title={title}></ArticleList>)}
      <div className="list">
        <h4>{ posts[0] } <span onClick={thumbsUp}>👍</span> {thumbs1} </h4>
        <p>11월 5일 발행</p>
      </div>
      <div className="list">
        <h4>{ posts[1] } <span onClick={ () => {setThumbs2(thumbs2 + 1)} }>👍</span> {thumbs2} </h4>
        <p>11월 5일 발행</p>
      </div>
      <div className="list">
        <h4>{ posts[2] } <span onClick={()=>{setPosts([...posts.slice(0, 2), 'Java Study'])}}>❤️</span></h4>
        <p>11월 5일 발행</p>
      </div>
      <div className="list">
        <h4>{ posts[3] } <span onClick={ ()=> {
          let copy = [...posts];
          copy[3] = 'project learn'
          setPosts(copy)} }>
            😂
        </span></h4>
        <p>11월 5일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{ posts[4] } <span onClick={ () => {
          let copy_arr = [...posts];
          copy_arr.sort(asc);
          setPosts(copy_arr)}}>
          🔠
        </span></h4>
        <p>11월 5일 발행</p>
      </div>*/}

      {/*{
          modal ? <Modal/> : null
      }

      {
          [1,2,3].map(function () {
             return <div>안녕</div>
          })
      }*/}

      {
        posts.map(function (a, i) {
          return (
            <>
              <div className="list" key={i}>
                <h4 onClick={()=>{switchModal(i, modal, setModal)}}>
                    { posts[i] }
                    <span onClick={ (e) => {
                      e.stopPropagation();
                      const thumbsUp = [...thumbs];
                      thumbsUp[i]++;
                      setThumbs(thumbsUp);
                    }}>
                        👍
                    </span>
                    {thumbs[i]}
                </h4>
                <p>
                    11월 5일 발행
                    <button
                        style={{marginLeft:"100px"}}
                        onClick={()=>{
                            const copy = [...posts];
                            copy.splice(i, 1);
                            setPosts(copy);
                        }}
                    >
                        🚽
                    </button>
                </p>
              </div>


              {
                  modal[i] ? <Modal color={'lightskyblue'} i={i} posts={posts} setPosts={setPosts}/> : null
              }
            </>
          )
        })
      }
      <input onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
      }}/>
      <button onClick={()=>{
          const copy = posts;
          copy.unshift(inputValue);
          setInputValue(copy);
      }}>📨</button>
    <Modal2></Modal2>
    </div>
  )
}

/*
컴포넌트 생성하기 좋은 경우
1. 반복적인 html을 축약할 때
2. 큰 페이지
3. 자주 변경되는 것

컴포넌트의 단점
1. state를 가져다 사용할 때 문제가 발생함
    A함수에 있던 변수를 B함수에서 사용하기 어려움.
2. let Model = () => {return ( html... )}
    위와 같이 컴포넌트를 발생하는 문법을 사용할 수 있음.
*/

// on/off를 위해 modal?setModal(false):setModal(true)했지만
// setModal(!modal)이 훨씬 간단하고 가독성이 좋음

function switchModal(i, modal, setModal) {
    let copy = [...modal];
    copy[i] = !modal[i];
    setModal(copy);
}

function Modal(props) {
    const { i, color, posts, setPosts } = props;
    return (
        <div className="modal" style={{background: color}}>
            <h4>{props.posts[i]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
                let modifyPost = [...posts];
                modifyPost[i] = 'React Learn';
                setPosts(modifyPost);
            }}>글 수정</button>
        </div>
    )
}
/*
동적인 UI 만드는 STEP
1. html, css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장하기
3. state에 따라 UI가 어떻게 보일지 작성하기
*/

class Modal2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '김유신',
            age: 20
        }
    }
    render() {
        return (
            <div style={{border: "1px solid lightgrey"}}>
                안녕 {this.state.age}살 {this.state.name}아
                <button onClick={()=>{
                    this.setState({age: 21})
                }}> 내년 나이 </button>
            </div>
        )
    }

}

// map()은 array의 개수만큼 반복 실행함.
[1,2,3].map(function (a){
    console.log(a);
    return '12341234';
}); // return을 주는 경우 return 값이 배열에 담김.


export default App;