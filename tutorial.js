// This tutorial explains how to get up and running with Proskomma quickly.

// We will import a short sample document and we will perform a series of queries on said document.

// It is not the aim of this tutorial to provide a comprehensive overview of the ways in which Proskomma
// reads, parses, stores, represents, and edits texts that after importing USFM or USX formats. Rather the 
// aim is to show how you can query. To fully understand how Proskomma querying works, it will be necessary to 
// explain the basics of the Proskomma data model.

// In this tutorial you will create a javascript script called `tutorial.js` that we will gradually fill 
// with commands that are meaningful. 

// We will be running this file using `node tutorial.js. 

// This tutorial assumes that you have successfully installed Proskommma. If you have not, you could still run
// `npm init` and `npm install proskomma`

// Let's start by creating an empty file called `tutorial.js`

// First we need to load proskommma, assuming you have followed the installation instructions
// In the tutorial.js file, add the following line

const { Proskomma } = require('proskomma');

// We now have access to the module in our script. 

// Let's work with a short sample of the beginning of Genesis in unfoldingWord's ULT. 
// The one change to this document is that the `\` is doubled (it is escaped) in comparison
// to normal USFM. We did so in order to include it here as a sample, without having to worry about
// reading a document from the file system. Do not be distracted by the 
// double slash, your normal USFM documents do not need it. 
// Add the following to `tutorial.js`

const sample = `\\id GEN EN_ULT en_English_ltr unfoldingWord Literal Text Thu Jul 25 2019 09:33:56 GMT-0400 (EDT) tc
\\usfm 3.0
\\ide UTF-8
\\h Genesis
\\toc1 The Book of Genesis
\\toc2 Genesis
\\toc3 Gen
\\mt Genesis 

\\ts\\*
\\c 1
\\p
\\v 1 In the beginning, God created the heavens and the earth. 
\\v 2 The earth was without form and empty. Darkness was upon the surface of the deep. The Spirit of God was moving above the surface of the waters.

\\v 3 God said, “Let there be light,” and there was light.
\\v 4 God saw the light, that it was good. He divided the light from the darkness.
\\v 5 God called the light “day,” and the darkness he called “night.” This was evening and morning, the first day. 

\\p
\\v 6 God said, “Let there be an expanse between the waters, and let it divide the waters from the waters.”
\\v 7 God made the expanse and divided the waters which were under the expanse from the waters which were above the expanse. It was so.
\\v 8 God called the expanse “sky.” This was evening and morning, the second day.

\\p
\\v 9 God said, “Let the waters under the sky be gathered together to one place, and let the dry land appear.” It was so.
\\v 10 God called the dry land “earth,” and the gathered waters he called “seas.” He saw that it was good.

\\v 11 God said, “Let the earth sprout vegetation: plants yielding seed and fruit trees bearing fruit whose seed is in the fruit, each according to its own kind.” It was so.
\\v 12 The earth produced vegetation, plants producing seed after their kind, and trees bearing fruit whose seed was in it, after their kind. God saw that it was good.
\\v 13 This was evening and morning, the third day.

\\p
\\v 14 God said, “Let there be lights in the sky to divide the day from the night and let them be as signs, for seasons, for days and years.
\\v 15 Let them be lights in the sky to give light upon the earth.” It was so.

\\v 16 God made the two great lights, the greater light to rule the day, and the lesser light to rule the night. He made the stars also.
\\v 17 God set them in the sky to give light upon the earth,
\\v 18 to rule over the day and over the night, and to divide the light from the darkness. God saw that it was good.
\\v 19 This was evening and morning, the fourth day.

\\p
\\v 20 God said, “Let the waters be filled with great numbers of living creatures, and let birds fly above the earth in the expanse of the sky.”
\\v 21 God created the great sea creatures, as well as every living creature after its kind, creatures that move and which fill the waters everywhere, and every winged bird after its kind. God saw that it was good.

\\v 22 God blessed them, saying, “Be fruitful and multiply, and fill the waters in the seas. Let birds multiply on the earth.”
\\v 23 This was evening and morning, the fifth day.

\\p
\\v 24 God said, “Let the earth produce living creatures, each according to its own kind, livestock, creeping things, and beasts of the earth, each according to its own kind.” It was so.
\\v 25 God made the beasts of the earth after their kind, the livestock after their kinds, and everything that creeps upon the ground after its kind. He saw that it was good.

\\v 26 God said, “Let us make man in our image, after our likeness. Let them have dominion over the fish of the sea, over the birds of the sky, over the livestock, over all the earth, and over every creeping thing that creeps on the earth.” \\f + \\ft Some ancient manuscripts have \\fqa …Over the livestock, over all the animals of the earth, and over every creeping thing that creeps on the earth \\fqa* . \\f*
\\v 27 God created man in his own image. In his own image he created him. Male and female he created them.

\\v 28 God blessed them and said to them, “Be fruitful, and multiply. Fill the earth, and subdue it. Have dominion over the fish of the sea, over the birds of the sky, and over every living thing that moves upon the earth.”
\\v 29 God said, “See, I have given you every plant yielding seed which is upon the surface of all the earth, and every tree with fruit which has seed in it. They will be food to you.

\\v 30 To every beast of the earth, to every bird of the heavens, and to everything that creeps upon the earth, and to every creature that has the breath of life I have given every green plant for food.” It was so.
\\v 31 God saw everything that he had made. Behold, it was very good. This was evening and morning, the sixth day.

\\c 2
\\p
\\v 1 Then the heavens and the earth were finished, and all the living things that filled them.
\\v 2 On the seventh day God came to the end of his work which he had done, and so he rested on the seventh day from all his work.
\\v 3 God blessed the seventh day and sanctified it, because in it he rested from all his work which he had done in his creation.

\\p
\\v 4 These were the events concerning the heavens and the earth, when they were created, on the day that Yahweh God made the earth and the heavens.
\\v 5 No bush of the field was yet in the earth, and no plant of the field had yet sprouted, for Yahweh God had not caused it to rain upon the earth, and there was no man to cultivate the ground.
\\v 6 But a mist went up from the earth and watered the whole surface of the ground.
`

