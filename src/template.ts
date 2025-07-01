export const template = (documentPath: string) => {
    return `
         <!DOCTYPE html>
         <html lang="en">
             <head>
             <title>API Docs</title>
             <meta charset="UTF-8" />
             <meta name="viewport" content="width=device-width, initial-scale=1">
             <style>
                 body { margin: 0; padding: 0; }
                 #redoc-container { height: 100vh; }
             </style>
             </head>
             <body>
                 <div id="redoc-container"></div>
                     <script src="/assets/redoc.standalone.js"></script>
                     <script> Redoc.init('${documentPath}', {}, document.getElementById('redoc-container'));
                 </script>
             </body>
         </html>
 `
}