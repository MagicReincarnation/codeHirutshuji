const resourceConfig = [
    {
        t: "script",
        src: "https://example.com/script.js",
        loc: "head",
        async: true,
        crossorigin: "anonymous",
        type: "text/javascript",

        name: "Example Script 1",
        version: "1.0.0",
        releaseDate: "2024-01-01",
        lastUpdate: "2024-11-28",
        changelog: "Initial release with basic functionality."
    },
    {
        t: "script",
        src: "https://cdn.jsdelivr.net/gh/MagicReincarnation/codeHirutshuji@main/Fitur%20Bookmark/bookmark_v2.5.6.js",
        loc: "body",
        defer: true,
        type: "text/javascript",

        name: "Bookmark",
        version: "2.5.6",
        releaseDate: "2024-12-04",
        lastUpdate: "2024-12-04",
        changelog: "Added new features and fixed minor bugs."
    },
    {
        t: "link",
        href: "https://example.com/another-style.css",
        loc: "head",
        rel: "stylesheet",

        name: "Example Style",
        version: "1.0.0",
        releaseDate: "2024-03-01",
        lastUpdate: "2024-11-10",
        changelog: "Initial release of style sheet."
    }
];

    function addResources(config) {
    config.forEach(resource => {
        let element = resource.t === "link" ? document.createElement("link") : resource.t === "script" ? document.createElement("script") : null;
        if (!element) return;

        // Menambahkan atribut dari objek konfigurasi kecuali "t" dan "loc"
        Object.keys(resource).forEach(attribute => {
            if (attribute !== "t" && attribute !== "loc") {
                // Jika nilai atribut adalah boolean true, tambahkan atribut tersebut
                if (resource[attribute] === true) {
                    element.setAttribute(attribute, attribute);  // Menambahkan atribut seperti "async" atau "defer"
                } else if (resource[attribute] !== false && resource[attribute] !== undefined) {
                    // Jika ada nilai selain false atau undefined, set atributnya
                    element.setAttribute(attribute, resource[attribute]);
                }
            }
        });

        // Menambahkan elemen ke body atau head
        (resource.loc === "body" ? document.body : document.head).appendChild(element);
    });
}
addResources(resourceConfig);