// If you log the sample itself to the console (`console.log(sample)`), it is clear that the double slashes are not actually
// part of the text.

// We now instantiate Proskomma into a `pk` variable. The abbreviation `pk` is often used as shorthand for Proskomma.

const pk = new Proskomma();

// We can now have a look at that instance, even before it contains any data:

console.log('Here is our instance of Proskomma, before importing any document')
console.log(pk)

// The output should look similar to what follows:

// Proskomma {
//     processorId: 'QKe5yV6qHZe6',
//     documents: {},
//     docSetsBySelector: {},
//     docSets: {},
//     filters: {},
//     customTags: {
//       heading: [],
//       paragraph: [],
//       char: [],
//       word: [],
//       intro: [],
//       introHeading: []
//     },
//     emptyBlocks: [],
//     selectors: [
//       { name: 'lang', type: 'string', regex: '[a-z]{3}' },
//       { name: 'abbr', type: 'string' }
//     ],
//     mutex: Mutex {
//       _semaphore: Semaphore { _maxConcurrency: 1, _queue: [], _value: 1 }
//     }
//   }

// `pk` has a processerId and two default selectors (being `lang` for language and `abbr` for the abbreviation).
// The selectors specify the docSets that are part of Proskomma, and not the actual documents.

// Often a docSets is a version of the Bible, and the documents are the books of said Bible.

// This instance of Proskomma (`pk`) does not contain any document set so far, so let
// us read the above sample and store it as a document.

// Proskomma has an importDocument function that can do this for us:

const pkDoc = pk.importDocument(
        selectors={lang: 'eng',  abbr: 'ult'},  // we need to give it some selectors so it can be retrieved
        contentType='usfm',                     // we need to provide it a contentType, this could also be `usx`, for instance
        content=sample,                         // we feed it the actual content, in this the `sample` defined above
      );

// Again, in practice, most of the time we would be reading the content from a file on the filesystem or the content of an http request, 
// but for this tutorial we'll simply work with a string as input.

