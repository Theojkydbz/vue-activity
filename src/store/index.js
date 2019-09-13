import fakeApi from '@/lib/fakeApi'
import Vue from 'vue'

const INITIAL_DATA = {
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
                    this.setItem('activities', key, activities[key])
                })

                return activities
            })
    },
    
    fetchCategories () {
        return fakeApi.get('categories', {force: 1})
            .then( categories => {
                
                Object.keys(categories).forEach((key) => {
                    this.setItem('categories', key, categories[key])
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
            .then(createdActivity => {
                this.setItem('activities', createdActivity.id, createdActivity)
                return createdActivity
            })
    },

    updateActivity (activity) {
        activity.updatedAt = new Date()

        return fakeApi.post('activities', activity)
            .then(updatedActivity => {
                this.setItem('activities', updatedActivity.id, updatedActivity)
                return updatedActivity
            })
    },
    
    
    deleteActivity (activity) {
        return fakeApi.delete('activities', activity)
            .then(deletedActivity => {
                Vue.delete(this.state.activities, activity.id)
                return deletedActivity
            })
    },

    setItem (ressource, id, item) {
        Vue.set(this.state[ressource], id, item)
    }
}

export default store