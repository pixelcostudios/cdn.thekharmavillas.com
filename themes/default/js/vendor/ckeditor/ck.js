if (location.hostname === "localhost" || location.hostname === "localhost74" || location.hostname === "127.0.0.1") {
    var urlArray = window.location.pathname.split('/');
    var url_Base = document.location.origin + '/' + urlArray[1] + '/' + urlArray[2] + '/';
    var urlPost = urlArray[3];
    var urlSecond = urlArray[4];
    var urlThird = urlArray[5];
} else {
    var urlArray = window.location.pathname.split('/');
    var url_Base = document.location.origin + '/';
    var urlPost = urlArray[1];
    var urlSecond = urlArray[2];
    var urlThird = urlArray[3];
}
// alert(urlThird);

function AddImages_id() {
    // alert("dfff");
    var e, t;
    var n = 0;
    var r = $('.images-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[2]);
            CKEDITOR.instances.content_id.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[2]);
                CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddImages_en() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_en.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_en.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddThumb_id() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_id.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddThumb_en() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_en.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_en.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddPDF_id() {
    var e, t;
    var n = 0;
    var r = $('.pdf-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_id.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddPDF_en() {
    var e, t;
    var n = 0;
    var r = $('.pdf-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_en.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_en.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddFiles_id() {
    var e, t;
    var n = 0;
    var r = $('.files-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_id.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function AddFiles_en() {
    var e, t;
    var n = 0;
    var r = $('.files-check');
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            CKEDITOR.instances.content_en.insertHtml(t[2])
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                CKEDITOR.instances.content_en.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}



//Images
Dropzone.options.dropzoneImages = {
    autoProcessQueue: true,
    acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",

    init: function() {
        myDropzone = this;
        myDropzone.processQueue();
        this.on("complete", function() {
            if (this.getQueuedFiles().length == 0 && this.getUploadingFiles().length == 0) {
                var _this = this;
                _this.removeAllFiles();
            }
            load_images();
            load_icon();
            load_thumb();
            load_background();
            load_pdf();
            load_files();
        });
    }
};

load_images();

function load_images() {
    $.ajax({
        url: url_Base + "post/fetch/images/" + urlThird,
        success: function(data) {
            $('#uploaded_images').html(data);
        }
    })
}

load_icon();

function load_icon() {
    $.ajax({
        url: url_Base + "post/fetch/icon/" + urlThird,
        success: function(data) {
            $('#uploaded_icon').html(data);
        }
    })
}

load_thumb();

function load_thumb() {
    $.ajax({
        url: url_Base + "post/fetch/thumb/" + urlThird,
        success: function(data) {
            $('#uploaded_thumb').html(data);
        }
    })
}

load_background();

function load_background() {
    $.ajax({
        url: url_Base + "post/fetch/background/" + urlThird,
        success: function(data) {
            $('#uploaded_background').html(data);
        }
    })
}

load_pdf();

function load_pdf() {
    $.ajax({
        url: url_Base + "post/fetch/pdf/" + urlThird,
        success: function(data) {
            $('#uploaded_pdf').html(data);
        }
    })
}
load_files();

function load_files() {
    $.ajax({
        url: url_Base + "post/fetch/files/" + urlThird,
        success: function(data) {
            $('#uploaded_files').html(data);
        }
    })
}

function Deleted_Images() {
    var e, t;
    var n = 0;
    var r = $('.images-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[3]);
            // CKEDITOR.instances.content_id.insertHtml(t[2])
            // var id = $(this).data("id");
            // var type = $(this).data('type');
            // alert(url_Base + "post/delete/" + t[3] + "/" + t[0]);
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: { name: name },
                success: function(data) {
                    load_images();
                    load_icon();
                    load_thumb();
                    load_background();
                    toastr.success('Images has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[3]);
                // alert(url_Base + "post/delete/" + t[3] + "/" + t[0]);
                var name = t[1]; //$(this).data('name');
                $.ajax({
                        url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                        data: { name: name },
                        success: function(data) {
                            load_images();
                            load_icon();
                            load_thumb();
                            load_background();
                            toastr.success('Images has been deleted!', '', []);
                        }
                    })
                    // CKEDITOR.instances.content_id.insertHtml(t[2])
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.options = [];
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function Deleted_Files() {
    var e, t;
    var n = 0;
    var r = $('.files-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            // alert(t[3]);
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: { name: name },
                success: function(data) {
                    load_files();
                    toastr.success('Files has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                // alert(t[3]);
                var name = t[1]; //$(this).data('name');
                $.ajax({
                    url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                    data: { name: name },
                    success: function(data) {
                        load_files();
                        toastr.success('Files has been deleted!', '', []);
                    }
                })
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}

function Deleted_PDF() {
    var e, t;
    var n = 0;
    var r = $('.pdf-check');
    // alert(r.length);
    if (r.length == null) {
        if (r.checked) {
            n++;
            e = r.value;
            t = e.split(",");
            var name = t[1]; //$(this).data('name');
            $.ajax({
                url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                data: { name: name },
                success: function(data) {
                    load_pdf();
                    toastr.success('PDF has been deleted!', '', []);
                }
            })
        }
    } else {
        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                n++;
                e = r[i].value;
                t = e.split(",");
                var name = t[1]; //$(this).data('name');
                $.ajax({
                    url: url_Base + "post/delete/" + t[3] + "/" + t[0],
                    data: { name: name },
                    success: function(data) {
                        load_pdf();
                        toastr.success('PDF has been deleted!', '', []);
                    }
                })
            }
        }
    }
    if (n == 0) {
        // alert("Please select at least one check box");
        toastr.warning('Please select at least one check box!', '', []);
        return false
    }
}