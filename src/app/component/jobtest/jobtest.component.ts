import { Component, OnInit, AfterViewChecked } from '@angular/core';
import * as pruebas from 'src/assets/js/test.js';
import * as peter from 'src/assets/js/peter.js';
import { SyntaxHighlightingService } from 'src/app/syntax-highlighting.service';

@Component({
  selector: 'app-jobtest',
  templateUrl: './jobtest.component.html',
  styleUrls: ['./jobtest.component.css']
})
export class JobtestComponent implements OnInit, AfterViewChecked {

  blogPost: JobtestComponent;
  highlighted: boolean = false;
  panelOpenState = false;

  title = 'portfolio';
  
  cal1= `
  class Calculation {
    constructor() {
        this._symbols = {};
        this.defineOperator("!", this.factorial, "postfix", 6);
        this.defineOperator("^", Math.pow, "infix", 5, true);
        this.defineOperator("*", this.multiplication, "infix", 4);
        this.defineOperator("/", this.division, "infix", 4);
        this.defineOperator("+", this.last, "prefix", 3);
        this.defineOperator("-", this.negation, "prefix", 3);
        this.defineOperator("+", this.addition, "infix", 2);
        this.defineOperator("-", this.subtraction, "infix", 2);
        this.defineOperator(",", Array.of, "infix", 1);
        this.defineOperator("(", this.last, "prefix");
        this.defineOperator(")", null, "postfix");
        this.defineOperator("min", Math.min);
        this.defineOperator("sqrt", Math.sqrt);
    }`;

  cal2=`
  defineOperator(symbol, f, notation = "func", precedence = 0, rightToLeft = false) {

    if (notation === "func") precedence = 0;
    this._symbols[symbol] = Object.assign({}, this._symbols[symbol], {
        [notation]: {
            symbol,
            f,
            notation,
            precedence,
            rightToLeft,
            argCount: 1 + (notation === "infix")
        },
        symbol,
        regSymbol: symbol.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&') +
            (/\w$/.test(symbol) ? "\\b" : "") // agregamos un break 
    });
  }`;
  cal3=`
  last(...a) { return a[a.length - 1] }
  negation(a) { return -a }
  addition(a, b) { return a + b }
  subtraction(a, b) { return a - b }
  multiplication(a, b) { return a * b }
  division(a, b) { return a / b }
  factorial(a) {
      if (a % 1 || !(+a >= 0)) return NaN
      if (a > 170) return Infinity;
      let b = 1;
      while (a > 1) b *= a--;
      return b;
  }`;
  cal4=`
  calculate(expression) {
    let match;
    const values = [],
        operators = [this._symbols["("].prefix],
        exec = _ => {
            let op = operators.pop();
            values.push(op.f(...[].concat(...values.splice(-op.argCount))));
            return op.precedence;
        },
        error = msg => {
            let notation = match ? match.index : expression.length;
            return //here add sentence ;
        },
        pattern = new RegExp(
            // Pattern for numbers
            "\\d+(?:\\.\\d+)?|" 
            // ...and patterns for individual operators/function names
            + Object.values(this._symbols)
                    // longer symbols should be listed first
                    .sort( (a, b) => b.symbol.length - a.symbol.length ) 
                    .map( val => val.regSymbol ).join('|')
            + "|(\\S)", "g"
        );
    let afterValue = false;
    pattern.lastIndex = 0; // Reset regular expression object
    do {
        match = pattern.exec(expression);
        const [token, bad] = match || [")", undefined],
            notNumber = this._symbols[token],
            notNewValue = notNumber && !notNumber.prefix && !notNumber.func,
            notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix;
        // Check for syntax errors:
        if (bad || (afterValue ? notAfterValue : notNewValue)) return error("Syntax error");
        if (afterValue) {
            // We either have an infix or postfix operator (they should be mutually exclusive)
            const curr = notNumber.postfix || notNumber.infix;
            do {
                const prev = operators[operators.length-1];
                if (((curr.precedence - prev.precedence) || prev.rightToLeft) > 0) break; 
                // Apply previous operator, since it has precedence over current one
            } while (exec()); // Exit loop after executing an opening parenthesis or function
            afterValue = curr.notation === "postfix";
            if (curr.symbol !== ")") {
                operators.push(curr);
                // Postfix always has precedence over any operator that follows after it
                if (afterValue) exec();
            }
        } else if (notNumber) { // prefix operator or function
            operators.push(notNumber.prefix || notNumber.func);
            if (notNumber.func) { // Require an opening parenthesis
                match = pattern.exec(expression);
                if (!match || match[0] !== "(") return error("Function needs parentheses")
            }
        } else { // number
            values.push(+token);
            afterValue = true;
        }
    } while (match && operators.length);
    return operators.length ? error("Missing closing parenthesis")
            : match ? error("Too many closing parentheses")
            : values.pop() // All done!
   }
  }`;
  cal5=`
  Calculation = new Calculation(); // Create a singleton

  // I/O handling
  function perform() {
      const expr = document.getElementById('expr').value,
          result = Calculation.calculate(expr);
      document.getElementById('out').textContent = isNaN(result) ? result : '=' + result;
  }
  document.getElementById('expr').addEventListener('input', perform);
  perform();`;
  cal6=`
  // Tests
  const tests = [
      { expr: '1+2', expected: 3 },
      { expr: '1+2*3', expected: 7 },
      { expr: '1+2*3^2', expected: 19 },
      { expr: '1+2*2^3^2', expected: 1025 },
      { expr: '-3!', expected: -6 },
      { expr: '12---11+1-3', expected: -1 },
      { expr: 'min(2,1,3)', expected: 1 },
      { expr: '(2,1,3)', expected: 3 },
      { expr: '4-min(sqrt(2+2*7),9,5)', expected: 0 },
      { expr: '2,3,10', expected: 10 }
  ]
  
  for (let {expr, expected} of tests) {
      let result = Calculation.calculate(expr);
      console.assert(result === expected, // Again we add here sentence
  }`;
  cal7=`
  #expr { width: 100%; font-family: monospace }`;
  cal8=`
  Expression: <input id="expr" placeholder="min(-1,0)+((sqrt(16)+(-4+7)!*---4)/2)^2^3"><p>
  <pre id="out"></pre>`;

