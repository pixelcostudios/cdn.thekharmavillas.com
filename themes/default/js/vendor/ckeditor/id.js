CKEDITOR.replace('content_id', {
    toolbar: [{
        name: 'document',
        items: ['Source', '-', 'DocProps', '-', 'Templates', '-', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat', '-', 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', 'Iframe', 'Syntaxhighlight', '-', 'gg', 'wenzgmap', '-', 'base64image', 'oembed', 'qrc', 'Youtube', 'MediaEmbed', 'Image', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'TransformTextSwitcher', 'TransformTextToLowercase', 'TransformTextToUppercase', 'TransformTextCapitalize', '-', 'BidiLtr', 'BidiRtl', '-', 'Link', 'Unlink', 'Anchor', '-', 'Table', '-', 'mathedit', 'EqnEditor', 'SpecialChar', '-', 'HorizontalRule', 'PageBreak', '-', 'Smiley', 'TextColor', 'BGColor', 'UIColor', '-', 'Maximize', 'PlaceHolder', 'FontAwesome', 'ShowBlocks', 'CreatePlaceholder', 'page2images', 'Styles', 'Format', 'Font', 'FontSize', 'LetterSpacing', 'lineheight', 'Zoom']
    }]
});
CKEDITOR.replace('summary_id', {
    toolbar: [{
        name: 'document',
        items: ['Source', '-', 'Paste', 'PasteText', 'PasteFromWord', '-', 'CreateDiv', 'Iframe', 'Syntaxhighlight', 'InsertPre', '-', 'Youtube', 'Image', 'Flash', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', '-', 'Link', 'Unlink', '-', 'Table', '-', 'HorizontalRule', 'PageBreak', '-', 'NumberedList', 'BulletedList', '-', 'TextColor', 'BGColor', '-', 'Maximize']
    }],
    height: 100
});
CKEDITOR.config.allowedContent = true;
CKEDITOR.disableAutoInline = true;