// The `importDocument` has additional arguments we do not use right now (options, customTags, emptyBlocks, tags)

// Now we have imported a document in Proskomma, let's look at `pk` again:

console.log('Here is pk, now after importing a document')
console.log(pk);

// Proskomma {
//   processorId: 'FedDnnXSIWam',
//   documents: {
//     TGxAdND1GqiA: Document {
//       processor: [Circular *1],
//       docSetId: 'eng_ult',
//       baseSequenceTypes: [Object],
//       id: 'TGxAdND1GqiA',
//       filterOptions: {},
//       customTags: [Object],
//       emptyBlocks: [],
//       tags: Set(0) {},
//       headers: [Object],
//       mainId: 'evjC20YiIMaS',
//       sequences: [Object]
//     }
//   },
//   docSetsBySelector: { eng: { ult: [DocSet] } },
//   docSets: {
//     eng_ult: DocSet {
//       processor: [Circular *1],
//       preEnums: {},
//       enumIndexes: [Object],
//       docIds: [Array],
//       selectors: [Object],
//       id: 'eng_ult',
//       tags: Set(0) {},
//       enums: [Object]
//     }
//   },
//   filters: {},
//   customTags: {
//     heading: [],
//     paragraph: [],
//     char: [],
//     word: [],
//     intro: [],
//     introHeading: []
//   },
//   emptyBlocks: [],
//   selectors: [
//     { name: 'lang', type: 'string', regex: '[a-z]{3}' },
//     { name: 'abbr', type: 'string' }
//   ],
//   mutex: Mutex {
//     _semaphore: Semaphore { _maxConcurrency: 1, _queue: [], _value: 1 }
//   }
// }

// We now have a bit more information.
// Most importantly, we can see that Proskomma now contains a document
// and a docSet. The docSet is identified using the selectors we provided
// as we were reading the document as `eng_ult` 

// The pk object also has a number of methods that could be helpful when you
// need to access, for instance, the number of documents. The main way of interacting 
// with Proskomma, however, is not so much by handling the pk object itself, but rather
// by using the query interface that we will introduce later in this tutorial.

// docSets are combinations of documents. You can have multiple docSets in a Proskomma instance.

console.log('Here is more information on the document we read:')
console.log(pkDoc);

// Document {
//   processor: Proskomma {
//     processorId: '3jYqOOByHJXM',
//     documents: { 'Y7uSbLv.IUX3': [Circular *1] },
//     docSetsBySelector: { eng: [Object] },
//     docSets: { eng_ult: [DocSet] },
//     filters: {},
//     customTags: {
//       heading: [],
//       paragraph: [],
//       char: [],
//       word: [],
//       intro: [],
//       introHeading: []
//     },
//     emptyBlocks: [],
//     selectors: [ [Object], [Object] ],
//     mutex: Mutex { _semaphore: [Semaphore] }
//   },
//   docSetId: 'eng_ult',
//   baseSequenceTypes: {
//     main: '1',
//     introduction: '*',
//     introTitle: '?',
//     introEndTitle: '?',
//     title: '?',
//     endTitle: '?',
//     heading: '*',
//     header: '*',
//     remark: '*',
//     sidebar: '*'
//   },
//   id: 'Y7uSbLv.IUX3',
//   filterOptions: {},
//   customTags: {
//     heading: [],
//     paragraph: [],
//     char: [],
//     word: [],
//     intro: [],
//     introHeading: []
//   },
//   emptyBlocks: [],
//   tags: Set(0) {},
//   headers: {
//     id: 'GEN EN_ULT en_English_ltr unfoldingWord Literal Text Thu Jul 25 2019 09:33:56 GMT-0400 (EDT) tc',
//     bookCode: 'GEN',
//     usfm: '3.0',
//     ide: 'UTF-8',
//     h: 'Genesis',
//     toc: 'The Book of Genesis',
//     toc2: 'Genesis',
//     toc3: 'Gen'
//   },
//   mainId: '5YVuJg.FI6en',
//   sequences: {
//     '5YVuJg.FI6en': {
//       id: '5YVuJg.FI6en',
//       type: 'main',
//       tags: Set(0) {},
//       isBaseType: true,
//       blocks: [Array],
//       verseMapping: {},
//       chapterVerses: [Object],
//       tokensPresent: [Object],
//       chapters: [Object]
//     },
//     S9l6VpnzHWyB: {
//       id: 'S9l6VpnzHWyB',
//       type: 'title',
//       tags: Set(0) {},
//       isBaseType: true,
//       blocks: [Array]
//     },
//     OkULPDsdIKPQ: {
//       id: 'OkULPDsdIKPQ',
//       type: 'heading',
//       tags: Set(0) {},
//       isBaseType: true,
//       blocks: [Array]
//     },
//     ...
//     '1dNl7oDgGiuV': {
//       id: '1dNl7oDgGiuV',
//       type: 'footnote',
//       tags: Set(0) {},
//       isBaseType: false,
//       blocks: [Array]
//     },
//     mnIjb5TrF85g: {
//       id: 'mnIjb5TrF85g',
//       type: 'noteCaller',
//       tags: Set(0) {},
//       isBaseType: false,
//       blocks: [Array]
//     }
//   }
// }