  peter= ` 
  let entrada = document.getElementById('entrada');
  let n = [];


  function solution(n) {
      n.push(entrada.value); //we push the value entry to the array created

      let s = '${'n'}'; //we add the full expresion here
      let r = s;
      let sameN = 0;
      for (let i = 1; i < s.length; i++) { //we create a for with an if inside to interate based on the entry
          if (s[i - 1] == s[i]) {
              sameN++; 
          }
          if (s[i - 1] < s[i]) {
              sameN = 0;
          }
          if (s[i - 1] > s[i]) {
              let d = parseInt(s[i - 1]);
              d -= 1;
              if (s[i] == 0) {
                  r = s.substring(0, i - 1 - sameN) + d + "".padEnd(s.length - i + sameN, 9); 
              } else {
                  r = s.substring(0, i - 1 - sameN) + d + "".padEnd(s.length - i + sameN, 9); //we repeat the sentence to force the output as we want 
              }
              break;
          }

      }
      console.log("output " + r);
      return parseInt(r) 


  }`;

  scrapper=`
  const puppeteer = require('puppeteer'); // first we create the constant with the puppeteer

  async function scrapeChannel(url) {  //we create an async function with a parameter
      const browser = await puppeteer.launch(); //we call the puppeteer on a const
      const page = await browser.newPage(); // we add it to a page const with the await 
      await page.goto(url); //the we send it to the parameter in this case the url
  
      // now the following const called [el] is using the Xpath to capture the element we want to  gather the information, 
      // then we paste the xpath in inside $x()

      const [el] = await page.$x('/html/body/ytd-app/div/ytd-page-manager/ytd-browse/div[3]/ytd-c4-tabbed-header-renderer/app-header-layout/div/app-header/div[2]/div[2]/div/div[1]/div/div[1]/ytd-channel-name/div/div/yt-formatted-string');
      const text = await el.getProperty('textContent'); // we specify the type of xpath (text, src(image), etc)
      const name = await text.jsonValue(); //add it as a json
  
      // we repeat the process but changing the property of the xpath instead of text to src ( image)
      const [el2] = await page.$x('//*[@id="img"]');
      const src = await el2.getProperty('src');
      const avatarURL = await src.jsonValue();
  
      browser.close(); // we tell the puppeteer to close 
  
      console.log({ name, avatarURL });
  
  
      return { name, avatarURL } and we return the info gathered
  }
  
  module.exports = { //at last we export our function
      scrapeChannel
  }`;

