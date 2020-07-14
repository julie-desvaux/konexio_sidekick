$(function() {
    new WOW().init();
    var modalEl = $('#videomodal');
    var videoEl = modalEl.find('video');
    modalEl.on('shown.bs.modal', function(e) {
        // console.log('modalEl', modalEl);
        videoEl[0].play();
    });
    modalEl.on('hide.bs.modal', function(e) {
        // console.log('modalEl', modalEl);
        videoEl[0].pause();
    });
    $('.counter').counterUp();
});