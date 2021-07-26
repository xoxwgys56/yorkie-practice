function addChange(editor, from, to, text) {
    let adjust = editor.listSelections().findIndex(({anchor, head}) => {
      return CodeMirror.cmpPos(anchor, head) == 0 && CodeMirror.cmpPos(anchor, from) == 0
    })
    editor.operation(() => {
      editor.replaceRange(text, from, to, 'yorkie')
      if (adjust > -1) {
        let range = editor.listSelections()[adjust]
        if (range && CodeMirror.cmpPos(range.head, CodeMirror.changeEnd({from, to, text})) == 0) {
          let ranges = editor.listSelections().slice()
          ranges[adjust] = {anchor: from, head: from}
          editor.setSelections(ranges)
        }
      }
    })
  }

async function main() {
    console.log('hello yorkie')

    const editor = CodeMirror.fromTextArea(document.getElementById('codemirror'), {
        lineNumbers: true
    });

    const client = yorkie.createClient('http://localhost:8080');
    await client.activate();

    const doc = yorkie.createDocument('docs', 'doc1');
    await client.attach(doc);

    doc.update((root) => {
        if (!root.content) {
            root.createText('content');
        }
    });

    editor.on('beforeChange', (cm, change) => {
        if (change.origin === 'yorkie' || change.origin === 'setValue') {
            return ;
        }

        const from = editor.indexFromPos(change.from);
        const to = editor.indexFromPos(change.to);
        const content = change.text.join('\n');

        doc.update((root) => {
            root.content.edit(from, to, content);
        })

    });

    doc.getRoot().content.onChanges((changes) => {
        console.log(changes);
        for (const change of changes) {
            if (change.type !== 'content' || change.actor === client.getID()) {
                continue;
            }

            const from = editor.posFromIndex(change.from);
            const to = editor.posFromIndex(change.to);
            // editor.replace(change.content, from, to, 'yorkie');
            addChange(editor, from, to, change.content || '');
        }
    });

    // assign Initial value
    editor.setValue(doc.getRoot().content.getValue());
}

main();