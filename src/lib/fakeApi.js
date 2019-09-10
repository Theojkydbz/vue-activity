const data ={
    activities: {
        '1546968934': {
        id: '1546968934',
        title: 'Learn Vue.js',
        notes: 'I started today and it was not good.',
        progress: 25,
        category: '1546969225',
        createdAt: 1546969144391,
        updatedAt: 1546969144391
        },
        '1546969212': {
        id: '1546969212',
        title: 'Read Witcher Books',
        notes: 'These books are super nice',
        progress: 75,
        category: '1546969049',
        createdAt: 1546969144391,
        updatedAt: 1546969144391
        }
    },
    categories:{
        '1546969049': {text: 'books', id: '1546969049'},
        '1546969225': {text: 'movies', id: '1546969225'}
    }
}

class FakeApi {
    canContinue () {
        const randomNumber = Math.floor(Math.random() * 10)
        if(randomNumber > 5) {
            return true
        }
        return false
    }
    get (ressource, {force = 0}) {
        return new Promise((resolve, reject) => {
            this.asyncCall(()=>{
                if (force || this.canContinue()) {
                    resolve({...data[ressource]})
                } else {
                    reject('Cannot fetch ' + ressource)
                }
            })
        })
    }      

    post (ressource, item) {
        return new Promise ((resolve, reject) =>{
            data[ressource][item.id] = item
            resolve(item)
        })
    }

    asyncCall(cb){
        setTimeout(cb, 1000)
    }
}

export default new FakeApi()