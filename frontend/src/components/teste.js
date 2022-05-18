const a = [{id: '9bs3ao37', name: 'base p teste 2...(1).csv', connection: 'Socket2', sendStatus: true},
 {id: 'yzirs4', name: 'WhatsApp Image...1).jpeg', connection: 'Socket2', sendStatus: true},
 {id: '8o7drvtg', name: 'base p teste -...pia.csv', connection: 'Socket2', sendStatus: true},
 {id: '6a404u91', name: 'base p teste - 01.csv', connection: 'Socket2', sendStatus: true}]

const newa = a.map((item,i) => {index: i, item}).find(load => {console.log(load)})
console.log(newa)