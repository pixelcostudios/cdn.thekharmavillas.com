CKEDITOR.replace('summary_id', {
    toolbar: [{
        name: 'document',
        items: ['Source', '-', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Iframe', 'Syntaxhighlight', 'InsertPre', '-', 'Youtube','Image', 'Flash', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', '-', 'Link', 'Unlink', '-', 'Table', '-', 'HorizontalRule', 'PageBreak', '-', 'NumberedList', 'BulletedList', '-', 'TextColor', 'BGColor', '-', 'Maximize', 'Styles', 'Format', 'Font', 'FontSize', 'LetterSpacing', 'lineheight', 'Zoom']
    }],
    height: 100
});
CKEDITOR.config.allowedContent = true;
CKEDITOR.disableAutoInline = true;