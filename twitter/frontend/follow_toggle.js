const APIUtil = require('./api_util.js')

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.$el.on('click', this.handleClick.bind(this));
    }

    render(){
        if (this.followState === false) {
            this.$el.html("Follow!");  
            this.$el.prop("disabled", false)
        } else {
            this.$el.html("Unfollow!"); 
            this.$el.prop("disabled", false)
        }
    };
    
    handleClick(event) {
        event.preventDefault(); 
      
      if (this.followState === false ){
          this.followState = true;
          this.$el.prop( "disabled", true )
          APIUtil.followUser(this.userId).then(this.render());

    //    APIUtil.followUser(this.userId).then(this.render())
        //   $.ajax({
        //       url: `/users/${this.userId}/follow`,
        //       method: 'POST',
        //       dataType: 'json'
        //     }).then(this.render());
        } else if (this.followState === true ){
        this.followState = false;
          this.$el.prop( "disabled", true )
          APIUtil.unfollowUser(this.userId).then(this.render());
            // this.render();
        //   APIUtil.unfollowUser(this.userId).then(this.render())
            // $.ajax({
            //     url: `/users/${this.userId}/follow`,
            //     method: 'DELETE',
            //     dataType: 'json'
            // }).then(this.render());
        }
    }
};


module.exports = FollowToggle;