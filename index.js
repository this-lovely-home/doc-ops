const PDFDocument = require('pdfkit')
const fs = require('fs')

// Create a document
const doc = new PDFDocument()

const FILE_NAME = 'output.pdf'
const QUOTE_SET = require('./fixtures/initial-quotes')

// console.log(QUOTE_SET)
// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream(FILE_NAME))

doc
  // .font('fonts/Rockwell.ttf')
  .fontSize(45)
  .text('ThisLovelyHome', 100, 50)

// Embed a font, set the font size, and render some text
// Set Defaulkt Title page
doc
  // .font('fonts/Rockwell.ttf')
  .fontSize(25)
  .text('Learning Inspiration Quotes Set 1', 100, 200)

// -- Example for an image
// Add an image, constrain it to a given size, and center it vertically and horizontally
/*
doc.image('path/to/image.png', {
  fit: [250, 300],
  align: 'center',
  valign: 'center'
}) */

function renderSimplePage (quote = 'not provided', person = '') {
  // heightOfString
  // Add another page
  doc
    .addPage()

  const characterCountQuote = quote.length
  console.log('----')
  console.log(quote)
  console.log('-Count: ', characterCountQuote)
  console.log('')
  doc
    // .font('assets/PetitFormalScript-Regular.ttf')
    .font('Helvetica')
    .fontSize(20)
    .text(quote, 100, 50)

  doc.font('Helvetica')
    .moveDown(0.8)
    .fontSize(14)
    .fillColor('#444')
    .text('- ' + person)
  // doc.circle(280, 200, 50).fill('#6600FF')
  let quoteBoxYOffSet = 0
  if (characterCountQuote > 115) {
    quoteBoxYOffSet = 50
  } else if (characterCountQuote > 90) {
    quoteBoxYOffSet = 30
  }

  // Where we start drawing our line -- our initial margin
  const baseLineSet = 40
  const lineLength = 570
  const drkGrey = '#333'
  const lghtGrey = '#888'
  // Draw somthing somehere
  doc
    .save()
  // x0, y50//
    .moveTo(baseLineSet, 200 + quoteBoxYOffSet)
  // draw drashed lined to x:400, y0
    .lineTo(lineLength, 200 + quoteBoxYOffSet)
    .stroke('#333')

  // Draw somthing somehere
  doc
    .save()
  // x0, y50//
    .moveTo(baseLineSet, 250 + quoteBoxYOffSet)
  // draw drashed lined to x:400, y0
    .lineTo(lineLength, 250 + quoteBoxYOffSet)
    .stroke(lghtGrey)

  // Draw somthing somehere
  doc
    .save()
  // x0, y50//
    .moveTo(baseLineSet, 300 + quoteBoxYOffSet)
  // draw drashed lined to x:400, y0
    .lineTo(lineLength, 300 + quoteBoxYOffSet).undash()
    .stroke('#333')

  // Draw somthing somehere
  doc
    .save()
  // x0, y50//
    .moveTo(baseLineSet, 350 + quoteBoxYOffSet)
  // draw drashed lined to x:400, y0
    .lineTo(lineLength, 350 + quoteBoxYOffSet).undash()
    .stroke(lghtGrey)

  doc
    .save()
  // x0, y50//
    .moveTo(baseLineSet, 400 + quoteBoxYOffSet)
  // draw drashed lined to x:400, y0
    .lineTo(lineLength, 400 + quoteBoxYOffSet).undash()
    .stroke('#333')

  doc
    .save()
  // x0, y50//
    .moveTo(baseLineSet, 450 + quoteBoxYOffSet)
  // draw drashed lined to x:400, y0
    .lineTo(lineLength, 450 + quoteBoxYOffSet).undash()
    .stroke(lghtGrey)

  doc
    .save()
  // x0, y50//
    .moveTo(baseLineSet, 500 + quoteBoxYOffSet)
  // draw drashed lined to x:400, y0
    .lineTo(lineLength, 500 + quoteBoxYOffSet).undash()
    .stroke('#333')
}

// renderSimplePage(QUOTE_SET[0].quote)

QUOTE_SET.forEach(element => {
  renderSimplePage(element.quote, element.person)
})

// Add some text with annotations
/*
doc
  .addPage()
  .fillColor('blue')
  .text('Here is a link!', 100, 100)
  .underline(100, 100, 160, 27, { color: '#0000FF' })
  .link(100, 100, 160, 27, 'http://google.com/')
*/
// Finalize PDF file
try {
  doc.end()
  console.log(`Saved file: ${FILE_NAME}`)
} catch (err) {
  console.log('Exception:', err)
}
