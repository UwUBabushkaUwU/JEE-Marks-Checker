pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
document.getElementById('convert-btn').addEventListener('click', function () {
    var file = document.getElementById('pdf-file').files[0];
    var fileReader = new FileReader();

    fileReader.onload = function (event) {
        var arrayBuffer = event.target.result;

        // Load the PDF
        pdfjsLib.getDocument({ data: arrayBuffer }).promise.then(function (pdf) {
            var numPages = pdf.numPages;
            var fullText = '';

            // Iterate through each page
            var getPageText = function (pageNum) {
                return pdf.getPage(pageNum).then(function (page) {
                    return page.getTextContent().then(function (textContent) {
                        var pageText = '';
                        var lastY = -1;

                        // Concatenate text items to form the page text
                        for (var i = 0; i < textContent.items.length; i++) {
                            var item = textContent.items[i];
                            if (lastY !== item.transform[5] || i === 0) {
                                pageText += '\n';
                                lastY = item.transform[5];
                            }
                            pageText += item.str;
                        }

                        return pageText;
                    });
                });
            };

            // Retrieve text from each page and append to fullText
            var promise = Promise.resolve();
            for (var pageNum = 1; pageNum <= numPages; pageNum++) {
                promise = promise.then(getPageText.bind(null, pageNum)).then(function (pageText) {
                    fullText += pageText;
                });
            }

            // Access the full text when all pages are processed
            promise.then(function () {
                var lines = fullText.split('Q').map(function (line) {
  return 'Q' + line;
}).join("\n");
                console.log(lines);
                
                // You can store the full text in a variable or process it further as needed
            });
        });
    };

    fileReader.readAsArrayBuffer(file);
});