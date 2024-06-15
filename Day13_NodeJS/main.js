const http = require('node:http');
const fsPromises = require('node:fs/promises');
const url = require('node:url');

const createLog = (req) =>{
    fsPromises.appendFile('./logs.txt', `Request: ${req.url} ${new Date().toISOString()} \n`);
}

const sendHomepageResponse = async (req, res) => {
    const data = await fsPromises.readFile('./pages/homepage.txt');
    res.end(data);
}

const getCards = async() => {
    let cardTemplateText = await fsPromises.readFile('./pages/card.txt', { encoding: 'utf8'});

    const productsText = await fsPromises.readFile('./data.json', { encoding: 'utf8'});
    const productsArray = JSON.parse(productsText);

    const resultArray = productsArray.map((elem)=>{
        let cardText = cardTemplateText;

        const title = elem.title;
        const description = elem.description;
        const imgSrc = elem.thumbnail;
    
        cardText = cardText.replace('$title$', title);
        cardText = cardText.replace('$src$', imgSrc);
        cardText = cardText.replace('$description$', description);
        cardText = cardText.replace('$link$', `/products/view?id=${elem.id}`);
    
        return cardText;
    });

    const resultText = resultArray.join('\n');
    return resultText;
}

const sendProductsPageResponse = async (req, res) => {
    const cardText = await getCards();
    const productsPageText = await fsPromises.readFile('./pages/productsPage.txt', { encoding: 'utf8'});
    const productsPageHTML = productsPageText.replace('#root#', cardText);
    res.end(productsPageHTML);
}

const sendErrorResponse = async (req, res) => {
    const data = await fsPromises.readFile('./pages/errorPage.txt');
    res.end(data);
}

const app = http.createServer((req, res)=>{
    createLog(req);
    res.setHeader('Content-Type', 'text/html');
    const route = req.url;
    const {pathname, query} = url.parse(route, true);
    console.log("\n✅ : query:", query?.id); //optional chaining

    switch(pathname){
        case '/':{
            sendHomepageResponse(req, res);
            return ;
        }
        case '/products':{
            sendProductsPageResponse(req, res);
            return ;
        }
        // case '/products/view':{
        //     sendProductsInfoPageResponse(req, res, query?.id);
        //     return ;
        // }
        case '/contact-us':{
            res.end('call me at 95039885322');
            return ;
        }
        default: {
            sendErrorResponse(req, res);
            return ;
        }
    }
});

app.listen(1400, ()=>{
    console.log('----------Server started on port 1400 ----------')
});