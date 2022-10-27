const fileInput = document.querySelector('input');
dowloadBtn = document.querySelector('button');


dowloadBtn.addEventListener('click', e => {
    e.preventDefault(); // prevent default action of a form- submitting action
    dowloadBtn.innerText = 'Downloading...'; // change button text to downloading
    fetchFile(fileInput.value);
        
});  


function fetchFile(url) {
    // fetch file from url and return response as a blob
    fetch(url).then(res => res.blob()).then(file => {
        // create a new url object from blob
             let fileURL = URL.createObjectURL(file);
             let aTag = document.createElement('a');
             aTag.href = fileURL; // passing file url as an href attribute to amchor tag
            aTag.download = url.replace(/^,*[\\\/]/,''); //passing file name and extension as a download attribute to anchor tag
            document.body.appendChild(aTag); // append anchor tag to body
            aTag.click(); // click on anchor tag to download file
            aTag.remove(); // remove anchor tag from body once file dowmload is complete
            URL.revokeObjectURL(fileURL); // revoke url object
            dowloadBtn.innerText = 'Download'; // change button text to download
    }).catch(err => {   
            alert("failed to download file...")


})  
};