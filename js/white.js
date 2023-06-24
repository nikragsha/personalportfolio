function saveHtmlFile() {
   // Define the URL of the HTML file you want to download
    const url = 'https://nikragsha.github.io/personalportfolio/portfolios/white.html';

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define the function to be called when the file is loaded
    xhr.onload = function() {
      // Check if the request was successful
      if (xhr.status === 200) {
        // Create a new Blob object from the response content
        const blob = new Blob([xhr.response], { type: 'text/html' });

        // Create a link element to download the file
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'portfolio.html';

        // Add the link element to the document and click it
        document.body.appendChild(link);
        link.click();
         document.body.removeChild(link);
      }
    };

// Open the XMLHttpRequest with the GET method and the URL
xhr.open('GET', url);

// Set the responseType to arraybuffer
xhr.responseType = 'arraybuffer';

// Send the XMLHttpRequest
xhr.send();
}
  