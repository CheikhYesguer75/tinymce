

tinymce.PluginManager.add('example', function(editor, url) {
    // Add a button that opens a window
    editor.addButton('example', {
        text: 'Quote',
        icon: false,
        onclick: function() {
           if(tinyMCE.activeEditor.selection.getContent() != ""){
                editor.insertContent('<q>' +tinyMCE.activeEditor.selection.getContent()+'</q>');
}
          // editor.insertContent('<q>' + ed.select() + '<q>');
        }
    });
 });
   

