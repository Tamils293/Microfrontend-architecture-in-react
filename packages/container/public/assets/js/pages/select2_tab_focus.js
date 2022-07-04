
        // automaticaly open the select2 when it gets focus
        jQuery(document).on('focus', '.select2', function () {
            jQuery(this).siblings('select').select2('open');
        });

        // when the select2 closes advance focus to the next field
        jQuery(document).ready(function () {
            jQuery(".select2").select2().on("select2:close", function (e) {
                var nextId = getNextFocusableFieldId(jQuery(this).attr('id'));
                // set focus to the next field
                jQuery('#' + nextId).focus().select();
            });
        });

        