  db=`
  const typeorm = require('typeorm'); //we call the typeorm to handle the mysql database

    class Creator { //we create our class for the information in this case will be a table 

    constructor(id, name, img, ytURL) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.ytURL = ytURL;
    }



    }

    const EntitySchema = require("typeorm").EntitySchema; //we add our Schema

    const CreatorSchema = new EntitySchema({ //Then  we combine the Schema to work with our class assining the type of column
        name: "Creator",
        target: Creator,
        columns: {
            id: {
                primary: true,
                type: "int",
                generated: true
            },
            name: {
                type: "varchar"
            },
            img: {
                type: "text"
            },
            ytURL: {
                type: "text"
            }
        }
    });

    async function getConnection() { //we create the connection to our database
        return await typeorm.createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "webscraper",
            synchronize: true,
            logging: false,
            entities: [
                CreatorSchema
            ]
        })
    }

    async function getAllCreators() { //we make the get function to our database 
        const connection = await getConnection();
        const creatoRepo = connection.getRepository(Creator);
        const creators = await creatoRepo.find();
        connection.close();
        return creators;
    }

    async function instertCreator(name, img, ytURL) { //our function to create and save in our database
        const connection = await getConnection();

        //create
        const creator = new Creator();
        creator.name = name;
        creator.img = img;
        creator.ytURL = ytURL;
        //save
        const creatorRepo = connection.getRepository(Creator);
        const res = await creatorRepo.save(creator);
        console.log('guardado', res);

        //return to the list
        const allCreators = await creatorRepo.find();
        connection.close();
        return allCreators;



    }


    module.exports = {
        getAllCreators,
        instertCreator
    }`;

    indexscra=`
    const express = require('express')
    const app = express()
    const port = 3000
    const bodyParser = require('body-parser');
    const scrapers = require('./scrapers');
    const db = require('./db');


    app.use(bodyParser.json())
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/creators', async(req, res) => {
        const creators = await db.getAllCreators();
        res.send(creators)

    })


    app.post('/creators', async(req, res) => {
        console.log(req.body)
        const channelData = await scrapers.scrapeChannel(req.body.channelURL)
        const creators = db.instertCreator(channelData.name, channelData.avatarURL, req.body.channelURL)

        res.send(creators)

    })



    app.listen(port, () => {
        console.log( )//we add here the above expression 
    })`;
    htmlscraper=`
        <style>
        .container {
            display: flex;
        }
        
        .card {
            margin: 20px;
            padding: 20px;
            border: 1px solid black;
        }
    </style>
    <h1>Setuptourist</h1>
    <h4>Add a new creator</h4>
    <input class="channel-input" type="text" placeholder="Add your YouTube Url">
    <button type="submit" onclick="submitChannel()">Submit</button>
    <div class="container"></div>





    <script>
        function submitChannel() {
            const channelURL = document.querySelector('.channel-input').value; //to send the info
            fetch('http://localhost:3000/creators', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    channelURL
                })
            })

        }

        function newEl(type, attrs = {}) {
            const el = document.createElement(type);
            for (let attr in attrs) {
                const value = attrs[attr];
                if (attr == 'innerText') el.innerText = value;
                else el.setAttribute(attr, value);

            }
            return el;
        }

        async function loadcreators() {
            const res = await fetch('http://localhost:3000/creators');
            const creators = await res.json();

            const ctr = document.querySelector('.container');

            creators.forEach(creators => {
                const card = newEl('div', {
                    class: 'card'
                });
                const title = newEl('h4', {
                    innerText: creators.name
                });
                const img = newEl('img', {
                    src: creators.img
                });
                img.style.width = '100px';


                card.appendChild(title);
                card.appendChild(img);
                ctr.appendChild(card);

            })
        }

        loadcreators();
    </script>`;

