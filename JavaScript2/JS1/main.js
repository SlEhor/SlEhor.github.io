db.collection('test').get().then(res => {
    res.forEach(doc => {
        let user = doc.data();
        console.log(user)
    })
})
