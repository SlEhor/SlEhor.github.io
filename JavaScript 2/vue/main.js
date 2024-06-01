const info ={
    text: "Здоровенькі були",
    all_users:[]
}

const app = {
    data(){
        return info
    },
    methods:{

    },
    components:{
        
    },
    mounted(){
        db.collection('all_users').get().then(res =>{
           res.forEach(doc=>{
            let user = doc.data();
            user.id = doc.id;
            this.all_users.push(user)
           })
        })
    }
}

Vue.createApp(app).mount('#test_app')