 function downloadCSV(csv, filename)    {
     var csvFile;
     var downloadLink; 

     //retrieve (recupero) csv from experiment 
     csvFile =  new Blob( blobparts= [csv], options= {type: "text/csv"} );
     
    //download link
    downloadLink = document.createElement(tagName= "a");

    //retrieve file name 
    downloadLink.download = filename; 