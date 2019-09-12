<template>
    <article class="post">
        <div class="activity-title">
            <input 
                v-model="activity.title"
                type="text" 
                class="input">
        </div>
        <div class="activity-category">
            <select 
                    v-model="activity.category"
                    class="select">
                <option 
                    disabled 
                    value="">
                    Please select one
                </option>
                <option 
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.id">
                        {{ category.text }}
                </option>
            </select>
        </div>
        <div class="control activity-notes">
            <!-- TODO: Add v-model here -->
            <textarea
                v-model="activity.notes"
                class="textarea"
                placeholder="Write some notes here" />
        </div>
        <div class="media">
            <div class="media-left">
                <p class="image is-32x32">
                    <img src="../assets/user.png">
                </p>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <a href="#">Filip Jerga</a> updated {{ activity.updatedAt | prettyTime }} &nbsp;
                    </p>
                </div>
            </div>
            <div class="media-right">
                <!-- TODO: Add v-model here -->
                <input 
                    id="progress"
                    v-model="activity.progress"
                    type="range"
                    name="progress"
                    min="0" 
                    max="100" 
                    value="0"
                    step="10">
                <label for="progress"> Progress</label>
            </div>
        </div>
        <div 
            v-if="isMenuDisplayed" 
            class="activity-controll">
            <!-- TODO: create function 'updateActivity' to console log 'activity' -->
            <a  
                class="button is-warning"
                @click="updateActivity()">Commit Update</a>
            <!-- TODO: Emit Event to Cancel Edit Mode -->
            <a  
                class="button is-danger" 
                @click="$emit('toggleUpdate', false)">
                Cancel
            </a>
        </div>
    </article>
</template>

<script>
    import textUtility from '@/mixins/textUtility'

    export default {
        mixins: [textUtility],
        props: {
            categories:{
            type: Object,
            required: true
            },
            activity: {
            type: Object,
            required: true
            }
        },
        data(){
            return {
            isMenuDisplayed: true
            }
        },
        methods:{
            updateActivity(){
                this.$emit('toggleUpdate', false)
                this.$emit('activityUpdated', {...this.activity})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .activity{
        &-title{
            margin-bottom: 10px;
        }
        &-category{
            margin-bottom: 10px;
        }
        &-notes{
            margin-bottom: 15px;
        }
    }
    .media{
        &-left{
        }
        &-right{
            margin-top: 5px; 
        }
        margin-bottom: 20px;
    }
    .activity-settings {
        float: right;
        font-size: 22px;
        &:hover {
            cursor: pointer;
        }
    }
    .activity-controll {
        margin: 20px 0 0 0;
        a {
            margin-right: 5px;
        }
        margin-bottom: 50px;
    }

    .post-title{
        margin-bottom: 5px
        }
        .post{
            text-align: left;
    }
</style>>
