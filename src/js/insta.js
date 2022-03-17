document.addEventListener("DOMContentLoaded", function () {
     //인스타 피드 이벤트
     const feed = new Instafeed({
        accessToken: 'IGQVJYMFhtWjNUN2tHRTVwaEhHVldQWmpLSTJ6ZA0ZAWb3VQck5JYnZACdmdpSlZATRlI1WmZArUmE0SHRJemVUOVhTdWE5anpsNDRCTHZAyTE9RVkJGUmdRYVc5aGs1b0YtWWtPSUpyRDJFSjVUOFA4a05ydQZDZD',
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