$(function(){
    
    $('input').blur(function(){
        const minutes = $('#minutes').val();
        const seconds = $('#seconds').val();
        const sam_seconds = minutes * 60 + Number(seconds);
        const distance = 42.195;
        const total_seconds = sam_seconds * distance;
        const calculated_hours = total_seconds / 3600;
        const calculated_minutes = (total_seconds % 3600) /60;
        const calculated_seconds = (total_seconds % 3600) % 60;
        
        $("#jikan").text(Math.floor(calculated_hours) + '時間' + Math.floor(calculated_minutes) + '分' + Math.floor(calculated_seconds) + '秒');
    });
});