// We can see the docSets that Proskomma now contains, which is only one:
// `docSets: { eng_ult: [DocSet] },`

// One of the key ideas behind Proskomma is the 'Sequence'.
// In our document we can already see that there are a number of `baseSequenceTypes`
// the most important one of which is automatically added: `main`.

// Proskomma has also parsed the header of our USFM file.

//   headers: {
//     id: 'GEN EN_ULT en_English_ltr unfoldingWord Literal Text Thu Jul 25 2019 09:33:56 GMT-0400 (EDT) tc',
//     bookCode: 'GEN',
//     usfm: '3.0',
//     ide: 'UTF-8',
//     h: 'Genesis',
//     toc: 'The Book of Genesis',
//     toc2: 'Genesis',
//     toc3: 'Gen'
//   }

// The title of a document is a special case, because it is parsed separately into a title sequence.

// Finally, we can see a list of sequences. We have removed the list of sequences above,
// but the basic idea is quickly clear: besides the main sequence, we also have 
// a title sequence, a heading sequence, and a footnote sequence, for instance.
// This corresponds to our sample document which indeed contains a footnote in 
// Genesis 1:26.

// Now that the data is loaded in Proskomma, it can be accessed using a GraphQL api.
// We will look at a number of simple examples, before explaining the basic building 
// blocks such as Sequence, Item, or Block that you might need to query Proskomma.

// A query is a string that matches the GraphQL definitions provided by Proskomma out of the box.

// Because Proskommma uses GraphQL, we will introduce some basic ideas that are needed to search for
// data using GraphQL. Here are a few basic ideas that underlie GraphQL. They might be just enough to get you
// through this tutorial. 

// - For GraphQL searches every field needs to be explicitly mentioned.
// - Rather than having a large series of API endpoints (as we could have in a REST api), there essentially is one api endpoint that allows
// the developer to access a wide range of data. Behind the scenes some of the work is done by different parts of the GraphQL implementation.
// Rather than performing multiple requests to get related data, a single request can contain multiple queries. Each one of these queries can be nested.
// For instance, the query `'{ docSets { id } }'` gets the docSets and for each docSet gets its id. 

// GraphQL queries can get quite complex, which is why a good understanding of the underlying api implementation is important. 
// What follows is a description of the query language that Proskomma uses and not its internals. 

// Proskomma has a method called `gqlQuery` which allows you to run a GraphQL query. 

// If you were to run a query without handling the fact that it yields a promise the result would be the following:
console.log(pk.gqlQuery('{ docSets { id } }'))

// Promise { <pending> }

// Remove the console.log() above. 

// Rather than getting the actual result we are getting a javascript Promise back. To fix this, let's 
// embed the query in an async function and get its result:

const queryPk = async function (query) {
  const result = await pk.gqlQuery(query);
  console.log(JSON.stringify(result, null, 2));  // we are converting the result to an indented string, in production code you'll want to work with an actual object
  }

