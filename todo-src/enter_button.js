$('#add_item_text').keydown(function (event) {
    if(event.which == 13) {
        $('#add_item_button').click();
        return false;
    }
});
