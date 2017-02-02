// Helper script for building codes.json

const Xray = require('x-ray')
const x = Xray()
const fs = require('fs')

x(
  'https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set.html',
  {
    lines: x('tr', [{
      code: 'th',
      fields: ['td']
    }])
  }
)((err, data) => {
  fs.writeFileSync('codes.json', JSON.stringify(data.lines
    // Remove header (no fields)
    .filter(line => line.fields.length)
    // Remove unassigned lines
    .filter(line => line.fields[0].indexOf('Unassigned') < 0)
    // Remove line breaks and create array structure
    .map(line => ({
      placeOfServiceCode: line.code.trim(),
      placeOfServiceName: line.fields[0].replace(/[/\n]/gm, ' ').replace(/\*/g, '').trim(),
      placeOfServiceDescription: line.fields[1].replace(/[/\n]/gm, ' ').trim()
    })), null, 4))
})
