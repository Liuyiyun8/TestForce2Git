({
	scriptLoaded : function(component, event, helper) {
        const editor    = component.find('editor'); // where 'editor' is a <div aura:id="editor" />
        const element = editor.getElement();
        
        console.log("element=", element);
        const quill = new Quill(
            element,
            {
                placeholder: 'Mail content..',
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        ['blockquote', 'code-block'],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['clean'],
                        [{'color' : [ 'blue', 'red', 'green', 'yellow', 'black', 'purple', 'pink']}]
                    ]
                }
            }
        );
        console.log("quill=", quill);
        //quill.on('text-change', function() {
            // Do stuff with quill.container.firstChild.innerHTML;
        //});
        component.set('v.quill', quill); // where quill is an attribute of type Object
	}
})