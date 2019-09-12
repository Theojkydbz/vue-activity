import fakeApi from '@/lib/fakeApi'
import Vue from 'vue'

const store = {
    state:{
        activities: {},
        categories: {}
    },
    generateUid () { 
        return Math.floor(new Date() * Math.random()) 
    },
    
    fetchActivities () { 
        return fakeApi.get('activities', {force: 1})
            .then( activities => {
                const keys = Object.keys(activities)
                Object.keys(activities).forEach((key) => {
                    this.setItem('activities', key, activities)
                })

                return activities
            })
    },
    
    fetchCategories () {
        return fakeApi.get('categories', {force: 1})
            .then( categories => {
                
                Object.keys(categories).forEach((key) => {
                    this.setItem('categories', key, categories)
                })
                
                return categories
            })
    },
    
    fetchUser () {
        return {
            name: 'Théo Geiller',
            id: '-Aj34jknvncx98812'
        }
    },
    
    createActivity (activity) {
        activity.id = this.generateUid()
        activity.progress = 0
        activity.createdAt = new Date()
        activity.updatedAt = new Date()
    
    
        return fakeApi.post('activities', activity)
    },
    
    
    deleteActivity (activity) {
        return fakeApi.delete('activities', activity)
            .then(deletedActivity => {
                Vue.delete(this.state.activities, activity.id)
                return deletedActivity
            })
            // handleActivityDelete (activity) {
            //   debugger
            //   store.deleteActivityAPI(activity)
            //     .then(deletedActivity => {
            //       Vue.delete(this.activities, deletedActivity.id)
            //     })
            // }
    },

    setItem (ressource, id, item) {
        Vue.set(this.state[ressource], id, item[id])
    }
}

export default store