// Using the above function, we can start querying Proskomma, using standard
// GraphQL queries 

// Let's get the ids of the docSets
queryPk('{ docSets { id } }')

// Because we only have a single docSet, the result is 

// {"data":{"docSets":[{"id":"eng_ult"}]}}

// Let's go through a series of queries that are intended to show how to get data out of Proskomma. We'll start with the simplest possible query.

queryPk('{ id }')

// This query is only for debugging purposes. It returns a unique id for your Proskomma instance, 
// for instance, in case you have multiple instances of Proskomma running. 

// GraphQL looks the way it does because FB borrowed an existing mechanism from Javascript - see 'Nested object and array destructuring': https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
// That is in essence what is happining with the query `{ id }`.

// Space separate multiple fields if you want to retrieve multiple ones
queryPk('{ processor packageVersion }')

// Generally, a docSet would be a Bible, and a document a book in that Bible
// But a docSet could be any collection of documents you choose.

// To get the count of number of Documents that were loaded in Proskomma, use `nDocuments`
// the `n` stands for 'the number of'
queryPk('{ nDocuments }')

// You can get multiple resources at the same time, so here you can get the number of documents
// and the number of docSets
queryPk('{ nDocuments nDocSets }')

// The information in Proskomma is structured in a tree-like way: docSets contain documents, which
// contain sequences, and each of these sequences contain blocks, and these blocks have a scope, and 
// they can contain grafts. 

// You can go down the tree either via documents or via docSets. These are the two entry points
queryPk('{ documents {id} }')
queryPk('{ docSets {id} }')

// You can go one level down as follows; to get the docSets id's, but also the id's of the documents it contains
queryPk('{ docSets { id documents { id } } }')

// And again you can obtain more data points at the same time, for instance by adding nDocuments at the same level as documents
queryPk('{ docSets { id nDocuments documents { id } } }')

// Curly braces take you one level down.

// Let's get the header for our sample document. 

// In this case we need to go three levels down: docSets -> documents -> headers
queryPk('{ docSets { id documents { id headers { key value } } } }')

// key and value are not the traditional key-value pairs you might think of, for instance, as in 
// a Python dictionary. They are keywords here. GraphQL needs you to specify every field, so if you do not
// know which exact part of the header you want, you can use `key value` to get all of them.
// so here key and value are the fields that you query for

// Alternatively, you could get a specific header
// header() here is a field that takes a compulsary argument
// which is why it has the round brackets.
queryPk('{ docSets { id documents { id header(id:"toc") } } }')

// As our query gets large, let's split it over multiple lines.
queryPk(`
  { docSets 
    { id 
      documents 
      { id 
        header(id:"toc") 
      } 
    } 
  }`)

// You can also get multiple headers, in this case you need rename the field (give it an alias)
// by adding a `alias:` before the name of the field. You are free to choose any name you like for your aliases.
// For instance, the `title` and `shortName` aliases below can easily be changed.
queryPk(`
  { docSets 
    { id 
      nDocuments
      documents 
      { id 
        title: header(id:"toc")      
        shortName: header(id:"toc2") 
    } 
    } 
  }
  `)

// you can also filter the docSets based on which book they contain (which is not helpful in our case, but
// it demonstrates the use)
queryPk(`
  { docSets(withBook: "GEN")
    { id 
      nDocuments
      documents 
      { id 
        title: header(id:"toc")      
        shortName: header(id:"toc2") 
    } 
    } 
  }
  `)

// If you were to have multiple documents in your docSet (unlike our simple example here)
// you could retreive the information for that specific book/document.
// Note how we are using `document` here and not `documents` in plural
queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { id 
      title: header(id:"toc")      
      shortName: header(id:"toc2") 
    } 
  } 
}
`)

// The next level down from documents is sequences
// A sequence is a flowing text. It is a text in its own right.
queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      sequences { id type }
    } 
  } 
}
`)

// The main sequence is the actual text of the Bible.
// All the other sequences are based on main. 