    men1=`
    // lets go creating everything one time,this is not the way but is for keeping it short.
    // first we call what we need thats express, bodyparse moongose from our db file and dotenv
    const express = require('express'); 
    const app = express();
    const bodyParser = require('body-parser');
    const { mongoose } = require('./database/db');
    require('dotenv').config()
    
    /* we load the class from a model file, also we are going to create it later*/
    const { Documento } = require('./database/model');
    
    
    // we load the middlewares
    app.use(bodyParser.json());
    
    
    // CORS middleware
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    
    
    /**
     * 
     * Get list /list
     * purpose: get all list
     * 
     */
    app.get('/list', (req , res ) => {
      // regresar el array con todas las listas
      Documento.find({}).then((documento)=> {
          res.send(documento);
      });
    });
    
    /**
     * 
     * Post /list
     * to send the information
     */
    
    app.post('/list', (req , res ) => {
      // create and return info with the respective ID then it goes to a json
      let titulo = req.body.titulo;
    
      let newTitulo = new Documento ({
        titulo
      });
      newTitulo.save().then((listDoc) =>{
    
        res.send(listDoc);
      })
    });
    
    
    /**
     * get update
     * to refresh the list
     * 
     */
    app.patch('/list/:id', (req , res ) => {
      // to update the list with new values 
      Documento.findByIdAndUpdate({ _id: req.params.id},{
        $set: req.body
      }).then(() => {
        res.sendStatus(200);
      });
    });
    
    
    /**
     * Get delete
     * for deleting entries
     */
    app.delete('/list/:id', (req , res) => {
    //here is for deleting what we desire
      Documento.findByIdAndRemove({
        _id: req.params.id
      }).then((removelistDoc) => {
        res.send(removelistDoc);
      })
    });
    
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log("servidor escuchando en 8000");
    });`;

    men2=`
    const { Module } = require('module'); //this const will allow us to use modules 
    const mongoose = require('mongoose'); // we call mongoose to work with mongo databes
    const { Documento } = require('./model/documentos'); // we call the class schema we are going to fill with information
    
    //we are going to create our mongodb connection
    mongoose.Promise = global.Promise;
    //NOW when we add the mongo link we are going to make an "process.env.MONGODB_URI with ||" to bind the db link into a enviorment const to allow the deploy 
    mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://user:pass@nameofcluster.ea9vu.mongodb.net/fnad?retryWrites=true&w=majority', {useNewUrlParser: true})
      .then(() => { console.log('se conecto a la base de datos');
      }).catch((e) =>{ console.log(" Error al conectarse a la base de datos");
      console.log(e);
      });
    
      // these are to avoid warning from mongoose
    
      mongoose.set('useCreateIndex', true);
      mongoose.set('useFindAndModify', false);
    
      //then we export it
      module.exports = {
        mongoose
      };`;

      men3=`
      const mongoose = require('mongoose'); 
      const DocumentoSchema = mongoose.Schema({ //we create our Schema for mongoose  defining by type and length
          tema: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          },
          autor: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          },
          ano: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          },
          titulo: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          },
          nomRevista: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          },
          editora: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          },
          volumen: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          },
          doi: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          },
          fnad: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          },
          enlace: {
            type: String,
            require: true,
            minlength:1,
            trim:true
          }
        
      
      });
      
      const Documento = mongoose.model('Documento', DocumentoSchema); // we create a const with our schema and alias
      
      module.exports 
      = { Documento } //then we export it
      `;
  constructor(private readonly _syntaxHighlighter: SyntaxHighlightingService) { }

  ngAfterViewChecked() {
    if (this.blogPost && !this.highlighted) {
      this._syntaxHighlighter.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit(): void {
    
  }

 
ch(){
  pruebas.check();
  
}

pet(){
    peter.result();
}

  


}
