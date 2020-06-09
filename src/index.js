$docsify.plugins = [].concat($docsify.plugins, function (hook, vm) {

    hook.init(function () {
        // Called when the script starts running, only trigger once, no arguments,
    });

    hook.beforeEach(function (content) {
        // Invoked each time before parsing the Markdown file.
        return content;
    });

    hook.afterEach(function (html, next) {
        // Invoked each time after the Markdown file is parsed.
        // beforeEach and afterEach support asynchronous。
        // ...
        // call `next(html)` when task is done.
        window.$docsify.abyss.path.forEach(function (item, index) {
            if (item === vm.route.path) {
                var path = item + ".json"
                Docsify.get(path).then(r => {
                    window.$docsify.abyss.data = JSON.parse(r)
                    next(html);
                })
            } else {
                next(html)
            }
        })
    });

    hook.doneEach(function () {
        // Invoked each time after the data is fully loaded, no arguments,
        // ...
    });

    hook.mounted(function () {
        // Called after initial completion. Only trigger once, no arguments.

    });

    hook.ready(function () {
        // Called after initial completion, no arguments.

    });

});

