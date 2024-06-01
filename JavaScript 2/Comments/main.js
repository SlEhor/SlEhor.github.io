function all_articles(){
    let all_articles = document.getElementById('all_articles');
    all_articles.innerHTML = '';
    db.collection('articles').get().then(res =>{
        res.forEach(doc =>{
            let article = doc.data();
            article.id = doc.id;
            
            all_articles.innerHTML += `
            <div class="one_article" onclick="article_click('${article.id}')">
            <div class="art_title">${article.title}</div>
            <div class="likes"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>
                <span id="n_likes">${article.likes}</span></div>
            <div class="text">${article.text}</div>
        </div>
            `
        })
    })
    
}
all_articles()

function article_click(id){
    
    window.location.href= `article.html?id=${id}`
}