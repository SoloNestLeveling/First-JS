const express = require('express');
const cors = require('cors')

const app = express();
const port = 3001;

//cors 요청 오는것을 컨트롤 할 수있다. 어디서 오든 전부 받을 수도 있고, 아니면 특정 한 곳에서 오는건 거부할 수도있다. 

app.use(cors()) // 비워져 있으면 어느 곳에서 오는 요청이든 다 받겠다는 의미


app.get('/', (req, res) => {
    res.send('Hello Winter')

});

app.get('/winter', (req, res) => {
    res.send("here is winter's room")
})

app.get('/karina', (req, res) => {
    res.send("here is karina's room")

})

app.listen(port, () => {
    console.log(`port number is ${port}`)
})



// 실행 후 브라우저 에서 localhost:3000 으로 접속하면 Hello World가나온다.

// 끄는 법은 커멘드+C

/**
 * listen : 프런트엔드에서 어떤 요청을 할지 듣고 있는것이다.
 * get : HTTP 메소드 get은 주소창의 정보를 의미한다.  
 * "/" : 리액트에서 배운 라우팅
 * (req, res) : req 요청   , res 응답
 * res.send: 코드를 해석하면 res(응답)을 보내겠다 라는 뜻이다.
 */

//------------------------------------------------------------------------

//params, query를 이용해서 변수로 받을 수도 있다

//params

// app.get('/user/:id', (req, res) => {
//     const p = req.params;  //요청을 파라미터로 요청 , 주소창에 3000/user/ id값이 params다
//     console.log(p.id)    //나는 localhost:3000/user/winter로 요청했음으로 id = winter이다

// })

//------------------------------------------------------------------------

//query

// app.get('/user/:id', (req, res) => {
//     const q = req.query;
//     console.log(q);  // http://localhost:3000/user/dsad?q=aespa&name=winter&age=23 
//     //입력시 출력값 { q: 'aespa', name: 'winter', age: '23' }

//     res.json(`useId:${q.q}`)
// })



//------------------------------------------------------------------------

//연습

app.get('/user/:name', (req, res) => {
    const { name } = req.params;  //{} 좀더 간결하고 직관적으로 변수 처리하는법

    if (name === 'winter') {
        res.send({ name: "윈터는 이쁘다", 'img': 'https://thumb.mtstarnews.com/06/2023/06/2023062215005684112_1.jpg/dims/optimize' })
    } else if (name === 'karina') {
        res.send({ name: "카리나는 신이다", 'img': 'https://i.namu.wiki/i/KfffiUF2eqAwiloVp_lFRtnxrkHnoh1HwKywtJ0MM6bOncyetGT4qZyIWItH2rX-WcUOqM_kmQuKU2tfYXJiKg.webp' })
    } else {
        res.send({ name: "Error" })
    }

})


