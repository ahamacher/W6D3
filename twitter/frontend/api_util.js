const APIUtil = {
    


    followUser: id => {
        return new Promise( function (resolve, reject) {
            $.ajax({
                url: `/users/${id}/follow`,
                method: 'POST',
                dataType: 'json',
                sucess: resolve
            })
        })
    },

    unfollowUser: id => {
        return new Promise( function( resolve, reject ) {
            $.ajax({
                url: `/users/${id}/follow`,
                method: 'DELETE',
                dataType: 'json',
                sucess: resolve
            })
        })
    }
}

module.exports = APIUtil;