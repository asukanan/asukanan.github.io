var posts=["2025/03/15/原摄之芙宁娜/","2025/03/17/Mac安装homebrew/","2025/04/24/snell简单搭建/","2025/05/05/yt-dlp简单配置/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };