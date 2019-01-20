import Vue from 'vue';

const skill =
{
    template: '#skill',
    props:{
        skillPersentage: Number,
        skillTitle: String
    },
    methods:
    {
        drawCirlce() {
            const circle = this.$refs['circle'];
            const dashOffset = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dashoffset"));
            const persent = dashOffset / 100 * (100 - this.skillPersentage);
            circle.style.strokeDashoffset = persent;
        }
    },
    mounted() {
        this.drawCirlce();
    }
}

const skillsRow =
{
    template: '#skills-item',
    props:{
        skillsGroupObject: Object
    },
    components: {
        skill
    }
}

new Vue({
    el : '#skills-component',
    components: {
        skillsRow
    },
    data() {
        return {
            skills: {}
        }
    },
    created() {
        this.skills = require('../../../data/skills.json');
    },
    template: '#skills-list'
});