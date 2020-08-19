$(document).ready(function () {
    const xhr = $.ajax({
        url: 'https://www.reddit.com/r/dog/top.json?limit=10',
        method: 'GET',
        success: function(data) {
            const $posts = $('#posts');
            let postsArray = data.data.children;
            console.log(length)

            $(postsArray).each((i, post) => {
            console.log(post)
                const elPost = `
                    <div class="post">
                        <br>
                        <h5 class="title">${post.data.title}</h5>
                        <img class="picture" src="${post.data.thumbnail}" alt="">
                        <br>
                        <a class="btn btn-sm btn-success" href="${post.data.url_overridden_by_dest}">Click here<a>
                      
                        <hr>
                    </div>
                `;
                

                $posts.append(elPost);
            });


        },

    });
});

$(document).on('mouseout', '.picture', function(){        
    $(this).animate({
        opacity: 025,
        right: "+=50",
        height: "-=20"
       
    }, 100, function (){

    })
});

$(document).on('mouseover', '.picture', function(){        
    $(this).animate({
        opacity: 025,
        right: "+=50",
        //height: "toggle",
        height: "+=20"
       
    }, 100, function (){

    })
});




