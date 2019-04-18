const APIUtil = require('./api_util.js')
const FollowToggle = require('./follow_toggle.js') 

$(() => {

    const $followButton = $(".follow-toggle");
    $followButton.each((idx, button) => {
        new FollowToggle (button)
    });
})
