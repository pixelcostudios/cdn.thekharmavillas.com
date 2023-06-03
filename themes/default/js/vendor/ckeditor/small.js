CKEDITOR.replace('menu', {
    toolbar: [{
        name: 'document',
        items: ['Source', '-', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Image', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', '-', 'Link', 'Unlink', '-', 'Table', '-', 'HorizontalRule', 'PageBreak', '-', 'NumberedList', 'BulletedList', '-', 'TextColor', 'BGColor', '-', 'Format', 'FontSize', 'LetterSpacing', 'Maximize']
    }],
    height: 150
});
CKEDITOR.replace('summary', {
    toolbar: [{
        name: 'document',
        items: ['Source', '-', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Image', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', '-', 'Link', 'Unlink', '-', 'Table', '-', 'HorizontalRule', 'PageBreak', '-', 'NumberedList', 'BulletedList', '-', 'TextColor', 'BGColor', '-', 'Format', 'FontSize', 'LetterSpacing', 'Maximize']
    }],
    height: 140
});
CKEDITOR.env.isCompatible = true;
CKEDITOR.config.allowedContent = true;
CKEDITOR.disableAutoInline = true;