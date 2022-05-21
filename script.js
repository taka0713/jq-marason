$(function(){
    let html = $('#minutes').val();
    let htmlval = $('#seconds').val();
    $('.button1').click(function(){
        html = $('#minutes').val();
        htmlval = $('#seconds').val();
        let total_km = html * 60 +  htmlval;
        let marathon = 42.195;
        let total = total_km * marathon;
        let hour = total / 3600;
        let minutes = (total % 3600) /60;
        let seconds = (total % 3600) % 60;
        
        $("#jikan").text(Math.floor(hour) + '時間' + Math.floor(minutes) + '分' + Math.floor(seconds) + '秒');
    });
});