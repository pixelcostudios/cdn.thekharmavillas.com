CKEDITOR.replace('content', {
    toolbar: [{
        name: 'document',
        items: ['Source', '-', 'Paste', 'PasteText', 'PasteFromWord', '-', 'CreateDiv', 'Iframe', 'Syntaxhighlight', 'InsertPre', '-', 'Youtube','Image', 'Flash', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', '-', 'Link', 'Unlink', '-', 'Table', '-', 'HorizontalRule', 'PageBreak', '-', 'NumberedList', 'BulletedList', '-', 'TextColor', 'BGColor', '-', 'Styles', 'Format', 'Font', 'FontSize', 'LetterSpacing', 'lineheight', 'Zoom', 'Maximize']
    }],
    height: 150
});
CKEDITOR.replace('content_reply', {
    toolbar: [{
        name: 'document',
        items: ['Source', '-', 'Paste', 'PasteText', 'PasteFromWord', '-', 'CreateDiv', 'Iframe', 'Syntaxhighlight', 'InsertPre', '-', 'Youtube','Image', 'Flash', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', '-', 'Link', 'Unlink', '-', 'Table', '-', 'HorizontalRule', 'PageBreak', '-', 'NumberedList', 'BulletedList', '-', 'TextColor', 'BGColor', '-', 'Styles', 'Format', 'Font', 'FontSize', 'LetterSpacing', 'lineheight', 'Zoom', 'Maximize']
    }],
    height: 150
});
CKEDITOR.config.allowedContent = true;
CKEDITOR.disableAutoInline = true;