// Use WordLikes on the mainSequence to get its vocabulary.
queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      mainSequence { id type wordLikes tags }
    } 
  } 
}
`)

// Or check if the mainSequence has specific characters
queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      mainSequence { id type tags hasChars(chars: "God")}
    } 
  } 
}
`)

// There is only one mainSequence that contains the entire main text of a document.
// Other sequences, such as footnotes, form distinct sequences. Each footnote is its own sequence.
// In fact, each sequence can be as complex as needed, meaning it is 
// it's a tree in its own right. That means that it can contains its own complexity. 

// The next level in the tree are blocks
// Blocks are paragraphs in the USFM sense of that word, meaning they do not
// correspond to paragraphs in HTML or in a Word-processor. Almost everything is
// a paragraph in USFM, for instance, even the elements in the header of the file
// are considered paragraphs. Because almost everything is a paragraph in USFM, Proskomma
// calls these blocks and not paragraphs.

// We now have docSets -> documents -> sequences -> blocks

// A sequence is a list of blocks with metadata attached to it.
// To get all the sequences and for each sequence how many blocks it contains, run

queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      sequences { id type nBlocks }
    } 
  } 
}
`)

// For the mainSequence we can now get its blocks, and specifically the text of the paragraphs
// This is, finally, the way to retrieve the actual Biblical text we imported at the start of the 
// tutorial. 

// The mainSequence contains everything, but for footnotes, for instance, these are just pointers 
// to the actual footnotes

queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      mainSequence { 
        id type blocks { 
          text 
        } 
      }
    } 
  } 
}
`)

// You can get all blocks of all sequences
queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      sequences { 
        id type blocks {  
          text 
        } 
      }
    } 
  } 
}
`)

// You can also get a specific block in your result 
queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      mainSequence { id type blocks(positions: 0) { text } }
    } 
  } 
}
`)

// This is were things start to become slight more complex, but for a good reason.
// Retrieving the text of the Bible is a relatively trivial task. In comparison with other
// tools it might seem that the query above is quite elaborate just to retrieve the text. 
// The data model of Proskomma, however, makes it possible to get all the footnotes, sidebars, and extra
// information that is related to the main text. It also captures at any given point in the text
// in what scope one is and it allows to retrieve specific attributes for each token. We will unpack
// some of this functionality one step at a time.

// Now lets add two extra fields that show the potential of having both the text and all its
// related information in a single query interface.

// For each block we will retrieve two extra things: 1) its scope, and 2) its grafts. 

// Its scope is a way to retrieve where the block was found. In simple terms, scopes tell you where you are
// It is shortened as `bs` for blockScope.
// The last item in the following query gives us the following bs; the scope tells us what type of paragraph we're in.
// Alternative bs's could also be elements to indicate poetic language such as `\q1`.

queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      mainSequence { 
        id type blocks { 
          text 
          bs { payload }
        } 
      }
    } 
  } 
}
`)

// {
//   "text": "These were the events concerning the heavens and the earth, when they were created, on the day that Yahweh God made the earth and the heavens.No bush of the field was yet in the earth, and no plant of the field had yet sprouted, for Yahweh God had not caused it to rain upon the earth, and there was no man to cultivate the ground.But a mist went up from the earth and watered the whole surface of the ground.",
//   "bs": {
//     "payload": "blockTag/p"
//   },
//   "bg": []
// }

// The payload is an abstract concept that fits both scopes and grafts. 

// A graft is another sequence that is inserted at a specific point in the given block. Footnotes, for instance, 
// are grafts. But certain headings could also be seen as grafts.

// With both scopes and grafts, all the basic building blocks of the marked-up text are now available.

// The following query gives us access to a lot of information.

queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      mainSequence { 
        id type blocks { 
          text 
          bs { payload }
          bg { type subType payload }
        } 
      }
    } 
  } 
}
`)

// The first block in the result of this query is the following:

// {
//   "text": "In the beginning, God created the heavens and the earth. \nThe earth was without form and empty. Darkness was upon the surface of the deep. The Spirit of God was moving above the surface of the waters.",
//   "bs": {
//     "payload": "blockTag/p"
//   },
//   "bg": [
//     {
//       "type": "graft",
//       "subType": "title",
//       "payload": "1zjRW_8fGzal"
//     }
//   ]
// },

