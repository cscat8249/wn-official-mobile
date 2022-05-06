document.addEventListener("DOMContentLoaded", function () {
     //인스타 피드 이벤트
     const feed = new Instafeed({
        accessToken: 'IGQVJYT3hVZAmxrc25GR2tkMGgxQUkxQ3pjd3B5OE5lalRVYTl0bmVTUW9melFGblNQdllzLTYzYWx5Yl9sYk9IYkxNZAFgtN1hXMzV0UXB5TW9rOThmTmpzeUt4bU11eExIckxnVnEzOWEwT2VqR1h6SwZDZD',
        target:'gallery',
        template: 
            '<li class="item">'+
                '<a href="{{link}}" target="_blank">'+
                    '<img title="{{caption}}" src="{{image}}"/>'+
                '</a>'+
            '</li>',
        limit: 2
    });
    feed.run();
    
});