// We can learn multiple things from this result. Firstly, the result is not a single verse, but rather a full block paragraph. Secondly,
// the scope of this block is that of a `blockTag/p` meaning it is a paragraph indeed. Thirdly, it contains a block graft, 
// which in this case is a title. 

// There are two types of grafts in Proskomma: the block graft and the inline graft. The block graft is essentially a block that 
// is inserted before the block it is attached to: for instance, the title is a block graft. It is a way of saying 'insert this content here' where
// the content is a block in its own right. The inline graft is inserted at a given place *within* a block. One could think of the 
// inline graft as a `span` in html. Footnotes are inline grafts, for instance.

// We now have a lot of information and a hierarchy contains: docSets -> documents -> sequences -> blocks -> grafts and scopes

// There is one final thing we need to understand before ending this tutorial: a text is parsed into a smaller series of `items`. 
// Almost everything is an item, including the words, punctuation, and whitespace (later these three are referred to as tokens), but 
// also milestones, tags, and attributes. When you want to get access to these, there are two often used fields: tokens and items.

// As a text is parsed into words, punctuation, or whitespace, these elements can be accessed using the tokens field. 

// Let's use the tokens field to get the actual tokens of the first block of the main sequence using the positions field. 
// The positions field takes an array as input, but you can also specificy you only want the first element.

queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      mainSequence { 
        id type blocks(positions: 0) {  
          tokens { type subType payload}
        } 
      }
    } 
  } 
}
`)

// {
//   "data": {
//     "docSets": [
//       {
//         "document": {
//           "title": "The Book of Genesis",
//           "mainSequence": {
//             "id": "4L..9YzMFja4",
//             "type": "main",
//             "blocks": [
//               {
//                 "tokens": [
//                   {
//                     "type": "token",
//                     "subType": "wordLike",
//                     "payload": "In"
//                   },
//                   {
//                     "type": "token",
//                     "subType": "lineSpace",
//                     "payload": " "
//                   },
//                   {
//                     "type": "token",
//                     "subType": "wordLike",
//                     "payload": "the"
//                   },
//                   {
//                     "type": "token",
//                     "subType": "lineSpace",
//                     "payload": " "
//                   },
//                   {
//                     "type": "token",
//                     "subType": "wordLike",
//                     "payload": "beginning"
//                   },
//                   {
//                     "type": "token",
//                     "subType": "punctuation",
//                     "payload": ","
//                   },
//                   ... [ result truncated ]

// We can see in the result above that the phrase 'In the beginning,' which starts our sample text,
// is parsed into wordLike, lineSpace, and punctuation tokens. 

// If you want to get not only the tokens, but also the grafts and their scopes, use `items` rather than
// `tokens`. Items get you even more information.

queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      sequences { 
        id type blocks(positions:0) {  
          items { type subType payload}
        } 
      }
    } 
  } 
}
`)

// If tokens have attributes, these attributes are encoded as scopes. This might seem a bit counter-intuitive,
// but it makes sense: a token can have multiple scopes, and hence multiple attributes. Our sample document
// does not contain a lot of attributes (such as lemma or morphology in certain source texts), so this is left
// for further exploration.
// Note the `scopes` and `position` fields.

queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      sequences { 
        id type blocks {  
          tokens { payload scopes position }
        } 
      }
    } 
  } 
}
`)

// It is also possible to filter on an attribute:

queryPk(`
{ docSets
  { 
    document(bookCode:"GEN")
    { title: header(id:"toc")      
      sequences { 
        id type blocks {  
          tokens { payload scopes(startsWith: "verse/") position }
        } 
      }
    } 
  } 
}
`)

// Where to go from here?
// - Read the docs
// - Study the GraphQL endpoint and its automatically generated documentation
// - Ask a question as a Github issue
// - Learn about the Chapter Verse Index which allows quick navigation based on chapter and verse (and not paragraph)
// - Become a sponsor